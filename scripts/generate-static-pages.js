import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CLINICAL_PROCEDURES } from '../clinicalProceduresData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist! Run vite build first.');
  process.exit(1);
}

const baseIndexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

// Shared accessible navigation header HTML
const renderHeader = (currentPath) => `
    <header class="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <a href="/" class="text-xl sm:text-2xl font-black text-[#1B4965] tracking-tight hover:opacity-90 transition-opacity">
            Mr Shivakumar Shankar
          </a>
          <p class="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
            Consultant Orthopaedic Hip and Knee Surgeon &bull; London &amp; Essex
          </p>
        </div>
        <nav aria-label="Main Navigation" class="overflow-x-auto pb-1 md:pb-0">
          <ul class="flex items-center gap-2 sm:gap-4 text-xs font-bold uppercase tracking-wider text-slate-700 whitespace-nowrap">
            <li><a href="/" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath === '' ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Home</a></li>
            <li><a href="/about-mr-shivakumar-shankar" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath.includes('about') ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">About</a></li>
            <li><a href="/hip-replacement" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath.includes('hip') ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Hip Surgery</a></li>
            <li><a href="/knee-replacement" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath.includes('knee') || currentPath.includes('prp') ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Knee Surgery</a></li>
            <li><a href="/robotic-computer-assisted-surgery" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath.includes('robotic') ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Robotic Tech</a></li>
            <li><a href="/patient-information" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath.includes('patient') || currentPath.includes('recovery') ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Patient Info</a></li>
            <li><a href="/hospitals-locations" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath.includes('hospital') || currentPath.includes('surgeon') ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Locations</a></li>
            <li><a href="/reviews" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath.includes('reviews') ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Reviews</a></li>
            <li><a href="/book-consultation" class="px-3 py-1.5 rounded-lg bg-[#E8A24C] hover:bg-[#D99136] text-white font-bold transition-colors">Book Consultation</a></li>
          </ul>
        </nav>
      </div>
    </header>
`;

// Shared accessible footer HTML with canonical links and practice info
const renderFooter = () => `
    <footer class="bg-gradient-to-b from-slate-100 via-[#F8FAFC] to-white text-slate-700 py-16 text-sm border-t border-slate-200 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="space-y-4">
          <h4 class="font-extrabold text-slate-900 text-base">Mr Shivakumar Shankar</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            MBBS, DHA, MRCSEd, MSc (Tr &amp; Orth), FRCSEd (Tr &amp; Orth)<br>
            PG Diploma Principles of Computer-Assisted &amp; Robotic Arthroplasty<br>
            Consultant Orthopaedic Hip and Knee Surgeon &bull; London &amp; Essex<br>
            NHS Clinical Lead, Barking, Havering &amp; Redbridge University Hospitals NHS Trust<br>
            GMC Number: 6038414 (Specialist Register)
          </p>
          <div class="text-xs text-slate-600">
            <strong class="text-slate-900 block mb-1">Private Practice Medical Secretary:</strong>
            Remya Rexlin &bull; 07587 765888 / 020 3523 0621<br>
            hip.knee_specialist@yahoo.com
          </div>
        </div>

        <div>
          <h4 class="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="/" class="text-slate-600 hover:text-[#1B4965] transition-colors">Home</a></li>
            <li><a href="/about-mr-shivakumar-shankar" class="text-slate-600 hover:text-[#1B4965] transition-colors">About Mr Shankar</a></li>
            <li><a href="/hip-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Hip Replacement Surgery</a></li>
            <li><a href="/knee-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Knee Replacement &amp; Arthroplasty</a></li>
            <li><a href="/robotic-computer-assisted-surgery" class="text-slate-600 hover:text-[#1B4965] transition-colors">Robotic &amp; Computer-Assisted</a></li>
            <li><a href="/knee-arthroscopy" class="text-slate-600 hover:text-[#1B4965] transition-colors">Knee Arthroscopy &amp; Keyhole</a></li>
            <li><a href="/patient-information" class="text-slate-600 hover:text-[#1B4965] transition-colors">Patient Information Guides</a></li>
            <li><a href="/#media" class="text-slate-600 hover:text-[#1B4965] transition-colors">Media &amp; Social</a></li>
            <li><a href="/reviews" class="text-[#1B4965] font-bold hover:underline transition-colors">Patient Reviews (Doctify &amp; IWGC)</a></li>
            <li><a href="/book-consultation" class="text-[#1B4965] font-bold hover:text-[#13364B] transition-colors">Book Private Consultation</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Specialist Procedures</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="/hip-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Total Hip Replacement</a></li>
            <li><a href="/robotic-hip-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Robotic Hip Replacement</a></li>
            <li><a href="/computer-assisted-hip-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Computer-Assisted Hip Replacement</a></li>
            <li><a href="/minimally-invasive-hip-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Minimally Invasive Hip (Rottinger)</a></li>
            <li><a href="/revision-hip-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Revision Hip Replacement</a></li>
            <li><a href="/knee-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Total Knee Replacement</a></li>
            <li><a href="/robotic-knee-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Robotic Mako Knee Surgery</a></li>
            <li><a href="/partial-knee-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Partial (Unicompartmental) Knee</a></li>
            <li><a href="/knee-arthroscopy" class="text-slate-600 hover:text-[#1B4965] transition-colors">Knee Arthroscopy &amp; Meniscal Repair</a></li>
            <li><a href="/prp-injection" class="text-slate-600 hover:text-[#1B4965] transition-colors">Platelet-Rich Plasma (PRP) Injections</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Hospital Locations</h4>
          <div class="space-y-3 text-xs text-slate-600">
            <div>
              <strong class="text-slate-900 block">Spire Hartswood Hospital (Private)</strong>
              Eagle Way, Brentwood, Essex CM13 3LE<br>
              Tel: 01277 695 695
            </div>
            <div>
              <strong class="text-slate-900 block">Nuffield Health Brentwood Hospital (Private)</strong>
              Shenfield Road, Brentwood, Essex CM15 8EH<br>
              Tel: 01277 263 263
            </div>
            <div>
              <strong class="text-slate-900 block">NHS Hospitals (BHRUT)</strong>
              Queen's Hospital (Romford) &bull; King George Hospital (Goodmayes)
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>&copy; ${new Date().getFullYear()} Mr Shivakumar Shankar. All rights reserved. London &amp; Essex Hip and Knee Practice.</p>
        <div class="flex gap-4">
          <a href="/patient-information" class="hover:underline">Patient Information</a>
          <a href="/sitemap.xml" class="hover:underline">Sitemap</a>
          <a href="/contact" class="hover:underline">Contact Practice</a>
        </div>
      </div>
    </footer>
`;

const renderPageShell = (path, badge, h1, lead, contentHtml) => `
  ${renderHeader(path)}
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans text-slate-800">
    <nav aria-label="Breadcrumb" class="text-xs text-slate-500 mb-6">
      <a href="/" class="hover:underline">Home</a> &gt; <span class="font-bold text-slate-800">${h1}</span>
    </nav>
    <section class="mb-12">
      ${path === '' ? `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-7">
          <span class="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3">
            ${badge}
          </span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            ${h1}
          </h1>
          <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
            ${lead}
          </p>
        </div>
        <div class="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div class="relative z-10 w-full max-w-md">
            <div class="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white w-full max-w-md">
              <img src="/profile.jpg" alt="Mr Shivakumar Shankar, Consultant Orthopaedic Hip and Knee Surgeon in London and Essex" width="600" height="605" class="w-full h-auto object-cover object-top max-h-[520px]" loading="eager" decoding="async" />
              <div class="p-4 bg-slate-50 border-t border-slate-200">
                <p class="text-base font-bold text-slate-900 leading-snug">Mr Shivakumar Shankar</p>
                <p class="text-xs text-[#1B4965] font-semibold mt-0.5">Consultant Orthopaedic Hip &amp; Knee Surgeon</p>
              </div>
            </div>
          </div>
        </div>
      </div>` : `
      <span class="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3">
        ${badge}
      </span>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
        ${h1}
      </h1>
      <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
        ${lead}
      </p>`}
    </section>
    ${contentHtml}
  </main>
  ${renderFooter()}
`;

// Helper for standard three-card layout
const renderCardGrid = (cards) => `
  <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    ${cards.map(c => `
      <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
        <h2 class="text-lg font-bold text-slate-900 mb-2">${c.title}</h2>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">${c.desc}</p>
        ${c.bullets ? `<ul class="text-xs text-slate-700 space-y-1">${c.bullets.map(b => `<li>&bull; ${b}</li>`).join('')}</ul>` : ''}
      </div>
    `).join('')}
  </section>
`;

// Standard verified hospital locations for structured data
const STANDARD_HOSPITAL_LOCATIONS = [
  {
    "@type": "Hospital",
    "name": "Nuffield Health Brentwood Hospital",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shenfield Road",
      "addressLocality": "Brentwood",
      "addressRegion": "Essex",
      "postalCode": "CM15 8EH",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.6268,
      "longitude": 0.3188
    },
    "telephone": "01277 695 695",
    "url": "https://www.nuffieldhealth.com/consultants/mr-shivakumar-shankar#book"
  },
  {
    "@type": "Hospital",
    "name": "Spire Hartswood Hospital",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Eagle Way, Great Warley",
      "addressLocality": "Brentwood",
      "addressRegion": "Essex",
      "postalCode": "CM13 3LE",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5976,
      "longitude": 0.2882
    },
    "telephone": "01277 266 766",
    "url": "https://appointments.spirehealthcare.com/?c=C6038414"
  }
];

// Single authoritative Person/Physician/MedicalBusiness schema entity
const getPhysicianEntity = (locations = STANDARD_HOSPITAL_LOCATIONS) => ({
  "@type": ["Person", "Physician", "MedicalBusiness"],
  "@id": "https://www.shivakumarshankar.co.uk/#physician",
  "name": "Mr Shivakumar Shankar",
  "alternateName": [
    "Shivakumar Shankar",
    "Mr Shiva Shankar",
    "Shiva Shankar",
    "Shiv Shankar",
    "Shivakumar Shankar FRCSEd (Tr & Orth)",
    "S. Shankar Orthopaedic Surgeon"
  ],
  "legalName": "Mr Shivakumar Shankar",
  "jobTitle": "Consultant Orthopaedic Hip and Knee Surgeon",
  "medicalSpecialty": [
    "Orthopaedic Surgery",
    "Hip Replacement Surgery",
    "Knee Replacement Surgery",
    "Robotic-Assisted Joint Replacement",
    "Computer-Assisted Joint Replacement",
    "Revision Hip Surgery",
    "Partial Knee Replacement",
    "Knee Arthroscopy"
  ],
  "knowsAbout": [
    "Primary Hip Replacement",
    "Revision Hip Replacement",
    "MAKO Robotic Hip Replacement",
    "Computer-Assisted Hip Replacement",
    "Primary Knee Replacement",
    "MAKO Robotic Knee Replacement",
    "Partial Knee Replacement",
    "Knee Arthroscopy"
  ],
  "affiliation": [
    {
      "@type": "Hospital",
      "name": "Barking, Havering and Redbridge University Hospitals NHS Trust"
    },
    {
      "@type": "Hospital",
      "name": "Spire Hartswood Hospital"
    },
    {
      "@type": "Hospital",
      "name": "Nuffield Health Brentwood Hospital"
    }
  ],
  "description": "Consultant Orthopaedic Hip and Knee Surgeon specialising in primary, complex, and revision hip and knee surgery, with specialist interests in MAKO robotic joint replacement, computer-assisted navigation, and tissue-preserving arthroplasty across London and Essex.",
  "url": "https://www.shivakumarshankar.co.uk/",
  "image": {
    "@type": "ImageObject",
    "@id": "https://www.shivakumarshankar.co.uk/profile.jpg#primaryimage",
    "name": "Mr Shivakumar Shankar, Consultant Orthopaedic Hip and Knee Surgeon in London and Essex",
    "url": "https://www.shivakumarshankar.co.uk/profile.jpg",
    "contentUrl": "https://www.shivakumarshankar.co.uk/profile.jpg",
    "caption": "Mr Shivakumar Shankar, Consultant Orthopaedic Hip and Knee Surgeon in London and Essex",
    "width": 3009,
    "height": 3035
  },
  "telephone": "+447587765888",
  "email": "hip.knee_specialist@yahoo.com",
  "identifier": "GMC 6038414",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "FRCSEd (Tr & Orth) - Fellow of the Royal College of Surgeons of Edinburgh"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "MSc (Trauma & Orthopaedics) - University College London (UCL)"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Postgraduate Diploma in Computer and Robot-Assisted Orthopaedic Surgery"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "MBBS"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "MRCS"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "CCT - Certificate of Completion of Training in Trauma & Orthopaedics"
    }
  ],
  "sameAs": [
    "https://www.gmc-uk.org/registrants/6038414",
    "https://www.spirehealthcare.com/consultant-profiles/mr-shivakumar-shankar-c6038414/",
    "https://appointments.spirehealthcare.com/?c=C6038414",
    "https://www.nuffieldhealth.com/consultants/mr-shivakumar-shankar",
    "https://www.doctify.com/en-gb/specialist/shivakumar-shankar",
    "https://www.iwantgreatcare.org/doctors/mr-shivakumar-shankar",
    "https://finder.bupa.co.uk/Consultant/mr-shivakumar-shankar-orthopaedic-surgery-brentwood-romford",
    "https://www.linkedin.com/in/shivakumar-shankar-25758026/",
    "https://www.linkedin.com/in/shivakumar-shankar-25758026/recent-activity/all/",
    "https://x.com/ShankarHipKnee",
    "https://www.instagram.com/ShankarHipKnee",
    "https://www.tiktok.com/@ShankarHipKnee",
    "https://www.youtube.com/@ShankarHipKnee"
  ],
  "areaServed": [
    { "@type": "City", "name": "London" },
    { "@type": "AdministrativeArea", "name": "Essex" },
    { "@type": "City", "name": "Brentwood" },
    { "@type": "City", "name": "Romford" },
    { "@type": "City", "name": "Chelmsford" },
    { "@type": "AdministrativeArea", "name": "North East London" }
  ],
  "location": locations
});

// Patient-focused FAQs for About Mr Shivakumar Shankar
const ABOUT_FAQS = [
  {
    question: "What are Mr Shankar's medical qualifications and specialist credentials?",
    answer: "Mr Shivakumar Shankar is a Consultant Orthopaedic Surgeon specialising in hip and knee surgery. He holds MBBS, DHA, MRCSEd, MSc in Trauma & Orthopaedics from University College London (UCL), and FRCSEd (Tr & Orth) from the Royal College of Surgeons of Edinburgh. He holds a specialist Postgraduate Diploma in Principles of Computer-Assisted and Robotic Orthopaedic Surgery and was awarded his Certificate of Completion of Training (CCT) in October 2016. He is fully registered on the GMC Specialist Register (GMC reference: 6038414)."
  },
  {
    question: "How much surgical experience does Mr Shankar have in joint replacement?",
    answer: "Mr Shankar has performed manual and computer-assisted hip and knee replacement surgery for approximately 9 years in consultant and senior arthroplasty practice, completing over 3,000 hip and knee replacements and more than 1,200 knee arthroscopies. Building upon this extensive conventional and computer-assisted foundation, Mr Shankar more recently adopted MAKO robotic-assisted surgery and has personally performed more than 100 MAKO robotic joint replacements—a milestone reflecting his individual surgical caseload rather than the total performed by BHRUT NHS Trust."
  },
  {
    question: "What is the difference between robotic surgery at Nuffield Brentwood and computer navigation at Spire Hartswood?",
    answer: "Mr Shankar offers distinct, advanced technologies depending on the hospital facility: At Nuffield Health Brentwood Hospital, he provides MAKO robotic-assisted total hip, total knee, and partial knee replacements utilizing pre-operative 3D CT virtual planning and haptic robotic boundary protection. At Spire Hartswood Hospital in Brentwood, he provides conventional and computer-navigated hip and knee replacements using optical infra-red tracking for real-time limb alignment. Spire Hartswood does not operate a MAKO robotic system; patients specifically seeking MAKO robotic joint replacement are seen for surgery at Nuffield Health Brentwood Hospital or within his NHS practice at BHRUT."
  },
  {
    question: "What minimally invasive approaches does Mr Shankar use for hip replacement?",
    answer: "Mr Shankar has completed specialist international fellowship training in muscle-sparing hip arthroplasty. He utilises the true muscle-preserving Rottinger approach (trained at CABPS Centre, Centre Hospitalier de Haguenau, France) and the direct anterior approach (trained at Rummelsberg Hospital, Germany). These approaches work through natural inter-muscular and inter-nervous planes without detaching key abductor or posterior stabilizing muscles, promoting reduced post-operative discomfort, less soft-tissue trauma, and accelerated early rehabilitation."
  },
  {
    question: "What NHS appointments and clinical leadership roles does Mr Shankar hold?",
    answer: "Mr Shankar holds a substantive NHS Consultant appointment at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), operating at Queen's Hospital in Romford and King George Hospital in Goodmayes. He has served as the NHS Clinical Lead and Clinical Director for Trauma and Orthopaedics, Clinical Lead for Femur Fracture Management, Clinical Audit Lead, and Lead for Infection Control within the department. He also leads high-efficiency joint replacement throughput at the trust's Elective Surgical Hub (HULK-10 initiative)."
  },
  {
    question: "Which private hospitals does Mr Shankar consult and operate at?",
    answer: "Mr Shankar conducts private consultations and elective operating lists in Brentwood, Essex at two premier facilities: Nuffield Health Brentwood Hospital (Shenfield Road, Brentwood, CM15 8EH) and Spire Hartswood Hospital (Eagle Way, Great Warley, Brentwood, CM13 3LE). Both hospitals feature laminar-flow ultra-clean theatres, on-site MRI/CT diagnostics, dedicated inpatient physiotherapy, and private en-suite recovery rooms."
  },
  {
    question: "How can I book a private consultation, and is health insurance accepted?",
    answer: "Private appointments can be booked directly online via Spire Healthcare or Nuffield Health booking portals, or by contacting Mr Shankar's private medical secretary on 07587 765888 or 020 3523 0621 (email: hip.knee_specialist@yahoo.com). Mr Shankar is fee-assured and recognised by all major UK private medical insurers including Bupa, AXA Health, Aviva, Vitality, WPA, and Cigna. Self-funding patients are also welcomed, with transparent consultation fees (£250 initial consultation, £200 follow-up)."
  }
];

// Helper to generate full structured schema for About ProfilePage
const generateAboutPageJsonLd = (canonicalUrl = 'https://www.shivakumarshankar.co.uk/about-mr-shivakumar-shankar') => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.shivakumarshankar.co.uk/#website",
      "url": "https://www.shivakumarshankar.co.uk/",
      "name": "London and Essex Hip and Knee Surgeon",
      "description": "Official medical practice website of Mr Shivakumar Shankar, Consultant Orthopaedic Hip & Knee Surgeon.",
      "inLanguage": "en-GB",
      "publisher": {
        "@id": "https://www.shivakumarshankar.co.uk/#physician"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumbs`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.shivakumarshankar.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Mr Shankar",
          "item": "https://www.shivakumarshankar.co.uk/about-mr-shivakumar-shankar"
        }
      ]
    },
    getPhysicianEntity(),
    {
      "@type": "ProfilePage",
      "@id": canonicalUrl,
      "url": canonicalUrl,
      "name": "About Mr Shivakumar Shankar | Consultant Hip & Knee Surgeon",
      "description": "Biography, credentials, and surgical training of Mr Shivakumar Shankar, NHS Clinical Lead & Consultant Orthopaedic Surgeon at Spire and Nuffield Hospitals.",
      "inLanguage": "en-GB",
      "isPartOf": {
        "@id": "https://www.shivakumarshankar.co.uk/#website"
      },
      "breadcrumb": {
        "@id": `${canonicalUrl}#breadcrumbs`
      },
      "primaryImageOfPage": {
        "@id": "https://www.shivakumarshankar.co.uk/profile.jpg#primaryimage"
      },
      "mainEntity": {
        "@id": "https://www.shivakumarshankar.co.uk/#physician"
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faqpage`,
      "mainEntity": ABOUT_FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
});

// Comprehensive, well-organised professional biography for the About page
const renderAboutPageContent = () => `
      <!-- 1. HERO PROFILE & SUMMARY SECTION -->
      <section class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-7 space-y-5">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider border border-slate-200">
              Consultant Orthopaedic Hip &amp; Knee Surgeon &bull; GMC 6038414
            </div>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Dedicated to Precision Joint Reconstruction &amp; Muscle Preservation
            </h2>
            <p class="font-serif italic text-lg sm:text-xl text-[#1B4965]">
              "Restoring your active lifestyle through technical excellence and patient-focused surgical care."
            </p>
            <p class="text-sm sm:text-base text-slate-700 leading-relaxed">
              Mr Shivakumar Shankar is a fellowship-trained Consultant Orthopaedic Surgeon specialising in hip and knee surgery, with substantive NHS practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT) and private consulting practices at Spire Hartswood Hospital and Nuffield Health Brentwood Hospital in Essex.
            </p>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <p><strong>Primary Qualifications:</strong> MBBS (2000), DHA, MRCSEd, MSc in Trauma &amp; Orthopaedics (University College London), FRCSEd (Tr &amp; Orth).</p>
              <p><strong>Subspecialty Accreditation:</strong> Postgraduate Diploma in Principles of Computer-Assisted and Robotic Orthopaedic Surgery &bull; Certificate of Completion of Training (CCT Awarded October 2016).</p>
              <p><strong>General Medical Council:</strong> GMC Reference 6038414 &bull; Registered on the Specialist Register for Trauma and Orthopaedic Surgery.</p>
            </div>
            <div class="flex flex-wrap gap-3 pt-2">
              <a href="/book-consultation" class="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-md">
                Book Private Consultation
              </a>
              <a href="#fellowships" class="bg-white hover:bg-slate-50 text-[#1B4965] border border-slate-300 px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-2xs">
                View Surgical Fellowships
              </a>
            </div>
          </div>
          <div class="lg:col-span-5 flex flex-col items-center">
            <div class="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white w-full max-w-sm">
              <img src="/profile.jpg" alt="Mr Shivakumar Shankar, Consultant Orthopaedic Hip and Knee Surgeon in London and Essex" width="600" height="605" class="w-full h-auto object-cover object-top max-h-[440px]" loading="eager" decoding="async" />
              <div class="p-4 bg-slate-50 border-t border-slate-200">
                <p class="text-sm font-bold text-slate-900 leading-snug">Mr Shivakumar Shankar</p>
                <p class="text-xs text-[#1B4965] font-semibold mt-0.5">Consultant Robotic Hip &amp; Knee Surgeon</p>
                <p class="text-[11px] text-slate-500 mt-1">NHS Clinical Lead &bull; Spire Hartswood &bull; Nuffield Brentwood</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Surgical Metric Highlights -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-200">
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <p class="text-2xl sm:text-3xl font-black text-[#1B4965]">9+ Years</p>
            <p class="text-xs font-bold text-[#E8A24C] uppercase tracking-wider mt-0.5">Arthroplasty Experience</p>
            <p class="text-[11px] text-slate-600 mt-1">Extensive manual, computer-navigated and robotic joint replacement.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <p class="text-2xl sm:text-3xl font-black text-[#1B4965]">3,000+</p>
            <p class="text-xs font-bold text-[#E8A24C] uppercase tracking-wider mt-0.5">Joint Replacements</p>
            <p class="text-[11px] text-slate-600 mt-1">High-volume primary and complex hip and knee arthroplasty.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <p class="text-2xl sm:text-3xl font-black text-[#1B4965]">1,200+</p>
            <p class="text-xs font-bold text-[#E8A24C] uppercase tracking-wider mt-0.5">Knee Arthroscopies</p>
            <p class="text-[11px] text-slate-600 mt-1">Keyhole interventions, meniscal preservation and cartilage restoration.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <p class="text-2xl sm:text-3xl font-black text-[#1B4965]">100+</p>
            <p class="text-xs font-bold text-[#E8A24C] uppercase tracking-wider mt-0.5">Robotic Surgeries</p>
            <p class="text-[11px] text-slate-600 mt-1">MAKO robotic joint replacements personally performed by Mr Shankar.</p>
          </div>
        </div>
      </section>

      <!-- 2. CLINICAL OVERVIEW & SCOPE OF PRACTICE -->
      <section class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
          Consultant Orthopaedic Hip &amp; Knee Surgeon &mdash; Clinical Overview
        </h2>
        <div class="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            Mr Shivakumar Shankar is an experienced Consultant Orthopaedic and Trauma Surgeon whose specialist clinical practice is dedicated exclusively to conditions of the hip and knee. Practising across London and Essex, his surgical focus encompasses primary, complex primary and revision total hip replacement, total knee replacement, partial (unicompartmental) knee replacement, keyhole knee arthroscopy, meniscal repair and biologic joint preservation therapies.
          </p>
          <p>
            Recognised for his clinical commitment to patient safety, surgical precision and tissue-preserving techniques, Mr Shankar has performed manual and computer-assisted joint replacements for approximately 9 years in consultant and senior arthroplasty practice, establishing a mature surgical foundation before more recently adopting MAKO robotic-assisted surgery. His overarching objective is restoring pain-free mobility and enabling patients to return confidently to active, independent lifestyles. Every treatment pathway is tailored specifically to the patient's personal functional goals, occupational demands and anatomical requirements.
          </p>
          <p>
            In addition to major joint replacement surgery, Mr Shankar provides comprehensive assessment for sports knee injuries, persistent groin discomfort, patellofemoral pain and early joint degeneration. Where surgery is not immediately indicated, he champions conservative management strategies including targeted physiotherapy protocols, weight optimisation, image-guided corticosteroid or local anaesthetic injections and autologous Platelet-Rich Plasma (PRP) therapy.
          </p>
          <p>
            <strong>Revision Hip Surgery — Private and NHS Scope of Practice:</strong> Mr Shankar performs revision hip replacement surgery across both private and NHS hospital settings. Selected revision hip replacement procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar at Nuffield Health Brentwood Hospital and Spire Hartswood Hospital following individual clinical assessment and pre-operative investigations (for implant loosening, wear, instability or other mechanical problems). Mr Shankar also undertakes complex revision hip replacement surgery and complex hip reconstruction within his NHS hospital practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), where complex cases have access to specialist multidisciplinary assessment, complex reconstruction resources and dedicated perioperative support.
          </p>
        </div>
      </section>

      <!-- 3. SPECIALIST TRAINING & INTERNATIONAL FELLOWSHIPS -->
      <section id="fellowships" class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
          Specialist Surgical Training &amp; International Arthroplasty Fellowships
        </h2>
        <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
          Mr Shankar underwent rigorous higher surgical training within the prestigious London Deanery and North East Thames rotation, followed by world-renowned subspecialty clinical fellowships in joint replacement, navigation and muscle-sparing approaches:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span class="text-[11px] font-bold text-[#1B4965] uppercase tracking-wider bg-white px-2.5 py-1 rounded border border-slate-200 inline-block mb-2">Prestige UK Arthroplasty Centre</span>
            <h3 class="text-base font-bold text-slate-900 mb-1">Lower Limb Arthroplasty Fellowship</h3>
            <p class="text-xs font-semibold text-slate-600 mb-2">Royal National Orthopaedic Hospital (RNOH), Stanmore &amp; St Albans</p>
            <p class="text-xs text-slate-700 leading-relaxed">
              Advanced fellowship focusing on primary and complex revision hip and knee arthroplasty, severe bone loss reconstruction, custom implant planning and biomechanical limb alignment under internationally eminent joint reconstruction surgeons (<a href="/revision-hip-replacement" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">learn more about revision hip replacement</a>).
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span class="text-[11px] font-bold text-[#1B4965] uppercase tracking-wider bg-white px-2.5 py-1 rounded border border-slate-200 inline-block mb-2">Diploma in Robotics &amp; Navigation</span>
            <h3 class="text-base font-bold text-slate-900 mb-1">Computer-Navigated &amp; Robotic Arthroplasty Fellowship</h3>
            <p class="text-xs font-semibold text-slate-600 mb-2">Golden Jubilee National Hospital, Glasgow, UK</p>
            <p class="text-xs text-slate-700 leading-relaxed">
              Subspecialist surgical training in computer-assisted optical navigation and robotic joint reconstruction, leading to the award of the Postgraduate Diploma in Principles of Computer-Assisted and Robotic Orthopaedic Surgery.
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span class="text-[11px] font-bold text-[#1B4965] uppercase tracking-wider bg-white px-2.5 py-1 rounded border border-slate-200 inline-block mb-2">European Soft-Tissue Sparing</span>
            <h3 class="text-base font-bold text-slate-900 mb-1">Rottinger Muscle-Sparing Hip Arthroplasty Training</h3>
            <p class="text-xs font-semibold text-slate-600 mb-2">CABPS Centre, Centre Hospitalier de Haguenau, France</p>
            <p class="text-xs text-slate-700 leading-relaxed">
              Intensive international clinical immersion in the true muscle-sparing Rottinger anterolateral approach for total hip replacement, mastering precise inter-nervous and inter-muscular exposure that leaves abductor muscles intact.
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span class="text-[11px] font-bold text-[#1B4965] uppercase tracking-wider bg-white px-2.5 py-1 rounded border border-slate-200 inline-block mb-2">Direct Anterior Hip Expertise</span>
            <h3 class="text-base font-bold text-slate-900 mb-1">International Arthroplasty Travelling Fellowship</h3>
            <p class="text-xs font-semibold text-slate-600 mb-2">Orthopaedic Department, Rummelsberg Hospital, Germany</p>
            <p class="text-xs text-slate-700 leading-relaxed">
              Specialist fellowship with Professor Wagner's renowned lower limb unit in Germany, gaining extensive experience in direct anterior approach hip arthroplasty, tissue-sparing mechanics and accelerated post-operative mobilisation.
            </p>
          </div>
        </div>
        <div class="mt-6 p-4 rounded-xl bg-[#EAF1F6] border border-slate-200 text-xs text-slate-700">
          <strong>Higher Surgical Training Rotation:</strong> Completed through the North East Thames and London Deanery, rotating through major teaching centres including the Royal National Orthopaedic Hospital (RNOH Stanmore), Great Ormond Street Hospital, and The Royal London Hospital Major Trauma Centre, culminating in the award of the Certificate of Completion of Training (CCT) in Trauma &amp; Orthopaedic Surgery in October 2016.
        </div>
      </section>

      <!-- 4. ROBOTIC & COMPUTER-ASSISTED SURGERY EXPERIENCE -->
      <section class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
          Robotic-Assisted &amp; Computer-Navigated Joint Replacement
        </h2>
        <div class="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            Mr Shankar was among the earliest surgeons in Essex and North East London to routinely integrate computer navigation and robotic technology into both NHS and private practice. Building upon his longstanding conventional and computer-navigated surgical experience, he more recently integrated MAKO robotic technology and has personally performed more than 100 MAKO robotic-assisted joint replacements. This milestone represents Mr Shankar's individual surgical series, rather than the total number performed across BHRUT NHS Trust. His technological expertise centres on substantially reducing surgical alignment variation and achieving predictable, patient-specific joint kinematics.
          </p>
          <p>
            <strong>MAKO Robotic-Assisted Surgery:</strong> Utilises pre-operative 3D CT virtual modelling to assess the patient's unique skeletal anatomy before stepping into the operating theatre. During surgery, real-time optical arrays capture intra-operative ligament tension across the complete arc of motion. Mr Shankar personally guides the robotic arm, which enforces tactile stereotactic haptic boundaries designed to guide bone preparation with high positional accuracy while helping to protect adjacent soft-tissue structures, collateral ligaments, and healthy bone stock.
          </p>
          <p>
            <strong>Computer-Navigated Arthroplasty:</strong> Utilises real-time infrared tracking arrays to continuously calculate limb mechanical axis, joint line orientation and soft-tissue balance during bone preparation. This digital feedback allows micro-adjustments that respect the patient's constitutional alignment. In keeping with evidence-based practice, Mr Shankar advises patients that while robotic and computer-assisted technologies significantly enhance component orientation accuracy, surgeon experience, comprehensive clinical evaluation and dedicated post-operative physiotherapy remain fundamental to achieving outstanding long-term results.
          </p>
        </div>
      </section>

      <!-- 5. MINIMALLY INVASIVE HIP ARTHROPLASTY -->
      <section class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
          Minimally Invasive Hip Replacement &mdash; Muscle-Sparing Approaches
        </h2>
        <div class="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            A cornerstone of Mr Shankar's hip practice is tissue preservation. Traditional posterior or lateral hip replacement approaches frequently require detaching or dividing stabilizing muscles and tendons, which must then heal post-operatively. Having trained under European pioneers in France and Germany, Mr Shankar routinely offers true muscle-sparing approaches:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 class="text-base font-bold text-slate-900 mb-2">The Rottinger Approach (Anterolateral)</h3>
              <p class="text-xs text-slate-700 leading-relaxed">
                Accessed through a natural inter-nervous plane between the tensor fasciae latae and gluteus medius muscles. The gluteal abductors and posterior external rotators remain completely undisturbed, resulting in enhanced immediate joint stability, reduced risk of dislocation and less post-operative muscle soreness.
              </p>
            </div>
            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 class="text-base font-bold text-slate-900 mb-2">The Direct Anterior Approach (DAA)</h3>
              <p class="text-xs text-slate-700 leading-relaxed">
                Navigates between the tensor fasciae latae and rectus femoris muscles from the front of the hip. Because no major muscles are detached from bone, patients typically experience minimal post-operative movement restrictions and can progress more quickly to unassisted walking during early rehabilitation.
              </p>
            </div>
          </div>
          <p>
            These muscle-sparing techniques facilitate modern Enhanced Recovery After Surgery (ERAS) pathways, enabling patients to mobilise within hours of surgery and often achieve safe hospital discharge on day 1 or day 2 post-operatively.
          </p>
        </div>
      </section>

      <!-- 6. NHS PRACTICE & CLINICAL LEADERSHIP -->
      <section class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
          NHS Practice &amp; Departmental Clinical Leadership
        </h2>
        <div class="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            Mr Shankar holds a substantive NHS Consultant appointment at <strong>Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT)</strong>, operating and consulting primarily at <strong>Queen's Hospital in Romford</strong> and <strong>King George Hospital in Goodmayes</strong>.
          </p>
          <p>
            Alongside his high-volume trauma and arthroplasty operating commitments, Mr Shankar has contributed extensive clinical governance leadership to the NHS trust across multiple senior appointments:
          </p>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 pt-1">
            <li class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
              <span class="text-[#1B4965] font-bold">&bull;</span>
              <span><strong>Orthopaedic Clinical Lead &amp; Clinical Director:</strong> Leading clinical quality, elective recovery governance and theatre safety across Trauma and Orthopaedics.</span>
            </li>
            <li class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
              <span class="text-[#1B4965] font-bold">&bull;</span>
              <span><strong>Lead for Infection Control:</strong> Developing and enforcing strict surgical theatre protocols and wound care pathways to minimise deep prosthetic joint infections.</span>
            </li>
            <li class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
              <span class="text-[#1B4965] font-bold">&bull;</span>
              <span><strong>Lead for Femur Fracture Management:</strong> Championing multidisciplinary orthogeriatric protocols achieving rapid surgical repair and benchmark survival outcomes.</span>
            </li>
            <li class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2">
              <span class="text-[#1B4965] font-bold">&bull;</span>
              <span><strong>Elective Surgical Hub Innovator:</strong> Leading high-efficiency dual-theatre joint replacement initiatives (HULK-10) to clear regional surgical backlogs safely.</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- 7. PRIVATE PRACTICE & HOSPITAL TECHNOLOGY MAPPING -->
      <section class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
          Private Practice &amp; Technology Availability by Hospital
        </h2>
        <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
          Mr Shankar conducts private outpatient clinics and elective operating lists in Brentwood, Essex. To assist patients and referring doctors, surgical technologies are clearly mapped across hospital locations:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-2xl bg-slate-50 border-2 border-[#1B4965]/20">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-2.5 py-1 rounded">Mako Robotic Centre</span>
              <span class="text-xs text-slate-500 font-semibold">Brentwood, Essex</span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Nuffield Health Brentwood Hospital</h3>
            <p class="text-xs text-slate-600 mb-4">Shenfield Road, Brentwood, Essex CM15 8EH &bull; Tel: 01277 695 695</p>
            <div class="space-y-2 text-xs text-slate-700">
              <p><strong>Available Procedures:</strong> MAKO Robotic-Assisted Total Hip Replacement, MAKO Robotic-Assisted Total Knee Replacement, MAKO Robotic-Assisted Partial Knee Replacement, Conventional Arthroplasty, Muscle-Sparing Approaches.</p>
              <p><strong>Milestone:</strong> Mr Shankar introduced MAKO robotic-assisted surgery to private practice in Brentwood at Nuffield Health on 29 September 2026.</p>
              <p class="text-emerald-700 font-semibold">&check; Dedicated Private MAKO Robotic Joint Replacement Suite</p>
            </div>
          </div>
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-700 bg-white px-2.5 py-1 rounded border border-slate-200">Computer-Navigated Arthroplasty</span>
              <span class="text-xs text-slate-500 font-semibold">Brentwood, Essex</span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Spire Hartswood Hospital</h3>
            <p class="text-xs text-slate-600 mb-4">Eagle Way, Great Warley, Brentwood, Essex CM13 3LE &bull; Tel: 01277 266 766</p>
            <div class="space-y-2 text-xs text-slate-700">
              <p><strong>Available Procedures:</strong> Conventional Total Hip Replacement, Computer-Navigated Total Knee Replacement, Muscle-Sparing Arthroplasty, Knee Arthroscopy, Meniscal Repair, PRP Injections.</p>
              <p><strong>Important Technology Note:</strong> Spire Hartswood provides optical computer navigation, <em>not MAKO robotic surgery</em>. Patients seeking MAKO robotic surgery consult with Mr Shankar at Nuffield Brentwood or within his NHS service.</p>
              <p class="text-[#1B4965] font-semibold">&check; Advanced Optical Computer Navigation &amp; Joint Preservation</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. ACADEMIC, TEACHING & PROFESSIONAL INTERESTS -->
      <section class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
          Academic Research, Peer Review &amp; Medical Education
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 class="text-base font-bold text-slate-900 mb-2">Journal Peer Reviewer</h3>
            <p class="text-xs text-slate-700 leading-relaxed">
              Appointed reviewer for the <strong>Indian Journal of Orthopaedics</strong>, regularly reviewing original clinical, surgical and biomechanical papers on joint replacement and trauma surgery.
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 class="text-base font-bold text-slate-900 mb-2">Undergraduate Medical Educator</h3>
            <p class="text-xs text-slate-700 leading-relaxed">
              Clinical educator for medical students from <strong>Barts and The London School of Medicine &amp; Dentistry, Queen Mary University of London (QMUL)</strong>, teaching bedside diagnostics and musculoskeletal examination.
            </p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 class="text-base font-bold text-slate-900 mb-2">Surgical Skills &amp; Cadaveric Faculty</h3>
            <p class="text-xs text-slate-700 leading-relaxed">
              Instructs on post-graduate computer-navigated arthroplasty cadaveric masterclasses, surgical registrar trauma courses and primary care GP orthopaedic diagnostic seminars.
            </p>
          </div>
        </div>
      </section>

      <!-- 9. FREQUENTLY ASKED QUESTIONS -->
      <section class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          Frequently Asked Questions &mdash; About Mr Shivakumar Shankar
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 mb-6">
          Authoritative answers to common patient questions regarding credentials, surgical techniques, hospital locations and consultation pathways.
        </p>
        <div class="space-y-4">
          <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">What are Mr Shankar's medical qualifications and specialist credentials?</h3>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">Mr Shivakumar Shankar is a Consultant Orthopaedic Surgeon specialising in hip and knee surgery. He holds MBBS, DHA, MRCSEd, MSc in Trauma &amp; Orthopaedics from University College London (UCL), and FRCSEd (Tr &amp; Orth) from the Royal College of Surgeons of Edinburgh. He holds a specialist Postgraduate Diploma in Principles of Computer-Assisted and Robotic Orthopaedic Surgery and was awarded his Certificate of Completion of Training (CCT) in October 2016. He is fully registered on the GMC Specialist Register (GMC reference: 6038414).</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">How much surgical experience does Mr Shankar have in joint replacement?</h3>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">Mr Shankar has performed manual and computer-assisted hip and knee replacement surgery for approximately 9 years in consultant and senior arthroplasty practice, completing over 3,000 hip and knee replacements and more than 1,200 knee arthroscopies. Building upon this extensive conventional and computer-assisted foundation, Mr Shankar more recently adopted MAKO robotic-assisted surgery and has personally performed more than 100 MAKO robotic joint replacements—a milestone reflecting his individual surgical caseload rather than the total performed by BHRUT NHS Trust.</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">What is the difference between robotic surgery at Nuffield Brentwood and computer navigation at Spire Hartswood?</h3>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">Mr Shankar offers distinct, advanced technologies depending on the hospital facility: At Nuffield Health Brentwood Hospital, he provides MAKO robotic-assisted total hip, total knee, and partial knee replacements utilizing pre-operative 3D CT virtual planning and haptic robotic boundary protection. At Spire Hartswood Hospital in Brentwood, he provides conventional and computer-navigated hip and knee replacements using optical infra-red tracking for real-time limb alignment. Spire Hartswood does not operate a MAKO robotic system; patients specifically seeking MAKO robotic joint replacement are seen for surgery at Nuffield Health Brentwood Hospital or within his NHS practice at BHRUT.</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">What minimally invasive approaches does Mr Shankar use for hip replacement?</h3>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">Mr Shankar has completed specialist international fellowship training in muscle-sparing hip arthroplasty. He utilises the true muscle-preserving Rottinger approach (trained at CABPS Centre, Centre Hospitalier de Haguenau, France) and the direct anterior approach (trained at Rummelsberg Hospital, Germany). These approaches work through natural inter-muscular and inter-nervous planes without detaching key abductor or posterior stabilizing muscles, promoting reduced post-operative discomfort, less soft-tissue trauma, and accelerated early rehabilitation.</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">What NHS appointments and clinical leadership roles does Mr Shankar hold?</h3>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">Mr Shankar holds a substantive NHS Consultant appointment at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), operating at Queen's Hospital in Romford and King George Hospital in Goodmayes. He has served as the NHS Clinical Lead and Clinical Director for Trauma and Orthopaedics, Clinical Lead for Femur Fracture Management, Clinical Audit Lead, and Lead for Infection Control within the department. He also leads high-efficiency joint replacement throughput at the trust's Elective Surgical Hub (HULK-10 initiative).</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">Which private hospitals does Mr Shankar consult and operate at?</h3>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">Mr Shankar conducts private consultations and elective operating lists in Brentwood, Essex at two premier facilities: Nuffield Health Brentwood Hospital (Shenfield Road, Brentwood, CM15 8EH) and Spire Hartswood Hospital (Eagle Way, Great Warley, Brentwood, CM13 3LE). Both hospitals feature laminar-flow ultra-clean theatres, on-site MRI/CT diagnostics, dedicated inpatient physiotherapy, and private en-suite recovery rooms.</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">How can I book a private consultation, and is health insurance accepted?</h3>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">Private appointments can be booked directly online via Spire Healthcare or Nuffield Health booking portals, or by contacting Mr Shankar's private medical secretary on 07587 765888 or 020 3523 0621 (email: hip.knee_specialist@yahoo.com). Mr Shankar is fee-assured and recognised by all major UK private medical insurers including Bupa, AXA Health, Aviva, Vitality, WPA, and Cigna. Self-funding patients are also welcomed, with transparent consultation fees (£250 initial consultation, £200 follow-up).</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">Does Mr Shankar perform revision hip replacement surgery?</h3>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">Yes. Having completed subspecialty fellowship training in complex joint reconstruction at the Royal National Orthopaedic Hospital (RNOH), Stanmore, Mr Shankar performs revision hip replacement surgery across both private and NHS hospital settings. Selected revision hip procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar at Nuffield Health Brentwood Hospital and Spire Hartswood Hospital following individual clinical assessment (including procedures for implant loosening, wear, instability or other mechanical problems). Mr Shankar also undertakes complex revision hip replacement surgery and complex hip reconstruction within his NHS hospital practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), where complex cases have access to specialist multidisciplinary assessment, complex reconstruction resources and dedicated perioperative support.</p>
          </div>
        </div>
      </section>

      <!-- 10. VERIFIED ACCREDITED PROFILES & BOOKING PATHWAYS -->
      <section class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
          Verified Professional Profiles &amp; Booking Pathways
        </h2>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          Patients and referring general practitioners can verify Mr Shankar's medical credentials and schedule consultations across official healthcare platforms:
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <a href="https://www.gmc-uk.org/registrants/6038414" target="_blank" rel="noopener noreferrer" class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-[#1B4965] transition-colors">
            <span class="text-[11px] font-bold text-slate-900 block">GMC Register</span>
            <span class="text-[10px] text-slate-500">6038414</span>
          </a>
          <a href="https://www.spirehealthcare.com/consultant-profiles/mr-shivakumar-shankar-c6038414/" target="_blank" rel="noopener noreferrer" class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-[#1B4965] transition-colors">
            <span class="text-[11px] font-bold text-slate-900 block">Spire Profile</span>
            <span class="text-[10px] text-slate-500">Hartswood</span>
          </a>
          <a href="https://www.nuffieldhealth.com/consultants/mr-shivakumar-shankar" target="_blank" rel="noopener noreferrer" class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-[#1B4965] transition-colors">
            <span class="text-[11px] font-bold text-slate-900 block">Nuffield Health</span>
            <span class="text-[10px] text-slate-500">Brentwood</span>
          </a>
          <a href="https://finder.bupa.co.uk/Consultant/mr-shivakumar-shankar-orthopaedic-surgery-brentwood-romford" target="_blank" rel="noopener noreferrer" class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-[#1B4965] transition-colors">
            <span class="text-[11px] font-bold text-slate-900 block">Bupa Finder</span>
            <span class="text-[10px] text-slate-500">Fee-Assured</span>
          </a>
          <a href="https://www.doctify.com/en-gb/specialist/shivakumar-shankar" target="_blank" rel="noopener noreferrer" class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-[#1B4965] transition-colors">
            <span class="text-[11px] font-bold text-slate-900 block">Doctify</span>
            <span class="text-[10px] text-slate-500">Verified Reviews</span>
          </a>
          <a href="https://www.iwantgreatcare.org/doctors/mr-shivakumar-shankar" target="_blank" rel="noopener noreferrer" class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-[#1B4965] transition-colors">
            <span class="text-[11px] font-bold text-slate-900 block">IWGC</span>
            <span class="text-[10px] text-slate-500">Patient Feedback</span>
          </a>
        </div>
      </section>
`;

// Helper to generate full structured schema for clinical procedures
const generateProcedureJsonLd = ({
  path: pagePath,
  title,
  description,
  canonical,
  data,
  procedureName,
  bodyLocation,
  howPerformed,
  breadcrumbs = []
}) => {
  const breadcrumbElements = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shivakumarshankar.co.uk/" }
  ];
  breadcrumbs.forEach((b, idx) => {
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": idx + 2,
      "name": b.name,
      "item": b.href.startsWith('http') ? b.href : `https://www.shivakumarshankar.co.uk${b.href}`
    });
  });
  breadcrumbElements.push({
    "@type": "ListItem",
    "position": breadcrumbs.length + 2,
    "name": data.badge,
    "item": canonical
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.shivakumarshankar.co.uk/#website",
        "url": "https://www.shivakumarshankar.co.uk/",
        "name": "London and Essex Hip and Knee Surgeon",
        "description": "Official medical practice website of Mr Shivakumar Shankar, Consultant Orthopaedic Hip & Knee Surgeon.",
        "inLanguage": "en-GB",
        "publisher": {
          "@id": "https://www.shivakumarshankar.co.uk/#physician"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumbs`,
        "itemListElement": breadcrumbElements
      },
      getPhysicianEntity(STANDARD_HOSPITAL_LOCATIONS),
      {
        "@type": "MedicalProcedure",
        "@id": `${canonical}#procedure`,
        "name": procedureName,
        "procedureType": "SurgicalProcedure",
        "bodyLocation": bodyLocation,
        "description": data.leadParagraph,
        "howPerformed": howPerformed,
        "performer": {
          "@id": "https://www.shivakumarshankar.co.uk/#physician"
        },
        "location": STANDARD_HOSPITAL_LOCATIONS
      },
      {
        "@type": "MedicalWebPage",
        "@id": canonical,
        "url": canonical,
        "name": title,
        "description": description,
        "inLanguage": "en-GB",
        "author": {
          "@id": "https://www.shivakumarshankar.co.uk/#physician"
        },
        "about": {
          "@id": `${canonical}#procedure`
        },
        "breadcrumb": {
          "@id": `${canonical}#breadcrumbs`
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faqpage`,
        "mainEntity": data.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };
};

// Helper to render comprehensive, patient-friendly clinical procedure HTML matching ClinicalProcedurePage.tsx
const renderClinicalProcedurePage = (data, breadcrumbs = []) => {
  const {
    slug,
    badge,
    h1,
    leadParagraph,
    overview,
    whoMayBenefit,
    symptomsTreated,
    procedureExplanation,
    technologyComparison,
    benefitsAndLimitations,
    risksAndComplications,
    recoveryTimeline,
    rehabilitationMilestones,
    faqs,
    relatedLinks
  } = data;

  return `
    ${renderHeader(slug)}
    <article class="pt-8 sm:pt-12 pb-20 font-sans text-slate-800 bg-[#F8FAFC]">
      <!-- 1. HERO BREADCRUMB & HEADER -->
      <section class="bg-white border-b border-slate-200 py-10 sm:py-14">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" class="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <a href="/" class="hover:text-[#1B4965]">Home</a>
            ${breadcrumbs.map(b => `<span>/</span><a href="${b.href}" class="hover:text-[#1B4965]">${b.name}</a>`).join('')}
            <span>/</span>
            <span class="text-[#1B4965] font-bold">${badge}</span>
          </nav>

          <span class="inline-block px-3.5 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            ${badge}
          </span>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            ${h1}
          </h1>

          <p class="text-lg sm:text-xl text-slate-600 mt-4 leading-relaxed max-w-4xl">
            ${leadParagraph}
          </p>

          <div class="flex flex-wrap items-center gap-3 pt-6">
            <a
              href="/book-consultation"
              class="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              Book Surgical Consultation
            </a>
            <a
              href="#procedure-details"
              class="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              Procedure Details
            </a>
            <a
              href="#recovery-rehab"
              class="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              Recovery &amp; Risks
            </a>
          </div>
        </div>
      </section>

      <!-- 2. CLINICAL OVERVIEW & CANDIDATE CRITERIA -->
      <section class="py-12 sm:py-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div class="lg:col-span-8 space-y-8">
              <!-- Clinical Overview -->
              <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 class="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                  Clinical Overview
                </h2>
                ${overview.map(para => `
                  <p class="text-slate-700 leading-relaxed text-base">
                    ${para}
                  </p>
                `).join('')}
              </div>

              <!-- Who May Benefit & Symptoms Treated -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 class="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 text-[#1B4965]">
                    Who May Benefit
                  </h3>
                  <ul class="space-y-2 text-sm text-slate-700">
                    ${whoMayBenefit.map(item => `
                      <li class="flex items-start gap-2">
                        <span class="text-[#1B4965] font-bold mt-0.5">•</span>
                        <span>${item}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 class="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 text-[#1B4965]">
                    Symptoms Commonly Treated
                  </h3>
                  <ul class="space-y-2 text-sm text-slate-700">
                    ${symptomsTreated.map(item => `
                      <li class="flex items-start gap-2">
                        <span class="text-[#E8A24C] font-bold mt-0.5">•</span>
                        <span>${item}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>

              <!-- 3. EXPLANATION OF THE PROCEDURE -->
              <div id="procedure-details" class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                <h2 class="text-2xl font-black text-slate-900">
                  ${procedureExplanation.title}
                </h2>
                <p class="text-slate-700 leading-relaxed">
                  ${procedureExplanation.description}
                </p>
                <div class="space-y-3 pt-2">
                  <h4 class="text-xs uppercase font-extrabold tracking-wider text-slate-500">
                    Key Surgical Stages:
                  </h4>
                  <div class="grid grid-cols-1 gap-3">
                    ${procedureExplanation.steps.map((step, idx) => `
                      <div class="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                        <span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#1B4965] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                          ${idx + 1}
                        </span>
                        <p class="text-sm text-slate-700 leading-relaxed font-medium">
                          ${step}
                        </p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>

              <!-- Technology Comparison (if present) -->
              ${technologyComparison ? `
                <div class="bg-[#F0F5F9] p-6 sm:p-8 rounded-2xl border border-[#D0E2EC] shadow-xs space-y-4">
                  <h2 class="text-2xl font-black text-slate-900">
                    ${technologyComparison.title}
                  </h2>
                  <p class="text-sm text-slate-700 leading-relaxed">
                    ${technologyComparison.description}
                  </p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    ${technologyComparison.points.map(pt => `
                      <div class="bg-white p-4 rounded-xl border border-slate-200">
                        <strong class="text-xs uppercase font-bold text-[#1B4965] block mb-1">
                          ${pt.label}
                        </strong>
                        <p class="text-xs text-slate-600 leading-relaxed">
                          ${pt.detail}
                        </p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- 4. BENEFITS AND LIMITATIONS -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-200 shadow-xs">
                  <h3 class="text-lg font-black text-emerald-900 mb-3 flex items-center gap-2">
                    Potential Benefits
                  </h3>
                  <ul class="space-y-2 text-sm text-slate-700">
                    ${benefitsAndLimitations.benefits.map(b => `
                      <li class="flex items-start gap-2">
                        <span class="text-emerald-600 font-bold">✓</span>
                        <span>${b}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div class="bg-amber-50/70 p-6 rounded-2xl border border-amber-200 shadow-xs">
                  <h3 class="text-lg font-black text-amber-900 mb-3 flex items-center gap-2">
                    Limitations &amp; Considerations
                  </h3>
                  <ul class="space-y-2 text-sm text-slate-700">
                    ${benefitsAndLimitations.limitations.map(lim => `
                      <li class="flex items-start gap-2">
                        <span class="text-amber-600 font-bold">•</span>
                        <span>${lim}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>

              <!-- 5. RISKS AND COMPLICATIONS -->
              <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div class="flex items-center gap-2 text-amber-700 font-extrabold uppercase text-xs tracking-wider">
                  Informed Surgical Consent
                </div>
                <h2 class="text-2xl font-black text-slate-900">
                  Potential Risks &amp; Complications
                </h2>
                <p class="text-sm text-slate-600 leading-relaxed">
                  All surgical interventions involve potential risks. Mr Shankar conducts thorough pre-operative assessments and discusses every aspect openly with patients to support balanced, informed decision-making:
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  ${risksAndComplications.map(risk => `
                    <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                      <span class="text-rose-500 font-bold text-xs mt-0.5">!</span>
                      <span class="text-xs text-slate-700 leading-relaxed">${risk}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- 6. RECOVERY & REHABILITATION -->
              <div id="recovery-rehab" class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <h2 class="text-2xl font-black text-slate-900 flex items-center gap-2">
                  Recovery Timeline &amp; Rehabilitation
                </h2>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Individual recovery rates vary depending on general fitness, age, and joint condition. Early mobilisation under hospital physiotherapy supervision is fundamental to achieving an optimal outcome:
                </p>
                <div class="space-y-4">
                  ${recoveryTimeline.map(item => `
                    <div class="flex flex-col sm:flex-row sm:items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <span class="sm:w-36 flex-shrink-0 text-xs font-extrabold text-[#1B4965] uppercase">
                        ${item.phase}
                      </span>
                      <p class="text-sm text-slate-700 leading-relaxed">
                        ${item.description}
                      </p>
                    </div>
                  `).join('')}
                </div>

                <div class="pt-4 border-t border-slate-100">
                  <h4 class="text-xs uppercase font-extrabold tracking-wider text-slate-500 mb-3">
                    Rehabilitation Milestones:
                  </h4>
                  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    ${rehabilitationMilestones.map(m => `
                      <li class="flex items-start gap-2">
                        <span class="text-[#1B4965] font-bold">✓</span>
                        <span>${m}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>

              <!-- 7. HOSPITAL LOCATIONS -->
              <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 class="text-2xl font-black text-slate-900">
                  Hospital Locations &amp; Private Consultation Clinics
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 class="text-sm font-bold text-slate-900 mb-1">Nuffield Health Brentwood</h3>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-2 py-0.5 rounded inline-block mb-2">Private Centre</span>
                    <p class="text-xs text-slate-600 leading-relaxed mb-2">Shenfield Road, Brentwood, Essex CM15 8EH. Housing the Stryker MAKO robotic system for private insured and self-funding joint replacement patients.</p>
                    <a href="/nuffield-brentwood-hospital" class="text-xs font-bold text-[#1B4965] hover:underline">Hospital details &rarr;</a>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 class="text-sm font-bold text-slate-900 mb-1">Spire Hartswood Hospital</h3>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-200 px-2 py-0.5 rounded inline-block mb-2">Conventional &amp; Navigated</span>
                    <p class="text-xs text-slate-600 leading-relaxed mb-2">Eagle Way, Great Warley, Brentwood, Essex CM13 3LE. Offering conventional manual and computer-navigated arthroplasty (not MAKO robotic surgery).</p>
                    <a href="/spire-hartswood-hospital" class="text-xs font-bold text-[#1B4965] hover:underline">Hospital details &rarr;</a>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 class="text-sm font-bold text-slate-900 mb-1">BHRUT NHS Trust</h3>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-2 py-0.5 rounded inline-block mb-2">NHS Practice</span>
                    <p class="text-xs text-slate-600 leading-relaxed mb-2">Queen's Hospital Romford &amp; King George Hospital Goodmayes, where Mr Shankar serves as substantive NHS Consultant and Clinical Lead.</p>
                    <a href="/queens-hospital-romford" class="text-xs font-bold text-[#1B4965] hover:underline">Hospital details &rarr;</a>
                  </div>
                </div>
              </div>

              <!-- 8. FREQUENTLY ASKED QUESTIONS -->
              <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                <h2 class="text-2xl font-black text-slate-900 flex items-center gap-2">
                  Frequently Asked Questions
                </h2>
                <div class="space-y-4">
                  ${faqs.map((faq, idx) => `
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                      <h3 class="text-base font-bold text-slate-900">
                        ${idx + 1}. ${faq.question}
                      </h3>
                      <p class="text-sm text-slate-700 leading-relaxed">
                        ${faq.answer}
                      </p>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- 9. MEDICAL DISCLAIMER -->
              <div class="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong>Medical Information Disclaimer:</strong> The information provided on this page is for general educational purposes and does not substitute for a formal clinical consultation. Recovery timelines, implant choices, and outcomes vary for each individual patient. Please consult Mr Shivakumar Shankar or your treating orthopaedic team for personalised medical advice.
              </div>
            </div>

            <!-- SIDEBAR -->
            <div class="lg:col-span-4 space-y-6">
              <!-- Consultant Card -->
              <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-full bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center font-bold text-lg">
                    SS
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900 text-base">Mr Shivakumar Shankar</h3>
                    <p class="text-xs text-slate-500">Consultant Orthopaedic Hip &amp; Knee Surgeon</p>
                  </div>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Substantive NHS Consultant Orthopaedic Surgeon at BHRUT (Queen's &amp; King George Hospitals) with a Postgraduate Diploma in Computer and Robot-Assisted Arthroplasty. GMC Specialist Register: 6038414.
                </p>
                <div class="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <p><strong>NHS Practice:</strong> Queen's Hospital Romford &amp; King George Hospital Goodmayes (BHRUT)</p>
                  <p><strong>Private Practice:</strong> Nuffield Health Brentwood Hospital &amp; Spire Hartswood Hospital</p>
                </div>
                <a
                  href="/book-consultation"
                  class="w-full bg-[#1B4965] hover:bg-[#13364B] text-white py-3 rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  Book Private Consultation
                </a>
              </div>

              <!-- Secretary Contact Box -->
              <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs text-slate-700">
                <span class="text-[10px] font-extrabold uppercase text-[#1B4965] tracking-wider block">
                  Private Practice Enquiries
                </span>
                <p class="font-bold text-slate-900 text-sm">Remya Rexlin</p>
                <p class="text-slate-500">Medical Secretary to Mr Shankar</p>
                <div class="pt-2 space-y-1.5">
                  <p><strong>Mobile:</strong> <a href="tel:07587765888" class="text-[#1B4965] hover:underline font-bold">07587 765888</a></p>
                  <p><strong>Office:</strong> <a href="tel:02035230621" class="text-[#1B4965] hover:underline">020 3523 0621</a></p>
                  <p><strong>Email:</strong> <a href="mailto:hip.knee_specialist@yahoo.com" class="text-[#1B4965] hover:underline break-all">hip.knee_specialist@yahoo.com</a></p>
                </div>
              </div>

              <!-- Related Internal Links -->
              <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Related Clinical Pages
                </h4>
                <div class="space-y-3">
                  ${relatedLinks.map(link => `
                    <a
                      href="${link.href}"
                      class="block p-3 rounded-xl bg-slate-50 hover:bg-[#EAF1F6] border border-slate-100 hover:border-[#1B4965]/30 transition-colors group"
                    >
                      <strong class="text-xs font-bold text-slate-900 group-hover:text-[#1B4965] flex items-center justify-between">
                        <span>${link.title}</span>
                        <span class="text-slate-400 group-hover:text-[#1B4965]">&rarr;</span>
                      </strong>
                      <p class="text-[11px] text-slate-500 mt-1 leading-normal">
                        ${link.description}
                      </p>
                    </a>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
    ${renderFooter()}
  `;
};

// Extract all 19 media items from MediaGalleryHub.tsx to ensure 100% data fidelity without manual duplication
const hubFilePath = path.resolve(__dirname, '../components/MediaGalleryHub.tsx');
let mediaArchiveHtml = '';
try {
  const hubContent = fs.readFileSync(hubFilePath, 'utf8');
  const start = hubContent.indexOf('export const DEFAULT_MEDIA: MediaItem[] = [');
  const end = hubContent.indexOf('];\n\n// Helper to extract');
  if (start !== -1 && end !== -1) {
    const raw = hubContent.substring(start, end);
    const items = raw.split(/\n  \{\n/).slice(1).map(b => {
      const getF = (f) => {
        const m = b.match(new RegExp(f + ":\\s*['\"`]([^'\"`]+)['\"`]"));
        return m ? m[1] : '';
      };
      const id = getF('id');
      const title = getF('title');
      const category = getF('category');
      const date = getF('date');
      const src = (b.match(/(?:src|thumbnail):\s*['"]([^'"]+)['"]/) || [])[1] || './profile.jpg';
      const externalUrl = getF('externalUrl');
      const descM = b.match(/description:\s*(?:`([^`]+)`|'([^']+)'|"([^"]+)")/);
      const description = descM ? (descM[1] || descM[2] || descM[3]).trim().replace(/\n+/g, ' ') : '';
      return { id, title, category, date, src, externalUrl, description };
    });

    mediaArchiveHtml = items.map(item => `
        <article class="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
          <div>
            <div class="relative aspect-16/10 w-full bg-slate-900 overflow-hidden rounded-lg mb-3">
              <img src="${item.src}" alt="${item.title.replace(/"/g, '&quot;')}" class="w-full h-full object-cover" width="600" height="375" loading="lazy" />
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 mb-2">
              <span class="font-bold text-[#1B4965] uppercase tracking-wider text-[10px] bg-[#EAF1F6] px-2 py-0.5 rounded">${item.category}</span>
              ${item.date ? `<span class="font-semibold text-slate-700">${item.date}</span>` : ''}
            </div>
            <h2 class="font-bold text-slate-900 text-sm mb-2 line-clamp-2">${item.title}</h2>
            <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">${item.description.replace(/"/g, '&quot;')}</p>
          </div>
          ${item.externalUrl ? `<a href="${item.externalUrl}" target="_blank" rel="noopener noreferrer" class="mt-4 text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">View Publication &rarr;</a>` : ''}
        </article>
    `).join('');
  }
} catch (e) {
  console.error('Warning: could not parse media items for static rendering', e);
}

// ============================================================================
// PHASE 2B STAGE 5: BRENTWOOD PRIVATE HOSPITALS STRUCTURED DATA & RENDERERS
// ============================================================================

const NUFFIELD_BRENTWOOD_FAQS = [
  {
    question: "What joint replacement procedures does Mr Shankar perform at Nuffield Health Brentwood Hospital?",
    answer: "At Nuffield Health Brentwood Hospital, Mr Shivakumar Shankar performs Stryker MAKO robotic-arm assisted total hip replacement, MAKO robotic-assisted total knee replacement, and MAKO robotic-assisted partial (unicompartmental) knee replacement. He also provides selected revision hip replacement procedures suitable for private hospital facilities (for implant loosening, wear, instability or mechanical issues following clinical assessment), conventional hip and knee arthroplasty, muscle-sparing hip surgery (direct anterior and Rottinger approaches), diagnostic and therapeutic image-guided joint injections, and keyhole knee arthroscopy. Nuffield Brentwood serves as Mr Shankar's primary private surgical base in Essex for robotic-arm assisted joint reconstruction."
  },
  {
    question: "Why is Nuffield Health Brentwood Hospital the designated centre for MAKO robotic surgery?",
    answer: "Nuffield Health Brentwood Hospital houses the specialised Stryker MAKO robotic arm-assisted surgical system and the requisite on-site 3D CT scanning and virtual templating software required for robotic arthroplasty. Mr Shankar introduced MAKO robotic joint replacement to private practice at Nuffield Brentwood to provide patients with patient-specific pre-operative 3D modelling and intra-operative stereotactic haptic guidance. MAKO robotic surgery is not offered at Spire Hartswood Hospital; private patients seeking robotic joint replacement consult with Mr Shankar at Nuffield Brentwood."
  },
  {
    question: "Do I need a GP referral to see Mr Shankar at Nuffield Health Brentwood Hospital?",
    answer: "If you are self-funding your treatment, a GP referral is welcomed but not mandatory—you may book an outpatient consultation directly with Mr Shankar's medical secretary or via the Nuffield Health online booking portal. If you are using private medical insurance (such as Bupa, AXA Health, Aviva, Vitality, or WPA), most insurers require a formal GP referral letter before authorizing consultation and imaging fees. Mr Shankar maintains close communication with your GP, sending clinical letters regarding your diagnosis and management plan."
  },
  {
    question: "How does the pre-operative 3D CT robotic planning pathway work at Nuffield Brentwood?",
    answer: "Following your initial consultation, if robotic joint replacement is indicated and agreed, you will undergo a specialized low-dose 3D CT scan at Nuffield Health Brentwood Hospital. The CT protocol captures precise cross-sectional anatomy of your hip, knee, and ankle joints. The imaging data is loaded into the MAKO proprietary planning software, allowing Mr Shankar to generate a patient-specific three-dimensional model of your joint, select exact implant sizing, and determine ideal component orientation and resection depths prior to entering the operating theatre."
  },
  {
    question: "What travel, public transport, and parking facilities are available at Nuffield Brentwood?",
    answer: "Nuffield Health Brentwood Hospital is situated on Shenfield Road (A1023), Brentwood, Essex CM15 8EH, between Brentwood town centre and Shenfield. The hospital provides generous, complimentary on-site parking for patients and visitors, including designated accessible bays directly adjacent to the main reception entrance. For public transport, Shenfield Rail Station (Elizabeth Line and Greater Anglia mainline) is approximately one mile away (a 5-minute taxi journey), offering frequent fast connections from London Liverpool Street, Stratford, Romford, and Chelmsford. Brentwood Station is also approximately 1.5 miles away."
  },
  {
    question: "How does self-funding work for robotic joint replacement at Nuffield Brentwood?",
    answer: "Nuffield Health Brentwood Hospital provides all-inclusive, fixed-price self-pay surgery packages for robotic hip and knee replacement. The package encompasses the consultant surgeon fee, consultant anaesthetist fee, hospital stay, theatre charges, implants, diagnostic tests during admission, routine take-home medications, and post-operative inpatient and outpatient physiotherapy. Outpatient consultation fees are transparent: £250 for an initial appointment and £200 for a follow-up review. Flexible finance options are also available through Nuffield Health to spread treatment costs over time, subject to approval."
  }
];

const SPIRE_HARTSWOOD_FAQS = [
  {
    question: "What procedures does Mr Shankar perform at Spire Hartswood Hospital?",
    answer: "At Spire Hartswood Hospital, Mr Shivakumar Shankar provides outpatient orthopaedic consultations, selected revision hip replacement procedures suitable for private hospital facilities (including procedures for implant loosening, wear, instability or mechanical issues following individual clinical assessment), computer-navigated total knee replacement using optical infrared tracking, conventional total hip replacement, conventional total knee replacement, and unicompartmental partial knee replacement. He also performs day-case knee arthroscopy for meniscal tears and mechanical joint symptoms, as well as fluoroscopic and ultrasound-guided hip and knee joint injections for targeted pain management and diagnostic assessment."
  },
  {
    question: "Is MAKO robotic surgery available at Spire Hartswood Hospital?",
    answer: "No. MAKO robotic surgery is NOT offered at Spire Hartswood Hospital. Spire Hartswood is equipped with optical computer navigation technology for total knee replacement, which utilizes intra-operative infrared tracking without pre-operative CT scans. Patients specifically seeking MAKO robotic-assisted total hip or knee replacement can be treated by Mr Shankar at Nuffield Health Brentwood Hospital, located less than three miles away on Shenfield Road in Brentwood, or within his NHS service at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT)."
  },
  {
    question: "Do I need a GP referral to book a consultation at Spire Hartswood Hospital?",
    answer: "Patients self-funding their consultation and treatment do not strictly need a GP referral and can schedule an appointment directly through the Spire Healthcare online booking portal or by contacting Mr Shankar's medical secretary. However, if you are utilizing private medical insurance (including Bupa, AXA Health, Aviva, Vitality, and WPA), your insurance provider will typically require a GP referral letter prior to issuing an authorization code for your appointment."
  },
  {
    question: "How does optical computer-navigated knee replacement work at Spire Hartswood?",
    answer: "Optical computer navigation utilizes infrared tracking cameras and lightweight reflective marker arrays temporarily attached to the distal femur and proximal tibia. In theatre, Mr Shankar digitises key anatomical landmarks to register your true mechanical Hip-Knee-Ankle axis on a high-resolution display. The system provides real-time millimetric measurements of cutting blocks and dynamic ligament tension through full flexion and extension. A major technical advantage is that optical navigation avoids drilling intramedullary alignment rods into the femoral marrow canal, eliminating canal pressurisation."
  },
  {
    question: "What parking and travel facilities are available at Spire Hartswood Hospital?",
    answer: "Spire Hartswood Hospital is located on Eagle Way, Great Warley, Brentwood, Essex CM13 3LE. It offers extensive, free on-site parking for patients and visitors directly outside the main entrance. The hospital is exceptionally well connected by road, situated just off the M25 (Junction 28 and Junction 29) and the A12, making it readily accessible from Romford, Hornchurch, Upminster, Chelmsford, and Greater London. Brentwood Rail Station (Elizabeth Line) is approximately five minutes away by car or taxi."
  },
  {
    question: "How are private surgical treatments funded at Spire Hartswood Hospital?",
    answer: "Spire Hartswood Hospital welcomes both insured and self-funding patients. Mr Shankar is fee-assured and recognised by all major UK private medical insurers. For patients paying for their own surgery, Spire provides transparent 'fixed-price packages' that bundle the surgeon's fee, anaesthetist fee, surgical theatre costs, prosthetic implants, private en-suite accommodation, routine post-operative medications, and dedicated physiotherapy. Outpatient consultation fees are fixed at £250 for an initial assessment and £200 for a follow-up review."
  }
];

const NUFFIELD_BRENTWOOD_HOSPITAL_DATA = {
  name: "Nuffield Health Brentwood Hospital",
  telephone: "01277 695 695",
  url: "https://www.nuffieldhealth.com/consultants/mr-shivakumar-shankar#book",
  address: {
    streetAddress: "Shenfield Road",
    addressLocality: "Brentwood",
    addressRegion: "Essex",
    postalCode: "CM15 8EH"
  },
  geo: {
    latitude: 51.6268,
    longitude: 0.3188
  },
  availableServices: [
    "MAKO Robotic-Assisted Total Hip Replacement",
    "MAKO Robotic-Assisted Total Knee Replacement",
    "MAKO Robotic-Assisted Partial Knee Replacement",
    "Selected Revision Hip Replacement Surgery",
    "Conventional Total Hip Replacement",
    "Conventional Total Knee Replacement",
    "Muscle-Sparing Hip Surgery",
    "Diagnostic 3D CT Planning for Joint Arthroplasty",
    "Outpatient Orthopaedic Consultation",
    "Inpatient Orthopaedic Rehabilitation & Physiotherapy"
  ]
};

const SPIRE_HARTSWOOD_HOSPITAL_DATA = {
  name: "Spire Hartswood Hospital",
  telephone: "01277 266 766",
  url: "https://appointments.spirehealthcare.com/?c=C6038414",
  address: {
    streetAddress: "Eagle Way, Great Warley",
    addressLocality: "Brentwood",
    addressRegion: "Essex",
    postalCode: "CM13 3LE"
  },
  geo: {
    latitude: 51.5976,
    longitude: 0.2882
  },
  availableServices: [
    "Optical Computer-Navigated Total Knee Replacement",
    "Selected Revision Hip Replacement Surgery",
    "Conventional Total Hip Replacement",
    "Conventional Total Knee Replacement",
    "Unicompartmental Partial Knee Replacement",
    "Muscle-Sparing Total Hip Arthroplasty",
    "Knee Arthroscopy & Meniscal Preservation",
    "Image-Guided Hip and Knee Joint Injections",
    "Outpatient Orthopaedic Consultation",
    "Inpatient Orthopaedic Rehabilitation & Physiotherapy"
  ]
};

const QUEENS_HOSPITAL_DATA = {
  name: "Queen's Hospital, Romford (BHRUT NHS Trust)",
  telephone: "01708 435000",
  url: "https://www.bhrhospitals.nhs.uk/queens-hospital",
  address: {
    streetAddress: "Rom Valley Way",
    addressLocality: "Romford",
    addressRegion: "Greater London / Essex",
    postalCode: "RM7 0AG"
  },
  geo: {
    latitude: 51.5694,
    longitude: 0.1837
  },
  availableServices: [
    "Substantive NHS Consultant Orthopaedic Care",
    "Acute Orthopaedic Trauma & Fracture Reconstruction",
    "Complex Revision Hip Surgery (NHS Practice at BHRUT)",
    "Hip & Knee Joint Replacement Services",
    "Fragility Neck of Femur Fracture Care",
    "Peri-Prosthetic Fracture Reconstruction",
    "Specialist Outpatient Fracture & Arthroplasty Clinics",
    "Multidisciplinary Inpatient Rehabilitation"
  ]
};

const QUEENS_HOSPITAL_FAQS = [
  {
    question: "What is Mr Shivakumar Shankar's role and clinical leadership at Queen's Hospital and BHRUT?",
    answer: "Mr Shivakumar Shankar has served as a substantive Consultant Orthopaedic Surgeon at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT) since 2017. He has held major clinical leadership appointments within the Trust, including Clinical Director for Trauma and Orthopaedics, NHS Clinical Lead for Trauma and Orthopaedics, Femur Fracture Lead, and Infection Control Lead. In these leadership roles, Mr Shankar has overseen clinical governance, patient safety protocols, surgical audit, and the continuous enhancement of trauma and elective orthopaedic care pathways across Queen's and King George Hospitals."
  },
  {
    question: "What orthopaedic services are provided at Queen's Hospital Romford?",
    answer: "Queen's Hospital on Rom Valley Way is BHRUT's acute major hospital and regional trauma centre. Orthopaedic services at Queen's include acute trauma admissions, complex multi-trauma management, fragility fracture care (including neck of femur fracture pathways), peri-prosthetic fracture reconstruction, and comprehensive orthopaedic outpatient clinics. Elective hip and knee joint replacement surgery is coordinated across BHRUT, with routine elective procedures primarily undertaken at King George Hospital's protected elective surgical hub, while acute, emergency, and inpatient trauma care is delivered at Queen's."
  },
  {
    question: "How is complex revision hip surgery managed within BHRUT NHS Trust?",
    answer: "Mr Shankar personally undertakes complex revision hip replacement surgery and hip reconstruction within his substantive NHS hospital practice at BHRUT. In the NHS setting at BHRUT, complex revision procedures—including operations for severe acetabular and femoral bone loss, mechanical implant failure, periprosthetic fractures, and chronic instability—are supported by specialist multidisciplinary assessment, complex reconstruction implant systems (such as trabecular metal augments and modular stems), dedicated microbiology services, and access to intensive care and high-dependency perioperative units. Selected revision hip procedures suitable for private hospital facilities are undertaken in his private practice at Nuffield Health Brentwood and Spire Hartswood Hospitals."
  },
  {
    question: "How can NHS patients obtain a referral to see Mr Shankar at Queen's Hospital Romford?",
    answer: "NHS patients seeking an outpatient appointment with Mr Shivakumar Shankar at Queen's Hospital must be referred by their NHS General Practitioner (GP) via the NHS e-Referral Service (e-RS, formerly Choose and Book). GPs can direct referrals to the Trauma & Orthopaedics department at Barking, Havering and Redbridge University Hospitals NHS Trust, naming Mr Shivakumar Shankar as the named consultant specialist. Once received, referrals are clinically triaged based on urgency, and the hospital appointment booking team contacts the patient with available outpatient clinic dates."
  },
  {
    question: "What public transport links, parking, and accessibility facilities are available at Queen's Hospital?",
    answer: "Queen's Hospital is situated on Rom Valley Way, Romford, Greater London / Essex RM7 0AG. It is exceptionally well served by public transport: Romford Rail Station (Elizabeth Line, Greater Anglia mainline, and London Overground) is approximately 0.8 miles away, with frequent direct bus connections (routes 5, 128, 175, 193, 365, 496, 498, and 499) stopping directly outside the hospital main entrance. For patients arriving by car, a dedicated multi-storey pay-and-display visitor car park is available on-site with designated accessible Blue Badge parking spaces and step-free access throughout."
  },
  {
    question: "What are the differences between NHS treatment at Queen's Hospital and private care in Brentwood?",
    answer: "NHS treatment at Queen's Hospital is fully funded by the NHS without direct patient charge, but is subject to national clinical referral pathways, clinical prioritization, and standard NHS waiting lists. In contrast, Mr Shankar's private practice at Nuffield Health Brentwood Hospital and Spire Hartswood Hospital in Brentwood, Essex, offers expedited consultation scheduling, consultant-delivered continuity where Mr Shankar personally conducts every consultation and procedure, private en-suite bedrooms, and self-pay or health insurance funding (Bupa, AXA Health, Aviva, Vitality, WPA)."
  }
];

const KING_GEORGE_HOSPITAL_DATA = {
  name: "King George Hospital, Goodmayes (BHRUT NHS Trust)",
  telephone: "020 8970 8000",
  url: "https://www.bhrhospitals.nhs.uk/king-george-hospital",
  address: {
    streetAddress: "Barley Lane",
    addressLocality: "Goodmayes, Ilford",
    addressRegion: "Essex / Greater London",
    postalCode: "IG3 8YB"
  },
  geo: {
    latitude: 51.5802,
    longitude: 0.1084
  },
  availableServices: [
    "Dedicated BHRUT Elective Surgical Centre",
    "Protected Clean-Air Elective Total Hip Replacement",
    "Protected Clean-Air Elective Total Knee Replacement",
    "Partial (Unicompartmental) Knee Replacement",
    "Complex Revision Hip Surgery (BHRUT Elective Pathways)",
    "Knee Arthroscopy & Meniscal Surgery",
    "Pre-Operative Joint School Education",
    "Inpatient Enhanced Recovery Physiotherapy"
  ]
};

const KING_GEORGE_HOSPITAL_FAQS = [
  {
    question: "What is the role of King George Hospital as BHRUT's dedicated Elective Surgical Centre?",
    answer: "King George Hospital in Goodmayes, Ilford, operates as the dedicated Elective Surgical Hub for Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). It features protected, ring-fenced clean-air laminar airflow orthopaedic operating theatres and dedicated elective surgical wards that are separate from acute emergency trauma admissions. This specialized elective model protects planned hip and knee joint replacement operations from winter bed pressures and acute emergency cancellations, ensuring reliable, high-volume joint reconstruction for patients across North East London and Essex."
  },
  {
    question: "What surgical procedures does Mr Shankar perform at King George Hospital?",
    answer: "Within his NHS practice at King George Hospital, Mr Shivakumar Shankar performs high-volume primary total hip replacement, total knee replacement, partial (unicompartmental) knee replacement, knee arthroscopy, and revision joint surgery across BHRUT elective pathways. His NHS elective practice benefits from established enhanced recovery arthroplasty protocols, modern multimodal analgesia, and dedicated inpatient physiotherapists who assist patients to mobilise on the day of surgery."
  },
  {
    question: "What were the 'Bones R Us' and HULK-10 elective recovery initiatives led by Mr Shankar?",
    answer: "Mr Shankar pioneered and led celebrated high-intensity elective orthopaedic surgical initiatives at BHRUT—including the 'Bones R Us' super-weekends and HULK-10 elective sprints—designed to drastically reduce orthopaedic surgery waiting lists following the COVID-19 pandemic. By coordinating multidisciplinary theatre teams, dedicated anaesthetists, and recovery staff over intensive weekend lists, Mr Shankar and his surgical colleagues safely performed high volumes of joint replacement operations, returning dozens of patients to pain-free mobility and receiving regional recognition across NHS London."
  },
  {
    question: "How does the clean-air elective surgical pathway at King George protect joint replacement patients?",
    answer: "All joint replacement operations at King George Hospital are carried out in modern laminar airflow ultra-clean ventilation theatres, which create a continuous curtain of sterile, HEPA-filtered positive-pressure air over the sterile field. In addition, as former Infection Control Lead for the department, Mr Shankar enforces rigorous MRSA screening, strict pre-operative skin decolonisation, prophylactic intravenous antibiotics, and specialized barrier draping, maintaining exceptionally low prosthetic joint infection rates across BHRUT elective arthroplasty."
  },
  {
    question: "How can NHS patients be referred to King George Hospital for hip or knee surgery?",
    answer: "NHS patients requiring hip or knee replacement can be referred by their GP through the NHS e-Referral Service (e-RS) to Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). Patients and their GPs can request referral to Mr Shivakumar Shankar. Following initial outpatient consultation and diagnostic assessment, elective surgical procedures are scheduled at King George Hospital's Elective Surgical Hub, supported by pre-operative Joint School education and comprehensive multidisciplinary rehabilitation."
  },
  {
    question: "How do patients travel to King George Hospital Goodmayes, and what parking is available?",
    answer: "King George Hospital is located on Barley Lane, Goodmayes, Ilford, Essex / Greater London IG3 8YB. It is conveniently situated between Goodmayes and Newbury Park. By rail, Goodmayes Rail Station (Elizabeth Line) is approximately 1 mile away, with frequent direct TfL bus connections (routes 364, 387, 396, and 173) connecting the station directly to the hospital grounds. Newbury Park Underground Station (Central line) is also within easy bus reach. For motorists, the hospital offers on-site pay-and-display parking with dedicated Blue Badge accessible spaces adjacent to the main elective entrance."
  }
];

const generateHospitalPageJsonLd = ({
  path: pagePath,
  canonical,
  title,
  description,
  hospital,
  faqs = []
}) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.shivakumarshankar.co.uk/#website",
      "url": "https://www.shivakumarshankar.co.uk/",
      "name": "London and Essex Hip and Knee Surgeon",
      "description": "Official medical practice website of Mr Shivakumar Shankar, Consultant Orthopaedic Hip & Knee Surgeon.",
      "inLanguage": "en-GB",
      "publisher": {
        "@id": "https://www.shivakumarshankar.co.uk/#physician"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumbs`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.shivakumarshankar.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Hospitals & Locations",
          "item": "https://www.shivakumarshankar.co.uk/hospitals-locations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": hospital.name,
          "item": canonical
        }
      ]
    },
    {
      "@type": "Hospital",
      "@id": `${canonical}#hospital`,
      "name": hospital.name,
      "url": hospital.url,
      "telephone": hospital.telephone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": hospital.address.streetAddress,
        "addressLocality": hospital.address.addressLocality,
        "addressRegion": hospital.address.addressRegion,
        "postalCode": hospital.address.postalCode,
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": hospital.geo.latitude,
        "longitude": hospital.geo.longitude
      },
      "medicalSpecialty": [
        "Orthopaedics",
        "AdultReconstructiveOrthopaedics",
        "JointReplacementSurgery"
      ],
      "availableService": hospital.availableServices.map(service => ({
        "@type": "MedicalProcedure",
        "name": service
      }))
    },
    getPhysicianEntity([
      {
        "@type": "Hospital",
        "@id": `${canonical}#hospital`,
        "name": hospital.name,
        "address": hospital.address,
        "telephone": hospital.telephone,
        "url": hospital.url
      }
    ]),
    {
      "@type": "MedicalWebPage",
      "@id": `${canonical}#webpage`,
      "url": canonical,
      "name": title,
      "description": description,
      "inLanguage": "en-GB",
      "isPartOf": {
        "@id": "https://www.shivakumarshankar.co.uk/#website"
      },
      "breadcrumb": {
        "@id": `${canonical}#breadcrumbs`
      },
      "primaryImageOfPage": {
        "@id": "https://www.shivakumarshankar.co.uk/profile.jpg#primaryimage"
      },
      "about": [
        { "@id": "https://www.shivakumarshankar.co.uk/#physician" },
        { "@id": `${canonical}#hospital` }
      ],
      "mainEntity": {
        "@id": "https://www.shivakumarshankar.co.uk/#physician"
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${canonical}#faqpage`,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
});

const renderHospitalPageShell = (path, badge, h1, lead, contentHtml, hospitalName) => `
  ${renderHeader(path)}
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans text-slate-800">
    <nav aria-label="Breadcrumb" class="text-xs text-slate-500 mb-6 flex items-center gap-1.5 flex-wrap">
      <a href="/" class="hover:underline hover:text-[#1B4965]">Home</a>
      <span>&gt;</span>
      <a href="/hospitals-locations" class="hover:underline hover:text-[#1B4965]">Hospitals &amp; Locations</a>
      <span>&gt;</span>
      <span class="font-bold text-slate-800">${hospitalName}</span>
    </nav>
    <section class="mb-10">
      <span class="inline-block px-3.5 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3.5 border border-slate-200">
        ${badge}
      </span>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
        ${h1}
      </h1>
      <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
        ${lead}
      </p>
    </section>
    ${contentHtml}
  </main>
  ${renderFooter()}
`;

const renderNuffieldBrentwoodContent = () => `
  <!-- QUICK CONTACT & BOOKING ACTION BAR -->
  <div class="mb-10 p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <span class="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
        Nuffield Health Brentwood Hospital &bull; Direct Appointments
      </span>
      <h2 class="text-xl font-black text-slate-900">
        Schedule a Private Consultation with Mr Shivakumar Shankar
      </h2>
      <p class="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
        Shenfield Road, Brentwood, Essex CM15 8EH. Main Hospital: <strong>01277 695 695</strong> &bull; Appointments: <strong>01277 886 737</strong> &bull; Practice Secretary (Remya Rexlin): <strong>07587 765888</strong>.
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-3 shrink-0">
      <a
        href="https://www.nuffieldhealth.com/consultants/mr-shivakumar-shankar#book"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
      >
        <span>Nuffield Online Portal</span>
        <span>&rarr;</span>
      </a>
      <a
        href="/book-consultation"
        class="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
      >
        Request Clinic Appointment
      </a>
    </div>
  </div>

  <!-- KEY CLINICAL METRICS & FACILITY HIGHLIGHTS -->
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Location &amp; Access</div>
      <div class="text-base font-black text-slate-900 mb-1">Shenfield Road, Brentwood</div>
      <p class="text-xs text-slate-600 leading-relaxed">Essex CM15 8EH. Free on-site patient parking. 1 mile from Shenfield Rail Station (Elizabeth Line).</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-emerald-700 tracking-wider mb-1">Primary Robotic Centre</div>
      <div class="text-base font-black text-slate-900 mb-1">Stryker MAKO Robotics</div>
      <p class="text-xs text-slate-600 leading-relaxed">Designated private hospital for MAKO robotic-arm assisted total hip, total knee, and partial knee surgery.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Diagnostic Imaging</div>
      <div class="text-base font-black text-slate-900 mb-1">3D CT Scanning Suite</div>
      <p class="text-xs text-slate-600 leading-relaxed">On-site low-dose 3D CT scanner calibrated for MAKO stereotactic planning, 1.5T MRI, and digital X-ray.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Inpatient Care</div>
      <div class="text-base font-black text-slate-900 mb-1">Private En-Suite Rooms</div>
      <p class="text-xs text-slate-600 leading-relaxed">Ultra-clean laminar flow theatres, dedicated orthopaedic physiotherapy team, and enhanced recovery protocols.</p>
    </div>
  </section>

  <!-- 1. CONSULTANT-LED PRIVATE ORTHOPAEDIC PRACTICE -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Consultant Arthroplasty Practice
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Consultant-Led Private Orthopaedic Care in Brentwood, Essex
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shivakumar Shankar is a fellowship-trained Consultant Orthopaedic Surgeon specialising in complex and routine hip and knee reconstruction. Holding substantive NHS appointments at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT)—where he has served as Clinical Director and NHS Clinical Lead for Trauma and Orthopaedics—Mr Shankar provides dedicated private outpatient clinics and elective operating lists at Nuffield Health Brentwood Hospital on Shenfield Road.
      </p>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        At Nuffield Health Brentwood Hospital, your care is entirely consultant-delivered. From your initial clinical consultation, physical examination, and diagnostic imaging review through to pre-operative 3D CT surgical templating, the surgical procedure itself, and subsequent ward reviews and outpatient check-ups, Mr Shankar personally oversees every step of your clinical journey. His practice is supported by experienced hospital nurses, specialist musculoskeletal radiographers, and a dedicated inpatient orthopaedic physiotherapy team.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-700">
        <div class="p-3 bg-slate-50 rounded-lg">
          <strong class="block text-slate-900 mb-0.5">3,000+ Joint Surgeries</strong>
          Extensive experience in primary and complex hip and knee arthroplasty over 9+ years of senior practice.
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <strong class="block text-slate-900 mb-0.5">100+ MAKO Robotic Series</strong>
          Personal surgical series of over 100 MAKO robotic-assisted procedures performed by Mr Shankar.
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <strong class="block text-slate-900 mb-0.5">Specialist Fellowships</strong>
          Dual UK fellowships at RNOH Stanmore and Golden Jubilee Hospital, Glasgow (Robotic &amp; Navigation Diploma).
        </div>
      </div>
    </div>
  </section>

  <!-- 2. CLINICAL SERVICES & MAKO ROBOTIC SURGERY -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-3 inline-block border border-emerald-200">
        Clinical Services &amp; Surgical Technology
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Specialist Hip &amp; Knee Procedures Offered at Nuffield Brentwood
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
        Nuffield Health Brentwood Hospital serves as Mr Shankar's primary private surgical base in Essex for Stryker MAKO robotic-arm assisted joint arthroplasty. A comprehensive range of surgical and non-surgical treatments is available:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
            MAKO Robotic-Assisted Total Hip Replacement
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Utilises pre-operative 3D CT virtual planning to model patient-specific acetabular and femoral anatomy. Intra-operatively, the robotic arm guides reaming and cup impaction within pre-planned stereotactic boundaries, optimizing cup inclination, version, femoral offset, and leg length restoration.
          </p>
          <a href="/robotic-hip-replacement" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Learn more about Robotic Hip Surgery &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
            MAKO Robotic-Assisted Total Knee Replacement
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Combines pre-operative CT modeling with real-time kinematic soft-tissue balancing across flexion and extension arcs. Stereotactic haptic boundaries guide the oscillating bone saw, preventing bone resections outside pre-planned zones while preserving healthy collateral ligaments.
          </p>
          <a href="/robotic-knee-replacement" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Learn more about Robotic Knee Surgery &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#1B4965]"></span>
            MAKO Robotic Partial (Unicompartmental) Knee Replacement
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Targeted resurfacing of isolated medial or lateral compartment osteoarthritis. Spares healthy articular cartilage, subchondral bone, and both the anterior and posterior cruciate ligaments (ACL/PCL), allowing natural knee kinematics and rapid post-operative recovery.
          </p>
          <a href="/partial-knee-replacement" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Learn more about Partial Knee Surgery &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#1B4965]"></span>
            Conventional Hip &amp; Knee Arthroplasty
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Time-proven conventional hip and knee replacements using premium biocompatible implants, ceramic bearings, and cross-linked polyethylene inserts. Ideal for patients suited to established manual instrumentation with decades of UK National Joint Registry evidence.
          </p>
          <a href="/hip-replacement" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Explore Total Hip Replacement &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-slate-600"></span>
            Minimally Invasive &amp; Muscle-Sparing Approaches
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Specialist soft-tissue preserving techniques including the direct anterior approach and the true muscle-sparing Rottinger anterolateral approach, avoiding detachment of major gluteal muscle tendons to accelerate early walking and reduce post-operative pain.
          </p>
          <a href="/minimally-invasive-hip-replacement" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Explore Muscle-Sparing Hip Techniques &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-slate-600"></span>
            Diagnostic Joint Injections &amp; Knee Arthroscopy
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Outpatient ultrasound- and fluoroscopic-guided joint injections for targeted pain relief and differential diagnosis (confirming hip vs lumbar spine pathology). Day-case keyhole knee arthroscopy for mechanical catching, meniscal tears, and chondral preservation.
          </p>
          <a href="/knee-arthroscopy" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Explore Knee Joint Preservation &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-purple-700"></span>
            Selected Revision Hip Replacement Surgery
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Revision hip procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar following individual clinical assessment and appropriate pre-operative investigations. These may include selected revision hip replacement procedures for implant loosening, wear, instability or other mechanical problems, depending on the complexity of the case and suitability for the hospital.
          </p>
          <a href="/revision-hip-replacement" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Explore Revision Hip Surgery &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. THE 3D CT ROBOTIC PLANNING PATHWAY -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Robotic Preparation Pathway
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        The 3D CT Robotic Planning Pathway at Nuffield Brentwood
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
        A fundamental distinction of MAKO robotic-assisted surgery is that surgical planning begins well before entering the operating theatre. Unlike conventional surgery—which relies on standard two-dimensional X-rays and manual cutting blocks—robotic arthroplasty follows a structured digital preparation sequence at Nuffield Health Brentwood Hospital:
      </p>

      <div class="space-y-4 text-xs sm:text-sm text-slate-700">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex gap-3.5">
          <span class="w-7 h-7 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold shrink-0 text-xs">1</span>
          <div>
            <strong class="text-slate-900 block text-sm mb-1">Outpatient Clinical Assessment &amp; Initial Imaging</strong>
            Mr Shankar conducts a thorough clinical examination, reviews your medical history, and evaluates your joint symptoms and activity limitations. Digital weight-bearing plain radiographs are obtained on-site to confirm the degree of arthritic joint degeneration.
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex gap-3.5">
          <span class="w-7 h-7 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold shrink-0 text-xs">2</span>
          <div>
            <strong class="text-slate-900 block text-sm mb-1">Dedicated Low-Dose 3D CT Scan</strong>
            If robotic-assisted surgery is agreed, you will undergo a specialized CT scan at Nuffield Brentwood's radiology department using the proprietary Stryker MAKO scanning protocol. This captures precise three-dimensional anatomy of your hip, knee, and ankle joints.
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex gap-3.5">
          <span class="w-7 h-7 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold shrink-0 text-xs">3</span>
          <div>
            <strong class="text-slate-900 block text-sm mb-1">Custom Digital Pre-Operative Surgical Plan</strong>
            The CT dataset is converted into a 3D virtual computer model of your joint. Mr Shankar evaluates your bone anatomy, selects exact implant sizes, plans the precise depth and angle of bone resections, and fine-tunes component alignment and leg length targets in software.
          </div>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex gap-3.5">
          <span class="w-7 h-7 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold shrink-0 text-xs">4</span>
          <div>
            <strong class="text-slate-900 block text-sm mb-1">Intra-Operative Robotic-Arm Guidance</strong>
            In theatre, optical tracking arrays register your real-time limb position against the virtual 3D CT model. Mr Shankar manipulates the robotic arm, which enforces stereotactic haptic boundaries to ensure resections and component placement strictly match the pre-approved plan.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. INPATIENT FACILITIES & ENHANCED RECOVERY -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Inpatient Care &amp; Rehabilitation
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Operating Theatres, Enhanced Recovery &amp; Dedicated Physiotherapy
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Nuffield Health Brentwood Hospital offers modern surgical infrastructure designed to maximize patient safety, comfort, and clinical outcomes:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-700 mb-6">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Laminar Flow Operating Theatres</strong>
          Ultra-clean filtered air ventilation systems maintain exceptional sterility in theatre, substantially lowering the risk of prosthetic joint infections.
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Enhanced Recovery After Surgery (ERAS)</strong>
          Standardised multi-modal pain relief, tranexamic acid to minimise surgical blood loss, and early mobilization protocols supporting rapid recovery.
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Dedicated Inpatient Physiotherapists</strong>
          Specialist orthopaedic physiotherapists assist patients with standing and walking within hours of surgery, guiding stair practice and home exercise plans.
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Private En-Suite Patient Bedrooms</strong>
          Spacious private bedrooms featuring en-suite walk-in shower rooms, flat-screen television, complimentary Wi-Fi, and 24-hour dedicated nursing care.
        </div>
      </div>
    </div>
  </section>

  <!-- 5. BOOKING PATHWAYS: INSURED & SELF-PAY -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Consultation &amp; Funding Pathways
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Patient Booking Pathways: Private Medical Insurance &amp; Self-Funding
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
        Consultations and surgical treatments at Nuffield Health Brentwood Hospital are accessible to both privately insured and self-funding patients:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
          <h3 class="text-base font-bold text-slate-900 mb-2">Private Medical Insurance</h3>
          <p class="text-xs text-slate-600 leading-relaxed mb-3">
            Mr Shankar is fee-assured and fully recognised by all leading UK private medical insurance companies, including:
          </p>
          <ul class="text-xs text-slate-700 space-y-1 mb-4">
            <li>&bull; <strong>Bupa</strong> (Consultant Finder registered)</li>
            <li>&bull; <strong>AXA Health</strong>, <strong>Aviva</strong>, <strong>Vitality</strong></li>
            <li>&bull; <strong>WPA</strong>, <strong>Cigna</strong>, <strong>Healix</strong>, <strong>Police Mutual</strong></li>
          </ul>
          <p class="text-xs text-slate-500 italic">
            Please contact your insurer prior to consultation to obtain pre-authorisation. Most insurers require a GP referral letter.
          </p>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
          <h3 class="text-base font-bold text-slate-900 mb-2">Self-Funding Fixed-Price Packages</h3>
          <p class="text-xs text-slate-600 leading-relaxed mb-3">
            For self-paying patients, Nuffield Health provides transparent fixed-price treatment packages with no hidden costs:
          </p>
          <ul class="text-xs text-slate-700 space-y-1 mb-4">
            <li>&bull; <strong>Initial Consultation:</strong> £250</li>
            <li>&bull; <strong>Follow-up Consultation:</strong> £200</li>
            <li>&bull; <strong>Surgery Packages:</strong> Bundle consultant surgeon fee, anaesthetist fee, hospital stay, implants, medications, and physiotherapy.</li>
            <li>&bull; <strong>Direct Access:</strong> Self-paying patients can self-refer without a mandatory GP letter.</li>
          </ul>
          <p class="text-xs text-slate-500 italic">
            Flexible monthly finance payment plans are available through Nuffield Health, subject to credit approval.
          </p>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span class="text-xs font-bold text-slate-900 block">Hospital Appointments &amp; Enquiries:</span>
          <span class="text-xs text-slate-600">Telephone <strong>01277 695 695</strong> (Appointments: <strong>01277 886 737</strong>) &bull; Practice Secretary: <strong>07587 765888</strong></span>
        </div>
        <a
          href="https://www.nuffieldhealth.com/consultants/mr-shivakumar-shankar#book"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg text-xs font-bold shrink-0 transition-colors"
        >
          Book on Nuffield Health &rarr;
        </a>
      </div>
    </div>
  </section>

  <!-- 6. LOCATION, TRAVEL & PARKING -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Travel &amp; Directions
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Hospital Address, Directions &amp; Free On-Site Parking
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
        Nuffield Health Brentwood Hospital is conveniently located on Shenfield Road in Brentwood, easily accessible from across Essex, North East London, and Greater London:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-700 mb-6">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Hospital Address</strong>
          <p>Nuffield Health Brentwood Hospital<br />Shenfield Road<br />Brentwood, Essex<br /><strong>CM15 8EH</strong></p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Road &amp; Motorway Access</strong>
          <p>Directly on the A1023 (Shenfield Road). Rapid access from the M25 motorway via <strong>Junction 28 (A12)</strong>. Accessible within 20 minutes from Romford, Hornchurch, Billericay, and Chelmsford.</p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Rail &amp; Public Transport</strong>
          <p><strong>Shenfield Station:</strong> 1 mile away (approx. 5 mins taxi). Direct Elizabeth Line and Greater Anglia mainline trains from London Liverpool Street, Stratford, and Chelmsford.<br /><strong>Brentwood Station:</strong> 1.5 miles away.</p>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
        <strong>Complimentary Parking:</strong> Ample free on-site parking is provided for patients and visitors directly outside the hospital entrance, including designated accessible (blue badge) bays.
      </div>
    </div>
  </section>

  <!-- 7. FREQUENTLY ASKED QUESTIONS -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-12">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Patient Guidance
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Frequently Asked Questions: Nuffield Health Brentwood Hospital
      </h2>

      <div class="space-y-4">
        ${NUFFIELD_BRENTWOOD_FAQS.map((faq, i) => `
          <div class="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">
              ${faq.question}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ${faq.answer}
            </p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 8. CONTEXTUAL INTERNAL LINKS & CLINICAL PATHWAYS -->
  <section class="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 mb-8">
    <h3 class="text-lg font-black text-slate-900 mb-4">
      Explore Related Procedures &amp; Practice Locations
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
      <a href="/robotic-hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Robotic Hip Replacement &rarr;
      </a>
      <a href="/robotic-knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Robotic Knee Replacement &rarr;
      </a>
      <a href="/partial-knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Partial Knee Replacement &rarr;
      </a>
      <a href="/revision-hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Revision Hip Replacement &rarr;
      </a>
      <a href="/hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Total Hip Replacement &rarr;
      </a>
      <a href="/knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Total Knee Replacement &rarr;
      </a>
      <a href="/about-mr-shivakumar-shankar" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        About Mr Shivakumar Shankar &rarr;
      </a>
      <a href="/spire-hartswood-hospital" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Spire Hartswood Hospital &rarr;
      </a>
      <a href="/book-consultation" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-[#1B4965] border border-slate-200 transition-colors">
        Book Private Consultation &rarr;
      </a>
    </div>
  </section>
`;

const renderSpireHartswoodContent = () => `
  <!-- QUICK CONTACT & BOOKING ACTION BAR -->
  <div class="mb-10 p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <span class="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
        Spire Hartswood Hospital &bull; Direct Appointments
      </span>
      <h2 class="text-xl font-black text-slate-900">
        Schedule a Private Consultation with Mr Shivakumar Shankar
      </h2>
      <p class="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
        Eagle Way, Great Warley, Brentwood, Essex CM13 3LE. Main Hospital: <strong>01277 266 766</strong> &bull; Appointments: <strong>01277 266 777</strong> &bull; Practice Secretary (Remya Rexlin): <strong>07587 765888</strong>.
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-3 shrink-0">
      <a
        href="https://appointments.spirehealthcare.com/?c=C6038414"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
      >
        <span>Spire Online Portal</span>
        <span>&rarr;</span>
      </a>
      <a
        href="/book-consultation"
        class="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
      >
        Request Clinic Appointment
      </a>
    </div>
  </div>

  <!-- KEY CLINICAL METRICS & FACILITY HIGHLIGHTS -->
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Location &amp; Access</div>
      <div class="text-base font-black text-slate-900 mb-1">Eagle Way, Great Warley</div>
      <p class="text-xs text-slate-600 leading-relaxed">Brentwood CM13 3LE. Generous free on-site parking. 5 minutes from M25 (J28/J29) and Brentwood Station.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Knee Technology</div>
      <div class="text-base font-black text-slate-900 mb-1">Optical Computer Navigation</div>
      <p class="text-xs text-slate-600 leading-relaxed">Intra-operative infrared kinematic tracking; avoids intramedullary rods; does not routinely require a separate pre-operative planning CT scan.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-amber-800 tracking-wider mb-1">Technology Note</div>
      <div class="text-base font-black text-slate-900 mb-1">Optical Navigation Centre</div>
      <p class="text-xs text-slate-600 leading-relaxed">Spire offers optical navigation; MAKO robotic surgery is not available at Spire (provided at Nuffield Brentwood).</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Inpatient Care</div>
      <div class="text-base font-black text-slate-900 mb-1">Private En-Suite Rooms</div>
      <p class="text-xs text-slate-600 leading-relaxed">Laminar-flow ultra-clean theatres, dedicated inpatient physiotherapy department, and peaceful parkland setting.</p>
    </div>
  </section>

  <!-- 1. ESTABLISHED PRIVATE PRACTICE IN BRENTWOOD -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Established Private Practice
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Established Private Orthopaedic Consultations in Brentwood, Essex
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shivakumar Shankar has established a longstanding, trusted private orthopaedic practice at Spire Hartswood Hospital on Eagle Way in Great Warley, Brentwood. As an experienced Consultant Orthopaedic Surgeon with substantive NHS leadership roles across Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT)—including Interim &amp; Acting Clinical Lead and Clinical Director for Trauma and Orthopaedics—Mr Shankar provides comprehensive consultant-led care for patients throughout Essex and London.
      </p>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        At Spire Hartswood Hospital, patients benefit from a complete, unhurried consultant pathway. Mr Shankar personally evaluates each patient, takes a comprehensive clinical history, performs targeted physical examinations, interprets diagnostic X-rays and MRI scans, carries out all surgical operations personally, and conducts all post-operative reviews on the hospital ward and in the outpatient department.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-700">
        <div class="p-3 bg-slate-50 rounded-lg">
          <strong class="block text-slate-900 mb-0.5">3,000+ Joint Arthroplasties</strong>
          High-volume surgeon performing hip and knee replacements across manual, computer-assisted, and robotic modalities.
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <strong class="block text-slate-900 mb-0.5">1,200+ Knee Arthroscopies</strong>
          Substantial experience in keyhole meniscal repair, joint debridement, and cartilage preservation.
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <strong class="block text-slate-900 mb-0.5">GMC Specialist Register</strong>
          GMC Reference 6038414 &bull; CCT in Trauma &amp; Orthopaedics &bull; Postgraduate Diploma in CAOS Arthroplasty.
        </div>
      </div>
    </div>
  </section>

  <!-- 2. CLINICAL SERVICES OFFERED AT SPIRE HARTSWOOD -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Clinical Services &amp; Arthroplasty
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Specialist Hip &amp; Knee Treatments at Spire Hartswood Hospital
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
        At Spire Hartswood Hospital, Mr Shankar provides a full range of adult joint reconstruction, arthroscopy, and non-surgical interventional treatments:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#1B4965]"></span>
            Computer-Navigated Total Knee Replacement
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Intra-operative optical infrared tracking calculating live limb mechanical axes and joint gap symmetry. Avoids breaching the femoral intramedullary canal, lowering intramedullary pressure rises. Requires no pre-operative CT scan radiation.
          </p>
          <a href="/computer-assisted-knee-replacement" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Learn more about Computer Navigation &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#1B4965]"></span>
            Conventional Total Hip Replacement
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Proven hip replacement replacing the arthritic femoral head and acetabulum with durable ceramic and cross-linked polyethylene components. Muscle-sparing approaches (direct anterior, Rottinger) and posterior approaches restoring natural hip mechanics.
          </p>
          <a href="/hip-replacement" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Explore Total Hip Replacement &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#1B4965]"></span>
            Conventional Total Knee Replacement
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Reliable mechanical resurfacing of femoral and tibial joint surfaces, correcting bow-leg (varus) or knock-knee (valgus) deformities, backed by extensive National Joint Registry data demonstrating excellent 15- to 20-year survivorship.
          </p>
          <a href="/knee-replacement" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Explore Total Knee Replacement &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#1B4965]"></span>
            Partial (Unicompartmental) Knee Replacement
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Precision resurfacing limited to either the medial or lateral compartment. Preserves both native cruciate ligaments (ACL and PCL) and healthy cartilage, enabling normal joint proprioception, smaller incisions, and swift functional return.
          </p>
          <a href="/partial-knee-replacement" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Explore Partial Knee Arthroplasty &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-slate-600"></span>
            Knee Arthroscopy &amp; Meniscal Repair
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Minimally invasive keyhole procedures for meniscal tears, chondral flaps, loose bodies, and persistent mechanical symptoms. Day-case admission with rapid return to daily mobility and sports-specific rehabilitation.
          </p>
          <a href="/knee-arthroscopy" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Learn more about Knee Arthroscopy &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-slate-600"></span>
            Image-Guided Hip &amp; Knee Injections
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Ultrasound- and fluoroscopy-guided local anaesthetic and corticosteroid injections. Serves as a vital diagnostic tool to differentiate hip osteoarthritis from referred lumbar spine pain, while delivering effective anti-inflammatory symptom relief.
          </p>
          <a href="/hip-replacement" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Explore Joint Injections &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
          <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-purple-700"></span>
            Selected Revision Hip Replacement Surgery
          </h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Revision hip procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar following individual clinical assessment and appropriate pre-operative investigations. These include selected revision hip replacement procedures for implant loosening, wear, instability or other mechanical problems, depending on the complexity of the case and suitability for the hospital.
          </p>
          <a href="/revision-hip-replacement" class="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
            Explore Revision Hip Surgery &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. TECHNOLOGY CLARIFICATION: NAVIGATION VS ROBOTICS -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full mb-3 inline-block border border-amber-200">
        Clinical Technology Clarification
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Surgical Technology Distinction: Optical Navigation vs MAKO Robotics
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        To provide complete transparency for patients and referring general practitioners, Mr Shankar clearly distinguishes the surgical technologies available across his private practice locations in Brentwood:
      </p>

      <div class="p-5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-slate-800 mb-6 space-y-3">
        <p class="font-bold text-amber-950">
          Important Notice Regarding MAKO Robotic Surgery:
        </p>
        <p class="leading-relaxed">
          Spire Hartswood Hospital is equipped with <strong>optical computer navigation technology</strong> for total knee replacement, but does <strong>NOT</strong> have a MAKO robotic surgical system. Computer navigation provides digital angular and gap readouts to assist the surgeon's manual instrumentation without requiring a pre-operative CT scan or robotic arm.
        </p>
        <p class="leading-relaxed">
          Patients who specifically seek <strong>Stryker MAKO robotic-arm assisted hip or knee replacement</strong> are treated by Mr Shankar at <strong>Nuffield Health Brentwood Hospital</strong> on Shenfield Road (located less than 3 miles from Spire Hartswood) or within his NHS service at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT).
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-700">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <strong class="text-slate-900 block text-sm">Spire Hartswood Hospital (Navigation &amp; Conventional)</strong>
          <ul class="space-y-1">
            <li>&bull; Optical infrared cameras and tracker arrays in theatre</li>
            <li>&bull; Live digital display of mechanical axis and gap balance</li>
            <li>&bull; Avoids breaching the femoral marrow canal (no intramedullary rods)</li>
            <li>&bull; <strong>No pre-operative CT scan radiation required</strong></li>
            <li>&bull; Surgeon uses precision manual cutting guides</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <strong class="text-slate-900 block text-sm">Nuffield Health Brentwood Hospital (MAKO Robotics)</strong>
          <ul class="space-y-1">
            <li>&bull; Pre-operative low-dose 3D CT scan and virtual modeling</li>
            <li>&bull; Surgeon-guided robotic arm with active stereotactic haptic boundaries</li>
            <li>&bull; Real-time dynamic soft-tissue gap balancing</li>
            <li>&bull; Available for MAKO Total Hip, Total Knee &amp; Partial Knee</li>
            <li>&bull; Located on Shenfield Road, Brentwood CM15 8EH</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. OPERATING THEATRES & REHABILITATION -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Hospital Infrastructure
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Laminar Flow Theatres, Fast-Track Imaging &amp; Dedicated Rehabilitation
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Spire Hartswood Hospital provides state-of-the-art medical and inpatient facilities in a tranquil, wooded setting in Great Warley:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-700 mb-6">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Ultra-Clean Laminar Flow Theatres</strong>
          Specialised orthopaedic operating suites equipped with HEPA-filtered laminar airflow canopies, maintaining exceptionally low airborne particulate levels to minimize surgical site infection risk.
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">On-Site Diagnostic Imaging</strong>
          Rapid-access imaging suite including 1.5T MRI, digital weight-bearing X-rays, multi-slice CT scanning, and musculoskeletal ultrasound.
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Inpatient Physiotherapy Team</strong>
          Experienced orthopaedic physiotherapists assist patients with early mobilization on the day of surgery, providing tailored gait training, stair negotiation practice, and home exercise protocols.
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Private En-Suite Recovery Rooms</strong>
          Comfortable private inpatient bedrooms featuring en-suite bathroom facilities, flat-screen television, free Wi-Fi, peaceful garden views, and 24-hour medical and nursing care.
        </div>
      </div>
    </div>
  </section>

  <!-- 5. BOOKING PATHWAYS: INSURED & SELF-PAY -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Consultation &amp; Funding Pathways
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Patient Booking Pathways: Insured Care &amp; Fixed-Price Self-Funding
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
        Spire Hartswood Hospital accommodates both privately insured and self-funding patients with transparent pricing:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
          <h3 class="text-base font-bold text-slate-900 mb-2">Private Medical Insurance</h3>
          <p class="text-xs text-slate-600 leading-relaxed mb-3">
            Mr Shankar is fee-assured and recognised across all major UK health insurance providers:
          </p>
          <ul class="text-xs text-slate-700 space-y-1 mb-4">
            <li>&bull; <strong>Bupa</strong> (Consultant ID: 038414 / Spire Hartswood listed)</li>
            <li>&bull; <strong>AXA Health</strong>, <strong>Aviva</strong>, <strong>Vitality</strong></li>
            <li>&bull; <strong>WPA</strong>, <strong>Cigna</strong>, <strong>Healix</strong>, <strong>Police Mutual</strong></li>
          </ul>
          <p class="text-xs text-slate-500 italic">
            Please obtain an authorization code from your insurer prior to attending. A GP referral letter is generally required by insurers.
          </p>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
          <h3 class="text-base font-bold text-slate-900 mb-2">Self-Pay Fixed-Price Packages</h3>
          <p class="text-xs text-slate-600 leading-relaxed mb-3">
            Spire Healthcare provides transparent, all-inclusive package pricing for surgical joint replacement:
          </p>
          <ul class="text-xs text-slate-700 space-y-1 mb-4">
            <li>&bull; <strong>Initial Consultation:</strong> £250</li>
            <li>&bull; <strong>Follow-up Consultation:</strong> £200</li>
            <li>&bull; <strong>Fixed-Price Surgery:</strong> Covers surgeon fee, anaesthetist fee, operating theatre time, prosthetic implants, private accommodation, medications, and physiotherapy.</li>
            <li>&bull; <strong>Direct Self-Referral:</strong> Self-paying patients do not strictly require a GP referral letter.</li>
          </ul>
          <p class="text-xs text-slate-500 italic">
            Spire Healthcare offers interest-bearing and interest-free finance options to help spread treatment charges over time.
          </p>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span class="text-xs font-bold text-slate-900 block">Hospital Appointments &amp; Enquiries:</span>
          <span class="text-xs text-slate-600">Telephone <strong>01277 266 766</strong> (Appointments: <strong>01277 266 777</strong>) &bull; Practice Secretary: <strong>07587 765888</strong></span>
        </div>
        <a
          href="https://appointments.spirehealthcare.com/?c=C6038414"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-[#1B4965] hover:bg-[#13364B] text-white px-4 py-2 rounded-lg text-xs font-bold shrink-0 transition-colors"
        >
          Book on Spire Healthcare &rarr;
        </a>
      </div>
    </div>
  </section>

  <!-- 6. LOCATION, TRAVEL & PARKING -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Travel &amp; Directions
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Hospital Address, Directions &amp; Free On-Site Parking
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
        Spire Hartswood Hospital is situated in Great Warley, Brentwood, Essex, in peaceful landscaped grounds with outstanding road access:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-700 mb-6">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Hospital Address</strong>
          <p>Spire Hartswood Hospital<br />Eagle Way, Great Warley<br />Brentwood, Essex<br /><strong>CM13 3LE</strong></p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Road &amp; Motorway Access</strong>
          <p>Superbly positioned close to the <strong>M25 (Junction 28 &amp; 29)</strong> and <strong>A12</strong>. Accessible within 15–20 minutes from Upminster, Hornchurch, Romford, Basildon, and Chelmsford.</p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Rail &amp; Public Transport</strong>
          <p><strong>Brentwood Station:</strong> Approx. 5 minutes by car or taxi (Elizabeth Line).<br /><strong>Shenfield Station:</strong> Approx. 10 minutes by taxi (Elizabeth Line &amp; Greater Anglia mainline).</p>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
        <strong>Complimentary Parking:</strong> Generous free on-site parking is situated directly outside the hospital entrance, with step-free accessible parking spaces immediately adjoining reception.
      </div>
    </div>
  </section>

  <!-- 7. FREQUENTLY ASKED QUESTIONS -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-12">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Patient Guidance
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Frequently Asked Questions: Spire Hartswood Hospital
      </h2>

      <div class="space-y-4">
        ${SPIRE_HARTSWOOD_FAQS.map((faq, i) => `
          <div class="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">
              ${faq.question}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ${faq.answer}
            </p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 8. CONTEXTUAL INTERNAL LINKS & CLINICAL PATHWAYS -->
  <section class="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 mb-8">
    <h3 class="text-lg font-black text-slate-900 mb-4">
      Explore Related Procedures &amp; Practice Locations
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
      <a href="/computer-assisted-knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Computer-Navigated Knee &rarr;
      </a>
      <a href="/revision-hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Revision Hip Replacement &rarr;
      </a>
      <a href="/hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Total Hip Replacement &rarr;
      </a>
      <a href="/knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Total Knee Replacement &rarr;
      </a>
      <a href="/partial-knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Partial Knee Replacement &rarr;
      </a>
      <a href="/nuffield-brentwood-hospital" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Nuffield Health Brentwood &rarr;
      </a>
      <a href="/about-mr-shivakumar-shankar" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        About Mr Shivakumar Shankar &rarr;
      </a>
      <a href="/reviews" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Patient Reviews &amp; Outcomes &rarr;
      </a>
      <a href="/book-consultation" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-[#1B4965] border border-slate-200 transition-colors">
        Book Private Consultation &rarr;
      </a>
    </div>
  </section>
`;

const renderQueensHospitalContent = () => `
  <!-- QUICK CONTACT & TRUST ACTION BAR -->
  <div class="mb-10 p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <span class="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
        BHRUT NHS Trust &bull; Major Acute Hospital &amp; Regional Trauma Centre
      </span>
      <h2 class="text-xl font-black text-slate-900">
        Queen's Hospital, Romford &bull; Mr Shivakumar Shankar
      </h2>
      <p class="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
        Rom Valley Way, Romford, Greater London / Essex RM7 0AG. Trust Switchboard: <strong>01708 435000</strong> &bull; Substantive NHS Consultant in Trauma &amp; Orthopaedics &bull; Private Practice Secretary (Remya Rexlin): <strong>07587 765888</strong>.
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-3 shrink-0">
      <a
        href="#referral-pathway"
        class="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
      >
        <span>NHS e-RS Referral Guide</span>
        <span>&darr;</span>
      </a>
      <a
        href="/book-consultation"
        class="bg-[#E8A24C] hover:bg-[#D99136] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
      >
        Private Consultation Option
      </a>
    </div>
  </div>

  <!-- KEY METRICS GRID -->
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">NHS Consultant Since 2017</div>
      <div class="text-base font-black text-slate-900 mb-1">Substantive BHRUT Post</div>
      <p class="text-xs text-slate-600 leading-relaxed">Former Clinical Director &amp; NHS Clinical Lead for Trauma and Orthopaedics; Femur Fracture &amp; Infection Control Lead.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-emerald-700 tracking-wider mb-1">Trauma Centre Context</div>
      <div class="text-base font-black text-slate-900 mb-1">Major Acute Hospital</div>
      <p class="text-xs text-slate-600 leading-relaxed">Regional acute trauma centre delivering 24/7 emergency surgical care, fragility fracture management, and peri-prosthetic fracture repair.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Complex Revision (NHS)</div>
      <div class="text-base font-black text-slate-900 mb-1">BHRUT Trust-Level Scope</div>
      <p class="text-xs text-slate-600 leading-relaxed">Complex revision hip replacement and reconstruction personally undertaken by Mr Shankar with MDT perioperative support.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Location &amp; Access</div>
      <div class="text-base font-black text-slate-900 mb-1">Rom Valley Way, Romford</div>
      <p class="text-xs text-slate-600 leading-relaxed">RM7 0AG. Close to Romford Station (Elizabeth Line). Multi-storey parking and direct TfL bus routes (5, 128, 175, 193, 365, 496, 498, 499).</p>
    </div>
  </section>

  <!-- 1. SUBSTANTIVE NHS CONSULTANT PRACTICE & LEADERSHIP -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        NHS Consultant Base &bull; Barking, Havering and Redbridge University Hospitals NHS Trust
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Substantive NHS Consultant Orthopaedic Practice &amp; Departmental Leadership
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Queen's Hospital in Romford serves as the substantive NHS consultant base for Mr Shivakumar Shankar within Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). Appointed as a substantive NHS Consultant in Trauma and Orthopaedics in 2017, Mr Shankar has dedicated years of clinical service to the communities of Havering, Barking and Dagenham, Redbridge, and south-west Essex (GMC Number: 6038414).
      </p>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Over his tenure at BHRUT, Mr Shankar has undertaken pivotal clinical leadership responsibilities. He has served as <strong>Clinical Director for Trauma and Orthopaedics</strong> and <strong>NHS Clinical Lead for Trauma and Orthopaedics</strong>, overseeing clinical governance, patient safety protocols, surgical training, and clinical effectiveness across the entire orthopaedic directorate. He has also fulfilled departmental lead roles as <strong>Clinical Lead for Femur Fracture Management</strong>—driving multidisciplinary pathway improvements for vulnerable elderly fracture patients—and <strong>Clinical Lead for Infection Control</strong>, implementing rigorous theatre protocols that uphold exemplary patient safety standards.
      </p>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed text-slate-600">
        Within the Trust, care is strategically coordinated across BHRUT's two main hospital sites: acute, emergency trauma, peri-prosthetic fracture management, and acute outpatient services operate at Queen's Hospital in Romford, while planned, routine elective joint replacements are primarily performed at King George Hospital's protected elective surgical centre in Goodmayes.
      </p>
    </div>
  </section>

  <!-- 2. CLINICAL SERVICES & ARTHROPLASTY SCOPE -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Clinical Services
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        NHS Orthopaedic Trauma, Joint Reconstruction &amp; Arthroplasty Services
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
        As one of North East London's major acute hospitals and regional trauma centres, Queen's Hospital delivers comprehensive emergency and planned orthopaedic care:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Acute Trauma &amp; Fracture Reconstruction</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            As a regional acute trauma centre, Queen's Hospital provides comprehensive 24/7 trauma care. Mr Shankar manages acute musculoskeletal injuries, complex peri-articular fractures, fragility hip fractures, and peri-prosthetic fractures around existing hip and knee replacements.
          </p>
        </div>
        <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Hip &amp; Knee Joint Reconstruction</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Comprehensive investigation, non-operative management, and surgical treatment for severe hip and knee osteoarthritis, inflammatory arthritis, and secondary degenerative joint disease, coordinated through BHRUT multidisciplinary pathways.
          </p>
        </div>
        <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Outpatient Fracture &amp; Arthroplasty Clinics</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Specialist consultant-led outpatient clinics for new GP referrals, fracture follow-up, post-operative arthroplasty surveillance, and assessment of painful or failing previous joint replacements.
          </p>
        </div>
        <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Multidisciplinary Collaboration</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Close partnership with orthogeriatricians, specialist musculoskeletal physiotherapists, clinical nurse specialists, occupational therapists, and consultant microbiologists ensuring holistic patient care.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. REVISION HIP SURGERY ACROSS NHS & PRIVATE PRACTICE -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Clinical Scope of Practice
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Revision Hip Surgery — Scope of Practice Across Private &amp; NHS Practice
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shivakumar Shankar performs revision hip replacement surgery across both private and NHS hospital settings, with care structured according to patient clinical complexity, perioperative requirements, and institutional facilities:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div class="p-6 rounded-xl bg-[#EAF1F6] border border-blue-200">
          <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] block mb-2">
            NHS Hospital Practice &bull; BHRUT
          </span>
          <h3 className="text-lg font-black text-slate-900 mb-2">
            Complex Revision Hip Replacement &amp; Reconstruction
          </h3>
          <p class="text-xs text-slate-700 leading-relaxed mb-3">
            Mr Shankar undertakes complex revision hip replacement surgery and hip reconstruction within his NHS hospital practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT).
          </p>
          <p class="text-xs text-slate-700 leading-relaxed">
            Within BHRUT, complex revision cases are managed with access to specialist multidisciplinary assessment, complex reconstruction resources (including modular revision stems, trabecular metal acetabular augments, cages, and bone graft substitutes), and dedicated perioperative support, including intensive care (ITU) and high-dependency (HDU) monitoring.
          </p>
        </div>
        <div class="p-6 rounded-xl bg-emerald-50 border border-emerald-200">
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
            Private Hospital Practice &bull; Brentwood
          </span>
          <h3 class="text-lg font-black text-slate-900 mb-2">
            Selected Revision Hip Surgery in Private Hospitals
          </h3>
          <p class="text-xs text-slate-700 leading-relaxed mb-3">
            At his private practice locations—Nuffield Health Brentwood Hospital and Spire Hartswood Hospital in Brentwood, Essex—revision hip procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar following individual clinical assessment and appropriate pre-operative investigations.
          </p>
          <p class="text-xs text-slate-700 leading-relaxed">
            These include selected revision hip replacement procedures for implant loosening, component wear, instability, or mechanical issues, depending on case complexity and hospital suitability.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. NHS REFERRAL PATHWAY (e-RS) -->
  <section id="referral-pathway" class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Patient Referral Guide
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        How NHS Patients Access Care via the NHS e-Referral Service (e-RS)
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
        Under NHS Constitution rights, patients registered with an NHS GP in England have the right to choose the hospital and clinical team for their first consultant-led outpatient appointment:
      </p>
      <div class="space-y-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
          <div>
            <h3 class="text-sm font-bold text-slate-900 mb-1">Consult Your General Practitioner (GP)</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Discuss your hip or knee joint symptoms, functional limitations, and conservative treatment history with your NHS GP. If surgical assessment is warranted, request a referral to the Trauma &amp; Orthopaedics department at BHRUT.
            </p>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
          <div>
            <h3 class="text-sm font-bold text-slate-900 mb-1">Named Consultant Referral via NHS e-RS</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Your GP or practice administrative team submits your referral electronically through the NHS e-Referral Service (e-RS, formerly Choose &amp; Book), selecting Barking, Havering and Redbridge University Hospitals NHS Trust and naming <strong>Mr Shivakumar Shankar</strong> as the preferred consultant.
            </p>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">3</div>
          <div>
            <h3 class="text-sm font-bold text-slate-900 mb-1">Clinical Triage &amp; Outpatient Appointment</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Referrals are clinically evaluated based on severity. The Trust central booking office will contact you with booking options or invite you to book an appointment through the NHS App or online portal.
            </p>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">4</div>
          <div>
            <h3 class="text-sm font-bold text-slate-900 mb-1">Alternative: Private Consultation Pathway</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Patients seeking expedited consultant review without standard NHS waiting times can consult Mr Shankar privately at Nuffield Health Brentwood Hospital or Spire Hartswood Hospital in Brentwood, Essex. Contact his medical secretary (Remya Rexlin) on <strong>07587 765888</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. LOCATION, TRANSPORT & AMENITIES -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Hospital Location &amp; Access
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Location, Public Transport &amp; Parking at Queen's Hospital Romford
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Hospital Address</h3>
          <p class="text-xs text-slate-700 leading-relaxed mb-2">
            Queen's Hospital<br />
            Rom Valley Way<br />
            Romford, Greater London / Essex<br />
            <strong>RM7 0AG</strong>
          </p>
          <p class="text-xs text-slate-500">Main Switchboard: 01708 435000</p>
        </div>
        <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Public Transport</h3>
          <p class="text-xs text-slate-700 leading-relaxed mb-2">
            <strong>Romford Station</strong> (Elizabeth Line, Greater Anglia, London Overground) is approx. 0.8 miles away.
          </p>
          <p class="text-xs text-slate-600">
            Frequent direct TfL buses stop directly outside the hospital entrance: <strong>5, 128, 175, 193, 365, 496, 498, 499</strong>.
          </p>
        </div>
        <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Parking &amp; Facilities</h3>
          <p class="text-xs text-slate-700 leading-relaxed mb-2">
            Multi-storey pay-and-display visitor car park on-site with automatic number plate recognition (ANPR).
          </p>
          <p class="text-xs text-slate-600">
            Designated accessible Blue Badge bays, 20-minute patient drop-off bays, step-free access, on-site pharmacy, and cafes.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FREQUENTLY ASKED QUESTIONS -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Patient Questions
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Frequently Asked Questions — Queen's Hospital Romford
      </h2>
      <div class="space-y-4 mt-6">
        ${QUEENS_HOSPITAL_FAQS.map(faq => `
          <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 class="text-base font-bold text-slate-900 mb-2">${faq.question}</h3>
            <p class="text-xs text-slate-600 leading-relaxed">${faq.answer}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 7. INTERNAL LINKS -->
  <section class="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
    <h3 class="text-lg font-black text-slate-900 mb-4">
      Explore Related Hospital Locations &amp; Arthroplasty Services
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
      <a href="/king-george-hospital-goodmayes" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        King George Hospital Goodmayes (NHS) &rarr;
      </a>
      <a href="/nuffield-brentwood-hospital" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Nuffield Health Brentwood (Private) &rarr;
      </a>
      <a href="/spire-hartswood-hospital" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Spire Hartswood Hospital (Private) &rarr;
      </a>
      <a href="/revision-hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Revision Hip Replacement &rarr;
      </a>
      <a href="/hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Total Hip Replacement &rarr;
      </a>
      <a href="/knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Total Knee Replacement &rarr;
      </a>
      <a href="/about-mr-shivakumar-shankar" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        About Mr Shivakumar Shankar &rarr;
      </a>
      <a href="/contact" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-[#1B4965] border border-slate-200 transition-colors">
        Contact Practice Secretary &rarr;
      </a>
    </div>
  </section>
`;

const renderKingGeorgeHospitalContent = () => `
  <!-- QUICK CONTACT & TRUST ACTION BAR -->
  <div class="mb-10 p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <span class="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
        BHRUT NHS Trust &bull; Dedicated Elective Surgical Centre
      </span>
      <h2 class="text-xl font-black text-slate-900">
        King George Hospital, Goodmayes &bull; Mr Shivakumar Shankar
      </h2>
      <p class="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
        Barley Lane, Goodmayes, Ilford, Essex IG3 8YB. Trust Switchboard: <strong>020 8970 8000</strong> &bull; Elective Orthopaedic Surgical Hub &bull; Private Practice Secretary (Remya Rexlin): <strong>07587 765888</strong>.
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-3 shrink-0">
      <a
        href="#referral-pathway"
        class="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
      >
        <span>NHS e-RS Referral Guide</span>
        <span>&darr;</span>
      </a>
      <a
        href="/book-consultation"
        class="bg-[#E8A24C] hover:bg-[#D99136] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
      >
        Private Consultation Option
      </a>
    </div>
  </div>

  <!-- KEY METRICS GRID -->
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Protected Elective Hub</div>
      <div class="text-base font-black text-slate-900 mb-1">Dedicated Clean Theatres</div>
      <p class="text-xs text-slate-600 leading-relaxed">Ring-fenced laminar airflow theatres isolated from emergency trauma surges, designed to protect elective capacity and minimise surgical cancellations.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-emerald-700 tracking-wider mb-1">Elective Recovery Lead</div>
      <div class="text-base font-black text-slate-900 mb-1">&lsquo;Bones R Us&rsquo; &amp; HULK-10</div>
      <p class="text-xs text-slate-600 leading-relaxed">Pioneered high-intensity surgical sprints delivering high-volume hip and knee joint replacements to reduce post-pandemic backlogs.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Complex Revision (NHS)</div>
      <div class="text-base font-black text-slate-900 mb-1">BHRUT Trust-Level Scope</div>
      <p class="text-xs text-slate-600 leading-relaxed">Complex revision hip replacement and reconstruction personally undertaken by Mr Shankar with MDT perioperative support.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Location &amp; Access</div>
      <div class="text-base font-black text-slate-900 mb-1">Barley Lane, Goodmayes</div>
      <p class="text-xs text-slate-600 leading-relaxed">IG3 8YB. Goodmayes Station (Elizabeth Line) and Newbury Park (Central line). On-site pay-and-display parking and bus links (364, 387, 396, 173).</p>
    </div>
  </section>

  <!-- 1. DEDICATED ELECTIVE SURGICAL HUB -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Elective Orthopaedic Centre &bull; Barking, Havering and Redbridge University Hospitals NHS Trust
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        King George Hospital — Dedicated Elective Orthopaedic Surgical Hub
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        King George Hospital in Goodmayes, Ilford, serves as the designated, protected Elective Surgical Centre for Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). While acute emergency trauma admissions are concentrated at Queen's Hospital in Romford, King George Hospital operates as a specialised, high-efficiency hub dedicated to planned inpatient and day-case surgery.
      </p>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        A cornerstone of the King George elective model is the complete separation of planned elective beds and operating theatres from emergency medical and trauma pressures. Orthopaedic joint replacement lists are hosted in specialized ultra-clean laminar airflow theatre suites equipped with HEPA filtration, creating a sterile air curtain that substantially minimizes surgical site infection risks. Having served as <strong>Clinical Lead for Infection Control</strong> for the department, Mr Shivakumar Shankar enforces meticulous infection prevention protocols, MRSA screening, and enhanced surgical prophylaxis.
      </p>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed text-slate-600">
        This ring-fenced elective arrangement provides patients across North East London and Essex with outstanding procedural reliability, substantially reduced risk of elective cancellation during seasonal winter bed pressures, and dedicated orthopaedic rehabilitation wards supported by specialist physiotherapists.
      </p>
    </div>
  </section>

  <!-- 2. ELECTIVE RECOVERY LEADERSHIP ('BONES R US' & HULK-10) -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Elective Recovery Innovation
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Pioneering NHS Elective Recovery — &lsquo;Bones R Us&rsquo; &amp; HULK-10 Sprints
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        In the wake of unprecedented post-pandemic orthopaedic waiting list backlogs across the NHS, Mr Shivakumar Shankar championed innovative, high-intensity elective surgical recovery programmes at BHRUT that garnered regional and national recognition:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div class="p-6 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">&lsquo;Bones R Us&rsquo; Intensive Joint Sprints</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Mr Shankar spearheaded the celebrated &lsquo;Bones R Us&rsquo; intensive surgical recovery weekends at King George Hospital. By synchronizing multidisciplinary theatre staff, consultant anaesthetists, nursing teams, and dedicated physiotherapists, Mr Shankar personally completed high-volume joint replacement lists across dedicated weekends, dramatically accelerating access for long-waiting hip and knee patients.
          </p>
        </div>
        <div class="p-6 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">HULK-10 Elective Arthroplasty Sprints</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Building on this clinical model, Mr Shankar co-led the &lsquo;HULK-10&rsquo; high-intensity elective arthroplasty initiative. By streamlining pre-assessment, standardizing surgical trays, and implementing modern multimodal pain protocols, surgical teams safely carried out high volumes of complex and routine joint replacements, receiving acclaim across NHS London.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. REVISION HIP SURGERY ACROSS NHS & PRIVATE PRACTICE -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Clinical Scope of Practice
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Revision Hip Surgery — Scope of Practice Across Private &amp; NHS Practice
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shivakumar Shankar performs revision hip replacement surgery across both private and NHS hospital settings, with care structured according to patient clinical complexity, perioperative requirements, and institutional facilities:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div class="p-6 rounded-xl bg-[#EAF1F6] border border-blue-200">
          <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] block mb-2">
            NHS Hospital Practice &bull; BHRUT
          </span>
          <h3 class="text-lg font-black text-slate-900 mb-2">
            Complex Revision Hip Replacement &amp; Reconstruction
          </h3>
          <p class="text-xs text-slate-700 leading-relaxed mb-3">
            Mr Shankar undertakes complex revision hip replacement surgery and hip reconstruction within his NHS hospital practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT).
          </p>
          <p class="text-xs text-slate-700 leading-relaxed">
            Within BHRUT, complex revision cases are managed with access to specialist multidisciplinary assessment, complex reconstruction resources (including modular revision stems, trabecular metal acetabular augments, cages, and bone graft substitutes), and dedicated perioperative support, including intensive care (ITU) and high-dependency (HDU) monitoring.
          </p>
        </div>
        <div class="p-6 rounded-xl bg-emerald-50 border border-emerald-200">
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
            Private Hospital Practice &bull; Brentwood
          </span>
          <h3 class="text-lg font-black text-slate-900 mb-2">
            Selected Revision Hip Surgery in Private Hospitals
          </h3>
          <p class="text-xs text-slate-700 leading-relaxed mb-3">
            At his private practice locations—Nuffield Health Brentwood Hospital and Spire Hartswood Hospital in Brentwood, Essex—revision hip procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar following individual clinical assessment and appropriate pre-operative investigations.
          </p>
          <p class="text-xs text-slate-700 leading-relaxed">
            These include selected revision hip replacement procedures for implant loosening, component wear, instability, or mechanical issues, depending on case complexity and hospital suitability.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. NHS REFERRAL PATHWAY (e-RS) -->
  <section id="referral-pathway" class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Patient Referral Guide
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        How NHS Patients Access Care via the NHS e-Referral Service (e-RS)
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
        NHS patients in Essex, London, and nationwide can access Mr Shankar's NHS elective orthopaedic service through the electronic referral pathway:
      </p>
      <div class="space-y-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
          <div>
            <h3 class="text-sm font-bold text-slate-900 mb-1">GP Consultation &amp; Assessment</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Visit your GP for physical examination and weight-bearing X-rays. If joint replacement is considered appropriate, request an elective referral to BHRUT Trauma &amp; Orthopaedics.
            </p>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
          <div>
            <h3 class="text-sm font-bold text-slate-900 mb-1">Electronic e-RS Referral</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Your GP practice sends your referral via the NHS e-Referral Service to Barking, Havering and Redbridge University Hospitals NHS Trust, naming <strong>Mr Shivakumar Shankar</strong> as the consultant orthopaedic surgeon.
            </p>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">3</div>
          <div>
            <h3 class="text-sm font-bold text-slate-900 mb-1">Pre-Assessment &amp; Elective Surgery at King George</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Following clinic review, patients attend Joint School and pre-operative anaesthetic assessment before planned surgery in King George Hospital's protected clean elective theatres.
            </p>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">4</div>
          <div>
            <h3 class="text-sm font-bold text-slate-900 mb-1">Fast-Track Private Option</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              For patients seeking immediate consultation and rapid surgery dates without NHS waitlists, Mr Shankar consults privately in Brentwood at Nuffield Health Brentwood and Spire Hartswood Hospitals. Contact his practice secretary on <strong>07587 765888</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. LOCATION, TRANSPORT & AMENITIES -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Hospital Location &amp; Travel
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Location, Public Transport &amp; Parking at King George Hospital Goodmayes
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Hospital Address</h3>
          <p class="text-xs text-slate-700 leading-relaxed mb-2">
            King George Hospital<br />
            Barley Lane<br />
            Goodmayes, Ilford, Essex / London<br />
            <strong>IG3 8YB</strong>
          </p>
          <p class="text-xs text-slate-500">Trust Switchboard: 020 8970 8000</p>
        </div>
        <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Public Transport</h3>
          <p class="text-xs text-slate-700 leading-relaxed mb-2">
            <strong>Goodmayes Rail Station</strong> (Elizabeth Line) is approx. 1 mile away. <strong>Newbury Park</strong> (Central line) is also nearby.
          </p>
          <p class="text-xs text-slate-600">
            Frequent direct TfL buses stop directly within the hospital grounds: <strong>173, 364, 387, 396</strong>.
          </p>
        </div>
        <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Parking &amp; Facilities</h3>
          <p class="text-xs text-slate-700 leading-relaxed mb-2">
            On-site pay-and-display visitor parking with designated Blue Badge spaces outside the main elective entrance.
          </p>
          <p class="text-xs text-slate-600">
            Drop-off bays, step-free access throughout, outpatient pharmacy, hospital restaurant, and rehabilitation physiotherapy gym.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. FREQUENTLY ASKED QUESTIONS -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Patient Questions
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Frequently Asked Questions — King George Hospital Goodmayes
      </h2>
      <div class="space-y-4 mt-6">
        ${KING_GEORGE_HOSPITAL_FAQS.map(faq => `
          <div class="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 class="text-base font-bold text-slate-900 mb-2">${faq.question}</h3>
            <p class="text-xs text-slate-600 leading-relaxed">${faq.answer}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 7. INTERNAL LINKS -->
  <section class="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
    <h3 class="text-lg font-black text-slate-900 mb-4">
      Explore Related Hospital Locations &amp; Arthroplasty Services
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
      <a href="/queens-hospital-romford" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Queen's Hospital Romford (NHS) &rarr;
      </a>
      <a href="/nuffield-brentwood-hospital" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Nuffield Health Brentwood (Private) &rarr;
      </a>
      <a href="/spire-hartswood-hospital" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Spire Hartswood Hospital (Private) &rarr;
      </a>
      <a href="/revision-hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Revision Hip Replacement &rarr;
      </a>
      <a href="/hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Total Hip Replacement &rarr;
      </a>
      <a href="/knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Total Knee Replacement &rarr;
      </a>
      <a href="/about-mr-shivakumar-shankar" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        About Mr Shivakumar Shankar &rarr;
      </a>
      <a href="/contact" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-[#1B4965] border border-slate-200 transition-colors">
        Contact Practice Secretary &rarr;
      </a>
    </div>
  </section>
`;

// ============================================================================
// PHASE 2B STAGE 6: ESSEX & LONDON HIP, KNEE & REVISION SURGEON DATA & RENDERERS
// ============================================================================

const ESSEX_FAQS = [
  {
    question: "Where does Mr Shankar provide private hip, knee, and revision hip consultations in Essex?",
    answer: "Mr Shivakumar Shankar conducts private outpatient consultations and surgery at two leading private hospitals in Brentwood, Essex: Nuffield Health Brentwood Hospital on Shenfield Road (CM15 8EH) and Spire Hartswood Hospital on Eagle Way in Great Warley (CM13 3LE). Both hospitals offer on-site advanced diagnostic imaging, laminar airflow theatres, dedicated inpatient physiotherapy, and comfortable en-suite private rooms. Both locations are easily accessible from Brentwood, Shenfield, Billericay, Romford, Upminster, Chelmsford, and throughout Essex."
  },
  {
    question: "What is revision hip replacement, and when is it indicated?",
    answer: "Revision total hip replacement is a specialised surgical procedure to remove and replace one or more components of a previously implanted artificial hip that has worn out, become loose, dislocated, or developed complications over time. Common indications include aseptic loosening (breakdown of implant fixation without infection), polyethylene bearing wear and osteolysis (bone loss around the prosthesis), recurrent hip instability or dislocation, periprosthetic fracture following a fall, or persistent joint pain and stiffness requiring comprehensive tertiary assessment."
  },
  {
    question: "How is a painful or loose previous hip replacement evaluated in Essex?",
    answer: "Mr Shankar carries out a rigorous, systematic diagnostic evaluation for patients with painful or failing hip replacements. This begins with a detailed surgical history and comprehensive clinical gait and abductor examination. Investigations include specialized weight-bearing radiographs of the pelvis and hip, blood inflammatory markers (ESR and C-reactive protein) to screen for occult infection, and high-resolution CT scanning with Metal Artefact Reduction Software (MARS) to accurately quantify bone loss and component orientation. Where infection is suspected, image-guided synovial fluid aspiration is performed under sterile conditions."
  },
  {
    question: "What is the difference between robotic surgery at Nuffield Brentwood and computer navigation at Spire Hartswood?",
    answer: "Mr Shankar offers distinct technological capabilities across his Essex private hospital locations: At Nuffield Health Brentwood Hospital, he provides Stryker MAKO robotic-arm assisted total hip, total knee, and partial knee replacements utilizing patient-specific 3D CT pre-operative virtual planning and stereotactic haptic guidance. At Spire Hartswood Hospital, he provides optical computer-navigated total knee replacement using intra-operative infrared tracking without pre-operative CT scans. MAKO robotic surgery is not available at Spire Hartswood; private patients seeking robotic joint replacement consult with Mr Shankar at Nuffield Brentwood."
  },
  {
    question: "Do patients from Essex need a GP referral for a private consultation?",
    answer: "For self-funding patients paying for their own consultations or surgery packages, a GP referral is welcomed but not strictly required—appointments can be arranged directly with Mr Shankar's medical secretary or via hospital online booking portals. For patients utilizing private medical insurance (such as Bupa, AXA Health, Aviva, Vitality, or WPA), insurance providers generally require a formal GP referral letter prior to issuing pre-authorisation for outpatient appointments and diagnostic scans."
  },
  {
    question: "What are the recovery and rehabilitation expectations following revision hip surgery?",
    answer: "Revision hip replacement is inherently more complex than primary hip arthroplasty, and recovery timelines depend heavily on the extent of reconstruction, residual bone quality, and whether bone grafting or structural augments were required. While early mobilising with inpatient physiotherapists begins within 24 hours of surgery, patients often use crutches or walking aids for 6 to 12 weeks to protect implant osseointegration. A bespoke, structured rehabilitation plan is established to rebuild abductor muscle strength, joint mobility, and walking endurance safely."
  }
];

const LONDON_FAQS = [
  {
    question: "How can patients from London and North East London access Mr Shankar's orthopaedic services?",
    answer: "Patients from London and North East London can access Mr Shankar through two established pathways: NHS patients can be referred by their GP via the NHS e-Referral Service (e-RS) to Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), where Mr Shankar consults and operates at Queen's Hospital in Romford and King George Hospital in Goodmayes. Private patients from London can schedule fast-track outpatient consultations and surgery at Mr Shankar's private hospital locations in Brentwood, Essex (Nuffield Health Brentwood and Spire Hartswood), easily reached via the Elizabeth Line."
  },
  {
    question: "Where does Mr Shankar hold private consultations for London patients?",
    answer: "Mr Shankar's private outpatient clinics and surgical lists are held at Nuffield Health Brentwood Hospital (Shenfield Road, CM15 8EH) and Spire Hartswood Hospital (Eagle Way, CM13 3LE) in Brentwood, Essex. Rather than operating out of central London consulting rooms, his practice is centred in Brentwood, providing London patients with high-specification laminar airflow surgical facilities, state-of-the-art robotic and navigated technologies, free on-site parking, and rapid transit from central London stations via the Elizabeth Line."
  },
  {
    question: "What is Mr Shankar's experience and NHS leadership background in North East London?",
    answer: "Mr Shankar has served as a substantive NHS Consultant in Trauma and Orthopaedics at BHRUT since 2017. He has held senior departmental clinical leadership appointments, including Interim & Acting Clinical Lead for Trauma and Orthopaedics, Clinical Director for Trauma and Orthopaedics, and Clinical Lead for Femur Fracture Management. He has led regional elective recovery sprints (including the 'Bones R Us' and HULK-10 initiatives), personally performing high-volume joint replacements and delivering award-winning emergency and elective orthopaedic care for London and Essex communities."
  },
  {
    question: "How are patients with painful or failing hip replacements investigated and treated?",
    answer: "Drawing on his advanced subspecialty fellowship training at the Royal National Orthopaedic Hospital (RNOH), Stanmore—the UK's premier tertiary orthopaedic centre—Mr Shankar provides comprehensive diagnostic investigation for problematic hip replacements. Patients undergo detailed clinical evaluation, serological inflammatory markers (ESR/CRP), specialized low-dose radiographs, and MARS CT imaging. Depending on the underlying cause (aseptic loosening, polyethylene wear, instability, or bone loss), management ranges from targeted non-surgical measures to modular component exchange or full acetabular and femoral revision reconstruction."
  },
  {
    question: "How do London patients travel to Mr Shankar's private hospitals in Brentwood?",
    answer: "Both Brentwood private hospitals offer straightforward travel from London. Via rail, Greater Anglia fast trains reach Shenfield from London Liverpool Street in approximately 23 to 25 minutes, while direct Elizabeth Line services connect central London stations (Paddington, Bond Street, Farringdon, Liverpool Street, Whitechapel, and Stratford) directly to Brentwood and Shenfield stations in approximately 35 to 45 minutes, followed by a brief 5-minute taxi to Nuffield Brentwood or Spire Hartswood. By road, both hospitals are situated just off the M25 (Junction 28 and Junction 29) and the A12, featuring generous, complimentary on-site parking."
  },
  {
    question: "What are the differences between NHS referrals and private consultations with Mr Shankar?",
    answer: "NHS care is provided within BHRUT at Queen's and King George Hospitals, funded by the NHS without direct patient charge, but subject to standard NHS waiting times and e-Referral booking coordination by your GP. Private care at Nuffield Brentwood or Spire Hartswood allows rapid appointment scheduling, consultant-delivered continuity with Mr Shankar personally performing every procedure and follow-up review, private en-suite bedrooms, and transparent self-pay or health insurance funding (Bupa, AXA, Aviva, Vitality, WPA)."
  }
];

const generateRegionalPageJsonLd = ({
  path: pagePath,
  canonical,
  title,
  description,
  regionName,
  areaServed = [],
  faqs = []
}) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.shivakumarshankar.co.uk/#website",
      "url": "https://www.shivakumarshankar.co.uk/",
      "name": "London and Essex Hip and Knee Surgeon",
      "description": "Official medical practice website of Mr Shivakumar Shankar, Consultant Orthopaedic Hip & Knee Surgeon.",
      "inLanguage": "en-GB",
      "publisher": {
        "@id": "https://www.shivakumarshankar.co.uk/#physician"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumbs`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.shivakumarshankar.co.uk/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Hospitals & Locations",
          "item": "https://www.shivakumarshankar.co.uk/hospitals-locations"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": regionName,
          "item": canonical
        }
      ]
    },
    getPhysicianEntity(STANDARD_HOSPITAL_LOCATIONS),
    {
      "@type": "MedicalWebPage",
      "@id": `${canonical}#webpage`,
      "url": canonical,
      "name": title,
      "description": description,
      "inLanguage": "en-GB",
      "isPartOf": {
        "@id": "https://www.shivakumarshankar.co.uk/#website"
      },
      "breadcrumb": {
        "@id": `${canonical}#breadcrumbs`
      },
      "primaryImageOfPage": {
        "@id": "https://www.shivakumarshankar.co.uk/profile.jpg#primaryimage"
      },
      "about": [
        { "@id": "https://www.shivakumarshankar.co.uk/#physician" }
      ],
      "mainEntity": {
        "@id": "https://www.shivakumarshankar.co.uk/#physician"
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${canonical}#faqpage`,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
});

const renderRegionalPageShell = (path, badge, h1, lead, contentHtml, regionName) => `
  ${renderHeader(path)}
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans text-slate-800">
    <nav aria-label="Breadcrumb" class="text-xs text-slate-500 mb-6 flex items-center gap-1.5 flex-wrap">
      <a href="/" class="hover:underline hover:text-[#1B4965]">Home</a>
      <span>&gt;</span>
      <a href="/hospitals-locations" class="hover:underline hover:text-[#1B4965]">Hospitals &amp; Locations</a>
      <span>&gt;</span>
      <span class="font-bold text-slate-800">${regionName}</span>
    </nav>
    <section class="mb-10">
      <span class="inline-block px-3.5 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3.5 border border-slate-200">
        ${badge}
      </span>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
        ${h1}
      </h1>
      <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
        ${lead}
      </p>
    </section>
    ${contentHtml}
  </main>
  ${renderFooter()}
`;

const renderEssexPageContent = () => `
  <!-- QUICK CONTACT & LOCATIONS ACTION BAR -->
  <div class="mb-10 p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <span class="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
        Consultant Hip, Knee &amp; Revision Arthroplasty in Essex
      </span>
      <h2 class="text-xl font-black text-slate-900">
        Private Consultations &amp; Surgery in Brentwood, Essex
      </h2>
      <p class="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
        Mr Shankar consults privately at <strong>Nuffield Health Brentwood Hospital</strong> (Shenfield Road: 01277 695 695) and <strong>Spire Hartswood Hospital</strong> (Eagle Way: 01277 266 766). Practice Secretary (Remya Rexlin): <strong>07587 765888</strong>.
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-3 shrink-0">
      <a
        href="/book-consultation"
        class="bg-[#E8A24C] hover:bg-[#D99136] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
      >
        Book Private Consultation
      </a>
      <a
        href="/contact"
        class="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-lg text-xs font-bold transition-colors"
      >
        Contact Secretary
      </a>
    </div>
  </div>

  <!-- KEY CLINICAL METRICS GRID -->
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">High-Volume Experience</div>
      <div class="text-base font-black text-slate-900 mb-1">3,000+ Joint Surgeries</div>
      <p class="text-xs text-slate-600 leading-relaxed">Extensive career arthroplasty caseload across primary total hip, knee, and complex revision reconstruction.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-emerald-700 tracking-wider mb-1">MAKO Robotic Arthroplasty</div>
      <div class="text-base font-black text-slate-900 mb-1">100+ Robotic Series</div>
      <p class="text-xs text-slate-600 leading-relaxed">Personal surgical series of over 100 MAKO robotic-assisted procedures at Nuffield Health Brentwood.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Computer Navigation</div>
      <div class="text-base font-black text-slate-900 mb-1">Spire Hartswood Centre</div>
      <p class="text-xs text-slate-600 leading-relaxed">Optical infrared navigation for knee replacement avoiding intramedullary rods and separate pre-operative planning CT scans.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-purple-700 tracking-wider mb-1">Tertiary Hip Expertise</div>
      <div class="text-base font-black text-slate-900 mb-1">Revision Hip Arthroplasty</div>
      <p class="text-xs text-slate-600 leading-relaxed">Fellowship-trained at RNOH Stanmore for the investigation and reconstruction of failing hip replacements.</p>
    </div>
  </section>

  <!-- 1. SPECIALIST PRACTICE IN ESSEX -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Regional Clinical Practice
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Specialist Hip &amp; Knee Surgery for Patients Across Essex
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shivakumar Shankar provides consultant-delivered orthopaedic hip, knee, and revision hip care for patients throughout Essex. His private practice is based in Brentwood at Nuffield Health Brentwood Hospital on Shenfield Road and Spire Hartswood Hospital on Eagle Way in Great Warley. These locations provide rapid road and rail access for patients attending from Brentwood, Shenfield, Billericay, Romford, Upminster, Chelmsford, Basildon, Epping, and wider Essex communities.
      </p>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Holding substantive NHS consultant appointments at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT)—operating at Queen's Hospital in Romford and King George Hospital in Goodmayes—Mr Shankar provides seasoned clinical acumen combined with advanced joint reconstruction technology. Whether assessing primary hip and knee osteoarthritis or conducting detailed investigations for patients with painful, failing, or unstable previous joint replacements, care is delivered with strict adherence to evidence-based practice and personalized patient focus.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-700">
        <div class="p-3 bg-slate-50 rounded-lg">
          <strong class="block text-slate-900 mb-0.5">GMC Specialist Registration</strong>
          GMC Reference 6038414 &bull; Specialist Register in Trauma &amp; Orthopaedics since 2016.
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <strong class="block text-slate-900 mb-0.5">Dual UK Fellowships</strong>
          RNOH Stanmore (Lower Limb Arthroplasty &amp; Revision) and Golden Jubilee Glasgow (Robotics &amp; CAOS).
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <strong class="block text-slate-900 mb-0.5">Advanced Surgical Diploma</strong>
          Postgraduate Diploma in Principles of Computer and Robot-Assisted Orthopaedic Surgery.
        </div>
      </div>
    </div>
  </section>

  <!-- 2. PRIMARY HIP REPLACEMENT IN ESSEX -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Primary Hip Arthroplasty
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Primary Total Hip Replacement Surgery in Essex
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Hip replacement is one of the most successful surgical interventions in modern healthcare, relieving severe groin, buttock, and thigh pain caused by end-stage hip osteoarthritis, avascular necrosis, or inflammatory joint disease. Mr Shankar utilizes contemporary surgical approaches and modern implant biomaterials—such as ceramic articulation and highly cross-linked polyethylene bearings—engineered for exceptional durability and natural joint biomechanics.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-700 mb-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
          <strong class="text-slate-900 block text-sm">Muscle-Sparing Approaches</strong>
          Trained in the direct anterior approach and the true muscle-sparing Rottinger anterolateral approach (CABPS Centre, Haguenau, France), working between natural muscle planes without detaching the key abductor tendons.
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
          <strong class="text-slate-900 block text-sm">MAKO Robotic-Assisted Hip Arthroplasty</strong>
          Available at Nuffield Health Brentwood Hospital, combining pre-operative 3D CT virtual planning with stereotactic robotic haptic guidance for precise acetabular cup version, inclination, and leg length restoration.
        </div>
      </div>
      <a href="/hip-replacement" class="text-xs font-bold text-[#1B4965] hover:underline">
        Explore Total Hip Replacement Techniques &rarr;
      </a>
    </div>
  </section>

  <!-- 3. DEDICATED REVISION HIP REPLACEMENT SECTION -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border-2 border-purple-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-3 py-1 rounded-full mb-3 inline-block border border-purple-200">
        Specialist Revision Arthroplasty
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Revision Hip Replacement Surgery in Essex — Mr Shivakumar Shankar
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Revision total hip replacement is a complex surgical procedure that involves removing and replacing one or more components of a previously implanted artificial hip joint. While modern primary hip replacements routinely achieve 15- to 20-year survival rates exceeding 90% in UK National Joint Registry data, artificial joints can fail over time, experience mechanical wear, or develop complications that necessitate specialist revision surgery.
      </p>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Trained at the world-renowned <strong>Royal National Orthopaedic Hospital (RNOH), Stanmore</strong>—the UK's premier tertiary orthopaedic centre for complex primary and revision joint arthroplasty—Mr Shivakumar Shankar provides comprehensive clinical evaluation, investigation, and revision surgical planning for patients across Essex presenting with problematic, painful, or failing previous hip replacements.
      </p>

      <div class="p-5 bg-purple-50/50 rounded-2xl border border-purple-200 mb-6 space-y-3 text-xs sm:text-sm text-slate-700">
        <h3 class="text-sm sm:text-base font-bold text-slate-900">
          Revision Hip Replacement — Scope of Practice Across Private and NHS Settings in Essex
        </h3>
        <p class="leading-relaxed">
          Mr Shankar performs revision hip replacement surgery across both private and NHS hospital settings in Essex, ensuring patients receive care tailored to case complexity:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div class="p-3.5 bg-white rounded-xl border border-purple-100 space-y-1">
            <strong class="text-slate-900 block text-xs">Private Hospital Practice (Nuffield &amp; Spire Brentwood)</strong>
            Revision hip procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar following individual clinical assessment and appropriate pre-operative investigations. These may include selected revision hip replacement procedures for implant loosening, wear, instability or other mechanical problems, depending on the complexity of the case and suitability for the hospital.
          </div>
          <div class="p-3.5 bg-white rounded-xl border border-purple-100 space-y-1">
            <strong class="text-slate-900 block text-xs">NHS Hospital Practice (BHRUT)</strong>
            Mr Shankar also undertakes complex revision hip replacement surgery and complex hip reconstruction within his NHS hospital practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). Complex revision procedures are managed within the appropriate NHS surgical setting, with access to specialist multidisciplinary assessment, complex reconstruction resources and perioperative support as clinically required.
          </div>
        </div>
        <p class="text-[11px] text-slate-500 italic pt-1">
          The decision regarding the appropriate hospital and surgical pathway depends on the complexity of the revision, patient comorbidities, anticipated reconstructive requirements and available hospital resources.
        </p>
      </div>

      <div class="space-y-6 pt-2">
        <div>
          <h3 class="text-base sm:text-lg font-bold text-slate-900 mb-2">
            Why Does a Hip Replacement Require Revision Surgery?
          </h3>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
            A previously replaced hip may require revision for several identifiable mechanical, biological, or anatomical reasons:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Aseptic Loosening</strong>
              Over years of repetitive mechanical loading, the biological or cement bond between the implant and bone can break down, causing the acetabular cup or femoral stem to loosen, shift position, and generate weight-bearing pain.
            </div>
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Polyethylene Wear &amp; Osteolysis</strong>
              Microscopic wear particles generated from older polyethylene liners trigger a macrophage immune response that resorbs surrounding bone (osteolysis), leading to progressive bone loss and implant instability.
            </div>
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Instability &amp; Recurrent Dislocation</strong>
              Implant malposition, soft-tissue laxity, abductor muscle deficiency, or component impingement can lead to the femoral head dislodging from the acetabular cup, requiring surgical stabilization.
            </div>
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Periprosthetic Fracture</strong>
              A fall or low-energy trauma can cause the bone around the femoral stem or acetabular component to fracture, necessitating internal fracture fixation and revision of loose implants.
            </div>
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Suspected Prosthetic Joint Infection</strong>
              Bacterial colonization of the prosthetic surfaces requires meticulous exclusion through serology and sterile joint aspiration before any mechanical revision is undertaken.
            </div>
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Persistent Unexplained Pain</strong>
              Detailed tertiary diagnostic workup to differentiate true prosthetic failure from referred lumbar spine pathology, psoas tendon impingement, or occult loosening.
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-base sm:text-lg font-bold text-slate-900 mb-2">
            Assessment &amp; Investigation of the Problematic Hip Replacement
          </h3>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
            Evaluating a painful hip replacement requires a structured, multi-modality diagnostic sequence:
          </p>
          <ul class="text-xs sm:text-sm text-slate-700 space-y-2 mb-4">
            <li class="flex items-start gap-2">
              <span class="text-purple-700 font-bold">&bull;</span>
              <span><strong>Detailed Clinical History &amp; Gait Assessment:</strong> Identifying the precise onset, location (groin, buttock, or thigh), start-up pain upon standing, and checking abductor muscle strength (Trendelenburg sign).</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-700 font-bold">&bull;</span>
              <span><strong>Serological Inflammatory Markers:</strong> Routine blood testing including Erythrocyte Sedimentation Rate (ESR) and C-Reactive Protein (CRP) to screen for occult infection.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-700 font-bold">&bull;</span>
              <span><strong>Specialized Plain Radiographs:</strong> Comparing serial anteroposterior pelvis, shoot-through lateral hip, and Judet views to detect subtle component migration, radiolucent lines, or osteolytic cavitary bone loss.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-700 font-bold">&bull;</span>
              <span><strong>MARS Computed Tomography (CT):</strong> High-resolution CT scanning with Metal Artefact Reduction Software (MARS) to accurately map three-dimensional bone stock deficits and component rotation.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-700 font-bold">&bull;</span>
              <span><strong>Image-Guided Diagnostic Aspiration:</strong> Performed under sterile ultrasound or fluoroscopic control when infection cannot be definitively excluded, sending synovial fluid for white cell count, differential, and extended microbiological culture.</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-base sm:text-lg font-bold text-slate-900 mb-2">
            Surgical Reconstruction Options &amp; Managing Bone Loss
          </h3>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
            Revision hip surgery is tailored to the specific failure mechanism and the extent of bone loss:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Isolated Component / Modular Exchange</strong>
              When the well-fixed metal cup and stem remain securely osseointegrated, revision may be limited to exchanging a worn polyethylene liner and modular femoral head, minimizing operative trauma.
            </div>
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Acetabular Cup Reconstruction</strong>
              Loose acetabular components are removed and reconstructed using highly porous biological trabecular metal cups, multi-hole revision shells, structural titanium augments, or bone grafting to restore the anatomical hip centre of rotation.
            </div>
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Femoral Stem Revision</strong>
              Loose or fractured femoral stems are managed using modular or monobloc uncemented tapered fluted titanium revision stems that achieve distal scratch-fit diaphyseal fixation below the area of proximal bone loss.
            </div>
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Careful Case Triaging &amp; Governance</strong>
              Revision hip arthroplasty requires meticulous clinical selection. Complex two-stage reconstructions for multi-resistant infections or massive pelvic discontinuity are multidisciplinary cases triaged with dedicated tertiary orthopaedic input.
            </div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs sm:text-sm text-purple-950 space-y-1.5">
          <strong class="block text-sm">Risks, Complexity &amp; Recovery Expectations Following Revision Surgery</strong>
          <p class="leading-relaxed">
            Patients should be aware that revision total hip replacement is a substantially more demanding operation than a primary hip replacement. Because previous implants must be removed and scar tissue mobilized, surgery carries higher risks of bleeding, nerve irritation, fracture, and dislocation. Hospital stays and recovery timelines are typically longer, often requiring protected weight-bearing with crutches for 6 to 12 weeks to safeguard implant fixation and bone healing.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. TOTAL & PARTIAL KNEE SURGERY -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Knee Arthroplasty
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Total &amp; Partial (Unicompartmental) Knee Replacement in Essex
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shankar offers a spectrum of knee preservation, resurfacing, and reconstruction options tailored to the exact pattern of osteoarthritis:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-700 mb-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
          <strong class="text-slate-900 block text-sm">Total Knee Replacement</strong>
          Conventional, computer-navigated, and MAKO robotic-assisted total knee arthroplasty designed to restore coronal mechanical alignment, relieve chronic weight-bearing pain, and correct severe bow-leg or knock-knee deformities.
          <a href="/knee-replacement" class="text-xs font-bold text-[#1B4965] hover:underline block pt-1">
            Explore Total Knee Surgery &rarr;
          </a>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
          <strong class="text-slate-900 block text-sm">Partial (Unicompartmental) Knee Replacement</strong>
          Targeted resurfacing of isolated medial or lateral compartment osteoarthritis, preserving the anterior and posterior cruciate ligaments (ACL and PCL) to deliver natural joint kinematics and accelerated functional recovery.
          <a href="/partial-knee-replacement" class="text-xs font-bold text-[#1B4965] hover:underline block pt-1">
            Explore Partial Knee Resurfacing &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. HOSPITAL TECHNOLOGY COMPARISON IN BRENTWOOD -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Private Hospital Facilities
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Private Practice Hospitals &amp; Surgical Technology in Brentwood
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
        Mr Shankar consults and operates across two premier private hospitals in Brentwood, ensuring clear technology mapping for patients and GPs:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-xs font-bold uppercase text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">MAKO Robotic Centre</span>
            <span class="text-xs text-slate-500 font-semibold">Shenfield Road</span>
          </div>
          <h3 class="text-base font-bold text-slate-900">Nuffield Health Brentwood Hospital</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Shenfield Road, Brentwood, Essex CM15 8EH. Tel: <strong>01277 695 695</strong> (Appointments: <strong>01277 886 737</strong>).
          </p>
          <ul class="text-xs text-slate-700 space-y-1">
            <li>&bull; MAKO Robotic-assisted Total Hip, Total Knee &amp; Partial Knee surgery</li>
            <li>&bull; On-site low-dose 3D CT scanner for pre-operative virtual modeling</li>
            <li>&bull; Conventional joint replacement &amp; muscle-sparing approaches</li>
            <li>&bull; 1 mile from Shenfield Station (Elizabeth Line); free on-site parking</li>
          </ul>
          <a href="/nuffield-brentwood-hospital" class="text-xs font-bold text-emerald-700 hover:underline block pt-1">
            View Nuffield Health Brentwood Details &rarr;
          </a>
        </div>

        <div class="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-xs font-bold uppercase text-[#1B4965] bg-[#EAF1F6] px-2.5 py-0.5 rounded border border-slate-200">Optical Navigation Centre</span>
            <span class="text-xs text-slate-500 font-semibold">Eagle Way, Great Warley</span>
          </div>
          <h3 class="text-base font-bold text-slate-900">Spire Hartswood Hospital</h3>
          <p class="text-xs text-slate-600 leading-relaxed">
            Eagle Way, Great Warley, Brentwood, Essex CM13 3LE. Tel: <strong>01277 266 766</strong> (Appointments: <strong>01277 266 777</strong>).
          </p>
          <ul class="text-xs text-slate-700 space-y-1">
            <li>&bull; Optical infrared computer-navigated knee replacement</li>
            <li>&bull; Avoids femoral intramedullary rods; requires no pre-operative CT scan</li>
            <li>&bull; Conventional total hip replacement &amp; partial knee surgery</li>
            <li>&bull; <em>Note: MAKO robotic surgery is not offered at Spire Hartswood</em></li>
          </ul>
          <a href="/spire-hartswood-hospital" class="text-xs font-bold text-[#1B4965] hover:underline block pt-1">
            View Spire Hartswood Details &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. BOOKING PATHWAYS -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Appointments &amp; Funding
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Private Consultations, Insured Care &amp; Fixed-Price Self-Funding
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shankar warmly welcomes both privately insured and self-funding patients across Essex:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-700 mb-6">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <strong class="text-slate-900 block text-sm">Private Medical Insurance</strong>
          Fee-assured with all major UK insurers: Bupa, AXA Health, Aviva, Vitality, WPA, Cigna, Healix, Police Mutual. Most insurers require a GP referral letter prior to issuing authorization codes.
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <strong class="text-slate-900 block text-sm">Self-Funding Fixed Prices</strong>
          Initial Consultation: £250 &bull; Follow-Up Review: £200. Transparent fixed-price surgery packages bundle surgeon fee, anaesthetist fee, theatre time, implants, hospital stay, and physiotherapy.
        </div>
      </div>
      <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span class="text-xs font-bold text-slate-900 block">Contact Practice Secretary Remya Rexlin:</span>
          <span class="text-xs text-slate-600">Telephone <strong>07587 765888</strong> / <strong>020 3523 0621</strong> &bull; Email: <strong>hip.knee_specialist@yahoo.com</strong></span>
        </div>
        <a
          href="/book-consultation"
          class="bg-[#1B4965] hover:bg-[#13364B] text-white px-4 py-2 rounded-lg text-xs font-bold shrink-0 transition-colors"
        >
          Book Consultation &rarr;
        </a>
      </div>
    </div>
  </section>

  <!-- 7. FREQUENTLY ASKED QUESTIONS -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-12">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Patient Guidance
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Frequently Asked Questions: Hip, Knee &amp; Revision Surgery in Essex
      </h2>

      <div class="space-y-4">
        ${ESSEX_FAQS.map((faq, i) => `
          <div class="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">
              ${faq.question}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ${faq.answer}
            </p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 8. CONTEXTUAL INTERNAL LINKS -->
  <section class="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 mb-8">
    <h3 class="text-lg font-black text-slate-900 mb-4">
      Explore Related Specialist Procedures &amp; Practice Locations
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
      <a href="/hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Total Hip Replacement &rarr;
      </a>
      <a href="/knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Total Knee Replacement &rarr;
      </a>
      <a href="/robotic-hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        MAKO Robotic Hip Replacement &rarr;
      </a>
      <a href="/robotic-knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        MAKO Robotic Knee Replacement &rarr;
      </a>
      <a href="/revision-hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Revision Hip Replacement &rarr;
      </a>
      <a href="/partial-knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Partial Knee Replacement &rarr;
      </a>
      <a href="/computer-assisted-knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Computer-Navigated Knee Surgery &rarr;
      </a>
      <a href="/minimally-invasive-hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Minimally Invasive Hip Replacement &rarr;
      </a>
      <a href="/nuffield-brentwood-hospital" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Nuffield Health Brentwood &rarr;
      </a>
      <a href="/spire-hartswood-hospital" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Spire Hartswood Hospital &rarr;
      </a>
      <a href="/london-hip-knee-surgeon" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        London Hip &amp; Knee Surgeon &rarr;
      </a>
      <a href="/book-consultation" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-[#1B4965] border border-slate-200 transition-colors">
        Book Private Consultation &rarr;
      </a>
    </div>
  </section>
`;

const renderLondonPageContent = () => `
  <!-- QUICK CONTACT & LOCATIONS ACTION BAR -->
  <div class="mb-10 p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <span class="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
        London &amp; North East London Orthopaedic Arthroplasty
      </span>
      <h2 class="text-xl font-black text-slate-900">
        Substantive NHS Practice &amp; Private Consultations in Brentwood
      </h2>
      <p class="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
        NHS Consultant at BHRUT (Queen's Hospital Romford &amp; King George Hospital Goodmayes). Private consultations and surgery at Nuffield Health Brentwood and Spire Hartswood in Brentwood, Essex, easily reached via the Elizabeth Line from Central London.
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-3 shrink-0">
      <a
        href="/book-consultation"
        class="bg-[#E8A24C] hover:bg-[#D99136] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
      >
        Book Private Consultation
      </a>
      <a
        href="/contact"
        class="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-lg text-xs font-bold transition-colors"
      >
        Contact Secretary
      </a>
    </div>
  </div>

  <!-- KEY CLINICAL METRICS GRID -->
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">NHS Clinical Leadership</div>
      <div class="text-base font-black text-slate-900 mb-1">BHRUT NHS Consultant</div>
      <p class="text-xs text-slate-600 leading-relaxed">Substantive Consultant at Queen's and King George Hospitals; former Interim &amp; Acting Clinical Lead for T&amp;O.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-purple-700 tracking-wider mb-1">Revision Arthroplasty</div>
      <div class="text-base font-black text-slate-900 mb-1">RNOH Stanmore Trained</div>
      <p class="text-xs text-slate-600 leading-relaxed">Subspecialty fellowship training in primary and complex revision hip and knee surgery at the UK's leading orthopaedic centre.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-emerald-700 tracking-wider mb-1">Robotic &amp; Navigated Care</div>
      <div class="text-base font-black text-slate-900 mb-1">CAOS Diploma &amp; MAKO</div>
      <p class="text-xs text-slate-600 leading-relaxed">Fellowship-trained at Golden Jubilee Hospital, Glasgow; personal surgical series of 100+ MAKO robotic joint replacements.</p>
    </div>
    <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div class="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">London Transport Link</div>
      <div class="text-base font-black text-slate-900 mb-1">Rail &amp; Elizabeth Line</div>
      <p class="text-xs text-slate-600 leading-relaxed">Direct rail from Liverpool Street (23–25 mins via Greater Anglia; 35–45 mins via Elizabeth Line) to Shenfield and Brentwood.</p>
    </div>
  </section>

  <!-- 1. PROFESSIONAL BACKGROUND & NHS LEADERSHIP -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        North East London Leadership
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Consultant Practice &amp; NHS Clinical Leadership in North East London
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shivakumar Shankar is a Consultant Orthopaedic Surgeon specialising in hip and knee reconstruction, joint preservation, and complex revision surgery. Holding a substantive NHS Consultant appointment at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT) since 2017, Mr Shankar serves a diverse population across Havering, Redbridge, Barking &amp; Dagenham, and the wider North East London health economy.
      </p>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Throughout his tenure at Queen's Hospital in Romford (a major acute regional trauma centre) and King George Hospital in Goodmayes (the high-volume elective orthopaedic surgical centre), Mr Shankar has held senior clinical leadership positions. He has served as Interim &amp; Acting Clinical Lead for Trauma and Orthopaedics, Clinical Director for Trauma and Orthopaedics, and Clinical Lead for Femur Fracture Management. He has spearheaded critical waiting-list reduction initiatives—including the landmark 'Bones R Us' and HULK-10 high-efficiency joint replacement programmes—expanding surgical access and maintaining exceptional surgical governance standards.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-700">
        <div class="p-3 bg-slate-50 rounded-lg">
          <strong class="block text-slate-900 mb-0.5">Queen's Hospital Romford</strong>
          Regional acute trauma and joint reconstruction centre in Romford, Greater London (BHRUT).
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <strong class="block text-slate-900 mb-0.5">King George Hospital Goodmayes</strong>
          High-volume elective orthopaedic surgery hub with dedicated clean-air laminar flow theatres.
        </div>
        <div class="p-3 bg-slate-50 rounded-lg">
          <strong class="block text-slate-900 mb-0.5">NHS Waiting-List Innovator</strong>
          Led weekend super-clinics assessing 260 outpatients in 2 days and multi-theatre arthroplasty sprints.
        </div>
      </div>
    </div>
  </section>

  <!-- 2. TERTIARY FELLOWSHIPS & CREDENTIALS -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Surgical Credentials &amp; Training
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Tertiary Fellowship Training &amp; Specialist Arthroplasty Credentials
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shankar's surgical expertise is built upon formal higher surgical training within the London Deanery and subspecialist arthroplasty fellowships at premier UK and international institutions:
      </p>
      <div class="space-y-3 text-xs sm:text-sm text-slate-700 mb-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Royal National Orthopaedic Hospital (RNOH), Stanmore</strong>
          Completed a dedicated Lower Limb Arthroplasty and Revision Fellowship shared between RNOH Stanmore (the UK's pre-eminent tertiary orthopaedic specialist hospital) and St Albans Hospital, gaining extensive experience in primary and complex revision hip and knee reconstructions.
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Golden Jubilee National Hospital, Glasgow</strong>
          Completed a specialist subspecialty fellowship in computer-assisted navigation and robotic hip and knee arthroplasty, earning the formal Postgraduate Diploma in Computer and Robot-Assisted Orthopaedic Surgery.
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Academic &amp; Postgraduate Qualifications</strong>
          Master of Science (MSc) in Trauma &amp; Orthopaedics from University College London (UCL), Fellow of the Royal College of Surgeons of Edinburgh (FRCSEd Tr &amp; Orth), and Certificate of Completion of Training (CCT awarded October 2016).
        </div>
      </div>
    </div>
  </section>

  <!-- 3. DEDICATED REVISION HIP REPLACEMENT SECTION -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border-2 border-purple-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-3 py-1 rounded-full mb-3 inline-block border border-purple-200">
        Complex Hip Arthroplasty
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Revision Hip Replacement Surgeon for London and North East London Patients
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        For patients living in London and North East London who are experiencing ongoing pain, instability, or mechanical issues with an existing artificial hip joint, specialized tertiary-level assessment is essential. A hip replacement that has performed reliably for many years can deteriorate, loose fixation, or suffer bone loss around the implants.
      </p>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shivakumar Shankar provides thorough, systematic evaluation for patients with problematic previous hip replacements, utilizing the diagnostic protocols and surgical techniques honed during his subspecialist fellowship at RNOH Stanmore:
      </p>

      <div class="p-5 bg-purple-50/50 rounded-2xl border border-purple-200 mb-6 space-y-3 text-xs sm:text-sm text-slate-700">
        <h3 class="text-sm sm:text-base font-bold text-slate-900">
          Complex Revision Hip Surgery Across NHS and Private Practice for London Patients
        </h3>
        <p class="leading-relaxed">
          Mr Shankar delivers revision hip replacement surgery across complementary practice settings, matching each patient to the appropriate clinical environment:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div class="p-3.5 bg-white rounded-xl border border-purple-100 space-y-1">
            <strong class="text-slate-900 block text-xs">Complex NHS Revision Surgery (BHRUT)</strong>
            Mr Shankar undertakes complex revision hip replacement surgery and complex hip reconstruction within his NHS hospital practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). Complex revision procedures are managed within the appropriate NHS surgical setting, with access to specialist multidisciplinary assessment, complex reconstruction resources and perioperative support as clinically required.
          </div>
          <div class="p-3.5 bg-white rounded-xl border border-purple-100 space-y-1">
            <strong class="text-slate-900 block text-xs">Private Hospital Practice (Brentwood)</strong>
            For private patients from London, selected revision hip replacement procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar at Nuffield Health Brentwood Hospital and Spire Hartswood Hospital following individual clinical assessment and appropriate pre-operative investigations.
          </div>
        </div>
        <p class="text-[11px] text-slate-500 italic pt-1">
          The decision regarding the appropriate hospital and surgical pathway depends on the complexity of the revision, patient comorbidities, anticipated reconstructive requirements and available hospital resources.
        </p>
      </div>

      <div class="space-y-6 pt-2">
        <div>
          <h3 class="text-base sm:text-lg font-bold text-slate-900 mb-2">
            Investigating the Problematic Hip Replacement
          </h3>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
            Patients often present with groin ache, pain on initiating walking, thigh discomfort, limb length discrepancy, or sudden giving way. Mr Shankar conducts a multi-step investigation:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Differentiating Pain Sources</strong>
              Distinguishing prosthetic failure from referred lumbar spine nerve root irritation, trochanteric bursitis, or psoas tendon impingement against an anteriorly prominent cup.
            </div>
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Aseptic Loosening &amp; Osteolysis</strong>
              Serial radiographs and MARS CT to identify implant migration, fibrous tissue formation at bone-implant interfaces, and cavitary bone loss caused by polyethylene wear debris.
            </div>
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Excluding Occult Infection</strong>
              Mandatory inflammatory blood serology (ESR, CRP) and, where indicated, ultrasound-guided synovial fluid aspiration sent for extended microbiological culture before contemplating mechanical revision.
            </div>
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong class="text-slate-900 block mb-1">Instability &amp; Dislocation Risk</strong>
              Assessing acetabular cup version, inclination, femoral offset, and abductor muscle integrity in patients experiencing recurrent subluxation or dislocation episodes.
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-base sm:text-lg font-bold text-slate-900 mb-2">
            Reconstructive Surgical Strategies
          </h3>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
            Surgical revision is customized to the specific structural deficits:
          </p>
          <ul class="text-xs sm:text-sm text-slate-700 space-y-2 mb-4">
            <li class="flex items-start gap-2">
              <span class="text-purple-700 font-bold">&bull;</span>
              <span><strong>Modular Liner &amp; Head Exchange:</strong> In patients with isolated bearing wear and well-integrated, undamaged metal components, replacing the polyethylene liner and modular head can restore stability without removing bone-fixed shells.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-700 font-bold">&bull;</span>
              <span><strong>Acetabular Revision:</strong> Removing loose cups and reconstructing acetabular bone stock using highly porous titanium or trabecular metal cups, screw augmentation, and modular structural wedges.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-700 font-bold">&bull;</span>
              <span><strong>Femoral Stem Revision:</strong> Removing loose or fractured femoral stems and achieving stable diaphyseal fixation using uncemented tapered fluted modular or monobloc titanium revision stems.</span>
            </li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs sm:text-sm text-purple-950">
          <strong>Clinical Note on Surgical Complexity:</strong> Revision hip surgery involves greater operative exposure, longer surgical durations, and tailored post-operative weight-bearing precautions compared to primary hip replacement. Cases requiring complex two-stage management for multi-organism infection or extensive pelvic reconstruction are managed with multidisciplinary team coordination.
        </div>
      </div>
    </div>
  </section>

  <!-- 4. PRIMARY HIP & KNEE REPLACEMENT -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Primary Arthroplasty
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Primary Hip &amp; Knee Surgery: Conventional, Navigated &amp; Robotic
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shankar provides comprehensive primary joint reconstruction for London patients:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700 mb-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Primary Total Hip Replacement</strong>
          Muscle-sparing direct anterior and Rottinger approaches, durable ceramic bearings, and precision anatomical offset restoration.
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Total Knee Replacement</strong>
          Conventional and computer-navigated arthroplasty achieving neutral coronal alignment and dynamic ligament balancing.
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1">Partial Knee Resurfacing</strong>
          Medial or lateral unicompartmental knee replacement preserving native cruciate ligaments and native knee proprioception.
        </div>
      </div>
      <div class="flex flex-wrap gap-3 pt-2">
        <a href="/hip-replacement" class="text-xs font-bold text-[#1B4965] hover:underline">Hip Replacement &rarr;</a>
        <a href="/knee-replacement" class="text-xs font-bold text-[#1B4965] hover:underline">Knee Replacement &rarr;</a>
        <a href="/partial-knee-replacement" class="text-xs font-bold text-[#1B4965] hover:underline">Partial Knee &rarr;</a>
        <a href="/robotic-hip-replacement" class="text-xs font-bold text-[#1B4965] hover:underline">Robotic Hip &rarr;</a>
      </div>
    </div>
  </section>

  <!-- 5. ACCESSING BRENTWOOD CLINICS FROM LONDON -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Travel &amp; Practice Locations
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Accessing Private Consultations &amp; Surgery from London
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shankar's private surgical practice is centred at two premier private hospitals in Brentwood, Essex—chosen specifically for their modern laminar airflow operating theatres, on-site 3D CT and MRI diagnostics, advanced robotic technology, and tranquil recovery environment. <strong>Mr Shankar does not operate out of central London consulting rooms</strong>; instead, London patients travel to Brentwood, which is exceptionally well-connected:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-700 mb-6">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1 flex items-center gap-1.5">
            <Train size={15} className="text-[#1B4965]" />
            Rail &amp; Elizabeth Line Transit
          </strong>
          <p class="leading-relaxed mb-2">
            Frequent train services run directly from Central London stations:
          </p>
          <ul class="space-y-1 text-slate-600">
            <li>&bull; <strong>Greater Anglia Fast Trains (from Liverpool Street):</strong> ~23–25 mins direct to Shenfield</li>
            <li>&bull; <strong>Elizabeth Line (from Liverpool Street / Stratford):</strong> ~35–45 mins to Shenfield / ~38 mins to Brentwood</li>
            <li>&bull; <strong>From Paddington / Farringdon / Tottenham Court Road:</strong> Direct Elizabeth Line through-trains</li>
            <li>&bull; Shenfield Station is approx. 1 mile from Nuffield Brentwood (5 mins taxi); Brentwood Station is approx. 5 mins taxi to Spire Hartswood.</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <strong class="text-slate-900 block text-sm mb-1 flex items-center gap-1.5">
            <Car size={15} className="text-[#1B4965]" />
            Road Access &amp; Free On-Site Parking
          </strong>
          <p class="leading-relaxed mb-2">
            Both hospitals are situated immediately accessible from major road arteries:
          </p>
          <ul class="space-y-1 text-slate-600">
            <li>&bull; Direct access via the <strong>A12</strong> and <strong>M25 (Junction 28 &amp; 29)</strong></li>
            <li>&bull; Approx. 20–30 mins driving from Romford, Ilford, and North East London</li>
            <li>&bull; <strong>Free On-Site Parking:</strong> Both Spire Hartswood and Nuffield Brentwood provide complimentary patient parking with accessible bays.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. NHS VS PRIVATE REFERRAL PATHWAYS -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-10">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Referral Pathways
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
        Understanding Referral Pathways: NHS Care vs Private Consultation
      </h2>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
        Mr Shankar maintains distinct NHS and private clinical services to serve patients according to their needs and preferences:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-700 mb-6">
        <div class="p-4 rounded-xl bg-sky-50 border border-sky-200 space-y-2">
          <strong class="text-slate-900 block text-sm">NHS Referral Pathway (BHRUT)</strong>
          <p class="text-slate-600 leading-relaxed">
            NHS patients are assessed and treated within Barking, Havering and Redbridge University Hospitals NHS Trust at Queen's Hospital in Romford or King George Hospital in Goodmayes. Referrals must be initiated by your NHS GP through the NHS e-Referral Service (e-RS) addressed to the Orthopaedic Department.
          </p>
        </div>

        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <strong class="text-slate-900 block text-sm">Private Consultation Pathway (Brentwood)</strong>
          <p class="text-slate-600 leading-relaxed">
            Private consultations at Nuffield Health Brentwood or Spire Hartswood provide rapid access without NHS waiting list delays. Patients benefit from consultant-delivered continuity with Mr Shankar personally performing your surgery. Welcomes insured (Bupa, AXA, Aviva, Vitality, WPA) and self-funding patients (£250 initial consultation).
          </p>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span class="text-xs font-bold text-slate-900 block">Private Medical Secretary (Remya Rexlin):</span>
          <span class="text-xs text-slate-600">Telephone: <strong>07587 765888</strong> / <strong>020 3523 0621</strong> &bull; Email: <strong>hip.knee_specialist@yahoo.com</strong></span>
        </div>
        <a
          href="/book-consultation"
          class="bg-[#1B4965] hover:bg-[#13364B] text-white px-4 py-2 rounded-lg text-xs font-bold shrink-0 transition-colors"
        >
          Book Consultation &rarr;
        </a>
      </div>
    </div>
  </section>

  <!-- 7. FREQUENTLY ASKED QUESTIONS -->
  <section class="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-12">
    <div class="max-w-4xl">
      <span class="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
        Patient Guidance
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Frequently Asked Questions: London &amp; North East London Care
      </h2>

      <div class="space-y-4">
        ${LONDON_FAQS.map((faq, i) => `
          <div class="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
            <h3 class="text-sm sm:text-base font-bold text-slate-900 mb-2">
              ${faq.question}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ${faq.answer}
            </p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 8. CONTEXTUAL INTERNAL LINKS -->
  <section class="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 mb-8">
    <h3 class="text-lg font-black text-slate-900 mb-4">
      Explore Related Procedures &amp; Practice Locations
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
      <a href="/hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Total Hip Replacement &rarr;
      </a>
      <a href="/knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Total Knee Replacement &rarr;
      </a>
      <a href="/robotic-hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        MAKO Robotic Hip Replacement &rarr;
      </a>
      <a href="/robotic-knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        MAKO Robotic Knee Replacement &rarr;
      </a>
      <a href="/revision-hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Revision Hip Replacement &rarr;
      </a>
      <a href="/partial-knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Partial Knee Replacement &rarr;
      </a>
      <a href="/computer-assisted-knee-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Computer-Navigated Knee Surgery &rarr;
      </a>
      <a href="/minimally-invasive-hip-replacement" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Minimally Invasive Hip Replacement &rarr;
      </a>
      <a href="/essex-hip-knee-surgeon" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Essex Hip &amp; Knee Surgeon &rarr;
      </a>
      <a href="/nuffield-brentwood-hospital" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Nuffield Health Brentwood &rarr;
      </a>
      <a href="/spire-hartswood-hospital" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Spire Hartswood Hospital &rarr;
      </a>
      <a href="/queens-hospital-romford" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
        Queen's Hospital Romford (NHS) &rarr;
      </a>
      <a href="/book-consultation" class="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-[#1B4965] border border-slate-200 transition-colors">
        Book Private Consultation &rarr;
      </a>
    </div>
  </section>
`;

// Complete Page Definitions for all indexable canonical routes
const pageDefinitions = [
  // 1. Home
  {
    path: '',
    title: 'Mr Shivakumar Shankar | London & Essex Hip and Knee Surgeon',
    description: 'Mr Shivakumar Shankar is a Consultant Orthopaedic Hip and Knee Surgeon in London and Essex, offering hip and knee replacement, robotic surgery & arthroscopy.',
    canonical: 'https://www.shivakumarshankar.co.uk/',
    bodyHtml: renderPageShell(
      '',
      'Restoring your active lifestyle',
      'Mr Shivakumar Shankar — Consultant Orthopaedic Hip and Knee Surgeon in London and Essex',
      'Consultant Orthopaedic Surgeon providing specialist assessment and surgery across <a href="/hip-replacement" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">hip replacement</a>, <a href="/knee-replacement" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">knee replacement</a>, <a href="/robotic-computer-assisted-surgery" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">MAKO robotic-assisted</a> and <a href="/computer-assisted-hip-replacement" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">computer-assisted joint replacement</a>, <a href="/minimally-invasive-hip-replacement" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">minimally invasive hip surgery</a>, <a href="/revision-hip-replacement" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">revision hip replacement</a>, and <a href="/knee-arthroscopy" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">knee arthroscopy</a> in Brentwood, Essex, and London. Private consultations at <a href="/spire-hartswood-hospital" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">Spire Hartswood Hospital</a> and <a href="/nuffield-brentwood-hospital" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">Nuffield Health Brentwood Hospital</a>, with substantive NHS practice at <a href="/queens-hospital-romford" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">Queen\'s Hospital, Romford</a> and <a href="/king-george-hospital-goodmayes" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">King George Hospital, Goodmayes</a>.',
      `
      ${renderCardGrid([
        {
          title: 'Regional Robotic Pioneer',
          desc: 'Mr Shankar was the first surgeon to perform computer-assisted and robotic total hip replacement in Essex and North East London, supporting precise execution of the planned implant position.'
        },
        {
          title: 'Minimally Invasive Joint Care',
          desc: 'Specialist expertise in tissue-sparing Rottinger anterior hip surgery and keyhole knee arthroscopy preserving vital soft tissues, supporting a patient-focused approach to recovery and rehabilitation.'
        },
        {
          title: 'Revision Hip Replacement',
          desc: 'Specialist assessment, component exchange, and complex reconstruction for painful, loose, worn, or unstable hip replacements across private and NHS hospital settings (<a href="/revision-hip-replacement" class="font-bold underline text-[#1B4965] hover:text-[#0A192F]">learn more about revision hip surgery</a>).'
        },
        {
          title: 'Patient Feedback & Reviews',
          desc: 'Read independently published patient feedback and reviews about Mr Shankar\'s care, including experiences of hip and knee surgery and recovery.'
        }
      ])}

      <!-- Media & Social Carousel Section -->
      <section id="media" class="py-16 border-t border-slate-200 bg-slate-50 rounded-2xl p-6 sm:p-8 mb-12">
        <div class="text-center max-w-3xl mx-auto mb-8">
          <span class="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-2">
            Professional News &amp; Updates
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Latest News &amp; Professional Updates
          </h2>
          <p class="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Follow Mr Shivakumar Shankar for professional updates, patient education and information about developments in hip and knee surgery.
          </p>
        </div>

        <!-- Carousel Cards Container (Responsive & Accessible Static Representation) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <!-- Card 1: 29 September 2026 -->
          <article data-carousel-card class="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative aspect-16/10 w-full bg-slate-900 overflow-hidden rounded-lg mb-3">
                <img src="/nuffield-brentwood-mako-2026-v1.jpg" alt="Mr Shivakumar Shankar with the Stryker specialist and surgical scrub team following the first MAKO robotic-assisted joint replacement at Nuffield Health Brentwood Hospital" class="w-full h-full object-cover" width="600" height="375" loading="lazy" />
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                <span class="font-bold text-[#1B4965] uppercase tracking-wider text-[10px] bg-[#EAF1F6] px-2 py-0.5 rounded">Robotic Surgery</span>
                <span class="font-semibold text-slate-700">29 September 2026</span>
              </div>
              <h3 class="font-bold text-slate-900 text-sm mb-2 line-clamp-2">MAKO Robotic-Assisted Joint Replacement Introduced to Private Practice in Brentwood</h3>
              <p class="text-xs text-slate-600 leading-relaxed line-clamp-2">
                On 29 September 2026, Mr Shivakumar Shankar performed his first MAKO robotic-assisted joint replacement at Nuffield Health Brentwood Hospital, marking an important development in his private hip and knee practice.
              </p>
            </div>
            <a href="https://www.instagram.com/shivakumarshankar/" target="_blank" rel="noopener noreferrer" class="mt-4 text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              Read more &rarr;
            </a>
          </article>

          <!-- Card 2: 24 September 2026 -->
          <article data-carousel-card class="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative aspect-16/10 w-full bg-slate-900 overflow-hidden rounded-lg mb-3">
                <img src="/shankar-personal-100-mako-2026.jpg" alt="Mr Shivakumar Shankar marking his personal milestone of 100 MAKO robotic-assisted joint replacement procedures personally performed by him" class="w-full h-full object-cover" width="600" height="375" loading="lazy" />
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                <span class="font-bold text-[#1B4965] uppercase tracking-wider text-[10px] bg-[#EAF1F6] px-2 py-0.5 rounded">Robotic Surgery</span>
                <span class="font-semibold text-slate-700">24 September 2026</span>
              </div>
              <h3 class="font-bold text-slate-900 text-sm mb-2 line-clamp-2">100 MAKO Robotic-Assisted Joint Replacements — A Personal Surgical Milestone for Mr Shankar</h3>
              <p class="text-xs text-slate-600 leading-relaxed line-clamp-2">
                On 24 September 2026, Mr Shivakumar Shankar marked a personal surgical milestone of completing 100 MAKO robotic-assisted joint replacement procedures personally performed by him (representing his individual surgical series, rather than a trust total for BHRUT).
              </p>
            </div>
            <a href="https://www.instagram.com/shivakumarshankar/" target="_blank" rel="noopener noreferrer" class="mt-4 text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              Read more &rarr;
            </a>
          </article>

          <!-- Card 3: 18 January 2023 -->
          <article data-carousel-card class="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative aspect-16/10 w-full bg-slate-900 overflow-hidden rounded-lg mb-3">
                <img src="/bhrut-100th-robotic-joint-2023.jpg" alt="BHRUT NHS Trust marking the 100th patient robotic joint replacement at King George Hospital" class="w-full h-full object-cover" width="600" height="375" loading="lazy" />
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                <span class="font-bold text-[#1B4965] uppercase tracking-wider text-[10px] bg-[#EAF1F6] px-2 py-0.5 rounded">Robotic Surgery</span>
                <span class="font-semibold text-slate-700">18 January 2023</span>
              </div>
              <h3 class="font-bold text-slate-900 text-sm mb-2 line-clamp-2">BHRUT NHS Trust: 100th Robotic Joint Replacement Milestone (Catherine’s Story)</h3>
              <p class="text-xs text-slate-600 leading-relaxed line-clamp-2">
                Fitness manager Catherine O'Brien-Passfield becomes the 100th patient to receive a robotic-assisted joint replacement at Barking, Havering and Redbridge University Hospitals NHS Trust, performed by Mr Shivakumar Shankar.
              </p>
            </div>
            <a href="https://www.bhrhospitals.nhs.uk/news/fitness-manager-catherine-gets-a-whole-new-lease-of-life-after-being-the-100th-patient-to-have-a-robotic-joint-replacement-5735" target="_blank" rel="noopener noreferrer" class="mt-4 text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              Read more &rarr;
            </a>
          </article>

          <!-- Card 4: 16 August 2021 -->
          <article data-carousel-card class="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative aspect-16/10 w-full bg-slate-900 overflow-hidden rounded-lg mb-3">
                <img src="./King George Hospital entrance.jpeg" alt="King George Hospital Elective Surgical Hub" class="w-full h-full object-cover" width="600" height="375" loading="lazy" />
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                <span class="font-bold text-[#1B4965] uppercase tracking-wider text-[10px] bg-[#EAF1F6] px-2 py-0.5 rounded">Clinical Education</span>
                <span class="font-semibold text-slate-700">16 August 2021</span>
              </div>
              <h3 class="font-bold text-slate-900 text-sm mb-2 line-clamp-2">BHR Hospitals: ‘From Bones R Us to Back2Backs’ — 51 Hip &amp; Knee Replacements in 5 Days</h3>
              <p class="text-xs text-slate-600 leading-relaxed line-clamp-2">
                Consultant Shivakumar Shankar specifically named in the Trust's elective recovery programme, achieving 51 hip and knee replacements in five days through focused surgical sprints.
              </p>
            </div>
            <a href="https://www.bhrhospitals.nhs.uk/news/from-bones-r-us-to-back2backs-51-hip-and-knee-replacements-in-five-days-4933" target="_blank" rel="noopener noreferrer" class="mt-4 text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              Read more &rarr;
            </a>
          </article>

          <!-- Card 5: 13 July 2021 -->
          <article data-carousel-card class="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative aspect-16/10 w-full bg-slate-900 overflow-hidden rounded-lg mb-3">
                <img src="./Queens Hospital.jpg" alt="Queen's Hospital Romford" class="w-full h-full object-cover" width="600" height="375" loading="lazy" />
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                <span class="font-bold text-[#1B4965] uppercase tracking-wider text-[10px] bg-[#EAF1F6] px-2 py-0.5 rounded">Clinical Education</span>
                <span class="font-semibold text-slate-700">13 July 2021</span>
              </div>
              <h3 class="font-bold text-slate-900 text-sm mb-2 line-clamp-2">BHR Hospitals: ‘Super’ Clinics Led by Mr Shankar Tackle Waiting Lists (260 Outpatients in 2 Days)</h3>
              <p class="text-xs text-slate-600 leading-relaxed line-clamp-2">
                Mr Shankar led high-volume weekend outpatient recovery clinics at Barking, Havering and Redbridge University Hospitals NHS Trust, assessing 260 patients across two days to accelerate specialist care.
              </p>
            </div>
            <a href="https://www.bhrhospitals.nhs.uk/news/super-clinics-to-help-reduce-waiting-times-4886" target="_blank" rel="noopener noreferrer" class="mt-4 text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              Read more &rarr;
            </a>
          </article>

          <!-- Card 6: 30 July 2020 -->
          <article data-carousel-card class="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative aspect-16/10 w-full bg-slate-900 overflow-hidden rounded-lg mb-3">
                <img src="./Attend anywhere virtual clinic.png" alt="Attend Anywhere Virtual Orthopaedic Clinic" class="w-full h-full object-cover" width="600" height="375" loading="lazy" />
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                <span class="font-bold text-[#1B4965] uppercase tracking-wider text-[10px] bg-[#EAF1F6] px-2 py-0.5 rounded">Clinical Education</span>
                <span class="font-semibold text-slate-700">30 July 2020</span>
              </div>
              <h3 class="font-bold text-slate-900 text-sm mb-2 line-clamp-2">BHR Hospitals: Pioneering ‘Attend Anywhere’ Virtual Consultations During COVID-19</h3>
              <p class="text-xs text-slate-600 leading-relaxed line-clamp-2">
                Pioneering remote digital video clinics at BHR Hospitals during lockdown, ensuring vulnerable joint patients received expert orthopaedic triage, rehabilitation guidance, and continuous clinical support.
              </p>
            </div>
            <a href="https://www.bhrhospitals.nhs.uk/news/video-consultations-now-available-at-our-hospitals-3855" target="_blank" rel="noopener noreferrer" class="mt-4 text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              Read more &rarr;
            </a>
          </article>
        </div>

        <!-- View all Media & Social link/button -->
        <div class="mt-8 text-center">
          <a href="/media-social" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white border border-slate-300 hover:border-[#1B4965] text-[#1B4965] hover:text-[#13364B] text-xs font-bold uppercase tracking-wider transition-all shadow-2xs">
            View all Media &amp; Social &rarr;
          </a>
        </div>

        <!-- Social Channels (@ShankarHipKnee) -->
        <div class="mt-8 pt-8 border-t border-slate-200 text-center">
          <p class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Follow Mr Shivakumar Shankar
          </p>
          <div class="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <a href="https://www.linkedin.com/in/shivakumar-shankar-25758026/recent-activity/all/" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors">LinkedIn</a>
            <a href="https://x.com/ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors">X (@ShankarHipKnee)</a>
            <a href="https://www.youtube.com/@ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors">YouTube</a>
            <a href="https://www.instagram.com/ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors">TikTok</a>
            <a href="https://finder.bupa.co.uk/Consultant/mr-shivakumar-shankar-orthopaedic-surgery-brentwood-romford" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors">Bupa Profile</a>
          </div>
        </div>
      </section>

      <section class="p-8 bg-[#EAF1F6] rounded-2xl border border-slate-300 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div>
          <h2 class="text-xl font-bold text-[#1B4965]">Consultation &amp; Surgical Scheduling</h2>
          <p class="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Private consultations at Spire Hartswood Hospital and Nuffield Health Brentwood Hospital in Essex. Direct booking with medical secretary Remya Rexlin.
          </p>
        </div>
        <div class="flex gap-3">
          <a href="/book-consultation" class="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-sm">
            Book Online
          </a>
          <a href="/contact" class="bg-white hover:bg-slate-50 text-[#1B4965] border border-slate-300 px-6 py-3 rounded-lg font-bold text-xs transition-colors">
            Contact Secretary
          </a>
        </div>
      </section>
      `
    )
  },

  // 2. About Mr Shivakumar Shankar
  {
    path: 'about-mr-shivakumar-shankar',
    title: 'About Mr Shivakumar Shankar | Consultant Hip & Knee Surgeon',
    description: 'Biography, credentials, and surgical training of Mr Shivakumar Shankar, NHS Clinical Lead & Consultant Orthopaedic Surgeon at Spire and Nuffield Hospitals.',
    canonical: 'https://www.shivakumarshankar.co.uk/about-mr-shivakumar-shankar',
    customJsonLd: generateAboutPageJsonLd('https://www.shivakumarshankar.co.uk/about-mr-shivakumar-shankar'),
    bodyHtml: renderPageShell(
      'about',
      'Consultant Orthopaedic Surgeon • GMC 6038414',
      'About Mr Shivakumar Shankar FRCS (Tr & Orth)',
      'Mr Shivakumar Shankar is a highly accomplished Consultant Orthopaedic Surgeon specialising in hip and knee surgery, serving as the NHS Clinical Lead for Orthopaedics at Barking, Havering and Redbridge University Hospitals NHS Trust, with private consulting practices at Spire Hartswood Hospital and Nuffield Health Brentwood Hospital.',
      renderAboutPageContent()
    )
  },

  // 3. /about (alias for /about-mr-shivakumar-shankar)
  {
    path: 'about',
    title: 'About Mr Shivakumar Shankar | Consultant Hip & Knee Surgeon',
    description: 'Biography, credentials, and surgical training of Mr Shivakumar Shankar, NHS Clinical Lead & Consultant Orthopaedic Surgeon at Spire and Nuffield Hospitals.',
    canonical: 'https://www.shivakumarshankar.co.uk/about-mr-shivakumar-shankar',
    customJsonLd: generateAboutPageJsonLd('https://www.shivakumarshankar.co.uk/about-mr-shivakumar-shankar'),
    bodyHtml: renderPageShell(
      'about',
      'Consultant Orthopaedic Surgeon • GMC 6038414',
      'About Mr Shivakumar Shankar FRCS (Tr & Orth)',
      'Mr Shivakumar Shankar is a highly accomplished Consultant Orthopaedic Surgeon specialising in hip and knee surgery, serving as the NHS Clinical Lead for Orthopaedics at Barking, Havering and Redbridge University Hospitals NHS Trust, with private consulting practices at Spire Hartswood Hospital and Nuffield Health Brentwood Hospital.',
      renderAboutPageContent()
    )
  },

  // 4. Hip Replacement
  {
    path: 'hip-replacement',
    title: 'Hip Replacement Surgeon in Essex & London | Mr Shivakumar Shankar',
    description: 'Consultant Hip Replacement Surgeon in Essex & London. Mr Shivakumar Shankar offers conventional, computer-assisted, MAKO robotic & minimally invasive hip surgery.',
    canonical: 'https://www.shivakumarshankar.co.uk/hip-replacement',
    customJsonLd: generateProcedureJsonLd({
      path: 'hip-replacement',
      title: 'Hip Replacement Surgeon in Essex & London | Mr Shivakumar Shankar',
      description: 'Consultant Hip Replacement Surgeon in Essex & London. Mr Shivakumar Shankar offers conventional, computer-assisted, MAKO robotic & minimally invasive hip surgery.',
      canonical: 'https://www.shivakumarshankar.co.uk/hip-replacement',
      data: CLINICAL_PROCEDURES['hip-replacement'],
      procedureName: 'Total Hip Replacement Surgery',
      bodyLocation: 'Hip joint',
      howPerformed: 'Pre-operative digital templating, muscle-preserving surgical exposure, precision acetabular reaming, uncemented hydroxyapatite-coated titanium cup seating, high-performance ceramic-on-polyethylene bearing placement, femoral canal preparation, anatomical stem impaction, and intra-operative stability and leg length verification.',
      breadcrumbs: []
    }),
    bodyHtml: renderClinicalProcedurePage(
      CLINICAL_PROCEDURES['hip-replacement'],
      []
    )
  },

  // 5. Robotic Hip Replacement
  {
    path: 'robotic-hip-replacement',
    title: 'Robotic Hip Replacement London & Essex | Mr Shivakumar Shankar',
    description: 'Consultant-led Mako robotic total hip replacement in London and Essex with Mr Shivakumar Shankar. 3D CT planning, spinopelvic kinematic analysis, and haptic robotic guidance in Brentwood & Romford.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-hip-replacement',
    customJsonLd: generateProcedureJsonLd({
      path: 'robotic-hip-replacement',
      title: 'Robotic Hip Replacement London & Essex | Mr Shivakumar Shankar',
      description: 'Consultant-led Mako robotic total hip replacement in London and Essex with Mr Shivakumar Shankar. 3D CT planning, spinopelvic kinematic analysis, and haptic robotic guidance in Brentwood & Romford.',
      canonical: 'https://www.shivakumarshankar.co.uk/robotic-hip-replacement',
      data: CLINICAL_PROCEDURES['robotic-hip-replacement'],
      procedureName: 'MAKO Robotic-Assisted Total Hip Replacement',
      bodyLocation: 'Hip joint',
      howPerformed: 'Pre-operative pelvic 3D CT virtual anatomical modelling, dynamic spinopelvic planning, real-time optical array registration, tactile robotic-arm haptic bone preparation, CT-guided acetabular cup orientation and positioning, and femoral offset and leg length restoration under complete surgeon control.',
      breadcrumbs: [
        { name: 'Hip Surgery', href: '/hip-replacement' }
      ]
    }),
    bodyHtml: renderClinicalProcedurePage(
      CLINICAL_PROCEDURES['robotic-hip-replacement'],
      [
        { name: 'Hip Surgery', href: '/hip-replacement' }
      ]
    )
  },

  // 6. Computer-Assisted Hip Replacement
  {
    path: 'computer-assisted-hip-replacement',
    title: 'Computer-Assisted Hip Replacement Essex & London | Mr Shivakumar Shankar',
    description: 'Consultant-led computer-assisted & navigated hip replacement in Essex and London with Mr Shivakumar Shankar. Real-time optical tracking with no routine pre-op CT scan required in Brentwood & BHRUT.',
    canonical: 'https://www.shivakumarshankar.co.uk/computer-assisted-hip-replacement',
    customJsonLd: generateProcedureJsonLd({
      path: 'computer-assisted-hip-replacement',
      title: 'Computer-Assisted Hip Replacement Essex & London | Mr Shivakumar Shankar',
      description: 'Consultant-led computer-assisted & navigated hip replacement in Essex and London with Mr Shivakumar Shankar. Real-time optical tracking with no routine pre-op CT scan required in Brentwood & BHRUT.',
      canonical: 'https://www.shivakumarshankar.co.uk/computer-assisted-hip-replacement',
      data: CLINICAL_PROCEDURES['computer-assisted-hip-replacement'],
      procedureName: 'Computer-Assisted & Navigated Total Hip Replacement',
      bodyLocation: 'Hip joint',
      howPerformed: 'Rigid pelvic and femoral optical tracker array placement, anatomical landmark digitisation, real-time infrared spatial orientation, continuous digital measurement of acetabular cup inclination and anteversion, and live intra-operative verification of leg length and femoral offset without pre-operative CT scans.',
      breadcrumbs: [
        { name: 'Hip Surgery', href: '/hip-replacement' }
      ]
    }),
    bodyHtml: renderClinicalProcedurePage(
      CLINICAL_PROCEDURES['computer-assisted-hip-replacement'],
      [
        { name: 'Hip Surgery', href: '/hip-replacement' }
      ]
    )
  },

  // 7. Minimally Invasive Hip Replacement
  {
    path: 'minimally-invasive-hip-replacement',
    title: 'Minimally Invasive Hip Replacement Essex & London | Mr Shivakumar Shankar',
    description: 'Specialist minimally invasive & muscle-sparing hip replacement in Essex and London with Mr Shivakumar Shankar. Rottinger and direct anterior approaches in Brentwood & Romford.',
    canonical: 'https://www.shivakumarshankar.co.uk/minimally-invasive-hip-replacement',
    customJsonLd: generateProcedureJsonLd({
      path: 'minimally-invasive-hip-replacement',
      data: CLINICAL_PROCEDURES['minimally-invasive-hip-replacement'],
      title: 'Minimally Invasive Hip Replacement Essex & London | Mr Shivakumar Shankar',
      description: 'Specialist minimally invasive & muscle-sparing hip replacement in Essex and London with Mr Shivakumar Shankar. Rottinger and direct anterior approaches in Brentwood & Romford.',
      canonical: 'https://www.shivakumarshankar.co.uk/minimally-invasive-hip-replacement',
      procedureName: 'Minimally Invasive & Muscle-Sparing Hip Replacement Surgery',
      bodyLocation: 'Hip joint',
      howPerformed: 'Inter-muscular and inter-nervous surgical approach (Rottinger anterolateral or Direct Anterior Approach) accessing the hip capsule without detaching primary abductor tendons or short external rotators, followed by anatomical acetabular preparation, precision cup and femoral component placement, and dynamic intra-operative stability testing.',
      breadcrumbs: [
        { name: 'Hip Surgery', href: '/hip-replacement' }
      ]
    }),
    bodyHtml: renderClinicalProcedurePage(
      CLINICAL_PROCEDURES['minimally-invasive-hip-replacement'],
      [
        { name: 'Hip Surgery', href: '/hip-replacement' }
      ]
    )
  },

  // 8. Revision Hip Replacement
  {
    path: 'revision-hip-replacement',
    title: 'Revision Hip Replacement Essex & London | Mr Shivakumar Shankar',
    description: 'Specialist revision hip replacement surgery in Essex and London with Mr Shivakumar Shankar. Assessment of painful or failing hip replacements, loosening, dislocation, and complex reconstruction.',
    canonical: 'https://www.shivakumarshankar.co.uk/revision-hip-replacement',
    customJsonLd: generateProcedureJsonLd({
      path: 'revision-hip-replacement',
      data: CLINICAL_PROCEDURES['revision-hip-replacement'],
      title: 'Revision Hip Replacement Essex & London | Mr Shivakumar Shankar',
      description: 'Specialist revision hip replacement surgery in Essex and London with Mr Shivakumar Shankar. Assessment of painful or failing hip replacements, loosening, dislocation, and complex reconstruction.',
      canonical: 'https://www.shivakumarshankar.co.uk/revision-hip-replacement',
      procedureName: 'Revision Total Hip Replacement Surgery',
      bodyLocation: 'Hip joint',
      howPerformed: 'Pre-operative MARS CT and serological workup, surgical exposure with scar adhesiolysis, extraction of failed primary components with bone stock preservation, acetabular reconstruction using trabecular metal augments or bone grafting, femoral canal revision using modular fluted tapered uncemented stems, soft-tissue balancing and trial reduction, component impaction, and layered anatomical closure.',
      breadcrumbs: [
        { name: 'Hip Surgery', href: '/hip-replacement' }
      ]
    }),
    bodyHtml: renderClinicalProcedurePage(
      CLINICAL_PROCEDURES['revision-hip-replacement'],
      [
        { name: 'Hip Surgery', href: '/hip-replacement' }
      ]
    )
  },

  // 9. Knee Replacement
  {
    path: 'knee-replacement',
    title: 'Knee Replacement Surgeon in Essex & London | Mr Shivakumar Shankar',
    description: 'Consultant Knee Replacement Surgeon in Essex & London. Mr Shivakumar Shankar offers total, partial, computer-assisted & MAKO robotic knee replacement in Brentwood.',
    canonical: 'https://www.shivakumarshankar.co.uk/knee-replacement',
    customJsonLd: generateProcedureJsonLd({
      path: 'knee-replacement',
      title: 'Knee Replacement Surgeon in Essex & London | Mr Shivakumar Shankar',
      description: 'Consultant Knee Replacement Surgeon in Essex & London. Mr Shivakumar Shankar offers total, partial, computer-assisted & MAKO robotic knee replacement in Brentwood.',
      canonical: 'https://www.shivakumarshankar.co.uk/knee-replacement',
      data: CLINICAL_PROCEDURES['knee-replacement'],
      procedureName: 'Total Knee Replacement Surgery',
      bodyLocation: 'Knee joint',
      howPerformed: 'Precision bone resections of the distal femur and proximal tibia matching patient-specific constitutional anatomy, dynamic soft-tissue balancing across flexion and extension, cementation of biocompatible cobalt-chromium femoral and titanium tibial components, and insertion of a durable cross-linked polyethylene bearing insert.',
      breadcrumbs: []
    }),
    bodyHtml: renderClinicalProcedurePage(
      CLINICAL_PROCEDURES['knee-replacement'],
      []
    )
  },

  // 9. Robotic Knee Replacement
  {
    path: 'robotic-knee-replacement',
    title: 'MAKO Robotic Knee Replacement Essex & London | Mr Shivakumar Shankar',
    description: 'Mr Shivakumar Shankar offers MAKO robotic-assisted total and partial knee replacement where appropriate, at Nuffield Health Brentwood Hospital, Essex, serving London.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-knee-replacement',
    customJsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://www.shivakumarshankar.co.uk/#website",
          "url": "https://www.shivakumarshankar.co.uk/",
          "name": "London and Essex Hip and Knee Surgeon",
          "description": "Official medical practice website of Mr Shivakumar Shankar, Consultant Orthopaedic Hip & Knee Surgeon.",
          "inLanguage": "en-GB",
          "publisher": {
            "@id": "https://www.shivakumarshankar.co.uk/#physician"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.shivakumarshankar.co.uk/robotic-knee-replacement#breadcrumbs",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.shivakumarshankar.co.uk/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Knee Replacement",
              "item": "https://www.shivakumarshankar.co.uk/knee-replacement"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Robotic Knee Replacement",
              "item": "https://www.shivakumarshankar.co.uk/robotic-knee-replacement"
            }
          ]
        },
        getPhysicianEntity(),
        {
          "@type": "MedicalProcedure",
          "@id": "https://www.shivakumarshankar.co.uk/robotic-knee-replacement#procedure",
          "name": "Robotic Knee Replacement Surgery",
          "procedureType": "SurgicalProcedure",
          "bodyLocation": "Knee joint",
          "description": "Consultant-led Mako robotic-assisted total and partial knee replacement combining pre-operative 3D CT virtual modelling, dynamic ligament balancing, and haptic robotic arm guidance.",
          "howPerformed": "Low-dose pre-operative 3D CT modelling, real-time optical tracking arrays, dynamic soft-tissue tension mapping across flexion and extension, and surgeon-guided tactile haptic boundary bone resection.",
          "performer": {
            "@id": "https://www.shivakumarshankar.co.uk/#physician"
          },
          "location": [
            {
              "@type": "Hospital",
              "name": "Nuffield Health Brentwood Hospital",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shenfield Road",
                "addressLocality": "Brentwood",
                "addressRegion": "Essex",
                "postalCode": "CM15 8EH",
                "addressCountry": "GB"
              },
              "telephone": "01277 263 263"
            }
          ]
        },
        {
          "@type": "MedicalWebPage",
          "@id": "https://www.shivakumarshankar.co.uk/robotic-knee-replacement",
          "url": "https://www.shivakumarshankar.co.uk/robotic-knee-replacement",
          "name": "MAKO Robotic Knee Replacement Essex & London | Mr Shivakumar Shankar",
          "description": "Mr Shivakumar Shankar offers MAKO robotic-assisted total and partial knee replacement where appropriate, at Nuffield Health Brentwood Hospital, Essex, serving London.",
          "inLanguage": "en-GB",
          "author": {
            "@id": "https://www.shivakumarshankar.co.uk/#physician"
          },
          "about": {
            "@id": "https://www.shivakumarshankar.co.uk/robotic-knee-replacement#procedure"
          },
          "breadcrumb": {
            "@id": "https://www.shivakumarshankar.co.uk/robotic-knee-replacement#breadcrumbs"
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.shivakumarshankar.co.uk/robotic-knee-replacement#faqpage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is MAKO robotic knee replacement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "MAKO robotic-assisted knee replacement is an advanced surgical technique combining pre-operative low-dose 3D CT virtual modelling with real-time intra-operative haptic guidance. Before surgery, a 3D digital model of the patient's unique knee anatomy is created to calculate optimal implant dimensions, alignment, and orientation. During the operation, Mr Shankar uses the robotic arm as a high-precision instrument to dynamically balance soft tissues and prepare bone within millimetre-level stereotactic safety boundaries, protecting native collateral ligaments and surrounding neurovascular structures."
              }
            },
            {
              "@type": "Question",
              "name": "Does the robot perform the surgery?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The robotic system never acts autonomously or makes independent decisions. Mr Shivakumar Shankar maintains complete clinical control throughout the procedure. The robotic arm provides tactile (haptic) resistance that guides the saw blade strictly within pre-planned digital boundaries, preventing bone cuts outside the defined surgical plan. All surgical exposures, soft-tissue releases, bone preparation, and implant seating are performed directly by the consultant surgeon."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between robotic total and partial knee replacement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In a robotic total knee replacement (TKR), all three compartments of the knee (medial, lateral, and patellofemoral) are resurfaced to address extensive, end-stage tricompartmental arthritis. In a robotic partial knee replacement (unicompartmental arthroplasty), only the damaged arthritic compartment (typically the medial inside or lateral outside) is resurfaced. Because the healthy joint compartments, articular cartilage, and both the anterior and posterior cruciate ligaments (ACL and PCL) are preserved, a partial knee replacement often feels more natural and allows for a faster recovery. Mr Shankar performs comprehensive clinical and radiological evaluations to determine whether a partial or total procedure is most appropriate."
              }
            },
            {
              "@type": "Question",
              "name": "What are the benefits and limitations of robotic knee replacement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Potential clinical benefits include CT-guided bone preparation precision within pre-planned stereotactic boundaries, customised implant positioning matching individual constitutional anatomy, real-time dynamic soft-tissue balancing across the entire arc of motion, and reduced soft-tissue disruption via haptic boundary constraints. However, there are limitations: robotic surgery requires a specialised pre-operative CT scan and temporary bone tracking pins in the femur and tibia. Furthermore, improved technical precision does not automatically guarantee superior long-term clinical outcomes or eliminate standard surgical recovery timelines, and individual outcomes remain dependent on dedicated post-operative physiotherapy."
              }
            },
            {
              "@type": "Question",
              "name": "Is a CT scan required for robotic knee replacement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. A dedicated pre-operative low-dose CT scan of the hip, knee, and ankle is essential for MAKO robotic surgery. This scan enables the specialised software to generate a patient-specific 3D computer model of the bony anatomy and establish the true mechanical axis. This detailed pre-operative template allows Mr Shankar to pre-select implant sizing, position, and rotation before entering the operating theatre, minimising unexpected intra-operative sizing compromises."
              }
            },
            {
              "@type": "Question",
              "name": "How long does recovery take after robotic knee replacement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Recovery varies between patients based on age, overall health, and pre-existing joint deformity. Patients typically mobilise with walking aids within hours of surgery under physiotherapist supervision. Hospital stays average 1 to 2 nights at Nuffield Health Brentwood Hospital or NHS elective units. Most patients transition from two crutches to one crutch or a walking stick within 2 to 4 weeks, and walk independently by 4 to 6 weeks. Driving is generally resumed around 6 weeks, once full emergency stop control is restored, and low-impact activities like swimming, stationary cycling, and golf can usually recommence between 8 and 12 weeks. Complete soft-tissue remodelling continues for 6 to 12 months."
              }
            },
            {
              "@type": "Question",
              "name": "Where is robotic knee replacement available privately and through the NHS?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For private patients (both insured and self-funding), Mr Shankar performs MAKO robotic-assisted total and partial knee replacements at Nuffield Health Brentwood Hospital in Brentwood, Essex, convenient for patients travelling from Essex, East London, and Greater London. For NHS patients, Mr Shankar undertakes robotic joint replacement at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), where he has personally completed over 100 MAKO joint replacements (representing his individual surgical caseload, rather than the total performed across the trust). Please note that Spire Hartswood Hospital in Brentwood offers conventional manual and computer-navigated knee replacement surgery, not MAKO robotic surgery."
              }
            }
          ]
        }
      ]
    },
    bodyHtml: `
    ${renderHeader('robotic-knee-replacement')}
    <article class="pt-8 sm:pt-12 pb-20 font-sans text-slate-800 bg-[#F8FAFC]">
      <!-- 1. HERO BREADCRUMB & HEADER -->
      <section class="bg-white border-b border-slate-200 py-10 sm:py-14">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" class="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <a href="/" class="hover:text-[#1B4965]">Home</a>
            <span>/</span>
            <a href="/knee-replacement" class="hover:text-[#1B4965]">Knee Replacement</a>
            <span>/</span>
            <span class="text-[#1B4965] font-bold">Robotic Knee Replacement</span>
          </nav>

          <span class="inline-block px-3.5 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            Robotic Arthroplasty • Mako™ System
          </span>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Robotic Knee Replacement Surgery in London and Essex
          </h1>

          <p class="text-lg sm:text-xl text-slate-600 mt-4 leading-relaxed max-w-4xl">
            Consultant-led MAKO robotic-assisted total and partial knee replacement, where clinically appropriate, with Mr Shivakumar Shankar in Essex and London. Private robotic knee surgery at Nuffield Health Brentwood Hospital, combining pre-operative 3D CT planning, dynamic ligament balancing, and haptic robotic guidance.
          </p>

          <div class="flex flex-wrap items-center gap-3 pt-6">
            <a
              href="/book-consultation"
              class="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              Book Surgical Consultation
            </a>
            <a
              href="#procedure-details"
              class="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              Procedure Details
            </a>
            <a
              href="#recovery-rehab"
              class="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              Recovery &amp; Risks
            </a>
          </div>
        </div>
      </section>

      <!-- 2. CLINICAL OVERVIEW & CANDIDATE CRITERIA -->
      <section class="py-12 sm:py-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div class="lg:col-span-8 space-y-8">
              <!-- Clinical Overview -->
              <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 class="text-2xl font-black text-slate-900 flex items-center gap-2.5">
                  Clinical Overview: MAKO Robotic-Assisted Total &amp; Partial Knee Replacement
                </h2>
                <p class="text-slate-700 leading-relaxed text-base">
                  Robotic-assisted knee replacement utilising the Stryker Mako robotic system provides an exceptional level of precision in bone preparation and component alignment. Rather than relying solely on conventional mechanical cutting blocks and manual eyeballing, the Mako platform integrates a patient-specific 3D CT scan with intra-operative optical tracking sensors and robotic arm guidance.
                </p>
                <p class="text-slate-700 leading-relaxed text-base">
                  The technology enables both <strong>robotic total knee replacement</strong> (resurfacing tricompartmental end-stage arthritis) and <strong>robotic partial (unicompartmental) knee replacement</strong> where clinically appropriate (resurfacing an isolated medial or lateral arthritic compartment while leaving the anterior cruciate ligament, posterior cruciate ligament, and healthy cartilage untouched).
                </p>
                <p class="text-slate-700 leading-relaxed text-base">
                  Mr Shivakumar Shankar has extensive specialist experience in computer-assisted and robotic joint arthroplasty, holding a Postgraduate Diploma in Computer and Robot-Assisted Orthopaedic Arthroplasty alongside his substantive NHS consultant appointment at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). At King George Hospital’s Elective Surgical Hub, Mr Shankar reached a personal milestone of completing over 100 MAKO robotic-assisted joint replacements personally performed by him (an individual surgical series within the trust's high-volume clinical recovery programme featured in broadcast coverage on BBC London News).
                </p>
                <p class="text-slate-700 leading-relaxed text-base">
                  MAKO robotic-assisted joint replacement is available for private patients (insured and self-funding) at <strong>Nuffield Health Brentwood Hospital</strong> in Brentwood, Essex, conveniently serving patients across Essex, East London, and Greater London. Mr Shankar also undertakes robotic-assisted joint replacement within BHRUT NHS services. At <strong>Spire Hartswood Hospital</strong> in Brentwood, Mr Shankar provides conventional manual and computer-navigated knee replacement surgery, rather than MAKO robotic surgery. Robotic technology assists the surgeon; it does not operate independently. Improved technical accuracy does not automatically establish superior long-term clinical outcomes, and successful recovery remains founded upon dedicated post-operative physiotherapy and patient commitment.
                </p>
              </div>

              <!-- Who May Benefit & Symptoms Treated -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 class="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 text-[#1B4965]">
                    Who May Benefit
                  </h3>
                  <ul class="space-y-2 text-sm text-slate-700">
                    <li class="flex items-start gap-2">
                      <span class="text-[#1B4965] font-bold mt-0.5">•</span>
                      <span>Patients with advanced knee osteoarthritis (tricompartmental or bicompartmental) who have exhausted conservative therapies.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#1B4965] font-bold mt-0.5">•</span>
                      <span>Individuals with isolated medial or lateral compartment osteoarthritis suitable for tissue-preserving Mako partial knee replacement.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#1B4965] font-bold mt-0.5">•</span>
                      <span>Patients with significant constitutional varus (bow-legged) or valgus (knock-kneed) deformity requiring personalised alignment.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#1B4965] font-bold mt-0.5">•</span>
                      <span>Active patients seeking CT-guided implant positioning and dynamic soft-tissue balancing to optimise joint stability, balance, and functional range of motion.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#1B4965] font-bold mt-0.5">•</span>
                      <span><strong>Conservative alternatives considered first:</strong> targeted quadriceps physiotherapy, weight management, unloading braces, and intra-articular steroid or PRP injections.</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 class="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 text-[#1B4965]">
                    Symptoms Commonly Treated
                  </h3>
                  <ul class="space-y-2 text-sm text-slate-700">
                    <li class="flex items-start gap-2">
                      <span class="text-[#E8A24C] font-bold mt-0.5">•</span>
                      <span>Persistent, disabling knee pain when walking, climbing stairs, standing, or resting.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#E8A24C] font-bold mt-0.5">•</span>
                      <span>Joint stiffness, loss of full knee straightening (extension) or bending (flexion), and painful night aching.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#E8A24C] font-bold mt-0.5">•</span>
                      <span>Visible angular deformity (bowing or knocking) causing an abnormal walking gait.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#E8A24C] font-bold mt-0.5">•</span>
                      <span>Intermittent joint swelling, chronic warmth, and progressive loss of physical independence.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- 3. EXPLANATION OF THE PROCEDURE -->
              <div id="procedure-details" class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                <h2 class="text-2xl font-black text-slate-900">
                  The 4-Stage Mako Robotic Knee Arthroplasty Sequence
                </h2>
                <p class="text-slate-700 leading-relaxed">
                  How pre-operative 3D CT virtual modelling, dynamic ligament tension assessment, and haptic boundary guidance operate during surgery:
                </p>
                <div class="space-y-3 pt-2">
                  <h4 class="text-xs uppercase font-extrabold tracking-wider text-slate-500">
                    Key Surgical Stages:
                  </h4>
                  <div class="grid grid-cols-1 gap-3">
                    <div class="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#1B4965] text-white text-xs font-bold flex items-center justify-center mt-0.5">1</span>
                      <p class="text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>Pre-Operative 3D CT Modelling:</strong> A dedicated low-dose CT scan of your hip, knee, and ankle generates an exact patient-specific 3D digital model. Mr Shankar pre-plans implant sizing, rotation, and bone resections to match your unique constitutional anatomy before entering the operating theatre.
                      </p>
                    </div>
                    <div class="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#1B4965] text-white text-xs font-bold flex items-center justify-center mt-0.5">2</span>
                      <p class="text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>Intra-Operative Dynamic Ligament Balancing:</strong> Optical tracking arrays temporarily placed on the femur and tibia provide live digital feedback. Mr Shankar moves the knee through its complete arc of motion, capturing ligament tension in flexion and extension to fine-tune implant alignment digitally before making a single bone cut.
                      </p>
                    </div>
                    <div class="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#1B4965] text-white text-xs font-bold flex items-center justify-center mt-0.5">3</span>
                      <p class="text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>Tactile Haptic-Guided Bone Resection:</strong> Guided by Mr Shankar, the robotic arm assists the saw blade strictly within pre-defined virtual boundaries. Stereotactic haptic resistance prevents bone cuts outside the planned safety envelope, safeguarding the posterior cruciate ligament, collateral ligaments, and critical popliteal blood vessels.
                      </p>
                    </div>
                    <div class="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-[#1B4965] text-white text-xs font-bold flex items-center justify-center mt-0.5">4</span>
                      <p class="text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>Component Seating &amp; Kinematic Verification:</strong> Precision femoral, tibial, and highly cross-linked polyethylene bearing components are seated. Joint gap symmetry, stability, and range of movement are re-assessed in real time to confirm smooth, stable joint articulation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Technology Comparison -->
              <div class="bg-[#F0F5F9] p-6 sm:p-8 rounded-2xl border border-[#D0E2EC] shadow-xs space-y-4">
                <h2 class="text-2xl font-black text-slate-900">
                  Robotic Guidance vs Conventional Alignment
                </h2>
                <p class="text-sm text-slate-700 leading-relaxed">
                  An evidence-based, balanced comparison of surgical modalities in knee replacement:
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div class="bg-white p-4 rounded-xl border border-slate-200">
                    <strong class="text-xs uppercase font-bold text-[#1B4965] block mb-1">Pre-Operative Planning</strong>
                    <p class="text-xs text-slate-600 leading-relaxed">Robotic surgery uses a patient-specific 3D CT model to pre-determine implant sizing and orientation; conventional surgery relies on 2D plain radiographs and intra-operative estimation.</p>
                  </div>
                  <div class="bg-white p-4 rounded-xl border border-slate-200">
                    <strong class="text-xs uppercase font-bold text-[#1B4965] block mb-1">Soft-Tissue Tensioning</strong>
                    <p class="text-xs text-slate-600 leading-relaxed">Mako provides real-time digital gap balancing across the full flexion-extension arc prior to bone cuts; manual methods assess tension subjectively after cuts are completed.</p>
                  </div>
                  <div class="bg-white p-4 rounded-xl border border-slate-200">
                    <strong class="text-xs uppercase font-bold text-[#1B4965] block mb-1">Stereotactic Boundary Protection</strong>
                    <p class="text-xs text-slate-600 leading-relaxed">Active haptic resistance physically constrains the saw blade within safety zones, protecting adjacent collateral ligaments and neurovascular structures.</p>
                  </div>
                  <div class="bg-white p-4 rounded-xl border border-slate-200">
                    <strong class="text-xs uppercase font-bold text-[#1B4965] block mb-1">Clinical Evidence Perspective</strong>
                    <p class="text-xs text-slate-600 leading-relaxed">Robotic technology significantly reduces alignment outliers and soft-tissue trauma. However, improved technical accuracy does not automatically guarantee superior long-term implant survival, and patient recovery remains dependent on structured rehabilitation.</p>
                  </div>
                </div>
              </div>

              <!-- 4. BENEFITS AND LIMITATIONS -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-200 shadow-xs">
                  <h3 class="text-lg font-black text-emerald-900 mb-3 flex items-center gap-2">
                    Potential Benefits
                  </h3>
                  <ul class="space-y-2 text-sm text-slate-700">
                    <li class="flex items-start gap-2">
                      <span class="text-emerald-600 font-bold">✓</span>
                      <span>CT-guided bone preparation precision tailored to patient-specific constitutional anatomy.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-emerald-600 font-bold">✓</span>
                      <span>Intra-operative dynamic soft-tissue balancing across the full range of motion before bone cuts.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-emerald-600 font-bold">✓</span>
                      <span>Haptic boundary protection minimising bone resection and safeguarding adjacent soft-tissue envelopes.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-emerald-600 font-bold">✓</span>
                      <span>Enables both bone-preserving partial (unicompartmental) and total knee arthroplasty.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-emerald-600 font-bold">✓</span>
                      <span>Documented reduction in perioperative soft-tissue trauma, facilitating early mobilisation.</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-amber-50/70 p-6 rounded-2xl border border-amber-200 shadow-xs">
                  <h3 class="text-lg font-black text-amber-900 mb-3 flex items-center gap-2">
                    Limitations &amp; Considerations
                  </h3>
                  <ul class="space-y-2 text-sm text-slate-700">
                    <li class="flex items-start gap-2">
                      <span class="text-amber-600 font-bold">•</span>
                      <span>Requires a specialised pre-operative low-dose CT scan involving minimal ionising radiation.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-amber-600 font-bold">•</span>
                      <span>Requires placement of temporary optical tracking pins in the femur and tibia.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-amber-600 font-bold">•</span>
                      <span>Does not eliminate standard surgical recovery timelines or the requirement for dedicated physiotherapy.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-amber-600 font-bold">•</span>
                      <span>Does not guarantee that the replaced joint will feel 100% like an unoperated natural knee.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- 5. RISKS AND COMPLICATIONS -->
              <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div class="flex items-center gap-2 text-amber-700 font-extrabold uppercase text-xs tracking-wider">
                  Informed Surgical Consent
                </div>
                <h2 class="text-2xl font-black text-slate-900">
                  Potential Risks &amp; Complications
                </h2>
                <p class="text-sm text-slate-600 leading-relaxed">
                  All surgical interventions involve potential risks. Mr Shankar conducts thorough pre-operative assessments and discusses every aspect openly with patients to support balanced, informed decision-making:
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <span class="text-rose-500 font-bold text-xs mt-0.5">!</span>
                    <span class="text-xs text-slate-700 leading-relaxed">Standard joint replacement risks: surgical site infection (less than 1%), deep vein thrombosis (DVT) or pulmonary embolism (PE), joint stiffness, or persistent aching.</span>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <span class="text-rose-500 font-bold text-xs mt-0.5">!</span>
                    <span class="text-xs text-slate-700 leading-relaxed">Temporary tracking pin site tenderness or superficial bruising on the tibia or femur.</span>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <span class="text-rose-500 font-bold text-xs mt-0.5">!</span>
                    <span class="text-xs text-slate-700 leading-relaxed">Implant wear, loosening, or potential requirement for revision surgery over long-term follow-up.</span>
                  </div>
                  <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5">
                    <span class="text-rose-500 font-bold text-xs mt-0.5">!</span>
                    <span class="text-xs text-slate-700 leading-relaxed">All risks are mitigated through perioperative prophylactic antibiotics, multimodal pain control, thromboprophylaxis, and early physiotherapist mobilisation.</span>
                  </div>
                </div>
              </div>

              <!-- 6. RECOVERY & REHABILITATION -->
              <div id="recovery-rehab" class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <h2 class="text-2xl font-black text-slate-900 flex items-center gap-2">
                  Recovery Timeline &amp; Rehabilitation
                </h2>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Individual recovery rates vary depending on general fitness, age, and joint condition. Early mobilisation under hospital physiotherapy supervision is fundamental to achieving an optimal outcome:
                </p>
                <div class="space-y-4">
                  <div class="flex flex-col sm:flex-row sm:items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span class="sm:w-36 flex-shrink-0 text-xs font-extrabold text-[#1B4965] uppercase">Day 0 (Surgery)</span>
                    <p class="text-sm text-slate-700 leading-relaxed">Early mobilisation with a specialist physiotherapist within hours of surgery; standing, weight-bearing as tolerated with crutches, and gentle ankle pump exercises.</p>
                  </div>
                  <div class="flex flex-col sm:flex-row sm:items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span class="sm:w-36 flex-shrink-0 text-xs font-extrabold text-[#1B4965] uppercase">Days 1 to 3</span>
                    <p class="text-sm text-slate-700 leading-relaxed">Inpatient recovery averaging 1 to 2 nights at Nuffield Health Brentwood Hospital or NHS elective unit. Focus on active knee extension (0°), bending to 90°, stair navigation, and safe transfer techniques.</p>
                  </div>
                  <div class="flex flex-col sm:flex-row sm:items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span class="sm:w-36 flex-shrink-0 text-xs font-extrabold text-[#1B4965] uppercase">Weeks 1 to 6</span>
                    <p class="text-sm text-slate-700 leading-relaxed">Transitioning from two crutches to one crutch or a walking stick. Managing swelling with ice, compression, and elevation. Resuming light sedentary desk work around weeks 4 to 6.</p>
                  </div>
                  <div class="flex flex-col sm:flex-row sm:items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span class="sm:w-36 flex-shrink-0 text-xs font-extrabold text-[#1B4965] uppercase">Weeks 6 to 12</span>
                    <p class="text-sm text-slate-700 leading-relaxed">Resuming driving once safe emergency stopping is confirmed (typically 6 weeks). Progressing to low-impact recreational activities including outdoor walking, stationary cycling, swimming, and golf.</p>
                  </div>
                  <div class="flex flex-col sm:flex-row sm:items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span class="sm:w-36 flex-shrink-0 text-xs font-extrabold text-[#1B4965] uppercase">Months 6 to 12</span>
                    <p class="text-sm text-slate-700 leading-relaxed">Gradual resolution of residual joint warmth, progressive quadriceps strength restoration, and consolidation of durable joint function.</p>
                  </div>
                </div>

                <div class="pt-4 border-t border-slate-100">
                  <h4 class="text-xs uppercase font-extrabold tracking-wider text-slate-500 mb-3">
                    Rehabilitation Milestones:
                  </h4>
                  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <li class="flex items-start gap-2">
                      <span class="text-[#1B4965] font-bold">✓</span>
                      <span>Full passive and active knee extension (straightening to 0°) achieved within 2 weeks.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#1B4965] font-bold">✓</span>
                      <span>Active knee flexion reaching 90° to 100° by weeks 3 to 4, progressing to 110°–120° by week 6.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#1B4965] font-bold">✓</span>
                      <span>Independent indoor and outdoor walking without walking aids between weeks 4 and 6.</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-[#1B4965] font-bold">✓</span>
                      <span>Safe negotiation of stairs using alternating feet with good quadriceps control by weeks 6 to 8.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- 7. HOSPITAL LOCATIONS -->
              <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 class="text-2xl font-black text-slate-900">
                  Hospital Locations &amp; Private Consultation Clinics
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 class="text-sm font-bold text-slate-900 mb-1">Nuffield Health Brentwood</h3>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-2 py-0.5 rounded inline-block mb-2">Private MAKO Centre</span>
                    <p class="text-xs text-slate-600 leading-relaxed mb-2">Dedicated private hospital housing the Stryker MAKO robotic system for insured and self-funding knee replacement patients.</p>
                    <a href="/nuffield-brentwood-hospital" class="text-xs font-bold text-[#1B4965] hover:underline">Hospital details &rarr;</a>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 class="text-sm font-bold text-slate-900 mb-1">BHRUT NHS Trust</h3>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-2 py-0.5 rounded inline-block mb-2">NHS Robotic Services</span>
                    <p class="text-xs text-slate-600 leading-relaxed mb-2">King George Hospital Elective Surgical Hub &amp; Queen's Hospital Romford, where Mr Shankar has personally performed over 100 MAKO joint replacements.</p>
                    <a href="/queens-hospital-romford" class="text-xs font-bold text-[#1B4965] hover:underline">Hospital details &rarr;</a>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <h3 class="text-sm font-bold text-slate-900 mb-1">Spire Hartswood Hospital</h3>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-200 px-2 py-0.5 rounded inline-block mb-2">Conventional &amp; Navigated</span>
                    <p class="text-xs text-slate-600 leading-relaxed mb-2">Private hospital in Brentwood offering conventional manual and computer-navigated knee arthroplasty (not MAKO robotic surgery).</p>
                    <a href="/spire-hartswood-hospital" class="text-xs font-bold text-[#1B4965] hover:underline">Hospital details &rarr;</a>
                  </div>
                </div>
              </div>

              <!-- 8. FREQUENTLY ASKED QUESTIONS -->
              <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                <h2 class="text-2xl font-black text-slate-900 flex items-center gap-2">
                  Frequently Asked Questions (Robotic Knee Surgery)
                </h2>
                <div class="space-y-4">
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                    <h3 class="text-base font-bold text-slate-900">
                      1. What is MAKO robotic knee replacement?
                    </h3>
                    <p class="text-sm text-slate-700 leading-relaxed">
                      MAKO robotic-assisted knee replacement is an advanced surgical technique combining pre-operative low-dose 3D CT virtual modelling with real-time intra-operative haptic guidance. Before surgery, a 3D digital model of the patient's unique knee anatomy is created to calculate optimal implant dimensions, alignment, and orientation. During the operation, Mr Shankar uses the robotic arm as a high-precision instrument to dynamically balance soft tissues and prepare bone within millimetre-level stereotactic safety boundaries, protecting native collateral ligaments and surrounding neurovascular structures.
                    </p>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                    <h3 class="text-base font-bold text-slate-900">
                      2. Does the robot perform the surgery?
                    </h3>
                    <p class="text-sm text-slate-700 leading-relaxed">
                      No. The robotic system never acts autonomously or makes independent decisions. Mr Shivakumar Shankar maintains complete clinical control throughout the procedure. The robotic arm provides tactile (haptic) resistance that guides the saw blade strictly within pre-planned digital boundaries, preventing bone cuts outside the defined surgical plan. All surgical exposures, soft-tissue releases, bone preparation, and implant seating are performed directly by the consultant surgeon.
                    </p>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                    <h3 class="text-base font-bold text-slate-900">
                      3. What is the difference between robotic total and partial knee replacement?
                    </h3>
                    <p class="text-sm text-slate-700 leading-relaxed">
                      In a robotic total knee replacement (TKR), all three compartments of the knee (medial, lateral, and patellofemoral) are resurfaced to address extensive, end-stage tricompartmental arthritis. In a robotic partial knee replacement (unicompartmental arthroplasty), only the damaged arthritic compartment (typically the medial inside or lateral outside) is resurfaced. Because the healthy joint compartments, articular cartilage, and both the anterior and posterior cruciate ligaments (ACL and PCL) are preserved, a partial knee replacement often feels more natural and allows for a faster recovery. Mr Shankar performs comprehensive clinical and radiological evaluations to determine whether a partial or total procedure is most appropriate.
                    </p>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                    <h3 class="text-base font-bold text-slate-900">
                      4. What are the benefits and limitations of robotic knee replacement?
                    </h3>
                    <p class="text-sm text-slate-700 leading-relaxed">
                      Potential clinical benefits include CT-guided bone preparation precision within pre-planned stereotactic boundaries, customised implant positioning matching individual constitutional anatomy, real-time dynamic soft-tissue balancing across the entire arc of motion, and reduced soft-tissue disruption via haptic boundary constraints. However, there are limitations: robotic surgery requires a specialised pre-operative CT scan and temporary bone tracking pins in the femur and tibia. Furthermore, improved technical precision does not automatically guarantee superior long-term clinical outcomes or eliminate standard surgical recovery timelines, and individual outcomes remain dependent on dedicated post-operative physiotherapy.
                    </p>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                    <h3 class="text-base font-bold text-slate-900">
                      5. Is a CT scan required for robotic knee replacement?
                    </h3>
                    <p class="text-sm text-slate-700 leading-relaxed">
                      Yes. A dedicated pre-operative low-dose CT scan of the hip, knee, and ankle is essential for MAKO robotic surgery. This scan enables the specialised software to generate a patient-specific 3D computer model of the bony anatomy and establish the true mechanical axis. This detailed pre-operative template allows Mr Shankar to pre-select implant sizing, position, and rotation before entering the operating theatre, minimising unexpected intra-operative sizing compromises.
                    </p>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                    <h3 class="text-base font-bold text-slate-900">
                      6. How long does recovery take after robotic knee replacement?
                    </h3>
                    <p class="text-sm text-slate-700 leading-relaxed">
                      Recovery varies between patients based on age, overall health, and pre-existing joint deformity. Patients typically mobilise with walking aids within hours of surgery under physiotherapist supervision. Hospital stays average 1 to 2 nights at Nuffield Health Brentwood Hospital or NHS elective units. Most patients transition from two crutches to one crutch or a walking stick within 2 to 4 weeks, and walk independently by 4 to 6 weeks. Driving is generally resumed around 6 weeks, once full emergency stop control is restored, and low-impact activities like swimming, stationary cycling, and golf can usually recommence between 8 and 12 weeks. Complete soft-tissue remodelling continues for 6 to 12 months.
                    </p>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                    <h3 class="text-base font-bold text-slate-900">
                      7. Where is robotic knee replacement available privately and through the NHS?
                    </h3>
                    <p class="text-sm text-slate-700 leading-relaxed">
                      For private patients (both insured and self-funding), Mr Shankar performs MAKO robotic-assisted total and partial knee replacements at Nuffield Health Brentwood Hospital in Brentwood, Essex, convenient for patients travelling from Essex, East London, and Greater London. For NHS patients, Mr Shankar undertakes robotic joint replacement at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), where he has personally completed over 100 MAKO joint replacements (representing his individual surgical caseload, rather than the total performed across the trust). Please note that Spire Hartswood Hospital in Brentwood offers conventional manual and computer-navigated knee replacement surgery, not MAKO robotic surgery.
                    </p>
                  </div>
                </div>
              </div>

              <!-- 9. MEDICAL DISCLAIMER -->
              <div class="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <strong>Medical Information Disclaimer:</strong> The information provided on this page is for general educational purposes and does not substitute for a formal clinical consultation. Recovery timelines, implant choices, and outcomes vary for each individual patient. Please consult Mr Shivakumar Shankar or your treating orthopaedic team for personalised medical advice.
              </div>
            </div>

            <!-- SIDEBAR -->
            <div class="lg:col-span-4 space-y-6">
              <!-- Consultant Card -->
              <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-full bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center font-bold text-lg">
                    SS
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900 text-base">Mr Shivakumar Shankar</h3>
                    <p class="text-xs text-slate-500">Consultant Orthopaedic Hip &amp; Knee Surgeon</p>
                  </div>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Substantive NHS Consultant Orthopaedic Surgeon at BHRUT (Queen's &amp; King George Hospitals) with a Postgraduate Diploma in Computer and Robot-Assisted Arthroplasty. GMC Specialist Register: 6038414.
                </p>
                <div class="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <p><strong>NHS Practice:</strong> Queen's Hospital Romford &amp; King George Hospital Goodmayes (BHRUT)</p>
                  <p><strong>Private Practice:</strong> Nuffield Health Brentwood Hospital (MAKO Robotic) &amp; Spire Hartswood Hospital</p>
                </div>
                <a
                  href="/book-consultation"
                  class="w-full bg-[#1B4965] hover:bg-[#13364B] text-white py-3 rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  Book Private Consultation
                </a>
              </div>

              <!-- Secretary Contact Box -->
              <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs text-slate-700">
                <span class="text-[10px] font-extrabold uppercase text-[#1B4965] tracking-wider block">
                  Private Practice Enquiries
                </span>
                <p class="font-bold text-slate-900 text-sm">Remya Rexlin</p>
                <p class="text-slate-500">Medical Secretary to Mr Shankar</p>
                <div class="pt-2 space-y-1.5">
                  <p><strong>Mobile:</strong> <a href="tel:07587765888" class="text-[#1B4965] hover:underline font-bold">07587 765888</a></p>
                  <p><strong>Office:</strong> <a href="tel:02035230621" class="text-[#1B4965] hover:underline">020 3523 0621</a></p>
                  <p><strong>Email:</strong> <a href="mailto:hip.knee_specialist@yahoo.com" class="text-[#1B4965] hover:underline break-all">hip.knee_specialist@yahoo.com</a></p>
                </div>
              </div>

              <!-- Related Internal Links -->
              <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h4 class="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Related Clinical Pages
                </h4>
                <div class="space-y-3">
                  <a
                    href="/knee-replacement"
                    class="block p-3 rounded-xl bg-slate-50 hover:bg-[#EAF1F6] border border-slate-100 hover:border-[#1B4965]/30 transition-colors group"
                  >
                    <strong class="text-xs font-bold text-slate-900 group-hover:text-[#1B4965] flex items-center justify-between">
                      <span>Total Knee Replacement</span>
                      <span class="text-slate-400 group-hover:text-[#1B4965]">&rarr;</span>
                    </strong>
                    <p class="text-[11px] text-slate-500 mt-1 leading-normal">
                      Comprehensive guide to total knee arthroplasty, kinematics, and implant choices.
                    </p>
                  </a>
                  <a
                    href="/partial-knee-replacement"
                    class="block p-3 rounded-xl bg-slate-50 hover:bg-[#EAF1F6] border border-slate-100 hover:border-[#1B4965]/30 transition-colors group"
                  >
                    <strong class="text-xs font-bold text-slate-900 group-hover:text-[#1B4965] flex items-center justify-between">
                      <span>Partial Knee Replacement</span>
                      <span class="text-slate-400 group-hover:text-[#1B4965]">&rarr;</span>
                    </strong>
                    <p class="text-[11px] text-slate-500 mt-1 leading-normal">
                      Tissue-sparing unicompartmental knee resurfacing preserving native cruciate ligaments.
                    </p>
                  </a>
                  <a
                    href="/computer-assisted-knee-replacement"
                    class="block p-3 rounded-xl bg-slate-50 hover:bg-[#EAF1F6] border border-slate-100 hover:border-[#1B4965]/30 transition-colors group"
                  >
                    <strong class="text-xs font-bold text-slate-900 group-hover:text-[#1B4965] flex items-center justify-between">
                      <span>Computer-Assisted Knee Surgery</span>
                      <span class="text-slate-400 group-hover:text-[#1B4965]">&rarr;</span>
                    </strong>
                    <p class="text-[11px] text-slate-500 mt-1 leading-normal">
                      Optical navigation restoring mechanical alignment axes without pre-operative CT scans.
                    </p>
                  </a>
                  <a
                    href="/knee-replacement-recovery"
                    class="block p-3 rounded-xl bg-slate-50 hover:bg-[#EAF1F6] border border-slate-100 hover:border-[#1B4965]/30 transition-colors group"
                  >
                    <strong class="text-xs font-bold text-slate-900 group-hover:text-[#1B4965] flex items-center justify-between">
                      <span>Knee Recovery Guide</span>
                      <span class="text-slate-400 group-hover:text-[#1B4965]">&rarr;</span>
                    </strong>
                    <p class="text-[11px] text-slate-500 mt-1 leading-normal">
                      Detailed week-by-week rehabilitation, swelling management, and return-to-driving milestones.
                    </p>
                  </a>
                  <a
                    href="/nuffield-brentwood-hospital"
                    class="block p-3 rounded-xl bg-slate-50 hover:bg-[#EAF1F6] border border-slate-100 hover:border-[#1B4965]/30 transition-colors group"
                  >
                    <strong class="text-xs font-bold text-slate-900 group-hover:text-[#1B4965] flex items-center justify-between">
                      <span>Nuffield Health Brentwood Hospital</span>
                      <span class="text-slate-400 group-hover:text-[#1B4965]">&rarr;</span>
                    </strong>
                    <p class="text-[11px] text-slate-500 mt-1 leading-normal">
                      Private MAKO robotic-assisted joint replacement centre in Brentwood, Essex.
                    </p>
                  </a>
                  <a
                    href="/spire-hartswood-hospital"
                    class="block p-3 rounded-xl bg-slate-50 hover:bg-[#EAF1F6] border border-slate-100 hover:border-[#1B4965]/30 transition-colors group"
                  >
                    <strong class="text-xs font-bold text-slate-900 group-hover:text-[#1B4965] flex items-center justify-between">
                      <span>Spire Hartswood Hospital</span>
                      <span class="text-slate-400 group-hover:text-[#1B4965]">&rarr;</span>
                    </strong>
                    <p class="text-[11px] text-slate-500 mt-1 leading-normal">
                      Conventional and computer-navigated hip and knee replacement in Brentwood, Essex.
                    </p>
                  </a>
                  <a
                    href="/reviews"
                    class="block p-3 rounded-xl bg-slate-50 hover:bg-[#EAF1F6] border border-slate-100 hover:border-[#1B4965]/30 transition-colors group"
                  >
                    <strong class="text-xs font-bold text-slate-900 group-hover:text-[#1B4965] flex items-center justify-between">
                      <span>Patient Reviews &amp; Outcomes</span>
                      <span class="text-slate-400 group-hover:text-[#1B4965]">&rarr;</span>
                    </strong>
                    <p class="text-[11px] text-slate-500 mt-1 leading-normal">
                      Verified patient testimonials and feedback on Doctify and I Want Great Care.
                    </p>
                  </a>
                  <a
                    href="/book-consultation"
                    class="block p-3 rounded-xl bg-slate-50 hover:bg-[#EAF1F6] border border-slate-100 hover:border-[#1B4965]/30 transition-colors group"
                  >
                    <strong class="text-xs font-bold text-slate-900 group-hover:text-[#1B4965] flex items-center justify-between">
                      <span>Book a Consultation</span>
                      <span class="text-slate-400 group-hover:text-[#1B4965]">&rarr;</span>
                    </strong>
                    <p class="text-[11px] text-slate-500 mt-1 leading-normal">
                      Schedule an outpatient consultation with Mr Shivakumar Shankar in Essex or London.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
    ${renderFooter()}
    `
  },

  // 10. Computer-Assisted Knee Replacement
  {
    path: 'computer-assisted-knee-replacement',
    title: 'Computer-Navigated Knee Replacement Essex & London | Mr Shivakumar Shankar',
    description: 'Specialist computer-assisted and navigated total knee replacement in Essex and London with Mr Shivakumar Shankar. Optical infrared tracking and mechanical axis alignment at Spire Hartswood Hospital, Brentwood.',
    canonical: 'https://www.shivakumarshankar.co.uk/computer-assisted-knee-replacement',
    customJsonLd: generateProcedureJsonLd({
      path: 'computer-assisted-knee-replacement',
      data: CLINICAL_PROCEDURES['computer-assisted-knee-replacement'],
      title: 'Computer-Navigated Knee Replacement Essex & London | Mr Shivakumar Shankar',
      description: 'Specialist computer-assisted and navigated total knee replacement in Essex and London with Mr Shivakumar Shankar. Optical infrared tracking and mechanical axis alignment at Spire Hartswood Hospital, Brentwood.',
      canonical: 'https://www.shivakumarshankar.co.uk/computer-assisted-knee-replacement',
      procedureName: 'Computer-Navigated Total Knee Replacement Surgery',
      bodyLocation: 'Knee joint',
      howPerformed: 'Intra-operative optical infrared navigation registering the hip-knee-ankle mechanical axis, setting navigated femoral and tibial cutting blocks without breaching the femoral intramedullary canal, assessing dynamic flexion-extension gap balance, and securing precision prosthetic components under complete surgeon control.',
      breadcrumbs: [
        { name: 'Knee Surgery', href: '/knee-replacement' }
      ]
    }),
    bodyHtml: renderClinicalProcedurePage(
      CLINICAL_PROCEDURES['computer-assisted-knee-replacement'],
      [
        { name: 'Knee Surgery', href: '/knee-replacement' }
      ]
    )
  },

  // 11. Partial Knee Replacement
  {
    path: 'partial-knee-replacement',
    title: 'Partial Knee Replacement London & Essex | Mr Shivakumar Shankar',
    description: 'Mr Shivakumar Shankar provides conventional and MAKO robotic-assisted partial (unicompartmental) knee replacement where clinically appropriate in Essex and London, with private clinics in Brentwood.',
    canonical: 'https://www.shivakumarshankar.co.uk/partial-knee-replacement',
    customJsonLd: generateProcedureJsonLd({
      path: 'partial-knee-replacement',
      title: 'Partial Knee Replacement London & Essex | Mr Shivakumar Shankar',
      description: 'Mr Shivakumar Shankar provides conventional and MAKO robotic-assisted partial (unicompartmental) knee replacement where clinically appropriate in Essex and London, with private clinics in Brentwood.',
      canonical: 'https://www.shivakumarshankar.co.uk/partial-knee-replacement',
      data: CLINICAL_PROCEDURES['partial-knee-replacement'],
      procedureName: 'Partial (Unicompartmental) Knee Replacement Surgery',
      bodyLocation: 'Knee joint (medial or lateral compartment)',
      howPerformed: 'Tissue-sparing resurfacing of the damaged medial or lateral knee compartment while keeping healthy articular cartilage, native subchondral bone, and both the anterior and posterior cruciate ligaments (ACL and PCL) intact, using cemented metallic alloy implants and a durable polyethylene bearing.',
      breadcrumbs: [{ name: 'Knee Replacement', href: '/knee-replacement' }]
    }),
    bodyHtml: renderClinicalProcedurePage(
      CLINICAL_PROCEDURES['partial-knee-replacement'],
      [{ name: 'Knee Replacement', href: '/knee-replacement' }]
    )
  },

  // 12. Knee Arthroscopy
  {
    path: 'knee-arthroscopy',
    title: 'Knee Arthroscopy & Keyhole Surgery | Mr Shivakumar Shankar',
    description: 'Minimally invasive keyhole knee surgery for meniscal tears, cartilage repair, and loose bodies in London and Essex. Over 1,200 procedures performed.',
    canonical: 'https://www.shivakumarshankar.co.uk/knee-arthroscopy',
    bodyHtml: renderPageShell(
      'knee-arthroscopy',
      'Minimally Invasive Joint Preservation • Over 1,200 Cases',
      'Knee Arthroscopy &amp; Keyhole Joint Preservation Surgery',
      'Keyhole day-case surgical management of meniscal tears, cartilage wear, mechanical joint locking, and biological regenerative therapies by Mr Shivakumar Shankar.',
      `
      ${renderCardGrid([
        {
          title: 'Meniscal Repair & Preservation',
          desc: 'Prioritises repairing meniscal tears with all-inside suture anchors rather than trimming, safeguarding natural shock absorption.'
        },
        {
          title: 'Chondral Debridement & Loose Bodies',
          desc: 'Clears mechanical fragments and smooths damaged articular surfaces to alleviate catching and joint locking.'
        },
        {
          title: 'Day-Case Discharge',
          desc: 'Small puncture incisions enable immediate mobilisation and safe same-day hospital discharge.'
        }
      ])}
      `
    )
  },

  // 13. PRP Injections (Platelet-Rich Plasma)
  {
    path: 'prp-injection',
    title: 'PRP Injections | Mr Shivakumar Shankar | London & Essex',
    description: 'Consultant-led Platelet-Rich Plasma (PRP) injections in London and Essex for selected knee and musculoskeletal conditions. Balanced clinical assessment.',
    canonical: 'https://www.shivakumarshankar.co.uk/prp-injection',
    bodyHtml: renderPageShell(
      'prp-injection',
      'Non-Surgical Musculoskeletal Therapy • London & Essex',
      'PRP Injections in London &amp; Essex',
      'Platelet-Rich Plasma (PRP) injections are a non-surgical treatment option that may be considered for selected musculoskeletal conditions. PRP is prepared from a patient\'s own blood and contains a concentration of platelets and associated growth factors.',
      `
      <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
        <h2 class="text-2xl font-bold text-slate-900">What is PRP? (Platelet-Rich Plasma)</h2>
        <p class="text-sm text-slate-700 leading-relaxed">
          Platelet-Rich Plasma (PRP) is an autologous treatment prepared exclusively from the patient's own blood. A small amount of venous blood is collected in the clinic and processed in a specialised centrifuge to separate and concentrate platelets in the plasma. The resulting platelet-rich plasma is then carefully injected into the relevant joint or soft tissue. Because it is autologous, foreign biological reactions or allergic rejection risks are virtually eliminated.
        </p>
      </section>

      <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
        <h2 class="text-2xl font-bold text-slate-900">Conditions Where PRP May Be Considered</h2>
        <p class="text-sm text-slate-700 leading-relaxed">
          PRP may be considered as an additional non-surgical treatment option for selected patients with:
        </p>
        <ul class="text-sm text-slate-700 space-y-2 list-disc pl-5">
          <li><strong>Selected mild-to-moderate knee osteoarthritis:</strong> In patients experiencing persistent joint aching or swelling despite initial conservative measures.</li>
          <li><strong>Selected tendon-related conditions:</strong> Including chronic patellar tendinopathy or recalcitrant soft-tissue irritation.</li>
          <li><strong>Other appropriate musculoskeletal conditions:</strong> Evaluated carefully on an individual clinical basis.</li>
        </ul>
        <div class="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900 mt-3">
          <strong>Clinical Note:</strong> Evidence varies depending on the condition and grade of wear. PRP is not suitable for every patient and does not cure osteoarthritis or regrow completely worn cartilage.
        </div>
      </section>

      <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
        <h2 class="text-2xl font-bold text-slate-900">How PRP Treatment Works</h2>
        <ol class="text-sm text-slate-700 space-y-3 list-decimal pl-5">
          <li><strong>Consultation and Clinical Assessment:</strong> Comprehensive clinical evaluation, examination, and review of recent imaging (X-rays or MRI).</li>
          <li><strong>Discussion of Treatment Suitability:</strong> Open discussion regarding whether PRP, other non-surgical therapies, or surgical procedures are most appropriate.</li>
          <li><strong>Blood Sample Collection:</strong> A routine blood draw of 15 to 30 ml from a vein in your arm.</li>
          <li><strong>Preparation of PRP:</strong> Strict aseptic processing in a dedicated centrifuge to concentrate the platelet layer.</li>
          <li><strong>Injection into the Affected Area:</strong> Precise delivery of the concentrated plasma into the joint under aseptic outpatient conditions.</li>
          <li><strong>Post-Treatment Advice and Rehabilitation:</strong> Some temporary modification of activity may be recommended following treatment. Specific advice will depend on the area treated and the individual's clinical circumstances. Patients should follow the individual aftercare advice provided following their procedure.</li>
        </ol>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <h2 class="text-xl font-bold text-slate-900">Potential Benefits</h2>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Some patients experience improvement in pain and joint function, but response varies between individuals. No treatment offers guaranteed pain relief, cartilage regeneration, or guaranteed avoidance of surgery.
          </p>
        </div>
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <h2 class="text-xl font-bold text-slate-900">Limitations and Evidence</h2>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Clinical evidence for PRP varies between conditions and studies. It is not an alternative to joint replacement in patients with advanced bone-on-bone arthritis.
          </p>
        </div>
      </section>

      <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
        <h2 class="text-2xl font-bold text-slate-900">Risks and Side Effects</h2>
        <p class="text-sm text-slate-700 leading-relaxed">
          PRP is generally well-tolerated. Recognised potential side effects include temporary soreness or discomfort following treatment, mild swelling, localised bruising, an extremely rare risk of infection, and the possibility that response varies between individuals.
        </p>
      </section>

      <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
        <h2 class="text-2xl font-bold text-slate-900">Alternative Non-Surgical and Surgical Options</h2>
        <p class="text-sm text-slate-700 leading-relaxed">
          Patients have multiple evidence-based pathways depending on clinical severity: activity modification, physiotherapy, weight management, simple analgesia, corticosteroid or hyaluronic acid injections, and surgical options such as knee arthroscopy, partial knee replacement, or total knee replacement when indicated.
        </p>
      </section>

      <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
        <h2 class="text-2xl font-bold text-slate-900">Suitability and Clinical Assessment</h2>
        <p class="text-sm text-slate-700 leading-relaxed">
          Suitability is determined through expert clinical evaluation by Consultant Orthopaedic Surgeon Mr Shivakumar Shankar, review of radiographic imaging (weight-bearing X-rays or MRI), and transparent discussion tailored to your personal goals.
        </p>
      </section>

      <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
        <h2 class="text-2xl font-bold text-slate-900">Funding and Insurance</h2>
        <p class="text-sm text-slate-700 leading-relaxed">
          PRP treatment is generally a self-funded treatment. Some private medical insurers may not cover or authorise PRP injections, depending on the individual policy, insurer criteria and the clinical circumstances. Patients are advised to check directly with their insurer before proceeding with treatment.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
            <h3 class="font-bold text-slate-900">Private Medical Insurance</h3>
            <ul class="space-y-1 list-disc pl-4 text-xs text-slate-600">
              <li>PRP may not be covered under all private medical insurance policies.</li>
              <li>Prior authorisation may be required by some insurers before treatment.</li>
              <li>Patients should confirm their individual level of cover directly with their insurer.</li>
              <li>The fact that a patient has private medical insurance does not necessarily mean that PRP treatment will be covered.</li>
            </ul>
          </div>
          <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
            <h3 class="font-bold text-slate-900">Self-Funded Treatment</h3>
            <ul class="space-y-1 list-disc pl-4 text-xs text-slate-600">
              <li>If insurance does not cover the treatment, PRP may be available as a self-funded option, subject to clinical suitability.</li>
              <li>Suitability is confirmed during your consultation following detailed examination.</li>
              <li>Transparent hospital facility and package fee details are confirmed in advance.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
        <h2 class="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div class="space-y-3 text-sm text-slate-700">
          <div>
            <h3 class="font-bold text-slate-900">Is PRP treatment covered by private medical insurance?</h3>
            <p class="text-xs sm:text-sm text-slate-600">Coverage varies between insurers and individual policies. PRP treatment may not be covered or may require prior authorisation. Patients should check directly with their private medical insurer before proceeding. Where insurance does not cover PRP, treatment may be available as a self-funded option, subject to clinical assessment and suitability.</p>
          </div>
          <div>
            <h3 class="font-bold text-slate-900">Is PRP right for everyone?</h3>
            <p class="text-xs sm:text-sm text-slate-600">No. Patients with advanced structural deformity or end-stage arthritis are typically better served by surgical intervention.</p>
          </div>
          <div>
            <h3 class="font-bold text-slate-900">How many PRP injections will I need?</h3>
            <p class="text-xs sm:text-sm text-slate-700">For knee osteoarthritis, my usual treatment protocol is a course of <strong>three PRP injections, typically given at intervals of approximately 2–3 weeks</strong>. However, treatment is individualised. A <strong>single PRP injection may also be considered</strong> depending on the condition being treated, the severity of symptoms, clinical findings, patient preference and response to treatment. The appropriate number and timing of injections will be discussed following clinical assessment.</p>
          </div>
          <div>
            <h3 class="font-bold text-slate-900">What should I expect during the appointment?</h3>
            <p class="text-xs sm:text-sm text-slate-600">PRP treatment is generally performed as an outpatient procedure. The time required can vary depending on the assessment and treatment being undertaken (typically approximately 30 to 45 minutes).</p>
          </div>
          <div>
            <h3 class="font-bold text-slate-900">What is the recovery after an injection?</h3>
            <p class="text-xs sm:text-sm text-slate-600">Recovery and response to PRP vary between individuals and according to the condition being treated. Some temporary soreness or discomfort may occur following treatment. Some temporary modification of activity may be recommended, and advice regarding activity, exercise and rehabilitation will be tailored to the individual. Patients should follow the individual aftercare advice provided following their procedure.</p>
          </div>
          <div>
            <h3 class="font-bold text-slate-900">Can PRP cure arthritis?</h3>
            <p class="text-xs sm:text-sm text-slate-600"><strong>No.</strong> PRP is not a cure for joint arthritis and cannot regrow lost articular cartilage.</p>
          </div>
        </div>
      </section>

      <section class="p-8 bg-[#EAF1F6] rounded-2xl border border-slate-300 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div>
          <h2 class="text-xl font-bold text-[#1B4965]">Consultation &amp; PRP Suitability Assessment</h2>
          <p class="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            To discuss whether PRP injection is suitable for your condition, book a consultation with Mr Shivakumar Shankar at Spire Hartswood Hospital or Nuffield Health Brentwood Hospital in Essex.
          </p>
          <div class="p-3 bg-white/80 rounded-lg border border-slate-300 text-xs text-slate-700 mt-3 max-w-2xl">
            <strong>Please note:</strong> PRP treatment is generally self-funded, and private medical insurance cover varies between policies. Please check with your insurer before treatment.
          </div>
        </div>
        <div class="flex gap-3">
          <a href="/book-consultation" class="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-sm">
            Book Consultation
          </a>
          <a href="/contact" class="bg-white hover:bg-slate-50 text-[#1B4965] border border-slate-300 px-6 py-3 rounded-lg font-bold text-xs transition-colors">
            Contact Secretary
          </a>
        </div>
      </section>
      `
    )
  },

  // 14. Robotic & Computer-Assisted Surgery Overview
  {
    path: 'robotic-computer-assisted-surgery',
    title: 'Robotic & Computer-Assisted Hip & Knee Surgery | Essex & London',
    description: 'Pioneering robotic & computer-assisted joint replacement by Mr Shivakumar Shankar. Navigational precision and personalised soft-tissue balancing.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-computer-assisted-surgery',
    bodyHtml: renderPageShell(
      'robotic-surgery',
      'Regional Pioneer in Essex & North East London',
      'Robotic &amp; Computer-Assisted Hip and Knee Surgery',
      'Mr Shivakumar Shankar has personally completed more than 100 MAKO robotic hip and knee replacement surgeries (representing his individual surgical series, rather than a trust total) and was the first surgeon to perform computer-assisted and robotic total hip replacement in Essex and North East London, combining longstanding conventional and computer-assisted experience with MAKO robotic guidance.',
      `
      ${renderCardGrid([
        {
          title: 'Surgeon Control vs Robot',
          desc: 'The robot never acts autonomously. It operates as an assistive precision tool with active safety boundaries controlled by Mr Shankar.'
        },
        {
          title: '3D Virtual Modelling',
          desc: 'Pre-operative CT planning provides detailed anatomical templating matched specifically to individual bone geometry.'
        },
        {
          title: 'Dynamic Gap Balancing',
          desc: 'Evaluates soft-tissue balance in real-time through the full motion arc prior to executing bone resections.'
        }
      ])}
      `
    )
  },

  // 14. /robotic-surgery (alias)
  {
    path: 'robotic-surgery',
    title: 'Robotic & Computer-Assisted Hip & Knee Surgery | Essex & London',
    description: 'Pioneering robotic & computer-assisted joint replacement by Mr Shivakumar Shankar. Navigational precision and personalised soft-tissue balancing.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-computer-assisted-surgery',
    bodyHtml: renderPageShell(
      'robotic-surgery',
      'Regional Pioneer in Essex & North East London',
      'Robotic &amp; Computer-Assisted Hip and Knee Surgery',
      'Comprehensive patient guide to computer navigation and Mako robotic-assisted technology for total hip, total knee, and partial knee replacement in London and Essex.',
      `
      ${renderCardGrid([
        {
          title: 'Precision Implant Alignment',
          desc: 'Supports precise execution of the planned implant position and soft-tissue balance tailored to patient anatomy.'
        },
        {
          title: 'Clinical Experience',
          desc: '9 years experience in computer-assisted surgery, incorporating Mako robotic technology.'
        },
        {
          title: 'Available Locations',
          desc: 'MAKO robotic-assisted joint replacement is available at Nuffield Health Brentwood Hospital, with robotic services also at BHRUT NHS hospitals, alongside conventional and computer-navigated surgery at Spire Hartswood.'
        }
      ])}
      `
    )
  },

  // 15. Conventional vs Computer-Assisted vs Robotic
  {
    path: 'conventional-vs-computer-assisted-vs-robotic-surgery',
    title: 'Conventional vs Computer-Assisted vs Robotic Surgery | Clinical Guide',
    description: 'Objective comparison of conventional manual, computer-navigated, and robotic-assisted joint replacement surgery with clinical evidence.',
    canonical: 'https://www.shivakumarshankar.co.uk/conventional-vs-computer-assisted-vs-robotic-surgery',
    bodyHtml: renderPageShell(
      'technology-comparison',
      'Clinical Comparison • Evidence-Based Overview',
      'Conventional vs Computer-Assisted vs Robotic Surgery',
      'A balanced, educational review evaluating the differences in surgical planning, component alignment, intra-operative navigation, surgeon control, and clinical evidence across manual, computer-navigated, and robotic joint replacement.',
      `
      ${renderCardGrid([
        {
          title: 'Conventional Manual Surgery',
          desc: 'Proven worldwide over decades using mechanical alignment jigs and surgeon tactile assessment. Dependent on individual anatomical landmarks.'
        },
        {
          title: 'Computer-Assisted Navigation',
          desc: 'Intra-operative optical tracking verifies mechanical axes and component angles in real time without pre-operative CT scans.'
        },
        {
          title: 'Robotic-Assisted Surgery',
          desc: 'Combines pre-operative 3D CT modelling with active haptic stereotactic boundary guidance and dynamic soft-tissue tension mapping.'
        }
      ])}
      `
    )
  },

  // 16. Patient Information Hub
  {
    path: 'patient-information',
    title: 'Patient Information & Surgical Guides | Mr Shivakumar Shankar',
    description: 'Comprehensive patient resources, surgical preparations, informed consent, and rehabilitation pathways for hip and knee operations.',
    canonical: 'https://www.shivakumarshankar.co.uk/patient-information',
    bodyHtml: renderPageShell(
      'patient-resources',
      'Informed Consent & Rehabilitation Guides',
      'Patient Information Guides &amp; Surgical Protocols',
      'Comprehensive educational resources, preparation checklists, recovery timelines, non-operative options, and downloadable physiotherapy protocols authored by Mr Shivakumar Shankar.',
      `
      ${renderCardGrid([
        {
          title: 'Surgical Preparation',
          desc: 'Pre-assessment guidance, medication reviews, and practical home setup tips for safe post-operative discharge.'
        },
        {
          title: 'Transparent Risk Profile',
          desc: 'Clear explanations of blood clot prevention, infection precautions, and joint-specific surgical considerations.'
        },
        {
          title: 'Physiotherapy Protocols',
          desc: 'Downloadable clinical PDF exercise protocols guiding step-by-step rehabilitation from hospital to daily activities.'
        }
      ])}
      `
    )
  },

  // 17. /patient-guides (alias)
  {
    path: 'patient-guides',
    title: 'Patient Information & Guides | Mr Shivakumar Shankar',
    description: 'Patient information guides, surgical risks, non-operative options, and downloadable PDF rehabilitation protocols for hip and knee replacement patients.',
    canonical: 'https://www.shivakumarshankar.co.uk/patient-information',
    bodyHtml: renderPageShell(
      'patient-resources',
      'Informed Consent & Rehabilitation',
      'Patient Information Guides &amp; Rehabilitation Protocols',
      'Authoritative guidance on surgical preparation, conservative non-operative alternatives, transparent explanations of surgical risks, and comprehensive day-by-day rehabilitation protocols.',
      `
      ${renderCardGrid([
        {
          title: 'Recovery Milestones',
          desc: 'Clear guidance on walking progression, crutch weaning, driving resumption, and return to work.'
        },
        {
          title: 'Warning Signs (Red Flags)',
          desc: 'Clear instructions distinguishing expected post-surgical swelling from symptoms requiring urgent team contact.'
        },
        {
          title: 'Direct Secretary Contact',
          desc: 'Dedicated secretarial support for rapid post-operative queries and clinic appointment coordination.'
        }
      ])}
      `
    )
  },

  // 18. Hip Replacement Recovery
  {
    path: 'hip-replacement-recovery',
    title: 'Hip Replacement Recovery Guide | Milestones, Walking & Driving',
    description: 'Evidence-based recovery guide detailing post-operative milestones, exercise regimens, driving guidelines, and return to work after hip arthroplasty.',
    canonical: 'https://www.shivakumarshankar.co.uk/hip-replacement-recovery',
    bodyHtml: renderPageShell(
      'hip-recovery',
      'Clinical Recovery Pathway • Hip Arthroplasty',
      'Hip Replacement Recovery Guide',
      'Comprehensive recovery milestones, wound care advice, walking progression, returning to driving, returning to work, and warning signs following total hip replacement surgery.',
      `
      ${renderCardGrid([
        {
          title: 'Weeks 0 to 2: Mobilisation',
          desc: 'Hospital discharge typically day 1 or 2. Walking with two crutches, regular ice therapy, and dedicated abductor exercises.'
        },
        {
          title: 'Weeks 3 to 6: Weaning Aids',
          desc: 'Transition to single stick, progressive walking tolerance, and driving assessment once emergency stop capability is confirmed.'
        },
        {
          title: 'Weeks 6 to 12+: Return to Work',
          desc: 'Resuming desk duties (4-6 weeks) or manual occupations (8-12 weeks), low-impact cycling, and swimming.'
        }
      ])}
      `
    )
  },

  // 19. Knee Replacement Recovery
  {
    path: 'knee-replacement-recovery',
    title: 'Knee Replacement Recovery Guide | Milestones & Rehabilitation',
    description: 'Comprehensive recovery timeline for knee replacement, managing swelling, restoring range of motion, and returning to daily activities.',
    canonical: 'https://www.shivakumarshankar.co.uk/knee-replacement-recovery',
    bodyHtml: renderPageShell(
      'knee-recovery',
      'Clinical Recovery Pathway • Knee Arthroplasty',
      'Knee Replacement Recovery Guide',
      'Detailed recovery milestones, straightening and bending exercises, swelling management, driving resumption, and rehabilitation after total and partial knee replacement.',
      `
      ${renderCardGrid([
        {
          title: 'Restoring Knee Straightening',
          desc: 'Achieving 0 degrees full extension early prevents long-term walking limps and restores quadriceps strength.'
        },
        {
          title: 'Managing Joint Swelling',
          desc: 'Elevating the leg above heart level, structured cryotherapy (ice packs), and avoiding prolonged dependent standing.'
        },
        {
          title: 'Restoring Knee Bend',
          desc: 'Graded flexion exercises aiming for 90 degrees by week 2 and 110+ degrees by week 6 to 8 for normal stair climbing.'
        }
      ])}
      `
    )
  },

  // 20. Preparing for Surgery
  {
    path: 'preparing-for-surgery',
    title: 'Preparing for Joint Surgery | Pre-Assessment Checklist & Advice',
    description: 'Practical guidance on preparing for hip or knee surgery, pre-assessment clinic, medication management, and home preparation.',
    canonical: 'https://www.shivakumarshankar.co.uk/preparing-for-surgery',
    bodyHtml: renderPageShell(
      'surgical-preparation',
      'Patient Preparation Guide • Hospital Pathway',
      'Preparing for Hip or Knee Surgery',
      'Essential guidance for patients undergoing joint replacement: pre-assessment checks, stopping medications safely, preparing your home, and what to pack for hospital.',
      `
      ${renderCardGrid([
        {
          title: 'Pre-Assessment Clinic',
          desc: 'Blood tests, ECG, MRSA swabs, and consultation with the anaesthetic team to ensure medical fitness for surgery.'
        },
        {
          title: 'Home Preparation',
          desc: 'Clear pathways, remove loose rugs, arrange ground-floor recovery sleeping if stairs are difficult, and organise assistance.'
        },
        {
          title: 'Hospital Bag Checklist',
          desc: 'Loose comfortable clothing, supportive flat shoes, current medications in original boxes, and toiletries.'
        }
      ])}
      `
    )
  },

  // 21. Frequently Asked Questions
  {
    path: 'frequently-asked-questions',
    title: 'Orthopaedic FAQs | Hip & Knee Surgery Questions Answered',
    description: 'Answers to frequent patient questions on private health insurance, consultation fees, surgical recovery, anaesthesia, and implant durability.',
    canonical: 'https://www.shivakumarshankar.co.uk/frequently-asked-questions',
    bodyHtml: renderPageShell(
      'faqs',
      'Frequently Asked Questions • Practice FAQ',
      'Frequently Asked Questions (FAQs)',
      'Clear, authoritative answers to common patient questions covering private medical insurance pre-authorisation, self-pay fixed price packages, hospital stay, anaesthesia, and post-operative recovery.',
      `
      ${renderCardGrid([
        {
          title: 'Private Health Insurance',
          desc: 'Mr Shankar is recognised by all major UK medical insurers including Bupa, AXA Health, Aviva, Vitality, and WPA.'
        },
        {
          title: 'Self-Pay Package Quotes',
          desc: 'Fixed-price surgical packages with zero hidden costs are provided directly by Spire Hartswood and Nuffield Health Brentwood.'
        },
        {
          title: 'Anaesthetic Choices',
          desc: 'Most joint replacements are performed using spinal anaesthesia with light sedation, avoiding general anaesthetic grogginess.'
        }
      ])}
      `
    )
  },

  // 22. Physiotherapy Protocols
  {
    path: 'physio-protocols',
    title: 'Physiotherapy Protocols & PDFs | Mr Shivakumar Shankar',
    description: 'Downloadable clinical rehabilitation protocols and exercise guidelines for total hip, total knee, partial knee, and arthroscopy patients.',
    canonical: 'https://www.shivakumarshankar.co.uk/physio-protocols',
    bodyHtml: renderPageShell(
      'physiotherapy',
      'Downloadable PDF Protocols • Rehabilitation',
      'Physiotherapy Protocols &amp; Rehabilitation Guidelines',
      'Downloadable step-by-step physiotherapy protocols authored by Mr Shivakumar Shankar to guide your post-operative recovery and optimise joint range of motion.',
      `
      ${renderCardGrid([
        {
          title: 'Total Hip Replacement Protocol',
          desc: 'Phase 1 to Phase 4 progressive rehabilitation from initial bed exercises to advanced gait and balance training.'
        },
        {
          title: 'Total Knee Replacement Protocol',
          desc: 'Active extension restoration, quadriceps reactivation, and progressive knee flexion milestones.'
        },
        {
          title: 'Knee Arthroscopy Protocol',
          desc: 'Rapid keyhole meniscal recovery guidelines for immediate day-case discharge and return to sports.'
        }
      ])}
      `
    )
  },

  // 23. Hospitals & Locations Overview
  {
    path: 'hospitals-locations',
    title: 'Hospitals & Practice Locations | London & Essex Hip Knee Surgeon',
    description: 'Consulting and surgical locations across Essex and London: Spire Hartswood, Nuffield Health Brentwood, Queen\'s Hospital, and King George Hospital.',
    canonical: 'https://www.shivakumarshankar.co.uk/hospitals-locations',
    bodyHtml: renderPageShell(
      'hospitals-overview',
      'Consulting Locations • London & Essex',
      'Hospitals &amp; Consulting Locations',
      'Mr Shivakumar Shankar consults and operates across private and NHS hospital facilities in Essex and North East London, providing convenient access for London and Essex patients.',
      `
      ${renderCardGrid([
        {
          title: 'Spire Hartswood Hospital',
          desc: 'Premier private hospital in Brentwood, Essex with laminar flow theatres, on-site MRI/CT, and en-suite inpatient rooms.'
        },
        {
          title: 'Nuffield Health Brentwood',
          desc: 'Renowned private hospital in Brentwood, Essex offering fixed-price self-pay packages and advanced robotic surgery.'
        },
        {
          title: 'BHRUT NHS Trust Hospitals',
          desc: 'Substantive NHS consultant practice at Queen\'s Hospital Romford (Major Trauma) and King George Hospital Goodmayes.'
        }
      ])}
      `
    )
  },

  // 24. London Hip & Knee Surgeon
  {
    path: 'london-hip-knee-surgeon',
    title: 'London & North East London Hip, Knee & Revision Surgeon | Mr Shivakumar Shankar',
    description: 'Mr Shivakumar Shankar is a Consultant Orthopaedic Hip, Knee and Revision Hip Surgeon serving London and North East London, with NHS practice at BHRUT and private clinics in Brentwood, Essex.',
    canonical: 'https://www.shivakumarshankar.co.uk/london-hip-knee-surgeon',
    customJsonLd: generateRegionalPageJsonLd({
      path: 'london-hip-knee-surgeon',
      canonical: 'https://www.shivakumarshankar.co.uk/london-hip-knee-surgeon',
      title: 'London & North East London Hip, Knee & Revision Surgeon | Mr Shivakumar Shankar',
      description: 'Mr Shivakumar Shankar is a Consultant Orthopaedic Hip, Knee and Revision Hip Surgeon serving London and North East London, with NHS practice at BHRUT and private clinics in Brentwood, Essex.',
      regionName: 'London & North East London',
      faqs: LONDON_FAQS
    }),
    bodyHtml: renderRegionalPageShell(
      'london-hip-knee-surgeon',
      'Consultant Orthopaedic Care • London & North East London Practice',
      'Hip, Knee and Revision Hip Surgeon for London & North East London',
      'Mr Shivakumar Shankar provides consultant orthopaedic hip, knee and revision hip surgery for patients from London and North East London. Appointed substantive NHS Consultant at BHRUT (Queen\'s Hospital, Romford and King George Hospital, Goodmayes) and offering private surgical care at premier Brentwood hospitals easily accessible via the Elizabeth Line and M25.',
      renderLondonPageContent(),
      'London & North East London'
    )
  },

  // 25. Essex Hip & Knee Surgeon
  {
    path: 'essex-hip-knee-surgeon',
    title: 'Essex Hip, Knee & Revision Hip Surgeon | Mr Shivakumar Shankar',
    description: 'Mr Shivakumar Shankar is a Consultant Orthopaedic Hip, Knee and Revision Hip Surgeon in Essex, offering conventional, navigated and MAKO robotic surgery at Nuffield Brentwood and Spire Hartswood.',
    canonical: 'https://www.shivakumarshankar.co.uk/essex-hip-knee-surgeon',
    customJsonLd: generateRegionalPageJsonLd({
      path: 'essex-hip-knee-surgeon',
      canonical: 'https://www.shivakumarshankar.co.uk/essex-hip-knee-surgeon',
      title: 'Essex Hip, Knee & Revision Hip Surgeon | Mr Shivakumar Shankar',
      description: 'Mr Shivakumar Shankar is a Consultant Orthopaedic Hip, Knee and Revision Hip Surgeon in Essex, offering conventional, navigated and MAKO robotic surgery at Nuffield Brentwood and Spire Hartswood.',
      regionName: 'Essex',
      faqs: ESSEX_FAQS
    }),
    bodyHtml: renderRegionalPageShell(
      'essex-hip-knee-surgeon',
      'Consultant Orthopaedic Care • Essex Practice',
      'Hip, Knee and Revision Hip Surgeon in Essex — Mr Shivakumar Shankar',
      'Mr Shivakumar Shankar is a fellowship-trained Consultant Orthopaedic Surgeon providing specialist hip, knee and complex revision hip surgery for patients across Brentwood, Romford, Chelmsford, and throughout Essex. Offering robotic-assisted, computer-navigated, and muscle-sparing joint reconstruction at premier private hospitals in Brentwood.',
      renderEssexPageContent(),
      'Essex'
    )
  },

  // 26. Spire Hartswood Hospital
  {
    path: 'spire-hartswood-hospital',
    title: 'Spire Hartswood Hospital | Mr Shivakumar Shankar | Navigated Knee & Hip Surgeon',
    description: 'Private orthopaedic consultations with Mr Shivakumar Shankar at Spire Hartswood Hospital, Brentwood, Essex. Computer-navigated knee surgery, hip replacement, and specialist joint care.',
    canonical: 'https://www.shivakumarshankar.co.uk/spire-hartswood-hospital',
    customJsonLd: generateHospitalPageJsonLd({
      path: 'spire-hartswood-hospital',
      canonical: 'https://www.shivakumarshankar.co.uk/spire-hartswood-hospital',
      title: 'Spire Hartswood Hospital | Mr Shivakumar Shankar | Navigated Knee & Hip Surgeon',
      description: 'Private orthopaedic consultations with Mr Shivakumar Shankar at Spire Hartswood Hospital, Brentwood, Essex. Computer-navigated knee surgery, hip replacement, and specialist joint care.',
      hospital: SPIRE_HARTSWOOD_HOSPITAL_DATA,
      faqs: SPIRE_HARTSWOOD_FAQS
    }),
    bodyHtml: renderHospitalPageShell(
      'spire-hartswood-hospital',
      'Private Practice Location • Eagle Way, Great Warley, Brentwood',
      'Mr Shivakumar Shankar at Spire Hartswood Hospital',
      'Mr Shivakumar Shankar conducts established private orthopaedic consultations, computer-navigated total knee surgery, and comprehensive joint reconstruction at Spire Hartswood Hospital in Brentwood, Essex. Spire Hartswood provides modern laminar-flow operating suites, advanced optical computer navigation, on-site MRI/CT diagnostics, dedicated inpatient physiotherapy, and comfortable en-suite private rooms in a tranquil parkland setting in Great Warley.',
      renderSpireHartswoodContent(),
      'Spire Hartswood Hospital'
    )
  },

  // 27. Nuffield Health Brentwood Hospital
  {
    path: 'nuffield-brentwood-hospital',
    title: 'Nuffield Health Brentwood Hospital | Mr Shivakumar Shankar | Robotic Hip & Knee Surgeon',
    description: 'Private orthopaedic consultations with Mr Shivakumar Shankar at Nuffield Health Brentwood Hospital, Essex. Specialist MAKO robotic hip and knee surgery, 3D CT planning, and joint care.',
    canonical: 'https://www.shivakumarshankar.co.uk/nuffield-brentwood-hospital',
    customJsonLd: generateHospitalPageJsonLd({
      path: 'nuffield-brentwood-hospital',
      canonical: 'https://www.shivakumarshankar.co.uk/nuffield-brentwood-hospital',
      title: 'Nuffield Health Brentwood Hospital | Mr Shivakumar Shankar | Robotic Hip & Knee Surgeon',
      description: 'Private orthopaedic consultations with Mr Shivakumar Shankar at Nuffield Health Brentwood Hospital, Essex. Specialist MAKO robotic hip and knee surgery, 3D CT planning, and joint care.',
      hospital: NUFFIELD_BRENTWOOD_HOSPITAL_DATA,
      faqs: NUFFIELD_BRENTWOOD_FAQS
    }),
    bodyHtml: renderHospitalPageShell(
      'nuffield-brentwood-hospital',
      'Private Practice Location • Shenfield Road, Brentwood, Essex',
      'Mr Shivakumar Shankar at Nuffield Health Brentwood Hospital',
      'Mr Shivakumar Shankar provides specialist private orthopaedic consultations and advanced joint reconstruction at Nuffield Health Brentwood Hospital in Essex. Nuffield Brentwood serves as Mr Shankar\'s primary private surgical base for Stryker MAKO robotic-arm assisted hip and knee replacement, offering patient-specific 3D CT virtual planning, laminar-flow operating suites, dedicated orthopaedic physiotherapy, and comfortable en-suite private rooms.',
      renderNuffieldBrentwoodContent(),
      'Nuffield Health Brentwood Hospital'
    )
  },

  // 28. Queen's Hospital Romford (NHS)
  {
    path: 'queens-hospital-romford',
    title: "Queen's Hospital Romford | Mr Shivakumar Shankar | Substantive NHS Consultant",
    description: "Substantive NHS Consultant Orthopaedic Surgeon at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT) at Queen's Hospital, Romford. Complex revision hip surgery, joint reconstruction, and trauma care.",
    canonical: 'https://www.shivakumarshankar.co.uk/queens-hospital-romford',
    customJsonLd: generateHospitalPageJsonLd({
      path: 'queens-hospital-romford',
      canonical: 'https://www.shivakumarshankar.co.uk/queens-hospital-romford',
      title: "Queen's Hospital Romford | Mr Shivakumar Shankar | Substantive NHS Consultant",
      description: "Substantive NHS Consultant Orthopaedic Surgeon at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT) at Queen's Hospital, Romford. Complex revision hip surgery, joint reconstruction, and trauma care.",
      hospital: QUEENS_HOSPITAL_DATA,
      faqs: QUEENS_HOSPITAL_FAQS
    }),
    bodyHtml: renderHospitalPageShell(
      'queens-hospital-romford',
      'BHRUT NHS Trust • Major Acute Hospital & Trauma Centre',
      "Mr Shivakumar Shankar at Queen's Hospital, Romford",
      "Mr Shivakumar Shankar has served as a substantive NHS Consultant Orthopaedic Surgeon at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT) since 2017. As former Clinical Director and NHS Clinical Lead for Trauma and Orthopaedics, Mr Shankar oversees trauma reconstruction, complex revision hip replacement, and joint care at Queen's Hospital on Rom Valley Way in Romford.",
      renderQueensHospitalContent(),
      "Queen's Hospital, Romford"
    )
  },

  // 29. King George Hospital Goodmayes (NHS)
  {
    path: 'king-george-hospital-goodmayes',
    title: 'King George Hospital Goodmayes | Mr Shivakumar Shankar | Elective Surgical Centre',
    description: 'BHRUT Elective Surgical Centre at King George Hospital, Goodmayes. Protected clean-air joint replacement, high-volume hip and knee surgery, and elective recovery leadership with Mr Shivakumar Shankar.',
    canonical: 'https://www.shivakumarshankar.co.uk/king-george-hospital-goodmayes',
    customJsonLd: generateHospitalPageJsonLd({
      path: 'king-george-hospital-goodmayes',
      canonical: 'https://www.shivakumarshankar.co.uk/king-george-hospital-goodmayes',
      title: 'King George Hospital Goodmayes | Mr Shivakumar Shankar | Elective Surgical Centre',
      description: 'BHRUT Elective Surgical Centre at King George Hospital, Goodmayes. Protected clean-air joint replacement, high-volume hip and knee surgery, and elective recovery leadership with Mr Shivakumar Shankar.',
      hospital: KING_GEORGE_HOSPITAL_DATA,
      faqs: KING_GEORGE_HOSPITAL_FAQS
    }),
    bodyHtml: renderHospitalPageShell(
      'king-george-hospital-goodmayes',
      'BHRUT NHS Trust • Dedicated Elective Surgical Centre',
      'Mr Shivakumar Shankar at King George Hospital, Goodmayes',
      'King George Hospital in Goodmayes serves as the dedicated Elective Surgical Centre for Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). Operating within ring-fenced clean-air laminar airflow theatre suites, Mr Shivakumar Shankar delivers high-volume primary hip and knee arthroplasty, complex revision hip reconstruction across BHRUT elective pathways, and award-winning elective recovery initiatives.',
      renderKingGeorgeHospitalContent(),
      'King George Hospital, Goodmayes'
    )
  },

  // 30. Reviews
  {
    path: 'reviews',
    title: 'Patient Reviews & Clinical Outcomes | Mr Shivakumar Shankar',
    description: 'Independently verified patient reviews from Doctify and iWantGreatCare for Mr Shivakumar Shankar, Consultant Hip & Knee Surgeon.',
    canonical: 'https://www.shivakumarshankar.co.uk/reviews',
    bodyHtml: renderPageShell(
      'patient-reviews',
      'Verified Feedback • Doctify & iWantGreatCare',
      'Patient Feedback &amp; Reviews',
      'Transparency and clinical excellence define Mr Shivakumar Shankar\'s practice. Read independently published patient feedback and reviews about Mr Shankar\'s care on leading healthcare rating platforms including Doctify and iWantGreatCare, reflecting experiences of hip and knee surgery and recovery.',
      `
      ${renderCardGrid([
        {
          title: 'Total Hip Replacement Review',
          desc: '"Mr Shankar gave me my life back after two years of severe groin pain. I was walking without crutches in three weeks. His care was exceptional."'
        },
        {
          title: 'Robotic Knee Replacement Review',
          desc: '"From our first consultation at Nuffield Brentwood, Mr Shankar explained everything clearly. The robotic knee surgery went smoothly and feels completely natural."'
        },
        {
          title: 'Keyhole Knee Arthroscopy Review',
          desc: '"Complex sports meniscal tear repaired as a day case. Pain was minimal and I was back on the golf course within 6 weeks."'
        }
      ])}
      `
    )
  },

  // 31. /patient-reviews-outcomes (alias)
  {
    path: 'patient-reviews-outcomes',
    title: 'Patient Reviews & Clinical Outcomes | Mr Shivakumar Shankar',
    description: 'Independently verified patient reviews from Doctify and iWantGreatCare for Mr Shivakumar Shankar, Consultant Hip & Knee Surgeon.',
    canonical: 'https://www.shivakumarshankar.co.uk/reviews',
    bodyHtml: renderPageShell(
      'patient-reviews',
      'Verified Feedback • Doctify & iWantGreatCare',
      'Patient Feedback &amp; Reviews',
      'Read independently published patient testimonials, reviews, and ratings from Doctify and iWantGreatCare reflecting patient experiences of Mr Shankar\'s hip and knee care.',
      `
      ${renderCardGrid([
        {
          title: 'Top Rated Consultant',
          desc: 'Consistently awarded top marks for bedside manner, listening to patients, and explaining surgical options clearly.'
        },
        {
          title: 'National Joint Registry (NJR)',
          desc: 'Routine submission of all arthroplasty data ensuring transparency and rigorous tracking of implant performance and safety.'
        },
        {
          title: 'Care Quality Commission',
          desc: 'Practising exclusively in CQC-inspected hospital facilities in Brentwood, Romford, and Goodmayes.'
        }
      ])}
      `
    )
  },

  // 32. Contact
  {
    path: 'contact',
    title: 'Contact Practice Secretary | Mr Shivakumar Shankar',
    description: 'Contact practice secretary Remya Rexlin to book consultations at Spire Hartswood Hospital or Nuffield Health Brentwood Hospital.',
    canonical: 'https://www.shivakumarshankar.co.uk/contact',
    bodyHtml: renderPageShell(
      'contact-secretary',
      'Fast-Track Appointments • Insured & Self-Pay',
      'Contact Mr Shivakumar Shankar\'s Practice',
      'Contact private practice medical secretary Remya Rexlin directly for fast-track consultation bookings, insurance pre-authorisations, and hospital appointments.',
      `
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Medical Secretary Contact</h2>
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p><strong>Secretary Name:</strong> Remya Rexlin</p>
            <p><strong>Mobile Phone:</strong> <a href="tel:07587765888" class="text-[#1B4965] font-bold">07587 765888</a></p>
            <p><strong>Landline:</strong> <a href="tel:02035230621" class="text-[#1B4965] font-bold">020 3523 0621</a></p>
            <p><strong>Email:</strong> <a href="mailto:hip.knee_specialist@yahoo.com" class="text-[#1B4965] font-bold">hip.knee_specialist@yahoo.com</a></p>
          </div>
        </div>
        <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Hospital Locations</h2>
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p><strong>Spire Hartswood Hospital:</strong> 01277 695 695 (Brentwood, Essex)</p>
            <p><strong>Nuffield Health Brentwood:</strong> 01277 263 263 (Brentwood, Essex)</p>
            <p><strong>NHS Enquiries:</strong> BHRUT Orthopaedic Lead Secretary (01708 435000)</p>
          </div>
        </div>
      </section>
      `
    )
  },

  // 33. /contact-consultation (alias)
  {
    path: 'contact-consultation',
    title: 'Contact Practice Secretary | Mr Shivakumar Shankar',
    description: 'Contact practice secretary Remya Rexlin to book consultations at Spire Hartswood Hospital or Nuffield Health Brentwood Hospital.',
    canonical: 'https://www.shivakumarshankar.co.uk/contact',
    bodyHtml: renderPageShell(
      'contact-secretary',
      'Practice Appointments • Brentwood & London',
      'Contact Practice Secretary &amp; Bookings',
      'Whether you are suffering from painful hip arthritis, knee stiffness, or a sports-related meniscal tear, booking a consultation with Mr Shivakumar Shankar is fast and simple.',
      `
      ${renderCardGrid([
        {
          title: 'Direct Secretary Booking',
          desc: 'Call 07587 765888 or email hip.knee_specialist@yahoo.com to book your preferred clinic slot.'
        },
        {
          title: 'Private Health Insurance',
          desc: 'Recognised by all major insurers; remember to obtain your pre-authorisation code prior to attendance.'
        },
        {
          title: 'Self-Funding Patients',
          desc: 'Transparent consultation and procedure fees with fixed-price hospital packages available.'
        }
      ])}
      `
    )
  },

  // 34. Book Consultation
  {
    path: 'book-consultation',
    title: 'Book an Orthopaedic Consultation | Mr Shivakumar Shankar',
    description: 'Book a private hip or knee consultation online or access live hospital diary timeslots at Spire Hartswood and Nuffield Health Brentwood.',
    canonical: 'https://www.shivakumarshankar.co.uk/book-consultation',
    bodyHtml: renderPageShell(
      'book-consultation',
      'Online Appointment Request • Spire & Nuffield',
      'Book an Orthopaedic Consultation',
      'Submit an online consultation enquiry for Mr Shivakumar Shankar or access live hospital diary booking systems for Spire Hartswood Hospital and Nuffield Health Brentwood Hospital.',
      `
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Spire Hartswood Hospital (Brentwood)</h2>
          <p class="text-xs sm:text-sm text-slate-600 mb-4">Fast-track private outpatient appointments on Monday and Thursday evenings.</p>
          <a href="https://www.spirehealthcare.com/spire-hartswood-hospital/consultants/mr-shivakumar-shankar-c6038414/" target="_blank" rel="noopener noreferrer" class="inline-block bg-[#005EB8] hover:bg-[#004b93] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors">
            View Live Timeslots on Spire Portal &rarr;
          </a>
        </div>
        <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Nuffield Health Brentwood Hospital</h2>
          <p class="text-xs sm:text-sm text-slate-600 mb-4">Outpatient consultation clinics and comprehensive surgical care packages.</p>
          <a href="https://www.nuffieldhealth.com/consultants/mr-shivakumar-shankar" target="_blank" rel="noopener noreferrer" class="inline-block bg-[#00703C] hover:bg-[#005a30] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors">
            View Booking on Nuffield Portal &rarr;
          </a>
        </div>
      </section>
      `
    )
  },

  // 35. Media & Social Complete Archive
  {
    path: 'media-social',
    title: 'Media & Social | Mr Shivakumar Shankar | Robotic Hip & Knee Surgeon',
    description: 'Latest professional news, BBC features, NHS surgical milestones, and clinical video updates from Mr Shivakumar Shankar.',
    canonical: 'https://www.shivakumarshankar.co.uk/media-social',
    bodyHtml: renderPageShell(
      'media-social',
      'Professional Media, Broadcasts &amp; Social Archive',
      'Media &amp; Social',
      'Follow Mr Shivakumar Shankar for professional updates, patient education, broadcast features, and clinical milestones in robotic hip and knee surgery across London and Essex.',
      `
      <!-- Official Social Channels Bar -->
      <section class="mb-10 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full inline-block mb-2">
              Official Social Channels
            </span>
            <h2 class="text-xl font-extrabold text-slate-900">Follow @ShankarHipKnee</h2>
            <p class="text-xs text-slate-600 mt-1 max-w-xl">
              Professional updates, surgical robotics milestones, patient recovery videos, and orthopaedic clinical education.
            </p>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <a href="https://www.linkedin.com/in/shivakumar-shankar-25758026/recent-activity/all/" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors">LinkedIn</a>
            <a href="https://x.com/ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors">X (@ShankarHipKnee)</a>
            <a href="https://www.youtube.com/@ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors">YouTube</a>
            <a href="https://www.instagram.com/ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors">TikTok</a>
            <a href="https://finder.bupa.co.uk/Consultant/mr-shivakumar-shankar-orthopaedic-surgery-brentwood-romford" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#1B4965] hover:border-slate-300 text-xs font-semibold shadow-2xs transition-colors">Bupa Finder</a>
          </div>
        </div>
      </section>

      <!-- Complete Media Archive Grid (all 19 items) -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        ${mediaArchiveHtml}
      </section>
      `
    )
  }
];

console.log(`Generating pre-rendered static HTML routes for ${pageDefinitions.length} direct URLs...`);

pageDefinitions.forEach(page => {
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

  // Update MedicalWebPage in JSON-LD with page-specific URL and title
  html = html.replace(
    /"@type":\s*"MedicalWebPage",\s*"@id":\s*".*?",\s*"url":\s*".*?",\s*"name":\s*".*?",/g,
    `"@type": "MedicalWebPage",\n          "@id": "${page.canonical}",\n          "url": "${page.canonical}",\n          "name": "${page.title.replace(/"/g, '\\"')}",`
  );

  // Custom JSON-LD schema replacement if specified on page definition
  if (page.customJsonLd) {
    const jsonLdScriptRegex = /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i;
    html = html.replace(
      jsonLdScriptRegex,
      `<script type="application/ld+json">\n${JSON.stringify(page.customJsonLd, null, 2)}\n    </script>`
    );
  }

  // Replace inner contents of <div id="root">
  const rootMarker = '<div id="root">';
  const rootStart = html.indexOf(rootMarker);
  const doctifyPos = html.indexOf('<!-- Doctify Widget Auto-resize Plugin -->');

  if (rootStart !== -1 && doctifyPos !== -1) {
    html = 
      html.substring(0, rootStart + rootMarker.length) +
      '\n' + page.bodyHtml.trim() + '\n    </div>\n    ' +
      html.substring(doctifyPos);
  } else {
    console.error('ERROR: Could not find #root or doctify marker in HTML template!');
    process.exit(1);
  }

  if (page.path === '') {
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf8');
    console.log('✓ Updated homepage: dist/index.html with rich page-specific content');
  } else {
    // 1. Output to dist/<page.path>/index.html
    const pageDir = path.join(distDir, page.path);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf8');

    // 2. Output to dist/<page.path>.html for servers configured with cleanUrls
    fs.writeFileSync(path.join(distDir, `${page.path}.html`), html, 'utf8');

    console.log(`✓ Generated static page: /${page.path} (both /${page.path}/index.html and /${page.path}.html)`);
  }
});

console.log('All static pages successfully generated with unique crawlable HTML body content.');

// Synchronise homepage media fallback in root index.html to keep source fallback and generated HTML consistent
const rootIndexPath = path.resolve(__dirname, '../index.html');
if (fs.existsSync(rootIndexPath)) {
  let rootHtml = fs.readFileSync(rootIndexPath, 'utf8');
  const mediaSectionRegex = /<section id="media">[\s\S]*?<\/section>/;
  const targetFallback = `          <section id="media">
            <h3>Latest News &amp; Professional Updates</h3>
            <p>Follow Mr Shivakumar Shankar for professional updates, patient education and information about developments in hip and knee surgery.</p>
            <p>Official channels: @ShankarHipKnee on LinkedIn, X, YouTube, Instagram, and TikTok.</p>
            <div data-carousel-card>
              <img src="/nuffield-brentwood-mako-2026-v1.jpg" alt="Mr Shivakumar Shankar with the Stryker specialist and surgical scrub team following the first MAKO robotic-assisted joint replacement at Nuffield Health Brentwood Hospital" width="600" height="338" loading="lazy" />
              <h4>29 September 2026: MAKO Robotic-Assisted Joint Replacement Introduced to Private Practice in Brentwood</h4>
              <p>On 29 September 2026, Mr Shivakumar Shankar performed his first MAKO robotic-assisted joint replacement at Nuffield Health Brentwood Hospital, marking an important development in his private hip and knee practice.</p>
            </div>
            <div data-carousel-card>
              <img src="/shankar-personal-100-mako-2026.jpg" alt="Mr Shivakumar Shankar marking his personal milestone of 100 MAKO robotic-assisted joint replacement procedures personally performed by him" width="600" height="338" loading="lazy" />
              <h4>24 September 2026: 100 MAKO Robotic-Assisted Joint Replacements — A Personal Surgical Milestone for Mr Shankar</h4>
              <p>On 24 September 2026, Mr Shivakumar Shankar marked a personal surgical milestone of completing 100 MAKO robotic-assisted joint replacement procedures personally performed by him (representing his individual surgical series, rather than a trust total for BHRUT).</p>
            </div>
            <div data-carousel-card>
              <img src="/bhrut-100th-robotic-joint-2023.jpg" alt="BHRUT NHS Trust marking the 100th patient robotic joint replacement at King George Hospital" width="600" height="338" loading="lazy" />
              <h4>18 January 2023: BHRUT NHS Trust: 100th Robotic Joint Replacement Milestone (Catherine’s Story)</h4>
              <p>Fitness manager Catherine O'Brien-Passfield becomes the 100th patient to receive a robotic-assisted joint replacement at Barking, Havering and Redbridge University Hospitals NHS Trust, performed by Mr Shivakumar Shankar.</p>
            </div>
            <div data-carousel-card>
              <img src="./King George Hospital entrance.jpeg" alt="King George Hospital Elective Surgical Hub" width="600" height="338" loading="lazy" />
              <h4>16 August 2021: BHR Hospitals: ‘From Bones R Us to Back2Backs’ — 51 Hip &amp; Knee Replacements in 5 Days</h4>
              <p>Consultant Shivakumar Shankar specifically named in the Trust's elective recovery programme, achieving 51 hip and knee replacements in five days through focused surgical sprints.</p>
            </div>
            <div data-carousel-card>
              <img src="./Queens Hospital.jpg" alt="Queen's Hospital Romford" width="600" height="338" loading="lazy" />
              <h4>13 July 2021: BHR Hospitals: ‘Super’ Clinics Led by Mr Shankar Tackle Waiting Lists (260 Outpatients in 2 Days)</h4>
              <p>Mr Shankar led high-volume weekend outpatient recovery clinics at Barking, Havering and Redbridge University Hospitals NHS Trust, assessing 260 patients across two days to accelerate specialist care.</p>
            </div>
            <div data-carousel-card>
              <img src="./Attend anywhere virtual clinic.png" alt="Attend Anywhere Virtual Orthopaedic Clinic" width="600" height="338" loading="lazy" />
              <h4>30 July 2020: BHR Hospitals: Pioneering ‘Attend Anywhere’ Virtual Consultations During COVID-19</h4>
              <p>Pioneering remote digital video clinics at BHR Hospitals during lockdown, ensuring vulnerable joint patients received expert orthopaedic triage, rehabilitation guidance, and continuous clinical support.</p>
            </div>
            <p><a href="/media-social">View all Media &amp; Social &rarr;</a></p>
          </section>`;
  if (mediaSectionRegex.test(rootHtml)) {
    const currentFallback = rootHtml.match(mediaSectionRegex)[0];
    if (currentFallback.trim() !== targetFallback.trim()) {
      rootHtml = rootHtml.replace(mediaSectionRegex, targetFallback);
      fs.writeFileSync(rootIndexPath, rootHtml, 'utf8');
      console.log('✓ Synchronised root index.html media fallback with homepage carousel');
    }
  }
}
