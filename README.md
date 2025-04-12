# 🚀 MyPortfolio Website

Bienvenue sur **MyPortfolio**, un site portfolio interactif développé avec **Angular 16**, **TypeScript** et **Tailwind CSS**, visant à présenter mes compétences, mon parcours, mes projets et un formulaire de contact fonctionnel.

---

## 📸 Aperçu du projet

![Screenshot Home](./screenshots/home.png)
![Screenshot Projects](./screenshots/projects.png)

---

## 📌 Présentation

🎯 **Objectif** : Créer un site portfolio professionnel et responsive afin de :
- Mettre en avant mes **compétences techniques**
- Montrer mes **projets réalisés**
- Faciliter la prise de contact grâce à un **formulaire dynamique**

👨‍💻 Développé dans le cadre d’un projet individuel du 07/04/2025 au 11/04/2025.

---

## 🛠️ Technologies utilisées

| Technologie     | Description                        |
|----------------|------------------------------------|
| 🅰️ Angular 16+ | Framework SPA                      |
| 💻 TypeScript   | Langage principal                  |
| 🎨 Tailwind CSS | Style responsive et utilitaire     |
| 🌐 HTML & CSS   | Base de l’interface                |
| 📦 GitHub Pages | Déploiement du site                |

---

## 🧩 Structure du projet

📁 **Composants :**

- `navbar` : Barre de navigation avec liens ancrés
- `home` : Présentation (nom, rôle, photo, GitHub, LinkedIn)
- `about` : Bio, compétences, parcours
- `project` : Cartes de projets avec filtre par technologie
- `cv` : Téléchargement de mon CV PDF
- `contact` : Formulaire avec validation
- `footer` : Informations légales et raccourcis

🔧 **Services :**

- `ProjectService` : Fournit la liste des projets à afficher

📍 **Routing :**

- Utilisation de `AppRoutingModule` pour la navigation entre les sections

---

## 🌟 Fonctionnalités

- ✅ Interface responsive (mobile, tablette, desktop)
- ✅ Bio avec photo et liens sociaux
- ✅ Liste filtrable de projets (image, titre, description, GitHub/Demo)
- ✅ Formulaire de contact avec validation des champs
- ✅ Téléchargement du CV en PDF
- ✅ Dark Mode 🌙 / Light Mode ☀️
- ✅ Mode multilingue (🇫🇷 Français / 🇬🇧 Anglais)

---

## 📲 Lancement du projet

### Prérequis
- Node.js
- Angular CLI

### Étapes

```bash
# Cloner le repo
git clone https://github.com/ton-pseudo/MyPortfolio.git
cd MyPortfolio

# Installer les dépendances
npm install

# Lancer en mode développement
ng serve
