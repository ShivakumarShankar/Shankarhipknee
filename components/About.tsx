import React from 'react';
import { 
  Award, GraduationCap, ChevronRight, 
  Shield, CheckCircle, 
  BookOpen, Building, FileCheck, Microscope,
  ExternalLink, ShieldCheck
} from 'lucide-react';
import { 
  SURGEON_NAME, 
  SURGEON_ROLE, 
  QUALIFICATIONS, 
  ADDITIONAL_DIPLOMA, 
  GMC_NUMBER,
  SURGICAL_STATS, 
  FELLOWSHIPS, 
  LEADERSHIP_ROLES, 
  WHY_CHOOSE_POINTS,
  MOBILE_PHONE,
  SECRETARY_NAME,
  LOCATIONS,
  SLOGAN,
  BUPA_PROFILE_URL,
  LINKEDIN_URL,
  X_URL,
  X_HANDLE
} from '../constants';
import { SurgeonPortrait, SurgeonPortraitCard } from './SurgeonPortrait';

interface AboutProps {
  onBook?: () => void;
  onNavigateHome?: () => void;
}

const About: React.FC<AboutProps> = ({ onBook, onNavigateHome }) => {
  return (
    <div className="pt-28 md:pt-36 font-sans text-slate-800 animate-fade-in">
      
      {/* 1. HERO PROFILE SECTION */}
      <section className="relative bg-slate-50 text-slate-800 py-16 lg:py-24 overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B4965]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8A24C]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb / Back */}
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-600">
            <button 
              onClick={onNavigateHome} 
              className="hover:text-[#1B4965] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#1B4965] font-bold">About Mr Shivakumar Shankar</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              {/* Slogan with Logo Icon */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                <img 
                  src="./logo_icon.png" 
                  alt="Mr Shivakumar Shankar - London and Essex Hip and Knee Surgeon Logo Icon" 
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain bg-white p-1 rounded-xl shadow-md flex-shrink-0 border border-slate-200"
                />
                <h2 className="font-serif text-[28px] sm:text-[34px] text-[#1B4965] font-semibold tracking-tight leading-tight">
                  {SLOGAN}
                </h2>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-['Times_New_Roman'] text-slate-900 leading-tight tracking-tight">
                {SURGEON_NAME}
              </h1>

              <p className="text-xl sm:text-2xl font-serif italic text-[#1B4965] font-normal">
                {SURGEON_ROLE}
              </p>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <p className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-1 font-semibold">
                  Accreditations & Credentials
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  {QUALIFICATIONS}
                </p>
                <p className="text-xs text-[#1B4965] mt-1 font-semibold">
                  {ADDITIONAL_DIPLOMA}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {GMC_NUMBER} • CCT Awarded October 2016
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed border-l-4 border-[#1B4965] pl-4">
                Mr Shivakumar Shankar is a high-volume Consultant Orthopaedic Hip and Knee Surgeon specialising in 
                <strong> hip and knee replacement surgery, minimally invasive hip replacement, robotic-assisted arthroplasty</strong>, 
                and <strong>computer-navigated joint replacement</strong>.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={onBook} 
                  className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-7 py-3.5 rounded-lg font-bold transition-all shadow-md text-sm tracking-wide"
                >
                  Book Private Consultation
                </button>
                <a 
                  href="#credentials"
                  className="px-6 py-3.5 rounded-lg font-bold text-[#1B4965] bg-white border border-slate-200 hover:bg-slate-50 transition-all text-sm flex items-center gap-2 shadow-xs"
                >
                  View Fellowships & Leadership <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Surgeon Portrait and Key Milestones */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <SurgeonPortraitCard 
                className="w-full max-w-md shadow-xl"
                imageMaxHeight="max-h-[520px]"
                alt={`${SURGEON_NAME} - Consultant Orthopaedic Surgeon`}
              />

              {/* Regional Pioneer Accolade Card */}
              <div className="w-full max-w-md mt-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1B4965] uppercase tracking-widest mb-1">
                  <Award size={14} /> Regional Pioneer
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>First surgeon</strong> in Essex & North East London to perform computer-assisted and robotic total hip replacement.
                </p>
                <div className="mt-2.5 pt-2.5 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
                  <span>NHS practice: Queens Hospital Romford</span>
                  <span className="text-slate-900 font-semibold">BHRUT NHS Trust</span>
                </div>
              </div>
            </div>

          </div>

          {/* 4 Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-slate-200">
            {SURGICAL_STATS.map((stat, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs hover:border-[#1B4965] transition-all">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#1B4965] mb-1">
                  {stat.value}
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#E8A24C] mb-2">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-600 leading-normal">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. CLINICAL PROFILE & PHILOSOPHY */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs">Consultant Profile</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Extensive Experience & Surgical Innovation
            </h2>
            <div className="w-16 h-1 bg-[#1B4965] mx-auto mt-4 rounded"></div>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              Mr Shivakumar Shankar is a high-volume Consultant Orthopaedic Hip and Knee Surgeon. He provides specialist 
              assessment and treatment for patients with painful or damaged hip and knee joints, ranging from early 
              degenerative disease and sports-related problems to complex arthritis requiring joint replacement or reconstruction.
            </p>

            <p>
              His clinical practice combines extensive surgical experience with specialist fellowship training in 
              <strong> lower limb arthroplasty, computer-assisted surgery, and robotic technology</strong>. Mr Shankar is appointed 
              as an NHS Consultant Orthopaedic Surgeon at <strong>Barking, Havering and Redbridge University Hospitals NHS Trust</strong>, 
              where his NHS practice is based at Queen's Hospital in Romford and King George Hospital in Goodmayes.
            </p>

            <div className="p-6 bg-[#F8FAFC] rounded-xl border border-slate-200 my-8">
              <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                <Shield size={20} className="text-[#1B4965]" />
                First Robotic Hip Surgeon in Essex & North East London
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Renowned for his commitment to surgical accuracy, Mr Shankar was the <strong>first surgeon in the Essex and 
                North East London region to perform computer-assisted and robotic total hip replacement</strong>. He routinely 
                performs robotic-assisted and computer-navigated knee replacement surgery alongside conventional techniques, 
                enhancing implant positioning, limb alignment, and joint biomechanics.
              </p>
            </div>

            <p>
              Every patient is unique, and there is no single surgical technique that is appropriate for everyone. 
              Mr Shankar believes that successful treatment begins with a detailed assessment of the patient's symptoms, 
              medical history, physical examination findings, and specialised imaging.
            </p>

            <p>
              For patients considering joint replacement, he thoroughly discusses the available options — including 
              conventional, minimally invasive, computer-navigated, and robotic-assisted techniques where appropriate — 
              empowering patients to make informed decisions about their care.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FELLOWSHIPS & SPECIALIST TRAINING */}
      <section id="credentials" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs">UK & International Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Fellowship & Subspecialist Training
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Rigorous, world-renowned subspecialty fellowships in lower limb arthroplasty, robotic navigation, and muscle-sparing approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FELLOWSHIPS.map((f, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-xl border border-slate-200 hover:border-[#1B4965] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <span className="text-xs font-bold text-[#1B4965] bg-[#EAF1F6] border border-slate-200 px-3 py-1 rounded-full uppercase tracking-wider">
                      {f.highlight || "Fellowship"}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{f.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1B4965] transition-colors mb-1">
                    {f.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-1.5">
                    <Building size={14} className="text-slate-400" />
                    {f.institution}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {f.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <FileCheck size={14} className="text-emerald-600" /> Verified Subspecialty Training
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. NHS LEADERSHIP & MEDICAL EDUCATION */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Leadership Roles */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs">Clinical Governance</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Senior NHS Leadership Roles
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Alongside his clinical practice, Mr Shankar has held prominent senior leadership roles within Trauma and Orthopaedics.
                </p>
              </div>

              <div className="space-y-4">
                {LEADERSHIP_ROLES.map((lr, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#F8FAFC] border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Award size={16} className="text-[#1B4965] flex-shrink-0" />
                      {lr.role}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium ml-6 mt-0.5">{lr.institution}</p>
                    {lr.description && (
                      <p className="text-xs text-slate-600 ml-6 mt-1 leading-relaxed">
                        {lr.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Research & Teaching */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs">Education & Evidence</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Research & Academic Interests
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Actively committed to advancing orthopaedic practice, surgical peer review, and training the next generation of surgeons.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-slate-50 text-slate-800 border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen size={20} className="text-[#1B4965]" />
                    <h4 className="font-bold text-base text-slate-900">Journal Peer Reviewer</h4>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Appointed reviewer of original clinical and scientific research articles for the <strong>Indian Journal of Orthopaedics</strong>.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap size={20} className="text-[#1B4965]" />
                    <h4 className="font-bold text-base text-slate-900">Medical Student & Trainee Education</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Regularly instructs medical students from <strong>Queen Mary University of London (QMUL)</strong>, post-graduate orthopaedic surgical trainees, and primary care general practitioners.
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Essential Orthopaedics for Primary Care</li>
                    <li>Trauma and Essential Surgical Skills courses</li>
                    <li>Computer-navigated hip and knee arthroplasty cadaveric teaching</li>
                    <li>Manual and Navigated Total Knee Replacement practical workshops</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-[#EAF1F6] border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Microscope size={20} className="text-[#1B4965]" />
                    <h4 className="font-bold text-base text-slate-900">Academic Focus Areas</h4>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Primary & revision hip replacement • Robotic-assisted knee arthroplasty • Computer navigation kinetics • Minimally invasive tissue-sparing approaches • Meniscal and biological knee preservation.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PRACTICE BRAND & PHILOSOPHY */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 text-slate-800 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white p-4 rounded-2xl shadow-2xs border border-slate-200 flex-shrink-0">
              <img 
                src="./logo.png" 
                alt="London Essex Hip and Knee Surgeon" 
                className="h-20 sm:h-24 w-auto object-contain" 
              />
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider border border-slate-200">
                Practice Identity & Mission
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                London Essex Hip and Knee Surgeon
              </h3>
              <p className="font-script text-2xl text-[#1B4965] font-bold">
                "Restoring your active lifestyle"
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                Founded and directed by Mr Shivakumar Shankar, London Essex Hip & Knee Surgeon is dedicated to a singular objective: returning each patient to their active, pain-free daily life through technical excellence, minimally invasive tissue preservation, and patient-specific joint reconstruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5B. VERIFIED ACCREDITED PROFILES & SOCIAL CHANNELS */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-[#102A43] to-[#0A192F] text-white rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/15">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/15 text-cyan-300 px-2.5 py-1 rounded-full inline-block mb-1.5">
                  Verified Online Profiles & Insurer Credentials
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Connect & Verify Mr Shankar Across Official Platforms
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Review direct fee-assured insurance recognition, clinical operative posts, recent academic updates, and patient recovery milestones.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Bupa Profile */}
              <div className="bg-white/10 rounded-2xl p-5 border border-white/15 hover:border-[#0079C8] transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#0079C8] text-white text-[10px] font-extrabold px-2 py-0.5 rounded flex items-center gap-1 shadow-2xs">
                      <ShieldCheck size={11} /> Bupa Finder
                    </span>
                    <span className="text-[10px] font-mono text-emerald-300">Fee-Assured</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Official Bupa Specialist Profile</h4>
                  <p className="text-xs text-slate-200 leading-relaxed mb-3">
                    Recognised consultant orthopaedic surgeon with direct insurer billing for consultations and surgical procedures at Spire Hartswood and Nuffield Health Brentwood Hospitals.
                  </p>
                </div>
                <a
                  href={BUPA_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0079C8] hover:bg-[#005a96] text-white text-xs font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Verify on Bupa Finder</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* LinkedIn Recent Activity */}
              <div className="bg-white/10 rounded-2xl p-5 border border-white/15 hover:border-[#0A66C2] transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#0A66C2] text-white text-[10px] font-extrabold px-2 py-0.5 rounded flex items-center gap-1 shadow-2xs">
                      LinkedIn
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300">Clinical Network</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">LinkedIn Professional Activity</h4>
                  <p className="text-xs text-slate-200 leading-relaxed mb-3">
                    Follow discussions on Mako surgical robotics, clinical governance in elective surgery, zero-infection theatre protocols, and orthopaedic registrar training.
                  </p>
                </div>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View Recent Activity</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* X Profile */}
              <div className="bg-white/10 rounded-2xl p-5 border border-white/15 hover:border-slate-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-black text-white text-[10px] font-extrabold px-2 py-0.5 rounded flex items-center gap-1 shadow-2xs border border-slate-700">
                      X ({X_HANDLE})
                    </span>
                    <span className="text-[10px] font-mono text-amber-300">Live Updates</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Official Feed ({X_HANDLE})</h4>
                  <p className="text-xs text-slate-200 leading-relaxed mb-3">
                    Real-time clinical insights, day-1 post-operative mobilisation outcomes, surgical masterclasses, and orthopaedic recovery pearls.
                  </p>
                </div>
                <a
                  href={X_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-slate-800 text-white text-xs font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                >
                  <span>Follow {X_HANDLE} on X</span>
                  <ExternalLink size={12} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE MR SHANKAR */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs">Excellence in Care</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Why Choose Mr. Shankar?
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Combining world-class technical precision with compassionate, individualised patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_POINTS.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center font-bold mb-4">
                  <CheckCircle size={22} className="text-[#1B4965]" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. PRIVATE PRACTICE LOCATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs">Private Practice</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Consulting & Operating Hospitals
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              Mr Shankar provides private consultations and surgical care at premier private hospitals in Brentwood, Essex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {LOCATIONS.filter(l => l.type === 'Private Hospital').map((loc, idx) => (
              <div 
                key={idx} 
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 flex flex-col justify-between hover:border-[#1B4965] transition-colors"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold uppercase px-2.5 py-1 rounded bg-[#EAF1F6] text-[#1B4965]">
                      {loc.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{loc.area}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{loc.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{loc.address}, {loc.postcode}</p>

                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Hospital Facilities:</p>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {loc.facilities.map((fac, fidx) => (
                        <li key={fidx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1B4965]"></span>
                          <span>{fac}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Secretary ({SECRETARY_NAME})</span>
                    <a href={`tel:${MOBILE_PHONE.replace(/\s+/g, '')}`} className="text-sm font-bold text-slate-900 hover:text-[#1B4965]">
                      {MOBILE_PHONE}
                    </a>
                  </div>
                  <button 
                    onClick={onBook} 
                    className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors shadow-2xs"
                  >
                    Book at this Clinic
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={onNavigateHome}
              className="text-slate-700 font-bold hover:text-[#1B4965] inline-flex items-center gap-2 text-sm"
            >
              Back to Home & Treatments <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
