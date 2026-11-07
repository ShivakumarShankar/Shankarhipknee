import React, { useState } from 'react';
import { 
  Building, MapPin, Phone, Mail, Calendar, 
  ExternalLink, CheckCircle2, ShieldCheck, ChevronRight, Clock,
  ChevronDown, AlertTriangle, Car, Train, Stethoscope, Compass, Cpu
} from 'lucide-react';
import { 
  SURGEON_NAME, 
  SURGEON_ROLE, 
  EMAIL, 
  MOBILE_PHONE, 
  LANDLINE_PHONE, 
  SECRETARY_NAME, 
  SPIRE_HARTSWOOD_BOOKING_URL, 
  NUFFIELD_BRENTWOOD_BOOKING_URL 
} from '../constants';

export type LocationPageMode = 
  | 'overview' 
  | 'london' 
  | 'essex' 
  | 'spire' 
  | 'nuffield' 
  | 'queens' 
  | 'king-george';

interface LocationsHubProps {
  mode: LocationPageMode;
  onBook: (hospital?: string) => void;
  onNavigate: (href: string) => void;
}

export const LocationsHub: React.FC<LocationsHubProps> = ({
  mode,
  onBook,
  onNavigate
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const getPageInfo = () => {
    switch (mode) {
      case 'london':
        return {
          badge: 'Consultant Orthopaedic Care • London & North East London Practice',
          h1: 'Hip, Knee and Revision Hip Surgeon for London & North East London',
          lead: 'Mr Shivakumar Shankar provides consultant orthopaedic hip, knee and revision hip surgery for patients from London and North East London. Appointed substantive NHS Consultant at BHRUT (Queen\'s Hospital, Romford and King George Hospital, Goodmayes) and offering private surgical care at premier Brentwood hospitals easily accessible via the Elizabeth Line and M25.',
          isPrivate: false,
          isNHS: true
        };
      case 'essex':
        return {
          badge: 'Consultant Orthopaedic Care • Essex Practice',
          h1: 'Hip, Knee and Revision Hip Surgeon in Essex — Mr Shivakumar Shankar',
          lead: 'Mr Shivakumar Shankar is a fellowship-trained Consultant Orthopaedic Surgeon providing specialist hip, knee and complex revision hip surgery for patients across Brentwood, Romford, Chelmsford, and throughout Essex. Offering robotic-assisted, computer-navigated, and muscle-sparing joint reconstruction at premier private hospitals in Brentwood.',
          isPrivate: true,
          isNHS: false
        };
      case 'spire':
        return {
          badge: 'Private Practice Location • Eagle Way, Great Warley, Brentwood',
          h1: 'Mr Shivakumar Shankar at Spire Hartswood Hospital',
          lead: 'Mr Shivakumar Shankar conducts established private orthopaedic consultations, computer-navigated total knee surgery, and comprehensive joint reconstruction at Spire Hartswood Hospital in Brentwood, Essex. Spire Hartswood provides modern laminar-flow operating suites, advanced optical computer navigation, on-site MRI/CT diagnostics, dedicated inpatient physiotherapy, and comfortable en-suite private rooms in a tranquil parkland setting in Great Warley.',
          isPrivate: true,
          isNHS: false
        };
      case 'nuffield':
        return {
          badge: 'Private Practice Location • Shenfield Road, Brentwood, Essex',
          h1: 'Mr Shivakumar Shankar at Nuffield Health Brentwood Hospital',
          lead: 'Mr Shivakumar Shankar provides specialist private orthopaedic consultations and advanced joint reconstruction at Nuffield Health Brentwood Hospital in Essex. Nuffield Brentwood serves as Mr Shankar\'s primary private surgical base for Stryker MAKO robotic-arm assisted hip and knee replacement, offering patient-specific 3D CT virtual planning, laminar-flow operating suites, dedicated orthopaedic physiotherapy, and comfortable en-suite private rooms.',
          isPrivate: true,
          isNHS: false
        };
      case 'queens':
        return {
          badge: 'NHS Hospital Location',
          h1: 'Queen\'s Hospital, Romford — BHRUT NHS Trust',
          lead: 'Substantive NHS Consultant base for Mr Shivakumar Shankar at Barking, Havering and Redbridge University Hospitals NHS Trust. Regional acute trauma and joint reconstruction centre in Romford, Greater London / Essex.',
          isPrivate: false,
          isNHS: true
        };
      case 'king-george':
        return {
          badge: 'NHS Hospital Location',
          h1: 'King George Hospital, Goodmayes — BHRUT NHS Trust',
          lead: 'Elective orthopaedic surgery centre for Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). Dedicated clean-air orthopaedic surgical theatres and day surgery facility in Goodmayes, Ilford.',
          isPrivate: false,
          isNHS: true
        };
      default:
        return {
          badge: 'Hospital Affiliations',
          h1: 'Hospitals & Practice Locations in London & Essex',
          lead: 'Clear overview of Mr Shivakumar Shankar\'s NHS and private hospital locations across London and Essex. Mr Shankar holds a substantive NHS consultant appointment at BHRUT and conducts private practice at Spire Hartswood and Nuffield Brentwood Hospitals.',
          isPrivate: true,
          isNHS: true
        };
    }
  };

  const info = getPageInfo();

  // FAQs for Nuffield Brentwood
  const nuffieldFaqs = [
    {
      q: "What joint replacement procedures does Mr Shankar perform at Nuffield Health Brentwood Hospital?",
      a: "At Nuffield Health Brentwood Hospital, Mr Shivakumar Shankar performs Stryker MAKO robotic-arm assisted total hip replacement, MAKO robotic-assisted total knee replacement, and MAKO robotic-assisted partial (unicompartmental) knee replacement. He also provides selected revision hip replacement procedures suitable for private hospital facilities (including procedures for implant loosening, wear, instability or mechanical issues following individual clinical assessment), conventional hip and knee arthroplasty, muscle-sparing hip surgery (direct anterior and Rottinger approaches), diagnostic and therapeutic image-guided joint injections, and keyhole knee arthroscopy. Nuffield Brentwood serves as Mr Shankar's primary private surgical base in Essex for robotic-arm assisted joint reconstruction."
    },
    {
      q: "Why is Nuffield Health Brentwood Hospital the designated centre for MAKO robotic surgery?",
      a: "Nuffield Health Brentwood Hospital houses the specialised Stryker MAKO robotic arm-assisted surgical system and the requisite on-site 3D CT scanning and virtual templating software required for robotic arthroplasty. Mr Shankar introduced MAKO robotic joint replacement to private practice at Nuffield Brentwood to provide patients with patient-specific pre-operative 3D modelling and intra-operative stereotactic haptic guidance. MAKO robotic surgery is not offered at Spire Hartswood Hospital; private patients seeking robotic joint replacement consult with Mr Shankar at Nuffield Brentwood."
    },
    {
      q: "Do I need a GP referral to see Mr Shankar at Nuffield Health Brentwood Hospital?",
      a: "If you are self-funding your treatment, a GP referral is welcomed but not mandatory—you may book an outpatient consultation directly with Mr Shankar's medical secretary or via the Nuffield Health online booking portal. If you are using private medical insurance (such as Bupa, AXA Health, Aviva, Vitality, or WPA), most insurers require a formal GP referral letter before authorizing consultation and imaging fees. Mr Shankar maintains close communication with your GP, sending clinical letters regarding your diagnosis and management plan."
    },
    {
      q: "How does the pre-operative 3D CT robotic planning pathway work at Nuffield Brentwood?",
      a: "Following your initial consultation, if robotic joint replacement is indicated and agreed, you will undergo a specialized low-dose 3D CT scan at Nuffield Health Brentwood Hospital. The CT protocol captures precise cross-sectional anatomy of your hip, knee, and ankle joints. The imaging data is loaded into the MAKO proprietary planning software, allowing Mr Shankar to generate a patient-specific three-dimensional model of your joint, select exact implant sizing, and determine ideal component orientation and resection depths prior to entering the operating theatre."
    },
    {
      q: "What travel, public transport, and parking facilities are available at Nuffield Brentwood?",
      a: "Nuffield Health Brentwood Hospital is situated on Shenfield Road (A1023), Brentwood, Essex CM15 8EH, between Brentwood town centre and Shenfield. The hospital provides generous, complimentary on-site parking for patients and visitors, including designated accessible bays directly adjacent to the main reception entrance. For public transport, Shenfield Rail Station (Elizabeth Line and Greater Anglia mainline) is approximately one mile away (a 5-minute taxi journey), offering frequent fast connections from London Liverpool Street, Stratford, Romford, and Chelmsford. Brentwood Station is also approximately 1.5 miles away."
    },
    {
      q: "How does self-funding work for robotic joint replacement at Nuffield Brentwood?",
      a: "Nuffield Health Brentwood Hospital provides all-inclusive, fixed-price self-pay surgery packages for robotic hip and knee replacement. The package encompasses the consultant surgeon fee, consultant anaesthetist fee, hospital stay, theatre charges, implants, diagnostic tests during admission, routine take-home medications, and post-operative inpatient and outpatient physiotherapy. Outpatient consultation fees are transparent: £250 for an initial appointment and £200 for a follow-up review. Flexible finance options are also available through Nuffield Health to spread treatment costs over time, subject to approval."
    }
  ];

  // FAQs for Spire Hartswood
  const spireFaqs = [
    {
      q: "What procedures does Mr Shankar perform at Spire Hartswood Hospital?",
      a: "At Spire Hartswood Hospital, Mr Shivakumar Shankar provides outpatient orthopaedic consultations, selected revision hip replacement procedures suitable for private hospital facilities (including procedures for implant loosening, wear, instability or mechanical problems following clinical appraisal), computer-navigated total knee replacement using optical infrared tracking, conventional total hip replacement, conventional total knee replacement, and unicompartmental partial knee replacement. He also performs day-case knee arthroscopy for meniscal tears and mechanical joint symptoms, as well as fluoroscopic and ultrasound-guided hip and knee joint injections for targeted pain management and diagnostic assessment."
    },
    {
      q: "Is MAKO robotic surgery available at Spire Hartswood Hospital?",
      a: "No. MAKO robotic surgery is NOT offered at Spire Hartswood Hospital. Spire Hartswood is equipped with optical computer navigation technology for total knee replacement, which utilizes intra-operative infrared tracking without pre-operative CT scans. Patients specifically seeking MAKO robotic-assisted total hip or knee replacement can be treated by Mr Shankar at Nuffield Health Brentwood Hospital, located less than three miles away on Shenfield Road in Brentwood, or within his NHS service at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT)."
    },
    {
      q: "Do I need a GP referral to book a consultation at Spire Hartswood Hospital?",
      a: "Patients self-funding their consultation and treatment do not strictly need a GP referral and can schedule an appointment directly through the Spire Healthcare online booking portal or by contacting Mr Shankar's medical secretary. However, if you are utilizing private medical insurance (including Bupa, AXA Health, Aviva, Vitality, and WPA), your insurance provider will typically require a GP referral letter prior to issuing an authorization code for your appointment."
    },
    {
      q: "How does optical computer-navigated knee replacement work at Spire Hartswood?",
      a: "Optical computer navigation utilizes infrared tracking cameras and lightweight reflective marker arrays temporarily attached to the distal femur and proximal tibia. In theatre, Mr Shankar digitises key anatomical landmarks to register your true mechanical Hip-Knee-Ankle axis on a high-resolution display. The system provides real-time millimetric measurements of cutting blocks and dynamic ligament tension through full flexion and extension. A major technical advantage is that optical navigation avoids drilling intramedullary alignment rods into the femoral marrow canal, eliminating canal pressurisation."
    },
    {
      q: "What parking and travel facilities are available at Spire Hartswood Hospital?",
      a: "Spire Hartswood Hospital is located on Eagle Way, Great Warley, Brentwood, Essex CM13 3LE. It offers extensive, free on-site parking for patients and visitors directly outside the main entrance. The hospital is exceptionally well connected by road, situated just off the M25 (Junction 28 and Junction 29) and the A12, making it readily accessible from Romford, Hornchurch, Upminster, Chelmsford, and Greater London. Brentwood Rail Station (Elizabeth Line) is approximately five minutes away by car or taxi."
    },
    {
      q: "How are private surgical treatments funded at Spire Hartswood Hospital?",
      a: "Spire Hartswood Hospital welcomes both insured and self-funding patients. Mr Shankar is fee-assured and recognised by all major UK private medical insurers. For patients paying for their own surgery, Spire provides transparent 'fixed-price packages' that bundle the surgeon's fee, anaesthetist fee, surgical theatre costs, prosthetic implants, private en-suite accommodation, routine post-operative medications, and dedicated physiotherapy. Outpatient consultation fees are fixed at £250 for an initial assessment and £200 for a follow-up review."
    }
  ];

  // FAQs for Essex Hip, Knee & Revision
  const essexFaqs = [
    {
      q: "Where does Mr Shankar provide private hip, knee, and revision hip consultations in Essex?",
      a: "Mr Shivakumar Shankar conducts private outpatient consultations and surgery at two leading private hospitals in Brentwood, Essex: Nuffield Health Brentwood Hospital on Shenfield Road (CM15 8EH) and Spire Hartswood Hospital on Eagle Way in Great Warley (CM13 3LE). Both hospitals offer on-site advanced diagnostic imaging, laminar airflow theatres, dedicated inpatient physiotherapy, and comfortable en-suite private rooms. Both locations are easily accessible from Brentwood, Shenfield, Billericay, Romford, Upminster, Chelmsford, and throughout Essex."
    },
    {
      q: "What is revision hip replacement, and what is Mr Shankar's scope of practice in Essex?",
      a: "Revision total hip replacement is a specialised surgical procedure to remove and replace one or more components of a previously implanted artificial hip that has worn out, become loose, dislocated, or developed complications over time. Mr Shankar performs revision hip surgery across both private and NHS hospital settings in Essex. At his private practice at Nuffield Health Brentwood Hospital and Spire Hartswood Hospital, selected revision hip procedures suitable for private hospital facilities are undertaken following individual clinical assessment (including procedures for implant loosening, wear, instability or other mechanical problems). Furthermore, Mr Shankar undertakes complex revision hip replacement surgery and complex hip reconstruction within his NHS hospital practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), with access to specialist multidisciplinary assessment, complex reconstruction resources and dedicated perioperative support."
    },
    {
      q: "How is a painful or loose previous hip replacement evaluated in Essex?",
      a: "Mr Shankar carries out a rigorous, systematic diagnostic evaluation for patients with painful or failing hip replacements. This begins with a detailed surgical history and comprehensive clinical gait and abductor examination. Investigations include specialized weight-bearing radiographs of the pelvis and hip, blood inflammatory markers (ESR and C-reactive protein) to screen for occult infection, and high-resolution CT scanning with Metal Artefact Reduction Software (MARS) to accurately quantify bone loss and component orientation. Where infection is suspected, image-guided synovial fluid aspiration is performed under sterile conditions."
    },
    {
      q: "What is the difference between robotic surgery at Nuffield Brentwood and computer navigation at Spire Hartswood?",
      a: "Mr Shankar offers distinct technological capabilities across his Essex private hospital locations: At Nuffield Health Brentwood Hospital, he provides Stryker MAKO robotic-arm assisted total hip, total knee, and partial knee replacements utilizing patient-specific 3D CT pre-operative virtual planning and stereotactic haptic guidance. At Spire Hartswood Hospital, he provides optical computer-navigated total knee replacement using intra-operative infrared tracking without pre-operative CT scans. MAKO robotic surgery is not available at Spire Hartswood; private patients seeking robotic joint replacement consult with Mr Shankar at Nuffield Brentwood."
    },
    {
      q: "Do patients from Essex need a GP referral for a private consultation?",
      a: "For self-funding patients paying for their own consultations or surgery packages, a GP referral is welcomed but not strictly required—appointments can be arranged directly with Mr Shankar's medical secretary or via hospital online booking portals. For patients utilizing private medical insurance (such as Bupa, AXA Health, Aviva, Vitality, or WPA), insurance providers generally require a formal GP referral letter prior to issuing pre-authorisation for outpatient appointments and diagnostic scans."
    },
    {
      q: "What are the recovery and rehabilitation expectations following revision hip surgery?",
      a: "Revision hip replacement is inherently more complex than primary hip arthroplasty, and recovery timelines depend heavily on the extent of reconstruction, residual bone quality, and whether bone grafting or structural augments were required. While early mobilising with inpatient physiotherapists begins within 24 hours of surgery, patients often use crutches or walking aids for 6 to 12 weeks to protect implant osseointegration. A bespoke, structured rehabilitation plan is established to rebuild abductor muscle strength, joint mobility, and walking endurance safely."
    }
  ];

  // FAQs for London Hip, Knee & Revision
  const londonFaqs = [
    {
      q: "How can patients from London and North East London access Mr Shankar's orthopaedic services?",
      a: "Patients from London and North East London can access Mr Shankar through two established pathways: NHS patients can be referred by their GP via the NHS e-Referral Service (e-RS) to Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), where Mr Shankar consults and operates at Queen's Hospital in Romford and King George Hospital in Goodmayes. Private patients from London can schedule fast-track outpatient consultations and surgery at Mr Shankar's private hospital locations in Brentwood, Essex (Nuffield Health Brentwood and Spire Hartswood), easily reached via the Elizabeth Line."
    },
    {
      q: "Where does Mr Shankar hold private consultations for London patients?",
      a: "Mr Shankar's private outpatient clinics and surgical lists are held at Nuffield Health Brentwood Hospital (Shenfield Road, CM15 8EH) and Spire Hartswood Hospital (Eagle Way, CM13 3LE) in Brentwood, Essex. Rather than operating out of central London consulting rooms, his practice is centred in Brentwood, providing London patients with high-specification laminar airflow surgical facilities, state-of-the-art robotic and navigated technologies, free on-site parking, and rapid transit from central London stations via the Elizabeth Line."
    },
    {
      q: "What is Mr Shankar's experience and NHS leadership background in North East London?",
      a: "Mr Shankar has served as a substantive NHS Consultant in Trauma and Orthopaedics at BHRUT since 2017. He has held senior departmental clinical leadership appointments, including Interim & Acting Clinical Lead for Trauma and Orthopaedics, Clinical Director for Trauma and Orthopaedics, and Clinical Lead for Femur Fracture Management. He has led regional elective recovery sprints (including the 'Bones R Us' and HULK-10 initiatives), personally performing high-volume joint replacements and delivering award-winning emergency and elective orthopaedic care for London and Essex communities."
    },
    {
      q: "How are patients with painful or failing hip replacements investigated and treated by Mr Shankar?",
      a: "Drawing on his advanced subspecialty fellowship training at the Royal National Orthopaedic Hospital (RNOH), Stanmore—the UK's premier tertiary orthopaedic centre—Mr Shankar provides comprehensive diagnostic investigation for problematic hip replacements. Mr Shankar undertakes complex revision hip replacement surgery within his NHS hospital practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), where complex revision cases are managed with access to specialist multidisciplinary assessment, complex reconstruction resources, and dedicated perioperative support. In his private practice in Brentwood, Mr Shankar undertakes selected revision hip replacement procedures suitable for private hospital facilities following individual clinical assessment and pre-operative investigations."
    },
    {
      q: "How do London patients travel to Mr Shankar's private hospitals in Brentwood?",
      a: "Both Brentwood private hospitals offer straightforward travel from London. Via rail, Greater Anglia fast trains reach Shenfield from London Liverpool Street in approximately 23 to 25 minutes, while direct Elizabeth Line services connect central London stations (Paddington, Bond Street, Farringdon, Liverpool Street, Whitechapel, and Stratford) directly to Brentwood and Shenfield stations in approximately 35 to 45 minutes, followed by a brief 5-minute taxi to Nuffield Brentwood or Spire Hartswood. By road, both hospitals are situated just off the M25 (Junction 28 and Junction 29) and the A12, featuring generous, complimentary on-site parking."
    },
    {
      q: "What are the differences between NHS referrals and private consultations with Mr Shankar?",
      a: "NHS care is provided within BHRUT at Queen's and King George Hospitals, funded by the NHS without direct patient charge, but subject to standard NHS waiting times and e-Referral booking coordination by your GP. Private care at Nuffield Brentwood or Spire Hartswood allows rapid appointment scheduling, consultant-delivered continuity with Mr Shankar personally performing every procedure and follow-up review, private en-suite bedrooms, and transparent self-pay or health insurance funding (Bupa, AXA, Aviva, Vitality, WPA)."
    }
  ];

  // FAQs for Queen's Hospital Romford (NHS)
  const queensFaqs = [
    {
      q: "What is Mr Shivakumar Shankar's role and clinical leadership at Queen's Hospital and BHRUT?",
      a: "Mr Shivakumar Shankar has served as a substantive Consultant Orthopaedic Surgeon at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT) since 2017. He has held major clinical leadership appointments within the Trust, including Clinical Director for Trauma and Orthopaedics, NHS Clinical Lead for Trauma and Orthopaedics, Femur Fracture Lead, and Infection Control Lead. In these leadership roles, Mr Shankar has overseen clinical governance, patient safety protocols, surgical audit, and the continuous enhancement of trauma and elective orthopaedic care pathways across Queen's and King George Hospitals."
    },
    {
      q: "What orthopaedic services are provided at Queen's Hospital Romford?",
      a: "Queen's Hospital on Rom Valley Way is BHRUT's acute major hospital and regional trauma centre. Orthopaedic services at Queen's include acute trauma admissions, complex multi-trauma management, fragility fracture care (including neck of femur fracture pathways), peri-prosthetic fracture reconstruction, and comprehensive orthopaedic outpatient clinics. Elective hip and knee joint replacement surgery is coordinated across BHRUT, with routine elective procedures primarily undertaken at King George Hospital's protected elective surgical hub, while acute, emergency, and inpatient trauma care is delivered at Queen's."
    },
    {
      q: "How is complex revision hip surgery managed within BHRUT NHS Trust?",
      a: "Mr Shankar personally undertakes complex revision hip replacement surgery and hip reconstruction within his substantive NHS hospital practice at BHRUT. In the NHS setting at BHRUT, complex revision procedures—including operations for severe acetabular and femoral bone loss, mechanical implant failure, periprosthetic fractures, and chronic instability—are supported by specialist multidisciplinary assessment, complex reconstruction implant systems (such as trabecular metal augments and modular stems), dedicated microbiology services, and access to intensive care and high-dependency perioperative units. Selected revision hip procedures suitable for private hospital facilities are undertaken in his private practice at Nuffield Health Brentwood and Spire Hartswood Hospitals."
    },
    {
      q: "How can NHS patients obtain a referral to see Mr Shankar at Queen's Hospital Romford?",
      a: "NHS patients seeking an outpatient appointment with Mr Shivakumar Shankar at Queen's Hospital must be referred by their NHS General Practitioner (GP) via the NHS e-Referral Service (e-RS, formerly Choose and Book). GPs can direct referrals to the Trauma & Orthopaedics department at Barking, Havering and Redbridge University Hospitals NHS Trust, naming Mr Shivakumar Shankar as the named consultant specialist. Once received, referrals are clinically triaged based on urgency, and the hospital appointment booking team contacts the patient with available outpatient clinic dates."
    },
    {
      q: "What public transport links, parking, and accessibility facilities are available at Queen's Hospital?",
      a: "Queen's Hospital is situated on Rom Valley Way, Romford, Greater London / Essex RM7 0AG. It is exceptionally well served by public transport: Romford Rail Station (Elizabeth Line, Greater Anglia mainline, and London Overground) is approximately 0.8 miles away, with frequent direct bus connections (routes 5, 128, 175, 193, 365, 496, 498, and 499) stopping directly outside the hospital main entrance. For patients arriving by car, a dedicated multi-storey pay-and-display visitor car park is available on-site with designated accessible Blue Badge parking spaces and step-free access throughout."
    },
    {
      q: "What are the differences between NHS treatment at Queen's Hospital and private care in Brentwood?",
      a: "NHS treatment at Queen's Hospital is fully funded by the NHS without direct patient charge, but is subject to national clinical referral pathways, clinical prioritization, and standard NHS waiting lists. In contrast, Mr Shankar's private practice at Nuffield Health Brentwood Hospital and Spire Hartswood Hospital in Brentwood, Essex, offers expedited consultation scheduling, consultant-delivered continuity where Mr Shankar personally conducts every consultation and procedure, private en-suite bedrooms, and self-pay or health insurance funding (Bupa, AXA Health, Aviva, Vitality, WPA)."
    }
  ];

  // FAQs for King George Hospital Goodmayes (NHS)
  const kingGeorgeFaqs = [
    {
      q: "What is the role of King George Hospital as BHRUT's dedicated Elective Surgical Centre?",
      a: "King George Hospital in Goodmayes, Ilford, operates as the dedicated Elective Surgical Hub for Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). It features protected, ring-fenced clean-air laminar airflow orthopaedic operating theatres and dedicated elective surgical wards that are separate from acute emergency trauma admissions. This specialized elective model protects planned hip and knee joint replacement operations from winter bed pressures and acute emergency cancellations, ensuring reliable, high-volume joint reconstruction for patients across North East London and Essex."
    },
    {
      q: "What surgical procedures does Mr Shankar perform at King George Hospital?",
      a: "Within his NHS practice at King George Hospital, Mr Shivakumar Shankar performs high-volume primary total hip replacement, total knee replacement, partial (unicompartmental) knee replacement, knee arthroscopy, and revision joint surgery across BHRUT elective pathways. His NHS elective practice benefits from established enhanced recovery arthroplasty protocols, modern multimodal analgesia, and dedicated inpatient physiotherapists who assist patients to mobilise on the day of surgery."
    },
    {
      q: "What were the 'Bones R Us' and HULK-10 elective recovery initiatives led by Mr Shankar?",
      a: "Mr Shankar pioneered and led celebrated high-intensity elective orthopaedic surgical initiatives at BHRUT—including the 'Bones R Us' super-weekends and HULK-10 elective sprints—designed to drastically reduce orthopaedic surgery waiting lists following the COVID-19 pandemic. By coordinating multidisciplinary theatre teams, dedicated anaesthetists, and recovery staff over intensive weekend lists, Mr Shankar and his surgical colleagues safely performed high volumes of joint replacement operations, returning dozens of patients to pain-free mobility and receiving regional recognition across NHS London."
    },
    {
      q: "How does the clean-air elective surgical pathway at King George protect joint replacement patients?",
      a: "All joint replacement operations at King George Hospital are carried out in modern laminar airflow ultra-clean ventilation theatres, which create a continuous curtain of sterile, HEPA-filtered positive-pressure air over the sterile field. In addition, as former Infection Control Lead for the department, Mr Shankar enforces rigorous MRSA screening, strict pre-operative skin decolonisation, prophylactic intravenous antibiotics, and specialized barrier draping, maintaining exceptionally low prosthetic joint infection rates across BHRUT elective arthroplasty."
    },
    {
      q: "How can NHS patients be referred to King George Hospital for hip or knee surgery?",
      a: "NHS patients requiring hip or knee replacement can be referred by their GP through the NHS e-Referral Service (e-RS) to Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). Patients and their GPs can request referral to Mr Shivakumar Shankar. Following initial outpatient consultation and diagnostic assessment, elective surgical procedures are scheduled at King George Hospital's Elective Surgical Hub, supported by pre-operative Joint School education and comprehensive multidisciplinary rehabilitation."
    },
    {
      q: "How do patients travel to King George Hospital Goodmayes, and what parking is available?",
      a: "King George Hospital is located on Barley Lane, Goodmayes, Ilford, Essex / Greater London IG3 8YB. It is conveniently situated between Goodmayes and Newbury Park. By rail, Goodmayes Rail Station (Elizabeth Line) is approximately 1 mile away, with frequent direct TfL bus connections (routes 364, 387, 396, and 173) connecting the station directly to the hospital grounds. Newbury Park Underground Station (Central line) is also within easy bus reach. For motorists, the hospital offers on-site pay-and-display parking with dedicated Blue Badge accessible spaces adjacent to the main elective entrance."
    }
  ];

  return (
    <article className="pt-24 sm:pt-28 md:pt-32 pb-20 font-sans text-slate-800 bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="hover:text-[#1B4965]">Home</a>
            <span>/</span>
            <a href="/hospitals-locations" onClick={(e) => { e.preventDefault(); onNavigate('/hospitals-locations'); }} className="hover:text-[#1B4965]">Hospitals &amp; Locations</a>
            {mode !== 'overview' && (
              <>
                <span>/</span>
                <span className="text-[#1B4965] font-bold">
                  {mode === 'nuffield' ? 'Nuffield Health Brentwood Hospital' :
                   mode === 'spire' ? 'Spire Hartswood Hospital' :
                   mode === 'essex' ? 'Essex Hip & Knee Practice' :
                   mode === 'london' ? 'London Hip & Knee Practice' :
                   mode === 'queens' ? 'Queen\'s Hospital Romford (BHRUT NHS Trust)' :
                   mode === 'king-george' ? 'King George Hospital Goodmayes (BHRUT NHS Trust)' :
                   info.badge}
                </span>
              </>
            )}
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            {info.badge}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {info.h1}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mt-4 leading-relaxed max-w-4xl">
            {info.lead}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            {info.isNHS && !info.isPrivate ? (
              <>
                <a
                  href="#referral-pathway"
                  className="bg-[#1B4965] hover:bg-[#13364B] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
                >
                  <span>NHS GP Referral (e-RS) Guide</span>
                  <span>&darr;</span>
                </a>
                <button
                  onClick={() => onBook()}
                  className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
                >
                  <Calendar size={16} /> Private Consultation Option
                </button>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
                >
                  Contact Medical Secretary
                </a>
              </>
            ) : (
              <>
                <button
                  onClick={() => onBook(mode === 'nuffield' ? 'Nuffield Health Brentwood Hospital' : mode === 'spire' ? 'Spire Hartswood Hospital' : undefined)}
                  className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
                >
                  <Calendar size={16} /> Book Private Consultation
                </button>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
                >
                  Contact Medical Secretary
                </a>
                {mode === 'nuffield' && (
                  <a
                    href={NUFFIELD_BRENTWOOD_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <span>Nuffield Online Portal</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {mode === 'spire' && (
                  <a
                    href={SPIRE_HARTSWOOD_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <span>Spire Online Portal</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* 2. LOCATIONS CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ======================================================== */}
          {/* DEDICATED VIEW: NUFFIELD HEALTH BRENTWOOD HOSPITAL       */}
          {/* ======================================================== */}
          {mode === 'nuffield' ? (
            <div className="space-y-12">
              {/* Quick Contact & Appointments Action Bar */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
                    Nuffield Health Brentwood Hospital &bull; Direct Appointments
                  </span>
                  <h2 className="text-xl font-black text-slate-900">
                    Private Consultations with Mr Shivakumar Shankar
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    Shenfield Road, Brentwood, Essex CM15 8EH. Main Hospital: <strong>01277 695 695</strong> &bull; Appointments: <strong>01277 886 737</strong> &bull; Practice Secretary (Remya Rexlin): <strong>07587 765888</strong>.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href={NUFFIELD_BRENTWOOD_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <span>Nuffield Online Portal</span>
                    <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={() => onBook('Nuffield Health Brentwood Hospital')}
                    className="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Location &amp; Access</div>
                  <div className="text-base font-black text-slate-900 mb-1">Shenfield Road, Brentwood</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Essex CM15 8EH. Free on-site patient parking. 1 mile from Shenfield Rail Station (Elizabeth Line).</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-emerald-700 tracking-wider mb-1">Primary Robotic Centre</div>
                  <div className="text-base font-black text-slate-900 mb-1">Stryker MAKO Robotics</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Designated private hospital for MAKO robotic-arm assisted total hip, total knee, and partial knee surgery.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Diagnostic Imaging</div>
                  <div className="text-base font-black text-slate-900 mb-1">3D CT Scanning Suite</div>
                  <p className="text-xs text-slate-600 leading-relaxed">On-site low-dose 3D CT scanner calibrated for MAKO stereotactic planning, 1.5T MRI, and digital X-ray.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Inpatient Care</div>
                  <div className="text-base font-black text-slate-900 mb-1">Private En-Suite Rooms</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Ultra-clean laminar flow theatres, dedicated orthopaedic physiotherapy team, and enhanced recovery protocols.</p>
                </div>
              </div>

              {/* Section 1: Consultant Practice */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Consultant Arthroplasty Practice
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Consultant-Led Private Orthopaedic Care in Brentwood, Essex
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Mr Shivakumar Shankar is a fellowship-trained Consultant Orthopaedic Surgeon specialising in complex and routine hip and knee reconstruction. Holding substantive NHS appointments at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT)—where he has served as Clinical Director and NHS Clinical Lead for Trauma and Orthopaedics—Mr Shankar provides dedicated private outpatient clinics and elective operating lists at Nuffield Health Brentwood Hospital on Shenfield Road.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    At Nuffield Health Brentwood Hospital, your care is entirely consultant-delivered. From your initial clinical consultation, physical examination, and diagnostic imaging review through to pre-operative 3D CT surgical templating, the surgical procedure itself, and subsequent ward reviews and outpatient check-ups, Mr Shankar personally oversees every step of your clinical journey. His practice is supported by experienced hospital nurses, specialist musculoskeletal radiographers, and a dedicated inpatient orthopaedic physiotherapy team.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-700">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <strong class="block text-slate-900 mb-0.5">3,000+ Joint Surgeries</strong>
                      Extensive experience in primary and complex hip and knee arthroplasty over 9+ years of senior practice.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <strong class="block text-slate-900 mb-0.5">100+ MAKO Robotic Series</strong>
                      Personal surgical series of over 100 MAKO robotic-assisted procedures performed by Mr Shankar.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <strong class="block text-slate-900 mb-0.5">Specialist Fellowships</strong>
                      Dual UK fellowships at RNOH Stanmore and Golden Jubilee Hospital, Glasgow (Robotic &amp; Navigation Diploma).
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Clinical Services & MAKO Robotics */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-3 inline-block border border-emerald-200">
                    Clinical Services &amp; Surgical Technology
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Specialist Hip &amp; Knee Procedures Offered at Nuffield Brentwood
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    Nuffield Health Brentwood Hospital serves as Mr Shankar's primary private surgical base in Essex for Stryker MAKO robotic-arm assisted joint arthroplasty. A comprehensive range of surgical and non-surgical treatments is available:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                        MAKO Robotic-Assisted Total Hip Replacement
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Utilises pre-operative 3D CT virtual planning to model patient-specific acetabular and femoral anatomy. Intra-operatively, the robotic arm guides reaming and cup impaction within pre-planned stereotactic boundaries, optimizing cup inclination, version, femoral offset, and leg length restoration.
                      </p>
                      <a href="/robotic-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/robotic-hip-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Learn more about Robotic Hip Surgery &rarr;
                      </a>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                        MAKO Robotic-Assisted Total Knee Replacement
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Combines pre-operative CT modeling with real-time kinematic soft-tissue balancing across flexion and extension arcs. Stereotactic haptic boundaries guide the oscillating bone saw, preventing bone resections outside pre-planned zones while preserving healthy collateral ligaments.
                      </p>
                      <a href="/robotic-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/robotic-knee-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Learn more about Robotic Knee Surgery &rarr;
                      </a>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1B4965]"></span>
                        MAKO Robotic Partial (Unicompartmental) Knee Replacement
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Targeted resurfacing of isolated medial or lateral compartment osteoarthritis. Spares healthy articular cartilage, subchondral bone, and both the anterior and posterior cruciate ligaments (ACL/PCL), allowing natural knee kinematics and rapid post-operative recovery.
                      </p>
                      <a href="/partial-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/partial-knee-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Learn more about Partial Knee Surgery &rarr;
                      </a>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1B4965]"></span>
                        Conventional Hip &amp; Knee Arthroplasty
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Time-proven conventional hip and knee replacements using premium biocompatible implants, ceramic bearings, and cross-linked polyethylene inserts. Ideal for patients suited to established manual instrumentation with decades of UK National Joint Registry evidence.
                      </p>
                      <a href="/hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/hip-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Explore Total Hip Replacement &rarr;
                      </a>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                        Minimally Invasive &amp; Muscle-Sparing Approaches
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Specialist soft-tissue preserving techniques including the direct anterior approach and the true muscle-sparing Rottinger anterolateral approach, avoiding detachment of major gluteal muscle tendons to accelerate early walking and reduce post-operative pain.
                      </p>
                      <a href="/minimally-invasive-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/minimally-invasive-hip-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Explore Muscle-Sparing Hip Techniques &rarr;
                      </a>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                        Diagnostic Joint Injections &amp; Knee Arthroscopy
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Outpatient ultrasound- and fluoroscopic-guided joint injections for targeted pain relief and differential diagnosis (confirming hip vs lumbar spine pathology). Day-case keyhole knee arthroscopy for mechanical catching, meniscal tears, and chondral preservation.
                      </p>
                      <a href="/knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/knee-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Explore Knee Joint Preservation &rarr;
                      </a>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-700"></span>
                        Selected Revision Hip Replacement Surgery
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Revision hip procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar following individual clinical assessment and appropriate pre-operative investigations. These include selected revision hip replacement procedures for implant loosening, wear, instability or other mechanical problems, depending on the complexity of the case and suitability for the hospital.
                      </p>
                      <a href="/revision-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/revision-hip-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Explore Revision Hip Surgery &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: 3D CT Pathway */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Robotic Preparation Pathway
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    The 3D CT Robotic Planning Pathway at Nuffield Brentwood
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    A fundamental distinction of MAKO robotic-assisted surgery is that surgical planning begins well before entering the operating theatre. Unlike conventional surgery—which relies on standard two-dimensional X-rays and manual cutting blocks—robotic arthroplasty follows a structured digital preparation sequence at Nuffield Health Brentwood Hospital:
                  </p>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold shrink-0 text-xs">1</span>
                      <div>
                        <strong className="text-slate-900 block text-sm mb-1">Outpatient Clinical Assessment &amp; Initial Imaging</strong>
                        Mr Shankar conducts a thorough clinical examination, reviews your medical history, and evaluates your joint symptoms and activity limitations. Digital weight-bearing plain radiographs are obtained on-site to confirm the degree of arthritic joint degeneration.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold shrink-0 text-xs">2</span>
                      <div>
                        <strong className="text-slate-900 block text-sm mb-1">Dedicated Low-Dose 3D CT Scan</strong>
                        If robotic-assisted surgery is agreed, you will undergo a specialized CT scan at Nuffield Brentwood's radiology department using the proprietary Stryker MAKO scanning protocol. This captures precise three-dimensional anatomy of your hip, knee, and ankle joints.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold shrink-0 text-xs">3</span>
                      <div>
                        <strong className="text-slate-900 block text-sm mb-1">Custom Digital Pre-Operative Surgical Plan</strong>
                        The CT dataset is converted into a 3D virtual computer model of your joint. Mr Shankar evaluates your bone anatomy, selects exact implant sizes, plans the precise depth and angle of bone resections, and fine-tunes component alignment and leg length targets in software.
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold shrink-0 text-xs">4</span>
                      <div>
                        <strong className="text-slate-900 block text-sm mb-1">Intra-Operative Robotic-Arm Guidance</strong>
                        In theatre, optical tracking arrays register your real-time limb position against the virtual 3D CT model. Mr Shankar manipulates the robotic arm, which enforces stereotactic haptic boundaries to ensure resections and component placement strictly match the pre-approved plan.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Facilities & Inpatient Care */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Inpatient Care &amp; Rehabilitation
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Operating Theatres, Enhanced Recovery &amp; Dedicated Physiotherapy
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Nuffield Health Brentwood Hospital offers modern surgical infrastructure designed to maximize patient safety, comfort, and clinical outcomes:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-700 mb-6">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Laminar Flow Operating Theatres</strong>
                      Ultra-clean filtered air ventilation systems maintain exceptional sterility in theatre, substantially lowering the risk of prosthetic joint infections.
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Enhanced Recovery After Surgery (ERAS)</strong>
                      Standardised multi-modal pain relief, tranexamic acid to minimise surgical blood loss, and early mobilization protocols supporting rapid recovery.
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Dedicated Inpatient Physiotherapists</strong>
                      Specialist orthopaedic physiotherapists assist patients with standing and walking within hours of surgery, guiding stair practice and home exercise plans.
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Private En-Suite Patient Bedrooms</strong>
                      Spacious private bedrooms featuring en-suite walk-in shower rooms, flat-screen television, complimentary Wi-Fi, and 24-hour dedicated nursing care.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Booking Pathways */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Consultation &amp; Funding Pathways
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Patient Booking Pathways: Private Medical Insurance &amp; Self-Funding
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    Consultations and surgical treatments at Nuffield Health Brentwood Hospital are accessible to both privately insured and self-funding patients:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Private Medical Insurance</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        Mr Shankar is fee-assured and fully recognised by all leading UK private medical insurance companies, including:
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1 mb-4">
                        <li>&bull; <strong>Bupa</strong> (Consultant Finder registered)</li>
                        <li>&bull; <strong>AXA Health</strong>, <strong>Aviva</strong>, <strong>Vitality</strong></li>
                        <li>&bull; <strong>WPA</strong>, <strong>Cigna</strong>, <strong>Healix</strong>, <strong>Police Mutual</strong></li>
                      </ul>
                      <p className="text-xs text-slate-500 italic">
                        Please contact your insurer prior to consultation to obtain pre-authorisation. Most insurers require a GP referral letter.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Self-Funding Fixed-Price Packages</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        For self-paying patients, Nuffield Health provides transparent fixed-price treatment packages with no hidden costs:
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1 mb-4">
                        <li>&bull; <strong>Initial Consultation:</strong> £250</li>
                        <li>&bull; <strong>Follow-up Consultation:</strong> £200</li>
                        <li>&bull; <strong>Surgery Packages:</strong> Bundle consultant surgeon fee, anaesthetist fee, hospital stay, implants, medications, and physiotherapy.</li>
                        <li>&bull; <strong>Direct Access:</strong> Self-paying patients can self-refer without a mandatory GP letter.</li>
                      </ul>
                      <p className="text-xs text-slate-500 italic">
                        Flexible monthly finance payment plans are available through Nuffield Health, subject to credit approval.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Hospital Appointments &amp; Enquiries:</span>
                      <span className="text-xs text-slate-600">Telephone <strong>01277 695 695</strong> (Appointments: <strong>01277 886 737</strong>) &bull; Practice Secretary: <strong>07587 765888</strong></span>
                    </div>
                    <a
                      href={NUFFIELD_BRENTWOOD_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg text-xs font-bold shrink-0 transition-colors"
                    >
                      Book on Nuffield Health &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Section 6: Travel & Parking */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Travel &amp; Directions
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Hospital Address, Directions &amp; Free On-Site Parking
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    Nuffield Health Brentwood Hospital is conveniently located on Shenfield Road in Brentwood, easily accessible from across Essex, North East London, and Greater London:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-700 mb-6">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Hospital Address</strong>
                      <p>Nuffield Health Brentwood Hospital<br />Shenfield Road<br />Brentwood, Essex<br /><strong>CM15 8EH</strong></p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Road &amp; Motorway Access</strong>
                      <p>Directly on the A1023 (Shenfield Road). Rapid access from the M25 motorway via <strong>Junction 28 (A12)</strong>. Accessible within 20 minutes from Romford, Hornchurch, Billericay, and Chelmsford.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Rail &amp; Public Transport</strong>
                      <p><strong>Shenfield Station:</strong> 1 mile away (approx. 5 mins taxi). Direct Elizabeth Line and Greater Anglia mainline trains from London Liverpool Street, Stratford, and Chelmsford.<br /><strong>Brentwood Station:</strong> 1.5 miles away.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                    <strong>Complimentary Parking:</strong> Ample free on-site parking is provided for patients and visitors directly outside the hospital entrance, including designated accessible (blue badge) bays.
                  </div>
                </div>
              </div>

              {/* Section 7: FAQs */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Patient Guidance
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Frequently Asked Questions: Nuffield Health Brentwood Hospital
                  </h2>

                  <div className="space-y-4">
                    {nuffieldFaqs.map((faq, i) => (
                      <div key={i} className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                          {faq.q}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 8: Contextual Internal Links */}
              <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  Explore Related Procedures &amp; Practice Locations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <a href="/robotic-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/robotic-hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Robotic Hip Replacement &rarr;
                  </a>
                  <a href="/robotic-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/robotic-knee-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Robotic Knee Replacement &rarr;
                  </a>
                  <a href="/partial-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/partial-knee-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Partial Knee Replacement &rarr;
                  </a>
                  <a href="/revision-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/revision-hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Revision Hip Replacement &rarr;
                  </a>
                  <a href="/hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Total Hip Replacement &rarr;
                  </a>
                  <a href="/knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/knee-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Total Knee Replacement &rarr;
                  </a>
                  <a href="/about-mr-shivakumar-shankar" onClick={(e) => { e.preventDefault(); onNavigate('/about-mr-shivakumar-shankar'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    About Mr Shivakumar Shankar &rarr;
                  </a>
                  <a href="/spire-hartswood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('/spire-hartswood-hospital'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Spire Hartswood Hospital &rarr;
                  </a>
                  <a href="/book-consultation" onClick={(e) => { e.preventDefault(); onNavigate('/book-consultation'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-[#1B4965] border border-slate-200 transition-colors">
                    Book Private Consultation &rarr;
                  </a>
                </div>
              </div>
            </div>
          ) : mode === 'spire' ? (
            /* ======================================================== */
            /* DEDICATED VIEW: SPIRE HARTSWOOD HOSPITAL                 */
            /* ======================================================== */
            <div className="space-y-12">
              {/* Quick Contact & Appointments Action Bar */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
                    Spire Hartswood Hospital &bull; Direct Appointments
                  </span>
                  <h2 className="text-xl font-black text-slate-900">
                    Private Consultations with Mr Shivakumar Shankar
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    Eagle Way, Great Warley, Brentwood, Essex CM13 3LE. Main Hospital: <strong>01277 266 766</strong> &bull; Appointments: <strong>01277 266 777</strong> &bull; Practice Secretary (Remya Rexlin): <strong>07587 765888</strong>.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href={SPIRE_HARTSWOOD_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <span>Spire Online Portal</span>
                    <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={() => onBook('Spire Hartswood Hospital')}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Location &amp; Access</div>
                  <div className="text-base font-black text-slate-900 mb-1">Eagle Way, Great Warley</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Brentwood CM13 3LE. Generous free on-site parking. 5 minutes from M25 (J28/J29) and Brentwood Station.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Knee Technology</div>
                  <div className="text-base font-black text-slate-900 mb-1">Optical Computer Navigation</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Intra-operative infrared kinematic tracking; avoids intramedullary rods; does not routinely require a separate pre-operative planning CT scan.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-amber-800 tracking-wider mb-1">Technology Note</div>
                  <div className="text-base font-black text-slate-900 mb-1">Optical Navigation Centre</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Spire offers optical navigation; MAKO robotic surgery is not available at Spire (provided at Nuffield Brentwood).</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Inpatient Care</div>
                  <div className="text-base font-black text-slate-900 mb-1">Private En-Suite Rooms</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Laminar-flow ultra-clean theatres, dedicated inpatient physiotherapy department, and peaceful parkland setting.</p>
                </div>
              </div>

              {/* Section 1: Established Practice */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Established Private Practice
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Established Private Orthopaedic Consultations in Brentwood, Essex
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Mr Shivakumar Shankar has established a longstanding, trusted private orthopaedic practice at Spire Hartswood Hospital on Eagle Way in Great Warley, Brentwood. As an experienced Consultant Orthopaedic Surgeon with substantive NHS leadership roles across Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT)—including Interim &amp; Acting Clinical Lead and Clinical Director for Trauma and Orthopaedics—Mr Shankar provides comprehensive consultant-led care for patients throughout Essex and London.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    At Spire Hartswood Hospital, patients benefit from a complete, unhurried consultant pathway. Mr Shankar personally evaluates each patient, takes a comprehensive clinical history, performs targeted physical examinations, interprets diagnostic X-rays and MRI scans, carries out all surgical operations personally, and conducts all post-operative reviews on the hospital ward and in the outpatient department.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-700">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <strong className="block text-slate-900 mb-0.5">3,000+ Joint Arthroplasties</strong>
                      High-volume surgeon performing hip and knee replacements across manual, computer-assisted, and robotic modalities.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <strong className="block text-slate-900 mb-0.5">1,200+ Knee Arthroscopies</strong>
                      Substantial experience in keyhole meniscal repair, joint debridement, and cartilage preservation.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <strong className="block text-slate-900 mb-0.5">GMC Specialist Register</strong>
                      GMC Reference 6038414 &bull; CCT in Trauma &amp; Orthopaedics &bull; Postgraduate Diploma in CAOS Arthroplasty.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Clinical Services */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Clinical Services &amp; Arthroplasty
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Specialist Hip &amp; Knee Treatments at Spire Hartswood Hospital
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    At Spire Hartswood Hospital, Mr Shankar provides a full range of adult joint reconstruction, arthroscopy, and non-surgical interventional treatments:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1B4965]"></span>
                        Computer-Navigated Total Knee Replacement
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Intra-operative optical infrared tracking calculating live limb mechanical axes and joint gap symmetry. Avoids breaching the femoral intramedullary canal, lowering intramedullary pressure rises. Requires no pre-operative CT scan radiation.
                      </p>
                      <a href="/computer-assisted-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/computer-assisted-knee-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Learn more about Computer Navigation &rarr;
                      </a>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1B4965]"></span>
                        Conventional Total Hip Replacement
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Proven hip replacement replacing the arthritic femoral head and acetabulum with durable ceramic and cross-linked polyethylene components. Muscle-sparing approaches (direct anterior, Rottinger) and posterior approaches restoring natural hip mechanics.
                      </p>
                      <a href="/hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/hip-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Explore Total Hip Replacement &rarr;
                      </a>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1B4965]"></span>
                        Conventional Total Knee Replacement
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Reliable mechanical resurfacing of femoral and tibial joint surfaces, correcting bow-leg (varus) or knock-knee (valgus) deformities, backed by extensive National Joint Registry data demonstrating excellent 15- to 20-year survivorship.
                      </p>
                      <a href="/knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/knee-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Explore Total Knee Replacement &rarr;
                      </a>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1B4965]"></span>
                        Partial (Unicompartmental) Knee Replacement
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Precision resurfacing limited to either the medial or lateral compartment. Preserves both native cruciate ligaments (ACL and PCL) and healthy cartilage, enabling normal joint proprioception, smaller incisions, and swift functional return.
                      </p>
                      <a href="/partial-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/partial-knee-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Explore Partial Knee Arthroplasty &rarr;
                      </a>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                        Knee Arthroscopy &amp; Meniscal Repair
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Minimally invasive keyhole procedures for meniscal tears, chondral flaps, loose bodies, and persistent mechanical symptoms. Day-case admission with rapid return to daily mobility and sports-specific rehabilitation.
                      </p>
                      <a href="/knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/knee-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Learn more about Knee Arthroscopy &rarr;
                      </a>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                        Image-Guided Hip &amp; Knee Injections
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Ultrasound- and fluoroscopy-guided local anaesthetic and corticosteroid injections. Serves as a vital diagnostic tool to differentiate hip osteoarthritis from referred lumbar spine pain, while delivering effective anti-inflammatory symptom relief.
                      </p>
                      <a href="/hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/hip-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Explore Joint Injections &rarr;
                      </a>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                      <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-700"></span>
                        Selected Revision Hip Replacement Surgery
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Revision hip procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar following individual clinical assessment and appropriate pre-operative investigations. These include selected revision hip replacement procedures for implant loosening, wear, instability or other mechanical problems, depending on the complexity of the case and suitability for the hospital.
                      </p>
                      <a href="/revision-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/revision-hip-replacement'); }} className="text-xs font-bold text-[#1B4965] hover:underline inline-block pt-1">
                        Explore Revision Hip Surgery &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Technology Distinction */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full mb-3 inline-block border border-amber-200">
                    Clinical Technology Clarification
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Surgical Technology Distinction: Optical Navigation vs MAKO Robotics
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    To provide complete transparency for patients and referring general practitioners, Mr Shankar clearly distinguishes the surgical technologies available across his private practice locations in Brentwood:
                  </p>

                  <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-slate-800 mb-6 space-y-3">
                    <p className="font-bold text-amber-950 flex items-center gap-1.5">
                      <AlertTriangle size={16} className="text-amber-700 shrink-0" />
                      Important Notice Regarding MAKO Robotic Surgery:
                    </p>
                    <p className="leading-relaxed">
                      Spire Hartswood Hospital is equipped with <strong>optical computer navigation technology</strong> for total knee replacement, but does <strong>NOT</strong> have a MAKO robotic surgical system. Computer navigation provides digital angular and gap readouts to assist the surgeon's manual instrumentation without requiring a pre-operative CT scan or robotic arm.
                    </p>
                    <p className="leading-relaxed">
                      Patients who specifically seek <strong>Stryker MAKO robotic-arm assisted hip or knee replacement</strong> are treated by Mr Shankar at <strong>Nuffield Health Brentwood Hospital</strong> on Shenfield Road (located less than 3 miles from Spire Hartswood) or within his NHS service at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-700">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <strong className="text-slate-900 block text-sm">Spire Hartswood Hospital (Navigation &amp; Conventional)</strong>
                      <ul className="space-y-1">
                        <li>&bull; Optical infrared cameras and tracker arrays in theatre</li>
                        <li>&bull; Live digital display of mechanical axis and gap balance</li>
                        <li>&bull; Avoids breaching the femoral marrow canal (no intramedullary rods)</li>
                        <li>&bull; <strong>No pre-operative CT scan radiation required</strong></li>
                        <li>&bull; Surgeon uses precision manual cutting guides</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <strong className="text-slate-900 block text-sm">Nuffield Health Brentwood Hospital (MAKO Robotics)</strong>
                      <ul className="space-y-1">
                        <li>&bull; Pre-operative low-dose 3D CT scan and virtual modeling</li>
                        <li>&bull; Surgeon-guided robotic arm with active stereotactic haptic boundaries</li>
                        <li>&bull; Real-time dynamic soft-tissue gap balancing</li>
                        <li>&bull; Available for MAKO Total Hip, Total Knee &amp; Partial Knee</li>
                        <li>&bull; Located on Shenfield Road, Brentwood CM15 8EH</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Facilities & Inpatient Care */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Hospital Infrastructure
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Laminar Flow Theatres, Fast-Track Imaging &amp; Dedicated Rehabilitation
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Spire Hartswood Hospital provides state-of-the-art medical and inpatient facilities in a tranquil, wooded setting in Great Warley:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-700 mb-6">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Ultra-Clean Laminar Flow Theatres</strong>
                      Specialised orthopaedic operating suites equipped with HEPA-filtered laminar airflow canopies, maintaining exceptionally low airborne particulate levels to minimize surgical site infection risk.
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">On-Site Diagnostic Imaging</strong>
                      Rapid-access imaging suite including 1.5T MRI, digital weight-bearing X-rays, multi-slice CT scanning, and musculoskeletal ultrasound.
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Inpatient Physiotherapy Team</strong>
                      Experienced orthopaedic physiotherapists assist patients with early mobilization on the day of surgery, providing tailored gait training, stair negotiation practice, and home exercise protocols.
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Private En-Suite Recovery Rooms</strong>
                      Comfortable private inpatient bedrooms featuring en-suite bathroom facilities, flat-screen television, free Wi-Fi, peaceful garden views, and 24-hour medical and nursing care.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Booking Pathways */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Consultation &amp; Funding Pathways
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Patient Booking Pathways: Insured Care &amp; Fixed-Price Self-Funding
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    Spire Hartswood Hospital accommodates both privately insured and self-funding patients with transparent pricing:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Private Medical Insurance</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        Mr Shankar is fee-assured and recognised across all major UK health insurance providers:
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1 mb-4">
                        <li>&bull; <strong>Bupa</strong> (Consultant ID: 038414 / Spire Hartswood listed)</li>
                        <li>&bull; <strong>AXA Health</strong>, <strong>Aviva</strong>, <strong>Vitality</strong></li>
                        <li>&bull; <strong>WPA</strong>, <strong>Cigna</strong>, <strong>Healix</strong>, <strong>Police Mutual</strong></li>
                      </ul>
                      <p className="text-xs text-slate-500 italic">
                        Please obtain an authorization code from your insurer prior to attending. A GP referral letter is generally required by insurers.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Self-Pay Fixed-Price Packages</h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        Spire Healthcare provides transparent, all-inclusive package pricing for surgical joint replacement:
                      </p>
                      <ul className="text-xs text-slate-700 space-y-1 mb-4">
                        <li>&bull; <strong>Initial Consultation:</strong> £250</li>
                        <li>&bull; <strong>Follow-up Consultation:</strong> £200</li>
                        <li>&bull; <strong>Fixed-Price Surgery:</strong> Covers surgeon fee, anaesthetist fee, operating theatre time, prosthetic implants, private accommodation, medications, and physiotherapy.</li>
                        <li>&bull; <strong>Direct Self-Referral:</strong> Self-paying patients do not strictly require a GP referral letter.</li>
                      </ul>
                      <p className="text-xs text-slate-500 italic">
                        Spire Healthcare offers interest-bearing and interest-free finance options to help spread treatment charges over time.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Hospital Appointments &amp; Enquiries:</span>
                      <span className="text-xs text-slate-600">Telephone <strong>01277 266 766</strong> (Appointments: <strong>01277 266 777</strong>) &bull; Practice Secretary: <strong>07587 765888</strong></span>
                    </div>
                    <a
                      href={SPIRE_HARTSWOOD_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1B4965] hover:bg-[#13364B] text-white px-4 py-2 rounded-lg text-xs font-bold shrink-0 transition-colors"
                    >
                      Book on Spire Healthcare &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Section 6: Travel & Parking */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Travel &amp; Directions
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Hospital Address, Directions &amp; Free On-Site Parking
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    Spire Hartswood Hospital is situated in Great Warley, Brentwood, Essex, in peaceful landscaped grounds with outstanding road access:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-700 mb-6">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Hospital Address</strong>
                      <p>Spire Hartswood Hospital<br />Eagle Way, Great Warley<br />Brentwood, Essex<br /><strong>CM13 3LE</strong></p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Road &amp; Motorway Access</strong>
                      <p>Superbly positioned close to the <strong>M25 (Junction 28 &amp; 29)</strong> and <strong>A12</strong>. Accessible within 15–20 minutes from Upminster, Hornchurch, Romford, Basildon, and Chelmsford.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-slate-900 block text-sm mb-1">Rail &amp; Public Transport</strong>
                      <p><strong>Brentwood Station:</strong> Approx. 5 minutes by car or taxi (Elizabeth Line).<br /><strong>Shenfield Station:</strong> Approx. 10 minutes by taxi (Elizabeth Line &amp; Greater Anglia mainline).</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                    <strong>Complimentary Parking:</strong> Generous free on-site parking is situated directly outside the hospital entrance, with step-free accessible parking spaces immediately adjoining reception.
                  </div>
                </div>
              </div>

              {/* Section 7: FAQs */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Patient Guidance
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Frequently Asked Questions: Spire Hartswood Hospital
                  </h2>

                  <div className="space-y-4">
                    {spireFaqs.map((faq, i) => (
                      <div key={i} className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                          {faq.q}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 8: Contextual Internal Links */}
              <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  Explore Related Procedures &amp; Practice Locations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <a href="/computer-assisted-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/computer-assisted-knee-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Computer-Navigated Knee &rarr;
                  </a>
                  <a href="/revision-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/revision-hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Revision Hip Replacement &rarr;
                  </a>
                  <a href="/hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Total Hip Replacement &rarr;
                  </a>
                  <a href="/knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/knee-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Total Knee Replacement &rarr;
                  </a>
                  <a href="/partial-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/partial-knee-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Partial Knee Replacement &rarr;
                  </a>
                  <a href="/nuffield-brentwood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('/nuffield-brentwood-hospital'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Nuffield Health Brentwood &rarr;
                  </a>
                  <a href="/about-mr-shivakumar-shankar" onClick={(e) => { e.preventDefault(); onNavigate('/about-mr-shivakumar-shankar'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    About Mr Shivakumar Shankar &rarr;
                  </a>
                  <a href="/reviews" onClick={(e) => { e.preventDefault(); onNavigate('/reviews'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Patient Reviews &amp; Outcomes &rarr;
                  </a>
                  <a href="/book-consultation" onClick={(e) => { e.preventDefault(); onNavigate('/book-consultation'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-[#1B4965] border border-slate-200 transition-colors">
                    Book Private Consultation &rarr;
                  </a>
                </div>
              </div>
            </div>
          ) : mode === 'essex' ? (
            /* ======================================================== */
            /* DEDICATED VIEW: ESSEX HIP, KNEE & REVISION SURGEON       */
            /* ======================================================== */
            <div className="space-y-12">
              {/* Quick Contact & Action Bar */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
                    Essex Specialist Orthopaedic Practice &bull; Brentwood Clinics
                  </span>
                  <h2 className="text-xl font-black text-slate-900">
                    Consultations with Mr Shivakumar Shankar in Essex
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    Private clinics at Nuffield Health Brentwood (Shenfield Rd, CM15 8EH) and Spire Hartswood Hospital (Eagle Way, CM13 3LE). Practice Secretary (Remya Rexlin): <strong>07587 765888</strong> / <strong>02035230621</strong>.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={() => onBook()}
                    className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <Calendar size={14} />
                    <span>Book Consultation</span>
                  </button>
                  <a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
                  >
                    Contact Secretary
                  </a>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Arthroplasty Volume</div>
                  <div className="text-base font-black text-slate-900 mb-1">3,000+ Joint Surgeries</div>
                  <p className="text-xs text-slate-600 leading-relaxed">High-volume consultant surgeon across primary, complex, and revision hip and knee procedures over 9+ years.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-emerald-700 tracking-wider mb-1">Robotic Series</div>
                  <div className="text-base font-black text-slate-900 mb-1">100+ MAKO Surgeries</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Personal surgical series of over 100 MAKO robotic-arm assisted procedures personally performed by Mr Shankar.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Tertiary Training</div>
                  <div className="text-base font-black text-slate-900 mb-1">RNOH Stanmore Fellowship</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Subspecialty joint reconstruction fellowship at the UK premier tertiary orthopaedic hospital.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-indigo-700 tracking-wider mb-1">Hospital Base</div>
                  <div className="text-base font-black text-slate-900 mb-1">Two Brentwood Hospitals</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Private practice at Nuffield Health Brentwood and Spire Hartswood, accessible across Essex via M25/A12.</p>
                </div>
              </div>

              {/* Section 1: Overview */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Specialist Orthopaedic Practice
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Specialist Consultant Orthopaedic Practice Across Essex
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Mr Shivakumar Shankar is a fellowship-trained Consultant Orthopaedic Hip and Knee Surgeon providing expert clinical care for patients throughout Essex, including Brentwood, Shenfield, Romford, Upminster, Billericay, Basildon, Chelmsford, and Southend-on-Sea. He holds substantive NHS appointments at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT)—where he has served as Clinical Director and NHS Clinical Lead for Trauma and Orthopaedics—and conducts established private practice at Nuffield Health Brentwood Hospital and Spire Hartswood Hospital.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    With more than 3,000 joint replacement procedures performed over nine years of consultant practice, Mr Shankar offers comprehensive management for hip osteoarthritis, avascular necrosis, knee arthritis, meniscal injuries, and failed joint replacements.
                  </p>
                </div>
              </div>

              {/* Section 2: Revision Hip Replacement (Crucial Stage 6 Section) */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#1B4965] shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#1B4965] px-3 py-1 rounded-full mb-3 inline-block">
                    Tertiary Specialist Arthroplasty
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Revision Hip Replacement Surgery in Essex — Mr Shivakumar Shankar
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Revision total hip replacement is a highly demanding surgical discipline requiring advanced biomechanical expertise, meticulous surgical technique, and extensive understanding of bone reconstruction. While primary hip replacements routinely achieve 15 to 25 years of reliable survivorship, implants may eventually fail due to aseptic loosening, polyethylene bearing wear, periprosthetic osteolysis, recurrent dislocation, fracture, or mechanical problems.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Drawing on advanced specialist fellowship training at the Royal National Orthopaedic Hospital (RNOH) in Stanmore, Mr Shankar performs revision hip replacement surgery across both private and NHS hospital settings in Essex:
                  </p>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 mb-6 text-xs sm:text-sm text-slate-700 space-y-2">
                    <p>
                      <strong>Private Hospital Practice (Nuffield &amp; Spire Brentwood):</strong> Revision hip procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar following individual clinical assessment and appropriate pre-operative investigations. These may include selected revision hip replacement procedures for implant loosening, wear, instability or other mechanical problems, depending on the complexity of the case and suitability for the hospital.
                    </p>
                    <p>
                      <strong>NHS Hospital Practice (BHRUT):</strong> Mr Shankar also undertakes complex revision hip replacement surgery and complex hip reconstruction within his NHS hospital practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). Complex revision procedures are managed within the appropriate NHS surgical setting, with access to specialist multidisciplinary assessment, complex reconstruction resources and perioperative support as clinically required.
                    </p>
                    <p className="text-slate-500 italic text-xs pt-1">
                      The decision regarding the appropriate hospital and surgical pathway depends on the complexity of the revision, patient comorbidities, anticipated reconstructive requirements and available hospital resources.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                        <CheckCircle2 size={16} className="text-[#1B4965]" /> Indications for Revision Assessment
                      </h3>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                        <li>Aseptic loosening of acetabular cup or femoral stem</li>
                        <li>Polyethylene wear and osteolysis (bone resorption)</li>
                        <li>Recurrent hip dislocation or prosthetic instability</li>
                        <li>Periprosthetic fracture around an existing hip stem</li>
                        <li>Suspected periprosthetic joint infection (PJI)</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                        <CheckCircle2 size={16} className="text-[#1B4965]" /> Systematic Diagnostic Protocol
                      </h3>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                        <li>Weight-bearing radiographs &amp; pelvic tilt assessment</li>
                        <li>Inflammatory blood markers (ESR, CRP) to rule out infection</li>
                        <li>High-resolution MARS CT scanning to quantify bone loss</li>
                        <li>Sterile image-guided joint aspiration when indicated</li>
                        <li>Modular exchange vs full component reconstruction</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    Note: Revision hip surgery is technically complex and tailored to each patient&apos;s unique anatomical bone stock. Patients with unexplained hip pain following previous surgery benefit from thorough clinical and radiological appraisal.
                  </p>
                </div>
              </div>

              {/* Section 3: Primary Hip & Muscle-Sparing */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-3 inline-block border border-emerald-200">
                    Primary Arthroplasty
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Primary Hip Replacement &amp; Minimally Invasive Approaches
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    For patients with end-stage arthritis of the hip, Mr Shankar provides conventional total hip replacement, robotic-assisted total hip replacement, and minimally invasive muscle-sparing approaches including the Rottinger (anterolateral) and Direct Anterior approaches.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    By accessing the hip through natural intermuscular planes without detaching the gluteal abductor tendons from the greater trochanter, muscle-sparing techniques are designed to support early dynamic stability, reduce post-operative soft-tissue pain, and allow patients to mobilise safely without strict traditional movement restrictions where clinically appropriate.
                  </p>
                </div>
              </div>

              {/* Section 4: Knee Reconstruction & Technology */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-50 px-3 py-1 rounded-full mb-3 inline-block border border-indigo-200">
                    Knee Reconstruction
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Advanced Knee Replacement: Robotic &amp; Computer Navigation
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Mr Shankar provides both partial (unicompartmental) and total knee replacement, as well as day-case arthroscopic meniscal surgery. Depending on the hospital facility selected in Brentwood:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 text-sm mb-1 text-emerald-700">Nuffield Health Brentwood Hospital</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Features Stryker MAKO robotic-arm assistance utilizing patient-specific 3D CT pre-operative virtual planning and stereotactic haptic guidance for total and partial knee replacement.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 text-sm mb-1 text-[#1B4965]">Spire Hartswood Hospital</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Features optical infrared computer navigation for total knee replacement, providing live intra-operative kinematic alignment without requiring pre-operative CT scans or femoral intramedullary canal violation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Hospital Locations */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Brentwood Practice Locations
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Private Practice Locations in Brentwood, Essex
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    Mr Shankar consults privately at two premier independent hospital facilities in Brentwood, both offering dedicated laminar-flow operating suites, advanced cross-sectional imaging, en-suite inpatient accommodation, and complimentary on-site parking:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/50 space-y-3">
                      <h3 className="text-base font-bold text-slate-900">Nuffield Health Brentwood Hospital</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Shenfield Road, Brentwood, Essex CM15 8EH. 1 mile from Shenfield Rail Station. Main Hospital: <strong>01277 695695</strong> &bull; Appointments: <strong>01277 886737</strong>. Designated private robotic joint replacement centre.
                      </p>
                      <div className="pt-2">
                        <a href="/nuffield-brentwood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('/nuffield-brentwood-hospital'); }} className="text-xs font-bold text-[#1B4965] hover:underline">
                          View Nuffield Brentwood Details &rarr;
                        </a>
                      </div>
                    </div>
                    <div className="p-5 border border-slate-200 rounded-xl bg-slate-50/50 space-y-3">
                      <h3 className="text-base font-bold text-slate-900">Spire Hartswood Hospital</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Eagle Way, Great Warley, Brentwood, Essex CM13 3LE. 5 minutes from M25 (J28/29) and Brentwood Station. Main Hospital: <strong>01277 266766</strong> &bull; Appointments: <strong>01277 266777</strong>. Optical computer navigation centre.
                      </p>
                      <div className="pt-2">
                        <a href="/spire-hartswood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('/spire-hartswood-hospital'); }} className="text-xs font-bold text-[#1B4965] hover:underline">
                          View Spire Hartswood Details &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: Booking & Insurance */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-3 inline-block border border-emerald-200">
                    Appointments &amp; Funding
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Outpatient Consultations, Diagnostic Pathway &amp; Insurance
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Mr Shankar is recognised by all major UK private medical insurers including Bupa, AXA Health, Aviva, Vitality, and WPA. Insured patients are typically required by their insurer to obtain a GP referral letter prior to claiming consultation and imaging costs.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    For self-funding patients, direct booking is available without a mandatory GP referral. Consultation fees are transparent (£250 for initial consultation, £200 for follow-up review), and both hospitals provide comprehensive fixed-price packages covering surgical fees, anaesthesia, hospital stay, implants, and follow-up physiotherapy.
                  </p>
                  <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1">
                    <p><strong>Practice Secretary:</strong> Remya Rexlin</p>
                    <p><strong>Mobile:</strong> 07587 765888 &bull; <strong>Landline:</strong> 02035230621</p>
                    <p><strong>Email:</strong> medicalsecretary@shivakumarshankar.co.uk</p>
                  </div>
                </div>
              </div>

              {/* Section 7: FAQs */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Frequently Asked Questions — Hip, Knee &amp; Revision Surgery in Essex
                  </h2>
                  <div className="space-y-4">
                    {essexFaqs.map((faq, i) => (
                      <div key={i} className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                          {faq.q}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 8: Internal Links */}
              <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  Explore Related Specialist Procedures &amp; Practice Locations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <a href="/revision-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/revision-hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Revision Hip Replacement &rarr;
                  </a>
                  <a href="/robotic-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/robotic-hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Robotic Hip Replacement &rarr;
                  </a>
                  <a href="/minimally-invasive-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/minimally-invasive-hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Minimally Invasive Hip &rarr;
                  </a>
                  <a href="/computer-assisted-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/computer-assisted-knee-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Computer-Navigated Knee &rarr;
                  </a>
                  <a href="/partial-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/partial-knee-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Partial Knee Replacement &rarr;
                  </a>
                  <a href="/nuffield-brentwood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('/nuffield-brentwood-hospital'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Nuffield Health Brentwood &rarr;
                  </a>
                  <a href="/spire-hartswood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('/spire-hartswood-hospital'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Spire Hartswood Hospital &rarr;
                  </a>
                  <a href="/london-hip-knee-surgeon" onClick={(e) => { e.preventDefault(); onNavigate('/london-hip-knee-surgeon'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    London Hip &amp; Knee Surgeon &rarr;
                  </a>
                  <a href="/book-consultation" onClick={(e) => { e.preventDefault(); onNavigate('/book-consultation'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-[#1B4965] border border-slate-200 transition-colors">
                    Book Private Consultation &rarr;
                  </a>
                </div>
              </div>
            </div>
          ) : mode === 'london' ? (
            /* ======================================================== */
            /* DEDICATED VIEW: LONDON HIP, KNEE & REVISION SURGEON      */
            /* ======================================================== */
            <div className="space-y-12">
              {/* Quick Contact & Action Bar */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
                    London &amp; North East London Practice &bull; NHS Leadership &amp; Brentwood Private Clinics
                  </span>
                  <h2 className="text-xl font-black text-slate-900">
                    Hip, Knee &amp; Revision Care for London Patients
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    Substantive NHS Consultant base at BHRUT (Queen&apos;s and King George Hospitals). Private outpatient consultations and surgery at Brentwood hospitals (direct rail and M25 access). Secretary: <strong>07587 765888</strong>.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={() => onBook()}
                    className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <Calendar size={14} />
                    <span>Book Private Consultation</span>
                  </button>
                  <a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
                  >
                    Contact Secretary
                  </a>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">NHS Leadership</div>
                  <div className="text-base font-black text-slate-900 mb-1">Clinical Director BHRUT</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Substantive Consultant Orthopaedic Surgeon since 2017; former Clinical Director and NHS Clinical Lead for T&amp;O.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-emerald-700 tracking-wider mb-1">Tertiary Fellowship</div>
                  <div className="text-base font-black text-slate-900 mb-1">RNOH Stanmore</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Specialist subspecialty fellowship at the Royal National Orthopaedic Hospital in complex joint reconstruction.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-indigo-700 tracking-wider mb-1">London Transit</div>
                  <div className="text-base font-black text-slate-900 mb-1">Rail &amp; Elizabeth Line</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Direct rail from Liverpool Street (23–25 mins via Greater Anglia; 35–45 mins via Elizabeth Line) to Shenfield and Brentwood.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Surgical Experience</div>
                  <div className="text-base font-black text-slate-900 mb-1">3,000+ Joint Procedures</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Extensive volume across primary and revision arthroplasty, including 100+ personal MAKO robotic cases.</p>
                </div>
              </div>

              {/* Section 1: Clinical Leadership */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    NHS Leadership &bull; Greater London
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Consultant Arthroplasty Practice for London &amp; North East London
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Mr Shivakumar Shankar is an experienced Consultant Orthopaedic Hip and Knee Surgeon serving patients across London, Greater London, and North East London communities including Romford, Ilford, Barking, Dagenham, Havering, Redbridge, Stratford, and the City.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Appointed Consultant Orthopaedic Surgeon at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT) in 2017, Mr Shankar has contributed distinguished clinical leadership to the region as Clinical Director for Trauma and Orthopaedics, Interim &amp; Acting Clinical Lead, and Clinical Lead for Femur Fracture Management. He has spearheaded regional elective surgery recovery initiatives—including the acclaimed &apos;Bones R Us&apos; elective arthroplasty high-intensity theatre sprints—reducing waiting lists and delivering outstanding clinical outcomes.
                  </p>
                </div>
              </div>

              {/* Section 2: Revision Hip Replacement for London (Crucial Stage 6 Section) */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#1B4965] shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#1B4965] px-3 py-1 rounded-full mb-3 inline-block">
                    Tertiary Revision Arthroplasty
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Revision Hip Replacement Surgeon for London and North East London Patients
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Revision hip arthroplasty involves replacing worn, loose, painful, or mechanically compromised components of a previous artificial hip joint. Because each revision procedure addresses unique anatomical bone deficits and soft-tissue alterations, it demands subspecialist training, meticulous pre-operative planning, and rigorous surgical execution.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Mr Shankar undertook advanced subspecialty fellowship training in complex joint reconstruction at the Royal National Orthopaedic Hospital (RNOH) in Stanmore, Greater London. He delivers revision hip surgery across complementary practice settings:
                  </p>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 mb-6 text-xs sm:text-sm text-slate-700 space-y-2">
                    <p>
                      <strong>Complex NHS Revision Arthroplasty (BHRUT):</strong> Within his substantive NHS practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT), Mr Shankar undertakes complex revision hip replacement surgery and complex hip reconstruction. Complex revision procedures are managed within the appropriate NHS surgical setting, with access to specialist multidisciplinary assessment, complex reconstruction resources and perioperative support as clinically required.
                    </p>
                    <p>
                      <strong>Private Practice in Brentwood:</strong> For private patients from London, selected revision hip replacement procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar at Nuffield Health Brentwood Hospital and Spire Hartswood Hospital following individual clinical assessment and appropriate pre-operative investigations.
                    </p>
                    <p className="text-slate-500 italic text-xs pt-1">
                      The decision regarding the appropriate hospital and surgical pathway depends on the complexity of the revision, patient comorbidities, anticipated reconstructive requirements and available hospital resources.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                        <CheckCircle2 size={16} className="text-[#1B4965]" /> Common Indications for Revision
                      </h3>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                        <li>Aseptic loosening without infection</li>
                        <li>Polyethylene wear and peri-implant osteolysis</li>
                        <li>Recurrent hip dislocation or soft tissue instability</li>
                        <li>Periprosthetic fracture around a previously stable stem</li>
                        <li>Deep periprosthetic joint infection (PJI)</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                        <CheckCircle2 size={16} className="text-[#1B4965]" /> Systematic Investigation Pathway
                      </h3>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                        <li>Comprehensive history of previous surgery and pain profile</li>
                        <li>Serological markers (ESR, CRP) to exclude low-grade infection</li>
                        <li>Low-dose weight-bearing radiographs &amp; component orientation</li>
                        <li>MARS CT imaging to quantify 3D bone loss</li>
                        <li>Sterile synovial fluid aspiration where indicated</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    Note: Revision hip replacement is an advanced, individualised procedure. Patients experiencing chronic groin pain, clicking, thigh pain, or walking instability following earlier hip surgery are advised to seek timely consultant appraisal.
                  </p>
                </div>
              </div>

              {/* Section 3: Primary Joint Arthroplasty */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-3 inline-block border border-emerald-200">
                    Primary Joint Reconstruction
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Specialist Primary Hip &amp; Knee Arthroplasty
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    In addition to revision surgery, Mr Shankar provides comprehensive care for primary hip and knee arthritis, including muscle-sparing hip approaches (Rottinger and Direct Anterior), Stryker MAKO robotic-arm assisted total hip replacement, MAKO robotic-assisted knee replacement, optical computer-navigated total knee arthroplasty, and keyhole knee arthroscopy.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Having completed more than 3,000 joint replacement procedures throughout his career, Mr Shankar prioritises patient-specific surgical alignment, meticulous soft-tissue balancing, and enhanced recovery protocols designed to restore functional mobility safely.
                  </p>
                </div>
              </div>

              {/* Section 4: Accessing Private Practice from London (Crucial Clear Location Boundary) */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Private Practice Location &bull; Brentwood
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Accessing Mr Shankar&apos;s Private Practice from London
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Mr Shankar&apos;s private outpatient consultation clinics and operating lists are held at two leading independent hospitals in Brentwood, Essex: <strong>Nuffield Health Brentwood Hospital</strong> (Shenfield Road, CM15 8EH) and <strong>Spire Hartswood Hospital</strong> (Eagle Way, Great Warley, CM13 3LE).
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    Rather than maintaining central London Harley Street consulting rooms, Mr Shankar bases his private practice in Brentwood. This offers London patients state-of-the-art laminar-flow operating suites, access to Stryker MAKO robotics and optical navigation, peaceful parkland surroundings, dedicated inpatient physiotherapy departments, complimentary on-site parking, and rapid Elizabeth Line transit.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                        <Train size={15} className="text-[#1B4965]" /> Rail &amp; Elizabeth Line Transit
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Greater Anglia fast trains reach Shenfield from London Liverpool Street in approx. 23&ndash;25 mins, while direct Elizabeth Line services connect Paddington, Farringdon, and Liverpool Street to Brentwood and Shenfield in approx. 35&ndash;45 mins, followed by a 5-minute taxi.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                        <Car size={15} className="text-[#1B4965]" /> Road &amp; Motorway Access
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Directly off the M25 (Junction 28 and Junction 29) and the A12. Both hospitals feature generous, free patient and visitor parking directly outside their main entrances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: NHS Referral Pathway */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full mb-3 inline-block border border-sky-200">
                    NHS Referral Pathway
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Substantive NHS Practice at BHRUT (Queen&apos;s &amp; King George Hospitals)
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    For NHS patients across Greater London and Essex, Mr Shankar provides substantive consultant care within Barking, Havering and Redbridge University Hospitals NHS Trust. Acute complex trauma and major admissions are based at Queen&apos;s Hospital in Romford, while high-volume planned elective joint replacement surgery is centred at King George Hospital in Goodmayes.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    NHS appointments are funded fully by the NHS and require a formal GP referral submitted through the NHS e-Referral Service (e-RS) addressed to the Trauma and Orthopaedic Department at BHRUT.
                  </p>
                </div>
              </div>

              {/* Section 6: Consultations & Fees */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-3 inline-block border border-emerald-200">
                    Appointments &amp; Pricing
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Outpatient Consultations, Direct Booking &amp; Fees
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    London private patients benefit from transparent pricing and comprehensive insurance recognition. Mr Shankar is fee-assured and accredited by Bupa, AXA Health, Aviva, Vitality, and WPA. Self-funding patients can book outpatient appointments directly (£250 initial, £200 follow-up) without waiting on NHS lists, with all-inclusive surgery packages available.
                  </p>
                  <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1">
                    <p><strong>Practice Secretary:</strong> Remya Rexlin</p>
                    <p><strong>Telephone:</strong> 07587 765888 / 02035230621</p>
                    <p><strong>Email:</strong> medicalsecretary@shivakumarshankar.co.uk</p>
                  </div>
                </div>
              </div>

              {/* Section 7: FAQs */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Frequently Asked Questions — London &amp; North East London Patients
                  </h2>
                  <div className="space-y-4">
                    {londonFaqs.map((faq, i) => (
                      <div key={i} className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                          {faq.q}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 8: Internal Links */}
              <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  Explore Related Procedures &amp; Practice Locations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <a href="/revision-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/revision-hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Revision Hip Replacement &rarr;
                  </a>
                  <a href="/robotic-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/robotic-hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Robotic Hip Replacement &rarr;
                  </a>
                  <a href="/minimally-invasive-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/minimally-invasive-hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Minimally Invasive Hip &rarr;
                  </a>
                  <a href="/computer-assisted-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/computer-assisted-knee-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Computer-Navigated Knee &rarr;
                  </a>
                  <a href="/essex-hip-knee-surgeon" onClick={(e) => { e.preventDefault(); onNavigate('/essex-hip-knee-surgeon'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Essex Hip &amp; Knee Surgeon &rarr;
                  </a>
                  <a href="/nuffield-brentwood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('/nuffield-brentwood-hospital'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Nuffield Health Brentwood &rarr;
                  </a>
                  <a href="/spire-hartswood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('/spire-hartswood-hospital'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Spire Hartswood Hospital &rarr;
                  </a>
                  <a href="/queens-hospital-romford" onClick={(e) => { e.preventDefault(); onNavigate('/queens-hospital-romford'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Queen&apos;s Hospital Romford (NHS) &rarr;
                  </a>
                  <a href="/book-consultation" onClick={(e) => { e.preventDefault(); onNavigate('/book-consultation'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-[#1B4965] border border-slate-200 transition-colors">
                    Book Private Consultation &rarr;
                  </a>
                </div>
              </div>
            </div>
          ) : mode === 'queens' ? (
            /* ======================================================== */
            /* DEDICATED VIEW: QUEEN'S HOSPITAL ROMFORD (NHS)           */
            /* ======================================================== */
            <div className="space-y-12">
              {/* Trust Action Bar */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
                    BHRUT NHS Trust &bull; Major Acute Hospital &amp; Trauma Centre
                  </span>
                  <h2 className="text-xl font-black text-slate-900">
                    Queen&apos;s Hospital, Romford &bull; Mr Shivakumar Shankar
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    Rom Valley Way, Romford, Greater London / Essex RM7 0AG. Trust Switchboard: <strong>01708 435000</strong> &bull; Substantive NHS Consultant in Trauma &amp; Orthopaedics &bull; Private Practice Secretary: <strong>07587 765888</strong>.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href="#referral-pathway"
                    className="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <span>NHS e-RS Referral Guide</span>
                    <span>&darr;</span>
                  </a>
                  <button
                    onClick={() => onBook()}
                    className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
                  >
                    Private Consultation Option
                  </button>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">NHS Consultant Since 2017</div>
                  <div className="text-base font-black text-slate-900 mb-1">Substantive BHRUT Post</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Former Clinical Director &amp; NHS Clinical Lead for Trauma and Orthopaedics; Femur Fracture &amp; Infection Control Lead.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-emerald-700 tracking-wider mb-1">Trauma Centre Context</div>
                  <div className="text-base font-black text-slate-900 mb-1">Major Acute Hospital</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Regional acute trauma centre delivering 24/7 emergency surgical care, fragility fracture management, and peri-prosthetic fracture repair.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Complex Revision (NHS)</div>
                  <div className="text-base font-black text-slate-900 mb-1">BHRUT Trust-Level Scope</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Complex revision hip replacement and reconstruction personally undertaken by Mr Shankar with MDT perioperative support.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Location &amp; Access</div>
                  <div className="text-base font-black text-slate-900 mb-1">Rom Valley Way, Romford</div>
                  <p className="text-xs text-slate-600 leading-relaxed">RM7 0AG. Close to Romford Station (Elizabeth Line). Multi-storey parking and direct TfL bus routes (5, 128, 175, 193, 365, 496, 498, 499).</p>
                </div>
              </div>

              {/* Section 1: Substantive NHS Consultant Appointment & Leadership */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    NHS Consultant Base &bull; Barking, Havering and Redbridge University Hospitals NHS Trust
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Substantive NHS Practice &amp; Senior Departmental Leadership
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Queen&apos;s Hospital in Romford serves as the substantive NHS consultant base for Mr Shivakumar Shankar within Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). Appointed as a substantive NHS Consultant in Trauma and Orthopaedics in 2017, Mr Shankar has dedicated years of clinical service to the communities of Havering, Barking and Dagenham, Redbridge, and south-west Essex (GMC Number: 6038414).
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Over his tenure at BHRUT, Mr Shankar has undertaken pivotal clinical leadership responsibilities. He has served as <strong>Clinical Director for Trauma and Orthopaedics</strong> and <strong>NHS Clinical Lead for Trauma and Orthopaedics</strong>, overseeing clinical governance, patient safety protocols, surgical training, and clinical effectiveness across the entire orthopaedic directorate. He has also fulfilled departmental lead roles as <strong>Clinical Lead for Femur Fracture Management</strong>—driving multidisciplinary pathway improvements for vulnerable elderly fracture patients—and <strong>Clinical Lead for Infection Control</strong>, implementing rigorous theatre protocols that uphold exemplary patient safety standards.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-slate-600">
                    Within the Trust, care is strategically coordinated across BHRUT&apos;s two main hospital sites: acute, emergency trauma, peri-prosthetic fracture management, and acute outpatient services operate at Queen&apos;s Hospital in Romford, while planned, routine elective joint replacements are primarily performed at King George Hospital&apos;s protected elective surgical centre in Goodmayes.
                  </p>
                </div>
              </div>

              {/* Section 2: Clinical Services & Arthroplasty Scope */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Clinical Services
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    NHS Orthopaedic Trauma, Joint Reconstruction &amp; Arthroplasty Services
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Acute Trauma &amp; Fracture Reconstruction</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        As a regional acute trauma centre, Queen&apos;s Hospital provides comprehensive 24/7 trauma care. Mr Shankar manages acute musculoskeletal injuries, complex peri-articular fractures, fragility hip fractures, and peri-prosthetic fractures around existing hip and knee replacements.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Hip &amp; Knee Joint Reconstruction</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Comprehensive investigation, non-operative management, and surgical treatment for severe hip and knee osteoarthritis, inflammatory arthritis, and secondary degenerative joint disease, coordinated through BHRUT multidisciplinary pathways.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Outpatient Fracture &amp; Arthroplasty Clinics</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Specialist consultant-led outpatient clinics for new GP referrals, fracture follow-up, post-operative arthroplasty surveillance, and assessment of painful or failing previous joint replacements.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Multidisciplinary Collaboration</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Close partnership with orthogeriatricians, specialist musculoskeletal physiotherapists, clinical nurse specialists, occupational therapists, and consultant microbiologists ensuring holistic patient care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Revision Hip Surgery Across NHS & Private Practice */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Clinical Scope of Practice
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Revision Hip Surgery — Scope of Practice Across Private &amp; NHS Practice
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Mr Shivakumar Shankar performs revision hip replacement surgery across both private and NHS hospital settings, with care structured according to patient clinical complexity, perioperative requirements, and institutional facilities:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-6 rounded-xl bg-[#EAF1F6] border border-blue-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] block mb-2">
                        NHS Hospital Practice &bull; BHRUT
                      </span>
                      <h3 className="text-lg font-black text-slate-900 mb-2">
                        Complex Revision Hip Replacement &amp; Reconstruction
                      </h3>
                      <p className="text-xs text-slate-700 leading-relaxed mb-3">
                        Mr Shankar undertakes complex revision hip replacement surgery and hip reconstruction within his NHS hospital practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT).
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Within BHRUT, complex revision cases are managed with access to specialist multidisciplinary assessment, complex reconstruction resources (including modular revision stems, trabecular metal acetabular augments, cages, and bone graft substitutes), and dedicated perioperative support, including intensive care (ITU) and high-dependency (HDU) monitoring.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                        Private Hospital Practice &bull; Brentwood
                      </span>
                      <h3 className="text-lg font-black text-slate-900 mb-2">
                        Selected Revision Hip Surgery in Private Hospitals
                      </h3>
                      <p className="text-xs text-slate-700 leading-relaxed mb-3">
                        At his private practice locations—Nuffield Health Brentwood Hospital and Spire Hartswood Hospital in Brentwood, Essex—revision hip procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar following individual clinical assessment and appropriate pre-operative investigations.
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        These include selected revision hip replacement procedures for implant loosening, component wear, instability, or mechanical issues, depending on case complexity and hospital suitability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: NHS Referral Pathway */}
              <div id="referral-pathway" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Patient Referral Guide
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    How NHS Patients Access Care via the NHS e-Referral Service (e-RS)
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    Under NHS Constitution rights, patients registered with an NHS GP in England have the right to choose the hospital and clinical team for their first consultant-led outpatient appointment:
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1">Consult Your General Practitioner (GP)</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Discuss your hip or knee joint symptoms, functional limitations, and conservative treatment history with your NHS GP. If surgical assessment is warranted, request a referral to the Trauma &amp; Orthopaedics department at BHRUT.
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1">Named Consultant Referral via NHS e-RS</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Your GP or practice administrative team submits your referral electronically through the NHS e-Referral Service (e-RS, formerly Choose &amp; Book), selecting Barking, Havering and Redbridge University Hospitals NHS Trust and naming <strong>Mr Shivakumar Shankar</strong> as the preferred consultant.
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">3</div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1">Clinical Triage &amp; Outpatient Appointment</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Referrals are clinically evaluated based on severity. The Trust central booking office will contact you with booking options or invite you to book an appointment through the NHS App or online portal.
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">4</div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1">Alternative: Private Consultation Pathway</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Patients seeking expedited consultant review without standard NHS waiting times can consult Mr Shankar privately at Nuffield Health Brentwood Hospital or Spire Hartswood Hospital in Brentwood, Essex. Contact his medical secretary (Remya Rexlin) on <strong>07587 765888</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Location, Public Transport & Visitor Amenities */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Hospital Location &amp; Access
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Location, Public Transport &amp; Parking at Queen&apos;s Hospital Romford
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Hospital Address</h3>
                      <p className="text-xs text-slate-700 leading-relaxed mb-2">
                        Queen&apos;s Hospital<br />
                        Rom Valley Way<br />
                        Romford, Greater London / Essex<br />
                        <strong>RM7 0AG</strong>
                      </p>
                      <p className="text-xs text-slate-500">Main Switchboard: 01708 435000</p>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Public Transport</h3>
                      <p className="text-xs text-slate-700 leading-relaxed mb-2">
                        <strong>Romford Station</strong> (Elizabeth Line, Greater Anglia, London Overground) is approx. 0.8 miles away.
                      </p>
                      <p className="text-xs text-slate-600">
                        Frequent direct TfL buses stop directly outside the hospital entrance: <strong>5, 128, 175, 193, 365, 496, 498, 499</strong>.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Parking &amp; Facilities</h3>
                      <p className="text-xs text-slate-700 leading-relaxed mb-2">
                        Multi-storey pay-and-display visitor car park on-site with automatic number plate recognition (ANPR).
                      </p>
                      <p className="text-xs text-slate-600">
                        Designated accessible Blue Badge bays, 20-minute patient drop-off bays, step-free access, on-site pharmacy, and cafes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: Frequently Asked Questions */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Patient Questions
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Frequently Asked Questions — Queen&apos;s Hospital Romford
                  </h2>
                  <div className="space-y-4 mt-6">
                    {queensFaqs.map((faq, idx) => (
                      <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                        <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 7: Internal Links */}
              <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  Explore Related Hospital Locations &amp; Arthroplasty Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <a href="/king-george-hospital-goodmayes" onClick={(e) => { e.preventDefault(); onNavigate('/king-george-hospital-goodmayes'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    King George Hospital Goodmayes (NHS) &rarr;
                  </a>
                  <a href="/nuffield-brentwood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('/nuffield-brentwood-hospital'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Nuffield Health Brentwood (Private) &rarr;
                  </a>
                  <a href="/spire-hartswood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('/spire-hartswood-hospital'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Spire Hartswood Hospital (Private) &rarr;
                  </a>
                  <a href="/revision-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/revision-hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Revision Hip Replacement &rarr;
                  </a>
                  <a href="/hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Total Hip Replacement &rarr;
                  </a>
                  <a href="/knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/knee-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Total Knee Replacement &rarr;
                  </a>
                  <a href="/about-mr-shivakumar-shankar" onClick={(e) => { e.preventDefault(); onNavigate('/about-mr-shivakumar-shankar'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    About Mr Shivakumar Shankar &rarr;
                  </a>
                  <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-[#1B4965] border border-slate-200 transition-colors">
                    Contact Practice Secretary &rarr;
                  </a>
                </div>
              </div>
            </div>
          ) : mode === 'king-george' ? (
            /* ======================================================== */
            /* DEDICATED VIEW: KING GEORGE HOSPITAL GOODMAYES (NHS)     */
            /* ======================================================== */
            <div className="space-y-12">
              {/* Trust Action Bar */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
                    BHRUT NHS Trust &bull; Dedicated Elective Surgical Centre
                  </span>
                  <h2 className="text-xl font-black text-slate-900">
                    King George Hospital, Goodmayes &bull; Mr Shivakumar Shankar
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    Barley Lane, Goodmayes, Ilford, Essex IG3 8YB. Trust Switchboard: <strong>020 8970 8000</strong> &bull; Elective Orthopaedic Surgical Hub &bull; Private Practice Secretary: <strong>07587 765888</strong>.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href="#referral-pathway"
                    className="bg-[#1B4965] hover:bg-[#13364B] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <span>NHS e-RS Referral Guide</span>
                    <span>&darr;</span>
                  </a>
                  <button
                    onClick={() => onBook()}
                    className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
                  >
                    Private Consultation Option
                  </button>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Protected Elective Hub</div>
                  <div className="text-base font-black text-slate-900 mb-1">Dedicated Clean Theatres</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Ring-fenced laminar airflow theatres isolated from emergency trauma surges, designed to protect elective capacity and minimise surgical cancellations.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-emerald-700 tracking-wider mb-1">Elective Recovery Lead</div>
                  <div className="text-base font-black text-slate-900 mb-1">&lsquo;Bones R Us&rsquo; &amp; HULK-10</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Pioneered high-intensity surgical sprints delivering high-volume hip and knee joint replacements to reduce post-pandemic backlogs.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Complex Revision (NHS)</div>
                  <div className="text-base font-black text-slate-900 mb-1">BHRUT Trust-Level Scope</div>
                  <p className="text-xs text-slate-600 leading-relaxed">Complex revision hip replacement and reconstruction personally undertaken by Mr Shankar with MDT perioperative support.</p>
                </div>
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-[11px] font-bold uppercase text-[#1B4965] tracking-wider mb-1">Location &amp; Access</div>
                  <div className="text-base font-black text-slate-900 mb-1">Barley Lane, Goodmayes</div>
                  <p className="text-xs text-slate-600 leading-relaxed">IG3 8YB. Goodmayes Station (Elizabeth Line) and Newbury Park (Central line). On-site pay-and-display parking and bus links (364, 387, 396, 173).</p>
                </div>
              </div>

              {/* Section 1: Dedicated Elective Surgical Hub */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Elective Orthopaedic Centre &bull; Barking, Havering and Redbridge University Hospitals NHS Trust
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    King George Hospital — Dedicated Elective Orthopaedic Surgical Hub
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    King George Hospital in Goodmayes, Ilford, serves as the designated, protected Elective Surgical Centre for Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT). While acute emergency trauma admissions are concentrated at Queen&apos;s Hospital in Romford, King George Hospital operates as a specialised, high-efficiency hub dedicated to planned inpatient and day-case surgery.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    A cornerstone of the King George elective model is the complete separation of planned elective beds and operating theatres from emergency medical and trauma pressures. Orthopaedic joint replacement lists are hosted in specialized ultra-clean laminar airflow theatre suites equipped with HEPA filtration, creating a sterile air curtain that substantially minimizes surgical site infection risks. Having served as <strong>Clinical Lead for Infection Control</strong> for the department, Mr Shivakumar Shankar enforces meticulous infection prevention protocols, MRSA screening, and enhanced surgical prophylaxis.
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-slate-600">
                    This ring-fenced elective arrangement provides patients across North East London and Essex with outstanding procedural reliability, substantially reduced risk of elective cancellation during seasonal winter bed pressures, and dedicated orthopaedic rehabilitation wards supported by specialist physiotherapists.
                  </p>
                </div>
              </div>

              {/* Section 2: Elective Recovery Leadership */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Elective Recovery Innovation
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Pioneering NHS Elective Recovery — &lsquo;Bones R Us&rsquo; &amp; HULK-10 Sprints
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    In the wake of unprecedented post-pandemic orthopaedic waiting list backlogs across the NHS, Mr Shivakumar Shankar championed innovative, high-intensity elective surgical recovery programmes at BHRUT that garnered regional and national recognition:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-2">&lsquo;Bones R Us&rsquo; Intensive Joint Sprints</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Mr Shankar spearheaded the celebrated &lsquo;Bones R Us&rsquo; intensive surgical recovery weekends at King George Hospital. By synchronizing multidisciplinary theatre staff, consultant anaesthetists, nursing teams, and dedicated physiotherapists, Mr Shankar personally completed high-volume joint replacement lists across dedicated weekends, dramatically accelerating access for long-waiting hip and knee patients.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-2">HULK-10 Elective Arthroplasty Sprints</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Building on this clinical model, Mr Shankar co-led the &lsquo;HULK-10&rsquo; high-intensity elective arthroplasty initiative. By streamlining pre-assessment, standardizing surgical trays, and implementing modern multimodal pain protocols, surgical teams safely carried out high volumes of complex and routine joint replacements, receiving acclaim across NHS London.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Revision Hip Surgery Across NHS & Private Practice */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Clinical Scope of Practice
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Revision Hip Surgery — Scope of Practice Across Private &amp; NHS Practice
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    Mr Shivakumar Shankar performs revision hip replacement surgery across both private and NHS hospital settings, with care structured according to patient clinical complexity, perioperative requirements, and institutional facilities:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-6 rounded-xl bg-[#EAF1F6] border border-blue-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] block mb-2">
                        NHS Hospital Practice &bull; BHRUT
                      </span>
                      <h3 className="text-lg font-black text-slate-900 mb-2">
                        Complex Revision Hip Replacement &amp; Reconstruction
                      </h3>
                      <p className="text-xs text-slate-700 leading-relaxed mb-3">
                        Mr Shankar undertakes complex revision hip replacement surgery and hip reconstruction within his NHS hospital practice at Barking, Havering and Redbridge University Hospitals NHS Trust (BHRUT).
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        Within BHRUT, complex revision cases are managed with access to specialist multidisciplinary assessment, complex reconstruction resources (including modular revision stems, trabecular metal acetabular augments, cages, and bone graft substitutes), and dedicated perioperative support, including intensive care (ITU) and high-dependency (HDU) monitoring.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                        Private Hospital Practice &bull; Brentwood
                      </span>
                      <h3 className="text-lg font-black text-slate-900 mb-2">
                        Selected Revision Hip Surgery in Private Hospitals
                      </h3>
                      <p className="text-xs text-slate-700 leading-relaxed mb-3">
                        At his private practice locations—Nuffield Health Brentwood Hospital and Spire Hartswood Hospital in Brentwood, Essex—revision hip procedures suitable for the facilities and perioperative support available at private hospitals are undertaken by Mr Shankar following individual clinical assessment and appropriate pre-operative investigations.
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        These include selected revision hip replacement procedures for implant loosening, component wear, instability, or mechanical issues, depending on case complexity and hospital suitability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: NHS Referral Pathway */}
              <div id="referral-pathway" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Patient Referral Guide
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    How NHS Patients Access Care via the NHS e-Referral Service (e-RS)
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    NHS patients in Essex, London, and nationwide can access Mr Shankar&apos;s NHS elective orthopaedic service through the electronic referral pathway:
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">1</div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1">GP Consultation &amp; Assessment</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Visit your GP for physical examination and weight-bearing X-rays. If joint replacement is considered appropriate, request an elective referral to BHRUT Trauma &amp; Orthopaedics.
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">2</div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1">Electronic e-RS Referral</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Your GP practice sends your referral via the NHS e-Referral Service to Barking, Havering and Redbridge University Hospitals NHS Trust, naming <strong>Mr Shivakumar Shankar</strong> as the consultant orthopaedic surgeon.
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">3</div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1">Pre-Assessment &amp; Elective Surgery at King George</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Following clinic review, patients attend Joint School and pre-operative anaesthetic assessment before planned surgery in King George Hospital&apos;s protected clean elective theatres.
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white flex items-center justify-center font-bold text-xs shrink-0">4</div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1">Fast-Track Private Option</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          For patients seeking immediate consultation and rapid surgery dates without NHS waitlists, Mr Shankar consults privately in Brentwood at Nuffield Health Brentwood and Spire Hartswood Hospitals. Contact his practice secretary on <strong>07587 765888</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Location, Transport & Amenities */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Hospital Location &amp; Travel
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Location, Public Transport &amp; Parking at King George Hospital Goodmayes
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Hospital Address</h3>
                      <p className="text-xs text-slate-700 leading-relaxed mb-2">
                        King George Hospital<br />
                        Barley Lane<br />
                        Goodmayes, Ilford, Essex / London<br />
                        <strong>IG3 8YB</strong>
                      </p>
                      <p className="text-xs text-slate-500">Trust Switchboard: 020 8970 8000</p>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Public Transport</h3>
                      <p className="text-xs text-slate-700 leading-relaxed mb-2">
                        <strong>Goodmayes Rail Station</strong> (Elizabeth Line) is approx. 1 mile away. <strong>Newbury Park</strong> (Central line) is also nearby.
                      </p>
                      <p className="text-xs text-slate-600">
                        Frequent direct TfL buses stop directly within the hospital grounds: <strong>173, 364, 387, 396</strong>.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <h3 className="text-base font-bold text-slate-900 mb-2">Parking &amp; Facilities</h3>
                      <p className="text-xs text-slate-700 leading-relaxed mb-2">
                        On-site pay-and-display visitor parking with designated Blue Badge spaces outside the main elective entrance.
                      </p>
                      <p className="text-xs text-slate-600">
                        Drop-off bays, step-free access throughout, outpatient pharmacy, hospital restaurant, and rehabilitation physiotherapy gym.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6: Frequently Asked Questions */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="max-w-4xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B4965] bg-[#EAF1F6] px-3 py-1 rounded-full mb-3 inline-block">
                    Patient Questions
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Frequently Asked Questions — King George Hospital Goodmayes
                  </h2>
                  <div className="space-y-4 mt-6">
                    {kingGeorgeFaqs.map((faq, idx) => (
                      <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                        <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 7: Internal Links */}
              <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  Explore Related Hospital Locations &amp; Arthroplasty Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <a href="/queens-hospital-romford" onClick={(e) => { e.preventDefault(); onNavigate('/queens-hospital-romford'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Queen&apos;s Hospital Romford (NHS) &rarr;
                  </a>
                  <a href="/nuffield-brentwood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('/nuffield-brentwood-hospital'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Nuffield Health Brentwood (Private) &rarr;
                  </a>
                  <a href="/spire-hartswood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('/spire-hartswood-hospital'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Spire Hartswood Hospital (Private) &rarr;
                  </a>
                  <a href="/revision-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/revision-hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Revision Hip Replacement &rarr;
                  </a>
                  <a href="/hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/hip-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Total Hip Replacement &rarr;
                  </a>
                  <a href="/knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('/knee-replacement'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    Total Knee Replacement &rarr;
                  </a>
                  <a href="/about-mr-shivakumar-shankar" onClick={(e) => { e.preventDefault(); onNavigate('/about-mr-shivakumar-shankar'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors">
                    About Mr Shivakumar Shankar &rarr;
                  </a>
                  <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }} className="p-3 bg-white hover:bg-[#EAF1F6] rounded-xl font-bold text-[#1B4965] border border-slate-200 transition-colors">
                    Contact Practice Secretary &rarr;
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* ======================================================== */
            /* REGIONAL OVERVIEW / NHS HUB VIEW                         */
            /* ======================================================== */
            <div>
              {/* Clear Distinction Banner */}
              <div className="mb-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase font-extrabold text-[#1B4965] tracking-wider block mb-1">
                    Clinical Practice Structure
                  </span>
                  <h2 className="text-xl font-black text-slate-900">
                    Distinct NHS and Private Hospital Services
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    Patients can consult Mr Shankar privately at Spire Hartswood Hospital or Nuffield Health Brentwood Hospital in Brentwood, Essex. NHS patients are treated within Barking, Havering and Redbridge University Hospitals NHS Trust at Queen's and King George Hospitals via GP referral.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                    Private Practice: Brentwood
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold">
                    NHS Trust: BHRUT
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* PRIVATE HOSPITALS COLUMN */}
                <div className="space-y-6">
                  <div className="border-b-2 border-[#1B4965] pb-2 flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900">
                      Private Practice Locations
                    </h3>
                    <span className="text-xs uppercase font-bold text-[#1B4965] bg-[#EAF1F6] px-2.5 py-0.5 rounded">
                      Insured &amp; Self-Paying
                    </span>
                  </div>

                  {/* Spire Hartswood */}
                  <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-[#1B4965] transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-black text-slate-900">
                          Spire Hartswood Hospital
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                          <MapPin size={13} className="text-[#1B4965]" /> Brentwood, Essex &bull; CM13 3LE
                        </p>
                      </div>
                      <a
                        href="/spire-hartswood-hospital"
                        onClick={(e) => { e.preventDefault(); onNavigate('/spire-hartswood-hospital'); }}
                        className="text-xs font-bold text-[#1B4965] hover:underline"
                      >
                        View Full Details →
                      </a>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      Eagle Way, Great Warley, Brentwood, Essex CM13 3LE. State-of-the-art laminar airflow theatres, optical computer-navigated knee replacement (MAKO robotics not offered at Spire), on-site MRI/CT diagnostics, dedicated inpatient physiotherapy, and en-suite private rooms. 5 minutes from Brentwood Station (Elizabeth Line).
                    </p>

                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                      <a
                        href={SPIRE_HARTSWOOD_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1B4965] hover:bg-[#13364B] text-white px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <span>Spire Online Portal</span>
                        <ExternalLink size={12} />
                      </a>
                      <button
                        onClick={() => onBook('Spire Hartswood Hospital')}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-2 rounded-lg text-xs font-bold transition-colors"
                      >
                        Request Consultation
                      </button>
                    </div>
                  </div>

                  {/* Nuffield Brentwood */}
                  <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-[#1B4965] transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-black text-slate-900">
                          Nuffield Health Brentwood Hospital
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                          <MapPin size={13} className="text-[#1B4965]" /> Brentwood, Essex &bull; CM15 8EH
                        </p>
                      </div>
                      <a
                        href="/nuffield-brentwood-hospital"
                        onClick={(e) => { e.preventDefault(); onNavigate('/nuffield-brentwood-hospital'); }}
                        className="text-xs font-bold text-[#1B4965] hover:underline"
                      >
                        View Full Details →
                      </a>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      Shenfield Road, Brentwood, Essex CM15 8EH. Designated private robotic surgical suite for Stryker MAKO robotic-arm assisted total hip, total knee, and partial knee replacements, 3D CT pre-op planning, rehabilitation gym, and fixed-price packages. Easily accessible from Shenfield Station.
                    </p>

                    <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                      <a
                        href={NUFFIELD_BRENTWOOD_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-700 hover:bg-emerald-800 text-white px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <span>Nuffield Online Portal</span>
                        <ExternalLink size={12} />
                      </a>
                      <button
                        onClick={() => onBook('Nuffield Health Brentwood Hospital')}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-2 rounded-lg text-xs font-bold transition-colors"
                      >
                        Request Consultation
                      </button>
                    </div>
                  </div>
                </div>

                {/* NHS HOSPITALS COLUMN */}
                <div className="space-y-6">
                  <div className="border-b-2 border-sky-600 pb-2 flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900">
                      NHS Hospital Locations (BHRUT)
                    </h3>
                    <span className="text-xs uppercase font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded">
                      NHS Trust Practice
                    </span>
                  </div>

                  {/* Queen's Hospital Romford */}
                  <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-sky-500 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-black text-slate-900">
                          Queen's Hospital, Romford
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                          <MapPin size={13} className="text-sky-600" /> Romford, Greater London &bull; RM7 0AG
                        </p>
                      </div>
                      <a
                        href="/queens-hospital-romford"
                        onClick={(e) => { e.preventDefault(); onNavigate('/queens-hospital-romford'); }}
                        className="text-xs font-bold text-sky-600 hover:underline"
                      >
                        View Details →
                      </a>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      Barking, Havering and Redbridge University Hospitals NHS Trust. Major acute regional hospital and trauma centre where Mr Shankar was appointed Consultant Orthopaedic Surgeon in 2017 and has served in senior clinical leadership roles. Within his NHS hospital practice at BHRUT, Mr Shankar undertakes complex revision hip replacement surgery and complex hip reconstruction, with access to specialist multidisciplinary assessment, complex reconstruction resources and perioperative support across BHRUT facilities.
                    </p>

                    <div className="pt-3 border-t border-slate-100 text-xs text-slate-600">
                      <p><strong>NHS Access:</strong> Referrals must be made via your NHS GP through the NHS e-Referral Service (e-RS) addressed to the Orthopaedic Department at Queen's Hospital.</p>
                    </div>
                  </div>

                  {/* King George Hospital Goodmayes */}
                  <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-sky-500 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-black text-slate-900">
                          King George Hospital, Goodmayes
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                          <MapPin size={13} className="text-sky-600" /> Goodmayes, Ilford, Greater London &bull; IG3 8YB
                        </p>
                      </div>
                      <a
                        href="/king-george-hospital-goodmayes"
                        onClick={(e) => { e.preventDefault(); onNavigate('/king-george-hospital-goodmayes'); }}
                        className="text-xs font-bold text-sky-600 hover:underline"
                      >
                        View Details →
                      </a>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      Barley Lane, Goodmayes, Ilford IG3 8YB. Part of Barking, Havering and Redbridge University Hospitals NHS Trust, serving as the high-volume elective orthopaedic surgery hub with clean-air theatre suites and day-case surgery units. Mr Shankar delivers elective joint replacements across BHRUT facilities, with complex revision cases coordinated with specialist multidisciplinary perioperative resources.
                    </p>

                    <div className="pt-3 border-t border-slate-100 text-xs text-slate-600">
                      <p><strong>NHS Access:</strong> Elective surgical procedures and routine orthopaedic clinics scheduled through BHRUT NHS booking coordination.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Regional Hub Navigation Links */}
              <div className="mt-12 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  Explore Regional Services &amp; Hospital Profiles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <a
                    href="/london-hip-knee-surgeon"
                    onClick={(e) => { e.preventDefault(); onNavigate('/london-hip-knee-surgeon'); }}
                    className="p-3 bg-slate-50 hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors"
                  >
                    📍 London Hip &amp; Knee Surgeon
                  </a>
                  <a
                    href="/essex-hip-knee-surgeon"
                    onClick={(e) => { e.preventDefault(); onNavigate('/essex-hip-knee-surgeon'); }}
                    className="p-3 bg-slate-50 hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors"
                  >
                    📍 Essex Hip &amp; Knee Surgeon
                  </a>
                  <a
                    href="/spire-hartswood-hospital"
                    onClick={(e) => { e.preventDefault(); onNavigate('/spire-hartswood-hospital'); }}
                    className="p-3 bg-slate-50 hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors"
                  >
                    🏥 Spire Hartswood Hospital
                  </a>
                  <a
                    href="/nuffield-brentwood-hospital"
                    onClick={(e) => { e.preventDefault(); onNavigate('/nuffield-brentwood-hospital'); }}
                    className="p-3 bg-slate-50 hover:bg-[#EAF1F6] rounded-xl font-bold text-slate-800 hover:text-[#1B4965] border border-slate-200 transition-colors"
                  >
                    🏥 Nuffield Health Brentwood
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </article>
  );
};
