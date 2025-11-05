# 📸 Guide de Nomenclature des Images - ORAN-BAT63

## 🎯 Objectif
Ce document définit la nomenclature standardisée pour toutes les images du site ORAN-BAT63. Cette standardisation facilite la maintenance, l'ajout de nouvelles images et la cohérence du projet.

## 📁 Structure des Dossiers
```
public/
├── hero/                    # Images pour la section Hero
├── about/                   # Images pour les sections About
├── gallery/                 # Images pour la galerie de réalisations
├── services/                # Images pour les pages de services
├── team/                    # Images pour l'équipe
├── logos/                   # Logos des partenaires et certifications
└── icons/                   # Icônes et éléments graphiques
```

## 🏷️ Nomenclature par Section

### 🦸 Section Hero
- **Fichier**: `hero.jpg` ou `hero.png`
- **Vidéo**: `hero.mp4`
- **Usage**: Image/vidéo de fond de la section principale

### 📖 Sections About
- **About 1**: `about-1.jpg` ou `about-1.png`
- **About 2**: `about-2.jpg` ou `about-2.png`
- **About N**: `about-N.jpg` ou `about-N.png`
- **Usage**: Images illustrant les sections "À propos" et expertises

### 🖼️ Galerie de Réalisations
- **Format**: `gallery-[numéro].jpg`
- **Exemples**: 
  - `gallery-1.jpg` - Première réalisation
  - `gallery-2.jpg` - Deuxième réalisation
  - `gallery-3.jpg` - Troisième réalisation
- **Usage**: Photos des travaux réalisés

### 🔧 Pages de Services
- **Carrelage Intérieur**: `service-carrelage-interieur.jpg`
- **Carrelage Extérieur**: `service-carrelage-exterieur.jpg`
- **Revêtements Sol**: `service-revetements-sol.jpg`
- **Format général**: `service-[nom-du-service].jpg`

### 👥 Section Équipe
- **Format**: `team-[prenom-nom].jpg`
- **Exemple**: `team-mohammed-hadjouti.jpg`
- **Usage**: Photos des membres de l'équipe

### 🏢 Logos et Partenaires
- **Logo principal**: `logo.png`
- **Partenaires**: 
  - `logo-sma-btp.png`
  - `logo-decennale.png`
  - `logo-tmc-partenaire.png`
  - `logo-rge.png`
- **Format général**: `logo-[nom-partenaire].png`

### 🎨 Icônes et Éléments Graphiques
- **Format**: `icon-[description].svg` ou `icon-[description].png`
- **Exemples**:
  - `icon-phone.svg`
  - `icon-email.svg`
  - `icon-location.svg`

## 📏 Spécifications Techniques

### Formats Recommandés
- **Photos**: JPG (qualité 85-90%)
- **Logos/Icônes**: PNG (avec transparence) ou SVG
- **Vidéos**: MP4 (H.264)

### Tailles Recommandées
- **Hero**: 1920x1080px minimum
- **About**: 800x600px
- **Gallery**: 800x800px (carré)
- **Services**: 1200x800px
- **Team**: 400x400px (carré)
- **Logos**: Variable selon le logo

### Optimisation
- Compresser toutes les images avant upload
- Utiliser des formats modernes (WebP) quand possible
- Prévoir des versions responsive si nécessaire

## 🔄 Processus d'Ajout d'Images

1. **Nommer** l'image selon la nomenclature
2. **Optimiser** la taille et qualité
3. **Placer** dans le bon dossier `/public/`
4. **Mettre à jour** la configuration dans `site-config.json`
5. **Tester** l'affichage sur le site

## 📝 Mapping Actuel des Images

### Images Actuelles à Renommer
```
Ancien nom          → Nouveau nom
/maison-work.png    → /about/about-1.png
/plomberie.png      → /about/about-2.png
/logo.png           → /logos/logo.png
/bg.png             → /hero/hero.png
/video.mp4          → /hero/hero.mp4
```

### Logos Partenaires
```
/logo/SMA_BTP.png           → /logos/logo-sma-btp.png
/logo/decennale.png         → /logos/logo-decennale.png
/logo/tmc-partenaire.png    → /logos/logo-tmc-partenaire.png
/rge.png                    → /logos/logo-rge.png
```

## 🚀 Avantages de cette Nomenclature

1. **Clarté**: Nom explicite de chaque image
2. **Organisation**: Structure logique des dossiers
3. **Maintenance**: Facile de retrouver et remplacer une image
4. **Évolutivité**: Système extensible pour de nouvelles sections
5. **Cohérence**: Standard uniforme pour toute l'équipe

## 📞 Support
Pour toute question sur la nomenclature des images, se référer à ce document ou contacter l'équipe de développement.

---
*Dernière mise à jour: Novembre 2025*
