import { 
  Treatment, 
  Location, 
  Testimonial, 
  FAQ, 
  Protocol, 
  ConditionCategory, 
  Fellowship, 
  LeadershipRole, 
  SurgicalStat 
} from './types';

export const PRACTICE_NAME = "London Essex Hip and Knee Surgeon";
export const SURGEON_NAME = "Mr Shivakumar Shankar";
export const SURGEON_ROLE = "Consultant Robotic Hip and Knee Surgeon";
export const SURGEON_TITLE = "Consultant Orthopaedic Surgeon";
export const SPECIALITY = "Hip and Knee Surgery";
export const BRAND_NAME = "London and Essex Hip and Knee Surgeon";
export const TAGLINE = "Minimally Invasive • Robotic • Computer-Navigated Hip & Knee Surgery";
export const SLOGAN = "Restoring your active lifestyle";
export const QUALIFICATIONS = "MBBS, DHA, MRCSEd, MSc (Trauma & Orthopaedics), FRCSEd (Tr & Orth), PG Diploma in Principles of Computer and Robotic Assisted Orthopaedic Surgery";
export const ADDITIONAL_DIPLOMA = "PG Diploma in Principles of Computer and Robotic Assisted Orthopaedic Surgery";
export const GMC_NUMBER = "GMC: 6062754 (Specialist Register)";
export const EMAIL = "hip.knee_specialist@yahoo.com";
export const PHONE = "07587765888";
export const MOBILE_PHONE = "07587765888";
export const LANDLINE_PHONE = "02035230621";
export const PHONE_ALT = "02035230621";
export const SECRETARY_NAME = "Remya Rexlin";
export const SECRETARY_ROLE = "Medical Secretary to Mr Shivakumar Shankar";

export const SOCIAL_HANDLE = "@ShankarHipKnee";
export const X_HANDLE = "@ShankarHipKnee";
export const LINKEDIN_URL = "https://www.linkedin.com/in/shivakumar-shankar-25758026/recent-activity/all/";
export const X_URL = "https://x.com/ShankarHipKnee";
export const BUPA_PROFILE_URL = "https://finder.bupa.co.uk/Consultant/mr-shivakumar-shankar-orthopaedic-surgery-brentwood-romford";
export const SPIRE_HARTSWOOD_BOOKING_URL = "https://appointments.spirehealthcare.com/?c=C6038414";
export const NUFFIELD_BRENTWOOD_BOOKING_URL = "https://www.nuffieldhealth.com/consultants/mr-shivakumar-shankar#book";

export const SOCIAL_LINKS = {
  handle: "@ShankarHipKnee",
  x: "https://x.com/ShankarHipKnee",
  twitter: "https://x.com/ShankarHipKnee",
  linkedin: "https://www.linkedin.com/in/shivakumar-shankar-25758026/recent-activity/all/",
  bupa: "https://finder.bupa.co.uk/Consultant/mr-shivakumar-shankar-orthopaedic-surgery-brentwood-romford",
  instagram: "https://www.instagram.com/ShankarHipKnee",
  tiktok: "https://www.tiktok.com/@ShankarHipKnee",
  youtube: "https://www.youtube.com/@ShankarHipKnee",
};

export const NAV_LINKS = [
  { name: 'Home', href: 'home' },
  { name: 'About Mr Shankar', href: 'about' },
  { name: 'Treatments', href: '#treatments' },
  { name: 'Robotic & Navigation', href: '#robotic' },
  { name: 'Conditions', href: '#conditions' },
  { name: 'Hospitals', href: '#locations' },
  { name: 'Media & Social', href: '#media' },
  { name: 'Physio Protocols', href: '#protocols' },
  { name: 'Contact Us', href: '#contact' },
  { name: 'FAQ', href: '#faq' },
];

export const SURGICAL_STATS: SurgicalStat[] = [
  {
    value: "9+ Years",
    label: "Arthroplasty Experience",
    detail: "Extensive experience performing manual and computer-assisted hip and knee replacement surgery for approximately 9 years, incorporating MAKO robotic-assisted surgery."
  },
  {
    value: "3,000+",
    label: "Hip & Knee Replacements",
    detail: "High-volume arthroplasty practice encompassing manual, computer-assisted, and robotic surgical approaches."
  },
  {
    value: "1,200+",
    label: "Knee Arthroscopies",
    detail: "Specialist keyhole interventions, meniscal preservation, and joint cartilage care in London and Essex."
  },
  {
    value: "100+",
    label: "Robotic Joint Surgeries",
    detail: "Personally completed more than 100 robotic hip and knee replacement surgeries, and was the first surgeon to perform computer-assisted and robotic total hip replacement in Essex and North East London."
  }
];

export const TREATMENTS: Treatment[] = [
  {
    id: "total-hip-replacement",
    title: "Total Hip Replacement",
    subtitle: "Conventional, Computer-Assisted & Robotic",
    category: "hip",
    procedureRiskId: "total-hip-replacement",
    surgicalApproach: "Anterior, Posterior & Rottinger Approaches",
    description: "Replaces the damaged ball and socket with precision artificial components engineered to eradicate arthritis pain and restore joint mobility.",
    keyBenefits: [
      "Custom pre-operative planning and implant sizing",
      "Restoration of natural hip geometry and leg length balance",
      "Durable ceramic and highly cross-linked polyethylene bearing surfaces",
      "Rapid mobilisation protocol within hours of surgery"
    ],
    fullDetails: [
      "Modern total hip replacement replaces the worn femoral head and damaged acetabular cup with biocompatible components.",
      "Mr Shankar evaluates each patient's individual anatomy, lifestyle, overall health, and activity goals to determine the optimal implant configuration and surgical approach."
    ]
  },
  {
    id: "robotic-hip-replacement",
    title: "Robotic & Computer-Assisted Hip Replacement",
    subtitle: "Pioneering Sub-Millimeter Precision",
    category: "robotic",
    procedureRiskId: "total-hip-replacement",
    surgicalApproach: "Robotic-Assisted / Computer Navigation",
    isPioneering: true,
    description: "Mr Shankar was the first surgeon in Essex and North East London to perform robotic and computer-assisted total hip replacement.",
    keyBenefits: [
      "First in Essex & North East London region to perform this technique",
      "Sub-millimeter cup positioning and precise inclination/version angles",
      "Exact anatomical restoration of femoral offset and leg length",
      "Reduced risk of component impingement and dislocation"
    ],
    fullDetails: [
      "Robotic technology and computer navigation assist with real-time 3D tracking of component positioning, hip geometry, leg length, and centre of rotation.",
      "Fellowship-trained at the Golden Jubilee Hospital, Glasgow, Mr Shankar leverages this cutting-edge precision while retaining seasoned clinical judgement."
    ]
  },
  {
    id: "minimally-invasive-hip",
    title: "Minimally Invasive Hip Replacement",
    subtitle: "Muscle-Sparing Soft Tissue Preservation",
    category: "hip",
    procedureRiskId: "total-hip-replacement",
    surgicalApproach: "Direct Anterior & Rottinger Muscle-Sparing",
    description: "Tissue-preserving surgical techniques designed to navigate between natural muscular planes, minimising soft-tissue disruption and speeding recovery.",
    keyBenefits: [
      "No detachment of major stabilising muscle groups",
      "Reduced post-operative pain and lower surgical bleeding",
      "Faster progression to walking without walking aids",
      "Decreased post-operative movement restrictions"
    ],
    fullDetails: [
      "Mr Shankar developed advanced expertise during his international travelling fellowship in Rummelsberg, Germany with Professor Wagner's unit.",
      "He also completed specialist Rottinger muscle-sparing approach training at the CABPS Centre, Centre Hospitalier de Haguenau, France."
    ]
  },
  {
    id: "hip-joint-injection",
    title: "Hip Joint Injections (Diagnostic & Therapeutic)",
    subtitle: "Hip Joint vs Lumbar Spine Differentiating Test",
    category: "hip",
    procedureRiskId: "hip-joint-injection",
    surgicalApproach: "Image-Guided Fluoroscopic or Ultrasound Injection",
    description: "Precision image-guided injection using local anaesthetic alone or combined with steroid. A pivotal diagnostic procedure to differentiate true hip arthritis from referred lumbar spine pain.",
    keyBenefits: [
      "Immediate diagnostic confirmation distinguishing hip pain from lower back/nerve root issues",
      "Performed under local anaesthesia with minimal discomfort",
      "Significant anti-inflammatory relief calming severe joint synovitis",
      "Same-day walk-in, walk-out outpatient procedure"
    ],
    fullDetails: [
      "Diagnostic local anaesthetic injection numbs the hip joint: if pain is abolished during the trial period, it confirms the hip joint as the pain generator.",
      "If pain settles and recurs at a later date, the potential need for definitive surgery (such as hip replacement) is clearly explained."
    ]
  },
  {
    id: "total-knee-replacement",
    title: "Total Knee Replacement",
    subtitle: "Conventional, Computer-Navigated & Robotic",
    category: "knee",
    procedureRiskId: "total-knee-replacement",
    surgicalApproach: "Robotic-Assisted & Navigated Options",
    description: "Comprehensive resurfacing of femoral and tibial joint surfaces for patients with severe osteoarthritis unresponsive to conservative measures.",
    keyBenefits: [
      "Long-term relief from chronic joint pain and stiffness",
      "Correction of angular deformities (bowlegs or knock-knees)",
      "Dynamic intra-operative soft tissue balancing",
      "High functional return to walking, cycling, golf, and daily life"
    ],
    fullDetails: [
      "Advanced surgical options include robotic-assisted and computer-navigated total knee arthroplasty to balance ligaments through full range of motion.",
      "Designed for patients with advanced multi-compartment degenerative arthritis."
    ]
  },
  {
    id: "partial-knee-replacement",
    title: "Partial (Unicompartmental) Knee Replacement",
    subtitle: "Targeted Compartment Resurfacing",
    category: "knee",
    procedureRiskId: "partial-knee-replacement",
    surgicalApproach: "Minimally Invasive Medial/Lateral Arthroplasty",
    description: "For patients whose arthritis is predominantly confined to a single compartment, sparing the healthy cartilage, bone, and crucial cruciate ligaments.",
    keyBenefits: [
      "Preserves the anterior and posterior cruciate ligaments (ACL/PCL)",
      "Feels more like a natural knee with superior proprioception",
      "Smaller surgical incision with faster return to physical activity",
      "Shorter hospital stay and gentle recovery curve"
    ],
    fullDetails: [
      "By replacing only the worn medial or lateral compartment, normal joint kinematics and natural knee mechanics are conserved.",
      "Routinely performed with robotic guidance for exceptional placement accuracy."
    ]
  },
  {
    id: "robotic-knee-replacement",
    title: "Robotic & Computer-Navigated Knee Replacement",
    subtitle: "Dynamic Soft-Tissue & Alignment Optimisation",
    category: "robotic",
    procedureRiskId: "total-knee-replacement",
    surgicalApproach: "Robotic Arthroplasty & Navigation Systems",
    isPioneering: true,
    description: "Specialist fellowship-trained implementation of computer navigation and robotic technology to achieve ideal mechanical axis restoration.",
    keyBenefits: [
      "Fellowship-trained at Golden Jubilee Hospital, Glasgow",
      "Pre-operative 3D modelling matching patient-specific bone anatomy",
      "Live intra-operative feedback on ligament tension throughout flexion/extension",
      "Reproducible surgical planning and predictable joint longevity"
    ],
    fullDetails: [
      "Computer navigation allows live kinematic analysis of the patient's knee throughout the complete arc of movement.",
      "Assists in precision bone resections and balancing the soft-tissue envelope without excessive ligament releases."
    ]
  },
  {
    id: "knee-arthroscopy",
    title: "Knee Arthroscopy & Joint Preservation",
    subtitle: "Over 1,200 Keyhole Procedures Performed",
    category: "preservation",
    procedureRiskId: "knee-arthroscopy",
    surgicalApproach: "Minimally Invasive Keyhole Portals",
    description: "High-volume keyhole procedure treating meniscal tears, chondral flaps, loose bodies, and sports injuries to preserve the native joint.",
    keyBenefits: [
      "Over 1,200 successful arthroscopic knee procedures performed",
      "Day-case procedure with tiny puncture incisions",
      "Rapid post-operative rehabilitation and return to sports",
      "Joint preservation priority to delay or eliminate need for arthroplasty"
    ],
    fullDetails: [
      "Whenever viable, Mr Shankar repairs damaged meniscal tissue rather than trimming it, safeguarding long-term knee cartilage health.",
      "Ideal for mechanical symptoms like catching, locking, and painful sports-related twists."
    ]
  },
  {
    id: "cartilage-reconstruction",
    title: "Knee Cartilage Reconstruction & PRP",
    subtitle: "Biological Regeneration & Joint Protection",
    category: "preservation",
    procedureRiskId: "knee-arthroscopy",
    surgicalApproach: "Biological & Regenerative Techniques",
    description: "Targeted regenerative treatments including microfracture, cartilage restoration techniques, and Platelet-Rich Plasma (PRP) therapy.",
    keyBenefits: [
      "Concentrated growth factors harvested from your own blood",
      "Reduces chronic joint inflammation and promotes natural healing",
      "Targeted option for focal cartilage injuries and early degeneration",
      "In-clinic procedure with no surgical downtime"
    ],
    fullDetails: [
      "Platelet-Rich Plasma (PRP) utilises the patient's own biological healing factors to calm persistent synovial irritation and ease early articular cartilage breakdown."
    ]
  },
  {
    id: "prp-injection",
    title: "Platelet-Rich Plasma (PRP) Injections",
    subtitle: "Autologous Non-Surgical Biological Therapy",
    category: "preservation",
    procedureRiskId: "hip-joint-injection",
    surgicalApproach: "Outpatient Clinical Interventional Injection",
    description: "Autologous platelet-rich plasma prepared from your own blood, considered as an additional non-surgical treatment option for selected musculoskeletal and knee conditions.",
    keyBenefits: [
      "100% autologous biological preparation eliminating allergic rejection risks",
      "Non-surgical outpatient procedure performed during your clinical consultation",
      "May be considered for selected mild-to-moderate knee osteoarthritis and tendinopathy",
      "No surgical downtime, allowing rapid resumption of normal daily activities"
    ],
    fullDetails: [
      "Platelet-Rich Plasma (PRP) is prepared from a small sample of your own blood, concentrating platelets and associated natural signaling growth factors.",
      "Presented as a balanced non-surgical option for selected patients; does not replace surgery in cases of advanced bone-on-bone arthritis."
    ]
  },
  {
    id: "complex-reconstruction",
    title: "Complex Hip & Knee Reconstruction & Revision",
    subtitle: "Secondary & Specialist Joint Arthroplasty",
    category: "hip",
    procedureRiskId: "total-hip-replacement",
    surgicalApproach: "Specialist Revision Reconstruction",
    description: "Specialist diagnostic assessment and revision surgery for previously replaced joints experiencing loosening, wear, instability, or ongoing pain.",
    keyBenefits: [
      "Extensive tertiary referral experience in complex reconstruction",
      "Management of bone loss with specialised augments and revision stems",
      "Correction of joint instability, malalignment, and implant failure",
      "Rigorous pre-operative diagnostic workup and infection exclusion"
    ],
    fullDetails: [
      "Trained at the prestigious Royal National Orthopaedic Hospital (RNOH), Stanmore, Mr Shankar manages challenging primary cases and revision arthroplasty."
    ]
  },
  {
    id: "trauma-orthopaedics",
    title: "General Orthopaedic Trauma & Femur Fractures",
    subtitle: "Clinical Lead for Trauma Care",
    category: "trauma",
    surgicalApproach: "Modern Fracture Fixation & Reconstruction",
    description: "Comprehensive fracture management and urgent trauma reconstruction with leadership expertise across high-volume acute NHS centres.",
    keyBenefits: [
      "Former Clinical Director for Trauma & Orthopaedics at Queen's Hospital",
      "Clinical Lead for Femur Fracture Management",
      "Clinical Lead for Elective Surgery and Infection Control",
      "Involved in over 8,000 trauma and elective operations"
    ],
    fullDetails: [
      "Combines acute anatomical trauma stabilisation with long-term functional joint restoration."
    ]
  }
];

export const CONDITIONS_TREATED: ConditionCategory[] = [
  {
    joint: 'Hip',
    items: [
      {
        name: "Hip Osteoarthritis",
        description: "Progressive wear and loss of protective cartilage causing deep groin pain, stiffness, and difficulty putting on shoes or walking.",
        commonTreatments: ["Total Hip Replacement", "Robotic Hip Surgery", "Minimally Invasive Approaches"]
      },
      {
        name: "Femoroacetabular Impingement (FAI)",
        description: "Abnormal contact between the femoral head and acetabular rim, causing pinching pain during hip flexion, driving, or sports.",
        commonTreatments: ["Joint Preservation", "Surgical Assessment", "Physiotherapy & Injections"]
      },
      {
        name: "Severe & Advanced Hip Arthritis",
        description: "Bone-on-bone contact resulting in night pain, leg length discrepancy, and severely compromised daily mobility.",
        commonTreatments: ["Robotic Total Hip Arthroplasty", "Rottinger Muscle-Sparing THR", "Anterior Approach"]
      },
      {
        name: "Painful or Failing Previous Hip Replacement",
        description: "Aseptic loosening, implant wear, recurrent dislocation, or persistent unexplained discomfort following earlier surgery.",
        commonTreatments: ["Revision Hip Assessment", "Modular Component Exchange", "Complex Reconstruction"]
      }
    ]
  },
  {
    joint: 'Knee',
    items: [
      {
        name: "Knee Osteoarthritis & Degeneration",
        description: "Cartilage attrition causing chronic joint line pain, morning stiffness, weight-bearing ache, and functional limitation.",
        commonTreatments: ["Total Knee Replacement", "Partial Knee Replacement", "Robotic-Assisted Arthroplasty"]
      },
      {
        name: "Meniscal Tears & Mechanical Symptoms",
        description: "Acute sports injury or degenerative fraying of the shock-absorbing meniscus leading to catching, giving way, or joint locking.",
        commonTreatments: ["Knee Arthroscopy (>1,200 cases)", "Meniscal Repair", "Joint Preservation"]
      },
      {
        name: "Single-Compartment (Unicompartmental) Arthritis",
        description: "Arthritic destruction isolated to either the medial or lateral knee compartment while the remaining compartments stay healthy.",
        commonTreatments: ["Partial Knee Replacement", "Robotic Unicompartmental Surgery"]
      },
      {
        name: "Sports Knee Injuries & Cartilage Lesions",
        description: "Chondral damage, ligament strains, and traumatic cartilage defects occurring in athletes and active individuals.",
        commonTreatments: ["Keyhole Arthroscopy", "PRP Therapy", "Cartilage Reconstruction"]
      },
      {
        name: "Failing or Painful Knee Replacement",
        description: "Implant loosening, ligamentous instability, stiffness, or persistent pain following prior knee replacement.",
        commonTreatments: ["Revision Knee Arthroplasty", "Diagnostic Joint Workup", "Complex Reconstruction"]
      }
    ]
  }
];

export const FELLOWSHIPS: Fellowship[] = [
  {
    title: "Lower Limb Arthroplasty Fellowship",
    institution: "Royal National Orthopaedic Hospital (RNOH)",
    location: "Stanmore, London & St Albans",
    focus: "Advanced primary and complex revision hip and knee surgery fellowship shared between the UK's leading specialist hospital and St Albans Hospital.",
    highlight: "Prestige UK Arthroplasty Centre"
  },
  {
    title: "Computer-Navigated & Robotic Arthroplasty Fellowship",
    institution: "Golden Jubilee National Hospital",
    location: "Glasgow, UK",
    focus: "Specialist subspecialty fellowship dedicated to cutting-edge computer-assisted navigation and robotic hip and knee reconstruction, earning the Diploma in Robotic and Computer -Assisted orthopaedic surgery.",
    highlight: "Diploma in Robotic & Computer Navigation"
  },
  {
    title: "Rottinger Muscle-Sparing Hip Arthroplasty",
    institution: "CABPS Centre, Centre Hospitalier de Haguenau",
    location: "Haguenau, France",
    focus: "Intensive training in the true muscle-sparing Rottinger approach to total hip arthroplasty.",
    highlight: "International Soft-Tissue Sparing"
  },
  {
    title: "International Travelling Fellowship (Direct Anterior Hip)",
    institution: "Orthopaedic Department, Rummelsberg Hospital",
    location: "Rummelsberg, Germany",
    focus: "Specialist immersion in the direct anterior approach for total hip replacement with Professor Wagner's unit. Ongoing academic links.",
    highlight: "Direct Anterior Expertise"
  },
  {
    title: "Higher Surgical Training Rotation (London Deanery)",
    institution: "North East Thames & London Deanery / RNOH Rotation",
    location: "London & Essex",
    focus: "Comprehensive training through RNOH Stanmore, Great Ormond Street Hospital, The Royal London Major Trauma Centre, and regional Essex centres.",
    highlight: "CCT Awarded 2016"
  }
];

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    role: "Interim & Acting Clinical Lead for Trauma and Orthopaedics",
    institution: "Queen's Hospital, Romford (Barking, Havering and Redbridge University Hospitals NHS Trust)",
    description: "Official NHS appointments (documented in NHS Jobs 2023 & 2024) providing senior departmental clinical leadership, waiting-list recovery governance, and surgical safety oversight."
  },
  {
    role: "Clinical Director for Trauma and Orthopaedics",
    institution: "Queen's Hospital, Romford (BHRUT NHS Trust)",
    description: "Led clinical governance, surgical safety, and acute service delivery across a major regional trauma unit."
  },
  {
    role: "Clinical Lead for Femur Fracture Management",
    institution: "Barking, Havering and Redbridge University Hospitals NHS Trust",
    description: "Championed rapid multidisciplinary pathway protocols achieving benchmark survival and mobility outcomes."
  },
  {
    role: "Clinical Lead for Clinical Audit & Elective Orthopaedics",
    institution: "BHRUT NHS Trust",
    description: "Ensured evidence-based surgical pathways, implant tracking, and quality improvement programmes."
  },
  {
    role: "Clinical Lead for Infection Control in Trauma and Orthopaedics",
    institution: "BHRUT NHS Trust",
    description: "Maintained rigorous surgical site infection prevention measures and theatre safety protocols."
  },
  {
    role: "Peer Reviewer",
    institution: "Indian Journal of Orthopaedics",
    description: "Appointed reviewer of original clinical and biomechanical research articles."
  },
  {
    role: "Undergraduate & Postgraduate Medical Educator",
    institution: "Queen Mary University of London (QMUL)",
    description: "Teaching orthopaedic curricula to medical students, surgical trainees, and cadaveric navigation courses."
  }
];

export const LOCATIONS: Location[] = [
  {
    id: "spire-hartswood",
    name: "Spire Hartswood Hospital",
    type: "Private Practice Location",
    area: "Brentwood, Essex",
    address: "Eagle Way, Great Warley, Brentwood",
    postcode: "CM13 3LE",
    phone: "01277 695 695",
    email: "hip.knee_specialist@yahoo.com",
    consultationDays: "Regular outpatient clinics & dedicated operating lists",
    facilities: [
      "State-of-the-art laminar flow orthopaedic theatres",
      "On-site MRI, CT, and digital weight-bearing X-ray",
      "Dedicated inpatient physiotherapy and hydrotherapy",
      "Private en-suite recovery rooms"
    ],
    transport: "Conveniently located just off the M25 (J28/J29) and A12. 5 minutes from Brentwood Station (Elizabeth Line). Free on-site parking.",
    mapQuery: "Spire Hartswood Hospital, Eagle Way, Brentwood",
    bookingUrl: SPIRE_HARTSWOOD_BOOKING_URL
  },
  {
    id: "nuffield-brentwood",
    name: "Nuffield Health Brentwood Hospital",
    type: "Private Practice Location",
    area: "Brentwood, Essex",
    address: "Shenfield Road, Brentwood",
    postcode: "CM15 8EH",
    phone: "01277 263 263",
    email: "hip.knee_specialist@yahoo.com",
    consultationDays: "Evening & weekend consultation appointments available",
    facilities: [
      "Advanced robotic and computer-navigated surgical suite",
      "Fast-track diagnostic imaging suite",
      "Comprehensive post-operative rehabilitation gymnasium",
      "Recognised by all major private medical insurers"
    ],
    transport: "Located on Shenfield Road, easily reachable from Shenfield Station (Elizabeth Line & mainline) and Brentwood town centre. Free patient parking.",
    mapQuery: "Nuffield Health Brentwood Hospital, Shenfield Road, Brentwood",
    bookingUrl: NUFFIELD_BRENTWOOD_BOOKING_URL
  },
  {
    id: "queens-hospital",
    name: "Queen's Hospital, Romford",
    type: "NHS Hospital Location",
    area: "Romford, Greater London / Essex",
    address: "Rom Valley Way, Romford",
    postcode: "RM7 0AG",
    phone: "01708 435 000",
    facilities: [
      "Substantive NHS Consultant in Trauma & Orthopaedics at BHRUT",
      "Major regional acute trauma and joint reconstruction centre",
      "Barking, Havering and Redbridge University Hospitals NHS Trust"
    ],
    transport: "Accessible via Romford Station (Elizabeth Line / Overground / National Rail), local bus networks, and A12.",
    mapQuery: "Queen's Hospital Romford"
  },
  {
    id: "king-george-hospital",
    name: "King George Hospital, Goodmayes",
    type: "NHS Hospital Location",
    area: "Goodmayes, Ilford, Greater London / Essex",
    address: "Barley Lane, Goodmayes, Ilford",
    postcode: "IG3 8YB",
    phone: "020 8983 8000",
    facilities: [
      "High-volume elective orthopaedic surgery centre for BHRUT",
      "Dedicated clean-air orthopaedic surgical theatres and day surgery unit",
      "Barking, Havering and Redbridge University Hospitals NHS Trust"
    ],
    transport: "Located on Barley Lane, Goodmayes, accessible via Goodmayes and Newbury Park stations.",
    mapQuery: "King George Hospital Goodmayes"
  }
];

export const WHY_CHOOSE_POINTS = [
  {
    title: "NHS Consultant Surgeon Since 2017 & Clinical Lead",
    description: "Substantive Consultant with documented NHS leadership appointments including Interim & Acting Clinical Lead for Trauma & Orthopaedics at Queen's Hospital, Romford."
  },
  {
    title: "Performed BHRUT's 100th Robotic Joint Replacement",
    description: "Documented in official Trust news as the surgeon performing BHRUT's milestone 100th robotic total joint replacement using the Mako robotic system."
  },
  {
    title: "Led High-Volume Waiting-List Reduction & 'Super' Clinics",
    description: "Led 2-day super clinics seeing 260 outpatients, contributing to >1,300 additional patients seen and 51 hip and knee replacements in 5 days during 'Bones R Us'."
  },
  {
    title: "First Robotic Hip Surgeon in Essex & NE London",
    description: "The regional pioneer who introduced computer-assisted and robotic total hip replacement to the Essex and North East London region."
  },
  {
    title: "High-Volume Arthroplasty & NJR Verified",
    description: "Audited National Joint Registry activity for Hip (H) and Knee (K) joint replacements with more than 3,000 replacements performed."
  },
  {
    title: "Diploma in Robotic & Computer-Assisted Surgery",
    description: "Holds a Postgraduate Diploma in Computer and Robot-Assisted Orthopaedic Surgery with fellowship training at Golden Jubilee Hospital, Glasgow."
  },
  {
    title: "Dual UK Fellowships (RNOH Stanmore & Golden Jubilee)",
    description: "Subspecialty trained at the UK's premier orthopaedic centres in complex joint reconstruction, navigation, and revision surgery."
  },
  {
    title: "Tissue-Sparing & Joint Preservation Expertise",
    description: "Over 1,200 knee arthroscopies performed, paired with international training in direct anterior and Rottinger muscle-sparing hip approaches."
  }
];

export const PROTOCOLS: Protocol[] = [
  {
    title: "Total Hip Replacement Rehabilitation",
    joint: "Hip",
    description: "Comprehensive day-by-day mobilisation guide, stair technique, sleeping postures, and safe hip precautions following anterior, posterior, or Rottinger approach.",
    timeline: "Day 0 to Week 12",
    keyMilestones: [
      "Same-day bed-to-chair transfer and assisted walking with crutches",
      "Independent stair negotiation prior to hospital discharge",
      "Transition to single crutch/cane at 2 to 4 weeks",
      "Unrestricted gentle walking around 4 weeks and return to driving after 6 weeks"
    ],
    filename: "Mr_Shankar_THR_Protocol.pdf"
  },
  {
    title: "Total & Robotic Knee Arthroplasty Protocol",
    joint: "Knee",
    description: "Structured recovery pathway focusing on early extension restoration, swelling control, quad reactivation, and progressive flexion milestones.",
    timeline: "Day 0 to Week 12+",
    keyMilestones: [
      "Immediate full knee extension and passive flexion to 90 degrees",
      "Active straight leg raise without extensor lag by Day 3",
      "Static exercise bike cycling and return to driving after 6 weeks",
      "Return to recreational walking, swimming, and golf at 8 to 12 weeks"
    ],
    filename: "Mr_Shankar_TKR_Protocol.pdf"
  },
  {
    title: "Partial (Unicompartmental) Knee Protocol",
    joint: "Knee",
    description: "Accelerated rehabilitation programme taking advantage of preserved cruciate ligaments and minimal muscle disruption.",
    timeline: "Day 0 to Week 8",
    keyMilestones: [
      "Weight-bearing as tolerated within hours of surgery",
      "Rapid quad firing with minimal post-operative bruising",
      "Weaning off crutches typically by Week 2 to 3",
      "Return to driving after 6 weeks and low-impact sports by Week 6 to 8"
    ],
    filename: "Mr_Shankar_UKR_Protocol.pdf"
  },
  {
    title: "Knee Arthroscopy & Meniscal Repair Protocol",
    joint: "Knee",
    description: "Post-operative guide following keyhole knee surgery, meniscal debridement or suture repair, and biological cartilage care.",
    timeline: "Day 0 to Week 6",
    keyMilestones: [
      "Ice, elevation, and compression for initial 48-72 hours",
      "Immediate active range-of-motion exercises",
      "Normal gait restoration within 7 to 14 days",
      "Return to running and sports-specific drills at 4 to 8 weeks"
    ],
    filename: "Mr_Shankar_Arthroscopy_Protocol.pdf"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Mr Shankar performed my total hip replacement at Spire Hartswood. I was up and walking down the corridor the very afternoon of my surgery! After months of agonising groin pain, I am back gardening and walking without a limp. His explanation of the procedure put me completely at ease.",
    author: "David M.",
    procedure: "Total Hip Replacement",
    hospital: "Spire Hartswood Hospital",
    source: "Doctify",
    rating: 5,
    date: "Verified Patient"
  },
  {
    text: "From my first consultation at Nuffield Brentwood through to my post-operative review, Mr Shankar demonstrated exceptional care, empathy, and surgical expertise. My robotic knee replacement has transformed my daily mobility. Truly a first-class surgeon.",
    author: "Patricia H.",
    procedure: "Robotic Knee Replacement",
    hospital: "Nuffield Brentwood Hospital",
    source: "iWantGreatCare",
    rating: 5,
    date: "Verified Patient"
  },
  {
    text: "Having had severe knee arthritis that stopped me from playing with my grandchildren, Mr Shankar recommended a partial knee replacement. The recovery was remarkably quick compared to friends who had standard replacements. Six months on, my knee feels completely natural.",
    author: "Margaret T.",
    procedure: "Partial Knee Replacement",
    hospital: "Nuffield Brentwood Hospital",
    source: "Doctify",
    rating: 5,
    date: "Verified Patient"
  },
  {
    text: "I cannot praise Mr Shankar and his team enough. He explained every aspect of my minimally invasive hip surgery clearly. Hospital stay was brief, pain was managed beautifully, and I was back driving in weeks. Highly recommended on iWantGreatCare!",
    author: "Robert C.",
    procedure: "Minimally Invasive Hip Replacement",
    hospital: "Spire Hartswood Hospital",
    source: "iWantGreatCare",
    rating: 5,
    date: "Verified Patient"
  },
  {
    text: "I suffered a torn meniscus during squash. Mr Shankar repaired it arthroscopically at Nuffield Brentwood. His attention to detail, post-op physio instructions, and surgical skill were outstanding. Back on court with full confidence.",
    author: "Dr Jonathan R.",
    procedure: "Knee Arthroscopy & Meniscal Repair",
    hospital: "Nuffield Brentwood Hospital",
    source: "Doctify",
    rating: 5,
    date: "Verified Patient"
  },
  {
    text: "Mr Shankar is an outstanding orthopaedic consultant. Professional, approachable, and very reassuring. His surgical outcome for my bilateral knee arthritis has given me my life back. His secretary Remya was also wonderfully helpful throughout.",
    author: "Susan B.",
    procedure: "Total Knee Replacement",
    hospital: "Spire Hartswood Hospital",
    source: "iWantGreatCare",
    rating: 5,
    date: "Verified Patient"
  }
];

export const FAQS: FAQ[] = [
  // --- Consultation, Appointments & General ---
  {
    question: "Why should I consider private treatment?",
    category: "Appointments",
    answer: "Private appointments and treatment can usually be arranged with minimal delay at Spire Hartswood Hospital or Nuffield Health Brentwood Hospital. The consultant you choose—Mr Shankar—personally oversees every stage of your clinical pathway, including clinical assessment, detailed review of investigations (weight-bearing X-rays, MRI, CT), performing the surgery itself, and conducting all follow-up care. Where inpatient hospital care is required, private hospitals provide comfortable, en-suite private rooms with dedicated nursing and dedicated post-operative physiotherapy."
  },
  {
    question: "What happens at my first visit?",
    category: "Appointments",
    answer: "During your initial consultation, Mr Shankar will take a full medical history, discuss your joint symptoms, mobility limitations, and lifestyle expectations, and perform a thorough clinical examination of your hip or knee. If imaging is required, weight-bearing digital X-rays can be arranged on the day of your consultation at the hospital; if an MRI scan is indicated, it might take place on the same day or be scheduled for another day depending on scanner availability and insurance authorisation. Mr Shankar will discuss your diagnosis in clear terms, outline both non-surgical and surgical options, and provide personalised recommendations with follow-up arranged as needed."
  },
  {
    question: "Do I need a GP referral to book a private consultation?",
    category: "Appointments",
    answer: "If you have private medical insurance, most insurance policies require a GP referral letter prior to authorising your consultation. However, if you are self-funding your treatment, a GP referral is welcomed but not strictly essential—you can book directly with Mr Shankar's secretary. In all cases, Mr Shankar keeps your GP informed of all findings, investigations, and treatment plans with your consent."
  },
  {
    question: "Where does Mr Shankar hold his private consultations and operating lists?",
    category: "Appointments",
    answer: "Mr Shankar conducts private consultations and surgery at Spire Hartswood Hospital and Nuffield Health Brentwood Hospital in Brentwood, Essex. Both hospitals offer rapid on-site diagnostic imaging (MRI, CT, ultrasound, digital X-ray), advanced laminar-flow ultra-clean operating theatres, dedicated joint replacement surgical teams, and private en-suite rooms."
  },

  // --- Fees & Insurance ---
  {
    question: "How much does a private self-funded consultation cost?",
    category: "Insurance",
    answer: "For patients self-funding their care without private medical insurance, Mr Shankar's outpatient consultation fees are transparent and capped: First Appointment (Initial Consultation) is £250, and Follow-Up Appointment is £200. If diagnostic investigations (such as weight-bearing X-rays or MRI) are indicated, or if surgical treatment is recommended, these are quoted transparently by the hospital (Spire Hartswood or Nuffield Health Brentwood) with no hidden fees."
  },
  {
    question: "Will my private health insurance cover the cost of my treatment?",
    category: "Insurance",
    answer: "Often, yes—subject to the specific terms and excess of your policy. Mr Shankar is fee-assured and fully recognised by all major UK private medical insurance companies, including Bupa, AXA Health, Aviva, Vitality, WPA, Cigna, Healix, and Police Mutual. Please contact your insurer prior to your appointment to obtain pre-authorisation and confirm that Mr Shankar and your chosen hospital (Spire Hartswood or Nuffield Brentwood) are covered. Our practice team can assist with procedural codes and practical paperwork where needed."
  },
  {
    question: "I do not have private medical insurance but would like private care (Self-funding options)?",
    category: "Insurance",
    answer: "Self-funded appointments and treatments are warmly welcomed. Outpatient consultations are fixed at £250 for your first visit and £200 for follow-up appointments. For surgical procedures—such as total hip replacement, robotic joint replacement, partial knee replacement, or knee arthroscopy—both Spire Hartswood and Nuffield Brentwood provide transparent 'fixed-price packages'. These packages bundle the consultant surgeon fee, anaesthetist fee, hospital stay, implants, drugs, standard aftercare, and follow-up with no unexpected surprises. Both hospitals also offer flexible finance options to spread hospital charges over time (subject to status)."
  },

  // --- Surgery, Hospital Stay & Planning ---
  {
    question: "How is my surgery planned?",
    category: "Surgery",
    answer: "After consultation and review of your diagnostic imaging, Mr Shankar will discuss all management options, from physiotherapy and targeted joint injections to surgical repair or replacement. If surgery is agreed, a convenient date is arranged with the hospital. A pre-operative assessment is completed by the hospital nursing and anaesthetic team to ensure medical readiness, check routine bloods, and review your health history. If robotic-assisted surgery is chosen, specialized 3D CT modeling is obtained prior to surgery to map your individual anatomy. You will also meet your consultant anaesthetist on the day of surgery."
  },
  {
    question: "Who actually performs the surgery?",
    category: "Surgery",
    answer: "Your surgery is performed personally by your treating consultant, Mr Shivakumar Shankar, supported by an experienced hospital surgical team and consultant anaesthetist. In private care, your operation is never delegated to junior surgical trainees; Mr Shankar carries out the procedure himself and visits you on the ward to review your immediate progress."
  },
  {
    question: "What shall I bring into hospital on the day of admission?",
    category: "Surgery",
    answer: "Please bring your current medications (in their original labelled pharmacy boxes, including inhalers and eye drops), comfortable nightwear, loose-fitting clothing that is easy to put on over dressings, toiletries, and supportive flat shoes or slippers with good non-slip rubber grip for walking practice. You may bring a mobile phone, tablet, and charger. Please avoid bringing valuable jewellery or large sums of cash. The hospital provides all essential towels, bedding, crutches, and mobility aids."
  },
  {
    question: "Will I have scars after surgery?",
    category: "Surgery",
    answer: "Joint replacement and keyhole surgery do require skin incisions, but Mr Shankar utilizes refined minimally invasive and muscle-sparing approaches designed to keep surgical incisions as neat and small as safely possible. Wounds are meticulously closed using subcuticular (under-the-skin) dissolvable sutures and modern surgical adhesives where appropriate, avoiding external clips or stitches that need painful removal. Waterproof dressings protect the incision while showering, and clear advice on wound care, scar massage, and healing is provided before discharge."
  },
  {
    question: "What are the risks of surgery?",
    category: "Surgery",
    answer: "All surgical procedures carry potential risks, which Mr Shankar discusses thoroughly and candidly with you as part of informed consent. While modern joint replacement and arthroscopy are among the most successful, life-transforming operations in modern medicine, potential risks include infection, blood clots (deep vein thrombosis / pulmonary embolism), nerve or blood vessel injury, stiffness, bleeding, or component loosening over the longer term. Serious complications are uncommon, and rigorous protocols—including ultra-clean laminar airflow theatres, antibiotic prophylaxis, mechanical calf pumps, and chemical blood-thinners—are routinely implemented to minimize risk."
  },

  // --- Recovery, Lifestyle & Aftercare ---
  {
    question: "What happens after surgery and during hospital recovery?",
    category: "Recovery",
    answer: "Immediately after your procedure, you will be cared for in the recovery suite before returning to your private room. Under modern Enhanced Recovery After Surgery (ERAS) protocols, early mobilization is encouraged: our dedicated orthopaedic physiotherapist will help you stand and take your first steps—often on the day of surgery or early the following morning. You will be given clear written aftercare instructions, pain relief medication, and home exercise plans before discharge. If you have any questions after returning home, 24/7 ward telephone support is available directly from the hospital, alongside ongoing support from Mr Shankar's secretary."
  },
  {
    question: "How much time do I need off work and driving?",
    category: "Recovery",
    answer: "Recovery timelines depend on your procedure and the physical nature of your occupation. For keyhole knee arthroscopy, patients in sedentary desk roles often return within 1 to 2 weeks. For hip or knee replacement, patients with desk-based or remote work frequently resume within 4 to 6 weeks, whereas those in physically demanding or manual jobs may require 8 to 12 weeks. Return to driving typically occurs around 4 to 6 weeks for joint replacement, once you have discontinued strong pain medications and can perform an emergency brake safely. Mr Shankar will provide tailored advice and medical fit certificates."
  },
  {
    question: "How does smoking or vaping affect the operation and healing?",
    category: "Recovery",
    answer: "Smoking and nicotine (including e-cigarettes and nicotine patches) reduce blood flow, impair tissue oxygenation, slow wound healing, and significantly increase the risk of chest infections and deep wound complications. In joint replacement, nicotine also impairs the biological bonding of bone to the implant surface. Stopping smoking as early as possible prior to surgery—and remaining smoke-free during the healing phase—greatly reduces anaesthetic and surgical risks and improves long-term outcomes. Mr Shankar can advise on support and cessation resources."
  },

  // --- Procedures & Technology (Existing Core Expertise) ---
  {
    question: "What is the difference between robotic-assisted surgery and conventional joint replacement?",
    category: "Robotics",
    answer: "Robotic technology does not replace the surgeon; rather, it serves as a precision navigational instrument guided by Mr Shankar. It uses pre-operative 3D CT modeling and intra-operative sensory mapping to position implants with sub-millimeter precision, balance soft tissues throughout full movement, and preserve bone."
  },
  {
    question: "Why was Mr Shankar's robotic hip surgery recognised as a regional first?",
    category: "Robotics",
    answer: "Mr Shankar was the first orthopaedic surgeon in the Essex and North East London region to perform computer-assisted and robotic total hip replacement. His international fellowship training at the Golden Jubilee National Hospital in Glasgow and European centres gave him dedicated expertise in computer navigation and robotic arthroplasty."
  },
  {
    question: "What are the advantages of minimally invasive and muscle-sparing hip surgery?",
    category: "Hip",
    answer: "Approaches like the Direct Anterior Approach (which Mr Shankar refined in Germany) and the Rottinger muscle-sparing approach (France) access the hip joint by working between natural muscular planes rather than detaching or cutting major muscles. This results in less soft tissue trauma, lower blood loss, reduced post-operative pain, greater joint stability, and quicker return to unassisted walking."
  },
  {
    question: "How do I know if I need a Total Knee Replacement or a Partial Knee Replacement?",
    category: "Knee",
    answer: "If arthritis is confined strictly to one compartment of your knee (such as the medial inside or patellofemoral kneecap) and your cruciate ligaments are healthy, you may be an excellent candidate for a partial (unicompartmental) knee replacement. If multiple compartments are arthritic, a total knee replacement provides the most reliable and durable pain relief. Mr Shankar conducts careful clinical examination and specialized weight-bearing imaging to recommend the ideal solution."
  }
];
