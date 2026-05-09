/* global React, Icon, Ph */

// ─── Mon Espace — sidebar (chaleureuse, ivoire) ───
const EspaceSide = ({ active }) => {
  const items = [
    ['Accueil', 'home'],
    ['Heures', 'clock'],
    ['Missions', 'check'],
    ['Documents', 'document'],
    ['Devis', 'sign'],
    ['Messagerie', 'mail'],
    ['Mon forfait', 'gift'],
    ['Paramètres', 'settings'],
  ];
  return (
    <aside className="espace-sidebar" style={{
      width: 220, background: 'var(--paper-warm)', color: 'var(--ink)',
      display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--line)',
    }}>
      <div style={{ padding: '20px 22px 18px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 16, background: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--display)', fontWeight: 500, fontSize: 14, color: 'var(--paper)', letterSpacing: '-0.02em',
          }}>m.</div>
          <div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em' }}>Mon Espace</div>
            <div className="mono" style={{ fontSize: 9, color: 'var(--ink-mute)' }}>Dupuis SPRL</div>
          </div>
        </div>
      </div>
      <nav style={{ flex: 1, padding: 10 }}>
        {items.map(([n, icon]) => (
          <a key={n} href="#" style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '9px 12px', borderRadius: 6,
            fontSize: 13, color: active === n ? 'var(--ink)' : 'var(--ink-soft)',
            background: active === n ? 'var(--paper)' : 'transparent',
            fontWeight: active === n ? 500 : 400, marginBottom: 2,
            border: active === n ? '1px solid var(--line)' : '1px solid transparent',
          }}>
            <Icon name={icon} size={14} stroke={1.4} />
            <span>{n}</span>
          </a>
        ))}
      </nav>
      <div style={{ padding: 16, borderTop: '1px solid var(--line)' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Ph w={32} h={32} label="" radius={16} />
          <div style={{ fontSize: 11, lineHeight: 1.4 }}>
            <div style={{ fontWeight: 500 }}>Sophie Dupuis</div>
            <div style={{ color: 'var(--ink-mute)' }}>sophie@dupuis.be</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

// ─── Espace Accueil ───
const EspaceHome = () => {
  const consumed = 9.5, total = 20;
  const pct = (consumed / total) * 100;
  return (
    <div className="ms-root app-shell" style={{ height: '100%', background: 'var(--paper)' }}>
      <EspaceSide active="Accueil" />
      <main className="app-main">
        <header style={{ padding: '20px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line-soft)' }}>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em' }}>MARDI 12 MAI · 14:32</div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button className="btn btn-ghost btn-sm"><Icon name="bell" size={12} /> 2</button>
            <button className="btn btn-primary btn-sm"><Icon name="mail" size={11} /> écrire à Dylan</button>
          </div>
        </header>
        <div className="app-content" style={{ padding: '36px 56px', overflow: 'visible' }}>
          {/* Greeting */}
          <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 18, alignItems: 'center', marginBottom: 32 }}>
            <Ph w={64} h={64} radius={32} label="" />
            <div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 32, fontWeight: 400, letterSpacing: '-0.015em', lineHeight: 1.1 }}>
                Salut Sophie. <span style={{ fontStyle: 'italic', color: 'var(--ink-soft)' }}>Tout roule cette semaine.</span>
              </div>
              <div style={{ fontSize: 14, color: 'var(--ink-mute)', marginTop: 4 }}>
                Il te reste <strong style={{ color: 'var(--accent-ink)' }}>10,5 heures</strong> sur ton forfait Sérénité 20. Aucune action requise pour l’instant ✓
              </div>
            </div>
          </div>

          {/* Big hours dial */}
          <div className="card" style={{ padding: 36, marginBottom: 24, display: 'grid', gridTemplateColumns: '220px 1fr', gap: 36, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 200, height: 200 }}>
              <svg viewBox="0 0 200 200" width="200" height="200">
                <circle cx="100" cy="100" r="86" fill="none" stroke="var(--line)" strokeWidth="14" />
                <circle cx="100" cy="100" r="86" fill="none" stroke="var(--accent)" strokeWidth="14" strokeLinecap="round"
                  strokeDasharray={`${(pct / 100) * 540} 540`} transform="rotate(-90 100 100)" />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: 48, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1 }}>10,5</div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginTop: 4 }}>HEURES RESTANTES</div>
              </div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 8 }}>FORFAIT EN COURS · MAI 2026</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 28, fontWeight: 400, letterSpacing: '-0.015em', marginBottom: 14 }}>
                Sérénité <span className="mono" style={{ fontFamily: 'var(--mono)', fontSize: 22 }}>20h</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 20 }}>
                {[
                  ['Consommées', '9,5h', 'var(--ink)'],
                  ['Restantes', '10,5h', 'var(--accent-ink)'],
                  ['Renouvellement', '1er juin', 'var(--ink-mute)'],
                ].map(([l, v, c]) => (
                  <div key={l}>
                    <div className="kpi-label" style={{ marginBottom: 4 }}>{l}</div>
                    <div style={{ fontSize: 18, fontWeight: 500, color: c }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-primary btn-sm"><Icon name="plus" size={11} /> demander une mission</button>
                <button className="btn btn-ghost btn-sm"><Icon name="gift" size={11} /> changer de forfait</button>
              </div>
            </div>
          </div>

          {/* Two columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24 }}>
            {/* En cours */}
            <div>
              <div className="kpi-label" style={{ marginBottom: 10 }}>EN COURS · 3 MISSIONS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { t: 'Saisie factures Q1', s: 'Avancement 70 %', e: 'Livraison 14 mai', p: 70, k: 'accent' },
                  { t: 'Relances impayées (3)', s: '2 mails partis · 1 réponse reçue', e: 'En cours', p: 90, k: null },
                  { t: 'Préparation TVA Q2', s: 'À démarrer le 20 mai', e: 'Planifié', p: 0, k: null },
                ].map((m, i) => (
                  <div key={i} className="card" style={{ padding: '16px 20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 2 }}>{m.t}</div>
                        <div style={{ fontSize: 12, color: 'var(--ink-mute)' }}>{m.s}</div>
                      </div>
                      <span className="badge" style={m.k === 'accent' ? { background: 'var(--accent-pale)', color: 'var(--accent-ink)', borderColor: 'transparent' } : {}}>{m.e}</span>
                    </div>
                    <div className={`progress${m.k === 'accent' ? ' accent' : ''}`}><span style={{ width: m.p + '%' }} /></div>
                  </div>
                ))}
              </div>

              <div className="kpi-label" style={{ margin: '24px 0 10px' }}>À VALIDER · 1 DOCUMENT</div>
              <div className="card" style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <Ph w={48} h={60} label="" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2 }}>Devis 2026-118 — refonte courrier-type</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-mute)' }}>PDF · 2 pages · soumis le 11 mai</div>
                </div>
                <button className="btn btn-ghost btn-sm">aperçu</button>
                <button className="btn btn-primary btn-sm"><Icon name="check" size={11} /> signer</button>
              </div>
            </div>

            {/* Side */}
            <aside>
              <div className="kpi-label" style={{ marginBottom: 10 }}>UN MOT DE DYLAN</div>
              <div className="card" style={{ padding: 20, marginBottom: 20, background: 'var(--paper-warm)' }}>
                <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                  <Ph w={36} h={36} radius={18} label="" />
                  <div>
                    <div style={{ fontWeight: 500, fontSize: 13 }}>Dylan Monnier</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>il y a 2h</div>
                  </div>
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--ink-soft)', fontStyle: 'italic' }}>
                  « Sophie, j’ai bouclé la saisie Q1 plus vite que prévu. Tu pourrais préférer pousser le temps gagné sur les relances ce mois-ci ? Dis-moi. »
                </div>
                <button className="btn btn-ghost btn-sm" style={{ marginTop: 12 }}><Icon name="mail" size={11} /> répondre</button>
              </div>

              <div className="kpi-label" style={{ marginBottom: 10 }}>HISTORIQUE — RAPPORTS LIVRÉS</div>
              <div className="card" style={{ padding: 0 }}>
                {[
                  ['Avril 2026', 'rapport mensuel · 19h consommées', '2,1 Mo'],
                  ['Mars 2026', 'rapport mensuel · 18h consommées', '1,8 Mo'],
                  ['Février 2026', 'rapport mensuel · 20h consommées', '2,3 Mo'],
                ].map(([m, d, s], i) => (
                  <a key={m} href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: i < 2 ? '1px solid var(--line-soft)' : 'none', color: 'var(--ink)' }}>
                    <Icon name="file" size={14} stroke={1.4} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{m}</div>
                      <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{d}</div>
                    </div>
                    <span className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>{s}</span>
                    <Icon name="download" size={13} stroke={1.4} />
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

// ─── Espace heures (vue détaillée) ───
const EspaceHours = () => (
  <div className="ms-root app-shell" style={{ height: '100%' }}>
    <EspaceSide active="Heures" />
    <main className="app-main">
      <header style={{ padding: '20px 32px', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em' }}>COMPTEUR</div>
        <div style={{ fontFamily: 'var(--display)', fontSize: 28, fontWeight: 400, letterSpacing: '-0.015em', marginTop: 2 }}>Mes heures · mai 2026</div>
      </header>
      <div className="app-content" style={{ padding: '32px 56px', overflow: 'visible' }}>
        {/* horizontal bar */}
        <div className="card" style={{ padding: 28, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
            <div style={{ fontFamily: 'var(--display)', fontSize: 42, fontWeight: 400, letterSpacing: '-0.02em' }}>
              <span>9,5</span><span style={{ color: 'var(--ink-mute)' }}> / 20h</span>
            </div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>renouvellement dans 19 jours</div>
          </div>
          {/* segmented bar */}
          <div style={{ display: 'flex', gap: 2, height: 14, marginBottom: 8 }}>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} style={{
                flex: 1, borderRadius: 2,
                background: i < 9 ? 'var(--ink)' : i === 9 ? 'var(--accent)' : 'var(--paper-warm-2)',
              }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>0h</span>
            <span className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>20h</span>
          </div>
        </div>

        {/* ledger */}
        <div className="kpi-label" style={{ marginBottom: 10 }}>DÉTAIL · CHAQUE MISSION DÉCRÉMENTE TES HEURES</div>
        <div className="card" style={{ padding: 0 }}>
          <table className="tbl">
            <thead><tr><th>Date</th><th>Mission</th><th style={{ textAlign: 'right' }}>Durée</th><th style={{ textAlign: 'right' }}>Solde</th></tr></thead>
            <tbody>
              {[
                ['12/05', 'Saisie factures Q1', '1,2h', '10,5h'],
                ['08/05', 'Relances impayées', '0,8h', '11,7h'],
                ['06/05', 'Permanence NL · matinée', '2,0h', '12,5h'],
                ['28/04', 'Devis 2026-118', '0,4h', '14,5h'],
                ['26/04', 'CR réunion conseil', '1,1h', '14,9h'],
                ['18/04', 'Saisie notes de frais', '0,6h', '16,0h'],
                ['12/04', 'Refonte courrier-type', '1,4h', '16,6h'],
                ['08/04', 'Permanence NL', '2,0h', '18,0h'],
              ].map(([d, m, h, s]) => (
                <tr key={d}>
                  <td className="mono" style={{ fontSize: 12, color: 'var(--ink-mute)', width: 60 }}>{d}</td>
                  <td style={{ color: 'var(--ink)', fontWeight: 500 }}>{m}</td>
                  <td className="mono" style={{ fontSize: 12, textAlign: 'right' }}>− {h}</td>
                  <td className="mono" style={{ fontSize: 12, textAlign: 'right', color: 'var(--ink-mute)' }}>{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
);

Object.assign(window, { EspaceSide, EspaceHome, EspaceHours });
