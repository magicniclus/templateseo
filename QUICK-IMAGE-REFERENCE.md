# 🚀 Référence Rapide - Nomenclature des Images

## 📋 Checklist pour Ajouter une Image

1. **Nommer** selon la convention
2. **Optimiser** (compression, taille)
3. **Placer** dans le bon dossier
4. **Mettre à jour** la config
5. **Tester** l'affichage

## 🗂️ Dossiers et Conventions

### `/public/hero/`
- `hero.jpg` - Image de fond hero
- `hero.mp4` - Vidéo de fond hero

### `/public/about/`
- `about-1.png` - Première section About
- `about-2.png` - Deuxième section About
- `about-N.png` - Section About N

### `/public/gallery/`
- `gallery-1.png` - Première réalisation
- `gallery-2.jpg` - Deuxième réalisation
- `gallery-N.jpg` - Réalisation N

### `/public/services/`
- `service-carrelage-interieur.png`
- `service-carrelage-exterieur.png`
- `service-revetements-sol.png`
- `service-[nom-service].png`

### `/public/team/`
- `team-mohammed-hadjouti.jpg`
- `team-[prenom-nom].jpg`

### `/public/logos/`
- `logo.png` - Logo principal
- `logo-sma-btp.png`
- `logo-decennale.png`
- `logo-tmc-partenaire.png`
- `logo-rge.png`
- `logo-[nom-partenaire].png`

### `/public/icons/`
- `icon-[description].svg`

## 🔧 Fichiers à Mettre à Jour

### Pour les images About
➡️ `config/site-config.json` → `about.sections[].image`

### Pour les images Gallery
➡️ `config/site-config.json` → `gallery.images[].src`

### Pour les logos partenaires
➡️ `config/site-config.json` → `partners.logos[].src`

### Pour les images de services
➡️ `app/services/[service]/page.tsx` → `heroImage`

### Pour le logo principal
➡️ `components/Navigation.tsx`
➡️ `components/Footer.tsx`
➡️ `lib/seo-config.ts`

### Pour la vidéo hero
➡️ `config/site-config.json` → `hero.backgroundVideo`

## 📏 Tailles Recommandées

| Type | Taille | Format |
|------|--------|--------|
| Hero | 1920x1080px | JPG/MP4 |
| About | 800x600px | PNG/JPG |
| Gallery | 800x800px | JPG |
| Services | 1200x800px | PNG/JPG |
| Team | 400x400px | JPG |
| Logos | Variable | PNG/SVG |

## ⚡ Commandes Rapides

```bash
# Créer une nouvelle image de galerie
cp nouvelle-image.jpg public/gallery/gallery-7.jpg

# Ajouter dans site-config.json
{
  "src": "/gallery/gallery-7.jpg",
  "alt": "Description",
  "title": "Titre - Localisation"
}
```

## 🎯 Exemples Concrets

### Ajouter une nouvelle réalisation
1. Nommer: `gallery-8.jpg`
2. Placer: `/public/gallery/`
3. Config: Ajouter dans `site-config.json`
```json
{
  "src": "/gallery/gallery-8.jpg",
  "alt": "Nouvelle réalisation carrelage",
  "title": "Carrelage moderne - 63430"
}
```

### Ajouter un nouveau service
1. Nommer: `service-renovation-sdb.png`
2. Placer: `/public/services/`
3. Page: Créer `app/services/renovation-sdb/page.tsx`
4. Config: `heroImage: "/services/service-renovation-sdb.png"`

### Changer le logo
1. Nommer: `logo.png`
2. Remplacer: `/public/logos/logo.png`
3. ✅ Automatique dans tous les composants !

---
*Guide créé pour faciliter la maintenance des images ORAN-BAT63*
