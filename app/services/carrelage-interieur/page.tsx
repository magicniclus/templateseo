import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const carrelageInterieurConfig = {
  // SEO et métadonnées
  title: "Carrelage Intérieur 63430 - ORAN-BAT63",
  description: "Expert en carrelage intérieur dans le 63430 et Auvergne-Rhône-Alpes. Pose professionnelle, finitions parfaites. Devis gratuit et personnalisé.",
  keywords: [
    "carrelage intérieur 63430",
    "pose carrelage Auvergne-Rhône-Alpes", 
    "carreleur professionnel",
    "faïence salle de bain",
    "carrelage cuisine",
    "devis gratuit carrelage",
    "ORAN-BAT63",
    "carrelage Puy-de-Dôme"
  ],
  
  // Contenu principal
  serviceName: "Carrelage Intérieur",
  heroImage: "/services/service-carrelage-interieur.png",
  heroTitle: "Carrelage Intérieur Professionnel",
  heroSubtitle: "Expert en pose de carrelage intérieur dans le 63430 et Auvergne-Rhône-Alpes",
  
  // Localisation
  sector: "BTP - Carrelage",
  location: "63430, Auvergne-Rhône-Alpes",
  
  // Description détaillée
  mainDescription: "ORAN-BAT63 vous accompagne dans tous vos projets de carrelage intérieur. Spécialisé dans la pose de carrelage, faïence et revêtements muraux, nous garantissons des finitions parfaites et une étanchéité optimale. Notre expertise technique et notre souci du détail font de chaque projet une réussite.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Carrelage Sol",
      description: "Pose de carrelage au sol pour toutes les pièces : cuisine, salon, chambre, entrée. Tous formats et matériaux."
    },
    {
      title: "Faïence Murale",
      description: "Pose de faïence murale pour salles de bain, cuisines et WC. Finitions soignées et étanchéité garantie."
    },
    {
      title: "Mosaïque",
      description: "Pose de mosaïque décorative pour créer des ambiances uniques. Expertise en découpe et finitions."
    },
    {
      title: "Pierre Naturelle",
      description: "Pose de pierre naturelle (travertin, marbre, ardoise) pour un rendu authentique et élégant."
    },
    {
      title: "Grès Cérame",
      description: "Spécialiste du grès cérame grand format. Pose technique pour un rendu moderne et durable."
    },
    {
      title: "Étanchéité",
      description: "Mise en œuvre de l'étanchéité sous carrelage. Protection optimale contre l'humidité."
    },
    {
      title: "Joints et Finitions",
      description: "Réalisation de joints parfaits et finitions soignées. Choix de coloris et techniques adaptées."
    },
    {
      title: "Ragréage",
      description: "Préparation des sols par ragréage pour une surface parfaitement plane avant pose."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Pose professionnelle garantie",
    "Matériaux haut de gamme",
    "Étanchéité garantie 10 ans",
    "Finitions parfaites",
    "Conseil design et technique",
    "Respect des délais",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Suivi personnalisé du projet"
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
  carrelageInterieurConfig.serviceName,
  carrelageInterieurConfig.location,
  carrelageInterieurConfig.description,
  carrelageInterieurConfig.keywords
);

export default function CarrelageInterieurPage() {
  return <ServicePage {...carrelageInterieurConfig} />;
}
