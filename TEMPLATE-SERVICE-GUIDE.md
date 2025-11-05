# Guide d'utilisation du Template de Page Service

## 📋 Vue d'ensemble

Ce template permet de créer facilement des pages de présentation de prestations avec :
- ✅ SEO optimisé automatiquement
- ✅ Design responsive et moderne
- ✅ Formulaire de contact intégré avec Firebase
- ✅ Navigation et footer de la page d'accueil
- ✅ Structure JSON-LD pour le référencement
- ✅ Configuration simple via props

## 🚀 Création rapide d'une nouvelle page service

### 1. Créer le fichier de page

Créez un nouveau fichier dans `/app/services/[nom-service]/page.tsx`

### 2. Configuration de base

```typescript
import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

const monServiceConfig = {
  // SEO et métadonnées
  title: "Mon Service - Localisation",
  description: "Description courte et accrocheuse du service",
  keywords: ["mot-clé 1", "mot-clé 2", "localisation"],
  
  // Contenu principal
  serviceName: "Mon Service",
  heroImage: "/mon-image.jpg",
  heroTitle: "Titre Principal Accrocheur",
  heroSubtitle: "Sous-titre explicatif du service",
  
  // Localisation
  sector: "BTP - Spécialité",
  location: "Île-de-France",
  
  // Description détaillée
  mainDescription: "Description complète du service...",
  
  // Sous-prestations (obligatoire)
  subServices: [
    {
      title: "Prestation 1",
      description: "Description de la prestation 1"
    },
    // ... autres prestations
  ],
  
  // Avantages (obligatoire)
  advantages: [
    "Avantage 1",
    "Avantage 2",
    // ... autres avantages
  ],
  
  // Zone d'intervention (obligatoire)
  serviceArea: [
    "Ville 1",
    "Ville 2",
    // ... autres zones
  ],
  
  // Contact (obligatoire)
  contactInfo: {
    phone: "07 58 85 02 26",
    email: "idarenovation2022@gmail.com",
    address: "92150 Suresnes, Île-de-France"
  },
  
  // Prix (optionnel)
  pricing: [
    {
      title: "Service de base",
      description: "Description du service",
      priceRange: "100-200€"
    }
  ]
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateServiceMetadata(
  monServiceConfig.serviceName,
  monServiceConfig.location,
  monServiceConfig.description,
  monServiceConfig.keywords
);

export default function MonServicePage() {
  return <ServicePage {...monServiceConfig} />;
}
```

## 🎯 Optimisation SEO automatique

Le template génère automatiquement :
- **Title** : "Service Localisation - NEAGU LONUT | Devis Gratuit"
- **Meta description** optimisée
- **Keywords** ciblés
- **Open Graph** pour les réseaux sociaux
- **Schema.org JSON-LD** pour Google
- **Breadcrumbs** pour la navigation

## 📝 Personnalisation avec un prompt simple

Pour créer une nouvelle page, utilisez ce prompt :

```
Crée une page service pour [NOM_SERVICE] en [LOCALISATION] avec :
- 6-8 sous-prestations détaillées
- 8 avantages concurrentiels
- Zone d'intervention de 6-8 villes
- 4-5 prix indicatifs
- Description SEO optimisée
- Mots-clés pertinents pour le référencement local
```

## 🛠️ Fonctionnalités incluses

### Navigation et Footer
- Navigation identique à la page d'accueil
- Footer avec toutes les informations de contact
- Aucun composant supplémentaire à créer

### Formulaire de contact
- Formulaire identique au hero de la page d'accueil
- Envoi automatique vers Firebase
- Validation des champs
- Loader animé
- Redirection vers page de remerciement

### Design responsive
- Adapté mobile, tablette, desktop
- Animations Framer Motion
- Couleurs et styles du projet
- Images optimisées Next.js

### SEO avancé
- Métadonnées complètes
- Schema.org pour les services locaux
- Breadcrumbs structurés
- Optimisation pour la recherche locale

## 📁 Structure des fichiers

```
/app/services/
├── plomberie/
│   └── page.tsx
├── salle-de-bain/
│   └── page.tsx
└── [nouveau-service]/
    └── page.tsx

/components/
└── ServicePage.tsx (template principal)
```

## 🎨 Images recommandées

- **Hero** : 1920x1080px minimum
- **Format** : JPG ou PNG
- **Poids** : < 500KB
- **Nom** : descriptif (ex: plomberie.jpg)

## 📊 Suivi et analytics

Le formulaire envoie automatiquement :
- Source : "hero" (pour tracking)
- Motif pré-rempli avec le nom du service
- Toutes les données vers Firebase
- Même structure que le formulaire principal

## 🔧 Maintenance

Pour modifier le template global :
- Éditer `/components/ServicePage.tsx`
- Les changements s'appliquent à toutes les pages services
- Tester sur une page avant déploiement

## 💡 Bonnes pratiques

1. **Mots-clés** : Inclure la localisation + service
2. **Images** : Utiliser des images spécifiques au service
3. **Descriptions** : Rester naturel, éviter le keyword stuffing
4. **Prix** : Toujours indiquer "à partir de" ou "indicatif"
5. **Zone d'intervention** : Être précis sur les villes couvertes

## 🚀 Déploiement

1. Créer le fichier de configuration
2. Ajouter l'image dans `/public/`
3. Tester localement
4. Commit et push
5. La page sera accessible sur `/services/[nom-service]`
