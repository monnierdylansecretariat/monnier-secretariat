/* global React */
const Icon = ({ name, size = 16, stroke = 1.4 }) => {
  const paths = {
    arrow: <path d="M3 9h12M11 5l4 4-4 4" />,
    arrowDown: <path d="M9 3v12M5 11l4 4 4-4" />,
    arrowUp: <path d="M9 15V3M5 7l4-4 4 4" />,
    chev: <path d="M6 4l5 5-5 5" />,
    chevD: <path d="M4 7l5 5 5-5" />,
    plus: <path d="M9 4v10M4 9h10" />,
    check: <path d="M3.5 9.5l3.5 3.5L15 5" />,
    x: <path d="M4 4l10 10M14 4L4 14" />,
    search: <g><circle cx="8" cy="8" r="4.5" /><path d="M11.5 11.5L15 15" /></g>,
    bell: <path d="M5 13V8a4 4 0 018 0v5l1 2H4l1-2zM7 16a2 2 0 004 0" />,
    user: <g><circle cx="9" cy="6" r="2.6" /><path d="M3.5 16c1-3 3-4.5 5.5-4.5s4.5 1.5 5.5 4.5" /></g>,
    mail: <g><rect x="2.5" y="4" width="13" height="10" rx="1" /><path d="M2.5 5l6.5 5 6.5-5" /></g>,
    phone: <path d="M5 3.5l1.6 2.5-1.4 1.4a8 8 0 003.4 3.4l1.4-1.4 2.5 1.6V13a1.5 1.5 0 01-1.5 1.5C6.5 14.5 3.5 11.5 3.5 6.5A1.5 1.5 0 015 5z" />,
    clock: <g><circle cx="9" cy="9" r="6" /><path d="M9 5v4l2.5 1.5" /></g>,
    cal: <g><rect x="2.5" y="4" width="13" height="11" rx="1" /><path d="M2.5 7h13M6 2.5v3M12 2.5v3" /></g>,
    grid: <g><rect x="2.5" y="2.5" width="5" height="5" /><rect x="10.5" y="2.5" width="5" height="5" /><rect x="2.5" y="10.5" width="5" height="5" /><rect x="10.5" y="10.5" width="5" height="5" /></g>,
    list: <path d="M3 5h12M3 9h12M3 13h12" />,
    file: <path d="M5 2h5l3 3v11H5z M10 2v3h3" />,
    document: <path d="M5 2h5l3 3v11H5z M10 2v3h3" />,
    folder: <path d="M2.5 5a1 1 0 011-1h3l1.5 1.5h6.5a1 1 0 011 1v7a1 1 0 01-1 1h-11a1 1 0 01-1-1z" />,
    tag: <path d="M9 2H4a1 1 0 00-1 1v5l8 8 6-6-8-8zM6 6.5a.5.5 0 110-1 .5.5 0 010 1z" />,
    book: <path d="M3 3.5h5.5a2 2 0 012 2V16a1.5 1.5 0 00-1.5-1.5H3zM15 3.5H9.5a2 2 0 00-2 2V16a1.5 1.5 0 011.5-1.5H15z" />,
    edit: <path d="M3 13l9-9 3 3-9 9H3v-3z M11 5l3 3" />,
    play: <path d="M5 3.5v11l9-5.5z" />,
    pause: <path d="M5 4h3v10H5zM10 4h3v10h-3z" />,
    stop: <rect x="4.5" y="4.5" width="9" height="9" />,
    download: <path d="M9 3v9M5 9l4 4 4-4M3 16h12" />,
    upload: <path d="M9 14V4M5 8l4-4 4 4M3 16h12" />,
    settings: <g><circle cx="9" cy="9" r="2" /><path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.5 3.5l1.4 1.4M13.1 13.1l1.4 1.4M3.5 14.5l1.4-1.4M13.1 4.9l1.4-1.4" /></g>,
    chart: <path d="M3 14V5M7 14V8M11 14v-3M15 14V3" />,
    inbox: <path d="M3 10v4a1 1 0 001 1h10a1 1 0 001-1v-4l-2-6H5l-2 6zM3 10h3l1 2h4l1-2h3" />,
    eye: <g><path d="M1 9s3-5.5 8-5.5S17 9 17 9s-3 5.5-8 5.5S1 9 1 9z" /><circle cx="9" cy="9" r="2" /></g>,
    bolt: <path d="M10 2L4 11h4l-1 6 6-9h-4l1-6z" />,
    timer: <g><circle cx="9" cy="10" r="5.5" /><path d="M9 10V7M7 2.5h4" /></g>,
    msg: <path d="M3 4h12a1 1 0 011 1v7a1 1 0 01-1 1h-7l-3 3v-3H3a1 1 0 01-1-1V5a1 1 0 011-1z" />,
    sign: <path d="M2 15c2-2 5-4 7-4s5 2 7 4M5 11l4-9 4 9" />,
    receipt: <path d="M4 2h10v15l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5zM6 6h6M6 9h6M6 12h4" />,
    home: <path d="M3 9l6-6 6 6v6.5a.5.5 0 01-.5.5H11v-5H7v5H3.5a.5.5 0 01-.5-.5z" />,
    gift: <path d="M3 7h12v2H3zM4 9v7h10V9M9 7v9M9 7c-1.5-2-4-2-4 0s2 1 4 0zM9 7c1.5-2 4-2 4 0s-2 1-4 0z" />,
    menu: <path d="M3 5h12M3 9h12M3 13h12" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }}>
      {paths[name] || null}
    </svg>
  );
};

const Ph = ({ w, h, label = 'photo', tone, radius, style = {} }) => (
  <div className={`ph${tone ? ' ph-color tone-' + tone : ''}`}
    style={{ width: w, height: h, ...(radius != null ? { borderRadius: radius } : {}), ...style }}>
    {label && <span style={{ position: 'absolute', top: 8, left: 10 }}>{label}</span>}
  </div>
);

const Eyebrow = ({ children, mark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
    {mark && <span style={{ width: 16, height: 1, background: 'var(--ink-mute)' }} />}
    <span className="uppercase">{children}</span>
  </div>
);

const VitrineNav = ({ active }) => {
  const [open, setOpen] = React.useState(false);
  const links = [
    ['home', 'Accueil', 'index.html'],
    ['tarifs', 'Tarifs', 'tarifs.html'],
    ['articles', 'Articles', 'articles.html'],
    ['about', 'À propos', 'about.html'],
    ['contact', 'Contact', 'contact.html'],
  ];
  return (
    <nav className="vnav">
      <a href="index.html" className="vnav-brand">
        <span>MONNIER</span>
        <span className="sep" />
        <span className="sub">bureau secrétariat</span>
      </a>
      <div className={'vnav-links' + (open ? ' mobile-open' : '')}>
        {links.map(([k, l, h]) => (
          <a key={k} href={h} className={'vnav-link' + (active === k ? ' active' : '')}>{l}</a>
        ))}
        <span style={{ width: 1, height: 18, background: 'var(--line)', margin: '0 8px' }} />
        <a href="espace.html" className="vnav-link" style={{ fontSize: 12.5 }}>Mon Espace</a>
        <a href="lab.html" className="vnav-link mono" style={{ fontSize: 12, letterSpacing: '0.04em' }}>· LAB</a>
        <a href="contact.html" className="btn btn-primary btn-sm" style={{ marginLeft: 10, textDecoration: 'none' }}>
          Réserver un appel
        </a>
      </div>
      <button className="btn btn-ghost btn-sm" style={{ display: 'none' }} onClick={() => setOpen(o => !o)} id="vnav-toggle">
        <Icon name={open ? 'x' : 'menu'} size={14} />
      </button>
    </nav>
  );
};

const Footer = () => (
  <footer className="vfoot">
    <div className="grid">
      <div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--paper)', marginBottom: 12 }}>
          MONNIER · bureau secrétariat
        </div>
        <p style={{ fontSize: 13, lineHeight: 1.55, margin: 0, marginBottom: 14 }}>
          Bras droit administratif pour indépendants, TPE et PME en Belgique francophone.
        </p>
        <a href="mailto:info@monnier-secretariat.be" style={{ fontSize: 13 }}>info@monnier-secretariat.be</a>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li><a href="index.html#services">Administratif</a></li>
          <li><a href="index.html#services">Compta simple</a></li>
          <li><a href="index.html#services">Permanence tél.</a></li>
          <li><a href="index.html#services">Traduction FR ↔ NL</a></li>
        </ul>
      </div>
      <div>
        <h4>Le bureau</h4>
        <ul>
          <li><a href="about.html">À propos</a></li>
          <li><a href="articles.html">Articles</a></li>
          <li><a href="tarifs.html">Tarifs</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Légal</h4>
        <ul>
          <li>BCE 0789.456.789</li>
          <li>TVA BE 0789.456.789</li>
          <li><a href="mentions.html">Mentions légales</a></li>
          <li><a href="mentions.html">Confidentialité</a></li>
        </ul>
      </div>
    </div>
    <div className="legal">
      <span>© 2026 Dylan Monnier · monnier-secretariat.com</span>
      <span>Fait à Liège · BE</span>
    </div>
  </footer>
);

// In-app shell helpers
const TopBar = ({ crumb, right }) => (
  <div className="app-topbar">
    <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ color: 'var(--ink-faint)' }}>~/</span>
      {crumb.map((c, i) => (
        <React.Fragment key={i}>
          <span style={{ color: i === crumb.length - 1 ? 'var(--ink)' : 'var(--ink-mute)' }}>{c}</span>
          {i < crumb.length - 1 && <span style={{ color: 'var(--ink-faint)' }}>/</span>}
        </React.Fragment>
      ))}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>{right}</div>
  </div>
);

// Lab dark sidebar — handles SPA-style screen routing via onNav prop
const LabSide = ({ active, onNav }) => {
  const groups = [
    ['Workspace', [['Dashboard', 'grid']]],
    ['Production', [['Clients', 'user'], ['Missions', 'list'], ['Timesheet', 'timer'], ['Devis', 'sign'], ['Agenda', 'cal']]],
    ['Bibliothèque', [['Documents', 'folder'], ['Modèles', 'book'], ['Articles', 'edit']]],
    ['Insights', [['Statistiques', 'chart']]],
  ];
  return (
    <aside className="app-side">
      <div className="side-brand">
        <span style={{ color: 'var(--paper)' }}>monnier</span>
        <span style={{ color: 'oklch(0.5 0.01 75)' }}>·</span>
        <span style={{ color: 'var(--accent-soft)' }}>LAB</span>
      </div>
      {groups.map(([title, items]) => (
        <React.Fragment key={title}>
          <div className="side-section">{title}</div>
          {items.map(([l, ic]) => (
            <div key={l}
              className={`nav-item ${active === l ? 'active' : ''}`}
              onClick={() => onNav && onNav(l)}
              style={{ cursor: onNav ? 'pointer' : 'default' }}>
              <Icon name={ic} size={14} /><span>{l}</span>
            </div>
          ))}
        </React.Fragment>
      ))}
      <div className="side-foot">
        v.2026.05<br />
        <span style={{ color: 'var(--ok, #4ade80)' }}>●</span> connecté en tant que dylan
        <div style={{ marginTop: 10 }}>
          <a href="index.html" style={{ color: 'oklch(0.65 0.01 75)', fontSize: 11, textDecoration: 'underline' }}>← retour au site</a>
        </div>
      </div>
    </aside>
  );
};

Object.assign(window, { Icon, Ph, Eyebrow, VitrineNav, Footer, TopBar, LabSide });
window.MS = { Icon, Ph, Eyebrow, VitrineNav, Footer, TopBar, LabSide };
