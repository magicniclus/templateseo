# 🔄 Mapping des Images - Avant/Après Migration

## 📊 Correspondance des Fichiers

### ✅ Images Déplacées et Renommées

| Ancien Chemin | Nouveau Chemin | Usage |
|---------------|----------------|-------|
| `/video.mp4` | `/hero/hero.mp4` | Vidéo de fond hero |
| `/bg.png` | `/hero/hero.png` | Image de fond hero (backup) |
| `/maison-work.png` | `/about/about-1.png` | Section About 1 |
| `/plomberie.png` | `/about/about-2.png` | Section About 2 |
| `/logo.png` | `/logos/logo.png` | Logo principal |
| `/logo/SMA_BTP.png` | `/logos/logo-sma-btp.png` | Logo partenaire SMA BTP |
| `/logo/decennale.png` | `/logos/logo-decennale.png` | Logo assurance décennale |
| `/logo/tmc-partenaire.png` | `/logos/logo-tmc-partenaire.png` | Logo partenaire TMC |
| `/rge.png` | `/logos/logo-rge.png` | Logo certification RGE |
| `/maison.png` | `/services/service-carrelage-interieur.png` | Service carrelage intérieur |
| `/mur.png` | `/services/service-carrelage-exterieur.png` | Service carrelage extérieur |
| `/peinture.png` | `/services/service-revetements-sol.png` | Service revêtements de sol |
| `/placo.png` | `/gallery/gallery-1.png` | Première réalisation galerie |

### 🆕 Images à Ajouter (Placeholders Créés)

| Nouveau Chemin | Usage | Status |
|----------------|-------|--------|
| `/gallery/gallery-2.jpg` | Deuxième réalisation | 📝 À remplacer |
| `/gallery/gallery-3.jpg` | Troisième réalisation | 📝 À remplacer |
| `/gallery/gallery-4.jpg` | Quatrième réalisation | 📝 À remplacer |
| `/gallery/gallery-5.jpg` | Cinquième réalisation | 📝 À remplacer |
| `/gallery/gallery-6.jpg` | Sixième réalisation | 📝 À remplacer |

## 🔧 Fichiers de Configuration Mis à Jour

### `config/site-config.json`
- ✅ `hero.backgroundVideo`: `/hero/hero.mp4`
- ✅ `about.sections[0].image`: `/about/about-1.png`
- ✅ `about.sections[1].image`: `/about/about-2.png`
- ✅ `gallery.images[0].src`: `/gallery/gallery-1.png`
- ✅ `gallery.images[1].src`: `/gallery/gallery-2.jpg`
- ✅ `gallery.images[2].src`: `/gallery/gallery-3.jpg`
- ✅ `gallery.images[3].src`: `/gallery/gallery-4.jpg`
- ✅ `gallery.images[4].src`: `/gallery/gallery-5.jpg`
- ✅ `gallery.images[5].src`: `/gallery/gallery-6.jpg`
- ✅ `partners.logos[].src`: Tous les logos mis à jour

### Pages de Services
- ✅ `app/services/carrelage-interieur/page.tsx`: `/services/service-carrelage-interieur.png`
- ✅ `app/services/carrelage-exterieur/page.tsx`: `/services/service-carrelage-exterieur.png`
- ✅ `app/services/revetements-sol/page.tsx`: `/services/service-revetements-sol.png`

### Composants
- ✅ `components/Navigation.tsx`: `/logos/logo.png`
- ✅ `components/Footer.tsx`: `/logos/logo.png`
- ✅ `lib/seo-config.ts`: `/logos/logo.png`

## 📁 Structure Finale des Dossiers

```
public/
├── hero/
│   ├── hero.mp4 ✅
│   └── hero.png ✅
├── about/
│   ├── about-1.png ✅
│   └── about-2.png ✅
├── gallery/
│   ├── gallery-1.png ✅
│   ├── gallery-2.jpg 📝 (placeholder)
│   ├── gallery-3.jpg 📝 (placeholder)
│   ├── gallery-4.jpg 📝 (placeholder)
│   ├── gallery-5.jpg 📝 (placeholder)
│   └── gallery-6.jpg 📝 (placeholder)
├── services/
│   ├── service-carrelage-interieur.png ✅
│   ├── service-carrelage-exterieur.png ✅
│   └── service-revetements-sol.png ✅
├── team/
│   └── (vide - à remplir si nécessaire)
├── logos/
│   ├── logo.png ✅
│   ├── logo-sma-btp.png ✅
│   ├── logo-decennale.png ✅
│   ├── logo-tmc-partenaire.png ✅
│   └── logo-rge.png ✅
└── icons/
    └── (vide - à remplir si nécessaire)
```

## 🎯 Actions Suivantes Recommandées

1. **Remplacer les placeholders** de la galerie par de vraies photos de réalisations
2. **Ajouter une photo** de Mohammed Hadjouti dans `/team/`
3. **Créer des icônes** personnalisées dans `/icons/` si nécessaire
4. **Optimiser les images** existantes pour le web (compression, formats modernes)

## 📞 Notes pour l'Équipe

- ✅ **Système opérationnel** : Toutes les références sont mises à jour
- 🔄 **Facilité de maintenance** : Nomenclature claire et documentée
- 📈 **Évolutivité** : Structure extensible pour de nouveaux services/sections
- 🎨 **Cohérence** : Standard uniforme pour toute l'équipe

---
*Migration effectuée le: Novembre 2025*
*Système de nomenclature: Opérationnel*
