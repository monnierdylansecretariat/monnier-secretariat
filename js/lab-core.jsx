/* global React, Icon, Ph, LabSide, TopBar */

// ─────────────── Monnier Lab — écrans ───────────────

// ─── Dashboard hybride : cockpit + timer sticky ───
const LabDashboard = () => {
  const [running, setRunning] = React.useState(true);
  const months = [3.2, 4.0, 3.8, 4.5, 4.1, 4.6, 4.9, 4.3, 4.7, 5.1, 4.8, 4.27];
  const max = Math.max(...months);

  return (
    <div className="ms-root app-shell" style={{ height: '100%' }}>
      <LabSide active="Dashboard" />
      <main className="app-main">
        <TopBar
          crumb={['monnier', 'LAB', 'dashboard']}
          right={
            <>
              <button className="btn btn-ghost btn-sm"><Icon name="search" size={12} /> rechercher · ⌘K</button>
              <Icon name="bell" size={14} />
              <div className="avatar">DM</div>
            </>
          }
        />
        <div className="app-content" style={{ padding: '24px 28px 0', overflow: 'visible' }}>
          {/* greeting + sticky timer */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16, marginBottom: 20 }}>
            <div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 32, fontWeight: 400, letterSpacing: '-0.015em', marginBottom: 4 }}>
                Bonjour Dylan, mardi 12 mai.
              </div>
              <div style={{ fontSize: 14, color: 'var(--ink-soft)' }}>Vue d’ensemble · 4 missions actives · 3 alertes</div>
            </div>
            <div style={{ background: 'var(--ink)', color: 'var(--paper)', borderRadius: 8, padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div className="mono" style={{ fontSize: 10, color: 'oklch(0.7 0.01 75)', letterSpacing: '0.08em', marginBottom: 4 }}>TIMER · MISSION EN COURS</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 28, fontWeight: 500 }}>01:24:36</span>
                  <span style={{ fontSize: 12, color: 'oklch(0.78 0.01 75)' }}>Saisie facturation · Dupuis SPRL</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <button className="btn" style={{ background: running ? 'var(--accent)' : 'var(--paper)', color: running ? 'var(--paper)' : 'var(--ink)' }} onClick={() => setRunning(r => !r)}>
                  <Icon name={running ? 'pause' : 'play'} size={11} /> {running ? 'pause' : 'reprendre'}
                </button>
                <button className="btn btn-ghost btn-sm" style={{ background: 'transparent', borderColor: 'oklch(0.45 0 0)', color: 'oklch(0.85 0 0)' }}><Icon name="stop" size={10} /> arrêter</button>
              </div>
            </div>
          </div>

          {/* KPI row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
            {[
              ['CA mensuel', '4 270 €', '+ 12 % vs avr.', 'accent'],
              ['Heures prestées', '68 / 80', '85 % capacité', null],
              ['Clients actifs', '12', '+ 1 ce mois', null],
              ['Devis à signer', '3', '— 1 980 € pipeline', 'warn'],
            ].map(([l, v, d, t]) => (
              <div key={l} className="card">
                <div className="kpi-label">{l}</div>
                <div className="kpi-value">{v}</div>
                <div className="kpi-delta" style={t === 'accent' ? { color: 'var(--accent-ink)' } : t === 'warn' ? { color: 'var(--warn)' } : {}}>{d}</div>
              </div>
            ))}
          </div>

          {/* Two col main */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14 }}>
            {/* missions en cours */}
            <div className="card" style={{ padding: 0 }}>
              <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)' }}>
                <div>
                  <div className="kpi-label" style={{ marginBottom: 2 }}>MISSIONS EN COURS</div>
                  <div style={{ fontSize: 16, fontWeight: 500 }}>7 actives</div>
                </div>
                <button className="btn btn-ghost btn-sm"><Icon name="plus" size={11} /> nouvelle</button>
              </div>
              <table className="tbl">
                <thead><tr><th>Mission</th><th>Client</th><th>Avancement</th><th>Échéance</th></tr></thead>
                <tbody>
                  {[
                    ['Saisie factures Q1', 'Dupuis SPRL', 70, '14 mai', null],
                    ['Rédaction CR conseil', 'Atelier Lemaire', 40, '16 mai', null],
                    ['Relances impayées', 'Café Central', 90, '13 mai', null],
                    ['Trad notice FR→NL', 'TechBE', 25, '22 mai', null],
                    ['Permanence NL', 'Cabinet Wauters', 60, 'récurrent', 'accent'],
                  ].map(([m, c, p, e, t]) => (
                    <tr key={m}>
                      <td style={{ color: 'var(--ink)', fontWeight: 500 }}>{m}</td>
                      <td>{c}</td>
                      <td style={{ width: 140 }}><div className={`progress${t === 'accent' ? ' accent' : ''}`}><span style={{ width: p + '%' }} /></div></td>
                      <td className="mono" style={{ fontSize: 11 }}>{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* aujourd'hui */}
            <div className="card" style={{ padding: 0 }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--line)' }}>
                <div className="kpi-label" style={{ marginBottom: 2 }}>AUJOURD’HUI · 12 MAI</div>
                <div style={{ fontSize: 16, fontWeight: 500 }}>5 créneaux</div>
              </div>
              <ul style={{ padding: 8 }}>
                {[
                  ['09:00', 'Appel découverte · Mme Renard', false],
                  ['10:30', 'Saisie factures Dupuis', true],
                  ['13:00', 'Permanence Wauters', true],
                  ['15:00', 'Trad NL · TechBE', false],
                  ['17:00', 'Relance devis · Lemaire', false],
                ].map(([h, t, done]) => (
                  <li key={h} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderBottom: '1px solid var(--line-soft)' }}>
                    <span className="mono" style={{ fontSize: 12, color: 'var(--ink-mute)', width: 44 }}>{h}</span>
                    <span style={{ fontSize: 13, flex: 1, textDecoration: done ? 'line-through' : 'none', color: done ? 'var(--ink-mute)' : 'var(--ink)' }}>{t}</span>
                    <span style={{ width: 14, height: 14, border: '1.5px solid var(--line)', borderRadius: 4, background: done ? 'var(--ink)' : 'transparent', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--paper)' }}>
                      {done && <Icon name="check" size={9} stroke={2} />}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* secondary row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 1fr', gap: 14, marginTop: 14, marginBottom: 20 }}>
            {/* alertes */}
            <div className="card">
              <div className="kpi-label" style={{ marginBottom: 12 }}>ALERTES</div>
              {[
                ['Forfait Dupuis · 9.5/10h consommées', 'warn'],
                ['Facture #1224 impayée 32 jours', 'danger'],
                ['Renouvellement contrat Lemaire — juin', null],
              ].map(([t, k], i) => (
                <div key={i} style={{ display: 'flex', gap: 8, padding: '8px 0', borderBottom: i < 2 ? '1px solid var(--line-soft)' : 'none', fontSize: 12 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 3, marginTop: 6, background: k === 'danger' ? 'var(--danger)' : k === 'warn' ? 'var(--warn)' : 'var(--ink-mute)' }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
            {/* CA mensuel chart */}
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <div className="kpi-label">CA · 12 MOIS</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>54 280 € total</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 100 }}>
                {months.map((v, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: '100%', height: (v / max) * 80, background: i === months.length - 1 ? 'var(--accent)' : 'var(--ink)', borderRadius: 1 }} />
                    <span className="mono" style={{ fontSize: 9, color: 'var(--ink-mute)' }}>{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Top clients */}
            <div className="card">
              <div className="kpi-label" style={{ marginBottom: 12 }}>TOP CLIENTS · CA</div>
              {[['Dupuis SPRL', 1180], ['Atelier Lemaire', 980], ['Cabinet Wauters', 790], ['TechBE', 480]].map(([n, v]) => (
                <div key={n} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 12 }}>
                  <span>{n}</span>
                  <span className="mono">{v} €</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// ─── Fiche client ───
const LabClient = () => (
  <div className="ms-root app-shell" style={{ height: '100%' }}>
    <LabSide active="Clients" />
    <main className="app-main">
      <TopBar crumb={['monnier', 'LAB', 'clients', 'dupuis-sprl']} right={
        <>
          <button className="btn btn-ghost btn-sm"><Icon name="upload" size={11} /> exporter</button>
          <button className="btn btn-primary btn-sm"><Icon name="plus" size={11} /> nouvelle mission</button>
        </>
      } />
      <div className="app-content" style={{ overflow: 'visible' }}>
        {/* header fiche */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 22 }}>
          <div style={{ display: 'flex', gap: 18 }}>
            <div className="avatar avatar-xl" style={{ background: 'var(--ink)', color: 'var(--paper)', fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 36 }}>D</div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: 32, fontWeight: 400, letterSpacing: '-0.015em' }}>Dupuis SPRL</span>
                <span className="badge badge-accent">Sérénité 20</span>
                <span className="badge badge-ok badge-dot">actif</span>
              </div>
              <div className="mono" style={{ fontSize: 12, color: 'var(--ink-mute)' }}>BE 0858.452.221 · Liège · contact : sophie@dupuis.be · +32 4 230 12 88</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-ghost btn-sm">éditer</button>
            <button className="btn btn-ghost btn-sm">archiver</button>
          </div>
        </div>

        {/* stats fiche */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 22 }}>
          {[
            ['FORFAIT', 'Sérénité 20'],
            ['HEURES MOIS', '9.5h ⚠ / 20h'],
            ['CA YTD', '4 950 €'],
            ['ANCIENNETÉ', '1 an 6 mois'],
          ].map(([l, v]) => (
            <div key={l} className="card">
              <div className="kpi-label">{l}</div>
              <div style={{ fontSize: 22, fontWeight: 500, marginTop: 6, letterSpacing: '-0.01em' }}>{v}</div>
            </div>
          ))}
        </div>

        {/* tabs */}
        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--line)', marginBottom: 18 }}>
          {['Activité', 'Missions · 14', 'Documents · 28', 'Devis · 4', 'Notes'].map((t, i) => (
            <span key={t} style={{
              padding: '10px 16px', fontSize: 13, cursor: 'pointer',
              borderBottom: i === 0 ? '2px solid var(--ink)' : '2px solid transparent',
              color: i === 0 ? 'var(--ink)' : 'var(--ink-mute)',
              fontWeight: i === 0 ? 500 : 400,
              marginBottom: -1,
            }}>{t}</span>
          ))}
        </div>

        {/* timeline activité */}
        <div className="card" style={{ padding: 0 }}>
          <table className="tbl">
            <thead><tr><th>Date</th><th>Activité</th><th style={{ width: 80 }}>Heures</th><th>Statut</th></tr></thead>
            <tbody>
              {[
                ['12/05', 'Saisie factures Q1', '1.2h', 'en cours', null],
                ['08/05', 'Relances impayées (3)', '0.8h', 'fait', null],
                ['06/05', 'Permanence NL', '2h', 'facturé', null],
                ['28/04', 'Devis 2026-118', '0.4h', 'validé', null],
                ['26/04', 'CR réunion conseil', '1.1h', 'livré', null],
                ['18/04', 'Saisie notes de frais', '0.6h', 'fait', null],
                ['12/04', 'Refonte courrier-type', '1.4h', 'livré', null],
              ].map(([d, a, h, s], i) => (
                <tr key={i}>
                  <td className="mono" style={{ fontSize: 12, color: 'var(--ink-mute)', width: 60 }}>{d}</td>
                  <td style={{ color: 'var(--ink)', fontWeight: 500 }}>{a}</td>
                  <td className="mono" style={{ fontSize: 12 }}>{h}</td>
                  <td>
                    <span className="badge" style={s === 'en cours' ? { background: 'var(--accent-pale)', color: 'var(--accent-ink)', borderColor: 'transparent' } : s === 'facturé' || s === 'validé' || s === 'livré' || s === 'fait' ? { background: 'oklch(0.92 0.04 145)', color: 'oklch(0.40 0.10 145)', borderColor: 'transparent' } : {}}>{s}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
);

// ─── Timesheet semaine ───
const LabTimesheet = () => {
  const days = ['Lun 12', 'Mar 13', 'Mer 14', 'Jeu 15', 'Ven 16'];
  // grid: 9-18 = 10h
  const events = [
    { day: 0, start: 9, dur: 1.5, t: 'Permanence', c: 'Wauters', tone: 'sand' },
    { day: 0, start: 14, dur: 2, t: 'Saisie factures', c: 'Dupuis SPRL', tone: 'ink' },
    { day: 0, start: 16.5, dur: 1, t: 'Trad NL', c: 'TechBE', tone: 'sand' },
    { day: 1, start: 10, dur: 2.5, t: 'Appels découverte', c: '3 prospects', tone: 'accent' },
    { day: 1, start: 14, dur: 3, t: 'Rédaction CR', c: 'Lemaire', tone: 'ink' },
    { day: 2, start: 9, dur: 4, t: 'Permanence', c: 'Wauters', tone: 'sand' },
    { day: 2, start: 14, dur: 2.5, t: 'Saisie comptable', c: 'Dupuis SPRL', tone: 'ink' },
    { day: 3, start: 9.5, dur: 1.5, t: 'Relances', c: 'Café Central', tone: 'accent' },
    { day: 3, start: 11.5, dur: 1, t: 'Stand-up interne', c: 'admin', tone: 'sand' },
    { day: 3, start: 13.5, dur: 4, t: 'Trad notice', c: 'TechBE', tone: 'ink' },
    { day: 4, start: 9, dur: 2, t: 'Relances devis', c: 'pipeline', tone: 'ink' },
    { day: 4, start: 13, dur: 4, t: 'Catch-up clients', c: 'Vermeer & Co · Studio Une', tone: 'sand' },
  ];
  const tone = (t) => t === 'ink' ? { bg: 'var(--ink)', fg: 'var(--paper)' } :
    t === 'accent' ? { bg: 'var(--accent)', fg: 'var(--paper)' } :
      { bg: 'var(--accent-pale)', fg: 'var(--accent-ink)' };

  return (
    <div className="ms-root app-shell" style={{ height: '100%' }}>
      <LabSide active="Timesheet" />
      <main className="app-main">
        <TopBar crumb={['monnier', 'LAB', 'timesheet', 'sem 20']} right={
          <>
            <button className="btn btn-ghost btn-sm">← →</button>
            <button className="btn btn-ghost btn-sm">Aujourd’hui</button>
            <button className="btn btn-primary btn-sm"><Icon name="plus" size={11} /> nouveau créneau</button>
          </>
        } />
        <div className="app-content" style={{ overflow: 'visible' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
            <div>
              <div className="kpi-label" style={{ marginBottom: 4 }}>SEMAINE 20 · 12 — 16 MAI 2026</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 28, fontWeight: 400, letterSpacing: '-0.015em' }}>
                Capacité <span style={{ color: 'var(--accent-ink)' }}>28h</span> / 35h
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['Semaine', 'Jour', 'Mois'].map((v, i) => (
                <button key={v} className={`btn btn-sm ${i === 0 ? 'btn-primary' : 'btn-ghost'}`}>{v}</button>
              ))}
            </div>
          </div>

          {/* grid */}
          <div className="card" style={{ padding: 0, display: 'grid', gridTemplateColumns: '60px repeat(5, 1fr)' }}>
            <div style={{ borderBottom: '1px solid var(--line)' }} />
            {days.map(d => (
              <div key={d} style={{ padding: '12px', borderBottom: '1px solid var(--line)', borderLeft: '1px solid var(--line)', fontSize: 12, fontWeight: 500 }}>{d}</div>
            ))}
            {/* time column + day columns */}
            <div style={{ position: 'relative' }}>
              {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(h => (
                <div key={h} style={{ height: 56, padding: '4px 8px', fontSize: 10, color: 'var(--ink-mute)', fontFamily: 'var(--mono)', borderRight: '1px solid var(--line)' }}>{h}:00</div>
              ))}
            </div>
            {days.map((d, di) => (
              <div key={d} style={{ position: 'relative', borderLeft: '1px solid var(--line)' }}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                  <div key={i} style={{ height: 56, borderBottom: '1px solid var(--line-soft)' }} />
                ))}
                {events.filter(e => e.day === di).map((e, i) => {
                  const top = (e.start - 9) * 56 + 2;
                  const h = e.dur * 56 - 4;
                  const c = tone(e.tone);
                  return (
                    <div key={i} style={{
                      position: 'absolute', left: 4, right: 4, top, height: h,
                      background: c.bg, color: c.fg, padding: '6px 8px',
                      borderRadius: 4, fontSize: 11, lineHeight: 1.3, overflow: 'hidden',
                    }}>
                      <div style={{ fontWeight: 500 }}>{e.t}</div>
                      <div style={{ fontSize: 10, opacity: 0.7 }}>{e.c}</div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

Object.assign(window, { LabDashboard, LabClient, LabTimesheet });
