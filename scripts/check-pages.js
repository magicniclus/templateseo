const fs = require('fs');
const path = require('path');

// Vérifier que toutes les pages de services existent
const servicesDir = path.join(__dirname, '../app/services');
const expectedServices = [
  'carrelage-interieur',
  'carrelage-exterieur', 
  'revetements-sol'
];

console.log('🔍 Vérification des pages de services...\n');

expectedServices.forEach(service => {
  const servicePath = path.join(servicesDir, service, 'page.tsx');
  if (fs.existsSync(servicePath)) {
    console.log(`✅ ${service}/page.tsx existe`);
  } else {
    console.log(`❌ ${service}/page.tsx manquant`);
  }
});

// Vérifier le sitemap
const sitemapPath = path.join(__dirname, '../app/sitemap.ts');
if (fs.existsSync(sitemapPath)) {
  console.log('\n✅ sitemap.ts existe');
} else {
  console.log('\n❌ sitemap.ts manquant');
}

// Vérifier robots.txt
const robotsPath = path.join(__dirname, '../app/robots.ts');
if (fs.existsSync(robotsPath)) {
  console.log('✅ robots.ts existe');
} else {
  console.log('❌ robots.ts manquant');
}

console.log('\n🎉 Vérification terminée !');
