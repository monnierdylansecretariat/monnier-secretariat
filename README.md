# Monnier · bureau secrétariat — site vitrine

Site statique React (compilé in-browser via Babel standalone). Aucun build step.

## Structure
\`\`\`
site/
├── index.html              # Accueil
├── tarifs.html             # Tarifs + simulateur
├── articles.html           # Liste articles
├── articles/
│   └── automatiser-relances-clients.html
├── about.html              # À propos
├── contact.html            # Formulaire (Netlify Forms)
├── merci.html              # Confirmation envoi
├── css/
│   ├── tokens.css          # variables (couleurs, type, etc.)
│   └── app.css             # composants
├── js/
│   ├── shared.jsx          # Icon, Ph, Nav, Footer
│   └── pages.jsx           # Tous les écrans
├── favicon.svg
├── netlify.toml
├── _redirects
├── robots.txt
└── sitemap.xml
\`\`\`

## Déploiement Netlify (3 minutes)

### Option 1 — Drag & drop
1. Ouvre [app.netlify.com/drop](https://app.netlify.com/drop)
2. Glisse-dépose le **dossier `site/`** entier
3. C'est en ligne. Netlify te donne une URL en `*.netlify.app`.

### Option 2 — Git (recommandé pour itérer)
1. Pousse ce dossier sur GitHub / GitLab.
2. Sur Netlify : *Add new site* → *Import from Git* → choisis le repo.
3. **Build command** : `(rien)` — laisser vide.
4. **Publish directory** : `site` (si tu as commit le projet entier) ou `.` (si tu pousses juste le dossier site).
5. *Deploy site*.

### Domaine custom
*Site settings* → *Domain management* → *Add custom domain* → `monnier-secretariat.com`. Netlify te guide pour la config DNS (CNAME ou A record).

## Formulaire de contact

Le formulaire utilise **Netlify Forms** (`data-netlify="true"`).
- Une fois déployé, va dans *Forms* dans l'admin Netlify pour voir les soumissions.
- Active les **notifications email** vers `info@monnier-secretariat.be`.
- Anti-spam : honeypot inclus. Active reCAPTCHA dans les settings si besoin.

## Analytics

**Plausible.io** déjà branché sur `monnier-secretariat.com`. Crée le compte sur plausible.io et le tracking démarrera automatiquement après le DNS.

Si tu n'utilises pas Plausible, supprime simplement la balise `<script defer data-domain=…>` dans chaque page (ou demande-moi).

## Modifier le contenu

- **Textes / sections** : tout est dans `js/pages.jsx`.
- **Couleurs / type** : `css/tokens.css`.
- **Composants partagés (nav, footer)** : `js/shared.jsx`.

Pas de framework, pas de `npm install`. Tu peux ouvrir n'importe quel `.html` directement dans un navigateur via un serveur local (`python -m http.server` dans `site/`).

## Notes techniques
- React 18 + Babel standalone (compilation côté client). Convient pour ce niveau de trafic.
- Si tu veux passer à un build (Vite + React) plus tard pour gagner ~150 KB et virer le flash de chargement, c'est un weekend.
- Photos : placeholders rayés en SVG pour l'instant — remplace les `<Ph …>` par des `<img src=…>` quand tu auras les visuels.
