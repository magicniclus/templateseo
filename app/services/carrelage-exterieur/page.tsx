import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const carrelageExterieurConfig = {
  // SEO et métadonnées
  title: "Carrelage Extérieur 63430 - ORAN-BAT63",
  description: "Spécialiste carrelage extérieur et terrasses dans le 63430 et Auvergne-Rhône-Alpes. Matériaux résistants, pose professionnelle. Devis gratuit.",
  keywords: [
    "carrelage extérieur 63430",
    "terrasse carrelée Auvergne-Rhône-Alpes", 
    "carrelage terrasse",
    "pose carrelage extérieur",
    "dallage extérieur",
    "devis gratuit terrasse",
    "ORAN-BAT63",
    "carrelage Puy-de-Dôme"
  ],
  
  // Contenu principal
  serviceName: "Carrelage Extérieur",
  heroImage: "/maison-work.png",
  heroTitle: "Carrelage Extérieur et Terrasses",
  heroSubtitle: "Expert en aménagement extérieur dans le 63430 et Auvergne-Rhône-Alpes",
  
  // Localisation
  sector: "BTP - Carrelage Extérieur",
  location: "63430, Auvergne-Rhône-Alpes",
  
  // Description détaillée
  mainDescription: "ORAN-BAT63 transforme vos espaces extérieurs avec des solutions de carrelage adaptées. Spécialisé dans l'aménagement de terrasses, allées et espaces extérieurs, nous sélectionnons des matériaux résistants aux intempéries pour un rendu durable et esthétique.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Terrasses Carrelées",
      description: "Création de terrasses carrelées avec matériaux antidérapants et résistants au gel. Finitions soignées."
    },
    {
      title: "Allées et Cheminements",
      description: "Aménagement d'allées carrelées pour accès maison et jardin. Matériaux adaptés au passage."
    },
    {
      title: "Contours de Piscine",
      description: "Pose de carrelage antidérapant autour des piscines. Sécurité et esthétique garanties."
    },
    {
      title: "Escaliers Extérieurs",
      description: "Habillage d'escaliers extérieurs avec carrelage antidérapant. Nez de marche sécurisés."
    },
    {
      title: "Balcons et Loggias",
      description: "Rénovation de balcons avec carrelage étanche et résistant. Évacuation des eaux optimisée."
    },
    {
      title: "Murs Extérieurs",
      description: "Habillage de murs extérieurs avec carrelage résistant aux intempéries et au gel."
    },
    {
      title: "Étanchéité Extérieure",
      description: "Mise en œuvre de systèmes d'étanchéité sous carrelage extérieur. Protection longue durée."
    },
    {
      title: "Joints Spéciaux",
      description: "Réalisation de joints adaptés à l'extérieur. Résistance aux UV et aux variations thermiques."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Matériaux résistants au gel",
    "Pose professionnelle certifiée",
    "Étanchéité garantie 10 ans",
    "Carrelage antidérapant",
    "Conseil technique spécialisé",
    "Respect des normes DTU",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie décennale"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "63430",
    "Clermont-Ferrand",
    "Riom",
    "Cournon-d'Auvergne",
    "Chamalières",
    "Beaumont",
    "Aubière",
    "Pont-du-Château",
    "Lempdes",
    "Gerzat"
  ],
  
  // Contact
  contactInfo: {
    phone: "07 45 65 62 25",
    email: "oran.bat63@gmail.com",
    address: "63430, Auvergne-Rhône-Alpes"
  }
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateServiceMetadata(
  carrelageExterieurConfig.serviceName,
  carrelageExterieurConfig.location,
  carrelageExterieurConfig.description,
  carrelageExterieurConfig.keywords
);

export default function CarrelageExterieurPage() {
  return <ServicePage {...carrelageExterieurConfig} />;
}
