/* global React, Icon, Ph, EspaceSide */

// ─── Changer de forfait ───
const EspaceChangePlan = () => {
  const [pick, setPick] = React.useState('30');
  const plans = [
    { k: '10', name: 'Essentiel', price: 490, hours: 10, blurb: 'Quelques tâches à confier sans engagement', features: ['Admin courant', 'Pré-compta', 'Relances'] },
    { k: '20', name: 'Sérénité', price: 790, hours: 20, blurb: 'Forfait actuel — équilibre confort/budget', features: ['Tout Essentiel', 'Permanence tél.', 'Réunions hebdo'], current: true },
    { k: '30', name: 'Confort', price: 990, hours: 30, blurb: 'On bosse comme un binôme à temps partiel', features: ['Tout Sérénité', 'RH light', 'Community'] },
  ];
  return (
    <div className="ms-root app-shell" style={{ height: '100%' }}>
      <EspaceSide active="Mon forfait" />
      <main className="app-main">
        <header style={{ padding: '20px 32px', borderBottom: '1px solid var(--line-soft)' }}>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em' }}>MON FORFAIT</div>
          <div style={{ fontFamily: 'var(--display)', fontSize: 28, fontWeight: 400, letterSpacing: '-0.015em', marginTop: 2 }}>Tu veux changer de formule ?</div>
        </header>
        <div className="app-content" style={{ padding: '32px 56px', overflow: 'visible' }}>
          <div style={{ background: 'var(--paper-warm)', padding: '14px 20px', borderRadius: 4, fontSize: 13, marginBottom: 28, lineHeight: 1.5 }}>
            <strong>Hello Sophie.</strong> Ton forfait <em>Sérénité 20</em> est actif jusqu’au <strong>31 mai</strong>. Tout changement prend effet le 1er juin, au prorata. Pas d’engagement.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 28 }}>
            {plans.map(p => {
              const selected = pick === p.k;
              return (
                <div key={p.k} onClick={() => setPick(p.k)} className="card" style={{
                  padding: 24, cursor: 'pointer', position: 'relative',
                  borderColor: selected ? 'var(--ink)' : 'var(--line)',
                  borderWidth: selected ? 2 : 1, transform: selected ? 'translateY(-2px)' : 'none',
                  background: selected ? 'var(--paper)' : 'var(--paper)',
                  transition: 'all 160ms ease',
                }}>
                  {p.current && <span className="badge badge-accent" style={{ position: 'absolute', top: 14, right: 14 }}>actuel</span>}
                  <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 4 }}>{p.k}H/MOIS</div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 500, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-mute)', minHeight: 36, marginBottom: 14 }}>{p.blurb}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 14 }}>
                    <span style={{ fontFamily: 'var(--display)', fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em' }}>{p.price}€</span>
                    <span className="mono" style={{ fontSize: 12, color: 'var(--ink-mute)' }}>/mois HT</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {p.features.map(f => (
                      <div key={f} style={{ display: 'flex', gap: 8, fontSize: 12 }}>
                        <Icon name="check" size={11} stroke={1.6} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Resumé */}
          <div className="card" style={{ padding: 24, display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 4 }}>RÉSUMÉ DU CHANGEMENT</div>
              <div style={{ fontSize: 14, lineHeight: 1.6 }}>
                Sérénité 20 → <strong>{plans.find(p => p.k === pick).name} {pick}</strong>. Différence mensuelle : <strong style={{ color: 'var(--accent-ink)' }}>+{plans.find(p => p.k === pick).price - 790} €</strong> HT. Effective le 1er juin 2026.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-ghost btn-sm">en parler à Dylan</button>
              <button className="btn btn-primary btn-sm"><Icon name="check" size={11} /> confirmer le changement</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// ─── Messagerie ───
const EspaceInbox = () => {
  const threads = [
    { name: 'Dylan Monnier', last: 'Sophie, j’ai bouclé la saisie Q1…', t: '14:32', u: true, role: 'secrétaire', active: true },
    { name: 'Devis #2026-118', last: 'Auto · soumis pour validation', t: 'hier', u: false, role: 'système' },
    { name: 'Dylan Monnier', last: 'OK pour la trad NL, je m’en occupe', t: '08/05', u: false, role: 'secrétaire' },
    { name: 'Rapport mensuel · avril', last: 'Auto · livré dans tes documents', t: '02/05', u: false, role: 'système' },
    { name: 'Dylan Monnier', last: 'Le devis Lemaire tourne, on en parle ?', t: '28/04', u: false, role: 'secrétaire' },
  ];
  const messages = [
    { who: 'me', t: '14:18', text: 'Hello Dylan, dis-moi, j’ai vu que tu as bouclé la saisie plus tôt — il me reste combien d’heures pour ce mois ?' },
    { who: 'them', t: '14:21', text: 'Salut ! Tu es à 9,5 / 20 → 10,5h dispos. Si tu veux, je pousse les heures gagnées sur les relances impayées (3 dossiers).' },
    { who: 'them', t: '14:21', text: 'Je t’envoie un récap ce soir.', soft: true },
    { who: 'me', t: '14:25', text: 'Parfait, vas-y. Et est-ce qu’on peut anticiper la TVA Q2 dès le 20 ?' },
    { who: 'them', t: '14:32', text: 'Yes, je bloque la matinée du 20. J’ouvre une mission « Préparation TVA Q2 » dans ton espace, tu auras la trace.', attach: 'Devis 2026-118.pdf · 84 Ko' },
  ];

  return (
    <div className="ms-root app-shell" style={{ height: '100%' }}>
      <EspaceSide active="Messagerie" />
      <main className="app-main" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', overflow: 'hidden' }}>
        {/* threads */}
        <aside style={{ borderRight: '1px solid var(--line)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '20px 20px 14px', borderBottom: '1px solid var(--line-soft)' }}>
            <div style={{ fontFamily: 'var(--display)', fontSize: 20, fontWeight: 500, letterSpacing: '-0.015em' }}>Messages</div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', marginTop: 2 }}>1 non lu</div>
          </div>
          <div style={{ flex: 1, overflow: 'auto' }}>
            {threads.map((th, i) => (
              <div key={i} style={{
                padding: '14px 20px', borderBottom: '1px solid var(--line-soft)', cursor: 'pointer',
                background: th.active ? 'var(--paper-warm)' : 'transparent',
                borderLeft: th.active ? '2px solid var(--accent)' : '2px solid transparent',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontWeight: th.u ? 600 : 500, fontSize: 13 }}>{th.name}</span>
                  <span className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>{th.t}</span>
                </div>
                <div style={{ fontSize: 12, color: th.u ? 'var(--ink)' : 'var(--ink-mute)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{th.last}</div>
                <div className="mono" style={{ fontSize: 9, color: 'var(--ink-mute)', marginTop: 4, letterSpacing: '0.08em' }}>{th.role.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </aside>

        {/* convo */}
        <section style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <header style={{ padding: '18px 28px', borderBottom: '1px solid var(--line-soft)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <Ph w={36} h={36} radius={18} label="" />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500, fontSize: 14 }}>Dylan Monnier</div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>en ligne · répond habituellement en moins d’1h</div>
            </div>
            <button className="btn btn-ghost btn-sm">détails</button>
          </header>
          <div style={{ flex: 1, padding: 28, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 12, background: 'var(--paper)' }}>
            <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--ink-mute)' }} className="mono">— mardi 12 mai —</div>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.who === 'me' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '70%',
                  padding: '10px 14px', borderRadius: 12,
                  background: m.who === 'me' ? 'var(--ink)' : 'var(--paper-warm)',
                  color: m.who === 'me' ? 'var(--paper)' : 'var(--ink)',
                  border: m.who === 'me' ? 'none' : '1px solid var(--line)',
                  borderBottomRightRadius: m.who === 'me' ? 4 : 12,
                  borderBottomLeftRadius: m.who === 'me' ? 12 : 4,
                  fontSize: 13, lineHeight: 1.5,
                }}>
                  <div>{m.text}</div>
                  {m.attach && (
                    <div style={{ marginTop: 8, padding: '6px 10px', background: 'var(--paper)', color: 'var(--ink)', borderRadius: 4, fontSize: 11, display: 'flex', gap: 8, alignItems: 'center' }}>
                      <Icon name="file" size={11} stroke={1.4} />
                      <span className="mono">{m.attach}</span>
                    </div>
                  )}
                  <div className="mono" style={{ fontSize: 9, color: m.who === 'me' ? 'oklch(0.7 0.01 75)' : 'var(--ink-mute)', marginTop: 4, textAlign: 'right' }}>{m.t}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: 18, borderTop: '1px solid var(--line-soft)', display: 'flex', gap: 10, alignItems: 'center' }}>
            <button className="btn btn-ghost btn-sm"><Icon name="plus" size={11} /></button>
            <input className="input" style={{ flex: 1 }} placeholder="Réponds à Dylan…" />
            <button className="btn btn-primary"><Icon name="check" size={11} /> envoyer</button>
          </div>
        </section>
      </main>
    </div>
  );
};

Object.assign(window, { EspaceChangePlan, EspaceInbox });
