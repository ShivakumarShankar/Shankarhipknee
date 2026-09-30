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
          desc: 'Mr Shankar was the first surgeon to perform computer-assisted and robotic total hip replacement in Essex and North East London, delivering sub-millimeter component alignment.'
        },
        {
          title: 'Minimally Invasive Joint Care',
          desc: 'Specialist expertise in tissue-sparing Rottinger anterior hip surgery and keyhole knee arthroscopy preserving vital soft tissues for accelerated rehabilitation.'
        },
        {
          title: 'Verified 5-Star Outcomes',
          desc: 'Hundreds of independently verified patient reviews on Doctify and iWantGreatCare praising clinical excellence, bedside manner, and rapid recovery.'
        }
      ])}

      <!-- Media & Social Section -->
      <section id="media" class="py-12 border-t border-slate-200 bg-slate-50 rounded-2xl p-6 sm:p-8 mb-12">
        <div class="text-center max-w-3xl mx-auto mb-8">
          <span class="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-2">
            Professional News &amp; Updates
          </span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Media &amp; Social
          </h2>
          <p class="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
            Follow Mr Shivakumar Shankar for professional updates, patient education and information about developments in hip and knee surgery.
          </p>
        </div>

        <!-- Social Channels (@ShankarHipKnee) -->
        <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span class="text-[11px] font-bold uppercase tracking-wider text-[#1B4965]">Professional Channels</span>
            <h3 class="text-base font-bold text-slate-900">Follow @ShankarHipKnee</h3>
            <p class="text-xs text-slate-600">Educational video walkthroughs, joint surgery updates, and patient recovery insights.</p>
          </div>
          <div class="flex items-center gap-2 flex-wrap">
            <a href="https://www.linkedin.com/in/shivakumar-shankar-25758026/recent-activity/all/" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#0A66C2] text-white text-xs font-bold hover:bg-[#004182] transition-colors">LinkedIn</a>
            <a href="https://x.com/ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-bold hover:bg-slate-800 transition-colors">X (@ShankarHipKnee)</a>
            <a href="https://www.youtube.com/@ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition-colors">YouTube</a>
            <a href="https://www.instagram.com/ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-pink-600 text-white text-xs font-bold hover:opacity-90 transition-opacity">Instagram</a>
            <a href="https://www.tiktok.com/@ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-black transition-colors">TikTok</a>
            <a href="https://finder.bupa.co.uk/Consultant/mr-shivakumar-shankar-orthopaedic-surgery-brentwood-romford" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-[#0079C8] text-white text-xs font-bold hover:bg-[#005a96] transition-colors">Bupa Profile</a>
          </div>
        </div>

        <!-- Featured Media & Milestones Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative aspect-video w-full bg-slate-900 overflow-hidden rounded-lg mb-3">
                <img src="/nuffield-brentwood-mako-2026-v1.jpg" alt="Mr Shivakumar Shankar with the Stryker specialist and surgical scrub team following the first MAKO robotic-assisted joint replacement at Nuffield Health Brentwood Hospital" class="w-full h-full object-cover" width="600" height="338" loading="lazy" />
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                <span class="font-bold text-[#00703C] uppercase tracking-wider text-[10px]">Robotic Surgery &bull; Nuffield Brentwood</span>
                <span class="font-semibold text-slate-700">29 September 2026</span>
              </div>
              <h3 class="font-bold text-slate-900 text-sm mb-2">MAKO Robotic-Assisted Joint Replacement Introduced to Private Practice in Brentwood</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                On 29 September 2026, Mr Shivakumar Shankar performed his first MAKO robotic-assisted joint replacement at Nuffield Health Brentwood Hospital, marking an important development in his private hip and knee practice.
              </p>
            </div>
            <a href="https://www.instagram.com/shivakumarshankar/" target="_blank" rel="noopener noreferrer" class="mt-4 text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              View on Instagram (@shivakumarshankar) &rarr;
            </a>
          </div>

          <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative aspect-video w-full bg-slate-900 overflow-hidden rounded-lg mb-3">
                <img src="/shankar-personal-100-mako-2026.jpg" alt="Mr Shivakumar Shankar marking his personal milestone of 100 MAKO robotic-assisted joint replacement procedures at BHRUT" class="w-full h-full object-cover" width="600" height="338" loading="lazy" />
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                <span class="font-bold text-[#1B4965] uppercase tracking-wider text-[10px]">Robotic Surgery &bull; BHRUT Milestone</span>
                <span class="font-semibold text-slate-700">24 September 2026</span>
              </div>
              <h3 class="font-bold text-slate-900 text-sm mb-2">100 MAKO Robotic-Assisted Joint Replacements — A Personal Milestone at BHRUT</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                On 24 September 2026, Mr Shivakumar Shankar reached a personal milestone of completing 100 MAKO robotic-assisted joint replacement procedures at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT).
              </p>
            </div>
            <a href="https://www.instagram.com/shivakumarshankar/" target="_blank" rel="noopener noreferrer" class="mt-4 text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              View on Instagram (@shivakumarshankar) &rarr;
            </a>
          </div>

          <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative aspect-video w-full bg-slate-900 overflow-hidden rounded-lg mb-3">
                <img src="/bhrut-100th-robotic-joint-2023.jpg" alt="BHRUT NHS Trust marking the 100th patient robotic joint replacement at King George Hospital" class="w-full h-full object-cover" width="600" height="338" loading="lazy" />
              </div>
              <div class="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                <span class="text-[10px] font-bold text-amber-700 uppercase tracking-wider">BHRUT Departmental Milestone</span>
                <span class="font-semibold text-slate-700">18 January 2023</span>
              </div>
              <h3 class="font-bold text-slate-900 text-sm mb-2">BHRUT NHS Trust: 100th Robotic Joint Replacement Milestone (Catherine’s Story)</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Fitness manager Catherine O'Brien-Passfield becomes the 100th patient to receive a robotic-assisted joint replacement at Barking, Havering and Redbridge University Hospitals NHS Trust, performed by Mr Shivakumar Shankar.
              </p>
            </div>
            <a href="https://www.bhrhospitals.nhs.uk/news/fitness-manager-catherine-gets-a-whole-new-lease-of-life-after-being-the-100th-patient-to-have-a-robotic-joint-replacement-5735" target="_blank" rel="noopener noreferrer" class="mt-4 text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              Read BHRUT NHS Report &rarr;
            </a>
          </div>

          <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative aspect-video w-full bg-slate-900 overflow-hidden rounded-lg mb-3">
                <img src="https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/b026/live/529541b0-f6f1-11f0-b385-5f48925de19a.png" alt="BBC News: Robotic Joint Replacement at Elective Surgical Hub" class="w-full h-full object-cover" width="600" height="338" loading="lazy" />
              </div>
              <span class="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">BBC London Broadcast</span>
              <h3 class="font-bold text-slate-900 text-sm mb-2">BBC News: Robotic Joint Replacement at Elective Surgical Hub</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Featured on BBC London News demonstrating how robotic 3D CT guidance and dedicated ring-fenced theatres protect planned operations from emergency winter delays.
              </p>
            </div>
            <a href="https://www.bbc.co.uk/news/articles/c5ydj10l0k3o" target="_blank" rel="noopener noreferrer" class="mt-4 text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              Read BBC News Feature &rarr;
            </a>
          </div>

          <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative aspect-video w-full bg-slate-900 overflow-hidden rounded-lg mb-3">
                <img src="https://img.youtube.com/vi/QHnGZWrE3fU/hqdefault.jpg" alt="Home Exercises for Hip &amp; Knee Arthritis" class="w-full h-full object-cover" width="600" height="338" loading="lazy" />
              </div>
              <span class="text-[10px] font-bold text-red-600 uppercase tracking-wider block mb-1">Patient Education Videos</span>
              <h3 class="font-bold text-slate-900 text-sm mb-2">Home Exercises for Hip &amp; Knee Arthritis</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Consultant-guided 5-minute video tutorials demonstrating evidence-based strengthening and range-of-motion routines for patients managing joint symptoms.
              </p>
            </div>
            <a href="https://www.youtube.com/@ShankarHipKnee" target="_blank" rel="noopener noreferrer" class="mt-4 text-xs font-bold text-[#1B4965] hover:underline flex items-center gap-1">
              Watch on YouTube &rarr;
            </a>
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
    description: 'Specialist primary, complex, and minimally invasive hip replacement in London & Essex. Regional pioneer in robotic and computer-assisted hip surgery.',
    canonical: 'https://www.shivakumarshankar.co.uk/hip-replacement',
    bodyHtml: renderPageShell(
      'hip-replacement',
      'Specialist Hip Arthroplasty • London & Essex',
      'Specialist Hip Replacement Surgery in London & Essex',
      'Comprehensive primary, complex, and robotic-assisted total hip replacement surgery combining surgical excellence, computer navigation, and advanced ceramic bearings to alleviate pain and restore mobility.',
      `
      ${renderCardGrid([
        {
          title: 'Total Hip Replacement',
          desc: 'Precision replacement of the worn acetabular socket and femoral head using uncemented titanium shells and ceramic-on-polyethylene bearing surfaces.',
          bullets: ['Eliminates groin and buttock pain', 'Restores leg length and offset', 'Durable modern implants']
        },
        {
          title: 'Robotic & Navigated Hip Surgery',
          desc: 'Intra-operative real-time tracking of cup inclination and anteversion angles to prevent component malpositioning and minimise dislocation risks.',
          bullets: ['Sub-millimeter cup orientation', 'Dynamic spinopelvic assessment', 'Reduced risk of impingement']
        },
        {
          title: 'Minimally Invasive Techniques',
          desc: 'Muscle-preserving Rottinger and anterior tissue-sparing approaches designed to protect key stabilizing muscles and accelerate return to walking.',
          bullets: ['Less post-operative discomfort', 'Early hospital discharge', 'Rapid functional rehab']
        }
      ])}
      `
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
      'Mako robotic-assisted total hip replacement utilizes pre-operative 3D CT modeling, dynamic virtual planning, and active haptic boundary guidance to optimize acetabular cup orientation and femoral biomechanics.',
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
    description: 'Tissue-sparing Rottinger and muscle-preserving hip arthroplasty techniques accelerating post-operative mobilization and functional rehabilitation.',
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
          desc: 'Reduced soft tissue trauma facilitates earlier unassisted walking and shorter inpatient hospitalization.'
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
    title: 'Knee Replacement Surgery London & Essex | Mr Shivakumar Shankar',
    description: 'Consultant-led total knee replacement, kinematic alignment, and personalised soft-tissue balancing in London, Essex, and Brentwood.',
    canonical: 'https://www.shivakumarshankar.co.uk/knee-replacement',
    bodyHtml: renderPageShell(
      'knee-replacement',
      'Specialist Knee Arthroplasty • London & Essex',
      'Specialist Knee Replacement &amp; Arthroplasty in London &amp; Essex',
      'Consultant-led total knee replacement, robotic-guided joint resurfacing, and partial knee arthroplasty designed to restore natural kinematics and pain-free mobility.',
      `
      ${renderCardGrid([
        {
          title: 'Total Knee Replacement (TKR)',
          desc: 'Resurfacing worn femoral condyles and tibial plateau with durable cobalt-chrome and cross-linked polyethylene implants.'
        },
        {
          title: 'Robotic Mako Assistance',
          desc: 'Intra-operative dynamic ligament balancing throughout flexion and extension for a more natural joint feel.'
        },
        {
          title: 'Partial Knee Replacement',
          desc: 'Preserves the healthy knee compartments, ACL, and PCL for faster recovery and normal joint proprioception.'
        }
      ])}
      `
    )
  },

  // 9. Robotic Knee Replacement
  {
    path: 'robotic-knee-replacement',
    title: 'Robotic Knee Replacement London & Essex | Mako Arthroplasty',
    description: 'Mako robotic-assisted total and partial knee replacement with real-time dynamic ligament balancing and sub-millimeter bony resection accuracy.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-knee-replacement',
    bodyHtml: renderPageShell(
      'robotic-knee-replacement',
      'Robotic Knee Arthroplasty • Mako System',
      'Robotic-Assisted Knee Replacement Surgery',
      'Robotic-assisted knee replacement with the Mako system provides 3D CT virtual modeling, dynamic ligament tension assessment, and stereotactic bone resection boundaries.',
      `
      ${renderCardGrid([
        {
          title: 'Dynamic Soft-Tissue Balance',
          desc: 'Assesses ligament laxity across the entire range of motion before any bone cuts are made.'
        },
        {
          title: 'Sub-Millimeter Resection',
          desc: 'Robotic arm physically guides the saw blade strictly within pre-planned safety boundaries.'
        },
        {
          title: 'Preserves Bone Stock',
          desc: 'Removes only arthritic bone while protecting surrounding collateral and cruciate ligaments.'
        }
      ])}
      `
    )
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
          desc: 'Quantifies flexion and extension spaces in millimeters to achieve equal soft-tissue tension.'
        },
        {
          title: '9 Years Navigation Experience',
          desc: 'Extensive track record utilizing computer navigation systems in routine and complex cases.'
        }
      ])}
      `
    )
  },

  // 11. Partial Knee Replacement
  {
    path: 'partial-knee-replacement',
    title: 'Partial Knee Replacement London & Essex | Unicompartmental Surgery',
    description: 'Minimally invasive unicompartmental resurfacing preserving the healthy knee compartments, ACL, and PCL for natural joint kinematics.',
    canonical: 'https://www.shivakumarshankar.co.uk/partial-knee-replacement',
    bodyHtml: renderPageShell(
      'partial-knee-replacement',
      'Unicompartmental Arthroplasty • Joint Preservation',
      'Partial Knee Replacement Surgery',
      'Unicompartmental knee replacement resurfaces strictly the diseased medial or lateral compartment, leaving undamaged cartilage, bone, and both cruciate ligaments intact.',
      `
      ${renderCardGrid([
        {
          title: 'Preserves ACL and PCL',
          desc: 'Maintaining native ligaments preserves normal joint kinematics, knee bend, and natural proprioception.'
        },
        {
          title: 'Smaller Incision',
          desc: 'Surgical approach creates minimal soft-tissue disturbance, leading to reduced swelling and less post-op pain.'
        },
        {
          title: 'Rapid Recovery',
          desc: 'Many patients mobilise without walking aids within weeks and return earlier to active hobbies.'
        }
      ])}
      `
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
          desc: 'Small puncture incisions enable immediate mobilization and safe same-day hospital discharge.'
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
          PRP is generally well-tolerated. Recognized potential side effects include temporary soreness or discomfort following treatment, mild swelling, localized bruising, an extremely rare risk of infection, and the possibility that response varies between individuals.
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
    description: 'Pioneering robotic & computer-assisted joint replacement by Mr Shivakumar Shankar. Sub-millimeter implant accuracy and personalised soft-tissue balancing.',
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
          title: '3D Virtual Modeling',
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
    description: 'Pioneering robotic & computer-assisted joint replacement by Mr Shivakumar Shankar. Sub-millimeter implant accuracy and personalised soft-tissue balancing.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-computer-assisted-surgery',
    bodyHtml: renderPageShell(
      'robotic-surgery',
      'Regional Pioneer in Essex & North East London',
      'Robotic &amp; Computer-Assisted Hip and Knee Surgery',
      'Comprehensive patient guide to computer navigation and Mako robotic-assisted technology for total hip, total knee, and partial knee replacement in London and Essex.',
      `
      ${renderCardGrid([
        {
          title: 'Sub-Millimeter Precision',
          desc: 'Delivers sub-millimeter component alignment and soft-tissue balance tailored to patient anatomy.'
        },
        {
          title: 'Clinical Experience',
          desc: '9 years experience in computer-assisted surgery, incorporating Mako robotic technology.'
        },
        {
          title: 'Available Locations',
          desc: 'Private robotic joint replacement available at Spire Hartswood and Nuffield Health Brentwood hospitals.'
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
          desc: 'Combines pre-operative 3D CT modeling with active haptic stereotactic boundary guidance and dynamic soft-tissue tension mapping.'
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
          desc: 'Clear pathways, remove loose rugs, arrange ground-floor recovery sleeping if stairs are difficult, and organize assistance.'
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
          desc: 'Mr Shankar is recognized by all major UK medical insurers including Bupa, AXA Health, Aviva, Vitality, and WPA.'
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
      'Downloadable step-by-step physiotherapy protocols authored by Mr Shivakumar Shankar to guide your post-operative recovery and optimize joint range of motion.',
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
      'Specialist hip and knee arthroplasty, robotic surgery, and joint preservation care for Essex patients. Private consultations at Spire Hartswood and Nuffield Health Brentwood.',
      `
      ${renderCardGrid([
        {
          title: 'Regional Robotic Pioneer',
          desc: 'First surgeon in Essex to perform computer-assisted and robotic total hip replacement.'
        },
        {
          title: 'Brentwood Private Facilities',
          desc: 'Outpatient consultation clinics, on-site imaging, and dedicated joint replacement inpatient wards.'
        },
        {
          title: 'Insured & Self-Pay Welcome',
          desc: 'Recognized by all UK private insurers with transparent fixed-price self-pay options.'
        }
      ])}
      `
    )
  },

  // 26. Spire Hartswood Hospital
  {
    path: 'spire-hartswood-hospital',
    title: 'Spire Hartswood Hospital Consultations | Brentwood, Essex',
    description: 'Private hip and knee consultations and robotic surgery with Mr Shivakumar Shankar at Spire Hartswood Hospital in Brentwood, Essex.',
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
          desc: 'Outpatient consultation clinics, robotic joint replacement, rapid-access joint injections, and physiotherapy.'
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
          desc: 'Specialised protected elective orthopaedic surgical suites minimizing operation cancellation risks.'
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
      'Verified Patient Reviews &amp; Clinical Outcomes',
      'Transparency and clinical excellence define Mr Shivakumar Shankar\'s practice. With hundreds of independently verified 5-star patient reviews on leading healthcare rating platforms, patients consistently highlight his expertise and care.',
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
      'Verified Patient Reviews &amp; Clinical Outcomes',
      'Read verified patient testimonials, surgical outcomes, and ratings from Doctify and iWantGreatCare praising Mr Shankar\'s robotic precision and patient care.',
      `
      ${renderCardGrid([
        {
          title: 'Top Rated Consultant',
          desc: 'Consistently awarded top marks for bedside manner, listening to patients, and explaining surgical options clearly.'
        },
        {
          title: 'National Joint Registry (NJR)',
          desc: 'Routine submission of all arthroplasty data ensuring transparency and superior implant survivorship.'
        },
        {
          title: 'Care Quality Commission',
          desc: 'Practicing exclusively in CQC-inspected hospital facilities in Brentwood, Romford, and Goodmayes.'
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
