'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Phone, Mail, MapPin, Star, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { submitFormToFirebase, validateFormData, FormData } from '@/lib/firebase-service';
import FormLoader from '@/components/FormLoader';
import { useRouter } from 'next/navigation';

interface ServicePageProps {
  // Contenu principal
  serviceName: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  
  // Secteur d'activité
  sector: string;
  location: string;
  
  // Contenu détaillé
  mainDescription: string;
  
  // Sous-prestations
  subServices: {
    title: string;
    description: string;
    icon?: string;
  }[];
  
  // Avantages/Points forts
  advantages: string[];
  
  // Zone d'intervention
  serviceArea: string[];
  
  // Informations de contact
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}


export default function ServicePage({
  serviceName,
  heroImage,
  heroTitle,
  heroSubtitle,
  sector,
  location,
  mainDescription,
  subServices,
  advantages,
  serviceArea,
  contactInfo
}: ServicePageProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    motif: `Demande de devis pour ${serviceName}`,
    rgpd: false,
    source: 'hero'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loaderStage, setLoaderStage] = useState<'sending' | 'success' | 'redirecting'>('sending');
  const [showLoader, setShowLoader] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const isFormValid = () => {
    return validateFormData(formData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid() || isSubmitting) return;

    setIsSubmitting(true);
    setShowLoader(true);
    setLoaderStage('sending');

    try {
      const docId = await submitFormToFirebase(formData);
      console.log('Form submitted successfully:', docId);
      
      setLoaderStage('success');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setLoaderStage('redirecting');
      await new Promise(resolve => setTimeout(resolve, 800));
      
      router.push('/merci');
    } catch (error) {
      console.error('Error submitting form:', error);
      setShowLoader(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Génération du schéma JSON-LD pour le SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": mainDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "ORAN-BAT63",
      "telephone": contactInfo.phone,
      "email": contactInfo.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location,
        "addressRegion": sector
      }
    },
    "areaServed": serviceArea.map(area => ({
      "@type": "City",
      "name": area
    })),
    "serviceType": serviceName,
    "category": sector
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />


      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={serviceName}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="text-white max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm mb-6 opacity-80">
              <span>Accueil</span>
              <ChevronRight className="h-4 w-4" />
              <span>Services</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-orange-300">{serviceName}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {heroTitle}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 text-orange-300" />
                <span className="text-sm font-medium">{location}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">Expert certifié</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Demander un devis gratuit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Description principale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {serviceName} en {location}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    {mainDescription}
                  </p>
                </div>
              </motion.div>

              {/* Sous-prestations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Nos prestations en {serviceName.toLowerCase()}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {subServices.map((service, index) => (
                    <motion.div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Avantages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Pourquoi choisir nos services ?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {advantages.map((advantage, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="bg-orange-500 rounded-full p-1 flex-shrink-0">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Devis gratuit section (remplace pricing) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Devis gratuit et personnalisé
                </h3>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-8 border border-orange-200">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Estimation gratuite et sans engagement
                    </h4>
                    <p className="text-gray-700 mb-6">
                      Obtenez un devis détaillé et personnalisé pour vos travaux de {serviceName.toLowerCase()}. 
                      Tarification transparente et conseils d'expert inclus.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center justify-center space-x-2">
                        <Check className="h-5 w-5 text-orange-500" />
                        <span className="text-sm font-medium">Devis gratuit</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Check className="h-5 w-5 text-orange-500" />
                        <span className="text-sm font-medium">Sans engagement</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Check className="h-5 w-5 text-orange-500" />
                        <span className="text-sm font-medium">Réponse rapide</span>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => {
                        const contactForm = document.getElementById('contact-form');
                        if (contactForm) {
                          contactForm.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Demander mon devis gratuit
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Contact rapide */}
              <motion.div
                className="bg-gray-50 rounded-xl p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Contact direct
                </h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <Phone className="h-5 w-5 text-orange-500" />
                    <span className="font-medium text-gray-900">{contactInfo.phone}</span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <Mail className="h-5 w-5 text-orange-500" />
                    <span className="font-medium text-gray-900">{contactInfo.email}</span>
                  </a>
                </div>
              </motion.div>

              {/* Zone d'intervention */}
              <motion.div
                className="bg-gray-50 rounded-xl p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Zone d'intervention
                </h3>
                <div className="space-y-2">
                  {serviceArea.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Demandez votre devis gratuit
            </h2>
            <p className="text-xl text-gray-600">
              Contactez-nous pour obtenir un devis personnalisé pour vos travaux de {serviceName.toLowerCase()}
            </p>
          </motion.div>

          <motion.div
            id="contact-form"
            className="bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom & Prénom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Motif */}
              <div>
                <label htmlFor="motif" className="block text-sm font-medium text-gray-700 mb-2">
                  Décrivez votre projet *
                </label>
                <textarea
                  id="motif"
                  name="motif"
                  rows={4}
                  value={formData.motif}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder={`Décrivez vos besoins en ${serviceName.toLowerCase()}...`}
                  required
                />
              </div>

              {/* RGPD */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="rgpd"
                  name="rgpd"
                  checked={formData.rgpd}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="rgpd" className="text-sm text-gray-600">
                  J'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande. *
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className={`w-full py-4 text-white font-semibold rounded-lg transition-all duration-300 ${
                  isFormValid() && !isSubmitting
                    ? 'bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Envoyer ma demande de devis
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Form Loader */}
      <FormLoader isVisible={showLoader} stage={loaderStage} />

    </div>
  );
}

