/* global React, ReactDOM */
const { Icon, Ph, Eyebrow, VitrineNav, Footer, CookieBanner } = window.MS;

// ─── HOME (variant B · vertical classique retenu) ───
const Home = () => (
  <div className="ms-root" style={{ minHeight: '100%', background: 'var(--paper)' }}>
    <VitrineNav active="home" />

    <section style={{ padding: '110px 56px 80px', textAlign: 'center', maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <span className="badge" style={{ background: 'var(--paper)' }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--ok)' }} />
          5 places ouvertes en 2026
        </span>
      </div>
      <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(48px, 7vw, 92px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em', margin: '0 0 24px', maxWidth: 980 }}>
        Le secrétariat n'est pas un coût.<br />
        C'est <span style={{ fontStyle: 'italic', color: 'var(--accent-ink)' }}>du temps</span> qu'on vous rend.
      </h1>
      <p style={{ fontSize: 19, lineHeight: 1.45, color: 'var(--ink-soft)', maxWidth: 620, margin: '0 0 28px' }}>
        Bras droit administratif pour indépendants, TPE et PME en Belgique francophone.
        Forfait mensuel sans engagement.
      </p>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="contact.html" className="btn btn-primary btn-lg" style={{ textDecoration: 'none' }}>Réserver un appel découverte <Icon name="arrow" size={13} /></a>
        <a href="tarifs.html" className="btn btn-link" style={{ fontSize: 14, textDecoration: 'none' }}>voir les forfaits</a>
      </div>
      <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 22, letterSpacing: '0.05em' }}>
        30 min · gratuit · sans engagement
      </div>
    </section>

    <section style={{ background: 'var(--paper-2)', padding: '72px 56px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Eyebrow mark>un manifeste · 2026</Eyebrow>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 56 }}>
          {[
            ['01', "Vous ne payez pas pour un poste mais pour un", 'résultat.', 'Forfait clair, livrables tangibles, capacité dimensionnée à votre charge.'],
            ['02', "Pas de jargon, pas de procédures opaques. Tout est tracé dans votre", 'espace client.', 'Vous voyez ce qui avance, ce qui reste, ce qui sort de votre boîte.'],
            ['03', "J'évolue avec les outils — IA, automatisations, intégrations. Vous en", 'bénéficiez', "sans rien gérer. Mon stack est à jour pour que le vôtre n'ait pas à l'être."],
          ].map(([n, p1, hl, p2]) => (
            <div key={n}>
              <div className="mono" style={{ fontSize: 12, color: 'var(--ink-mute)', marginBottom: 10 }}>{n}</div>
              <div style={{ fontSize: 17, lineHeight: 1.4, color: 'var(--ink)' }}>
                {p1} <span className="hl">{hl}</span>
              </div>
              <div style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 10, lineHeight: 1.5 }}>{p2}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="services" style={{ padding: '88px 56px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Eyebrow mark>services · 9 prestations</Eyebrow>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 48, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              Ce que je gère pour vous
            </h2>
          </div>
        </div>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--line)' }}>
          {[
            ['Administratif', 'courriers · classement · archivage'],
            ['Compta simple', 'saisie · pré-compta · devis'],
            ['Relances clients', 'rappels · suivi de recouvrement'],
            ['Agenda & RDV', 'coordination · prises de rendez-vous'],
            ['Permanence tél.', "filtrage d'appels · transferts"],
            ['Saisie / transcription', 'audio → texte · multi-locuteurs'],
            ['Rédaction', 'mails · CR · rapports'],
            ['Traduction · relecture', 'FR ↔ NL'],
            ['RH light', 'notes de frais · congés · contrats'],
          ].map(([title, sub], i) => (
            <div key={title} style={{
              padding: '22px 22px 22px 0', borderBottom: '1px solid var(--line)',
              borderRight: (i + 1) % 3 === 0 ? 'none' : '1px solid var(--line)',
              paddingLeft: i % 3 === 0 ? 0 : 22,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 6 }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>0{i + 1}</span>
                  <span style={{ fontSize: 17, fontWeight: 500 }}>{title}</span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginLeft: 26 }}>{sub}</div>
              </div>
              <Icon name="arrow" size={14} stroke={1.4} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '88px 56px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <Eyebrow mark>tarifs · forfaits</Eyebrow>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 48, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            Trois formules, zéro engagement.
          </h2>
          <p style={{ color: 'oklch(0.78 0.01 75)', fontSize: 16, marginTop: 12 }}>
            Heures non utilisées reportables 30 jours. Résiliable d'un mois sur l'autre.
          </p>
        </div>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {[
            { tag: 'ESSENTIEL', name: 'Sérénité 10', price: 490, desc: 'Pour démarrer ou compléter sans tout déléguer.', features: ['10h / mois inclus', 'Tous les services', 'Réponse sous 4h ouvr.', 'Espace client'], hi: false },
            { tag: 'LE + CHOISI', name: 'Sérénité 20', price: 790, desc: 'Le rythme idéal pour la plupart des indépendants.', features: ['20h / mois inclus', 'Permanence tél. 5j/5', 'Réponse sous 2h ouvr.', 'Rapport mensuel'], hi: true },
            { tag: 'INTENSIF', name: 'Sérénité 30', price: 990, desc: 'Pour les structures qui externalisent vraiment.', features: ['30h / mois inclus', 'Slot prioritaire', 'Réponse sous 1h ouvr.', 'Point hebdo'], hi: false },
          ].map((p) => (
            <div key={p.name} style={{
              background: p.hi ? 'var(--paper)' : 'oklch(0.22 0.008 75)',
              color: p.hi ? 'var(--ink)' : 'var(--paper)',
              borderRadius: 8, padding: '32px 28px',
              border: '1px solid ' + (p.hi ? 'var(--paper)' : 'oklch(0.30 0.008 75)'),
            }}>
              <div className="mono" style={{ fontSize: 11, color: p.hi ? 'var(--accent-ink)' : 'var(--accent-soft)', marginBottom: 14, letterSpacing: '0.08em' }}>{p.tag}</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 28, fontWeight: 400, lineHeight: 1, marginBottom: 6 }}>{p.name}</div>
              <div style={{ fontSize: 13, color: p.hi ? 'var(--ink-soft)' : 'oklch(0.78 0.01 75)', marginBottom: 22 }}>{p.desc}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 24 }}>
                <span style={{ fontSize: 44, fontWeight: 500, letterSpacing: '-0.02em' }}>{p.price}€</span>
                <span className="mono" style={{ fontSize: 12, color: p.hi ? 'var(--ink-mute)' : 'oklch(0.6 0 0)' }}>/mois HTVA</span>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, marginBottom: 22 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <Icon name="check" size={13} /> {f}
                  </li>
                ))}
              </ul>
              <a href="contact.html" className="btn" style={{
                width: '100%', textDecoration: 'none', justifyContent: 'center',
                background: p.hi ? 'var(--ink)' : 'var(--paper)',
                color: p.hi ? 'var(--paper)' : 'var(--ink)',
              }}>Choisir {p.name}</a>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href="tarifs.html" className="btn btn-link" style={{ color: 'var(--accent-soft)', textDecoration: 'none' }}>Voir le comparatif détaillé <Icon name="arrow" size={12} /></a>
        </div>
      </div>
    </section>

    <section style={{ padding: '80px 56px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Eyebrow mark>témoignage · client</Eyebrow>
            <blockquote style={{ fontFamily: 'var(--display)', fontSize: 32, lineHeight: 1.2, fontWeight: 400, letterSpacing: '-0.015em', margin: 0 }}>
              « En quatre mois, j'ai récupéré <span className="hl">8 jours par mois</span>. Dylan a aussi
              réinitialisé tout mon recouvrement — <span style={{ fontStyle: 'italic' }}>je ne m'en occupe plus</span>. »
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 28 }}>
              <Ph w={40} h={40} label="" tone="a" style={{ borderRadius: '50%' }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>Sophie Dupuis</div>
                <div style={{ fontSize: 12, color: 'var(--ink-mute)' }}>Directrice · Dupuis SPRL · Liège</div>
              </div>
            </div>
          </div>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              ['+8j', 'récupérés / mois'],
              ['12', 'clients actifs'],
              ['98%', 'mission renouvelée'],
              ['4.9/5', 'satisfaction · 24 avis'],
            ].map(([v, l]) => (
              <div key={l} className="card card-sand" style={{ padding: 22 }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: 36, lineHeight: 1, fontWeight: 400, letterSpacing: '-0.02em' }}>{v}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section style={{ background: 'var(--paper-2)', padding: '88px 56px', textAlign: 'center' }}>
      <Eyebrow mark>prochaine étape</Eyebrow>
      <h2 style={{ fontFamily: 'var(--display)', fontSize: 56, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 18 }}>
        On en discute <span style={{ fontStyle: 'italic' }}>30 minutes</span> ?
      </h2>
      <p style={{ fontSize: 16, color: 'var(--ink-soft)', marginBottom: 28, maxWidth: 540, margin: '0 auto 28px' }}>
        Je découvre votre activité, je vous dis franchement si je suis utile, et on regarde ensemble le bon forfait. Sans pression.
      </p>
      <a href="contact.html" className="btn btn-primary btn-lg" style={{ textDecoration: 'none' }}>Réserver mon créneau <Icon name="arrow" size={13} /></a>
    </section>

    <CookieBanner />
    <Footer />
  </div>
);

// ─── TARIFS ───
const Tarifs = () => {
  const [hours, setHours] = React.useState(15);
  const reco = hours <= 12 ? 0 : hours <= 22 ? 1 : 2;
  const plans = [
    { name: 'Sérénité 10', h: 10, price: 490 },
    { name: 'Sérénité 20', h: 20, price: 790 },
    { name: 'Sérénité 30', h: 30, price: 990 },
  ];
  return (
    <div className="ms-root" style={{ minHeight: '100%', background: 'var(--paper)' }}>
      <VitrineNav active="tarifs" />
      <section style={{ padding: '64px 56px 32px', maxWidth: 1100, margin: '0 auto' }}>
        <Eyebrow mark>tarifs · simulez votre forfait</Eyebrow>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--display)', fontSize: 64, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 24 }}>
              Estimez vos heures <span style={{ fontStyle: 'italic' }}>récupérées.</span>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.5 }}>
              Glissez le curseur pour estimer le forfait qui correspond. Ensuite : on en discute.
            </p>
          </div>
          <div style={{ background: 'var(--ink)', color: 'var(--paper)', borderRadius: 10, padding: '32px 28px' }}>
            <div className="mono" style={{ fontSize: 11, color: 'oklch(0.7 0.01 75)', letterSpacing: '0.08em', marginBottom: 18 }}>SIMULATEUR DE FORFAIT</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 18 }}>
              <span style={{ fontFamily: 'var(--display)', fontSize: 96, fontWeight: 400, lineHeight: 1, letterSpacing: '-0.025em' }}>{hours}</span>
              <span className="mono" style={{ fontSize: 14, color: 'oklch(0.78 0.01 75)' }}>h/mois</span>
            </div>
            <input type="range" min={1} max={35} value={hours} onChange={e => setHours(+e.target.value)} style={{
              width: '100%', accentColor: 'var(--accent)', marginBottom: 24,
            }} />
            <div className="hr" style={{ background: 'oklch(0.30 0.008 75)', marginBottom: 18 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span className="mono" style={{ fontSize: 11, color: 'oklch(0.7 0.01 75)' }}>FORFAIT RECOMMANDÉ</span>
              <span style={{ fontSize: 12, fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--accent-soft)' }}>{plans[reco].name}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span className="mono" style={{ fontSize: 11, color: 'oklch(0.7 0.01 75)' }}>TARIF MENSUEL</span>
              <span style={{ fontFamily: 'var(--display)', fontSize: 36, fontWeight: 400 }}>{plans[reco].price}€</span>
            </div>
            <a href="contact.html" className="btn btn-accent" style={{ width: '100%', marginTop: 22, textDecoration: 'none', justifyContent: 'center' }}>Bloquer un appel découverte</a>
            <div className="mono" style={{ fontSize: 10, color: 'oklch(0.6 0 0)', textAlign: 'center', marginTop: 12 }}>sans engagement · résiliable au mois</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 56px 88px', maxWidth: 1100, margin: '0 auto' }}>
        <Eyebrow mark>comparatif · prestations incluses</Eyebrow>
        <div style={{ overflowX: 'auto' }}>
          <table className="tbl" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 8, overflow: 'hidden', minWidth: 700 }}>
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Prestation</th>
                <th style={{ textAlign: 'center' }}>Sérénité 10 · 490€</th>
                <th style={{ textAlign: 'center', background: 'var(--accent-pale)' }}>Sérénité 20 · 790€</th>
                <th style={{ textAlign: 'center' }}>Sérénité 30 · 990€</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Heures incluses / mois', '10', '20', '30'],
                ['Délai de réponse', '4h ouvr.', '2h ouvr.', '1h ouvr.'],
                ['Permanence téléphonique', '—', '5j/5', '5j/5 + slot prioritaire'],
                ['Rapport mensuel', '—', '✓', '✓ + point hebdo'],
                ['Espace client', '✓', '✓', '✓'],
                ['Heures supp.', '49 €/h', '39 €/h', '33 €/h'],
                ["Report d'heures", '—', '30 jours', '60 jours'],
              ].map((row, i) => (
                <tr key={i}>
                  <td style={{ color: 'var(--ink)', fontWeight: 500 }}>{row[0]}</td>
                  {row.slice(1).map((c, j) => (
                    <td key={j} style={{ textAlign: 'center', background: j === 1 ? 'var(--accent-pale)' : 'transparent' }}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <CookieBanner />
    <Footer />
    </div>
  );
};

// ─── ARTICLES LIST ───
const Articles = () => {
  const articles = [
    { cat: 'OUTILS & MÉTHODES', title: 'Comment automatiser ses relances clients', dek: 'Trois flows simples, du CSV au mail prêt à envoyer.', date: '12 mai', read: '8 min', slug: 'automatiser-relances-clients' },
    { cat: 'COMPTABILITÉ', title: "3 outils que j'utilise pour la compta TPE", dek: 'Pennylane, Tiime, Indy : ce qui marche en 2026.', date: '04 mai', read: '5 min' },
    { cat: 'IA', title: 'IA & assistants virtuels : ce qui change en 2026', dek: "Mon stack actuel et ce que j'ai abandonné.", date: '20 avr.', read: '6 min' },
    { cat: 'OUTILS', title: 'Notion vs ClickUp pour gérer son cabinet', dek: 'Test sur 6 mois, avec mes vrais workflows.', date: '14 avr.', read: '7 min' },
    { cat: 'BELGIQUE', title: 'TVA & forfait mensuel : comment je facture', dek: "Le détail concret, factures à l'appui.", date: '02 avr.', read: '4 min' },
    { cat: 'MÉTHODES', title: 'Pourquoi externaliser la permanence tél.', dek: 'Quand ça vaut le coup, quand ça ne vaut pas.', date: '24 mars', read: '6 min' },
  ];
  return (
    <div className="ms-root" style={{ minHeight: '100%', background: 'var(--paper)' }}>
      <VitrineNav active="articles" />
      <section style={{ padding: '64px 56px 24px', maxWidth: 1180, margin: '0 auto' }}>
        <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 16 }}>
          JOURNAL DE BORD · MIS À JOUR CHAQUE SEMAINE
        </div>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(48px, 7vw, 84px)', fontWeight: 400, lineHeight: 0.98, letterSpacing: '-0.025em', marginBottom: 16 }}>
          Articles & <span style={{ fontStyle: 'italic' }}>ressources</span>
        </h1>
        <p style={{ fontSize: 17, color: 'var(--ink-soft)', maxWidth: 620, marginBottom: 28 }}>
          Outils, méthodes, retours d'expérience. Écrits depuis le bureau.
        </p>
      </section>

      <section style={{ padding: '0 56px 32px', maxWidth: 1180, margin: '0 auto' }}>
        <a href="articles/automatiser-relances-clients.html" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 0, border: '1px solid var(--line)', borderRadius: 8, overflow: 'hidden', background: 'var(--surface)' }}>
            <Ph w="100%" h={380} label="article à la une" />
            <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge badge-accent">à la une</span>
                <h2 style={{ fontFamily: 'var(--display)', fontSize: 38, fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '14px 0' }}>
                  Comment automatiser ses relances clients
                </h2>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.55 }}>
                  Trois flows simples, du CSV au mail prêt à envoyer. Zéro abonnement supplémentaire pour les indépendants qui ont déjà Make ou n8n.
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 22 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="avatar">DM</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>Dylan Monnier · 12 mai · 8 min</div>
                </div>
                <span className="btn btn-primary btn-sm">Lire l'article <Icon name="arrow" size={11} /></span>
              </div>
            </div>
          </div>
        </a>
      </section>

      <section style={{ padding: '24px 56px 80px', maxWidth: 1180, margin: '0 auto' }}>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {articles.slice(1).map((a, i) => (
            <article key={i} style={{ display: 'flex', flexDirection: 'column', opacity: 0.85 }}>
              <Ph w="100%" h={170} label={`cover #${i + 1}`} tone={i === 0 ? 'b' : i === 1 ? 'a' : i === 3 ? 'd' : undefined} style={{ marginBottom: 14 }} />
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.1em', marginBottom: 8 }}>{a.cat}</div>
              <h3 style={{ fontSize: 18, fontWeight: 500, lineHeight: 1.2, marginBottom: 6 }}>{a.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.5, marginBottom: 12 }}>{a.dek}</p>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
                <span>{a.date}</span><span>bientôt →</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CookieBanner />
    <Footer />
    </div>
  );
};

// ─── ARTICLE DETAIL ───
const Article = () => (
  <div className="ms-root" style={{ minHeight: '100%', background: 'var(--paper)' }}>
    <VitrineNav active="articles" />
    <article style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 80px' }}>
      <a href="articles.html" className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em', textDecoration: 'none', display: 'inline-block', marginBottom: 18 }}>
        ← TOUS LES ARTICLES
      </a>
      <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 14 }}>
        OUTILS & MÉTHODES · 8 MIN
      </div>
      <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 24 }}>
        Comment <span style={{ fontStyle: 'italic' }}>automatiser</span> ses relances clients
      </h1>
      <p style={{ fontSize: 19, color: 'var(--ink-soft)', lineHeight: 1.5, marginBottom: 28 }}>
        Trois flows simples, du CSV au mail prêt à envoyer. Zéro abonnement supplémentaire pour les indépendants qui ont déjà Make ou n8n.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
        <Ph w={42} h={42} label="" tone="a" style={{ borderRadius: '50%' }} />
        <div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>Dylan Monnier</div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>12 mai 2026</div>
        </div>
      </div>

      <Ph w="100%" h={320} label="couverture" style={{ marginBottom: 36 }} />

      <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink)', marginBottom: 22 }}>
        Quand on facture 30 clients par mois, courir après les paiements grignote des heures qu'on aimerait mettre ailleurs. Voici les 3 automatisations que j'ai mises en place, avec un coût marginal nul.
      </p>

      <h2 style={{ fontFamily: 'var(--display)', fontSize: 30, fontWeight: 500, marginTop: 32, marginBottom: 14, letterSpacing: '-0.015em' }}>1. Détecter les retards automatiquement</h2>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink)', marginBottom: 18 }}>
        À J+7, J+15 et J+30, un script Make compare l'état de paiement à la date d'émission. Si retard, un brouillon de mail est créé dans l'outil compta.
      </p>
      <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '20px 22px', borderRadius: 6, fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 1.7, marginBottom: 22 }}>
        <span style={{ color: 'oklch(0.7 0.01 75)' }}>// adapter le ton du J+7 (cordial) au J+30 (ferme)</span><br />
        Action: adapter le ton du J+7 (cordial) au J+30 (ferme). Le client le perçoit, ça change tout.
      </div>

      <h2 style={{ fontFamily: 'var(--display)', fontSize: 30, fontWeight: 500, marginTop: 32, marginBottom: 14, letterSpacing: '-0.015em' }}>2. Préparer le mail, pas l'envoyer</h2>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink)', marginBottom: 18 }}>
        Je laisse <span className="hl">l'humain dans la boucle</span> : l'IA propose, je relis, je clique. Pour la confiance client, c'est non négociable.
      </p>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink)', marginBottom: 22 }}>
        En pratique, sur 100 brouillons, je modifie 30 % et je rejette 5 %. Le reste est envoyé tel quel — gain net : <strong>environ 4h par mois</strong>.
      </p>

      <h2 style={{ fontFamily: 'var(--display)', fontSize: 30, fontWeight: 500, marginTop: 32, marginBottom: 14, letterSpacing: '-0.015em' }}>3. Mesurer l'impact</h2>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink)', marginBottom: 22 }}>
        Avant : 18 jours moyens entre facture et paiement. Après 6 mois : <strong>14 jours</strong>. C'est trois semaines de trésorerie récupérées sur l'année.
      </p>

      <div style={{ marginTop: 56, padding: 28, background: 'var(--paper-2)', borderRadius: 8, textAlign: 'center' }}>
        <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 10 }}>BESOIN D'AIDE ?</div>
        <h3 style={{ fontFamily: 'var(--display)', fontSize: 24, fontWeight: 500, marginBottom: 12 }}>Je peux mettre ça en place pour vous.</h3>
        <a href="contact.html" className="btn btn-primary" style={{ textDecoration: 'none' }}>Réserver un appel <Icon name="arrow" size={12} /></a>
      </div>
    </article>
    <CookieBanner />
    <Footer />
  </div>
);

// ─── ABOUT ───
const About = () => (
  <div className="ms-root" style={{ minHeight: '100%', background: 'var(--paper)' }}>
    <VitrineNav active="about" />
    <section style={{ padding: '64px 56px 32px', maxWidth: 1100, margin: '0 auto' }}>
      <Eyebrow mark>à propos · 2023 →</Eyebrow>
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'start' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(48px, 7vw, 72px)', fontWeight: 400, lineHeight: 0.98, letterSpacing: '-0.025em', marginBottom: 18 }}>
            Dylan Monnier,<br /> bureau secrétariat <span style={{ fontStyle: 'italic' }}>moderne.</span>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.55, marginBottom: 16 }}>
            Je suis indépendant en Belgique francophone depuis 2023. Mon métier : reprendre la partie administrative qui mange vos journées et vous la rendre nettoyée, automatisée, livrée à temps.
          </p>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.55 }}>
            Mon parti pris : <span className="hl">je me forme aux outils qui changent</span> — IA, automatisation, no-code — pour que votre admin coûte moins en heures et plus en lisibilité.
          </p>
        </div>
        <img src="images/dylan.jpg" alt="Dylan Monnier — bureau secrétariat"
          style={{ width: '100%', height: 420, objectFit: 'cover', objectPosition: 'center top', borderRadius: 'var(--r)' }}
          onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }}
        />
        <Ph w="100%" h={420} label="portrait" tone="a" style={{ display: 'none' }} />
      </div>
    </section>

    <section style={{ padding: '40px 56px 64px', maxWidth: 1100, margin: '0 auto' }}>
      <Eyebrow mark>parcours · timeline</Eyebrow>
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid var(--line)' }}>
        {[
          ['2023', 'Lancement de l\'activité', 'Belgique francophone · bureau secrétariat indépendant'],
          ['Aujourd\'hui', 'En activité', 'Stack moderne, outils IA, accompagnement sur-mesure'],
        ].map(([y, t, d], i) => (
          <div key={y} style={{ padding: '22px 0', paddingLeft: i === 1 ? 24 : 0, paddingRight: i === 0 ? 24 : 0, borderRight: i === 0 ? '1px solid var(--line)' : 'none' }}>
            <div style={{ fontFamily: 'var(--display)', fontSize: 38, lineHeight: 1, fontStyle: 'italic', color: 'var(--accent-ink)' }}>{y}</div>
            <div style={{ fontSize: 15, fontWeight: 500, marginTop: 10 }}>{t}</div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 4 }}>{d}</div>
          </div>
        ))}
      </div>
    </section>

    <section style={{ background: 'var(--paper-2)', padding: '64px 56px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Eyebrow mark>stack · ce que j'utilise</Eyebrow>
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            ['Notion', 'base', 'Workspace clients & docs'],
            ['Falco', 'compta', 'Facturation Peppol'],
            ['Make · n8n', 'automation', 'Flows multi-app'],
            ['Claude · Mistral', 'IA', 'Brouillons, transcription'],
            ['Slack · GSuite', 'comms', 'Permanence & échanges'],
            ['Trello · ClickUp', 'projets', 'Suivi missions'],
            ['DocuSign', 'signatures', 'Devis signés'],
            ['Monnier Lab', 'maison', 'Mon outil quotidien'],
          ].map(([name, cat, desc], i) => (
            <div key={i} className="card" style={{ padding: 16 }}>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 8 }}>{cat.toUpperCase()}</div>
              <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>{name}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CookieBanner />
    <Footer />
  </div>
);

// ─── CONTACT (Netlify Forms) ───
const Contact = () => {
  const [services, setServices] = React.useState(['Administratif']);
  const [vol, setVol] = React.useState('10–20h');
  const toggleSvc = (s) => setServices(svs => svs.includes(s) ? svs.filter(x => x !== s) : [...svs, s]);

  return (
    <div className="ms-root" style={{ minHeight: '100%', background: 'var(--paper)' }}>
      <VitrineNav active="contact" />
      <section style={{ padding: '56px 56px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56 }}>
          <div>
            <Eyebrow mark>contact · devis 30 sec</Eyebrow>
            <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 24 }}>
              Dites-moi ce qui vous <span style={{ fontStyle: 'italic' }}>bouffe</span> du temps.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.5, marginBottom: 32 }}>
              Réponse sous 4h ouvrables. Si je ne peux pas, je vous oriente vers une consoeur.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
              <a href="mailto:info@monnier-secretariat.be" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: 'inherit' }}>
                <Icon name="mail" size={16} />
                <div>
                  <div style={{ fontSize: 14 }}>info@monnier-secretariat.be</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>réponse sous 4h</div>
                </div>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <Icon name="cal" size={16} />
                <div>
                  <div style={{ fontSize: 14 }}>monnier-secretariat.com</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>30 min · gratuit · sans engagement</div>
                </div>
              </div>
            </div>

            <div className="card card-sand" style={{ padding: 22 }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 12 }}>COORDONNÉES SOCIÉTÉ</div>
              <div style={{ fontSize: 13, lineHeight: 1.65 }}>
                Dylan Monnier — bureau secrétariat<br />
                BCE 0795.650.319 · TVA BE 0795.650.319<br />
                Rue du Bois 71 · 5190 Jemeppe-sur-Sambre
              </div>
            </div>
          </div>

          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
                action="/merci.html"
                className="card" style={{ padding: 32 }}>
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: 'none' }}>
              <label>Ne pas remplir : <input name="bot-field" /></label>
            </p>
            <input type="hidden" name="services" value={services.join(', ')} />
            <input type="hidden" name="volume" value={vol} />

            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 18 }}>FORMULAIRE DE CONTACT</div>
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
              <div>
                <label className="field-label">Prénom</label>
                <input className="input" name="prenom" required />
              </div>
              <div>
                <label className="field-label">Nom</label>
                <input className="input" name="nom" required />
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label className="field-label">Email pro</label>
              <input className="input" name="email" type="email" required />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label className="field-label">Société · BCE (facultatif)</label>
              <input className="input" name="societe" placeholder="Dupuis SPRL · BE 0XXX.XXX.XXX" />
            </div>
            <div style={{ marginBottom: 14 }}>
              <label className="field-label">Sur quoi avez-vous besoin d'aide ?</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Administratif', 'Compta', 'Relances', 'Permanence tél.', 'Agenda', 'Saisie', 'Rédaction', 'RH light'].map((s) => {
                  const on = services.includes(s);
                  return (
                    <span key={s} onClick={() => toggleSvc(s)} className="badge" style={{
                      cursor: 'pointer', userSelect: 'none',
                      ...(on ? { background: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' } : {}),
                    }}>
                      {on && <Icon name="check" size={10} />} {s}
                    </span>
                  );
                })}
              </div>
            </div>
            <div style={{ marginBottom: 18 }}>
              <label className="field-label">Volume estimé / mois</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['< 10h', '10–20h', '20–30h', '30h+', 'je ne sais pas'].map((v) => (
                  <span key={v} onClick={() => setVol(v)} className="badge" style={{
                    cursor: 'pointer', userSelect: 'none',
                    ...(vol === v ? { background: 'var(--accent)', color: 'var(--paper)', borderColor: 'var(--accent)' } : {}),
                  }}>{v}</span>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: 22 }}>
              <label className="field-label">Le contexte (optionnel)</label>
              <textarea className="textarea" name="message" rows={4} placeholder="Ce qui vous prend du temps, ce qui ne fonctionne pas, ce que vous avez essayé…" />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
              Envoyer <Icon name="arrow" size={13} />
            </button>
            <div style={{ fontSize: 12, color: 'var(--ink-mute)', textAlign: 'left', marginTop: 14, lineHeight: 1.5 }}>
              En cliquant, vous acceptez la <a href="confidentialite.html" style={{ color: 'var(--ink-mute)', textDecoration: 'underline' }}>politique de confidentialité</a>. Aucune relance commerciale.
            </div>
          </form>
        </div>
      </section>
      <CookieBanner />
    <Footer />
    </div>
  );
};

// ─── MERCI ───
const Merci = () => (
  <div className="ms-root" style={{ minHeight: '100%', background: 'var(--paper)', display: 'flex', flexDirection: 'column' }}>
    <VitrineNav />
    <section style={{ flex: 1, padding: '120px 56px', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
      <div style={{ width: 64, height: 64, borderRadius: 32, background: 'var(--accent-pale)', color: 'var(--accent-ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
        <Icon name="check" size={28} stroke={1.6} />
      </div>
      <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 24 }}>
        Reçu, <span style={{ fontStyle: 'italic' }}>merci.</span>
      </h1>
      <p style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.55, marginBottom: 28 }}>
        Je reviens vers vous sous <strong>4h ouvrables</strong> avec une proposition de créneau. Si c'est urgent, écrivez-moi directement à <a href="mailto:info@monnier-secretariat.be">info@monnier-secretariat.be</a>.
      </p>
      <a href="index.html" className="btn btn-ghost" style={{ textDecoration: 'none' }}>← Retour à l'accueil</a>
    </section>
    <CookieBanner />
    <Footer />
  </div>
);


const LegalH2 = ({ children }) => (
  <h2 style={{ fontFamily: 'var(--display)', fontSize: 24, fontWeight: 500, color: 'var(--ink)', margin: '36px 0 12px', letterSpacing: '-0.01em' }}>{children}</h2>
);

const Mentions = () => (
  <div className="ms-root" style={{ minHeight: '100%', background: 'var(--paper)' }}>
    <VitrineNav />
    <section style={{ padding: '64px 56px 80px', maxWidth: 760, margin: '0 auto' }}>
      <Eyebrow mark>légal · mentions légales</Eyebrow>
      <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 28 }}>
        Mentions <span style={{ fontStyle: 'italic' }}>légales</span>
      </h1>
      <div style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-soft)' }}>

        <LegalH2>Éditeur du site</LegalH2>
        <p style={{ margin: '0 0 16px' }}>
          <strong style={{ color: 'var(--ink)' }}>Dylan Monnier — bureau secrétariat</strong><br />
          Indépendant en personne physique (droit belge)<br />
          BCE 0795.650.319 · TVA BE 0795.650.319<br />
          Rue du Bois 71, 5190 Jemeppe-sur-Sambre · Belgique<br />
          <a href="tel:+32471417333">+32 471 41 73 33</a> · <a href="mailto:info@monnier-secretariat.be">info@monnier-secretariat.be</a>
        </p>

        <LegalH2>Hébergement</LegalH2>
        <p style={{ margin: '0 0 16px' }}>
          Ce site est hébergé par <strong style={{ color: 'var(--ink)' }}>Netlify Inc.</strong><br />
          44 Montgomery Street, Suite 300 · San Francisco, CA 94104 · États-Unis<br />
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">www.netlify.com</a>
        </p>

        <LegalH2>Propriété intellectuelle</LegalH2>
        <p style={{ margin: '0 0 16px' }}>
          L'ensemble des contenus de ce site (textes, visuels, design, code source) est la propriété exclusive de Dylan Monnier, sauf mention contraire explicite. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon sanctionnée par le droit belge et européen.
        </p>

        <LegalH2>Responsabilité</LegalH2>
        <p style={{ margin: '0 0 16px' }}>
          Les informations publiées sur ce site sont fournies à titre indicatif et peuvent être modifiées sans préavis. Dylan Monnier s'efforce d'en assurer l'exactitude mais ne saurait être tenu responsable des erreurs, omissions ou des résultats obtenus par l'usage de ces informations. Les liens vers des sites tiers sont fournis à titre informatif ; Dylan Monnier n'exerce aucun contrôle sur leur contenu.
        </p>

        <LegalH2>Données personnelles</LegalH2>
        <p style={{ margin: '0 0 16px' }}>
          Le traitement des données personnelles collectées via ce site est décrit dans la <a href="confidentialite.html">politique de confidentialité</a>. Pour toute question relative à vos données, contactez <a href="mailto:info@monnier-secretariat.be">info@monnier-secretariat.be</a>.
        </p>

        <LegalH2>Cookies & analytics</LegalH2>
        <p style={{ margin: '0 0 16px' }}>
          Ce site utilise <strong style={{ color: 'var(--ink)' }}>Plausible Analytics</strong>, une solution respectueuse de la vie privée certifiée conforme au RGPD. Plausible ne pose aucun cookie, n'utilise aucun identifiant persistant et ne transfère aucune donnée personnelle. Aucune bannière de consentement n'est requise.
        </p>

        <LegalH2>Loi applicable & juridiction</LegalH2>
        <p style={{ margin: '0 0 16px' }}>
          Le présent site et ses conditions sont régis par le droit belge. En cas de litige relatif à son utilisation, les parties s'engagent à rechercher une solution amiable. À défaut, les tribunaux de l'arrondissement judiciaire de Namur seront seuls compétents.
        </p>

        <div className="card card-sand" style={{ padding: '18px 22px', marginTop: 40 }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 6 }}>MISE À JOUR</div>
          <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Dernière mise à jour : mai 2026</div>
        </div>
      </div>
    </section>
    <CookieBanner />
    <Footer />
  </div>
);

// ─── CONFIDENTIALITÉ ───
const Confidentialite = () => (
  <div className="ms-root" style={{ minHeight: '100%', background: 'var(--paper)' }}>
    <VitrineNav />
    <section style={{ padding: '64px 56px 80px', maxWidth: 760, margin: '0 auto' }}>
      <Eyebrow mark>légal · politique de confidentialité</Eyebrow>
      <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 16 }}>
        Politique de <span style={{ fontStyle: 'italic' }}>confidentialité</span>
      </h1>
      <p style={{ fontSize: 16, color: 'var(--ink-soft)', marginBottom: 40, lineHeight: 1.6 }}>
        Dylan Monnier s'engage à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi belge du 30 juillet 2018.
      </p>

      <div style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-soft)' }}>

        <LegalH2>Responsable du traitement</LegalH2>
        <p style={{ margin: '0 0 16px' }}>
          <strong style={{ color: 'var(--ink)' }}>Dylan Monnier — bureau secrétariat</strong><br />
          BCE 0795.650.319 · Rue du Bois 71, 5190 Jemeppe-sur-Sambre<br />
          <a href="mailto:info@monnier-secretariat.be">info@monnier-secretariat.be</a> · <a href="tel:+32471417333">+32 471 41 73 33</a>
        </p>

        <LegalH2>Données collectées et finalités</LegalH2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, margin: '16px 0 24px' }}>
          {[
            {
              n: '01', title: 'Formulaire de contact',
              data: 'Prénom, nom, email professionnel, société, BCE (optionnel), message, services sélectionnés, volume estimé.',
              base: 'Consentement (art. 6.1.a RGPD)',
              retention: '24 mois après le dernier échange',
              dest: 'Dylan Monnier uniquement — via Netlify Forms (sous-traitant)',
            },
            {
              n: '02', title: 'Analytics — Plausible.io',
              data: 'Pages visitées, référents, pays, type d\'appareil. Aucune donnée personnelle collectée.',
              base: 'Intérêt légitime (art. 6.1.f RGPD) — aucun cookie, aucun identifiant',
              retention: 'Données agrégées, non personnelles',
              dest: 'Plausible Analytics (UE) — aucune donnée personnelle transmise',
            },
            {
              n: '03', title: 'Newsletter',
              data: 'Adresse email professionnelle.',
              base: 'Consentement explicite (opt-in — art. 6.1.a RGPD)',
              retention: 'Jusqu\'à désinscription',
              dest: 'Dylan Monnier — désinscription via lien en bas de chaque email ou par email',
            },
            {
              n: '04', title: 'Espace client (Mon Espace)',
              data: 'Email, identifiants de connexion, données de missions (heures prestées, devis, documents).',
              base: 'Exécution du contrat de service (art. 6.1.b RGPD)',
              retention: 'Durée du contrat + 7 ans (obligations comptables belges)',
              dest: 'Dylan Monnier uniquement',
            },
          ].map(({ n, title, data, base, retention, dest }) => (
            <div key={n} className="card" style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 10 }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{n}</span>
                <strong style={{ color: 'var(--ink)', fontSize: 16 }}>{title}</strong>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '6px 16px', fontSize: 13 }}>
                <span className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', paddingTop: 2 }}>DONNÉES</span><span>{data}</span>
                <span className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', paddingTop: 2 }}>BASE LÉGALE</span><span>{base}</span>
                <span className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', paddingTop: 2 }}>CONSERVATION</span><span>{retention}</span>
                <span className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', paddingTop: 2 }}>DESTINATAIRES</span><span>{dest}</span>
              </div>
            </div>
          ))}
        </div>

        <LegalH2>Vos droits</LegalH2>
        <p style={{ margin: '0 0 12px' }}>
          Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
        </p>
        <ul style={{ margin: '0 0 16px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            ['Accès', 'obtenir une copie de vos données'],
            ['Rectification', 'corriger des données inexactes ou incomplètes'],
            ['Effacement', '"droit à l\'oubli" — suppression de vos données'],
            ['Limitation', 'restreindre le traitement dans certains cas'],
            ['Portabilité', 'recevoir vos données dans un format structuré'],
            ['Opposition', 'vous opposer au traitement fondé sur l\'intérêt légitime'],
            ['Retrait du consentement', 'à tout moment, sans effet rétroactif'],
          ].map(([right, desc]) => (
            <li key={right}><strong style={{ color: 'var(--ink)' }}>{right}</strong> — {desc}</li>
          ))}
        </ul>
        <p style={{ margin: '0 0 16px' }}>
          Pour exercer ces droits, contactez : <a href="mailto:info@monnier-secretariat.be">info@monnier-secretariat.be</a><br />
          Réponse sous 30 jours. Une pièce d'identité peut être demandée pour les demandes d'accès.
        </p>

        <LegalH2>Droit de réclamation</LegalH2>
        <p style={{ margin: '0 0 16px' }}>
          En cas de litige non résolu, vous pouvez introduire une réclamation auprès de l'<strong style={{ color: 'var(--ink)' }}>Autorité de protection des données (APD)</strong> :<br />
          Rue de la Presse 35, 1000 Bruxelles · <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer">autoriteprotectiondonnees.be</a> · contact@apd-gba.be
        </p>

        <LegalH2>Transferts hors Union européenne</LegalH2>
        <p style={{ margin: '0 0 16px' }}>
          <strong style={{ color: 'var(--ink)' }}>Netlify Inc.</strong> (hébergement du site et des formulaires) est basé aux États-Unis. Le transfert est encadré par les clauses contractuelles types approuvées par la Commission européenne (décision 2021/914). Aucune autre donnée n'est transférée hors de l'UE.
        </p>

        <LegalH2>Sécurité</LegalH2>
        <p style={{ margin: '0 0 16px' }}>
          Toutes les communications sont chiffrées via HTTPS (TLS). L'accès à l'espace client est protégé par authentification. Aucune donnée de carte bancaire n'est collectée ni stockée via ce site.
        </p>

        <div className="card card-sand" style={{ padding: '18px 22px', marginTop: 40 }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 6 }}>MISE À JOUR</div>
          <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Dernière mise à jour : mai 2026 · Applicable au site <strong>monnier-secretariat.com</strong></div>
        </div>
      </div>
    </section>
    <CookieBanner />
    <Footer />
  </div>
);


const LoginPage = ({ kind }) => {
  const conf = kind === 'lab' ? {
    eyebrow: 'monnier · LAB · accès interne',
    title: 'Bureau de travail',
    italic: 'interne.',
    desc: "L'outil quotidien — clients, missions, timesheet, devis, agenda. Réservé à l'équipe.",
    bg: 'var(--ink)', fg: 'var(--paper)', accent: 'var(--accent-soft)',
    brand: <span style={{ fontFamily: 'var(--mono)', fontSize: 22, fontWeight: 500 }}>monnier<span style={{ color: 'oklch(0.5 0.01 75)' }}>·</span><span style={{ color: 'var(--accent-soft)' }}>LAB</span></span>,
  } : {
    eyebrow: 'mon espace · accès client',
    title: 'Votre espace',
    italic: 'client.',
    desc: 'Suivez vos heures, vos devis, vos documents et échangez avec moi en direct.',
    bg: 'var(--paper)', fg: 'var(--ink)', accent: 'var(--accent)',
    brand: <span style={{ fontFamily: 'var(--display)', fontSize: 28, fontWeight: 400, letterSpacing: '-0.015em' }}>mon<span style={{ fontStyle: 'italic' }}>·espace</span></span>,
  };
  return (
    <div className="ms-root" style={{ minHeight: '100vh', background: conf.bg, color: conf.fg, display: 'flex', flexDirection: 'column' }}>
      <VitrineNav active={kind === 'lab' ? 'lab' : 'espace'} />
      <section style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'stretch' }}>
        <div style={{ padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="mono uppercase" style={{ marginBottom: 20, color: kind === 'lab' ? 'oklch(0.7 0.01 75)' : 'var(--ink-mute)' }}>{conf.eyebrow}</div>
          <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.025em', marginBottom: 28 }}>
            {conf.title} <span style={{ fontStyle: 'italic' }}>{conf.italic}</span>
          </h1>
          <p style={{ fontSize: 17, color: kind === 'lab' ? 'oklch(0.78 0.01 75)' : 'var(--ink-soft)', lineHeight: 1.55, marginBottom: 32, maxWidth: 460 }}>
            {conf.desc}
          </p>
          <form className="card" style={{
            background: kind === 'lab' ? 'oklch(0.22 0.008 75)' : 'var(--surface)',
            borderColor: kind === 'lab' ? 'oklch(0.30 0.008 75)' : 'var(--line)',
            padding: 28, maxWidth: 420,
          }}>
            <div style={{ marginBottom: 14 }}>
              <label className="field-label" style={{ color: kind === 'lab' ? 'oklch(0.7 0.01 75)' : 'var(--ink-mute)' }}>Email</label>
              <input className="input" type="email" placeholder="vous@exemple.be" style={{ background: kind === 'lab' ? 'oklch(0.18 0.008 75)' : 'var(--paper)', color: 'inherit', borderColor: kind === 'lab' ? 'oklch(0.30 0.008 75)' : 'var(--line)' }} />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label className="field-label" style={{ color: kind === 'lab' ? 'oklch(0.7 0.01 75)' : 'var(--ink-mute)' }}>Mot de passe</label>
              <input className="input" type="password" placeholder="••••••••" style={{ background: kind === 'lab' ? 'oklch(0.18 0.008 75)' : 'var(--paper)', color: 'inherit', borderColor: kind === 'lab' ? 'oklch(0.30 0.008 75)' : 'var(--line)' }} />
            </div>
            <a href={kind === 'lab' ? 'lab-app.html' : 'espace-app.html'} className="btn" style={{
              width: '100%', justifyContent: 'center', textDecoration: 'none',
              background: conf.accent, borderColor: conf.accent,
              color: kind === 'lab' ? 'var(--ink)' : 'var(--paper)',
            }}>
              Connexion <Icon name="arrow" size={13} />
            </a>
            <div className="mono" style={{ fontSize: 11, color: kind === 'lab' ? 'oklch(0.6 0 0)' : 'var(--ink-mute)', marginTop: 14, textAlign: 'center' }}>
              Mot de passe oublié ? · <a href="contact.html" style={{ color: 'inherit', textDecoration: 'underline' }}>besoin d'aide</a>
            </div>
          </form>
          <div style={{ marginTop: 24, fontSize: 13, color: kind === 'lab' ? 'oklch(0.7 0.01 75)' : 'var(--ink-soft)' }}>
            {kind === 'lab' ? 'Accès réservé · Dylan Monnier & équipe.' : <>Pas encore client ? <a href="contact.html" style={{ color: 'inherit', fontWeight: 500 }}>Réserver un appel découverte →</a></>}
          </div>
        </div>
        <div style={{ background: kind === 'lab' ? 'oklch(0.22 0.008 75)' : 'var(--paper-2)', position: 'relative', overflow: 'hidden', minHeight: 480 }}>
          <div style={{ position: 'absolute', inset: 32, border: '1px solid ' + (kind === 'lab' ? 'oklch(0.30 0.008 75)' : 'var(--line)'), borderRadius: 8, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {conf.brand}
              <div className="mono" style={{ fontSize: 11, color: kind === 'lab' ? 'oklch(0.6 0 0)' : 'var(--ink-mute)', marginTop: 8, letterSpacing: '0.06em' }}>v 2026.05 · build 1042</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {(kind === 'lab' ? [
                ['12', 'clients actifs'],
                ['68 / 80h', 'capacité ce mois'],
                ['4', 'devis en attente signature'],
              ] : [
                ['12,5h / 20h', 'consommées ce mois'],
                ['1', 'devis à signer'],
                ['3 mois', 'depuis ton onboarding'],
              ]).map(([v, l]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 0', borderBottom: '1px solid ' + (kind === 'lab' ? 'oklch(0.30 0.008 75)' : 'var(--line-soft)') }}>
                  <span className="mono uppercase" style={{ color: kind === 'lab' ? 'oklch(0.7 0.01 75)' : 'var(--ink-mute)' }}>{l}</span>
                  <span style={{ fontFamily: 'var(--display)', fontSize: 22, color: conf.accent }}>{v}</span>
                </div>
              ))}
            </div>
            <div className="mono" style={{ fontSize: 10, color: kind === 'lab' ? 'oklch(0.5 0 0)' : 'var(--ink-mute)', letterSpacing: '0.06em' }}>
              aperçu · données sécurisées · BE-cloud
            </div>
          </div>
        </div>
      </section>
      <CookieBanner />
    <Footer />
    </div>
  );
};
const Espace = () => <LoginPage kind="espace" />;
const Lab = () => <LoginPage kind="lab" />;

// Mount based on data-page
const root = document.getElementById('root');
const page = root.dataset.page;
const Cmp = { home: Home, tarifs: Tarifs, articles: Articles, article: Article, about: About, contact: Contact, merci: Merci, mentions: Mentions, confidentialite: Confidentialite, espace: Espace, lab: Lab }[page];
ReactDOM.createRoot(root).render(<Cmp />);
