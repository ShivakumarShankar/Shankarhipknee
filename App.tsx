import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, ArrowRight, FileText, 
  Download, ChevronRight, Activity, Bone, Stethoscope, 
  Award, Calendar, X, CheckCircle, Sparkles, 
  Clock, Navigation, Cpu, Heart, AlertCircle, ChevronDown, Building, Star,
  Search, HelpCircle, ShieldAlert, AlertTriangle, ShieldCheck, ExternalLink,
  ArrowLeft
} from 'lucide-react';
import { 
  PRACTICE_NAME,
  SURGEON_NAME, 
  SURGEON_ROLE, 
  SURGEON_TITLE,
  QUALIFICATIONS, 
  ADDITIONAL_DIPLOMA,
  GMC_NUMBER, 
  EMAIL, 
  PHONE, 
  PHONE_ALT,
  MOBILE_PHONE,
  LANDLINE_PHONE,
  SECRETARY_NAME,
  SECRETARY_ROLE,
  SLOGAN,
  TAGLINE,
  SURGICAL_STATS,
  TREATMENTS, 
  CONDITIONS_TREATED,
  FELLOWSHIPS,
  LOCATIONS, 
  TESTIMONIALS, 
  FAQS, 
  PROTOCOLS,
  WHY_CHOOSE_POINTS,
  SOCIAL_HANDLE,
  X_HANDLE,
  SOCIAL_LINKS,
  SPIRE_HARTSWOOD_BOOKING_URL,
  NUFFIELD_BRENTWOOD_BOOKING_URL
} from './constants';
import { Treatment, Protocol } from './types';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import { SurgeonPortrait, SurgeonPortraitCard } from './components/SurgeonPortrait';
import DoctifyCarousel from './components/DoctifyCarousel';
import { CombinedReviewHub } from './components/CombinedReviewHub';
import { ReviewsPage } from './components/ReviewsPage';
import { PatientGuidesHub } from './components/PatientGuidesHub';
import { MediaGalleryHub } from './components/MediaGalleryHub';
import { SecretarialPortalModal } from './components/SecretarialPortalModal';
import { PROCEDURE_RISK_DATA } from './patientInfoData';
import { generateProcedureRiskPdf, generateProtocolPdf } from './pdfGenerator';
import { ClinicalProcedurePage } from './components/ClinicalProcedurePage';
import { CLINICAL_PROCEDURES } from './clinicalProceduresData';
import { RoboticComparisonPage } from './components/RoboticComparisonPage';
import { LocationsHub, LocationPageMode } from './components/LocationsHub';
import { PatientInfoHub, PatientInfoMode } from './components/PatientInfoHub';
import { BookConsultationPage } from './components/BookConsultationPage';
import { PrpInjectionPage } from './components/PrpInjectionPage';

export type AppPage = 
  | 'home' 
  | 'about' 
  | 'reviews' 
  | 'hip-replacement' 
  | 'robotic-hip-replacement'
  | 'computer-assisted-hip-replacement'
  | 'minimally-invasive-hip-replacement'
  | 'knee-replacement' 
  | 'robotic-knee-replacement'
  | 'computer-assisted-knee-replacement'
  | 'partial-knee-replacement'
  | 'knee-arthroscopy'
  | 'prp-injection' 
  | 'robotic-surgery' 
  | 'robotic-computer-assisted-surgery'
  | 'conventional-vs-computer-assisted-vs-robotic-surgery'
  | 'patient-guides' 
  | 'patient-information'
  | 'hip-replacement-recovery'
  | 'knee-replacement-recovery'
  | 'preparing-for-surgery'
  | 'frequently-asked-questions'
  | 'physio-protocols'
  | 'hospitals-locations'
  | 'london-hip-knee-surgeon'
  | 'essex-hip-knee-surgeon'
  | 'spire-hartswood-hospital'
  | 'nuffield-brentwood-hospital'
  | 'queens-hospital-romford'
  | 'king-george-hospital-goodmayes'
  | 'contact'
  | 'book-consultation'
  | '404';

export const getPageFromPath = (path: string): AppPage => {
  const clean = path.toLowerCase().replace(/\.html$/, '').replace(/\/$/, '') || '/';
  if (clean === '/' || clean === '' || clean === '/home' || clean === '/index') return 'home';
  if (clean === '/about' || clean === '/about-mr-shivakumar-shankar') return 'about';
  if (clean === '/reviews' || clean === '/patient-reviews-outcomes') return 'reviews';
  if (clean === '/hip-replacement') return 'hip-replacement';
  if (clean === '/robotic-hip-replacement') return 'robotic-hip-replacement';
  if (clean === '/computer-assisted-hip-replacement') return 'computer-assisted-hip-replacement';
  if (clean === '/minimally-invasive-hip-replacement') return 'minimally-invasive-hip-replacement';
  if (clean === '/knee-replacement') return 'knee-replacement';
  if (clean === '/robotic-knee-replacement') return 'robotic-knee-replacement';
  if (clean === '/computer-assisted-knee-replacement') return 'computer-assisted-knee-replacement';
  if (clean === '/partial-knee-replacement') return 'partial-knee-replacement';
  if (clean === '/knee-arthroscopy') return 'knee-arthroscopy';
  if (clean === '/prp-injection' || clean === '/prp' || clean === '/platelet-rich-plasma') return 'prp-injection';
  if (clean === '/robotic-surgery' || clean === '/robotic-computer-assisted-surgery') return 'robotic-computer-assisted-surgery';
  if (clean === '/conventional-vs-computer-assisted-vs-robotic-surgery') return 'conventional-vs-computer-assisted-vs-robotic-surgery';
  if (clean === '/patient-guides' || clean === '/patient-information') return 'patient-information';
  if (clean === '/hip-replacement-recovery') return 'hip-replacement-recovery';
  if (clean === '/knee-replacement-recovery') return 'knee-replacement-recovery';
  if (clean === '/preparing-for-surgery') return 'preparing-for-surgery';
  if (clean === '/frequently-asked-questions') return 'frequently-asked-questions';
  if (clean === '/physio-protocols') return 'physio-protocols';
  if (clean === '/hospitals-locations') return 'hospitals-locations';
  if (clean === '/london-hip-knee-surgeon') return 'london-hip-knee-surgeon';
  if (clean === '/essex-hip-knee-surgeon') return 'essex-hip-knee-surgeon';
  if (clean === '/spire-hartswood-hospital') return 'spire-hartswood-hospital';
  if (clean === '/nuffield-brentwood-hospital') return 'nuffield-brentwood-hospital';
  if (clean === '/queens-hospital-romford') return 'queens-hospital-romford';
  if (clean === '/king-george-hospital-goodmayes') return 'king-george-hospital-goodmayes';
  if (clean === '/contact' || clean === '/contact-consultation') return 'contact';
  if (clean === '/book-consultation' || clean === '/book') return 'book-consultation';
  if (clean === '/media' || clean === '/media-social' || clean === '/social' || clean === '/news') return 'home';
  return '404';
};

const PAGE_METADATA: Record<string, { title: string; desc: string; canonical: string }> = {
  'home': {
    title: 'Mr Shivakumar Shankar | London & Essex Hip and Knee Surgeon',
    desc: 'Mr Shivakumar Shankar is a Consultant Orthopaedic Surgeon specialising in hip and knee surgery, robotic joint replacement, and joint preservation in London and Essex.',
    canonical: 'https://www.shivakumarshankar.co.uk/'
  },
  'about': {
    title: 'About Mr Shivakumar Shankar | Consultant Hip & Knee Surgeon',
    desc: 'Biography, credentials, and surgical training of Mr Shivakumar Shankar, NHS Clinical Lead & Consultant Orthopaedic Surgeon at Spire and Nuffield Hospitals.',
    canonical: 'https://www.shivakumarshankar.co.uk/about-mr-shivakumar-shankar'
  },
  'hip-replacement': {
    title: 'Hip Replacement Surgery London & Essex | Mr Shivakumar Shankar',
    desc: 'Specialist primary, complex, and minimally invasive hip replacement in London & Essex. Regional pioneer in robotic and computer-assisted hip surgery.',
    canonical: 'https://www.shivakumarshankar.co.uk/hip-replacement'
  },
  'robotic-hip-replacement': {
    title: 'Robotic Hip Replacement London & Essex | Mr Shivakumar Shankar',
    desc: 'Mako robotic-assisted total hip replacement with 3D CT virtual planning and haptic precision for optimal implant alignment and stability.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-hip-replacement'
  },
  'computer-assisted-hip-replacement': {
    title: 'Computer-Assisted Hip Replacement | Mr Shivakumar Shankar',
    desc: 'Navigated hip replacement providing real-time intra-operative tracking of cup angles and limb length without pre-operative CT radiation.',
    canonical: 'https://www.shivakumarshankar.co.uk/computer-assisted-hip-replacement'
  },
  'minimally-invasive-hip-replacement': {
    title: 'Minimally Invasive Hip Surgery | Rottinger & Anterior Approaches',
    desc: 'Tissue-sparing Rottinger and muscle-preserving hip arthroplasty techniques supporting post-operative mobilisation and functional rehabilitation.',
    canonical: 'https://www.shivakumarshankar.co.uk/minimally-invasive-hip-replacement'
  },
  'knee-replacement': {
    title: 'Knee Replacement Surgery London & Essex | Mr Shivakumar Shankar',
    desc: 'Consultant-led total knee replacement, kinematic alignment, and personalised soft-tissue balancing in London, Essex, and Brentwood.',
    canonical: 'https://www.shivakumarshankar.co.uk/knee-replacement'
  },
  'robotic-knee-replacement': {
    title: 'Robotic Knee Replacement London & Essex | Mako Arthroplasty',
    desc: 'Mako robotic-assisted total and partial knee replacement with real-time dynamic ligament balancing and high-precision bony resection guidance.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-knee-replacement'
  },
  'computer-assisted-knee-replacement': {
    title: 'Computer-Assisted Knee Replacement | Mr Shivakumar Shankar',
    desc: 'Intra-operative optical navigation restoring mechanical alignment axes and dynamic joint stability during total knee arthroplasty.',
    canonical: 'https://www.shivakumarshankar.co.uk/computer-assisted-knee-replacement'
  },
  'partial-knee-replacement': {
    title: 'Partial Knee Replacement London & Essex | Unicompartmental Surgery',
    desc: 'Minimally invasive unicompartmental resurfacing preserving the healthy knee compartments, ACL, and PCL for natural joint kinematics.',
    canonical: 'https://www.shivakumarshankar.co.uk/partial-knee-replacement'
  },
  'knee-arthroscopy': {
    title: 'Knee Arthroscopy & Keyhole Surgery | Mr Shivakumar Shankar',
    desc: 'Minimally invasive keyhole knee surgery for meniscal tears, cartilage repair, and loose bodies in London and Essex. Over 1,200 procedures performed.',
    canonical: 'https://www.shivakumarshankar.co.uk/knee-arthroscopy'
  },
  'prp-injection': {
    title: 'PRP Injections | Mr Shivakumar Shankar | London & Essex',
    desc: 'Consultant-led Platelet-Rich Plasma (PRP) injections in London and Essex for selected knee and musculoskeletal conditions. Balanced clinical assessment.',
    canonical: 'https://www.shivakumarshankar.co.uk/prp-injection'
  },
  'robotic-surgery': {
    title: 'Robotic & Computer-Assisted Hip & Knee Surgery | Essex & London',
    desc: 'Pioneering robotic & computer-assisted joint replacement by Mr Shivakumar Shankar. Navigational precision and personalised soft-tissue balancing.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-computer-assisted-surgery'
  },
  'robotic-computer-assisted-surgery': {
    title: 'Robotic & Computer-Assisted Hip & Knee Surgery | Essex & London',
    desc: 'Pioneering robotic & computer-assisted joint replacement by Mr Shivakumar Shankar. Navigational precision and personalised soft-tissue balancing.',
    canonical: 'https://www.shivakumarshankar.co.uk/robotic-computer-assisted-surgery'
  },
  'conventional-vs-computer-assisted-vs-robotic-surgery': {
    title: 'Conventional vs Computer-Assisted vs Robotic Surgery | Clinical Guide',
    desc: 'Objective comparison of conventional manual, computer-navigated, and robotic-assisted joint replacement surgery with clinical evidence.',
    canonical: 'https://www.shivakumarshankar.co.uk/conventional-vs-computer-assisted-vs-robotic-surgery'
  },
  'patient-guides': {
    title: 'Patient Information & Surgical Guides | Mr Shivakumar Shankar',
    desc: 'Comprehensive patient resources, surgical preparations, informed consent, and rehabilitation pathways for hip and knee operations.',
    canonical: 'https://www.shivakumarshankar.co.uk/patient-information'
  },
  'patient-information': {
    title: 'Patient Information & Surgical Guides | Mr Shivakumar Shankar',
    desc: 'Comprehensive patient resources, surgical preparations, informed consent, and rehabilitation pathways for hip and knee operations.',
    canonical: 'https://www.shivakumarshankar.co.uk/patient-information'
  },
  'hip-replacement-recovery': {
    title: 'Hip Replacement Recovery Guide | Milestones, Walking & Driving',
    desc: 'Evidence-based recovery guide detailing post-operative milestones, exercise regimens, driving guidelines, and return to work after hip arthroplasty.',
    canonical: 'https://www.shivakumarshankar.co.uk/hip-replacement-recovery'
  },
  'knee-replacement-recovery': {
    title: 'Knee Replacement Recovery Guide | Milestones & Rehabilitation',
    desc: 'Comprehensive recovery timeline for knee replacement, managing swelling, restoring range of motion, and returning to daily activities.',
    canonical: 'https://www.shivakumarshankar.co.uk/knee-replacement-recovery'
  },
  'preparing-for-surgery': {
    title: 'Preparing for Joint Surgery | Pre-Assessment Checklist & Advice',
    desc: 'Practical guidance on preparing for hip or knee surgery, pre-assessment clinic, medication management, and home preparation.',
    canonical: 'https://www.shivakumarshankar.co.uk/preparing-for-surgery'
  },
  'frequently-asked-questions': {
    title: 'Orthopaedic FAQs | Hip & Knee Surgery Questions Answered',
    desc: 'Answers to frequent patient questions on private health insurance, consultation fees, surgical recovery, anaesthesia, and implant durability.',
    canonical: 'https://www.shivakumarshankar.co.uk/frequently-asked-questions'
  },
  'physio-protocols': {
    title: 'Physiotherapy Protocols & PDFs | Mr Shivakumar Shankar',
    desc: 'Downloadable clinical rehabilitation protocols and exercise guidelines for total hip, total knee, partial knee, and arthroscopy patients.',
    canonical: 'https://www.shivakumarshankar.co.uk/physio-protocols'
  },
  'hospitals-locations': {
    title: 'Hospitals & Practice Locations | London & Essex Hip Knee Surgeon',
    desc: 'Consulting and surgical locations across Essex and London: Spire Hartswood, Nuffield Health Brentwood, Queen\'s Hospital, and King George Hospital.',
    canonical: 'https://www.shivakumarshankar.co.uk/hospitals-locations'
  },
  'london-hip-knee-surgeon': {
    title: 'Hip & Knee Surgeon in London & North East London | Mr Shankar',
    desc: 'Consultant orthopaedic hip and knee surgery for London and North East London patients with substantive NHS and private hospital options.',
    canonical: 'https://www.shivakumarshankar.co.uk/london-hip-knee-surgeon'
  },
  'essex-hip-knee-surgeon': {
    title: 'Hip & Knee Surgeon in Essex | Mr Shivakumar Shankar',
    desc: 'Leading hip and knee arthroplasty specialist in Brentwood and Essex providing robotic-assisted surgery and joint preservation.',
    canonical: 'https://www.shivakumarshankar.co.uk/essex-hip-knee-surgeon'
  },
  'spire-hartswood-hospital': {
    title: 'Spire Hartswood Hospital Consultations | Brentwood, Essex',
    desc: 'Private hip and knee consultations and robotic surgery with Mr Shivakumar Shankar at Spire Hartswood Hospital in Brentwood, Essex.',
    canonical: 'https://www.shivakumarshankar.co.uk/spire-hartswood-hospital'
  },
  'nuffield-brentwood-hospital': {
    title: 'Nuffield Health Brentwood Hospital | Mr Shivakumar Shankar',
    desc: 'Private orthopaedic consultations and joint replacement surgery at Nuffield Health Brentwood Hospital, Essex.',
    canonical: 'https://www.shivakumarshankar.co.uk/nuffield-brentwood-hospital'
  },
  'queens-hospital-romford': {
    title: 'Queen\'s Hospital Romford (BHRUT NHS Trust) | Mr Shivakumar Shankar',
    desc: 'NHS Clinical Lead for Orthopaedics at Barking, Havering and Redbridge University Hospitals NHS Trust, operating at Queen\'s Hospital Romford.',
    canonical: 'https://www.shivakumarshankar.co.uk/queens-hospital-romford'
  },
  'king-george-hospital-goodmayes': {
    title: 'King George Hospital Goodmayes (BHRUT) | Elective Orthopaedic Centre',
    desc: 'Substantive NHS elective orthopaedic surgery and high-volume joint replacement unit at King George Hospital, Goodmayes.',
    canonical: 'https://www.shivakumarshankar.co.uk/king-george-hospital-goodmayes'
  },
  'reviews': {
    title: 'Patient Reviews & Clinical Outcomes | Mr Shivakumar Shankar',
    desc: 'Independently verified patient reviews from Doctify and iWantGreatCare for Mr Shivakumar Shankar, Consultant Hip & Knee Surgeon.',
    canonical: 'https://www.shivakumarshankar.co.uk/reviews'
  },
  'contact': {
    title: 'Contact Practice Secretary | Mr Shivakumar Shankar',
    desc: 'Contact practice secretary Remya Rexlin to book consultations at Spire Hartswood Hospital or Nuffield Health Brentwood Hospital.',
    canonical: 'https://www.shivakumarshankar.co.uk/contact'
  },
  'book-consultation': {
    title: 'Book an Orthopaedic Consultation | Mr Shivakumar Shankar',
    desc: 'Book a private hip or knee consultation online or access live hospital diary timeslots at Spire Hartswood and Nuffield Health Brentwood.',
    canonical: 'https://www.shivakumarshankar.co.uk/book-consultation'
  },
  '404': {
    title: 'Page Not Found (404) | Mr Shivakumar Shankar',
    desc: 'The requested page could not be found. Return to Mr Shivakumar Shankar\'s official orthopaedic surgery website for hip and knee care in London and Essex.',
    canonical: ''
  }
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecretarialModalOpen, setIsSecretarialModalOpen] = useState(false);
  const [modalPreferredHospital, setModalPreferredHospital] = useState('Spire Hartswood Hospital');
  const [currentPage, setCurrentPage] = useState<AppPage>(() => getPageFromPath(window.location.pathname));
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hip' | 'knee' | 'robotic' | 'preservation'>('all');
  const [selectedConditionJoint, setSelectedConditionJoint] = useState<'Hip' | 'Knee'>('Hip');
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [activeFaqQuestion, setActiveFaqQuestion] = useState<string | null>(FAQS[0]?.question || null);
  const [faqCategory, setFaqCategory] = useState<string>('all');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(null);
  
  // Booking Form State
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hospital: 'Spire Hartswood Hospital',
    treatmentArea: 'Hip',
    fundingType: 'Insured (Bupa, AXA, etc.)',
    notes: ''
  });

  // Listen to browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isModalOpen || selectedTreatment || selectedProtocol) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen, selectedTreatment, selectedProtocol]);

  // Synchronise page-specific SEO titles, meta descriptions, and canonical URLs
  useEffect(() => {
    const meta = PAGE_METADATA[currentPage] || PAGE_METADATA['home'];
    const title = meta.title;
    const desc = meta.desc;
    const canonical = meta.canonical;

    document.title = title;

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (currentPage === '404') {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, follow');
    } else {
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'index, follow');
      }
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      if (canonical) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        canonicalLink.removeAttribute('href');
      }
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', desc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && canonical) ogUrl.setAttribute('content', canonical);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', desc);
  }, [currentPage]);

  useEffect(() => {
    // Sanitize non-canonical URLs on mount (e.g. /home, /index.html, .html extensions)
    const rawPath = window.location.pathname;
    if (rawPath === '/home' || rawPath === '/home/' || rawPath === '/index.html' || rawPath === '/index') {
      window.history.replaceState({}, '', '/');
    } else if (rawPath === '/media' || rawPath === '/media-social' || rawPath === '/social' || rawPath === '/news') {
      window.history.replaceState({}, '', '/#media');
      setTimeout(() => {
        const el = document.querySelector('#media');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else if (rawPath.endsWith('.html') || (rawPath.endsWith('/') && rawPath.length > 1)) {
      const clean = rawPath.replace(/\.html$/, '').replace(/\/$/, '') || '/';
      window.history.replaceState({}, '', clean);
    }

    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, []);

  // Sync state with browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (target: string) => {
    if (target.startsWith('#')) {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        if (window.location.pathname !== '/') {
          window.history.pushState({}, '', '/');
        }
        setTimeout(() => {
          const element = document.querySelector(target);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        const element = document.querySelector(target);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (target === 'home' || target === '/home' || target === '/' || target === '') {
      setCurrentPage('home');
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const normalizedPath = target.startsWith('/') ? target : `/${target}`;
    const cleanPath = normalizedPath.replace(/\.html$/, '').replace(/\/$/, '') || '/';
    const newPage = getPageFromPath(cleanPath);

    setCurrentPage(newPage);
    if (window.location.pathname !== cleanPath) {
      window.history.pushState({}, '', cleanPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBookingModal = (hospital?: string) => {
    if (hospital) {
      setModalPreferredHospital(hospital);
      setBookingForm(prev => ({ ...prev, hospital }));
    }
    setBookingSubmitted(false);
    setIsModalOpen(true);
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = {
      ...bookingForm,
      source: 'Booking Modal'
    };

    // 1. Save to local storage
    try {
      const stored = localStorage.getItem('shankar_patient_consultations');
      const list = stored ? JSON.parse(stored) : [];
      list.unshift({
        id: `booking-${Date.now()}`,
        timestamp: new Date().toISOString(),
        ...submissionData
      });
      localStorage.setItem('shankar_patient_consultations', JSON.stringify(list));
    } catch {
      // ignore
    }

    // 2. Post to server endpoint
    try {
      await fetch('/api/submit-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });
    } catch {
      // ignore
    }

    setBookingSubmitted(true);
  };

  const filteredTreatments = selectedCategory === 'all' 
    ? TREATMENTS 
    : TREATMENTS.filter(t => t.category === selectedCategory || (selectedCategory === 'robotic' && t.isPioneering));

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800 selection:bg-[#1B4965] selection:text-white">
      <Header 
        onBook={() => openBookingModal()} 
        onNavigate={handleNavigate} 
        currentPage={currentPage}
      />

      {currentPage === 'about' ? (
        <About 
          onBook={() => openBookingModal()} 
          onNavigateHome={() => handleNavigate('home')} 
        />
      ) : currentPage === 'reviews' ? (
        <ReviewsPage 
          onBook={() => openBookingModal()} 
          onNavigateHome={() => handleNavigate('home')} 
        />
      ) : currentPage === 'contact' ? (
        <div className="pt-28 md:pt-36 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
              <button 
                onClick={() => handleNavigate('home')} 
                className="inline-flex items-center gap-1.5 font-bold text-[#1B4965] hover:text-[#13364B]"
              >
                <ArrowLeft size={15} /> Back to Home
              </button>
              <div className="text-slate-500">
                <span className="cursor-pointer hover:underline" onClick={() => handleNavigate('home')}>Home</span> / <span className="font-semibold text-slate-800">Contact Us</span>
              </div>
            </div>
          </div>
          <Contact onBook={(hospital) => openBookingModal(hospital)} />
        </div>
      ) : currentPage === 'book-consultation' ? (
        <BookConsultationPage onNavigate={handleNavigate} />
      ) : currentPage === 'prp-injection' ? (
        <PrpInjectionPage 
          onBook={() => openBookingModal()}
          onNavigate={handleNavigate}
        />
      ) : CLINICAL_PROCEDURES[currentPage] ? (
        <ClinicalProcedurePage 
          data={CLINICAL_PROCEDURES[currentPage]}
          onBook={() => openBookingModal()}
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'robotic-surgery' || currentPage === 'robotic-computer-assisted-surgery' ? (
        <RoboticComparisonPage 
          mode="overview"
          onBook={() => openBookingModal()}
          onNavigate={handleNavigate}
        />
      ) : currentPage === 'conventional-vs-computer-assisted-vs-robotic-surgery' ? (
        <RoboticComparisonPage 
          mode="comparison"
          onBook={() => openBookingModal()}
          onNavigate={handleNavigate}
        />
      ) : ['hospitals-locations', 'london-hip-knee-surgeon', 'essex-hip-knee-surgeon', 'spire-hartswood-hospital', 'nuffield-brentwood-hospital', 'queens-hospital-romford', 'king-george-hospital-goodmayes'].includes(currentPage) ? (
        <LocationsHub 
          mode={
            currentPage === 'london-hip-knee-surgeon' ? 'london' :
            currentPage === 'essex-hip-knee-surgeon' ? 'essex' :
            currentPage === 'spire-hartswood-hospital' ? 'spire' :
            currentPage === 'nuffield-brentwood-hospital' ? 'nuffield' :
            currentPage === 'queens-hospital-romford' ? 'queens' :
            currentPage === 'king-george-hospital-goodmayes' ? 'king-george' :
            'overview'
          }
          onBook={(hospital) => openBookingModal(hospital)}
          onNavigate={handleNavigate}
        />
      ) : ['patient-information', 'patient-guides', 'hip-replacement-recovery', 'knee-replacement-recovery', 'preparing-for-surgery', 'frequently-asked-questions', 'physio-protocols'].includes(currentPage) ? (
        <PatientInfoHub 
          mode={
            currentPage === 'hip-replacement-recovery' ? 'hip-recovery' :
            currentPage === 'knee-replacement-recovery' ? 'knee-recovery' :
            currentPage === 'preparing-for-surgery' ? 'preparing' :
            currentPage === 'frequently-asked-questions' ? 'faqs' :
            currentPage === 'physio-protocols' ? 'protocols' :
            'overview'
          }
          onBook={() => openBookingModal()}
          onNavigate={handleNavigate}
        />
      ) : currentPage === '404' ? (
        <div className="pt-36 pb-24 min-h-[75vh] flex flex-col items-center justify-center px-4 bg-[#F8FAFC] text-center">
          <div className="max-w-lg w-full bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider">
              Error 404
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              The page you are looking for does not exist or may have moved. You can return directly to any of Mr Shankar's official clinical sections below:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-bold text-left pt-2">
              <a 
                href="/" 
                onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} 
                className="p-2.5 rounded-lg bg-[#F8FAFC] hover:bg-[#EAF1F6] text-[#1B4965] transition-colors border border-slate-200 flex items-center justify-between"
              >
                <span>&rarr; Homepage</span>
              </a>
              <a 
                href="/about" 
                onClick={(e) => { e.preventDefault(); handleNavigate('about'); }} 
                className="p-2.5 rounded-lg bg-[#F8FAFC] hover:bg-[#EAF1F6] text-[#1B4965] transition-colors border border-slate-200 flex items-center justify-between"
              >
                <span>&rarr; About</span>
              </a>
              <a 
                href="/hip-replacement" 
                onClick={(e) => { e.preventDefault(); handleNavigate('hip-replacement'); }} 
                className="p-2.5 rounded-lg bg-[#F8FAFC] hover:bg-[#EAF1F6] text-[#1B4965] transition-colors border border-slate-200 flex items-center justify-between"
              >
                <span>&rarr; Hip Surgery</span>
              </a>
              <a 
                href="/knee-replacement" 
                onClick={(e) => { e.preventDefault(); handleNavigate('knee-replacement'); }} 
                className="p-2.5 rounded-lg bg-[#F8FAFC] hover:bg-[#EAF1F6] text-[#1B4965] transition-colors border border-slate-200 flex items-center justify-between"
              >
                <span>&rarr; Knee Surgery</span>
              </a>
              <a 
                href="/robotic-surgery" 
                onClick={(e) => { e.preventDefault(); handleNavigate('robotic-surgery'); }} 
                className="p-2.5 rounded-lg bg-[#F8FAFC] hover:bg-[#EAF1F6] text-[#1B4965] transition-colors border border-slate-200 flex items-center justify-between"
              >
                <span>&rarr; Robotic Surgery</span>
              </a>
              <a 
                href="/knee-arthroscopy" 
                onClick={(e) => { e.preventDefault(); handleNavigate('knee-arthroscopy'); }} 
                className="p-2.5 rounded-lg bg-[#F8FAFC] hover:bg-[#EAF1F6] text-[#1B4965] transition-colors border border-slate-200 flex items-center justify-between"
              >
                <span>&rarr; Arthroscopy</span>
              </a>
              <a 
                href="/patient-guides" 
                onClick={(e) => { e.preventDefault(); handleNavigate('patient-guides'); }} 
                className="p-2.5 rounded-lg bg-[#F8FAFC] hover:bg-[#EAF1F6] text-[#1B4965] transition-colors border border-slate-200 flex items-center justify-between"
              >
                <span>&rarr; Patient Guides</span>
              </a>
              <a 
                href="/contact" 
                onClick={(e) => { e.preventDefault(); handleNavigate('contact'); }} 
                className="p-2.5 rounded-lg bg-[#F8FAFC] hover:bg-[#EAF1F6] text-[#1B4965] transition-colors border border-slate-200 flex items-center justify-between"
              >
                <span>&rarr; Contact Practice</span>
              </a>
            </div>
            <button 
              onClick={() => handleNavigate('home')} 
              className="w-full mt-4 bg-[#E8A24C] hover:bg-[#D99136] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* HERO SECTION */}
          <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] overflow-hidden text-slate-800 border-b border-slate-200">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-slate-100/70 via-slate-50/40 to-transparent pointer-events-none"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1B4965]/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Column: Surgeon Headline and Highlights */}
                <div className="lg:col-span-7 space-y-5">
                  {/* Surgeon Credential Badge */}
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-xs sm:text-sm font-bold text-[#1B4965] shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#E8A24C] animate-pulse"></span>
                    <span>{SURGEON_NAME} &bull; {SURGEON_ROLE}</span>
                  </div>

                  {/* Slogan with Logo Icon & Entity Heading */}
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <img 
                      src="/logo_icon.png" 
                      alt="Mr Shivakumar Shankar - London and Essex Hip and Knee Surgeon" 
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain bg-white p-1 rounded-xl shadow-md flex-shrink-0 border border-slate-200"
                    />
                    <div>
                      <h1 className="font-serif text-[30px] sm:text-[36px] lg:text-[40px] text-[#1B4965] font-semibold tracking-tight leading-tight">
                        {SLOGAN}
                      </h1>
                      <span className="sr-only">
                        Mr Shivakumar Shankar &bull; London and Essex Hip and Knee Surgeon &bull; Consultant Orthopaedic Surgeon specialising in hip and knee surgery, robotic joint replacement, and arthroscopy
                      </span>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl border-l-4 border-[#1B4965] pl-4">
                    High-volume Consultant Orthopaedic Surgeon specialising in <strong>hip and knee replacement surgery, minimally invasive hip replacement, robotic-assisted arthroplasty</strong>, and <strong>computer-navigated joint replacement</strong> in Essex and London.
                    <span className="block mt-3 text-slate-900 font-semibold">
                      First Surgeon in Essex &amp; North East London to perform computer-assisted and robotic total hip replacement.
                    </span>
                  </p>

                  {/* Hospital Availability Callout */}
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-700 py-1">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <MapPin size={15} className="text-[#1B4965]" /> Private Consultations:
                    </span>
                    <span className="bg-white border border-slate-200 px-2.5 py-1 rounded text-slate-800 font-medium shadow-2xs">
                      Spire Hartswood Hospital
                    </span>
                    <span className="bg-white border border-slate-200 px-2.5 py-1 rounded text-slate-800 font-medium shadow-2xs">
                      Nuffield Brentwood Hospital
                    </span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button 
                      onClick={() => openBookingModal()} 
                      className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-md hover:shadow-[#E8A24C]/30 text-sm tracking-wide transform hover:-translate-y-0.5 flex items-center gap-2"
                    >
                      <Calendar size={16} />
                      Book Consultation
                    </button>
                    <button 
                      onClick={() => handleNavigate('#treatments')}
                      className="px-6 py-3.5 rounded-lg font-bold text-[#1B4965] bg-white border border-slate-300 hover:bg-[#1B4965] hover:text-white transition-all text-sm flex items-center gap-2 shadow-2xs"
                    >
                      Explore Treatments <ArrowRight size={16} />
                    </button>
                    <button 
                      onClick={() => handleNavigate('about')}
                      className="px-5 py-3.5 rounded-lg font-medium text-slate-600 hover:text-[#1B4965] hover:underline transition-all text-sm"
                    >
                      Full Biography & Credentials
                    </button>
                  </div>
                </div>
                
                {/* Right Column: Hero Graphic / Surgeon Card */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                  <div className="relative z-10 w-full max-w-md">
                    <SurgeonPortraitCard 
                      className="w-full max-w-md shadow-xl"
                      imageMaxHeight="max-h-[520px]"
                      alt={`${SURGEON_NAME} - Consultant Orthopaedic Surgeon`}
                    />
                  </div>
                </div>

              </div>

              {/* High-Impact Surgical Experience Stats Bar */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-12 border-t border-slate-200">
                {SURGICAL_STATS.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#1B4965] hover:shadow-sm transition-all"
                  >
                    <p className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1B4965] mt-1 mb-1">
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

          {/* QUICK CREDENTIALS & AUTHORITY BANNER */}
          <section className="bg-white py-6 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-slate-700">
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 shadow-sm">
                  <div className="bg-white p-1 rounded-lg border border-slate-200 flex-shrink-0 shadow-sm">
                    <img src="./logo_icon.png" alt="London Essex Hip & Knee" className="w-9 h-9 object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wide">London Essex Practice</h4>
                    <p className="font-script text-[#1B4965] text-sm font-bold leading-tight">Restoring your active lifestyle</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#F8FAFC] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center flex-shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Prestige UK Fellowships</h4>
                    <p className="text-xs text-slate-500">RNOH Stanmore & Golden Jubilee Glasgow</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#F8FAFC] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center flex-shrink-0">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Robotic & Navigation Pioneer</h4>
                    <p className="text-xs text-slate-500">Precision planning & execution</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#F8FAFC] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center flex-shrink-0">
                    <Building size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Private Clinics</h4>
                    <p className="text-xs text-slate-500">Spire Hartswood • Nuffield Brentwood</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TREATMENTS OFFERED SECTION */}
          <section id="treatments" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Section Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div>
                  <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                    <Stethoscope size={14} /> Comprehensive Clinical Services
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
                    Treatments Offered
                  </h2>
                  <p className="text-slate-600 text-sm mt-2 max-w-2xl">
                    From muscle-sparing minimally invasive joint replacements to robotic-assisted arthroplasty and biological knee preservation.
                  </p>
                </div>
                
                <a 
                  href="#protocols" 
                  onClick={(e) => { e.preventDefault(); handleNavigate('#protocols'); }} 
                  className="text-xs font-bold text-[#1B4965] hover:text-white bg-white hover:bg-[#1B4965] border border-slate-300 px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <FileText size={14} /> View Recovery Protocols
                </a>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {[
                  { id: 'all', label: 'All Treatments' },
                  { id: 'hip', label: 'Hip Replacement & Surgery' },
                  { id: 'knee', label: 'Knee Arthroplasty' },
                  { id: 'robotic', label: 'Robotic & Computer-Assisted' },
                  { id: 'preservation', label: 'Joint Preservation & Arthroscopy' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id as any)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      selectedCategory === tab.id
                        ? 'bg-[#1B4965] text-white shadow-md'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-[#1B4965] hover:text-[#1B4965]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Treatment Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTreatments.map((treatment) => (
                  <div 
                    key={treatment.id} 
                    className="bg-white rounded-xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1B4965] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Header & Badges */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2.5 rounded-lg bg-[#EAF1F6] text-[#1B4965] group-hover:bg-[#1B4965] group-hover:text-white transition-colors">
                          {treatment.category === 'hip' ? (
                            <Bone size={22} />
                          ) : treatment.category === 'robotic' ? (
                            <Cpu size={22} />
                          ) : (
                            <Activity size={22} />
                          )}
                        </div>

                        <div className="flex flex-col items-end gap-1">
                          {treatment.isPioneering && (
                            <span className="text-[10px] uppercase font-bold bg-[#FFF7ED] text-[#C26B08] px-2 py-0.5 rounded border border-[#FDBA74]">
                              Regional 1st
                            </span>
                          )}
                          <span className="text-[10px] uppercase font-bold text-slate-500 bg-[#F8FAFC] px-2 py-0.5 rounded border border-slate-200">
                            {treatment.category}
                          </span>
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#1B4965] transition-colors">
                        {treatment.title}
                      </h3>
                      {treatment.subtitle && (
                        <p className="text-xs font-semibold text-slate-500 mb-3">
                          {treatment.subtitle}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {treatment.description}
                      </p>

                      {/* Key Clinical Benefits */}
                      {treatment.keyBenefits && (
                        <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                          {treatment.keyBenefits.slice(0, 3).map((benefit, bidx) => (
                            <div key={bidx} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle size={14} className="text-[#1B4965] flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button 
                        onClick={() => setSelectedTreatment(treatment)}
                        className="text-xs font-bold text-slate-700 hover:text-[#1B4965] flex items-center gap-1 transition-colors"
                      >
                        Details & Risks <ChevronRight size={14} />
                      </button>

                      <div className="flex items-center gap-1.5">
                        {(() => {
                          const activeRiskInfo = treatment.procedureRiskId
                            ? PROCEDURE_RISK_DATA.find(p => p.id === treatment.procedureRiskId)
                            : PROCEDURE_RISK_DATA.find(p => p.id === treatment.id);
                          return activeRiskInfo ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                generateProcedureRiskPdf(activeRiskInfo);
                              }}
                              title="Download Official Patient Information Guide & Risks (PDF)"
                              className="text-xs font-bold text-[#1B4965] hover:bg-[#EAF1F6] px-2.5 py-1.5 rounded transition-colors flex items-center gap-1 border border-slate-200"
                            >
                              <Download size={12} /> PDF
                            </button>
                          ) : null;
                        })()}
                        <button 
                          onClick={() => openBookingModal()}
                          className="text-xs font-bold text-white bg-[#E8A24C] hover:bg-[#D99136] px-3 py-1.5 rounded transition-colors shadow-xs"
                        >
                          Book
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ROBOTIC & COMPUTER-ASSISTED SURGERY SPOTLIGHT */}
          <section id="robotic" className="py-20 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] text-slate-800 relative overflow-hidden border-y border-slate-200">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B4965]/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider border border-slate-300">
                    <Cpu size={14} className="text-[#1B4965]" /> Technology-Assisted Precision
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                    Robotic & Computer-Navigated Arthroplasty
                  </h2>

                  <p className="text-lg text-slate-700 leading-relaxed">
                    Mr Shankar was the <strong>first surgeon in the Essex and North East London region to perform computer-assisted and robotic total hip replacement</strong>. 
                    He completed subspecialist fellowship training at the world-renowned <strong>Golden Jubilee National Hospital in Glasgow</strong>, earning a <strong>Diploma in Robotic and Computer -Assisted orthopaedic surgery</strong>.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-1.5">
                        <Navigation size={16} className="text-[#1B4965]" /> Hip Component Alignment Precision
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Precision assessment of component positioning, acetabular inclination, anteversion, femoral offset, leg length restoration, and centre of rotation.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-1.5">
                        <Activity size={16} className="text-[#1B4965]" /> Knee Soft-Tissue Balancing
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Dynamic live feedback through full flexion and extension arcs, optimising ligament tension and restoring the patient's individual mechanical axis.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-700 leading-relaxed">
                    <strong className="text-[#1B4965] font-bold block mb-1">Clinical Philosophy:</strong>
                    "The use of robotic and computer-assisted technology is considered on an individual basis and forms part of the overall surgical strategy rather than replacing surgical judgement, clinical examination, and experience."
                  </div>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <button 
                      onClick={() => openBookingModal()} 
                      className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-7 py-3 rounded-lg font-bold text-sm transition-all shadow-md"
                    >
                      Enquire About Robotic Surgery
                    </button>
                    <button 
                      onClick={() => handleNavigate('about')} 
                      className="px-6 py-3 rounded-lg font-bold text-[#1B4965] bg-white border border-slate-300 hover:bg-[#1B4965] hover:text-white transition-all text-sm shadow-2xs"
                    >
                      Read Fellowship Credentials
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                    <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
                      Key Surgical Capabilities
                    </h3>

                    {[
                      { title: "Detailed 3D Pre-Operative Planning", desc: "Patient-specific virtual blueprint calibrated to precise anatomical landmarks." },
                      { title: "Dynamic Intra-Operative Feedback", desc: "Live kinematic assessment of stability and implant orientation during the procedure." },
                      { title: "Bone & Soft-Tissue Preservation", desc: "Restricted cutting boundaries protecting adjacent ligaments and healthy bone stock." },
                      { title: "High Reproducibility & Alignment", desc: "Ensures planned surgical parameters are executed with exacting fidelity." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#EAF1F6] text-[#1B4965] border border-slate-200 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{item.title}</p>
                          <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CONDITIONS TREATED DIRECTORY */}
          <section id="conditions" className="py-20 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs">Diagnostic Assessment</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  Conditions Treated
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Specialist evaluation and individualised management plans for hip and knee pathology.
                </p>
                
                {/* Joint Selector */}
                <div className="inline-flex p-1 bg-[#F8FAFC] rounded-lg mt-6 border border-slate-200">
                  <button
                    onClick={() => setSelectedConditionJoint('Hip')}
                    className={`px-8 py-2.5 rounded-md font-bold text-sm transition-all ${
                      selectedConditionJoint === 'Hip'
                        ? 'bg-[#1B4965] text-white shadow-sm'
                        : 'text-slate-600 hover:text-[#1B4965]'
                    }`}
                  >
                    Hip Conditions
                  </button>
                  <button
                    onClick={() => setSelectedConditionJoint('Knee')}
                    className={`px-8 py-2.5 rounded-md font-bold text-sm transition-all ${
                      selectedConditionJoint === 'Knee'
                        ? 'bg-[#1B4965] text-white shadow-sm'
                        : 'text-slate-600 hover:text-[#1B4965]'
                    }`}
                  >
                    Knee Conditions
                  </button>
                </div>
              </div>

              {/* Conditions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CONDITIONS_TREATED.find(c => c.joint === selectedConditionJoint)?.items.map((cond, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-[#1B4965] hover:bg-white hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#1B4965]"></div>
                      <h3 className="font-bold text-lg text-slate-900">
                        {cond.name}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {cond.description}
                    </p>

                    <div className="pt-3 border-t border-slate-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Recommended Treatment Pathways:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cond.commonTreatments.map((t, tidx) => (
                          <span 
                            key={tidx}
                            className="text-[11px] font-medium bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* SURGICAL RISKS & PATIENT INFORMATION GUIDES HUB */}
          <PatientGuidesHub onOpenBooking={() => openBookingModal()} />

          {/* PHYSIO PROTOCOLS & RECOVERY */}
          <section id="protocols" className="py-20 bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] text-slate-800 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs">Rehabilitation & Outcomes</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  Physio Protocols & Recovery
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Adherence to structured post-operative physiotherapy protocols is vital for achieving rapid mobility and optimal surgical results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PROTOCOLS.map((proto, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between hover:border-[#1B4965] hover:shadow-md transition-all group"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <FileText className="text-[#1B4965] group-hover:text-[#13364B] transition-colors" size={32} />
                        <span className="text-[10px] uppercase font-bold text-[#1B4965] bg-[#EAF1F6] px-2 py-1 rounded border border-slate-200">
                          {proto.joint} Care
                        </span>
                      </div>

                      <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-[#1B4965] transition-colors">
                        {proto.title}
                      </h3>
                      
                      <div className="text-xs font-semibold text-[#C26B08] bg-[#FFF7ED] border border-[#FDBA74] px-2 py-0.5 rounded inline-flex items-center gap-1 mb-3">
                        <Clock size={12} /> {proto.timeline}
                      </div>

                      <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                        {proto.description}
                      </p>

                      <div className="space-y-1 mb-5">
                        {proto.keyMilestones.slice(0, 2).map((ms, midx) => (
                          <div key={midx} className="text-[11px] text-slate-700 flex items-start gap-1.5">
                            <span className="text-[#1B4965] font-bold">•</span>
                            <span>{ms}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button 
                        onClick={() => setSelectedProtocol(proto)}
                        className="text-xs font-bold text-slate-700 hover:text-[#1B4965] flex items-center gap-1 transition-colors"
                      >
                        View Protocol <ChevronRight size={14} />
                      </button>
                      <button 
                        onClick={() => generateProtocolPdf(proto)}
                        className="text-xs font-bold text-[#1B4965] hover:text-[#13364B] flex items-center gap-1 transition-colors"
                      >
                        <Download size={14} /> PDF Guide
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 text-center max-w-2xl mx-auto text-xs text-slate-600 shadow-2xs">
                Post-operative milestones may vary based on individual healing rates. Always consult Mr Shankar and your designated physiotherapist.
              </div>

            </div>
          </section>

          {/* PATIENT TESTIMONIALS */}
          <section id="testimonials" className="py-20 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs">Patient Feedback</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  Patient Feedback & Reviews
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Read independently published patient feedback and reviews about Mr Shankar's care, including experiences of hip and knee surgery and recovery.
                </p>
              </div>

              {/* Combined Review Hub (Doctify & iWantGreatCare) */}
              <div className="mb-14">
                <CombinedReviewHub onNavigateToReviewsPage={() => handleNavigate('reviews')} />
              </div>

              {/* Featured Patient Story Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.slice(0, 3).map((t, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#F8FAFC] p-8 rounded-xl border border-slate-200 relative flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(t.rating || 5)].map((_, i) => (
                            <Star key={i} size={13} className="fill-[#E8A24C] text-[#E8A24C]" />
                          ))}
                        </div>
                        {t.source === 'Doctify' ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1B4965] border border-blue-200">
                            Doctify Verified
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                            iWantGreatCare Verified
                          </span>
                        )}
                      </div>

                      <div className="text-4xl text-[#1B4965]/20 font-serif leading-none mb-2">“</div>
                      <p className="text-slate-700 text-sm italic leading-relaxed mb-6">
                        {t.text}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm text-slate-900">{t.author}</p>
                        <p className="text-xs font-semibold text-[#1B4965]">{t.procedure}</p>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {t.hospital}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* View Full Reviews Hub Button */}
              <div className="mt-10 text-center">
                <button
                  onClick={() => handleNavigate('reviews')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1B4965] hover:bg-[#13364B] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs group"
                >
                  <span>Explore Combined Review Page & Filter Feedback</span>
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          </section>

          {/* OFFICIAL MEDIA & SOCIAL MEDIA HUB */}
          <MediaGalleryHub onOpenBooking={() => openBookingModal()} />

          {/* PRIVATE HOSPITALS & CLINIC LOCATIONS */}
          <section id="locations" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs">Where to Find Us</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  Consulting Hospitals in Essex & London
                </h2>
                <p className="text-slate-600 text-sm mt-2">
                  Private consultations and surgery provided at premier independent hospitals in Brentwood, Essex.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {LOCATIONS.filter(l => l.type === 'Private Hospital').map((loc, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1B4965] transition-all flex flex-col justify-between group"
                  >
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold uppercase px-2.5 py-1 rounded bg-[#EAF1F6] text-[#1B4965] border border-slate-200">
                          {loc.type}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{loc.area}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{loc.name}</h3>
                      <p className="text-sm text-slate-600 mb-4 flex items-center gap-1.5">
                        <MapPin size={15} className="text-[#1B4965] flex-shrink-0" />
                        {loc.address}, {loc.postcode}
                      </p>

                      <div className="space-y-2 mb-6 text-xs text-slate-600">
                        <p className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">Specialist Facilities:</p>
                        <ul className="space-y-1.5">
                          {loc.facilities.map((f, fidx) => (
                            <li key={fidx} className="flex items-start gap-2">
                              <CheckCircle size={14} className="text-[#1B4965] flex-shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 bg-[#F8FAFC] rounded-lg text-xs text-slate-600 border border-slate-200">
                        <strong className="text-slate-800">Transport & Access:</strong> {loc.transport}
                      </div>
                    </div>

                    <div className="p-6 bg-[#F8FAFC] border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div>
                        <span className="text-[11px] text-slate-500 uppercase block font-semibold">Telephone Enquiries</span>
                        <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="font-bold text-slate-900 text-sm hover:text-[#1B4965]">
                          {loc.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap justify-end">
                        {loc.bookingUrl ? (
                          <>
                            <a 
                              href={loc.bookingUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full sm:w-auto bg-[#1B4965] hover:bg-[#13364B] text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                            >
                              <Calendar size={13} />
                              <span>Book Online at {loc.name.includes('Nuffield') ? 'Nuffield Health' : 'Spire'} (Live Slots)</span>
                              <ExternalLink size={12} />
                            </a>
                            <button 
                              onClick={() => openBookingModal(loc.name)}
                              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-3.5 py-2.5 rounded-lg text-xs font-bold transition-colors shadow-2xs"
                            >
                              Request via Secretary
                            </button>
                          </>
                        ) : (
                          <button 
                            onClick={() => openBookingModal(loc.name)}
                            className="w-full sm:w-auto bg-[#E8A24C] hover:bg-[#D99136] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors shadow-md"
                          >
                            Book at {loc.name.split(' ')[0]}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* NHS Trust Box */}
              <div className="mt-8 bg-white text-slate-700 rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h4 className="text-slate-900 font-bold text-base flex items-center gap-2">
                    <Building size={18} className="text-[#1B4965]" />
                    NHS Consultant Practice: Barking, Havering and Redbridge University Hospitals NHS Trust
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Based at Queen's Hospital (Romford) and King George Hospital (Goodmayes). Former Clinical Director for Trauma and Orthopaedics.
                  </p>
                </div>
                <button 
                  onClick={() => handleNavigate('about')} 
                  className="text-xs font-bold text-white bg-[#1B4965] hover:bg-[#13364B] px-4 py-2 rounded-lg transition-colors flex-shrink-0"
                >
                  View NHS Credentials
                </button>
              </div>

            </div>
          </section>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <section id="faq" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center mb-10">
                <span className="text-[#1B4965] font-bold uppercase tracking-wider text-xs">Patient Information &amp; Advice</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-600 text-sm mt-2 max-w-2xl mx-auto">
                  Comprehensive guidance on private consultations, health insurance and self-funding packages, surgical planning, hospital stay essentials, and recovery under Mr Shankar's care.
                </p>
              </div>

              {/* Search & Category Filter Controls */}
              <div className="mb-8 space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Search size={16} />
                  </div>
                  <input
                    type="text"
                    value={faqSearchQuery}
                    onChange={(e) => setFaqSearchQuery(e.target.value)}
                    placeholder="Search questions (e.g., insurance, recovery, scars, driving, smoking, first visit)..."
                    className="w-full pl-10 pr-10 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B4965]/20 focus:border-[#1B4965] transition-all shadow-2xs"
                  />
                  {faqSearchQuery && (
                    <button
                      onClick={() => setFaqSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-slate-600"
                    >
                      <X size={15} />
                    </button>
                  )}
                </div>

                {/* Category Filter Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs font-semibold">
                  {[
                    { id: 'all', label: 'All Questions', count: FAQS.length },
                    { id: 'Appointments', label: 'Appointments & First Visit', count: FAQS.filter(f => f.category === 'Appointments').length },
                    { id: 'Insurance', label: 'Fees & Insurance', count: FAQS.filter(f => f.category === 'Insurance').length },
                    { id: 'Surgery', label: 'Surgery & Hospital Stay', count: FAQS.filter(f => f.category === 'Surgery').length },
                    { id: 'Recovery', label: 'Recovery & Aftercare', count: FAQS.filter(f => f.category === 'Recovery').length },
                    { id: 'Joints', label: 'Hip, Knee & Robotics', count: FAQS.filter(f => ['Robotics', 'Hip', 'Knee'].includes(f.category)).length }
                  ].map((cat) => {
                    const isSelected = faqCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setFaqCategory(cat.id);
                        }}
                        className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#1B4965] text-white shadow-2xs font-bold'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FAQ Accordion List */}
              <div className="space-y-3.5">
                {FAQS
                  .filter((faq) => {
                    // Category filter
                    if (faqCategory !== 'all') {
                      if (faqCategory === 'Joints') {
                        if (!['Robotics', 'Hip', 'Knee'].includes(faq.category)) return false;
                      } else if (faq.category !== faqCategory) {
                        return false;
                      }
                    }
                    // Search filter
                    if (faqSearchQuery.trim()) {
                      const q = faqSearchQuery.toLowerCase();
                      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
                    }
                    return true;
                  })
                  .map((faq, idx) => {
                    const isOpen = activeFaqQuestion === faq.question;
                    
                    // Category badge helper
                    const getCategoryBadge = (cat: string) => {
                      switch (cat) {
                        case 'Appointments':
                          return { text: 'Appointments', bg: 'bg-blue-50 text-[#1B4965] border-blue-200' };
                        case 'Insurance':
                          return { text: 'Fees & Insurance', bg: 'bg-emerald-50 text-emerald-800 border-emerald-200' };
                        case 'Surgery':
                          return { text: 'Surgery & Hospital', bg: 'bg-amber-50 text-amber-800 border-amber-200' };
                        case 'Recovery':
                          return { text: 'Recovery & Aftercare', bg: 'bg-purple-50 text-purple-800 border-purple-200' };
                        case 'Robotics':
                          return { text: 'Robotic Surgery', bg: 'bg-indigo-50 text-indigo-800 border-indigo-200' };
                        case 'Hip':
                          return { text: 'Hip Care', bg: 'bg-slate-100 text-slate-700 border-slate-200' };
                        case 'Knee':
                          return { text: 'Knee Care', bg: 'bg-slate-100 text-slate-700 border-slate-200' };
                        default:
                          return { text: 'Information', bg: 'bg-slate-100 text-slate-700 border-slate-200' };
                      }
                    };

                    const badge = getCategoryBadge(faq.category);

                    return (
                      <div 
                        key={idx} 
                        className={`border rounded-xl overflow-hidden transition-all bg-white ${
                          isOpen ? 'border-[#1B4965] shadow-xs ring-1 ring-[#1B4965]/10' : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <button
                          onClick={() => setActiveFaqQuestion(isOpen ? null : faq.question)}
                          className={`w-full text-left p-4 sm:p-5 flex justify-between items-start gap-4 transition-colors ${
                            isOpen ? 'bg-[#F8FAFC]' : 'bg-white hover:bg-slate-50/80'
                          }`}
                        >
                          <div className="space-y-1.5 flex-1 pr-2">
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${badge.bg}`}>
                                {badge.text}
                              </span>
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                              {faq.question}
                            </h3>
                          </div>
                          
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 ${
                            isOpen ? 'bg-[#1B4965] text-white' : 'bg-slate-100 text-slate-500'
                          }`}>
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                            />
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="p-5 sm:p-6 bg-white text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}

                {/* Empty State */}
                {FAQS.filter((faq) => {
                  if (faqCategory !== 'all') {
                    if (faqCategory === 'Joints') {
                      if (!['Robotics', 'Hip', 'Knee'].includes(faq.category)) return false;
                    } else if (faq.category !== faqCategory) {
                      return false;
                    }
                  }
                  if (faqSearchQuery.trim()) {
                    const q = faqSearchQuery.toLowerCase();
                    return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
                  }
                  return true;
                }).length === 0 && (
                  <div className="text-center py-12 bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6">
                    <HelpCircle size={32} className="mx-auto text-slate-400 mb-2" />
                    <p className="font-bold text-slate-800 text-sm">No matching questions found</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                      We couldn't find any questions matching "{faqSearchQuery}". Try adjusting your keywords or browse all categories.
                    </p>
                    <button
                      onClick={() => { setFaqSearchQuery(''); setFaqCategory('all'); }}
                      className="mt-3 text-xs font-bold text-[#1B4965] hover:underline"
                    >
                      Clear search &amp; view all
                    </button>
                  </div>
                )}
              </div>

              {/* Still have questions */}
              <div className="mt-12 text-center p-8 bg-[#F8FAFC] rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 text-lg mb-2">Have a question not listed here?</h3>
                <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto">
                  Our medical secretary, <strong>{SECRETARY_NAME}</strong>, is available to assist with appointments, insurance pre-authorisations, hospital admission details, and clinical queries.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href={`tel:${MOBILE_PHONE.replace(/\s+/g, '')}`} 
                    className="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <Phone size={14} /> Call Secretary ({MOBILE_PHONE})
                  </a>
                  <a 
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavigate('#contact'); }}
                    className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-5 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors shadow-md"
                  >
                    <Mail size={14} /> Contact Secretary
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* CONTACT US SECTION */}
          <Contact onBook={(hospital) => openBookingModal(hospital)} />
        </>
      )}

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-slate-100 via-[#F8FAFC] to-white text-slate-700 py-16 text-sm border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            {/* Official Practice Logo & Surgeon Portrait */}
            <div className="flex items-center gap-3">
              <div className="bg-white p-2.5 rounded-2xl inline-block shadow-sm border border-slate-200">
                <img 
                  src="./logo.png" 
                  alt="Mr Shivakumar Shankar - London and Essex Hip and Knee Surgeon" 
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div className="relative w-14 h-18 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white flex-shrink-0">
                <SurgeonPortrait 
                  alt={SURGEON_NAME} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div>
              <h4 className="text-slate-900 font-extrabold text-lg tracking-tight leading-snug">{SURGEON_NAME}</h4>
              <p className="text-xs text-[#1B4965] font-bold">{SURGEON_ROLE}</p>
              <p className="font-script text-[#1B4965] text-xl font-bold mt-1.5 leading-none">
                "Restoring your active lifestyle"
              </p>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Specialist practice providing advanced robotic, computer-navigated, and minimally invasive hip and knee surgery in Essex and London.
            </p>
            <div className="text-xs text-slate-600 pt-2 border-t border-slate-200">
              <p>{QUALIFICATIONS}</p>
              <p className="mt-1">{GMC_NUMBER}</p>
            </div>

            {/* Social Media Follow Links */}
            <div className="pt-3 border-t border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Connect &amp; Follow ({X_HANDLE})
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white hover:bg-[#004182] flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="LinkedIn"
                  title="LinkedIn - Mr Shivakumar Shankar"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-black text-white hover:bg-slate-800 flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="X (Twitter)"
                  title={`X ${X_HANDLE}`}
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.bupa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#0079C8] text-white hover:bg-[#005a96] flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="Bupa Finder Profile"
                  title="Bupa Finder Profile - Fee-Assured Consultant"
                >
                  <ShieldCheck size={16} />
                </a>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center transition-colors border border-red-200"
                  aria-label="YouTube"
                  title="YouTube @ShankarHipKnee"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-pink-50 text-pink-700 hover:bg-pink-100 flex items-center justify-center transition-colors border border-pink-200"
                  aria-label="Instagram"
                  title="Instagram @ShankarHipKnee"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 text-white hover:bg-black flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="TikTok"
                  title="TikTok @ShankarHipKnee"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h5 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Home</a></li>
              <li><a href="/about" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">About Mr Shankar</a></li>
              <li><a href="/hip-replacement" onClick={(e) => { e.preventDefault(); handleNavigate('hip-replacement'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Hip Replacement Surgery</a></li>
              <li><a href="/knee-replacement" onClick={(e) => { e.preventDefault(); handleNavigate('knee-replacement'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Knee Replacement &amp; Arthroplasty</a></li>
              <li><a href="/robotic-surgery" onClick={(e) => { e.preventDefault(); handleNavigate('robotic-surgery'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Robotic &amp; Computer-Assisted</a></li>
              <li><a href="/knee-arthroscopy" onClick={(e) => { e.preventDefault(); handleNavigate('knee-arthroscopy'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Knee Arthroscopy &amp; Keyhole</a></li>
              <li><a href="/patient-guides" onClick={(e) => { e.preventDefault(); handleNavigate('patient-guides'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Patient Guides &amp; Risks</a></li>
              <li><a href="/reviews" onClick={(e) => { e.preventDefault(); handleNavigate('reviews'); }} className="text-[#1B4965] font-bold hover:underline transition-colors block">Patient Reviews (Doctify &amp; IWGC)</a></li>
              <li><a href="/contact" onClick={(e) => { e.preventDefault(); handleNavigate('contact'); }} className="text-[#1B4965] font-bold hover:text-[#13364B] transition-colors block">Contact Practice Secretary</a></li>
              <li><a href="#media" onClick={(e) => { e.preventDefault(); handleNavigate('#media'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Media &amp; Social</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); handleNavigate('#faq'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Patient FAQs</a></li>
            </ul>
          </div>

          {/* Key Treatments */}
          <div>
            <h5 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Specialist Procedures</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="/hip-replacement" onClick={(e) => { e.preventDefault(); handleNavigate('hip-replacement'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Total Hip Replacement</a></li>
              <li><a href="/robotic-surgery" onClick={(e) => { e.preventDefault(); handleNavigate('robotic-surgery'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Robotic Hip &amp; Knee Surgery</a></li>
              <li><a href="/hip-replacement" onClick={(e) => { e.preventDefault(); handleNavigate('hip-replacement'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Minimally Invasive Hip (Anterior/Rottinger)</a></li>
              <li><a href="/partial-knee-replacement" onClick={(e) => { e.preventDefault(); handleNavigate('partial-knee-replacement'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Partial (Unicompartmental) Knee</a></li>
              <li><a href="/knee-arthroscopy" onClick={(e) => { e.preventDefault(); handleNavigate('knee-arthroscopy'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Knee Arthroscopy &amp; Meniscal Repair</a></li>
              <li><a href="/prp-injection" onClick={(e) => { e.preventDefault(); handleNavigate('prp-injection'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Platelet-Rich Plasma (PRP) Injections</a></li>
              <li><a href="/hip-replacement" onClick={(e) => { e.preventDefault(); handleNavigate('hip-replacement'); }} className="text-slate-600 hover:text-[#1B4965] transition-colors block">Complex Revision Arthroplasty</a></li>
            </ul>
          </div>

          {/* Secretary & Private Hospitals Contact */}
          <div>
            <h5 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Secretary & Appointments</h5>
            <ul className="space-y-2.5 text-xs">
              <li className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                <span className="text-[10px] uppercase font-bold text-[#1B4965] block">Medical Secretary</span>
                <strong className="text-slate-900 text-sm block">{SECRETARY_NAME}</strong>
                <span className="text-[11px] text-slate-500">{SECRETARY_ROLE}</span>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Phone size={13} className="text-[#1B4965] flex-shrink-0" />
                <span className="text-slate-500">Mobile:</span>
                <a href={`tel:${MOBILE_PHONE.replace(/\s+/g, '')}`} className="hover:text-[#1B4965] text-slate-900 font-bold">{MOBILE_PHONE}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-[#1B4965] flex-shrink-0" />
                <span className="text-slate-500">Landline:</span>
                <a href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`} className="hover:text-[#1B4965] text-slate-800">{LANDLINE_PHONE}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-[#1B4965] flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-[#1B4965] text-slate-800 break-all">{EMAIL}</a>
              </li>
              <li className="pt-2 border-t border-slate-200 text-[11px] text-slate-600">
                <strong>Clinics:</strong> Spire Hartswood, Nuffield Brentwood
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
          <p>&copy; {new Date().getFullYear()} {SURGEON_NAME}. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <span>Consultant Orthopaedic Hip & Knee Surgeon • Private & NHS Practice • GMC: 6038414</span>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => setIsSecretarialModalOpen(true)}
              className="font-bold text-[#1B4965] hover:underline flex items-center gap-1 bg-[#EAF1F6] px-2.5 py-1 rounded"
              title="Open practice enquiries and consultation requests log"
            >
              Secretary Enquiries Portal
            </button>
          </div>
        </div>
      </footer>

      {/* SECRETARIAL ENQUIRIES MODAL */}
      <SecretarialPortalModal 
        isOpen={isSecretarialModalOpen} 
        onClose={() => setIsSecretarialModalOpen(false)} 
      />

      {/* BOOKING CONSULTATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in border border-slate-100">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {bookingSubmitted ? (
              <div className="py-6 text-center space-y-4">
                <img 
                  src="./logo.png" 
                  alt="Mr Shivakumar Shankar - London and Essex Hip and Knee Surgeon" 
                  className="h-14 mx-auto object-contain mb-1" 
                />
                <p className="font-script text-[#1B4965] text-lg font-bold">Restoring your active lifestyle</p>
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Appointment Request Received</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{bookingForm.firstName}</strong>. Your consultation request for <strong>{bookingForm.hospital}</strong> has been recorded in the practice booking system.
                </p>

                <div className="p-4 bg-[#F8FAFC] rounded-xl text-xs text-slate-700 text-left border border-slate-200 space-y-1.5">
                  <p className="font-bold text-slate-900 flex items-center gap-1.5 text-xs text-[#1B4965]">
                    <ShieldCheck size={14} /> Logged with Medical Secretary ({SECRETARY_NAME})
                  </p>
                  <p className="leading-relaxed">
                    Our team will contact you on <strong>{bookingForm.phone || bookingForm.email}</strong> to verify insurance details (Bupa, AXA, etc.) or provide self-funding fixed package quotes and confirm your consultation date.
                  </p>
                </div>

                {/* Direct Action Options */}
                <div className="pt-2 space-y-2">
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(`[Consultation Request] ${bookingForm.firstName} ${bookingForm.lastName} - ${bookingForm.hospital}`)}&body=${encodeURIComponent(
`Dear Mr Shankar and Remya Rexlin,

I would like to request an outpatient consultation appointment.

PATIENT DETAILS:
• Name: ${bookingForm.firstName} ${bookingForm.lastName}
• Email: ${bookingForm.email}
• Phone: ${bookingForm.phone}
• Preferred Hospital: ${bookingForm.hospital}
• Joint / Condition: ${bookingForm.treatmentArea}
• Funding Method: ${bookingForm.fundingType}

ADDITIONAL CLINICAL NOTES:
${bookingForm.notes || 'None provided.'}

Kind regards,
${bookingForm.firstName} ${bookingForm.lastName}`
                    )}`}
                    className="w-full bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Mail size={14} />
                    <span>Open Pre-filled Email to Secretary ({EMAIL})</span>
                  </a>

                  {bookingForm.hospital.includes('Spire') && (
                    <a
                      href={SPIRE_HARTSWOOD_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#005EB8] hover:bg-[#004b93] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Calendar size={14} />
                      <span>View Live Timeslots on Spire Healthcare Portal</span>
                      <ExternalLink size={12} />
                    </a>
                  )}

                  {bookingForm.hospital.includes('Nuffield') && (
                    <a
                      href={NUFFIELD_BRENTWOOD_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#00703C] hover:bg-[#005a30] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Calendar size={14} />
                      <span>View Booking on Nuffield Health Portal</span>
                      <ExternalLink size={12} />
                    </a>
                  )}

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a
                      href={`tel:${MOBILE_PHONE.replace(/\s+/g, '')}`}
                      className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-3 py-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Phone size={13} className="text-[#1B4965]" />
                      <span>Call Mobile ({MOBILE_PHONE})</span>
                    </a>
                    <a
                      href={`tel:${LANDLINE_PHONE.replace(/\s+/g, '')}`}
                      className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-3 py-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Phone size={13} className="text-[#1B4965]" />
                      <span>Office ({LANDLINE_PHONE})</span>
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-slate-500 hover:text-slate-800 text-xs font-semibold py-1 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-6">
                  <img 
                    src="./logo.png" 
                    alt="Mr Shivakumar Shankar - London and Essex Hip and Knee Surgeon" 
                    className="h-14 sm:h-16 mx-auto object-contain mb-1" 
                  />
                  <p className="font-script text-[#1B4965] text-base sm:text-lg font-bold -mt-0.5 mb-2">
                    Restoring your active lifestyle
                  </p>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-2.5 py-1 rounded">
                    Private Consultation Booking
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                    Book an Appointment with {SURGEON_NAME}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Specialist assessment at Spire Hartswood Hospital or Nuffield Brentwood Hospital.
                  </p>
                </div>

                {/* Direct Hospital Booking Callout */}
                <div className="mb-5 p-3.5 bg-gradient-to-r from-[#EAF1F6] to-sky-50 rounded-xl border border-sky-200/80 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                  <div className="flex items-start gap-2.5">
                    <Calendar size={16} className="text-[#1B4965] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#1B4965] block">
                        Direct Online Booking Available:
                      </span>
                      <span className="text-slate-600 text-[11px]">
                        Prefer to pick your exact consultation date & time slot directly in Mr Shankar's live hospital diary?
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={SPIRE_HARTSWOOD_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1B4965] hover:bg-[#13364B] text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all inline-flex items-center justify-center gap-1.5 shrink-0 shadow-xs hover:shadow-md"
                    >
                      <span>Spire Portal</span>
                      <ExternalLink size={11} />
                    </a>
                    <a
                      href={NUFFIELD_BRENTWOOD_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#00703C] hover:bg-[#005a30] text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all inline-flex items-center justify-center gap-1.5 shrink-0 shadow-xs hover:shadow-md"
                    >
                      <span>Nuffield Portal</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  {/* Hospital Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Select Hospital Location *
                    </label>
                    <select
                      value={bookingForm.hospital}
                      onChange={(e) => setBookingForm({ ...bookingForm, hospital: e.target.value })}
                      required
                      className="w-full p-3 rounded-lg bg-[#F8FAFC] border border-slate-200 text-sm font-medium text-slate-800 focus:outline-none focus:border-[#1B4965] focus:ring-1 focus:ring-[#1B4965]"
                    >
                      <option value="Spire Hartswood Hospital">Spire Hartswood Hospital (Brentwood, Essex) — Live Diary Available</option>
                      <option value="Nuffield Brentwood Hospital">Nuffield Health Brentwood Hospital (Brentwood, Essex) — Live Booking Available</option>
                    </select>

                    {bookingForm.hospital === 'Spire Hartswood Hospital' && (
                      <div className="mt-2 p-2.5 bg-sky-50/80 rounded-lg border border-sky-100 flex items-center justify-between text-xs text-slate-700">
                        <span className="text-[11px] text-slate-600">
                          ⚡ <strong>Spire Appointment System:</strong> View real-time consultation timeslots:
                        </span>
                        <a
                          href={SPIRE_HARTSWOOD_BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#1B4965] hover:underline flex items-center gap-1 text-[11px] shrink-0"
                        >
                          <span>Open Spire Portal</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    )}

                    {bookingForm.hospital === 'Nuffield Brentwood Hospital' && (
                      <div className="mt-2 p-2.5 bg-emerald-50/80 rounded-lg border border-emerald-100 flex items-center justify-between text-xs text-slate-700">
                        <span className="text-[11px] text-slate-600">
                          ⚡ <strong>Nuffield Health System:</strong> Book directly on Nuffield Health portal:
                        </span>
                        <a
                          href={NUFFIELD_BRENTWOOD_BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-emerald-800 hover:underline flex items-center gap-1 text-[11px] shrink-0"
                        >
                          <span>Open Nuffield Portal</span>
                          <ExternalLink size={11} />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Joint / Condition of Concern */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                        Joint of Concern *
                      </label>
                      <select
                        value={bookingForm.treatmentArea}
                        onChange={(e) => setBookingForm({ ...bookingForm, treatmentArea: e.target.value })}
                        required
                        className="w-full p-3 rounded-lg bg-[#F8FAFC] border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#1B4965]"
                      >
                        <option value="Hip">Hip Condition</option>
                        <option value="Knee">Knee Condition</option>
                        <option value="Robotic Surgery">Robotic Joint Replacement</option>
                        <option value="Arthroscopy">Knee Keyhole / Arthroscopy</option>
                        <option value="Second Opinion">Second Opinion / Revision</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                        Funding Method *
                      </label>
                      <select
                        value={bookingForm.fundingType}
                        onChange={(e) => setBookingForm({ ...bookingForm, fundingType: e.target.value })}
                        required
                        className="w-full p-3 rounded-lg bg-[#F8FAFC] border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#1B4965]"
                      >
                        <option value="Insured (Bupa, AXA, Aviva, etc.)">Private Medical Insurance</option>
                        <option value="Self-Paying">Self-Pay Patient</option>
                      </select>
                    </div>
                  </div>

                  {/* Self-Funding Consultation Fees Transparency Notice */}
                  {bookingForm.fundingType === "Self-Paying" && (
                    <div className="p-3.5 bg-[#FFFBF5] border border-[#FDE68A] rounded-xl text-xs text-slate-800 animate-fade-in shadow-2xs">
                      <div className="flex items-center justify-between font-bold text-[#92400E] mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle size={14} className="text-[#E8A24C]" />
                          Self-Funding Outpatient Consultation Fees:
                        </span>
                        <span className="text-[10px] uppercase font-bold bg-[#FEF3C7] text-[#92400E] px-2 py-0.5 rounded border border-[#FDE68A]">
                          Transparent Pricing
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#FDE68A]/60">
                        <div className="bg-white/80 p-2 rounded-lg border border-[#FDE68A]/80">
                          <span className="text-[10px] text-slate-500 font-bold uppercase block">First Appointment</span>
                          <span className="text-base font-black text-slate-900">£250</span>
                          <span className="text-[10px] text-slate-500 block leading-tight">Initial full consultation</span>
                        </div>
                        <div className="bg-white/80 p-2 rounded-lg border border-[#FDE68A]/80">
                          <span className="text-[10px] text-slate-500 font-bold uppercase block">Follow-Up Visit</span>
                          <span className="text-base font-black text-slate-900">£200</span>
                          <span className="text-[10px] text-slate-500 block leading-tight">Review & progress check</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-2 leading-normal">
                        * Diagnostic investigations (e.g. X-rays, MRI) or surgical procedures are quoted transparently by the hospital if required.
                      </p>
                    </div>
                  )}

                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">First Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. John"
                        value={bookingForm.firstName}
                        onChange={(e) => setBookingForm({ ...bookingForm, firstName: e.target.value })}
                        className="w-full p-3 rounded-lg bg-[#F8FAFC] border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#1B4965]" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Last Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Smith"
                        value={bookingForm.lastName}
                        onChange={(e) => setBookingForm({ ...bookingForm, lastName: e.target.value })}
                        className="w-full p-3 rounded-lg bg-[#F8FAFC] border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#1B4965]" 
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="name@example.com"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="w-full p-3 rounded-lg bg-[#F8FAFC] border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#1B4965]" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Telephone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="07xxx xxxxxx"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="w-full p-3 rounded-lg bg-[#F8FAFC] border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#1B4965]" 
                      />
                    </div>
                  </div>

                  {/* Clinical Brief / Symptoms */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Brief Description of Symptoms (Optional)
                    </label>
                    <textarea 
                      rows={2}
                      placeholder="e.g. Groin pain when walking, knee catching, prior imaging taken..."
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                      className="w-full p-3 rounded-lg bg-[#F8FAFC] border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#1B4965]"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#E8A24C] hover:bg-[#D99136] text-white font-bold py-3.5 rounded-lg transition-colors shadow-md text-sm tracking-wider uppercase mt-2 flex items-center justify-center gap-2"
                  >
                    <Calendar size={16} /> Submit Consultation Request
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Your medical details are confidential and handled according to GMC privacy guidelines.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TREATMENT DETAIL MODAL */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setSelectedTreatment(null)}
          ></div>
          
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in border border-slate-100">
            <button 
              onClick={() => setSelectedTreatment(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Practice Brand Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              <img src="./logo.png" alt="Mr Shivakumar Shankar - London and Essex Hip and Knee Surgeon" className="h-10 w-auto object-contain" />
              <div className="relative w-10 h-13 rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-white flex-shrink-0">
                <SurgeonPortrait 
                  alt={SURGEON_NAME} 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <div className="border-l border-slate-200 pl-3">
                <p className="text-xs font-extrabold text-slate-900">{SURGEON_NAME}</p>
                <p className="text-[10px] text-[#1B4965] font-bold uppercase">{SURGEON_ROLE}</p>
                <p className="font-script text-[#1B4965] text-xs font-bold -mt-0.5">Restoring your active lifestyle</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase bg-[#EAF1F6] text-[#1B4965] px-2.5 py-0.5 rounded">
                {selectedTreatment.category}
              </span>
              {selectedTreatment.isPioneering && (
                <span className="text-xs font-bold uppercase bg-[#FFF7ED] text-[#C26B08] px-2.5 py-0.5 rounded border border-[#FDBA74]">
                  First in Essex & NE London
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
              {selectedTreatment.title}
            </h2>
            {selectedTreatment.subtitle && (
              <p className="text-sm font-semibold text-slate-500 mb-4">
                {selectedTreatment.subtitle}
              </p>
            )}

            <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 mb-6">
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedTreatment.description}
              </p>
            </div>

            {selectedTreatment.fullDetails && (
              <div className="space-y-3 mb-6">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Clinical Overview:</h4>
                {selectedTreatment.fullDetails.map((detail, idx) => (
                  <p key={idx} className="text-sm text-slate-600 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            )}

            {selectedTreatment.keyBenefits && (
              <div className="mb-6">
                <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-2">Key Advantages & Outcomes:</h4>
                <div className="space-y-2">
                  {selectedTreatment.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle size={16} className="text-[#1B4965] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SURGICAL RISKS & NON-OPERATIVE OPTIONS ACCORDION */}
            {(() => {
              const activeRiskInfo = selectedTreatment.procedureRiskId
                ? PROCEDURE_RISK_DATA.find(p => p.id === selectedTreatment.procedureRiskId)
                : PROCEDURE_RISK_DATA.find(p => p.id === selectedTreatment.id);

              if (!activeRiskInfo) return null;

              return (
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <h4 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                        <ShieldAlert size={18} className="text-[#1B4965]" />
                        Surgical Risks & Non-Operative Alternatives
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Clinical consent details, conservative alternatives, and potential complications
                      </p>
                    </div>
                    <button
                      onClick={() => generateProcedureRiskPdf(activeRiskInfo)}
                      className="bg-[#1B4965] hover:bg-[#13364B] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs self-start sm:self-auto"
                    >
                      <Download size={13} />
                      Download PDF Guide
                    </button>
                  </div>

                  {/* Non-Operative Options */}
                  <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-200 mb-4 text-xs text-slate-700 leading-relaxed">
                    <p className="font-bold text-[#1B4965] uppercase text-[11px] mb-2 flex items-center gap-1.5">
                      <CheckCircle size={14} /> Non-Operative Options Discussed:
                    </p>
                    <p>• <strong>Analgesia & Medical Therapy:</strong> {activeRiskInfo.nonOperativeOptions.analgesia}</p>
                    <p className="mt-1">• <strong>Activity Modification:</strong> {activeRiskInfo.nonOperativeOptions.activityModification}</p>
                    <p className="mt-1">• <strong>Low-Impact Exercises:</strong> {activeRiskInfo.nonOperativeOptions.exercises.join(', ')}</p>
                    <p className="mt-1">• <strong>Nutritional Supplements:</strong> {activeRiskInfo.nonOperativeOptions.supplements.join(', ')}</p>
                  </div>

                  {/* Surgical Risks List */}
                  <div className="space-y-2.5 mb-4">
                    <p className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Potential Surgical Complications & Explanations:
                    </p>
                    {activeRiskInfo.surgicalRisks.map((risk, ridx) => (
                      <div key={ridx} className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs shadow-2xs">
                        <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                          <span>{ridx + 1}. {risk.title}</span>
                          {risk.incidence && (
                            <span className="text-[10px] text-[#E8A24C] bg-[#FFF7ED] px-2 py-0.5 rounded border border-[#FDBA74]">
                              {risk.incidence}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 text-[11px] leading-relaxed mb-1.5">
                          {risk.description}
                        </p>
                        {risk.warningSigns && (
                          <div className="text-[10px] text-red-700 bg-red-50 p-1.5 rounded mb-1 border border-red-100">
                            <strong>Symptoms to report:</strong> {risk.warningSigns.join('; ')}
                          </div>
                        )}
                        <p className="text-[10px] text-slate-500">
                          <strong>Assessment & Management:</strong> {risk.managementOrAssessment}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Red alert for 999 */}
                  <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-950 flex items-start gap-2 mb-4">
                    <AlertTriangle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Emergency 999 Symptoms:</p>
                      <p className="text-[11px] text-red-900 mt-0.5">
                        {activeRiskInfo.postoperativeSymptomsToReport.emergency999.join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}

            <div className="pt-4 border-t border-slate-200 flex flex-wrap justify-between items-center gap-3">
              <span className="text-xs text-slate-500">
                Available at <strong>Spire Hartswood</strong> & <strong>Nuffield Brentwood</strong>
              </span>
              <div className="flex gap-2">
                {(() => {
                  const activeRiskInfo = selectedTreatment.procedureRiskId
                    ? PROCEDURE_RISK_DATA.find(p => p.id === selectedTreatment.procedureRiskId)
                    : PROCEDURE_RISK_DATA.find(p => p.id === selectedTreatment.id);
                  return activeRiskInfo ? (
                    <button
                      onClick={() => generateProcedureRiskPdf(activeRiskInfo)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                    >
                      <Download size={13} />
                      Download PDF
                    </button>
                  ) : null;
                })()}
                <button
                  onClick={() => {
                    setSelectedTreatment(null);
                    openBookingModal();
                  }}
                  className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors shadow-md"
                >
                  Book Consultation for this Procedure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PROTOCOL DETAIL MODAL */}
      {selectedProtocol && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={() => setSelectedProtocol(null)}
          ></div>
          
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in border border-slate-100">
            <button 
              onClick={() => setSelectedProtocol(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Practice Brand Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              <img src="./logo.png" alt="Mr Shivakumar Shankar - London and Essex Hip and Knee Surgeon" className="h-10 w-auto object-contain" />
              <div className="relative w-10 h-13 rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-white flex-shrink-0">
                <SurgeonPortrait 
                  alt={SURGEON_NAME} 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <div className="border-l border-slate-200 pl-3">
                <p className="text-xs font-extrabold text-slate-900">{SURGEON_NAME}</p>
                <p className="text-[10px] text-[#1B4965] font-bold uppercase">{SURGEON_ROLE}</p>
                <p className="font-script text-[#1B4965] text-xs font-bold -mt-0.5">Restoring your active lifestyle</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#1B4965] uppercase mb-2">
              <FileText size={16} /> Rehabilitation Protocol
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              {selectedProtocol.title}
            </h3>
            <p className="text-xs font-semibold text-slate-500 mb-4">
              Timeline: {selectedProtocol.timeline}
            </p>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {selectedProtocol.description}
            </p>

            <div className="space-y-3 mb-6 bg-[#F8FAFC] p-5 rounded-xl border border-slate-200">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">Key Recovery Milestones:</h4>
              <ul className="space-y-2">
                {selectedProtocol.keyMilestones.map((milestone, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center font-bold flex-shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="mt-0.5">{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                {selectedProtocol.filename}
              </span>
              <button
                onClick={() => {
                  generateProtocolPdf(selectedProtocol);
                }}
                className="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors shadow-md"
              >
                <Download size={14} /> Download Protocol Guide (PDF)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
