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

// Shared accessible navigation header HTML
const renderHeader = (currentPath) => `
    <header class="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <a href="/" class="text-xl sm:text-2xl font-black text-[#1B4965] tracking-tight hover:opacity-90 transition-opacity">
            Mr Shivakumar Shankar
          </a>
          <p class="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
            Consultant Orthopaedic Hip &amp; Knee Surgeon &bull; London &amp; Essex
          </p>
        </div>
        <nav aria-label="Main Navigation" class="overflow-x-auto pb-1 md:pb-0">
          <ul class="flex items-center gap-2 sm:gap-4 text-xs font-bold uppercase tracking-wider text-slate-700 whitespace-nowrap">
            <li><a href="/" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath === '' ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Home</a></li>
            <li><a href="/about" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath === 'about' ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">About</a></li>
            <li><a href="/hip-replacement" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath === 'hip-replacement' ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Hip Replacement</a></li>
            <li><a href="/knee-replacement" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath === 'knee-replacement' ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Knee Replacement</a></li>
            <li><a href="/robotic-surgery" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath === 'robotic-surgery' ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Robotic Surgery</a></li>
            <li><a href="/knee-arthroscopy" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath === 'knee-arthroscopy' ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Knee Arthroscopy</a></li>
            <li><a href="/patient-guides" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath === 'patient-guides' ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Patient Guides</a></li>
            <li><a href="/reviews" class="px-2.5 py-1.5 rounded hover:text-[#1B4965] hover:bg-slate-100 transition-colors ${currentPath === 'reviews' ? 'text-[#1B4965] font-extrabold bg-[#EAF1F6]' : ''}">Reviews</a></li>
            <li><a href="/contact" class="px-3 py-1.5 rounded-lg bg-[#E8A24C] hover:bg-[#D99136] text-white font-bold transition-colors">Book / Contact</a></li>
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
            MBBS, MS (Orth), FRCS (Tr &amp; Orth)<br>
            Consultant Orthopaedic Hip &amp; Knee Surgeon<br>
            NHS Clinical Lead, BHRUT NHS Trust<br>
            General Medical Council: GMC 6062754
          </p>
          <div class="text-xs text-slate-600">
            <strong class="text-slate-900 block mb-1">Private Practice Secretary:</strong>
            Remya Rexlin &bull; 07587 765888 / 020 3523 0621<br>
            hip.knee_specialist@yahoo.com
          </div>
        </div>

        <div>
          <h4 class="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="/" class="text-slate-600 hover:text-[#1B4965] transition-colors">Home</a></li>
            <li><a href="/about" class="text-slate-600 hover:text-[#1B4965] transition-colors">About Mr Shankar</a></li>
            <li><a href="/hip-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Hip Replacement Surgery</a></li>
            <li><a href="/knee-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Knee Replacement &amp; Arthroplasty</a></li>
            <li><a href="/robotic-surgery" class="text-slate-600 hover:text-[#1B4965] transition-colors">Robotic &amp; Computer-Assisted</a></li>
            <li><a href="/knee-arthroscopy" class="text-slate-600 hover:text-[#1B4965] transition-colors">Knee Arthroscopy &amp; Keyhole</a></li>
            <li><a href="/patient-guides" class="text-slate-600 hover:text-[#1B4965] transition-colors">Patient Guides &amp; Risks</a></li>
            <li><a href="/reviews" class="text-[#1B4965] font-bold hover:underline transition-colors">Patient Reviews (Doctify &amp; IWGC)</a></li>
            <li><a href="/contact" class="text-[#1B4965] font-bold hover:text-[#13364B] transition-colors">Contact Practice Secretary</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Specialist Procedures</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="/hip-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Total Hip Replacement</a></li>
            <li><a href="/robotic-surgery" class="text-slate-600 hover:text-[#1B4965] transition-colors">Robotic Hip &amp; Knee Surgery</a></li>
            <li><a href="/hip-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Minimally Invasive Hip (Rottinger/Anterior)</a></li>
            <li><a href="/knee-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Partial (Unicompartmental) Knee</a></li>
            <li><a href="/knee-arthroscopy" class="text-slate-600 hover:text-[#1B4965] transition-colors">Knee Arthroscopy &amp; Meniscal Repair</a></li>
            <li><a href="/hip-replacement" class="text-slate-600 hover:text-[#1B4965] transition-colors">Complex Revision Arthroplasty</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Hospital Locations</h4>
          <div class="space-y-3 text-xs text-slate-600">
            <div>
              <strong class="text-slate-900 block">Spire Hartswood Hospital</strong>
              Eagle Way, Brentwood, Essex CM13 3LE<br>
              Tel: 01277 695 695
            </div>
            <div>
              <strong class="text-slate-900 block">Nuffield Health Brentwood Hospital</strong>
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
          <a href="/patient-guides" class="hover:underline">Patient Information</a>
          <a href="/sitemap.xml" class="hover:underline">Sitemap</a>
          <a href="/contact" class="hover:underline">Contact Practice</a>
        </div>
      </div>
    </footer>
`;

// Distinct, substantial HTML content for each canonical page
const pageDefinitions = [
  {
    path: '',
    title: 'Mr Shivakumar Shankar | London & Essex Hip and Knee Surgeon',
    description: 'Mr Shivakumar Shankar is a Consultant Orthopaedic Surgeon in London and Essex specialising in robotic hip replacement, knee replacement, and arthroscopy.',
    canonical: 'https://www.shivakumarshankar.co.uk/',
    bodyHtml: `
      ${renderHeader('')}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section class="mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3">
            Consultant Orthopaedic Hip &amp; Knee Surgeon &bull; London &amp; Essex
          </span>
          <h1 class="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Restoring Mobility with Robotic Precision &amp; Fellowship-Trained Expertise
          </h1>
          <p class="text-base sm:text-lg text-slate-600 mt-4 max-w-4xl leading-relaxed">
            Mr Shivakumar Shankar MBBS, MS (Orth), FRCS (Tr &amp; Orth) is a leading Consultant Orthopaedic Surgeon in London and Essex, serving as NHS Clinical Lead at Barking, Havering and Redbridge University Hospitals NHS Trust (Queen's Hospital &amp; King George Hospital), with private consulting practices at Spire Hartswood Hospital and Nuffield Health Brentwood Hospital.
          </p>
          <div class="mt-6 flex flex-wrap gap-4">
            <a href="/contact" class="px-6 py-3 rounded-lg bg-[#E8A24C] hover:bg-[#D99136] text-white font-bold text-sm uppercase tracking-wider transition-colors shadow-sm">
              Book Private Consultation
            </a>
            <a href="/about" class="px-6 py-3 rounded-lg bg-white border border-slate-300 hover:bg-[#EAF1F6] text-[#1B4965] font-bold text-sm transition-colors">
              Read Surgeon Biography &amp; Fellowships
            </a>
          </div>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <h2 class="text-xl font-bold text-slate-900 mb-2">Regional Robotic Pioneer</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              First surgeon in Essex and North East London to perform robotic-assisted and computer-navigated total hip and knee arthroplasty, delivering sub-millimeter component alignment.
            </p>
            <a href="/robotic-surgery" class="text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              Explore Robotic Joint Surgery &rarr;
            </a>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <h2 class="text-xl font-bold text-slate-900 mb-2">Minimally Invasive Care</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Internationally trained in muscle-sparing hip surgery (Rottinger and Direct Anterior approaches) and keyhole knee arthroscopy preserving vital soft tissues for accelerated recovery.
            </p>
            <a href="/hip-replacement" class="text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              Explore Hip Replacement Surgery &rarr;
            </a>
          </div>
          <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <h2 class="text-xl font-bold text-slate-900 mb-2">Verified 5-Star Outcomes</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Hundreds of independently verified 5-star patient reviews on Doctify and iWantGreatCare praising clinical excellence, compassionate bedside manner, and rapid rehabilitation.
            </p>
            <a href="/reviews" class="text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              Read Verified Patient Reviews &rarr;
            </a>
          </div>
        </section>

        <section class="mb-16">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">Specialist Clinical Services</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article class="p-6 bg-white rounded-xl border border-slate-200">
              <h3 class="font-bold text-lg text-slate-900 mb-1"><a href="/hip-replacement" class="hover:text-[#1B4965]">Total &amp; Complex Hip Replacement</a></h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-3">Primary arthroplasty, robotic-assisted navigation, minimally invasive Rottinger and anterior muscle-sparing approaches, and diagnostic hip injections.</p>
              <a href="/hip-replacement" class="text-xs font-bold text-[#1B4965]">Read Hip Guide &rarr;</a>
            </article>
            <article class="p-6 bg-white rounded-xl border border-slate-200">
              <h3 class="font-bold text-lg text-slate-900 mb-1"><a href="/knee-replacement" class="hover:text-[#1B4965]">Total &amp; Partial Knee Arthroplasty</a></h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-3">Robotic-guided Mako knee replacement, unicondylar partial knee resurfacing preserving ACL/PCL, and patient-matched kinematic alignment.</p>
              <a href="/knee-replacement" class="text-xs font-bold text-[#1B4965]">Read Knee Guide &rarr;</a>
            </article>
            <article class="p-6 bg-white rounded-xl border border-slate-200">
              <h3 class="font-bold text-lg text-slate-900 mb-1"><a href="/robotic-surgery" class="hover:text-[#1B4965]">Robotic &amp; Computer-Assisted Surgery</a></h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-3">3D CT virtual surgical templating, real-time dynamic soft-tissue balancing, and active haptic boundary protection for maximum joint longevity.</p>
              <a href="/robotic-surgery" class="text-xs font-bold text-[#1B4965]">Read Robotic Guide &rarr;</a>
            </article>
            <article class="p-6 bg-white rounded-xl border border-slate-200">
              <h3 class="font-bold text-lg text-slate-900 mb-1"><a href="/knee-arthroscopy" class="hover:text-[#1B4965]">Knee Arthroscopy &amp; Meniscal Repair</a></h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-3">Over 1,200 keyhole procedures performed. Meniscal preservation repair, loose body debridement, chondral restoration, and PRP injections.</p>
              <a href="/knee-arthroscopy" class="text-xs font-bold text-[#1B4965]">Read Arthroscopy Guide &rarr;</a>
            </article>
            <article class="p-6 bg-white rounded-xl border border-slate-200">
              <h3 class="font-bold text-lg text-slate-900 mb-1"><a href="/patient-guides" class="hover:text-[#1B4965]">Patient Guides &amp; Protocols</a></h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-3">Downloadable day-by-day rehabilitation PDF protocols, detailed surgical risk explanations, and post-operative red flags.</p>
              <a href="/patient-guides" class="text-xs font-bold text-[#1B4965]">Download Protocols &rarr;</a>
            </article>
            <article class="p-6 bg-white rounded-xl border border-slate-200">
              <h3 class="font-bold text-lg text-slate-900 mb-1"><a href="/contact" class="hover:text-[#1B4965]">Private Consultations &amp; Secretary</a></h3>
              <p class="text-xs text-slate-600 leading-relaxed mb-3">Direct contact with practice medical secretary Remya Rexlin. Fast-track appointments at Spire Hartswood and Nuffield Health Brentwood.</p>
              <a href="/contact" class="text-xs font-bold text-[#1B4965]">Book Appointment &rarr;</a>
            </article>
          </div>
        </section>
      </main>
      ${renderFooter()}
    `
  },
  {
    path: 'about',
    title: 'About Mr Shivakumar Shankar | Consultant Hip & Knee Surgeon',
    description: 'Biography, credentials, and surgical training of Mr Shivakumar Shankar, NHS Clinical Lead & Consultant Orthopaedic Surgeon at Spire and Nuffield Hospitals.',
    canonical: 'https://www.shivakumarshankar.co.uk/about',
    bodyHtml: `
      ${renderHeader('about')}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" class="text-xs text-slate-500 mb-6">
          <a href="/" class="hover:underline">Home</a> &gt; <span class="font-bold text-slate-800">About Mr Shivakumar Shankar</span>
        </nav>

        <section class="mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3">
            Consultant Orthopaedic Surgeon &bull; MBBS, MS (Orth), FRCS (Tr &amp; Orth)
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            About Mr Shivakumar Shankar FRCS (Tr &amp; Orth)
          </h1>
          <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
            Mr Shivakumar Shankar is a highly accomplished Consultant Orthopaedic Surgeon in London and Essex with over 26 years of extensive surgical practice. Specialising exclusively in adult hip and knee replacement, computer-assisted and robotic surgery, complex joint reconstruction, and knee arthroscopy, he serves as the NHS Clinical Lead for Orthopaedics at Barking, Havering and Redbridge University Hospitals NHS Trust.
          </p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h2 class="text-xl font-bold text-slate-900 mb-4">Substantive NHS &amp; Leadership Positions</h2>
            <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                <strong>Clinical Lead in Orthopaedics:</strong> Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), overseeing clinical governance, surgical safety protocols, and subspecialty arthroplasty pathways.
              </p>
              <p>
                <strong>Substantive NHS Consultant:</strong> Operating at Queen's Hospital (Major Trauma &amp; Arthroplasty Unit, Romford) and King George Hospital (Elective Orthopaedic Centre, Goodmayes).
              </p>
              <p>
                <strong>Educational &amp; Clinical Supervisor:</strong> Actively mentoring higher surgical trainees from the North Thames London rotation and contributing to regional clinical audits and National Joint Registry (NJR) excellence.
              </p>
            </div>
          </div>

          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h2 class="text-xl font-bold text-slate-900 mb-4">Specialist Fellowships &amp; International Training</h2>
            <div class="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                <strong>Computer Navigation &amp; Arthroplasty Fellowship:</strong> Golden Jubilee National Hospital, Glasgow &mdash; intensive high-volume fellowship mastering computer-navigated kinematics for total hip and total knee arthroplasty.
              </p>
              <p>
                <strong>International Travelling Fellowship:</strong> Specialist minimally invasive joint surgery with Professor Wagner's unit in Rummelsberg, Germany.
              </p>
              <p>
                <strong>Rottinger Muscle-Sparing Training:</strong> CABPS Centre, Centre Hospitalier de Haguenau, France &mdash; direct training in the anterolateral tissue-sparing approach preserving the abductor muscles.
              </p>
              <p>
                <strong>Higher Surgical Training:</strong> North Thames Orthopaedic Training Rotation, including Royal National Orthopaedic Hospital (RNOH) Stanmore, University College London Hospital (UCLH), and Royal London Hospital.
              </p>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 mb-12">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Professional Registrations &amp; Affiliations</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold text-sm mb-1">General Medical Council</strong>
              <p class="text-slate-600">Full Registration on Specialist Orthopaedic Register (GMC 6062754).</p>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold text-sm mb-1">Royal College of Surgeons</strong>
              <p class="text-slate-600">Fellow of the Royal College of Surgeons FRCS (Tr &amp; Orth).</p>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold text-sm mb-1">British Orthopaedic Assoc.</strong>
              <p class="text-slate-600">Active member participating in UK arthroplasty guidelines.</p>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold text-sm mb-1">Private Hospitals</strong>
              <p class="text-slate-600">Spire Hartswood Hospital &amp; Nuffield Health Brentwood Hospital.</p>
            </div>
          </div>
        </section>

        <section class="p-6 bg-[#EAF1F6] rounded-2xl border border-slate-300">
          <h2 class="text-xl font-bold text-[#1B4965] mb-2">Explore Related Clinical Pages</h2>
          <p class="text-xs text-slate-600 mb-4">Discover detailed procedure information, rehabilitation protocols, and patient testimonials:</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
            <a href="/hip-replacement" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Hip Replacement</span> &rarr;
            </a>
            <a href="/knee-replacement" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Knee Replacement</span> &rarr;
            </a>
            <a href="/robotic-surgery" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Robotic Surgery</span> &rarr;
            </a>
            <a href="/contact" class="p-3 bg-[#E8A24C] text-white rounded-lg hover:bg-[#D99136] flex items-center justify-between">
              <span>Book Consultation</span> &rarr;
            </a>
          </div>
        </section>
      </main>
      ${renderFooter()}
    `
  },
  {
    path: 'hip-replacement',
    title: 'Hip Replacement Surgery London & Essex | Mr Shivakumar Shankar',
    description: 'Specialist primary, complex, and minimally invasive hip replacement in London & Essex. Regional pioneer in robotic and computer-assisted hip surgery.',
    canonical: 'https://www.shivakumarshankar.co.uk/hip-replacement',
    bodyHtml: `
      ${renderHeader('hip-replacement')}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" class="text-xs text-slate-500 mb-6">
          <a href="/" class="hover:underline">Home</a> &gt; <span class="font-bold text-slate-800">Hip Replacement Surgery</span>
        </nav>

        <section class="mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3">
            Primary, Complex &amp; Minimally Invasive Arthroplasty
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Specialist Hip Replacement Surgery in London &amp; Essex
          </h1>
          <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
            Mr Shivakumar Shankar is a regional pioneer and leading specialist in primary, complex, and robotic-assisted total hip replacement across Essex and London. Utilising advanced muscle-sparing techniques (Direct Anterior and Rottinger approaches), 3D CT virtual planning, and high-performance ceramic bearings, his focus is rapid mobilization, natural joint restoration, and lifelong implant survivorship.
          </p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="p-6 bg-white rounded-2xl border border-slate-200">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Total Hip Replacement (Primary &amp; Complex)</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Replaces the worn femoral head and arthritic acetabular socket with precision modular prostheses. Eradicates severe groin, buttock, and thigh pain while accurately restoring natural leg length and femoral offset.
            </p>
            <ul class="text-xs text-slate-700 space-y-1">
              <li>&bull; Modern ceramic-on-polyethylene low-friction bearings</li>
              <li>&bull; Uncemented hydroxyapatite-coated titanium cups</li>
              <li>&bull; Customised femoral stem geometry</li>
            </ul>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-slate-200">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Robotic &amp; Navigated Hip Surgery</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Pioneered by Mr Shankar as the first surgeon in Essex &amp; NE London. Utilises 3D CT virtual templating to achieve sub-millimeter orientation of the acetabular cup inclination and anteversion.
            </p>
            <ul class="text-xs text-slate-700 space-y-1">
              <li>&bull; Real-time leg length and offset tracking</li>
              <li>&bull; Eliminates component malpositioning</li>
              <li>&bull; Dramatically reduces dislocation risks</li>
            </ul>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-slate-200">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Minimally Invasive Muscle-Sparing Approaches</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Rottinger and Direct Anterior approaches navigate between natural muscular planes without detaching or dividing major stabilizing muscle groups (such as the gluteus medius).
            </p>
            <ul class="text-xs text-slate-700 space-y-1">
              <li>&bull; Significantly reduced post-operative pain</li>
              <li>&bull; Minimal blood loss and rapid hospital discharge</li>
              <li>&bull; No standard hip movement restrictions</li>
            </ul>
          </div>
        </section>

        <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 mb-12">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Diagnostic &amp; Therapeutic Hip Injections</h2>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            Hip pain frequently mimics or coexists with lower back pathology (lumbar spine stenosis or sciatica). Mr Shankar performs precision ultrasound- or fluoroscopy-guided local anaesthetic and corticosteroid hip joint injections:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold mb-1">Diagnostic Differentiating Test:</strong>
              If local anaesthesia immediately abolishes joint pain during walking and stair climbing, it definitively confirms the hip joint as the primary anatomical pain generator rather than lumbar nerve roots.
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold mb-1">Therapeutic Symptom Relief:</strong>
              Calms severe inflammatory synovitis, providing months of pain relief and buying valuable time for patients pursuing non-operative management before definitive surgery.
            </div>
          </div>
        </section>

        <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 mb-12">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Common Hip Conditions Treated</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div class="p-4 bg-[#F8FAFC] rounded-xl">
              <h3 class="font-bold text-slate-900 mb-1">Hip Osteoarthritis</h3>
              <p class="text-slate-600">Progressive loss of articular cartilage resulting in bone-on-bone friction, groin stiffness, and limp.</p>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl">
              <h3 class="font-bold text-slate-900 mb-1">Avascular Necrosis (AVN)</h3>
              <p class="text-slate-600">Disruption of femoral head microvascular blood supply leading to bone collapse and acute groin pain.</p>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl">
              <h3 class="font-bold text-slate-900 mb-1">Hip Dysplasia (DDH)</h3>
              <p class="text-slate-600">Shallow acetabular socket causing abnormal joint contact stresses and accelerated early arthritis.</p>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl">
              <h3 class="font-bold text-slate-900 mb-1">FAI &amp; Labral Tears</h3>
              <p class="text-slate-600">Cam or pincer impingement generating labral tearing, catching, and groin discomfort in active adults.</p>
            </div>
          </div>
        </section>

        <section class="p-6 bg-[#EAF1F6] rounded-2xl border border-slate-300">
          <h2 class="text-xl font-bold text-[#1B4965] mb-2">Explore Related Clinical Services</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
            <a href="/robotic-surgery" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Robotic Surgery</span> &rarr;
            </a>
            <a href="/patient-guides" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Rehab Protocols</span> &rarr;
            </a>
            <a href="/reviews" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Hip Patient Reviews</span> &rarr;
            </a>
            <a href="/contact" class="p-3 bg-[#E8A24C] text-white rounded-lg hover:bg-[#D99136] flex items-center justify-between">
              <span>Book Hip Consultation</span> &rarr;
            </a>
          </div>
        </section>
      </main>
      ${renderFooter()}
    `
  },
  {
    path: 'knee-replacement',
    title: 'Knee Replacement Surgery London & Essex | Mr Shivakumar Shankar',
    description: 'Consultant-led total knee replacement, robotic-assisted Mako arthroplasty, and partial unicompartmental knee replacement in Brentwood, Essex.',
    canonical: 'https://www.shivakumarshankar.co.uk/knee-replacement',
    bodyHtml: `
      ${renderHeader('knee-replacement')}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" class="text-xs text-slate-500 mb-6">
          <a href="/" class="hover:underline">Home</a> &gt; <span class="font-bold text-slate-800">Knee Replacement Surgery</span>
        </nav>

        <section class="mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3">
            Total, Robotic Mako &amp; Partial Unicompartmental Arthroplasty
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Specialist Knee Replacement &amp; Arthroplasty in London &amp; Essex
          </h1>
          <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
            Mr Shivakumar Shankar offers comprehensive, consultant-led surgical knee care ranging from partial (unicompartmental) knee resurfacing to robotic-assisted total knee arthroplasty. By focusing on dynamic soft-tissue balance, kinematic alignment, and preservation of healthy bone and ligaments, patients achieve stable, natural-feeling joint motion.
          </p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="p-6 bg-white rounded-2xl border border-slate-200">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Total Knee Replacement (TKR)</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Precision resurfacing of the femoral condyles and tibial plateau for multi-compartmental degenerative arthritis. Aligns leg axes, corrects severe bowlegs or knock-knees, and restores smooth functional mobility.
            </p>
            <ul class="text-xs text-slate-700 space-y-1">
              <li>&bull; Corrects fixed flexion contractures</li>
              <li>&bull; Durable cobalt-chrome and cross-linked poly bearings</li>
              <li>&bull; Day 1 post-operative mobilisation</li>
            </ul>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-slate-200">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Robotic Mako-Assisted Knee Surgery</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Robotic arm guidance provides live kinematic feedback on ligament tension throughout the full range of motion prior to bone resection. Delivers sub-millimeter positioning with minimal soft-tissue release.
            </p>
            <ul class="text-xs text-slate-700 space-y-1">
              <li>&bull; Dynamic intra-operative ligament balancing</li>
              <li>&bull; Patient-specific bone cut boundaries</li>
              <li>&bull; Superior early post-operative knee flexion</li>
            </ul>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-slate-200">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Partial (Unicompartmental) Knee Replacement</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              For arthritis confined strictly to either the medial or lateral compartment. Preserves the healthy patellofemoral and opposite compartments, as well as both the ACL and PCL cruciate ligaments.
            </p>
            <ul class="text-xs text-slate-700 space-y-1">
              <li>&bull; Feels like a natural knee with normal proprioception</li>
              <li>&bull; Smaller surgical incision with rapid recovery</li>
              <li>&bull; Shorter hospital stay and faster return to sport</li>
            </ul>
          </div>
        </section>

        <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 mb-12">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Kinematic Alignment vs Mechanical Alignment</h2>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            Traditional mechanical alignment forces every patient's knee into an arbitrary 90-degree straight angle, frequently requiring aggressive ligament releases. Mr Shankar champions customised kinematic alignment:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold mb-1">Restoring Native Constitutional Geometry:</strong>
              Implants are positioned to match the patient's individual pre-arthritic joint line, preserving native soft-tissue laxities throughout flexion and extension.
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold mb-1">Superior Patient Satisfaction:</strong>
              Significantly reduces the incidence of the "stiff" or "unnatural" knee feeling, facilitating effortless stair climbing and outdoor walking.
            </div>
          </div>
        </section>

        <section class="p-6 bg-[#EAF1F6] rounded-2xl border border-slate-300">
          <h2 class="text-xl font-bold text-[#1B4965] mb-2">Explore Related Clinical Services</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
            <a href="/robotic-surgery" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Robotic Surgery</span> &rarr;
            </a>
            <a href="/knee-arthroscopy" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Knee Arthroscopy</span> &rarr;
            </a>
            <a href="/patient-guides" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Rehab Protocols</span> &rarr;
            </a>
            <a href="/contact" class="p-3 bg-[#E8A24C] text-white rounded-lg hover:bg-[#D99136] flex items-center justify-between">
              <span>Book Knee Consultation</span> &rarr;
            </a>
          </div>
        </section>
      </main>
      ${renderFooter()}
    `
  },
  {
    path: 'robotic-surgery',
    title: 'Robotic & Computer-Assisted Hip & Knee Surgery | Essex & London',
    description: 'Pioneering robotic & computer-assisted joint replacement by Mr Shivakumar Shankar. Sub-millimeter implant accuracy and personalised soft-tissue balancing.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-surgery',
    bodyHtml: `
      ${renderHeader('robotic-surgery')}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" class="text-xs text-slate-500 mb-6">
          <a href="/" class="hover:underline">Home</a> &gt; <span class="font-bold text-slate-800">Robotic &amp; Computer-Assisted Surgery</span>
        </nav>

        <section class="mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3">
            Regional Pioneer in Essex &amp; North East London
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Robotic &amp; Computer-Assisted Hip and Knee Surgery
          </h1>
          <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
            Mr Shivakumar Shankar is the first orthopaedic surgeon in Essex and North East London to perform robotic-assisted and computer-navigated total hip and knee joint replacement. Fellowship-trained in computer navigation at the world-renowned Golden Jubilee National Hospital in Glasgow, he harnesses robotic precision to achieve sub-millimeter component alignment, dynamic soft-tissue balance, and optimal joint longevity.
          </p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h2 class="text-xl font-bold text-slate-900 mb-4">How Robotic Surgery Works (The 4 Steps)</h2>
            <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div class="p-3 bg-[#F8FAFC] rounded-lg border border-slate-200">
                <strong class="text-slate-900 block font-bold mb-0.5">1. Pre-Operative 3D CT Virtual Modeling:</strong>
                A high-resolution CT scan of the patient's hip or knee generates a 3D virtual anatomical model capturing unique bony landmarks, deformities, and alignment.
              </div>
              <div class="p-3 bg-[#F8FAFC] rounded-lg border border-slate-200">
                <strong class="text-slate-900 block font-bold mb-0.5">2. Patient-Specific Virtual Planning:</strong>
                Mr Shankar digitally plans exact implant sizes, positioning angles, and resection depths prior to stepping into the operating theatre.
              </div>
              <div class="p-3 bg-[#F8FAFC] rounded-lg border border-slate-200">
                <strong class="text-slate-900 block font-bold mb-0.5">3. Real-Time Dynamic Kinematic Tracking:</strong>
                Infrared optical sensors track joint movement through full flexion, extension, and rotation, assessing ligament tension before bone cuts.
              </div>
              <div class="p-3 bg-[#F8FAFC] rounded-lg border border-slate-200">
                <strong class="text-slate-900 block font-bold mb-0.5">4. Active Haptic Boundary Guidance:</strong>
                The robotic arm physically prevents bone resections outside the approved plan, shielding vital nerves, blood vessels, and collateral ligaments.
              </div>
            </div>
          </div>

          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h2 class="text-xl font-bold text-slate-900 mb-4">Demystifying Robotic Surgery: What It Does &amp; Does Not Mean</h2>
            <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div class="p-4 bg-[#FFF7ED] rounded-lg border border-[#FDBA74]">
                <strong class="text-[#C26B08] block font-bold mb-1">What It Does NOT Mean:</strong>
                <p>The robot does NOT perform the operation independently or make autonomous surgical decisions. There is no automated robot operating on you. The surgeon retains 100% control of all instruments at all times.</p>
              </div>
              <div class="p-4 bg-[#EAF1F6] rounded-lg border border-[#94BFDC]">
                <strong class="text-[#1B4965] block font-bold mb-1">What It DOES Mean:</strong>
                <p>The robotic arm acts as an intelligent high-precision co-pilot. It eliminates human estimation and manual saw blade wobbling, guaranteeing that the plan devised by Mr Shankar is executed with sub-millimeter precision.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 mb-12">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Clinical Benefits of Robotic-Assisted Arthroplasty</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold text-sm mb-1">Sub-Millimeter Precision</strong>
              <p class="text-slate-600">Eliminates component malalignment, leg length discrepancies, and implant edge loading.</p>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold text-sm mb-1">Soft-Tissue Protection</strong>
              <p class="text-slate-600">Haptic safety boundary ensures surrounding muscles, tendons, and neurovascular bundles remain unharmed.</p>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold text-sm mb-1">Faster Mobilisation</strong>
              <p class="text-slate-600">Reduced trauma and tissue swelling translates directly to earlier unassisted walking and discharge.</p>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold text-sm mb-1">Implant Longevity</strong>
              <p class="text-slate-600">Optimally balanced joint kinematics minimise bearing wear and lower the risk of early aseptic loosening.</p>
            </div>
          </div>
        </section>

        <section class="p-6 bg-[#EAF1F6] rounded-2xl border border-slate-300">
          <h2 class="text-xl font-bold text-[#1B4965] mb-2">Explore Related Clinical Services</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
            <a href="/hip-replacement" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Hip Replacement</span> &rarr;
            </a>
            <a href="/knee-replacement" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Knee Replacement</span> &rarr;
            </a>
            <a href="/patient-guides" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Patient Guides</span> &rarr;
            </a>
            <a href="/contact" class="p-3 bg-[#E8A24C] text-white rounded-lg hover:bg-[#D99136] flex items-center justify-between">
              <span>Enquire About Robotic</span> &rarr;
            </a>
          </div>
        </section>
      </main>
      ${renderFooter()}
    `
  },
  {
    path: 'knee-arthroscopy',
    title: 'Knee Arthroscopy & Keyhole Surgery | Mr Shivakumar Shankar',
    description: 'Minimally invasive keyhole knee surgery for meniscal tears, cartilage repair, and loose bodies in London and Essex. Over 1,200 procedures performed.',
    canonical: 'https://www.shivakumarshankar.co.uk/knee-arthroscopy',
    bodyHtml: `
      ${renderHeader('knee-arthroscopy')}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" class="text-xs text-slate-500 mb-6">
          <a href="/" class="hover:underline">Home</a> &gt; <span class="font-bold text-slate-800">Knee Arthroscopy &amp; Keyhole Surgery</span>
        </nav>

        <section class="mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3">
            Minimally Invasive Joint Preservation &bull; Over 1,200 Procedures
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Knee Arthroscopy &amp; Keyhole Joint Preservation Surgery
          </h1>
          <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
            Knee arthroscopy is a minimally invasive keyhole surgical procedure performed through tiny puncture portals (less than 5mm). Having performed over 1,200 successful knee arthroscopies, Mr Shivakumar Shankar prioritises biological joint preservation &mdash; repairing torn meniscal tissue, smoothing damaged articular cartilage, removing loose bodies, and delivering regenerative therapies like Platelet-Rich Plasma (PRP) to delay or prevent the need for joint replacement.
          </p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="p-6 bg-white rounded-2xl border border-slate-200">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Meniscal Repair &amp; Preservation</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Whenever clinically viable, Mr Shankar repairs damaged meniscal fibrocartilage using all-inside or inside-out suture techniques rather than trimming it away, safeguarding natural shock absorption.
            </p>
            <ul class="text-xs text-slate-700 space-y-1">
              <li>&bull; All-inside and root meniscal repairs</li>
              <li>&bull; Targeted partial meniscectomy for complex tears</li>
              <li>&bull; Prevents premature joint wear</li>
            </ul>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-slate-200">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Cartilage Procedures &amp; Loose Bodies</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Chondral flaps and detached bone or cartilage fragments cause painful joint catching, clicking, and sudden knee locking. Arthroscopy clears mechanical obstructions and stimulates natural repair.
            </p>
            <ul class="text-xs text-slate-700 space-y-1">
              <li>&bull; Chondroplasty and microfracture techniques</li>
              <li>&bull; Removal of mechanical loose bodies</li>
              <li>&bull; Relieves persistent joint effusions</li>
            </ul>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-slate-200">
            <h2 class="text-lg font-bold text-slate-900 mb-2">PRP &amp; Biological Regeneration</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Platelet-Rich Plasma (PRP) concentrates healing growth factors harvested from your own blood, calming joint inflammation, protecting early cartilage degeneration, and accelerating soft-tissue recovery.
            </p>
            <ul class="text-xs text-slate-700 space-y-1">
              <li>&bull; Autologous natural biological therapy</li>
              <li>&bull; High molecular weight Hyaluronic Acid</li>
              <li>&bull; Outpatient injection clinics available</li>
            </ul>
          </div>
        </section>

        <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 mb-12">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Day-Case Recovery Timeline &amp; Milestones</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold mb-1">Days 0 to 3: Immediate Day-Case Discharge</strong>
              Walk out on the same day. Apply cold therapy, elevation, and compression with active quadriceps activation and gentle bending.
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold mb-1">Week 1 to 2: Early Mobilisation</strong>
              Full weight-bearing as tolerated, wean off crutches, straight leg raises, and active knee extension exercises.
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold mb-1">Week 3 to 6: Return to Sport</strong>
              Static cycling, swimming, closed kinetic chain exercises, and graded return to light jogging and active daily hobbies.
            </div>
          </div>
        </section>

        <section class="p-6 bg-[#EAF1F6] rounded-2xl border border-slate-300">
          <h2 class="text-xl font-bold text-[#1B4965] mb-2">Explore Related Clinical Services</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
            <a href="/knee-replacement" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Knee Replacement</span> &rarr;
            </a>
            <a href="/robotic-surgery" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Robotic Surgery</span> &rarr;
            </a>
            <a href="/patient-guides" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Arthroscopy Protocols</span> &rarr;
            </a>
            <a href="/contact" class="p-3 bg-[#E8A24C] text-white rounded-lg hover:bg-[#D99136] flex items-center justify-between">
              <span>Book Arthroscopy</span> &rarr;
            </a>
          </div>
        </section>
      </main>
      ${renderFooter()}
    `
  },
  {
    path: 'patient-guides',
    title: 'Patient Information & Guides | Mr Shivakumar Shankar',
    description: 'Patient information guides, surgical risks, non-operative options, and downloadable PDF rehabilitation protocols for hip and knee replacement patients.',
    canonical: 'https://www.shivakumarshankar.co.uk/patient-guides',
    bodyHtml: `
      ${renderHeader('patient-guides')}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" class="text-xs text-slate-500 mb-6">
          <a href="/" class="hover:underline">Home</a> &gt; <span class="font-bold text-slate-800">Patient Guides &amp; Protocols</span>
        </nav>

        <section class="mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3">
            Informed Consent, Surgical Risks &amp; Rehabilitation
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Patient Information Guides &amp; Rehabilitation Protocols
          </h1>
          <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
            Mr Shivakumar Shankar believes that well-informed patients achieve the safest, fastest, and most satisfying surgical outcomes. Here you will find authoritative guidance on surgical preparation, conservative non-operative alternatives, transparent explanations of surgical risks, post-operative red flags, and comprehensive day-by-day downloadable PDF rehabilitation protocols.
          </p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="p-6 bg-white rounded-2xl border border-slate-200">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Non-Operative Care Hierarchy</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Surgery is always the last resort. We explore optimized medical analgesia, weight management (every 1 kg lost relieves 3-4 kg of joint force), low-impact cross-training, and targeted joint injections first.
            </p>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-slate-200">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Transparent Risk Discussion</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Clear, transparent discussion of risks including DVT/PE blood clot prevention (blood thinners and early mobilisation), infection prevention (laminar flow theatres and prophylactic antibiotics), and nerve safety.
            </p>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-slate-200">
            <h2 class="text-lg font-bold text-slate-900 mb-2">Post-Operative Red Flags</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              Distinguishing normal post-surgical warmth and muscular aching from true emergency red flags (sudden chest pain, acute calf swelling, persistent wound leakage, or high fever) requiring immediate clinical review.
            </p>
          </div>
        </section>

        <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 mb-12">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Downloadable Physiotherapy Protocols (PDF)</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <strong class="text-slate-900 block font-bold text-sm mb-1">Total Hip Replacement</strong>
                <p class="text-slate-600 mb-3">6-Month Progressive Recovery Protocol from day 1 ambulation to sports resumption.</p>
              </div>
              <span class="text-xs font-bold text-[#1B4965]">&bull; Available in PDF Hub</span>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <strong class="text-slate-900 block font-bold text-sm mb-1">Total Knee Replacement</strong>
                <p class="text-slate-600 mb-3">Flexion restoration, quadriceps reactivation, and kinematic balancing pathway.</p>
              </div>
              <span class="text-xs font-bold text-[#1B4965]">&bull; Available in PDF Hub</span>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <strong class="text-slate-900 block font-bold text-sm mb-1">Partial Knee Replacement</strong>
                <p class="text-slate-600 mb-3">Accelerated rehabilitation capitalizing on preserved cruciate ligaments.</p>
              </div>
              <span class="text-xs font-bold text-[#1B4965]">&bull; Available in PDF Hub</span>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <strong class="text-slate-900 block font-bold text-sm mb-1">Knee Arthroscopy</strong>
                <p class="text-slate-600 mb-3">Rapid keyhole meniscal repair protocol with return to recreational running.</p>
              </div>
              <span class="text-xs font-bold text-[#1B4965]">&bull; Available in PDF Hub</span>
            </div>
          </div>
        </section>

        <section class="p-6 bg-[#EAF1F6] rounded-2xl border border-slate-300">
          <h2 class="text-xl font-bold text-[#1B4965] mb-2">Explore Related Clinical Services</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
            <a href="/hip-replacement" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Hip Replacement</span> &rarr;
            </a>
            <a href="/knee-replacement" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Knee Replacement</span> &rarr;
            </a>
            <a href="/robotic-surgery" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Robotic Surgery</span> &rarr;
            </a>
            <a href="/contact" class="p-3 bg-[#E8A24C] text-white rounded-lg hover:bg-[#D99136] flex items-center justify-between">
              <span>Book Consultation</span> &rarr;
            </a>
          </div>
        </section>
      </main>
      ${renderFooter()}
    `
  },
  {
    path: 'reviews',
    title: 'Patient Reviews & Outcomes | Mr Shivakumar Shankar',
    description: 'Read 5-star verified patient reviews and clinical feedback for Mr Shivakumar Shankar, Consultant Orthopaedic Hip & Knee Surgeon at Spire and Nuffield.',
    canonical: 'https://www.shivakumarshankar.co.uk/reviews',
    bodyHtml: `
      ${renderHeader('reviews')}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" class="text-xs text-slate-500 mb-6">
          <a href="/" class="hover:underline">Home</a> &gt; <span class="font-bold text-slate-800">Patient Reviews &amp; Outcomes</span>
        </nav>

        <section class="mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3">
            Dual-Platform Verified Feedback &bull; Doctify &amp; iWantGreatCare
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Verified Patient Reviews &amp; Clinical Outcomes
          </h1>
          <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
            Transparency and clinical excellence define Mr Shivakumar Shankar's practice. With hundreds of independently verified 5-star patient reviews on leading healthcare rating platforms including Doctify and iWantGreatCare (IWGC), patients consistently highlight his calm, attentive listening, clear explanations, robotic surgical precision, and dedicated post-operative care.
          </p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div class="flex items-center gap-1 text-[#E8A24C] mb-2 text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <h2 class="text-base font-bold text-slate-900 mb-2">Total Hip Replacement Patient</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              "Mr Shankar gave me my life back. After two years of terrible groin pain and limp, I underwent robotic hip replacement at Spire Hartswood. I was walking without crutches in three weeks. His care and reassurance throughout were exceptional."
            </p>
            <span class="text-xs text-slate-500 block font-semibold">&mdash; Verified Patient, Spire Hartswood</span>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div class="flex items-center gap-1 text-[#E8A24C] mb-2 text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <h2 class="text-base font-bold text-slate-900 mb-2">Robotic Knee Replacement Patient</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              "From our first consultation at Nuffield Brentwood, Mr Shankar explained everything clearly. The robotic knee surgery went smoothly, and my new knee feels completely natural. I am now back to walking my dog 5 miles daily."
            </p>
            <span class="text-xs text-slate-500 block font-semibold">&mdash; Verified Patient, Nuffield Brentwood</span>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div class="flex items-center gap-1 text-[#E8A24C] mb-2 text-sm">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <h2 class="text-base font-bold text-slate-900 mb-2">Knee Arthroscopy &amp; Meniscal Repair</h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              "Had a complex sports meniscal tear that was locking my knee. Mr Shankar performed keyhole surgery as a day case. Pain was minimal and I was back on the golf course within 6 weeks. Highly recommend his clinical expertise."
            </p>
            <span class="text-xs text-slate-500 block font-semibold">&mdash; Verified Patient, BHRUT NHS Care</span>
          </div>
        </section>

        <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 mb-12">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Clinical Governance &amp; Registry Verification</h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold text-sm mb-1">National Joint Registry (NJR)</strong>
              <p class="text-slate-600">All hip and knee joint replacements are submitted to the UK National Joint Registry, recording superior implant survival and low revision rates.</p>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold text-sm mb-1">General Medical Council (GMC)</strong>
              <p class="text-slate-600">Fully registered with a current license to practice on the GMC Specialist Register for Trauma &amp; Orthopaedic Surgery (GMC 6062754).</p>
            </div>
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <strong class="text-slate-900 block font-bold text-sm mb-1">Doctify &amp; IWGC Trust Badges</strong>
              <p class="text-slate-600">Rated "Excellent" across all patient feedback categories for consultations, surgery, bedside manner, and follow-up support.</p>
            </div>
          </div>
        </section>

        <section class="p-6 bg-[#EAF1F6] rounded-2xl border border-slate-300">
          <h2 class="text-xl font-bold text-[#1B4965] mb-2">Consultation Booking &amp; Next Steps</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
            <a href="/hip-replacement" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Hip Replacement</span> &rarr;
            </a>
            <a href="/knee-replacement" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Knee Replacement</span> &rarr;
            </a>
            <a href="/about" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>About Surgeon</span> &rarr;
            </a>
            <a href="/contact" class="p-3 bg-[#E8A24C] text-white rounded-lg hover:bg-[#D99136] flex items-center justify-between">
              <span>Book Appointment</span> &rarr;
            </a>
          </div>
        </section>
      </main>
      ${renderFooter()}
    `
  },
  {
    path: 'contact',
    title: 'Contact & Consultations | Mr Shivakumar Shankar Hip & Knee Surgeon',
    description: 'Contact Mr Shivakumar Shankar\'s medical secretary Remya Rexlin. Book private consultations at Spire Hartswood Hospital or Nuffield Health Brentwood.',
    canonical: 'https://www.shivakumarshankar.co.uk/contact',
    bodyHtml: `
      ${renderHeader('contact')}
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" class="text-xs text-slate-500 mb-6">
          <a href="/" class="hover:underline">Home</a> &gt; <span class="font-bold text-slate-800">Contact Practice Secretary &amp; Bookings</span>
        </nav>

        <section class="mb-12">
          <span class="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-3">
            Fast-Track Private Appointments &bull; Insured &amp; Self-Pay
          </span>
          <h1 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Contact Mr Shivakumar Shankar's Practice
          </h1>
          <p class="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-4xl">
            Whether you are suffering from painful hip arthritis, knee stiffness, or a sports-related meniscal tear, booking a consultation with Mr Shivakumar Shankar is fast and simple. Contact his dedicated medical secretary Remya Rexlin directly for private appointments at Spire Hartswood Hospital or Nuffield Health Brentwood Hospital.
          </p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h2 class="text-xl font-bold text-slate-900 mb-4">Practice Medical Secretary</h2>
            <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                <strong>Medical Secretary:</strong> Remya Rexlin<br>
                Dedicated secretary for all private enquiries, insurance pre-authorisations, surgical scheduling, and clinic appointments.
              </p>
              <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 space-y-2">
                <div>
                  <strong class="text-slate-900 block">Mobile &amp; Direct Messaging:</strong>
                  <a href="tel:07587765888" class="text-[#1B4965] font-bold hover:underline">07587 765888</a>
                </div>
                <div>
                  <strong class="text-slate-900 block">Practice Landline:</strong>
                  <a href="tel:02035230621" class="text-[#1B4965] font-bold hover:underline">020 3523 0621</a>
                </div>
                <div>
                  <strong class="text-slate-900 block">Confidential Practice Email:</strong>
                  <a href="mailto:hip.knee_specialist@yahoo.com" class="text-[#1B4965] font-bold hover:underline">hip.knee_specialist@yahoo.com</a>
                </div>
              </div>
              <p class="text-xs text-slate-500">
                Secretary operating hours: Monday to Friday, 9:00 AM &ndash; 5:00 PM. Urgent patient enquiries are prioritised.
              </p>
            </div>
          </div>

          <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
            <h2 class="text-xl font-bold text-slate-900 mb-4">Private Consulting Locations</h2>
            <div class="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <strong class="text-slate-900 block font-bold text-base">Spire Hartswood Hospital</strong>
                <p class="text-slate-600 mt-1">Eagle Way, Great Warley, Brentwood, Essex CM13 3LE</p>
                <p class="text-slate-600 mt-1">Main Hospital Telephone: <a href="tel:01277695695" class="text-[#1B4965] font-bold">01277 695 695</a></p>
                <p class="text-xs text-slate-500 mt-1">Free on-site parking &bull; Accessible from M25 J28/A12 &bull; On-site MRI &amp; CT</p>
              </div>

              <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
                <strong class="text-slate-900 block font-bold text-base">Nuffield Health Brentwood Hospital</strong>
                <p class="text-slate-600 mt-1">Shenfield Road, Brentwood, Essex CM15 8EH</p>
                <p class="text-slate-600 mt-1">Main Hospital Telephone: <a href="tel:01277263263" class="text-[#1B4965] font-bold">01277 263 263</a></p>
                <p class="text-xs text-slate-500 mt-1">Free on-site parking &bull; Near Brentwood &amp; Shenfield Stations &bull; Robotic Suite</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 mb-12">
          <h2 class="text-xl font-bold text-slate-900 mb-4">Insured &amp; Self-Pay Consultations</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <h3 class="font-bold text-slate-900 text-base mb-2">Private Medical Insurance (PMI)</h3>
              <p class="text-slate-600 leading-relaxed mb-3">
                Mr Shankar is a fee-assured consultant recognised by all major UK private medical insurance companies, including:
              </p>
              <div class="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                <span>&bull; Bupa</span>
                <span>&bull; AXA Health</span>
                <span>&bull; Aviva Health</span>
                <span>&bull; VitalityHealth</span>
                <span>&bull; WPA</span>
                <span>&bull; Healix</span>
                <span>&bull; Cigna UK</span>
                <span>&bull; Police Mutual</span>
              </div>
              <p class="text-xs text-slate-500 mt-3">
                Please request your pre-authorisation code from your insurer before your appointment date.
              </p>
            </div>

            <div class="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200">
              <h3 class="font-bold text-slate-900 text-base mb-2">Self-Paying Patients</h3>
              <p class="text-slate-600 leading-relaxed mb-3">
                No GP referral letter is mandatory for self-funding consultations (though always welcomed). Fixed-price packages covering initial consultations, diagnostic imaging (X-rays, MRI), and comprehensive surgical procedures with zero hidden costs are provided directly by Spire and Nuffield hospitals.
              </p>
              <p class="text-xs text-slate-500">
                Flexible healthcare financing options and payment plans are available through the hospital finance teams.
              </p>
            </div>
          </div>
        </section>

        <section class="p-6 bg-[#EAF1F6] rounded-2xl border border-slate-300">
          <h2 class="text-xl font-bold text-[#1B4965] mb-2">Clinical Service Directory</h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
            <a href="/hip-replacement" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Hip Replacement</span> &rarr;
            </a>
            <a href="/knee-replacement" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Knee Replacement</span> &rarr;
            </a>
            <a href="/robotic-surgery" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Robotic Surgery</span> &rarr;
            </a>
            <a href="/knee-arthroscopy" class="p-3 bg-white rounded-lg hover:text-[#1B4965] border border-slate-200 flex items-center justify-between">
              <span>Knee Arthroscopy</span> &rarr;
            </a>
          </div>
        </section>
      </main>
      ${renderFooter()}
    `
  }
];

console.log('Generating pre-rendered static HTML routes for direct URL access...');

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

  // CRITICAL FIX: Replace the entire inner contents of <div id="root"> with the distinct, page-specific, crawlable HTML!
  // This ensures search engines and curl requests get substantial, unique body HTML for each route.
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
    // Write homepage to dist/index.html
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
