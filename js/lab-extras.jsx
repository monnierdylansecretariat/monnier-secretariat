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
        {/* Editor */}
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

            {/* placeholder image */}
            <div style={{
              height: 200, marginBottom: 24,
              backgroundImage: 'repeating-linear-gradient(45deg, var(--paper-warm), var(--paper-warm) 8px, var(--paper-warm-2) 8px, var(--paper-warm-2) 16px)',
              border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-mute)',
            }}>image de couverture · drag &amp; drop</div>

            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 18 }}>
              Quand on facture 30 clients par mois, courir après les paiements grignote deux heures qu’on aimerait mettre ailleurs. Voici les 3 automatisations que j’ai mises en place dans <strong>Monnier Lab</strong>, avec un coût marginal nul.
            </p>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.015em', marginTop: 28, marginBottom: 12 }}>1. Détecter les retards automatiquement</h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 14 }}>
              À J+7, J+15 et J+30, un script Make compare l’état de paiement à la date d’émission. Si retard, un brouillon de mail est créé dans Pennylane…
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

        {/* Sidebar éditeur */}
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
                <span key={t} className={i === 4 ? 'badge' : 'badge'} style={i === 4 ? { borderStyle: 'dashed', color: 'var(--ink-mute)' } : {}}>{t}</span>
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
          <button className="btn btn-ghost btn-sm">aujourd’hui</button>
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
              const day = i - 3; // start may on thu? offset
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
                  padding: 6, opacity: isCur ? 1 : 0.35, position: 'relative',
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

Object.assign(window, { LabEditor, LabAgenda });
