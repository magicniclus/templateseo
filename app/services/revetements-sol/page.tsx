import ServicePage from '@/components/ServicePage';
import { generateServiceMetadata } from '@/lib/service-metadata';
import { Metadata } from 'next';

const revetementsSolConfig = {
  // SEO et métadonnées
  title: "Revêtements de Sol 63430 - ORAN-BAT63",
  description: "Expert en pose de revêtements de sol dans le 63430 et Auvergne-Rhône-Alpes. Carrelage, pierre, sols techniques. Devis gratuit et personnalisé.",
  keywords: [
    "revêtements sol 63430",
    "pose sol Auvergne-Rhône-Alpes", 
    "sols techniques",
    "carrelage grand format",
    "pierre naturelle sol",
    "devis gratuit revêtement",
    "ORAN-BAT63",
    "sols Puy-de-Dôme"
  ],
  
  // Contenu principal
  serviceName: "Revêtements de Sol",
  heroImage: "/services/service-revetements-sol.png",
  heroTitle: "Revêtements de Sol Professionnels",
  heroSubtitle: "Spécialiste de tous types de sols dans le 63430 et Auvergne-Rhône-Alpes",
  
  // Localisation
  sector: "BTP - Revêtements de Sol",
  location: "63430, Auvergne-Rhône-Alpes",
  
  // Description détaillée
  mainDescription: "ORAN-BAT63 vous accompagne dans le choix et la pose de tous types de revêtements de sol. Notre expertise technique nous permet de réaliser des poses parfaites, adaptées à chaque usage et contrainte. Nous travaillons avec des matériaux de qualité pour un résultat durable.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Carrelage Grand Format",
      description: "Pose de carrelage grand format jusqu'à 120x120cm. Technique de pose spécialisée pour un rendu moderne."
    },
    {
      title: "Pierre Naturelle",
      description: "Pose de pierre naturelle : travertin, marbre, ardoise, granit. Traitement et finitions adaptées."
    },
    {
      title: "Grès Cérame",
      description: "Spécialiste du grès cérame effet bois, béton, métal. Pose technique pour imitation parfaite."
    },
    {
      title: "Sols Techniques",
      description: "Pose de sols techniques pour locaux professionnels. Résistance chimique et mécanique."
    },
    {
      title: "Sols Chauffants",
      description: "Pose sur plancher chauffant avec matériaux compatibles. Respect des DTU spécifiques."
    },
    {
      title: "Rénovation de Sols",
      description: "Rénovation et réfection de sols anciens. Dépose, préparation et pose du nouveau revêtement."
    },
    {
      title: "Préparation Support",
      description: "Ragréage, chape, étanchéité. Préparation complète des supports pour pose optimale."
    },
    {
      title: "Finitions Spéciales",
      description: "Plinthes, seuils, profilés de finition. Tous les détails pour un rendu professionnel."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Expertise tous matériaux",
    "Pose technique certifiée",
    "Matériaux haut de gamme",
    "Conseil personnalisé",
    "Finitions parfaites",
    "Respect des DTU",
    "Tarification transparente",
    "Estimation gratuite et sans engagement",
    "Garantie décennale travaux"
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
  revetementsSolConfig.serviceName,
  revetementsSolConfig.location,
  revetementsSolConfig.description,
  revetementsSolConfig.keywords
);

export default function RevetementsSolPage() {
  return <ServicePage {...revetementsSolConfig} />;
}
