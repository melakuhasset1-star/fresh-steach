import { useState } from 'react';
import {
  ArrowUpRight,
  CircleHelp,
  Download,
  HeartPulse,
  MessageCircle,
  QrCode,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  X,
  Zap,
} from 'lucide-react';

const womanImage = '/Screenshot_2026-09-29_220305.png';
const seniorImage = 'https://images.pexels.com/photos/28278106/pexels-photo-28278106.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1500';

const checks = [
  { name: 'Glucose', detail: 'See your levels without the finger prick.', color: 'yellow' },
  { name: 'Cholesterol', detail: 'A clearer view of your heart health.', color: 'blue' },
  { name: 'Urea', detail: 'Stay informed about kidney wellness.', color: 'coral' },
];

function App() {
  const [activeCheck, setActiveCheck] = useState(0);
  const [showAssistant, setShowAssistant] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <main className="site-shell">
      <nav className="nav container">
        <a className="brand" href="#top" aria-label="LifePatch home">
          <img className="brand-image" src="/Screenshot_2026-09-29_192259.png" alt="LifePatch" />
        </a>
        <div className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#what-we-check">What we check</a>
          <a href="#care">Our care</a>
        </div>
        <a className="nav-cta" href="#download">Get the app <ArrowUpRight size={16} /></a>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> Wearable health intelligence</div>
          <h1>Health checks,<br /><em>without the stress.</em></h1>
          <p className="hero-text">LifePatch is a discreet wearable concept designed to make everyday health monitoring simple, comfortable, and easy to understand.</p>
          <div className="hero-actions">
            <a className="button button-yellow" href="#what-we-check">See what it tracks <ArrowUpRight size={18} /></a>
            <a className="button button-outline" href="#how-it-works">How it works <ArrowUpRight size={18} /></a>
          </div>
          <div className="trust-row"><span><ShieldCheck size={17} /> Comfort-first</span><span><ShieldCheck size={17} /> Real-time guidance</span><span><ShieldCheck size={17} /> Privacy-minded</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-card hero-card-top"><Zap size={15} fill="currentColor" /> Live insights</div>
          <div className="woman-frame"><img src={womanImage} alt="Woman wearing the LifePatch device on her upper arm" /></div>
          <div className="hero-caption"><span>01</span><strong>Made for busy lives</strong><span className="caption-line" /></div>
          <div className="vital-card"><div className="vital-head"><span><span className="live-dot" /> Live now</span><HeartPulse size={16} /></div><div className="vital-number">94 <small>mg/dL</small></div><div className="chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="vital-foot"><span>Glucose</span><b>in range</b></div></div>
        </div>
      </section>

      <section className="ticker"><div className="ticker-track"><span>Small patch. Bigger tomorrows.</span><span className="ticker-dot">✦</span><span>Stay close to what matters.</span><span className="ticker-dot">✦</span><span>Small patch. Bigger tomorrows.</span><span className="ticker-dot">✦</span><span>Stay close to what matters.</span></div></section>

      <section className="story section container" id="how-it-works">
        <div className="section-label">The everyday difference <span>02 / 05</span></div>
        <div className="story-grid">
          <div className="story-title"><p className="kicker">Health checks, reimagined.</p><h2>From skin<br />to <em>screen.</em></h2></div>
          <div className="story-body"><p>Traditional health checks ask you to stop your life. LifePatch fits into it.</p><p>Our soft, wearable patch uses tiny micro-sensors to gently gather insights and send them to your phone — no needles, no long waits, no guessing.</p><a className="round-link" href="#what-we-check"><ArrowUpRight size={20} /></a></div>
        </div>
        <div className="chip-panel"><div className="chip-copy"><span className="kicker">Inside the patch</span><strong>Small sensors.<br /><em>Big insight.</em></strong><p>Micro-sensors quietly collect the signals your body is sending and translate them into useful information on your phone.</p></div></div>
        <div className="process-row">
          <div className="process-step"><span>01</span><div className="process-icon"><ScanLine /></div><h3>Apply</h3><p>Place your patch comfortably on your skin.</p></div>
          <div className="process-connector" />
          <div className="process-step"><span>02</span><div className="process-icon"><QrCode /></div><h3>Scan</h3><p>Scan the QR code in the LifePatch app.</p></div>
          <div className="process-connector" />
          <div className="process-step"><span>03</span><div className="process-icon"><HeartPulse /></div><h3>Understand</h3><p>Receive calm, clear insights in real time.</p></div>
        </div>
      </section>

      <section className="checks section" id="what-we-check">
        <div className="container">
          <div className="section-label light">The signals that tell your story <span>03 / 05</span></div>
          <div className="checks-heading"><div><p className="kicker">A fuller picture of you.</p><h2>What do you<br /><em>want to know?</em></h2></div><p>Choose the insight you want to explore. LifePatch brings the important stuff closer, in language that makes sense.</p></div>
          <div className="check-layout">
            <div className="check-list">{checks.map((check, index) => <button key={check.name} className={`check-item ${activeCheck === index ? 'active' : ''}`} onClick={() => setActiveCheck(index)}><span className={`check-number ${check.color}`}>0{index + 1}</span><span><strong>{check.name}</strong><small>{check.detail}</small></span><ArrowUpRight size={19} /></button>)}</div>
            <div className="check-display"><div className="display-orb" /><HeartPulse className="display-pulse" size={100} strokeWidth={1} /><div className="display-label"><span>LifePatch signal</span><strong>{checks[activeCheck].name}</strong><small>Monitoring gently in the background</small></div><div className="display-wave"><i /><i /><i /><i /><i /><i /><i /></div></div>
          </div>
        </div>
      </section>

      <section className="care section container" id="care">
        <div className="care-image"><img src={seniorImage} alt="Smiling older woman enjoying a sunny day" /><div className="care-sticker"><HeartPulse size={20} /><strong>We care<br /><em>with you.</em></strong></div></div>
        <div className="care-copy"><div className="section-label"><span>04 / 05</span></div><p className="kicker">Not a replacement. A companion.</p><h2>More support<br />for <em>real life.</em></h2><p>LifePatch is here to make everyday health feel less overwhelming — not to replace your doctor. Our AI companion can help you understand your results, prepare questions, and keep you on track.</p><div className="care-points"><div><Users size={18} /><span>One-to-one AI check-ins</span></div><div><Stethoscope size={18} /><span>Hospital care is always recommended when needed</span></div><div><CircleHelp size={18} /><span>Simple answers, without the jargon</span></div></div><button className="button button-outline" onClick={() => setShowAssistant(true)}>Meet your care companion <MessageCircle size={17} /></button></div>
      </section>

      <section className="download section" id="download"><div className="download-noise" /><div className="container download-inner"><div><div className="section-label light"><span>05 / 05</span></div><p className="kicker">Your next step is simple.</p><h2>Scan. Connect.<br /><em>Feel closer.</em></h2><p>Download the LifePatch app to activate your patch, see your readings, and have a little more peace of mind in your pocket.</p><div className="download-actions"><a className="button button-yellow" href="#download"><Download size={18} /> Download the app</a><span>Available for iOS & Android</span></div></div><div className="qr-card"><QrCode size={104} strokeWidth={1.4} /><strong>Scan to get started</strong><small>Point your camera here<br />to download the app</small></div></div></section>

      <footer className="footer container"><a className="brand" href="#top"><img className="brand-image" src="/Screenshot_2026-09-29_192259.png" alt="LifePatch" /></a><div className="footer-news"><span>Stay in the loop</span>{subscribed ? <strong>You're on the list.</strong> : <form onSubmit={handleSubscribe}><input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" type="email" aria-label="Your email address" required /><button aria-label="Subscribe"><ArrowUpRight size={16} /></button></form>}</div><span className="footer-note">© 2024 LifePatch. Built for better days.</span></footer>

      {showAssistant && <div className="modal-backdrop" onClick={() => setShowAssistant(false)}><div className="assistant-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setShowAssistant(false)} aria-label="Close"><X size={20} /></button><div className="assistant-icon"><Sparkles size={22} /></div><p className="kicker">A calmer way to care</p><h2>Talk it through<br /><em>with me.</em></h2><p>Your LifePatch companion helps you make sense of your readings, prepare for appointments, and build healthy habits that fit your life.</p><div className="assistant-message"><span><HeartPulse size={16} /></span><div><small>LifePatch companion</small><strong>How are you feeling today?</strong></div></div><button className="button button-dark" onClick={() => setShowAssistant(false)}>Start a check-in <ArrowUpRight size={17} /></button></div></div>}
    </main>
  );
}

export default App;
