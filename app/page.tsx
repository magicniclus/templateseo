'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';
import { organizationSchema, servicesSchema } from '@/lib/seo-config';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Carrelage Intérieur",
      subtitle: "Carrelage et finitions intérieures",
      content: "Travaux de carrelage intérieur professionnels. Pose soignée pour transformer et embellir vos espaces de vie avec des finitions parfaites.",
      image: "/peinture.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/carrelage-interieur"
    },
    {
      title: "Carrelage Extérieur",
      subtitle: "Terrasses et extérieurs",
      content: "Carrelage extérieur et aménagement de terrasses. Protection et embellissement de vos espaces extérieurs avec des matériaux adaptés.",
      image: "/maison-work.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/carrelage-exterieur"
    },
    {
      title: "Revêtements de Sol",
      subtitle: "Sols et finitions",
      content: "Pose de revêtements de sol et finitions spéciales. Création d'ambiances uniques avec des matériaux de qualité.",
      image: "/plomberie.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/revetements-sol"
    }
  ];



  const contactInfo = {
    address: "63430\nAuvergne-Rhône-Alpes\nRayon d'intervention : 50 km autour de 63430",
    phone: "07 45 65 62 25",
    email: "oran.bat63@gmail.com",
    mapEmbedUrl: "https://maps.google.com/maps?q=63430,France&t=&z=12&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <AboutSection
        id="expertise"
        smallTitle={config.about.sections[0].smallTitle}
        title={config.about.sections[0].title}
        subtitle={config.about.sections[0].subtitle}
        content={config.about.sections[0].content}
        image={config.about.sections[0].image}
        gradientFrom={config.about.sections[0].gradientFrom}
        gradientTo={config.about.sections[0].gradientTo}
        buttonText={config.about.sections[0].buttonText}
        buttonHref={config.about.sections[0].buttonHref}
        reversed={config.about.sections[0].reversed}
      />
      <ServicesSection id="services" cards={servicesData} />
      <ProjectGallery id="realisations" config={config.gallery} />
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image={config.about.sections[1].image}
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection config={config.team} />
      <ContactSection 
        title="Contactez-nous"
        subtitle="Parlons de votre projet de carrelage ou revêtements de sol dans le 63430 et Auvergne-Rhône-Alpes"
        contactInfo={contactInfo} 
      />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
