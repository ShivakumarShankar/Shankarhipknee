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
            Consultant Robotic Hip and Knee Surgeon &bull; London &amp; Essex
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
            Consultant Robotic Hip and Knee Surgeon &bull; London &amp; Essex<br>
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
      <span class="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3">
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

  const locations = [
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
      "telephone": "01277 263 263",
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
      "telephone": "01277 695 695",
      "url": "https://appointments.spirehealthcare.com/?c=C6038414"
    }
  ];

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
      {
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
        "jobTitle": "Consultant Robotic Hip and Knee Surgeon",
        "medicalSpecialty": [
          "Orthopaedic Surgery",
          "Hip Replacement Surgery",
          "Knee Replacement Surgery",
          "Robotic-Assisted Joint Replacement",
          "Knee Arthroscopy"
        ],
        "description": "Consultant Robotic Hip and Knee Surgeon specialising in hip and knee surgery, offering MAKO robotic joint replacement at Nuffield Health Brentwood Hospital and BHRUT NHS hospitals, alongside conventional and computer-navigated surgery at Spire Hartswood Hospital in Brentwood, Essex.",
        "url": "https://www.shivakumarshankar.co.uk/",
        "image": "https://www.shivakumarshankar.co.uk/profile.jpg",
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
          "https://www.linkedin.com/in/shivakumar-shankar-25758026/recent-activity/all/",
          "https://x.com/ShankarHipKnee",
          "https://www.instagram.com/ShankarHipKnee",
          "https://www.tiktok.com/@ShankarHipKnee",
          "https://www.youtube.com/@ShankarHipKnee",
          "https://appointments.spirehealthcare.com/?c=C6038414",
          "https://www.nuffieldhealth.com/consultants/mr-shivakumar-shankar#book",
          "https://finder.bupa.co.uk/Consultant/mr-shivakumar-shankar-orthopaedic-surgery-brentwood-romford",
          "https://www.doctify.com",
          "https://www.iwantgreatcare.org",
          "https://www.bhrhospitals.nhs.uk",
          "https://www.gmc-uk.org"
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
      },
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
        "location": locations
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

// Complete Page Definitions for all indexable canonical routes
const pageDefinitions = [
  // 1. Home
  {
    path: '',
    title: 'Mr Shivakumar Shankar | London & Essex Hip and Knee Surgeon',
    description: 'Mr Shivakumar Shankar is a Consultant Orthopaedic Surgeon specialising in hip and knee surgery, robotic joint replacement, and joint preservation in London and Essex.',
    canonical: 'https://www.shivakumarshankar.co.uk/',
    bodyHtml: renderPageShell(
      '',
      'Consultant Orthopaedic Hip & Knee Surgeon • London & Essex',
      'Restoring Mobility with Robotic Precision & Fellowship-Trained Expertise',
      'Mr Shivakumar Shankar MBBS, DHA, MRCSEd, MSc, FRCSEd (Tr & Orth) is a Consultant Orthopaedic Surgeon specialising in hip and knee surgery, serving as NHS Clinical Lead at BHRUT NHS Trust with private practice at Spire Hartswood and Nuffield Health Brentwood hospitals.',
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
                <img src="/shankar-personal-100-mako-2026.jpg" alt="Mr Shivakumar Shankar marking his personal milestone of 100 MAKO robotic-assisted joint replacement procedures at BHRUT" class="w-full h-full object-cover" width="600" height="375" loading="lazy" />
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                <span class="font-bold text-[#1B4965] uppercase tracking-wider text-[10px] bg-[#EAF1F6] px-2 py-0.5 rounded">Robotic Surgery</span>
                <span class="font-semibold text-slate-700">24 September 2026</span>
              </div>
              <h3 class="font-bold text-slate-900 text-sm mb-2 line-clamp-2">100 MAKO Robotic-Assisted Joint Replacements — A Personal Milestone at BHRUT</h3>
              <p class="text-xs text-slate-600 leading-relaxed line-clamp-2">
                On 24 September 2026, Mr Shivakumar Shankar reached a personal milestone of completing 100 MAKO robotic-assisted joint replacement procedures at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT).
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
    bodyHtml: renderPageShell(
      'about',
      'Consultant Orthopaedic Surgeon • GMC 6038414',
      'About Mr Shivakumar Shankar FRCS (Tr & Orth)',
      'Mr Shivakumar Shankar is a highly accomplished Consultant Orthopaedic Surgeon specialising in hip and knee surgery, serving as the NHS Clinical Lead for Orthopaedics at Barking, Havering and Redbridge University Hospitals NHS Trust, with private consulting practices at Spire Hartswood Hospital and Nuffield Health Brentwood Hospital.',
      `
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Qualifications &amp; Subspecialty Fellowships</h2>
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p><strong>MBBS, DHA, MRCSEd, MSc (Tr &amp; Orth), FRCSEd (Tr &amp; Orth)</strong></p>
            <p><strong>PG Diploma:</strong> Principles of Computer-Assisted and Robotic Orthopaedic Surgery</p>
            <p><strong>Computer Navigation Fellowship:</strong> Golden Jubilee National Hospital, Glasgow</p>
            <p><strong>Minimally Invasive Arthroplasty Training:</strong> Rummelsberg Hospital (Germany) and CABPS Centre (France)</p>
          </div>
        </div>
        <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Clinical Practice &amp; Experience</h2>
          <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>Extensive experience performing manual and computer-assisted hip and knee replacement surgery for approximately 9 years, incorporating MAKO robotic-assisted surgery into clinical practice.</p>
            <p>Specialist focus on high-volume, minimally invasive, robotic and computer-assisted hip and knee surgery.</p>
          </div>
        </div>
      </section>
      `
    )
  },

  // 3. /about (alias for /about-mr-shivakumar-shankar)
  {
    path: 'about',
    title: 'About Mr Shivakumar Shankar | Consultant Hip & Knee Surgeon',
    description: 'Biography, credentials, and surgical training of Mr Shivakumar Shankar, NHS Clinical Lead & Consultant Orthopaedic Surgeon at Spire and Nuffield Hospitals.',
    canonical: 'https://www.shivakumarshankar.co.uk/about-mr-shivakumar-shankar',
    bodyHtml: renderPageShell(
      'about',
      'Consultant Orthopaedic Surgeon • GMC 6038414',
      'About Mr Shivakumar Shankar FRCS (Tr & Orth)',
      'Mr Shivakumar Shankar is a highly accomplished Consultant Orthopaedic Surgeon specialising in hip and knee surgery, serving as the NHS Clinical Lead for Orthopaedics at Barking, Havering and Redbridge University Hospitals NHS Trust, with private consulting practices at Spire Hartswood Hospital and Nuffield Health Brentwood Hospital.',
      `
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Qualifications &amp; Training</h2>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">MBBS, DHA, MRCSEd, MSc, FRCSEd (Tr &amp; Orth), PG Diploma Principles of Computer-Assisted and Robotic Orthopaedic Surgery.</p>
        </div>
        <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
          <h2 class="text-xl font-bold text-slate-900 mb-4">NHS &amp; Private Practice</h2>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">Clinical Lead at BHRUT NHS Trust (Queen's &amp; King George Hospitals), private consulting at Spire Hartswood and Nuffield Brentwood.</p>
        </div>
      </section>
      `
    )
  },

  // 4. Hip Replacement
  {
    path: 'hip-replacement',
    title: 'Hip Replacement Surgery London & Essex | Mr Shivakumar Shankar',
    description: 'Consultant-led total hip replacement in London & Essex with Mr Shivakumar Shankar. Advanced ceramic bearings, computer navigation & muscle-sparing approaches in Brentwood & Romford.',
    canonical: 'https://www.shivakumarshankar.co.uk/hip-replacement',
    customJsonLd: generateProcedureJsonLd({
      path: 'hip-replacement',
      title: 'Hip Replacement Surgery London & Essex | Mr Shivakumar Shankar',
      description: 'Consultant-led total hip replacement in London & Essex with Mr Shivakumar Shankar. Advanced ceramic bearings, computer navigation & muscle-sparing approaches in Brentwood & Romford.',
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
    description: 'Mako robotic-assisted total hip replacement with 3D CT virtual planning and haptic precision for optimal implant alignment and stability.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-hip-replacement',
    bodyHtml: renderPageShell(
      'robotic-hip-replacement',
      'Robotic Arthroplasty • Mako Precision',
      'Robotic-Assisted Total Hip Replacement',
      'Mako robotic-assisted total hip replacement utilises pre-operative 3D CT modelling, dynamic virtual planning, and active haptic boundary guidance to optimise acetabular cup orientation and femoral biomechanics.',
      `
      ${renderCardGrid([
        {
          title: 'Pre-Op 3D CT Planning',
          desc: 'High-resolution scan produces a virtual patient-specific anatomical model to plan implant dimensions and positioning prior to surgery.'
        },
        {
          title: 'Haptic Guidance',
          desc: 'Robotic arm provides stereotactic tactile feedback that keeps reamers and instruments precisely within the approved virtual surgical boundary.'
        },
        {
          title: 'Surgeon Control',
          desc: 'The surgeon retains complete control throughout the procedure; the robotic system functions as a high-precision assistive tool.'
        }
      ])}
      `
    )
  },

  // 6. Computer-Assisted Hip Replacement
  {
    path: 'computer-assisted-hip-replacement',
    title: 'Computer-Assisted Hip Replacement | Mr Shivakumar Shankar',
    description: 'Navigated hip replacement providing real-time intra-operative tracking of cup angles and limb length without pre-operative CT radiation.',
    canonical: 'https://www.shivakumarshankar.co.uk/computer-assisted-hip-replacement',
    bodyHtml: renderPageShell(
      'computer-assisted-hip-replacement',
      'Optical Computer Navigation • Arthroplasty',
      'Computer-Assisted Hip Replacement Surgery',
      'Computer-navigated hip arthroplasty provides live intra-operative optical tracking of acetabular cup orientation, femoral offset, and leg length without requiring pre-operative CT scans.',
      `
      ${renderCardGrid([
        {
          title: 'Live Optical Navigation',
          desc: 'Infrared trackers register pelvic and femoral anatomical landmarks during surgery, giving real-time angular feedback.'
        },
        {
          title: 'No Pre-Op CT Radiation',
          desc: 'Ideal for patients seeking navigated precision without additional pre-operative radiological exposure.'
        },
        {
          title: 'Proven Kinematic Alignment',
          desc: 'Fellowship training at the Golden Jubilee National Hospital Glasgow informs Mr Shankar\'s computer-navigated technique.'
        }
      ])}
      `
    )
  },

  // 7. Minimally Invasive Hip Replacement
  {
    path: 'minimally-invasive-hip-replacement',
    title: 'Minimally Invasive Hip Surgery | Rottinger & Anterior Approaches',
    description: 'Tissue-sparing Rottinger and muscle-preserving hip arthroplasty techniques supporting post-operative mobilisation and functional recovery.',
    canonical: 'https://www.shivakumarshankar.co.uk/minimally-invasive-hip-replacement',
    bodyHtml: renderPageShell(
      'minimally-invasive-hip-replacement',
      'Tissue-Sparing Surgery • Rottinger Approach',
      'Minimally Invasive Hip Replacement Surgery',
      'Tissue-sparing Rottinger and anterolateral approaches access the hip joint through intermuscular planes, avoiding the detachment of primary hip abductor muscles.',
      `
      ${renderCardGrid([
        {
          title: 'Preserves Abductor Muscles',
          desc: 'Navigates between tensor fasciae latae and gluteus medius without cutting key muscle tendons.'
        },
        {
          title: 'Faster Mobilisation',
          desc: 'Reduced soft tissue trauma facilitates earlier unassisted walking and shorter inpatient hospitalisation.'
        },
        {
          title: 'Specialised International Training',
          desc: 'Trained under leading European pioneers in France and Germany in muscle-preserving techniques.'
        }
      ])}
      `
    )
  },

  // 8. Knee Replacement
  {
    path: 'knee-replacement',
    title: 'Total Knee Replacement London & Essex | Mr Shivakumar Shankar',
    description: 'Consultant-led total knee replacement in London & Essex with Mr Shivakumar Shankar. Conventional, computer-navigated & Mako robotic knee surgery in Brentwood & Romford.',
    canonical: 'https://www.shivakumarshankar.co.uk/knee-replacement',
    customJsonLd: generateProcedureJsonLd({
      path: 'knee-replacement',
      title: 'Total Knee Replacement London & Essex | Mr Shivakumar Shankar',
      description: 'Consultant-led total knee replacement in London & Essex with Mr Shivakumar Shankar. Conventional, computer-navigated & Mako robotic knee surgery in Brentwood & Romford.',
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
    title: 'Robotic Knee Replacement London & Essex | Mr Shivakumar Shankar',
    description: 'Explore MAKO robotic-assisted knee replacement with consultant surgeon Mr Shivakumar Shankar. Private consultations in Brentwood, Essex, serving London.',
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
        {
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
          "jobTitle": "Consultant Robotic Hip and Knee Surgeon",
          "medicalSpecialty": [
            "Orthopaedic Surgery",
            "Hip Replacement Surgery",
            "Knee Replacement Surgery",
            "Robotic-Assisted Joint Replacement",
            "Knee Arthroscopy"
          ],
          "description": "Consultant Robotic Hip and Knee Surgeon specialising in hip and knee surgery, offering MAKO robotic joint replacement at Nuffield Health Brentwood Hospital and BHRUT NHS hospitals, alongside conventional and computer-navigated surgery at Spire Hartswood Hospital in Brentwood, Essex.",
          "url": "https://www.shivakumarshankar.co.uk/",
          "image": "https://www.shivakumarshankar.co.uk/profile.jpg",
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
            "https://www.linkedin.com/in/shivakumar-shankar-25758026/recent-activity/all/",
            "https://x.com/ShankarHipKnee",
            "https://www.instagram.com/ShankarHipKnee",
            "https://www.tiktok.com/@ShankarHipKnee",
            "https://www.youtube.com/@ShankarHipKnee",
            "https://appointments.spirehealthcare.com/?c=C6038414",
            "https://www.nuffieldhealth.com/consultants/mr-shivakumar-shankar#book",
            "https://finder.bupa.co.uk/Consultant/mr-shivakumar-shankar-orthopaedic-surgery-brentwood-romford",
            "https://www.doctify.com",
            "https://www.iwantgreatcare.org",
            "https://www.bhrhospitals.nhs.uk",
            "https://www.gmc-uk.org"
          ],
          "areaServed": [
            { "@type": "City", "name": "London" },
            { "@type": "AdministrativeArea", "name": "Essex" },
            { "@type": "City", "name": "Brentwood" },
            { "@type": "City", "name": "Romford" },
            { "@type": "City", "name": "Chelmsford" },
            { "@type": "AdministrativeArea", "name": "North East London" }
          ],
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
              "telephone": "01277 263 263",
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
              "telephone": "01277 695 695",
              "url": "https://appointments.spirehealthcare.com/?c=C6038414"
            }
          ]
        },
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
          "name": "Robotic Knee Replacement London & Essex | Mr Shivakumar Shankar",
          "description": "Explore MAKO robotic-assisted knee replacement with consultant surgeon Mr Shivakumar Shankar. Private consultations in Brentwood, Essex, serving London.",
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
                "text": "Potential clinical benefits include sub-millimetre bone preparation accuracy, customised implant positioning matching individual constitutional anatomy, real-time dynamic soft-tissue balancing across the entire arc of motion, and protection of surrounding soft tissues via haptic boundary constraints. However, there are limitations: robotic surgery requires a specialised pre-operative CT scan and temporary bone tracking pins in the femur and tibia. Furthermore, improved technical precision does not automatically guarantee superior long-term clinical outcomes or eliminate standard surgical recovery timelines, and individual outcomes remain dependent on dedicated post-operative physiotherapy."
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
                "text": "For private patients (both insured and self-funding), Mr Shankar performs MAKO robotic-assisted total and partial knee replacements at Nuffield Health Brentwood Hospital in Brentwood, Essex, convenient for patients travelling from Essex, East London, and Greater London. For NHS patients, Mr Shankar undertakes robotic joint replacement at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), where he has completed over 100 MAKO joint replacements. Please note that Spire Hartswood Hospital in Brentwood offers conventional manual and computer-navigated knee replacement surgery, not MAKO robotic surgery."
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
            Consultant-led Mako robotic total and partial knee replacement in London and Essex with Mr Shivakumar Shankar. Combining pre-operative 3D CT planning, dynamic ligament balancing, and haptic robotic guidance to restore personalised joint kinematics.
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
                  Clinical Overview: Advanced Robotic-Assisted Arthroplasty
                </h2>
                <p class="text-slate-700 leading-relaxed text-base">
                  Robotic-assisted knee replacement utilising the Stryker Mako robotic system provides an exceptional level of precision in bone preparation and component alignment. Rather than relying solely on conventional mechanical cutting blocks and manual eyeballing, the Mako platform integrates a patient-specific 3D CT scan with intra-operative optical tracking sensors and robotic arm guidance.
                </p>
                <p class="text-slate-700 leading-relaxed text-base">
                  The technology enables both <strong>robotic total knee replacement</strong> (resurfacing tricompartmental end-stage arthritis) and <strong>robotic partial (unicompartmental) knee replacement</strong> (resurfacing an isolated medial or lateral arthritic compartment while leaving the anterior cruciate ligament, posterior cruciate ligament, and healthy cartilage untouched).
                </p>
                <p class="text-slate-700 leading-relaxed text-base">
                  Mr Shivakumar Shankar has extensive specialist experience in computer-assisted and robotic joint arthroplasty, holding a Postgraduate Diploma in Computer and Robot-Assisted Orthopaedic Arthroplasty alongside his substantive NHS consultant appointment at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). At King George Hospital’s Elective Surgical Hub, Mr Shankar reached a personal milestone of completing over 100 MAKO robotic-assisted joint replacements—a high-volume clinical recovery programme featured in broadcast coverage on BBC London News.
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
                      <span>Active patients seeking sub-millimetre implant positioning to optimise stability, balance, and natural range of motion.</span>
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
                      <span>Sub-millimetre bone preparation accuracy tailored to patient-specific constitutional anatomy.</span>
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
                    <p class="text-xs text-slate-600 leading-relaxed mb-2">King George Hospital Elective Surgical Hub &amp; Queen's Hospital Romford, where Mr Shankar has performed over 100 MAKO joint replacements.</p>
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
                      Potential clinical benefits include sub-millimetre bone preparation accuracy, customised implant positioning matching individual constitutional anatomy, real-time dynamic soft-tissue balancing across the entire arc of motion, and protection of surrounding soft tissues via haptic boundary constraints. However, there are limitations: robotic surgery requires a specialised pre-operative CT scan and temporary bone tracking pins in the femur and tibia. Furthermore, improved technical precision does not automatically guarantee superior long-term clinical outcomes or eliminate standard surgical recovery timelines, and individual outcomes remain dependent on dedicated post-operative physiotherapy.
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
                      For private patients (both insured and self-funding), Mr Shankar performs MAKO robotic-assisted total and partial knee replacements at Nuffield Health Brentwood Hospital in Brentwood, Essex, convenient for patients travelling from Essex, East London, and Greater London. For NHS patients, Mr Shankar undertakes robotic joint replacement at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), where he has completed over 100 MAKO joint replacements. Please note that Spire Hartswood Hospital in Brentwood offers conventional manual and computer-navigated knee replacement surgery, not MAKO robotic surgery.
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
    title: 'Computer-Assisted Knee Replacement | Mr Shivakumar Shankar',
    description: 'Intra-operative optical navigation restoring mechanical alignment axes and dynamic joint stability during total knee arthroplasty.',
    canonical: 'https://www.shivakumarshankar.co.uk/computer-assisted-knee-replacement',
    bodyHtml: renderPageShell(
      'computer-assisted-knee-replacement',
      'Computer-Navigated Arthroplasty • Knee Care',
      'Computer-Assisted Knee Replacement Surgery',
      'Computer navigation provides real-time optical feedback on mechanical limb alignment, coronal plane balance, and flexion-extension gap symmetry.',
      `
      ${renderCardGrid([
        {
          title: 'Mechanical Axis Tracking',
          desc: 'Ensures the hip-knee-ankle mechanical axis is accurately reconstructed to avoid eccentric implant loading.'
        },
        {
          title: 'Gap Balancing Verification',
          desc: 'Quantifies flexion and extension spaces in millimetres to achieve equal soft-tissue tension.'
        },
        {
          title: '9 Years Navigation Experience',
          desc: 'Extensive track record utilising computer navigation systems in routine and complex cases.'
        }
      ])}
      `
    )
  },

  // 11. Partial Knee Replacement
  {
    path: 'partial-knee-replacement',
    title: 'Partial Knee Replacement London & Essex | Mr Shivakumar Shankar',
    description: 'Specialist medial & lateral unicompartmental knee replacement in London & Essex with Mr Shivakumar Shankar. Preserving native cruciate ligaments in Brentwood & Romford.',
    canonical: 'https://www.shivakumarshankar.co.uk/partial-knee-replacement',
    customJsonLd: generateProcedureJsonLd({
      path: 'partial-knee-replacement',
      title: 'Partial Knee Replacement London & Essex | Mr Shivakumar Shankar',
      description: 'Specialist medial & lateral unicompartmental knee replacement in London & Essex with Mr Shivakumar Shankar. Preserving native cruciate ligaments in Brentwood & Romford.',
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
      'Mr Shivakumar Shankar has personally completed more than 100 robotic hip and knee replacement surgeries and was the first surgeon to perform computer-assisted and robotic total hip replacement in Essex and North East London, combining fellowship expertise with MAKO robotic guidance.',
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
    title: 'Hip & Knee Surgeon in London & North East London | Mr Shankar',
    description: 'Consultant orthopaedic hip and knee surgery for London and North East London patients with substantive NHS and private hospital options.',
    canonical: 'https://www.shivakumarshankar.co.uk/london-hip-knee-surgeon',
    bodyHtml: renderPageShell(
      'london-practice',
      'Specialist Arthroplasty • London Practice',
      'Hip and Knee Surgeon in London &amp; North East London',
      'Mr Shivakumar Shankar provides substantive NHS consultant care at Queen\'s Hospital and King George Hospital (BHRUT) alongside private consultations at Brentwood hospitals easily accessible from London.',
      `
      ${renderCardGrid([
        {
          title: 'Accessible From London',
          desc: 'Spire Hartswood and Nuffield Health Brentwood are located just off the M25 J28/A12 and easily reached via Elizabeth Line.'
        },
        {
          title: 'NHS Clinical Leadership',
          desc: 'Leading orthopaedic services across Barking, Havering, Redbridge, and greater North East London.'
        },
        {
          title: 'Private Robotic Surgery',
          desc: 'Fast-track private outpatient appointments without extensive NHS waiting list delays.'
        }
      ])}
      `
    )
  },

  // 25. Essex Hip & Knee Surgeon
  {
    path: 'essex-hip-knee-surgeon',
    title: 'Hip & Knee Surgeon in Essex | Mr Shivakumar Shankar',
    description: 'Leading hip and knee arthroplasty specialist in Brentwood and Essex providing robotic-assisted surgery and joint preservation.',
    canonical: 'https://www.shivakumarshankar.co.uk/essex-hip-knee-surgeon',
    bodyHtml: renderPageShell(
      'essex-practice',
      'Consultant Orthopaedic Care • Essex Practice',
      'Hip and Knee Surgeon in Essex',
      'Specialist hip and knee arthroplasty, computer-navigated surgery, and joint preservation care for Essex patients. Private consultations and surgery at Spire Hartswood (conventional & computer-navigated) and Nuffield Health Brentwood (MAKO robotic-assisted), alongside NHS robotic services at BHRUT.',
      `
      ${renderCardGrid([
        {
          title: 'Robotic & Arthroplasty Specialist',
          desc: 'Specialist consultant in computer-assisted and robotic joint replacement across Essex and North East London.'
        },
        {
          title: 'Brentwood Private Facilities',
          desc: 'Outpatient consultation clinics, on-site imaging, and dedicated joint replacement inpatient wards.'
        },
        {
          title: 'Insured & Self-Pay Welcome',
          desc: 'Recognised by all UK private insurers with transparent fixed-price self-pay options.'
        }
      ])}
      `
    )
  },

  // 26. Spire Hartswood Hospital
  {
    path: 'spire-hartswood-hospital',
    title: 'Spire Hartswood Hospital Consultations | Brentwood, Essex',
    description: 'Private hip and knee consultations, conventional and computer-navigated joint replacement with Mr Shivakumar Shankar at Spire Hartswood Hospital in Brentwood, Essex.',
    canonical: 'https://www.shivakumarshankar.co.uk/spire-hartswood-hospital',
    bodyHtml: renderPageShell(
      'spire-hartswood',
      'Private Hospital • Brentwood, Essex',
      'Spire Hartswood Hospital — Brentwood, Essex',
      'Premier private hospital location for Mr Shivakumar Shankar\'s private practice. Offering modern laminar flow theatres, on-site MRI/CT diagnostics, and private en-suite inpatient rooms.',
      `
      ${renderCardGrid([
        {
          title: 'Location & Access',
          desc: 'Eagle Way, Great Warley, Brentwood CM13 3LE. Ample free on-site parking, accessible from M25 Junction 28.'
        },
        {
          title: 'Clinical Services',
          desc: 'Outpatient consultation clinics, conventional and computer-navigated joint replacement, rapid-access joint injections, and physiotherapy.'
        },
        {
          title: 'Hospital Appointments',
          desc: 'Direct telephone: 01277 695 695 or contact practice secretary Remya Rexlin on 07587 765888.'
        }
      ])}
      `
    )
  },

  // 27. Nuffield Health Brentwood Hospital
  {
    path: 'nuffield-brentwood-hospital',
    title: 'Nuffield Health Brentwood Hospital | Mr Shivakumar Shankar',
    description: 'Private orthopaedic consultations and joint replacement surgery at Nuffield Health Brentwood Hospital, Essex.',
    canonical: 'https://www.shivakumarshankar.co.uk/nuffield-brentwood-hospital',
    bodyHtml: renderPageShell(
      'nuffield-brentwood',
      'Private Hospital • Brentwood, Essex',
      'Nuffield Health Brentwood Hospital',
      'Comprehensive private hip and knee services at Nuffield Health Brentwood Hospital, featuring advanced diagnostic imaging, modern surgical theatres, and bespoke physiotherapy.',
      `
      ${renderCardGrid([
        {
          title: 'Location & Access',
          desc: 'Shenfield Road, Brentwood, Essex CM15 8EH. Free on-site parking, close to Brentwood and Shenfield rail stations.'
        },
        {
          title: 'Joint Care Pathways',
          desc: 'Total hip replacement, total and partial knee arthroplasty, keyhole arthroscopy, and pain management.'
        },
        {
          title: 'Hospital Appointments',
          desc: 'Direct telephone: 01277 263 263 or contact practice secretary Remya Rexlin on 07587 765888.'
        }
      ])}
      `
    )
  },

  // 28. Queen's Hospital Romford (NHS)
  {
    path: 'queens-hospital-romford',
    title: 'Queen\'s Hospital Romford (BHRUT NHS Trust) | Mr Shivakumar Shankar',
    description: 'NHS Clinical Lead for Orthopaedics at Barking, Havering and Redbridge University Hospitals NHS Trust, operating at Queen\'s Hospital Romford.',
    canonical: 'https://www.shivakumarshankar.co.uk/queens-hospital-romford',
    bodyHtml: renderPageShell(
      'queens-hospital',
      'BHRUT NHS Trust • Major Trauma & Arthroplasty',
      'Queen\'s Hospital, Romford (BHRUT NHS Trust)',
      'Substantive NHS consultant base and acute trauma centre for Barking, Havering and Redbridge University Hospitals NHS Trust, where Mr Shankar serves as NHS Clinical Lead for Orthopaedics.',
      `
      ${renderCardGrid([
        {
          title: 'Clinical Lead Role',
          desc: 'Oversees surgical governance, patient safety protocols, and subspecialty arthroplasty pathways across BHRUT.'
        },
        {
          title: 'NHS Referral Pathway',
          desc: 'NHS patients can be referred by their GP via the NHS e-Referral Service (Choose & Book) to Mr Shankar\'s clinic.'
        },
        {
          title: 'Romford Medical Centre',
          desc: 'Rom Valley Way, Romford RM7 0AG. Major trauma centre and complex orthopaedic reconstruction unit.'
        }
      ])}
      `
    )
  },

  // 29. King George Hospital Goodmayes (NHS)
  {
    path: 'king-george-hospital-goodmayes',
    title: 'King George Hospital Goodmayes (BHRUT) | Elective Orthopaedic Centre',
    description: 'Substantive NHS elective orthopaedic surgery and high-volume joint replacement unit at King George Hospital, Goodmayes.',
    canonical: 'https://www.shivakumarshankar.co.uk/king-george-hospital-goodmayes',
    bodyHtml: renderPageShell(
      'king-george-hospital',
      'BHRUT NHS Trust • Elective Surgical Centre',
      'King George Hospital, Goodmayes (BHRUT NHS Trust)',
      'Dedicated elective surgical centre for Barking, Havering and Redbridge University Hospitals NHS Trust, delivering high-volume routine hip and knee arthroplasty with clean elective pathways.',
      `
      ${renderCardGrid([
        {
          title: 'Elective Arthroplasty Unit',
          desc: 'Specialised protected elective orthopaedic surgical suites minimising operation cancellation risks.'
        },
        {
          title: 'NHS Referral Pathway',
          desc: 'NHS patient consultations and surgery managed via GP referral through the NHS e-Referral Service.'
        },
        {
          title: 'Goodmayes Facility',
          desc: 'Barley Lane, Goodmayes, Ilford IG3 8YB. Modern inpatient surgical facilities and rehabilitation gym.'
        }
      ])}
      `
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
              <img src="/shankar-personal-100-mako-2026.jpg" alt="Mr Shivakumar Shankar marking his personal milestone of 100 MAKO robotic-assisted joint replacement procedures at BHRUT" width="600" height="338" loading="lazy" />
              <h4>24 September 2026: 100 MAKO Robotic-Assisted Joint Replacements — A Personal Milestone at BHRUT</h4>
              <p>On 24 September 2026, Mr Shivakumar Shankar reached a personal milestone of completing 100 MAKO robotic-assisted joint replacement procedures at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT).</p>
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
