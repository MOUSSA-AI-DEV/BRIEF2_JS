# 🧑‍💼 Générateur de CV – Application Web Interactive

## 🚀 Description du projet
Cette application web permet à un utilisateur de **créer un CV complet** en remplissant un **formulaire multi-étapes**.  
Elle offre une **interface intuitive**, la **validation des données**, des **formulaires dynamiques** pour ajouter plusieurs compétences, expériences, langues, etc., et la possibilité de **choisir un modèle de CV** avant de **télécharger ou imprimer** le résultat final.

---

## 🧩 Fonctionnalités principales

### 1️⃣ Création du CV
- L'utilisateur remplit un formulaire clair et structuré pour créer son CV.
- Les étapes sont organisées par type d'information (personnelles, expériences, compétences...).
- Navigation fluide entre les étapes sans perte de données.

### 2️⃣ Formulaire à étapes
- Interface divisée en plusieurs étapes.
- Boutons **Suivant** et **Précédent** pour naviguer.
- Barre de progression affichant l’avancement en temps réel.

### 3️⃣ Formulaires dynamiques
- Possibilité d’ajouter plusieurs :
  - Compétences 💻  
  - Langues 🌐  
  - Formations 🎓  
  - Expériences professionnelles 🏢  
  - Certifications 📜  
- Bouton **Ajouter** / **Supprimer** pour gérer les champs dynamiquement.
- Les champs s’ajoutent sans rechargement de la page (JavaScript dynamique ).

### 4️⃣ Validation des champs
- Validation en temps réel selon le type de champ :
  - Email valide ✉️  
  - Numéro de téléphone 📞  
  - Lien GitHub / LinkedIn 🔗  
- Messages d’erreur clairs et lisibles sous les champs invalides.
- Impossible de passer à l’étape suivante sans corriger les erreurs.

### 5️⃣ Suivi de l’avancement
- Barre de progression dynamique mise à jour automatiquement à chaque étape.
- Diminue si l’utilisateur revient en arrière.


### 7️⃣ Téléchargement et impression
- Bouton **Télécharger** → Génération d’un fichier **PDF** conservant la mise en page.
- Bouton **Imprimer** → Impression directe du CV depuis le navigateur.
- (Bonus) Génération d’un fichier **JSON** contenant toutes les données du CV.

---

## 🛠️ Technologies utilisées

| Catégorie | Outils |
|------------|--------|
| **Frontend** | HTML5, CSS3, JavaScript (ou React / Vue / Angular selon ton choix) |
| **Export PDF** | jsPDF / html2canvas / React-to-Print |
| **Gestion de version** | Git & GitHub |

---

## 📋 Installation et exécution

### 🔧 Prérequis
- [Node.js](https://nodejs.org/) installé (si tu utilises une stack avec npm/yarn)
- Navigateur moderne (Chrome, Edge, Firefox…)

### 💻 Étapes d’installation

