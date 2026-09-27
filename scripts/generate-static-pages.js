import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist! Run vite build first.');
  process.exit(1);
}

const baseIndexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const pages = [
  {
    path: 'about',
    title: 'About Mr Shivakumar Shankar | Consultant Hip & Knee Surgeon',
    description: 'Biography, credentials, and surgical training of Mr Shivakumar Shankar, NHS Clinical Lead & Consultant Orthopaedic Surgeon at Spire and Nuffield Hospitals.',
    canonical: 'https://www.shivakumarshankar.co.uk/about'
  },
  {
    path: 'hip-replacement',
    title: 'Hip Replacement Surgery London & Essex | Mr Shivakumar Shankar',
    description: 'Specialist primary, complex, and minimally invasive hip replacement in London & Essex. Regional pioneer in robotic and computer-assisted hip surgery.',
    canonical: 'https://www.shivakumarshankar.co.uk/hip-replacement'
  },
  {
    path: 'knee-replacement',
    title: 'Knee Replacement Surgery London & Essex | Mr Shivakumar Shankar',
    description: 'Consultant-led total knee replacement, robotic-assisted Mako arthroplasty, and partial unicompartmental knee replacement in Brentwood, Essex.',
    canonical: 'https://www.shivakumarshankar.co.uk/knee-replacement'
  },
  {
    path: 'robotic-surgery',
    title: 'Robotic & Computer-Assisted Hip & Knee Surgery | Essex & London',
    description: 'Pioneering robotic & computer-assisted joint replacement by Mr Shivakumar Shankar. Sub-millimeter implant accuracy and personalised soft-tissue balancing.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-surgery'
  },
  {
    path: 'knee-arthroscopy',
    title: 'Knee Arthroscopy & Keyhole Surgery | Mr Shivakumar Shankar',
    description: 'Minimally invasive keyhole knee surgery for meniscal tears, cartilage repair, and loose bodies in London and Essex. Over 1,200 procedures performed.',
    canonical: 'https://www.shivakumarshankar.co.uk/knee-arthroscopy'
  },
  {
    path: 'patient-guides',
    title: 'Patient Information & Guides | Mr Shivakumar Shankar',
    description: 'Patient information guides, surgical risks, non-operative options, and downloadable PDF rehabilitation protocols for hip and knee replacement patients.',
    canonical: 'https://www.shivakumarshankar.co.uk/patient-guides'
  },
  {
    path: 'reviews',
    title: 'Patient Reviews & Outcomes | Mr Shivakumar Shankar',
    description: 'Read 5-star verified patient reviews and clinical feedback for Mr Shivakumar Shankar, Consultant Orthopaedic Hip & Knee Surgeon at Spire and Nuffield.',
    canonical: 'https://www.shivakumarshankar.co.uk/reviews'
  },
  {
    path: 'contact',
    title: 'Contact & Consultations | Mr Shivakumar Shankar Hip & Knee Surgeon',
    description: 'Contact Mr Shivakumar Shankar\'s medical secretary Remya Rexlin. Book private consultations at Spire Hartswood Hospital or Nuffield Health Brentwood.',
    canonical: 'https://www.shivakumarshankar.co.uk/contact'
  }
];

console.log('Generating pre-rendered static HTML routes for direct URL access...');

pages.forEach(page => {
  let html = baseIndexHtml;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${page.description}" />`
  );

  // Replace canonical link
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${page.canonical}" />`
  );

  // Replace Open Graph title, description, url
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${page.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${page.canonical}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${page.description}" />`
  );

  // 1. Output to dist/<page.path>/index.html
  const pageDir = path.join(distDir, page.path);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf8');

  // 2. Output to dist/<page.path>.html for servers configured with cleanUrls
  fs.writeFileSync(path.join(distDir, `${page.path}.html`), html, 'utf8');

  console.log(`✓ Generated static page: /${page.path} (both /${page.path}/index.html and /${page.path}.html)`);
});

console.log('All static pages successfully generated.');
