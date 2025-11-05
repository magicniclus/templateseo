import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "ORAN-BAT63 - Carreleur Professionnel en Auvergne-Rhône-Alpes",
  description: "ORAN-BAT63, entrepreneur du bâtiment spécialisé en carrelage et revêtements de sol. Devis gratuit dans le 63430 et Auvergne-Rhône-Alpes.",
  keywords: [
    "carrelage intérieur Auvergne-Rhône-Alpes",
    "carrelage extérieur 63430",
    "carreleur professionnel Auvergne",
    "revêtements sol Rhône-Alpes",
    "entrepreneur bâtiment 63430",
    "carrelage maison Auvergne-Rhône-Alpes",
    "travaux carrelage intérieur",
    "carrelage décoratif",
    "sol carrelé",
    "finitions carrelage",
    "devis gratuit",
    "ORAN-BAT63",
    "Mohammed Hadjouti",
    "carrelage Auvergne",
    "entrepreneur bâtiment"
  ],
  author: "Mohammed Hadjouti",
  siteUrl: "https://oranbat63.fr",
  siteName: "ORAN-BAT63 - Carrelage",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@adbetton"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "ORAN-BAT63",
  "legalName": "Oran-bat63 - Entrepreneur du bâtiment",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "Mohammed Hadjouti"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "63430",
    "postalCode": "63430",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33745656225",
    "contactType": "customer service",
    "email": "oran.bat63@gmail.com",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Auvergne-Rhône-Alpes"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Puy-de-Dôme"
    },
    {
      "@type": "City",
      "name": "63430"
    }
  ],
  "serviceType": [
    "Carrelage intérieur",
    "Carrelage extérieur", 
    "Revêtements de sol",
    "Finitions carrelage",
    "Travaux de carrelage"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Tiling Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de carrelage",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Carrelage intérieur",
          "description": "Travaux de carrelage intérieur professionnels avec finitions parfaites"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Carrelage extérieur",
          "description": "Carrelage extérieur et terrasses avec matériaux adaptés"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Revêtements de sol",
          "description": "Pose de revêtements de sol et finitions spéciales"
        }
      }
    ]
  }
};
