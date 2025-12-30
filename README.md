# Portfolio — Grégory Hostin

Portfolio personnel (Front-end) : une vitrine simple et performante pour présenter mon profil, mes projets et permettre un contact direct.

> “Je crée des interfaces où les lignes de code deviennent invisibles, au service de l’émotion et de l’expérience.”

---

## ✨ Aperçu

Le site contient :
- **Hero** de présentation + CTA (contact / projets)
- Section **Projets** (projets de formation + projets clés)
- Section **Compétences**
- Section **À propos** (histoire, méthode de travail, suite)
- Section **Contact** (formulaire + feedback “message envoyé”)

---

## 🧩 Projets mis en avant

### ArgentBank — Secure Banking App
Application bancaire front-end construite à partir d’une API existante : authentification, gestion de session et mise à jour du profil utilisateur.

**Stack :** React, Redux Toolkit, REST API (JWT)  
**Objectifs :**
- Implémenter une authentification sécurisée (login, token, persistence)
- Créer des vues protégées (connexion → dashboard → édition profil)
- Structurer le state global avec Redux (slices, thunks)

**Résultats :**
- Parcours d’authentification complet et stable
- Mise à jour du profil en temps réel
- Store Redux clair et extensible

**Pistes d’amélioration :**
- Tests e2e (Cypress/Playwright)
- Refresh token / rotation de tokens
- Messages d’erreur plus UX

---

### Kasa — Housing Rental UI
Refonte d’une application de location de logements : routing dynamique, composants réutilisables, gestion d’erreurs et animations légères.

**Stack :** React, React Router, Sass  
**Objectifs :**
- Routing client (pages dynamiques, 404, redirections)
- Composants modulaires (galerie, tags, collapses)
- Accessibilité + états vides / erreurs

**Résultats :**
- UI responsive et accessible
- Navigation fluide
- Codebase documentée

**Pistes d’amélioration :**
- i18n (fr/en)
- Pré-chargement conditionnel des images de galerie
- Tests unitaires des composants clés

---

## 🛠️ Tech Stack du portfolio

- **Next.js (App Router)** — routing moderne via `app/`, SEO natif, layouts, pages statiques
- **Tailwind CSS** — styling rapide et cohérent (utility-first)
- **shadcn/ui** — composants réutilisables (basés sur **Radix UI** pour l’accessibilité)
- **Framer Motion** — transitions et micro-interactions
- **Spline** — scène 3D intégrée au Hero
- **simple-icons** — icônes SVG (logos de marques)

---

## 🚀 Déploiement (Vercel)

---

## 📦 Installation & lancement en local

### Prérequis
- Node.js (recommandé : version LTS)
- pnpm / npm / yarn

### Setup
```bash
# Installer
npm install

# Lancer le serveur de dev
npm run dev
