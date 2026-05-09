/* global React, Icon, LabSide, TopBar */

// ─── Éditeur d'articles ───
const LabEditor = () => (
  <div className="ms-root app-shell" style={{ height: '100%' }}>
    <LabSide active="Articles" />
    <main className="app-main">
      <TopBar crumb={['monnier', 'LAB', 'articles', 'comment-automatiser-relances']} right={
        <>
          <span className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}><span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: 3, background: 'var(--accent-ink)', marginRight: 6 }} />enregistré · il y a 12s</span>
          <button className="btn btn-ghost btn-sm">aperçu vitrine ↗</button>
          <button className="btn btn-primary btn-sm"><Icon name="upload" size={11} /> publier</button>
        </>
      } />
      <div className="app-content" style={{ overflow: 'visible', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
        <div>
          <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
            {['Éditer', 'SEO', 'Aperçu vitrine'].map((t, i) => (
              <button key={t} className={`btn btn-sm ${i === 0 ? 'btn-primary' : 'btn-ghost'}`}>{t}</button>
            ))}
          </div>
          <div className="card" style={{ padding: '36px 44px' }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 12 }}>CATÉGORIE · OUTILS &amp; MÉTHODES</div>
            <h1 contentEditable suppressContentEditableWarning style={{ fontFamily: 'var(--display)', fontSize: 36, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 16, outline: 'none' }}>
              Comment automatiser ses relances clients
            </h1>
            <p contentEditable suppressContentEditableWarning style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.5, marginBottom: 24, outline: 'none' }}>
              Trois flows simples, du CSV au mail prêt à envoyer.
            </p>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', display: 'flex', gap: 14, marginBottom: 24 }}>
              <span>par Dylan Monnier</span><span>·</span><span>6 min de lecture</span><span>·</span><span>publication prévue 13 mai</span>
            </div>
            <div style={{
              height: 200, marginBottom: 24,
              backgroundImage: 'repeating-linear-gradient(45deg, var(--paper-warm), var(--paper-warm) 8px, var(--paper-warm-2) 8px, var(--paper-warm-2) 16px)',
              border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-mute)',
            }}>image de couverture · drag &amp; drop</div>
            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 18 }}>
              Quand on facture 30 clients par mois, courir après les paiements grignote deux heures qu'on aimerait mettre ailleurs. Voici les 3 automatisations que j'ai mises en place dans <strong>Monnier Lab</strong>, avec un coût marginal nul.
            </p>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.015em', marginTop: 28, marginBottom: 12 }}>1. Détecter les retards automatiquement</h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 14 }}>
              À J+7, J+15 et J+30, un script Make compare l'état de paiement à la date d'émission. Si retard, un brouillon de mail est créé dans Pennylane…
            </p>
            <pre style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '14px 18px', borderRadius: 4, fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.6, marginBottom: 18 }}>
{`if (today - issue >= 7 && status !== 'paid') {
  draft.compose({
    to: client.email,
    template: 'relance-douce',
  });
}`}
            </pre>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-mute)', fontStyle: 'italic' }}>
              <span className="mono" style={{ fontSize: 11, marginRight: 8 }}>+</span>
              clique pour ajouter un bloc · texte, code, image, citation…
            </p>
          </div>
        </div>
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card">
            <div className="kpi-label" style={{ marginBottom: 10 }}>STATUT</div>
            <span className="badge badge-accent">brouillon</span>
            <div style={{ marginTop: 12, fontSize: 12 }}>
              <div style={{ marginBottom: 4 }}>Programmer pour <strong>13 mai · 09:00</strong></div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>Le post sera poussé sur la vitrine via webhook</div>
            </div>
          </div>
          <div className="card">
            <div className="kpi-label" style={{ marginBottom: 10 }}>SEO</div>
            <div style={{ fontSize: 12, lineHeight: 1.5 }}>
              <div style={{ color: 'var(--ink-mute)', marginBottom: 2 }}>Titre — 48 / 60</div>
              <div style={{ marginBottom: 10 }}>Comment automatiser ses relances clients</div>
              <div style={{ color: 'var(--ink-mute)', marginBottom: 2 }}>Slug</div>
              <div className="mono" style={{ marginBottom: 10 }}>/articles/automatiser-relances-clients</div>
              <div style={{ color: 'var(--ink-mute)', marginBottom: 2 }}>Score Lighthouse</div>
              <div className="progress" style={{ marginTop: 4 }}><span style={{ width: '92%' }} /></div>
            </div>
          </div>
          <div className="card">
            <div className="kpi-label" style={{ marginBottom: 10 }}>TAGS</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['automatisation', 'make', 'pennylane', 'relances', '+ ajouter'].map((t, i) => (
                <span key={t} className="badge" style={i === 4 ? { borderStyle: 'dashed', color: 'var(--ink-mute)' } : {}}>{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  </div>
);

// ─── Agenda ───
const LabAgenda = () => (
  <div className="ms-root app-shell" style={{ height: '100%' }}>
    <LabSide active="Agenda" />
    <main className="app-main">
      <TopBar crumb={['monnier', 'LAB', 'agenda', 'mai 2026']} right={
        <>
          <button className="btn btn-ghost btn-sm">← →</button>
          <button className="btn btn-ghost btn-sm">aujourd'hui</button>
          <button className="btn btn-primary btn-sm"><Icon name="plus" size={11} /> RDV</button>
        </>
      } />
      <div className="app-content" style={{ overflow: 'visible' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: 32, fontWeight: 400, letterSpacing: '-0.015em' }}>
            mai <span style={{ fontStyle: 'italic', color: 'var(--ink-mute)' }}>2026</span>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['Mois', 'Semaine', 'Jour', 'Liste'].map((v, i) => (
              <button key={v} className={`btn btn-sm ${i === 0 ? 'btn-primary' : 'btn-ghost'}`}>{v}</button>
            ))}
          </div>
        </div>
        <div className="card" style={{ padding: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: '1px solid var(--line)' }}>
            {['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'].map(d => (
              <div key={d} className="mono" style={{ padding: '10px 14px', fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em', borderRight: '1px solid var(--line)' }}>{d}</div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gridAutoRows: 110 }}>
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 3;
              const isCur = day >= 1 && day <= 31;
              const isToday = day === 12;
              const evts = {
                4: [{ t: 'Standup', tone: 'sand' }],
                5: [{ t: 'Permanence', tone: 'sand' }, { t: 'Saisie', tone: 'ink' }],
                6: [{ t: 'RDV Lemaire', tone: 'accent' }],
                7: [{ t: 'Trad NL', tone: 'ink' }],
                12: [{ t: '09:00 Mme Renard', tone: 'accent' }, { t: '13:00 Wauters', tone: 'sand' }, { t: '+ 3', tone: 'ink' }],
                13: [{ t: 'CR conseil', tone: 'ink' }],
                14: [{ t: 'Permanence', tone: 'sand' }],
                15: [{ t: 'Facturation', tone: 'accent' }],
                19: [{ t: 'Standup', tone: 'sand' }],
                20: [{ t: 'RDV TechBE', tone: 'accent' }],
                22: [{ t: 'Catch-up', tone: 'ink' }],
                26: [{ t: 'Audit', tone: 'accent' }],
                28: [{ t: 'Clôture', tone: 'ink' }, { t: 'Permanence', tone: 'sand' }],
              };
              const dayEvents = isCur ? (evts[day] || []) : [];
              return (
                <div key={i} style={{
                  borderRight: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)',
                  padding: 6, opacity: isCur ? 1 : 0.35,
                  background: isToday ? 'var(--accent-pale)' : 'transparent',
                }}>
                  <div className="mono" style={{ fontSize: 11, color: isToday ? 'var(--accent-ink)' : 'var(--ink-soft)', fontWeight: isToday ? 600 : 400, marginBottom: 4 }}>
                    {isCur ? day : (day < 1 ? 27 + day : day - 31)}
                  </div>
                  {dayEvents.map((e, j) => {
                    const c = e.tone === 'ink' ? { bg: 'var(--ink)', fg: 'var(--paper)' } :
                      e.tone === 'accent' ? { bg: 'var(--accent)', fg: 'var(--paper)' } :
                        { bg: 'var(--paper-warm-2)', fg: 'var(--ink)' };
                    return (
                      <div key={j} style={{ background: c.bg, color: c.fg, fontSize: 10, padding: '2px 5px', borderRadius: 2, marginBottom: 2, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{e.t}</div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  </div>
);

// ─── Missions ───
const LabMissions = () => {
  const [filter, setFilter] = React.useState('En cours');
  const all = [
    ['Saisie factures Q1', 'Dupuis SPRL', 'Compta', '1.2 / 4h', '14 mai', 'en cours'],
    ['Rédaction CR conseil', 'Atelier Lemaire', 'Rédaction', '0.8 / 3h', '16 mai', 'en cours'],
    ['Relances impayées', 'Café Central', 'Relances', '2.4 / 2h', '13 mai', 'en cours'],
    ['Trad notice FR→NL', 'TechBE', 'Traduction', '1 / 4h', '22 mai', 'en cours'],
    ['Permanence NL', 'Cabinet Wauters', 'Permanence', '16 / 20h', 'récurrent', 'en cours'],
    ['Saisie notes de frais', 'Dupuis SPRL', 'RH', '0.6h', '30 avr.', 'terminé'],
    ['CR réunion annuelle', 'Vermeer & Co', 'Rédaction', '2.1h', '28 avr.', 'terminé'],
    ['Audit doc initial', 'Café Central', 'Audit', '4h', '15 avr.', 'terminé'],
    ['Onboarding TechBE', 'TechBE', 'Admin', '3h', '01 avr.', 'terminé'],
  ];
  const filtered = filter === 'Tous' ? all : all.filter(m => m[5] === (filter === 'En cours' ? 'en cours' : 'terminé'));

  return (
    <div className="ms-root app-shell" style={{ height: '100%' }}>
      <LabSide active="Missions" />
      <main className="app-main">
        <TopBar crumb={['monnier', 'LAB', 'missions']} right={
          <>
            <button className="btn btn-ghost btn-sm"><Icon name="upload" size={11} /> exporter</button>
            <button className="btn btn-primary btn-sm"><Icon name="plus" size={11} /> nouvelle mission</button>
          </>
        } />
        <div className="app-content" style={{ overflow: 'visible' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
            {[
              ['ACTIVES', '5', 'toutes en cours', null],
              ['HEURES CE MOIS', '21.4h', '68 / 80h capacité', null],
              ['TAUX COMPLÉTION', '87%', '+4% vs mois dernier', null],
              ['EN RETARD', '1', 'Relances Café Central', 'danger'],
            ].map(([l, v, d, t]) => (
              <div key={l} className="card">
                <div className="kpi-label">{l}</div>
                <div className="kpi-value" style={t === 'danger' ? { color: 'var(--danger)' } : {}}>{v}</div>
                <div className="kpi-delta">{d}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
            {['En cours', 'Terminées', 'Tous'].map(f => (
              <button key={f} className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="card" style={{ padding: 0 }}>
            <table className="tbl">
              <thead><tr><th>Mission</th><th>Client</th><th>Type</th><th>Heures</th><th>Deadline</th><th>Statut</th><th></th></tr></thead>
              <tbody>
                {filtered.map(([m, c, type, h, e, s], i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 500, color: 'var(--ink)' }}>{m}</td>
                    <td style={{ fontSize: 13 }}>{c}</td>
                    <td><span className="badge" style={{ fontSize: 10 }}>{type}</span></td>
                    <td className="mono" style={{ fontSize: 12 }}>{h}</td>
                    <td className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{e}</td>
                    <td>
                      <span className="badge" style={
                        s === 'en cours'
                          ? { background: 'var(--accent-pale)', color: 'var(--accent-ink)', borderColor: 'transparent' }
                          : { background: 'oklch(0.92 0.04 145)', color: 'oklch(0.40 0.10 145)', borderColor: 'transparent' }
                      }>{s}</span>
                    </td>
                    <td><button className="btn btn-ghost btn-sm" style={{ fontSize: 11 }}>ouvrir →</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

// ─── Documents ───
const LabDocuments = () => {
  const docs = [
    { name: 'CR Réunion Lemaire — mai 2026', client: 'Atelier Lemaire', type: 'Compte-rendu', date: '12/05', size: '24 Ko' },
    { name: 'Devis D-2026-118 · Dupuis SPRL', client: 'Dupuis SPRL', type: 'Devis', date: '12/05', size: '18 Ko' },
    { name: 'Notice traduite FR→NL · TechBE v2', client: 'TechBE', type: 'Traduction', date: '11/05', size: '142 Ko' },
    { name: 'Contrat Sérénité 20 · Dupuis SPRL', client: 'Dupuis SPRL', type: 'Contrat', date: '08/01/25', size: '38 Ko' },
    { name: 'Notes de frais Q1 2026', client: 'Dupuis SPRL', type: 'RH', date: '01/04', size: '12 Ko' },
    { name: 'Rapport mensuel avril 2026', client: 'Cabinet Wauters', type: 'Rapport', date: '30/04', size: '56 Ko' },
    { name: 'Audit documentaire initial', client: 'Café Central', type: 'Audit', date: '15/04', size: '88 Ko' },
    { name: 'Procédures classement courrier', client: 'Vermeer & Co', type: 'Procédure', date: '10/04', size: '31 Ko' },
  ];
  const [clientFilter, setClientFilter] = React.useState('Tous');
  const clients = ['Tous', 'Dupuis SPRL', 'TechBE', 'Atelier Lemaire'];
  const visible = clientFilter === 'Tous' ? docs : docs.filter(d => d.client === clientFilter);

  return (
    <div className="ms-root app-shell" style={{ height: '100%' }}>
      <LabSide active="Documents" />
      <main className="app-main">
        <TopBar crumb={['monnier', 'LAB', 'documents']} right={
          <>
            <button className="btn btn-ghost btn-sm"><Icon name="search" size={11} /> rechercher</button>
            <button className="btn btn-primary btn-sm"><Icon name="upload" size={11} /> importer</button>
          </>
        } />
        <div className="app-content" style={{ overflow: 'visible' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div>
              <div className="kpi-label" style={{ marginBottom: 4 }}>BIBLIOTHÈQUE · {docs.length} FICHIERS</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 24, fontWeight: 400, letterSpacing: '-0.015em' }}>Documents</div>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {clients.map((c, i) => (
                <button key={c} className={`btn btn-sm ${clientFilter === c ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setClientFilter(c)}>{c}</button>
              ))}
            </div>
          </div>
          <div style={{
            border: '1.5px dashed var(--line)', borderRadius: 8, padding: '18px 24px',
            textAlign: 'center', marginBottom: 16, display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'center',
            background: 'var(--paper-warm)', cursor: 'pointer',
          }}>
            <Icon name="upload" size={15} />
            <span style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Glisser des fichiers ici ou <span style={{ color: 'var(--ink)', fontWeight: 500 }}>parcourir</span></span>
          </div>
          <div className="card" style={{ padding: 0 }}>
            <table className="tbl">
              <thead><tr><th>Nom du document</th><th>Client</th><th>Type</th><th>Date</th><th>Taille</th><th></th></tr></thead>
              <tbody>
                {visible.map((d, i) => (
                  <tr key={i}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Icon name="file" size={13} />
                        <span style={{ fontWeight: 500, color: 'var(--ink)' }}>{d.name}</span>
                      </div>
                    </td>
                    <td style={{ fontSize: 13 }}>{d.client}</td>
                    <td><span className="badge" style={{ fontSize: 10 }}>{d.type}</span></td>
                    <td className="mono" style={{ fontSize: 11 }}>{d.date}</td>
                    <td className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{d.size}</td>
                    <td>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'flex-end' }}>
                        <button className="btn btn-ghost btn-sm"><Icon name="eye" size={11} /></button>
                        <button className="btn btn-ghost btn-sm"><Icon name="download" size={11} /></button>
                      </div>
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
};

// ─── Modèles ───
const LabModeles = () => {
  const templates = [
    { cat: 'EMAIL · RELANCES', name: 'Relance douce J+7', desc: 'Ton cordial, rappel simple de la facture en attente.', used: 24 },
    { cat: 'EMAIL · RELANCES', name: 'Relance ferme J+15', desc: 'Demande explicite de régularisation avec date butoir.', used: 18 },
    { cat: 'EMAIL · RELANCES', name: 'Mise en demeure J+30', desc: 'Notification formelle avant recours à un tiers.', used: 6 },
    { cat: 'EMAIL · ONBOARDING', name: 'Mail de bienvenue', desc: 'Premier contact après signature du devis.', used: 12 },
    { cat: 'EMAIL · ONBOARDING', name: 'Accès espace client', desc: 'Invitation + guide de prise en main Mon Espace.', used: 12 },
    { cat: 'CONTRAT', name: 'Convention de service', desc: 'Base contractuelle pour toutes les missions forfait.', used: 12 },
    { cat: 'COURRIER', name: 'Courrier-type résiliation', desc: 'Notification de résiliation conforme au contrat.', used: 3 },
    { cat: 'COURRIER', name: 'Courrier administratif BE', desc: 'En-tête normalisé pour envois officiels en Belgique.', used: 9 },
  ];
  const cats = [...new Set(templates.map(t => t.cat.split(' · ')[0]))];

  return (
    <div className="ms-root app-shell" style={{ height: '100%' }}>
      <LabSide active="Modèles" />
      <main className="app-main">
        <TopBar crumb={['monnier', 'LAB', 'modèles']} right={
          <button className="btn btn-primary btn-sm"><Icon name="plus" size={11} /> nouveau modèle</button>
        } />
        <div className="app-content" style={{ overflow: 'visible' }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: 24, fontWeight: 400, letterSpacing: '-0.015em', marginBottom: 22 }}>
            Modèles & <span style={{ fontStyle: 'italic' }}>gabarits</span>
          </div>
          {cats.map(cat => (
            <div key={cat} style={{ marginBottom: 26 }}>
              <div className="kpi-label" style={{ marginBottom: 12 }}>{cat}</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                {templates.filter(t => t.cat.startsWith(cat)).map((t, i) => (
                  <div key={i} className="card" style={{ padding: '18px 20px' }}>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 8 }}>{t.cat}</div>
                    <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 6 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.5, marginBottom: 14 }}>{t.desc}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>utilisé {t.used}×</span>
                      <div style={{ display: 'flex', gap: 4 }}>
                        <button className="btn btn-ghost btn-sm"><Icon name="edit" size={11} /></button>
                        <button className="btn btn-sm" style={{ fontSize: 11 }}>utiliser</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

// ─── Statistiques ───
const LabStats = () => {
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const ca    = [2800, 3200, 3800, 3500, 4270, 0, 0, 0, 0, 0, 0, 0];
  const hours = [52,   60,   68,   64,   68,  0, 0, 0, 0, 0, 0, 0];
  const maxCa = Math.max(...ca.filter(v => v > 0));
  const maxH  = Math.max(...hours.filter(v => v > 0));

  const clients = [
    ['Dupuis SPRL',      4950, 'Sérénité 20'],
    ['Cabinet Wauters',  3200, 'Sérénité 20'],
    ['Atelier Lemaire',  2940, 'Sérénité 10'],
    ['TechBE',           1440, 'Ponctuel'],
    ['Café Central',      950, 'Sérénité 10'],
    ['Vermeer & Co',      780, 'Ponctuel'],
  ];
  const totalCa = clients.reduce((s, c) => s + c[1], 0);

  const occ = [68,72,80,65,78,82,70,75,80,76,82,85,78,80,75,70,68,72,80,82];

  return (
    <div className="ms-root app-shell" style={{ height: '100%' }}>
      <LabSide active="Statistiques" />
      <main className="app-main">
        <TopBar crumb={['monnier', 'LAB', 'statistiques']} right={
          <div style={{ display: 'flex', gap: 4 }}>
            {['Ce mois', '6 mois', 'Année'].map((v, i) => (
              <button key={v} className={`btn btn-sm ${i === 1 ? 'btn-primary' : 'btn-ghost'}`}>{v}</button>
            ))}
          </div>
        } />
        <div className="app-content" style={{ overflow: 'visible' }}>
          {/* KPI */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 20 }}>
            {[
              ['CA YTD', '17 260 €', '+18% vs 2025', 'accent'],
              ['HEURES PRESTÉES', '312h', '/ 400h (78%)', null],
              ['CLIENTS ACTIFS', '12', '+2 ce trimestre', null],
              ['TAUX OCCUPATION', '78%', 'objectif 85%', null],
            ].map(([l, v, d, t]) => (
              <div key={l} className="card">
                <div className="kpi-label">{l}</div>
                <div className="kpi-value" style={t === 'accent' ? { color: 'var(--accent-ink)' } : {}}>{v}</div>
                <div className="kpi-delta">{d}</div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 14, marginBottom: 14 }}>
            {/* CA + Heures */}
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div className="kpi-label">CA MENSUEL 2026</div>
                <div style={{ display: 'flex', gap: 14, fontSize: 11, color: 'var(--ink-mute)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 10, height: 10, background: 'var(--ink)', borderRadius: 2, display: 'inline-block' }} />CA
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 10, height: 10, background: 'var(--accent)', borderRadius: 2, display: 'inline-block', opacity: 0.85 }} />Heures
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 120 }}>
                {months.map((m, i) => {
                  const caV = ca[i]; const hV = hours[i]; const empty = caV === 0;
                  return (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                      <div style={{ width: '100%', display: 'flex', gap: 2, alignItems: 'flex-end', height: 100 }}>
                        <div style={{ flex: 1, height: empty ? 3 : Math.max(4, (caV / maxCa) * 96), background: empty ? 'var(--line)' : 'var(--ink)', borderRadius: '2px 2px 0 0' }} />
                        <div style={{ flex: 1, height: empty ? 3 : Math.max(4, (hV / maxH) * 96), background: empty ? 'var(--line)' : 'var(--accent)', borderRadius: '2px 2px 0 0', opacity: 0.85 }} />
                      </div>
                      <span className="mono" style={{ fontSize: 9, color: empty ? 'var(--line)' : 'var(--ink-mute)' }}>{m}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Répartition clients */}
            <div className="card">
              <div className="kpi-label" style={{ marginBottom: 14 }}>RÉPARTITION CLIENTS · YTD</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {clients.map(([name, val]) => {
                  const pct = Math.round((val / totalCa) * 100);
                  return (
                    <div key={name}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontSize: 12, fontWeight: 500 }}>{name}</span>
                        <span className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>{val.toLocaleString('fr-BE')} € · {pct}%</span>
                      </div>
                      <div style={{ height: 4, background: 'var(--line)', borderRadius: 2 }}>
                        <div style={{ height: '100%', width: pct + '%', background: 'var(--ink)', borderRadius: 2 }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Taux occupation hebdo */}
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
              <div className="kpi-label">TAUX D'OCCUPATION HEBDOMADAIRE</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>capacité max · 35h/semaine</div>
            </div>
            <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 64 }}>
              {occ.map((v, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                  <div style={{ width: '100%', height: Math.round((v / 100) * 52), background: v >= 80 ? 'var(--accent)' : 'var(--ink)', borderRadius: '2px 2px 0 0', opacity: v >= 80 ? 1 : 0.55 }} />
                  <span className="mono" style={{ fontSize: 8, color: 'var(--ink-mute)' }}>S{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Object.assign(window, { LabEditor, LabAgenda, LabMissions, LabDocuments, LabModeles, LabStats });
