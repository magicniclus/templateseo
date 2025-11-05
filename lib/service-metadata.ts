import { Metadata } from 'next';

// Fonction utilitaire pour générer les métadonnées SEO des pages services
export function generateServiceMetadata(
  serviceName: string,
  location: string,
  description: string,
  keywords: string[]
): Metadata {
  const title = `${serviceName} ${location} - ORAN-BAT63 | Devis Gratuit`;
  const metaDescription = `${description} Devis gratuit et personnalisé en ${location}. Expert carreleur professionnel.`;

  return {
    title,
    description: metaDescription,
    keywords: [...keywords, 'devis gratuit', 'carreleur professionnel', location].join(', '),
    authors: [{ name: 'Mohammed Hadjouti' }],
    creator: 'Mohammed Hadjouti',
    publisher: 'ORAN-BAT63',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description: metaDescription,
      type: 'website',
      locale: 'fr_FR',
      siteName: 'ORAN-BAT63 - Carrelage',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
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
  };
}
