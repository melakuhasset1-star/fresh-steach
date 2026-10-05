import { VoxideClient, VoxideWidget } from '@voxide/react';

const sectionIds = ['top', 'how-it-works', 'what-we-check', 'care', 'download'] as const;
type SectionId = typeof sectionIds[number];

const ai = new VoxideClient({
  publicKey: 'vox_pub_5c248e36b32635ed48bdd72807fd7ec3ec85327dcd11a50e',
  language: 'en-US',
  ui: { accentColor: '#ffe500', position: 'bottom-right', theme: 'dark', title: 'LifePatch voice' },
});

const scrollToSection = (section: string): { status: string; section?: string } => {
  const normalized = section.toLowerCase().replace(/^#/, '') as SectionId;
  if (!sectionIds.includes(normalized)) return { status: 'That section is not available.' };
  window.location.hash = normalized;
  document.getElementById(normalized)?.scrollIntoView({ behavior: 'smooth' });
  return { status: 'ok', section: normalized };
};

ai.register({
  goToSection: {
    description: 'Move to a section of the LifePatch page: top, how it works, what we check, care, or download.',
    params: { section: { type: 'string', required: true } },
    handler: async (args: Record<string, unknown>) => scrollToSection(String(args.section)),
  },
  chooseHealthCheck: {
    description: 'Show a specific health signal in the What do you want to know section: glucose, cholesterol, or creatine.',
    params: { check: { type: 'string', required: true } },
    handler: async (args: Record<string, unknown>) => {
      const normalized = String(args.check).toLowerCase().trim();
      const availableChecks = ['glucose', 'cholesterol', 'creatine'];
      if (!availableChecks.includes(normalized)) return { status: 'That health check is not available.' };
      window.dispatchEvent(new CustomEvent('lifepatch:select-check', { detail: normalized }));
      document.getElementById('what-we-check')?.scrollIntoView({ behavior: 'smooth' });
      return { status: 'ok', selectedCheck: normalized };
    },
  },
  openCareCompanion: {
    description: 'Open the LifePatch care companion so the visitor can start a check-in.',
    handler: async () => {
      window.dispatchEvent(new Event('lifepatch:open-care'));
      return { status: 'ok' };
    },
  },
});

ai.bindState(() => ({
  currentSection: typeof location !== 'undefined' ? location.hash.replace('#', '') || 'top' : 'top',
  selectedHealthCheck: typeof document !== 'undefined'
    ? document.querySelector('.check-item.active strong')?.textContent ?? 'Glucose'
    : 'Glucose',
}));

export function Assistant() {
  return <VoxideWidget client={ai} />;
}
