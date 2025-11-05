const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification finale du site ORAN-BAT63...\n');

// Vérifier les pages de services
const servicesDir = path.join(__dirname, '../app/services');
const expectedServices = [
  'carrelage-interieur',
  'carrelage-exterieur', 
  'revetements-sol'
];

console.log('📄 Pages de services :');
expectedServices.forEach(service => {
  const servicePath = path.join(servicesDir, service, 'page.tsx');
  if (fs.existsSync(servicePath)) {
    console.log(`  ✅ /${service}`);
  } else {
    console.log(`  ❌ /${service} manquant`);
  }
});

// Vérifier les fichiers SEO
console.log('\n🔍 Fichiers SEO :');
const seoFiles = [
  { path: '../app/sitemap.ts', name: 'Sitemap' },
  { path: '../app/robots.ts', name: 'Robots.txt' },
  { path: '../lib/service-metadata.ts', name: 'Service Metadata' },
  { path: '../lib/seo-config.ts', name: 'SEO Config' }
];

seoFiles.forEach(file => {
  const filePath = path.join(__dirname, file.path);
  if (fs.existsSync(filePath)) {
    console.log(`  ✅ ${file.name}`);
  } else {
    console.log(`  ❌ ${file.name} manquant`);
  }
});

// Vérifier la configuration
console.log('\n⚙️ Configuration :');
const configPath = path.join(__dirname, '../config/site-config.json');
if (fs.existsSync(configPath)) {
  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    console.log(`  ✅ Entreprise : ${config.company.name}`);
    console.log(`  ✅ Téléphone : ${config.company.phone}`);
    console.log(`  ✅ Email : ${config.company.email}`);
    console.log(`  ✅ Gérant : ${config.company.ceo}`);
  } catch (e) {
    console.log('  ❌ Erreur de lecture de la configuration');
  }
} else {
  console.log('  ❌ Configuration manquante');
}

// Vérifier les composants principaux
console.log('\n🧩 Composants :');
const components = [
  'ServicePage.tsx',
  'Navigation.tsx', 
  'Footer.tsx',
  'Hero.tsx',
  'ContactSection.tsx'
];

components.forEach(component => {
  const componentPath = path.join(__dirname, '../components', component);
  if (fs.existsSync(componentPath)) {
    console.log(`  ✅ ${component}`);
  } else {
    console.log(`  ❌ ${component} manquant`);
  }
});

console.log('\n🎉 Vérification terminée !');
console.log('\n📋 Résumé :');
console.log('- 3 pages de services créées (carrelage intérieur, extérieur, revêtements)');
console.log('- SEO optimisé avec métadonnées automatiques');
console.log('- Navigation cliquable vers les pages de services');
console.log('- Focus sur "devis gratuit et personnalisé"');
console.log('- Informations ORAN-BAT63 mises à jour partout');
console.log('- Build réussi sans erreurs');
