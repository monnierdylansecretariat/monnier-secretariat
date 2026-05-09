/* global React, Icon, Ph, LabSide, TopBar, EspaceSide */

// ─── Lab · Devis (remplace l'ancien LabInvoice) ───
// La facturation est externalisée dans Falco (Peppol). Lab gère uniquement
// le cycle de vie du devis : rédaction → envoi → signature → handoff Falco.
const LabQuote = () => (
  <div className="ms-root app-shell" style={{ height: '100%' }}>
    <LabSide active="Devis" />
    <main className="app-main">
      <TopBar crumb={['monnier', 'LAB', 'devis', '2026-118']} right={
        <>
          <button className="btn btn-ghost btn-sm"><Icon name="upload" size={11} /> PDF</button>
          <button className="btn btn-ghost btn-sm">brouillon</button>
          <button className="btn btn-primary btn-sm"><Icon name="check" size={11} /> envoyer pour signature</button>
        </>
      } />
      <div className="app-content" style={{ overflow: 'visible', background: 'var(--paper-warm)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 24 }}>
          {/* Document */}
          <div className="card" style={{ padding: '40px 48px', minHeight: 720 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}>
              <div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em' }}>monnier<span style={{ color: 'var(--ink-mute)', fontWeight: 400 }}>·secrétariat</span></div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', marginTop: 8, lineHeight: 1.6 }}>
                  Dylan Monnier · indépendant en personne physique<br />
                  Rue du Bois 71 · 5190 Jemeppe-sur-Sambre<br />
                  BCE BE 0795.650.319 · TVA BE 0795.650.319<br />
                  info@monnier-secretariat.be
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.08em' }}>DEVIS</div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 36, fontWeight: 400, letterSpacing: '-0.02em', marginTop: 4 }}>D-2026-118</div>
                <div className="mono" style={{ fontSize: 10, marginTop: 8 }}>émis le 12 mai 2026<br />valable jusqu’au 11 juin 2026</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 36, paddingBottom: 24, borderBottom: '1px solid var(--line)' }}>
              <div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 8 }}>POUR</div>
                <div style={{ fontWeight: 500, marginBottom: 4 }}>Dupuis SPRL</div>
                <div style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                  Rue Saint-Léonard 84<br />
                  4000 Liège<br />
                  BCE BE 0858.452.221<br />
                  Peppol : 0208:0858452221
                </div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)', letterSpacing: '0.08em', marginBottom: 8 }}>OBJET</div>
                <div style={{ fontSize: 13, lineHeight: 1.6 }}>
                  Passage au forfait <strong>Sérénité 30</strong> à partir du 1er juin 2026.<br />
                  Engagement mensuel reconductible. Sans engagement de durée.
                </div>
              </div>
            </div>

            <table className="tbl" style={{ marginBottom: 32 }}>
              <thead>
                <tr><th>Désignation</th><th style={{ textAlign: 'right' }}>Qté</th><th style={{ textAlign: 'right' }}>P.U.</th><th style={{ textAlign: 'right' }}>Total HT</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: 'var(--ink)', fontWeight: 500 }}>Forfait Sérénité 30h<div style={{ fontSize: 11, color: 'var(--ink-mute)', fontWeight: 400, marginTop: 2 }}>secrétariat · pré-compta · permanence · RH light · community</div></td>
                  <td className="mono" style={{ textAlign: 'right' }}>1</td>
                  <td className="mono" style={{ textAlign: 'right' }}>990,00 €</td>
                  <td className="mono" style={{ textAlign: 'right' }}>990,00 €</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--ink)', fontWeight: 500 }}>Setup initial · onboarding<div style={{ fontSize: 11, color: 'var(--ink-mute)', fontWeight: 400, marginTop: 2 }}>migration outils · accès partagés · 1ère semaine</div></td>
                  <td className="mono" style={{ textAlign: 'right' }}>1</td>
                  <td className="mono" style={{ textAlign: 'right' }}>0,00 €</td>
                  <td className="mono" style={{ textAlign: 'right' }}>offert</td>
                </tr>
                <tr>
                  <td style={{ color: 'var(--ink)', fontWeight: 500 }}>Audit doc administratif<div style={{ fontSize: 11, color: 'var(--ink-mute)', fontWeight: 400, marginTop: 2 }}>option · single shot · 4h forfaitaires</div></td>
                  <td className="mono" style={{ textAlign: 'right' }}>1</td>
                  <td className="mono" style={{ textAlign: 'right' }}>180,00 €</td>
                  <td className="mono" style={{ textAlign: 'right' }}>180,00 €</td>
                </tr>
              </tbody>
            </table>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 32 }}>
              <div style={{ width: 280 }}>
                {[
                  ['Sous-total', '1 170,00 €'],
                  ['TVA — exempt art. 44', '—'],
                ].map(([l, v]) => (
                  <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13 }}>
                    <span style={{ color: 'var(--ink-soft)' }}>{l}</span>
                    <span className="mono">{v}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0 6px', borderTop: '1px solid var(--ink)', marginTop: 8 }}>
                  <span style={{ fontWeight: 500 }}>Total mensuel</span>
                  <span className="mono" style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 500 }}>990,00 €</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: 11, color: 'var(--ink-mute)' }}>
                  <span>+ 180,00 € one-shot</span>
                </div>
              </div>
            </div>

            {/* signature + handoff */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 24 }}>
              <div style={{ background: 'var(--paper-warm)', padding: '14px 18px', borderRadius: 4, fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--ink)' }}>Signature client —</strong> à retourner signé à <span className="mono">info@monnier-secretariat.be</span>. Lien e-signature envoyé séparément.
              </div>
              <div style={{ padding: '14px 18px', borderRadius: 4, fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.6, background: 'var(--ink)', color: 'var(--paper)' }}>
                <div className="mono" style={{ fontSize: 10, color: 'oklch(0.75 0.01 75)', letterSpacing: '0.08em', marginBottom: 4 }}>HANDOFF FACTURATION</div>
                Une fois signé, push automatique vers <strong style={{ color: 'var(--paper)' }}>Falco</strong> pour la facturation mensuelle (Peppol BIS 3.0).
              </div>
            </div>
          </div>

          {/* Inspecteur */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="card">
              <div className="kpi-label" style={{ marginBottom: 10 }}>STATUT</div>
              <span className="badge badge-accent">brouillon</span>
              <div style={{ marginTop: 14, fontSize: 12, color: 'var(--ink-mute)', lineHeight: 1.6 }}>Modifié il y a 4 minutes par Dylan</div>
            </div>
            <div className="card">
              <div className="kpi-label" style={{ marginBottom: 10 }}>WORKFLOW DEVIS</div>
              {[
                { t: 'Brouillon', d: 'maintenant', done: true, current: true },
                { t: 'Envoyé', d: '—', done: false },
                { t: 'Signé', d: '—', done: false },
                { t: 'Push Falco', d: '—', done: false, hint: 'auto · Peppol' },
                { t: 'Facturé · J+30', d: '—', done: false },
              ].map((s, i, a) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 14 }}>
                    <span style={{
                      width: 12, height: 12, borderRadius: 6,
                      background: s.current ? 'var(--accent)' : s.done ? 'var(--ink)' : 'var(--paper)',
                      border: s.done || s.current ? 'none' : '1px solid var(--line)',
                      animation: s.current ? 'ms-pulse-ring 2s ease-out infinite' : 'none',
                    }} />
                    {i < a.length - 1 && <span style={{ width: 1, flex: 1, background: 'var(--line)', margin: '2px 0' }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: s.done || s.current ? 'var(--ink)' : 'var(--ink-mute)' }}>{s.t}</div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--ink-mute)' }}>{s.hint || s.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card" style={{ background: 'var(--paper-warm)' }}>
              <div className="kpi-label" style={{ marginBottom: 8 }}>FALCO · PEPPOL</div>
              <div style={{ fontSize: 12, lineHeight: 1.5, marginBottom: 10 }}>
                La facturation tourne dans <strong>Falco</strong>. Lab génère le devis ; Falco crée la facture mensuelle au bon format Peppol BIS 3.0 (UBL).
              </div>
              <button className="btn btn-ghost btn-sm" style={{ width: '100%' }}>
                ouvrir dans Falco <Icon name="arrow" size={11} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  </div>
);

// ─── Lab · Liste des devis (overview) ───
const LabQuotesList = () => (
  <div className="ms-root app-shell" style={{ height: '100%' }}>
    <LabSide active="Devis" />
    <main className="app-main">
      <TopBar crumb={['monnier', 'LAB', 'devis']} right={
        <>
          <button className="btn btn-ghost btn-sm"><Icon name="search" size={11} /> rechercher</button>
          <button className="btn btn-primary btn-sm"><Icon name="plus" size={11} /> nouveau devis</button>
        </>
      } />
      <div className="app-content" style={{ overflow: 'visible' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
          <div>
            <div className="kpi-label" style={{ marginBottom: 4 }}>DEVIS · 12 EN COURS</div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 28, fontWeight: 400, letterSpacing: '-0.015em' }}>Pipeline des propositions</div>
          </div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)' }}>
            facturation déléguée à <strong style={{ color: 'var(--ink)' }}>Falco</strong> (Peppol)
          </div>
        </div>

        {/* Pipeline */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 22 }}>
          {[
            ['BROUILLONS', 3, '450 €', null],
            ['ENVOYÉS', 4, '3 280 €', null],
            ['EN ATTENTE', 2, '1 980 €', 'accent'],
            ['SIGNÉS · CE MOIS', 5, '4 720 €', 'ok'],
            ['EXPIRÉS', 1, '590 €', 'mute'],
          ].map(([l, n, v, k]) => (
            <div key={l} className="card" style={{ padding: 18 }}>
              <div className="kpi-label">{l}</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 28, fontWeight: 400, marginTop: 6, color: k === 'accent' ? 'var(--accent-ink)' : k === 'mute' ? 'var(--ink-mute)' : 'var(--ink)' }}>{n}</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: 0 }}>
          <table className="tbl">
            <thead><tr><th>N°</th><th>Client</th><th>Objet</th><th style={{ textAlign: 'right' }}>Montant</th><th>Statut</th><th>Émis le</th><th></th></tr></thead>
            <tbody>
              {[
                ['D-2026-118', 'Dupuis SPRL', 'Passage Sérénité 30', '990 €/mois', 'brouillon', '12/05', 'accent'],
                ['D-2026-117', 'Atelier Lemaire', 'Renouvellement annuel', '790 €/mois', 'envoyé', '11/05', null],
                ['D-2026-116', 'Café Central', 'Setup + Sérénité 20', '950 €', 'signé', '08/05', 'ok'],
                ['D-2026-115', 'TechBE', 'Trad NL · forfait', '480 €', 'en attente', '06/05', 'warn'],
                ['D-2026-114', 'Cabinet Wauters', 'Permanence renforcée', '1 280 €', 'signé', '02/05', 'ok'],
                ['D-2026-113', 'Vermeer & Co', 'Audit doc + onboarding', '780 €', 'envoyé', '28/04', null],
                ['D-2026-112', 'Studio Une', 'Sérénité 20', '790 €/mois', 'expiré', '15/04', 'mute'],
              ].map(([n, c, o, m, s, d, k]) => (
                <tr key={n}>
                  <td className="mono" style={{ fontWeight: 500, color: 'var(--ink)' }}>{n}</td>
                  <td>{c}</td>
                  <td style={{ color: 'var(--ink-soft)', fontSize: 12 }}>{o}</td>
                  <td className="mono" style={{ textAlign: 'right', color: 'var(--ink)', fontWeight: 500 }}>{m}</td>
                  <td>
                    <span className="badge badge-dot" style={
                      k === 'accent' ? { background: 'var(--accent-pale)', color: 'var(--accent-ink)', borderColor: 'transparent' } :
                        k === 'ok' ? { background: 'oklch(0.94 0.04 145)', color: 'oklch(0.40 0.10 145)', borderColor: 'transparent' } :
                          k === 'warn' ? { background: 'oklch(0.95 0.05 80)', color: 'oklch(0.42 0.12 70)', borderColor: 'transparent' } :
                            k === 'mute' ? { color: 'var(--ink-mute)' } :
                              {}
                    }>{s}</span>
                  </td>
                  <td className="mono" style={{ fontSize: 11 }}>{d}</td>
                  <td style={{ textAlign: 'right' }}>
                    {s === 'signé' ?
                      <button className="btn btn-ghost btn-sm">Falco ↗</button> :
                      <button className="btn btn-ghost btn-sm">ouvrir →</button>
                    }
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

// ─── Espace · Devis & contrats (côté client) ───
const EspaceDevis = () => (
  <div className="ms-root app-shell" style={{ height: '100%' }}>
    <EspaceSide active="Devis" />
    <main className="app-main">
      <header style={{ padding: '20px 32px', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '0.08em' }}>DEVIS &amp; CONTRATS</div>
        <div style={{ fontFamily: 'var(--display)', fontSize: 28, fontWeight: 400, letterSpacing: '-0.015em', marginTop: 2 }}>
          Mes devis <span style={{ fontStyle: 'italic', color: 'var(--ink-soft)' }}>signés et en cours</span>
        </div>
      </header>
      <div className="app-content" style={{ padding: '32px 56px', overflow: 'visible' }}>
        {/* Devis à valider — bandeau en haut */}
        <div className="card" style={{
          padding: 22, marginBottom: 24, display: 'flex', gap: 18, alignItems: 'center',
          borderColor: 'var(--accent)', background: 'var(--accent-pale)',
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 22, background: 'var(--accent)', color: 'var(--paper)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            animation: 'ms-pulse-ring 2.4s ease-out infinite',
          }}>
            <Icon name="sign" size={20} stroke={1.6} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 2 }}>Un devis t’attend pour signature</div>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>
              <strong>D-2026-118</strong> — Passage au forfait Sérénité 30 à partir du 1er juin. Effet immédiat sur ton compteur d’heures.
            </div>
          </div>
          <button className="btn btn-ghost btn-sm">aperçu</button>
          <button className="btn btn-primary btn-sm"><Icon name="check" size={11} /> signer →</button>
        </div>

        <div className="kpi-label" style={{ marginBottom: 10 }}>HISTORIQUE</div>
        <div className="card" style={{ padding: 0 }}>
          <table className="tbl">
            <thead><tr><th>N°</th><th>Objet</th><th style={{ textAlign: 'right' }}>Montant</th><th>Statut</th><th>Date</th><th></th></tr></thead>
            <tbody>
              {[
                ['D-2026-118', 'Passage Sérénité 30 · à partir du 1er juin', '990 €/mois', 'à signer', '12/05', 'warn'],
                ['D-2026-022', 'Sérénité 20 · renouvellement', '790 €/mois', 'signé', '15/01', 'ok'],
                ['D-2025-204', 'Audit documentaire · single shot', '180 €', 'signé · clos', '18/10/25', 'ok'],
                ['D-2024-098', 'Sérénité 20 · contrat initial', '790 €/mois', 'signé', '08/04/24', 'ok'],
              ].map(([n, o, m, s, d, k]) => (
                <tr key={n}>
                  <td className="mono" style={{ fontWeight: 500, color: 'var(--ink)' }}>{n}</td>
                  <td>{o}</td>
                  <td className="mono" style={{ textAlign: 'right', color: 'var(--ink)', fontWeight: 500 }}>{m}</td>
                  <td>
                    <span className="badge badge-dot" style={
                      k === 'warn' ? { background: 'var(--accent-pale)', color: 'var(--accent-ink)', borderColor: 'transparent' } :
                        { background: 'oklch(0.94 0.04 145)', color: 'oklch(0.40 0.10 145)', borderColor: 'transparent' }
                    }>{s}</span>
                  </td>
                  <td className="mono" style={{ fontSize: 11 }}>{d}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="btn btn-ghost btn-sm"><Icon name="download" size={11} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note about Falco */}
        <div style={{
          marginTop: 22, padding: '14px 18px', background: 'var(--paper-warm)',
          borderRadius: 4, fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.6,
          display: 'flex', gap: 12, alignItems: 'center',
        }}>
          <Icon name="receipt" size={18} stroke={1.4} />
          <div>
            <strong style={{ color: 'var(--ink)' }}>Tes factures arrivent par Peppol via Falco.</strong> Je gère les devis ici, la facturation mensuelle part automatiquement dans ton outil compta — pas besoin de PDF qui se balade par mail.
          </div>
        </div>
      </div>
    </main>
  </div>
);

Object.assign(window, { LabQuote, LabQuotesList, EspaceDevis });
