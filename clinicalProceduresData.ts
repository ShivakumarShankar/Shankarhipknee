import { ProcedurePageData } from './components/ClinicalProcedurePage';

export const CLINICAL_PROCEDURES: Record<string, ProcedurePageData> = {
  'hip-replacement': {
    slug: 'hip-replacement',
    badge: 'Hip Arthroplasty',
    h1: 'Specialist Hip Replacement Surgery in London & Essex',
    leadParagraph: 'Comprehensive total hip replacement surgery combining conventional surgical excellence, computer navigation, and robotic-assisted techniques to alleviate arthritis pain and restore joint mobility.',
    overview: [
      'Total hip replacement is one of the most reliable and clinically successful surgical procedures in modern medicine. When conservative interventions—such as physiotherapy, analgesia, and targeted joint injections—no longer provide acceptable relief, replacement of the arthritic hip joint restores mobility and quality of life.',
      'Mr Shivakumar Shankar is a fellowship-trained Consultant Orthopaedic Surgeon with extensive experience in primary, complex, and revision hip arthroplasty across London and Essex. His surgical approach is individually tailored to patient anatomy, utilising high-performance ceramic-on-polyethylene bearing surfaces.'
    ],
    whoMayBenefit: [
      'Patients with advanced osteoarthritis of the hip joint causing chronic daily pain.',
      'Individuals with severe night pain or pain that disturbs sleep.',
      'Patients experiencing groin, buttock, or thigh pain that restricts walking distance and daily chores.',
      'Those with hip stiffness that prevents putting on socks and shoes or bending to feet.',
      'Patients with avascular necrosis (osteonecrosis) or post-traumatic hip arthritis.'
    ],
    symptomsTreated: [
      'Deep groin and anterior hip ache radiating to the thigh or knee.',
      'Stiffness when standing up after periods of sitting.',
      'Limping and reduced walking tolerance.',
      'Crepitus, grinding sensations, or restriction in hip rotation.',
      'Reduced independence in personal care and hobbies.'
    ],
    procedureExplanation: {
      title: 'How Total Hip Replacement is Performed',
      description: 'The procedure involves replacing the worn arthritic ball and socket with biocompatible artificial components engineered to articulate smoothly.',
      steps: [
        'Anaesthesia: Administered by a consultant anaesthetist, typically via regional spinal anaesthesia with sedation.',
        'Surgical Access: Careful exposure of the hip joint protecting regional abductor muscles and neurovascular structures.',
        'Acetabular Preparation: The damaged cartilage from the pelvic socket is cleared and a titanium uncemented or cemented shell is seated.',
        'Bearing Insertion: A durable high-grade ceramic or cross-linked polyethylene liner is locked into the acetabular cup.',
        'Femoral Preparation & Stem Placement: The worn femoral head is removed, the femoral canal is prepared, and a titanium stem is fitted.',
        'Joint Reduction & Testing: Trial heads assess stability, soft-tissue tension, and leg length before final component impaction.'
      ]
    },
    technologyComparison: {
      title: 'Conventional, Computer-Assisted & Robotic Options',
      description: 'Mr Shankar offers conventional, computer-navigated, and robotic-assisted hip replacement, selecting the most appropriate tool for each patient\'s unique anatomical geometry.',
      points: [
        { label: 'Conventional Arthroplasty', detail: 'Proven worldwide over decades using mechanical alignment instruments and surgeon tactile feedback.' },
        { label: 'Computer Navigation', detail: 'Provides real-time optical verification of acetabular cup inclination and anteversion angles during impaction.' },
        { label: 'Robotic-Assisted (Mako)', detail: 'Uses pre-operative 3D CT modelling and tactile haptic boundaries to achieve precise component orientation.' },
        { label: 'Tailored Approach', detail: 'Technique is chosen based on pelvic tilt, bone stock, spinopelvic mobility, and individual deformity.' }
      ]
    },
    benefitsAndLimitations: {
      benefits: [
        'Significant relief from chronic arthritic hip pain.',
        'Restoration of natural walking gait and leg length balance.',
        'Durable modern implant materials with excellent long-term registry survival.',
        'Early mobilisation under enhanced recovery pathways within hours of surgery.'
      ],
      limitations: [
        'Artificial joints require sensible lifetime care; extreme high-impact contact sports are generally discouraged.',
        'Recovery takes several months for full muscle strength to return.',
        'Implant components can gradually wear over decades, occasionally requiring revision surgery in younger patients.'
      ]
    },
    risksAndComplications: [
      'Infection (<1% in standard elective settings with ultra-clean laminar flow theatres).',
      'Deep vein thrombosis (DVT) or pulmonary embolism (prevented with chemical and mechanical prophylaxis).',
      'Hip dislocation (minimised with accurate component orientation and soft-tissue repair).',
      'Leg length discrepancy (meticulously assessed pre- and intra-operatively).',
      'Nerve or vascular injury, fracture, or persistent stiffness.'
    ],
    recoveryTimeline: [
      { phase: 'Day 0 (Surgery Day)', description: 'Same-day assisted standing and walking with crutches under dedicated physiotherapist guidance.' },
      { phase: 'Weeks 1 to 2', description: 'Discharge home, walking with two crutches, safe stair negotiation, and wound healing.' },
      { phase: 'Weeks 2 to 6', description: 'Transition to a single stick, gradual increase in daily walking distance, and progressive reduction in swelling.' },
      { phase: 'Weeks 6 to 12', description: 'Return to driving once able to perform an emergency stop, resumption of desk work, and low-impact exercise.' }
    ],
    rehabilitationMilestones: [
      'Independent bed transfers and toilet access before hospital discharge.',
      'Safe stair climbing using reciprocal or two-feet-to-one-step technique.',
      'Active hip abduction and quadriceps strengthening without pain.',
      'Smooth walking gait without crutches by 6 to 8 weeks.'
    ],
    faqs: [
      {
        question: 'How long will my hip replacement last?',
        answer: 'Modern National Joint Registry (NJR) data demonstrates that over 90% of total hip replacements remain in place and functioning well at 15 to 20 years, depending on patient age and activity level.'
      },
      {
        question: 'When can I drive after a hip replacement?',
        answer: 'Most patients return to driving around 6 weeks post-surgery, provided they have stopped strong pain medications and have sufficient muscle control to execute an emergency stop safely.'
      },
      {
        question: 'What type of anaesthetic is used?',
        answer: 'A spinal anaesthetic with light intravenous sedation is commonly preferred because it delivers excellent post-operative pain relief, reduces blood loss, and allows quicker recovery than general anaesthesia.'
      }
    ],
    relatedLinks: [
      { title: 'Robotic Hip Replacement', href: '/robotic-hip-replacement/', description: 'Mako robotic arm-assisted hip arthroplasty with 3D CT planning.' },
      { title: 'Computer-Assisted Hip Surgery', href: '/computer-assisted-hip-replacement/', description: 'Dynamic optical navigation for real-time component positioning.' },
      { title: 'Minimally Invasive Hip', href: '/minimally-invasive-hip-replacement/', description: 'Rottinger and direct anterior muscle-sparing approaches.' },
      { title: 'Hip Recovery Guide', href: '/hip-replacement-recovery/', description: 'Week-by-week rehabilitation, driving, and work timeline.' }
    ]
  },

  'robotic-hip-replacement': {
    slug: 'robotic-hip-replacement',
    badge: 'Robotic Arthroplasty',
    h1: 'Robotic-Assisted Hip Replacement Surgery',
    leadParagraph: 'Advanced robotic-assisted total hip replacement utilising pre-operative 3D CT planning and Mako robotic haptic arm guidance to achieve sub-millimetre component alignment.',
    overview: [
      'Robotic-assisted total hip replacement combines individualised 3D computed tomography (CT) modelling with tactile robotic arm technology. Mr Shivakumar Shankar has stated that he was the first surgeon to perform computer-assisted and robotic total hip replacement in Essex and North East London.',
      'The robotic system acts as a precision navigational tool under complete surgeon control. It enables virtual pre-operative sizing, dynamic assessment of spinopelvic mobility, and tactile boundaries that protect critical soft tissues during acetabular reaming.'
    ],
    whoMayBenefit: [
      'Patients with primary hip osteoarthritis seeking precise component orientation.',
      'Individuals with complex hip anatomy, dysplastic acetabular sockets, or previous trauma.',
      'Patients with altered spinal alignment or prior spinal fusion where pelvic tilt alters functional cup coverage.',
      'Active patients wanting optimised leg length equality and femoral offset restoration.'
    ],
    symptomsTreated: [
      'Severe groin and buttocks pain caused by advanced hip joint cartilage breakdown.',
      'Restricted hip abduction, internal rotation, and flexion.',
      'Leg length inequality resulting from femoral head collapse or socket wear.',
      'Inability to walk extended distances without pain or limp.'
    ],
    procedureExplanation: {
      title: 'The Robotic Hip Arthroplasty Process',
      description: 'The operation integrates high-resolution pre-surgical imaging with real-time robotic haptic guidance in the operating theatre.',
      steps: [
        'Pre-Operative 3D CT: A specialised low-dose pelvic and hip CT scan generates an exact digital 3D model of your unique bone geometry.',
        'Personalised Surgical Plan: Mr Shankar creates a pre-operative digital plan, calculating component dimensions, inclination, and anteversion.',
        'Intra-Operative Registration: Optical tracking arrays calibrate the patient\'s actual anatomy to the digital 3D CT model.',
        'Robotic-Guided Reaming: The robotic arm holds the reamer within pre-defined boundaries, preventing bone over-resection or angular drift.',
        'Haptic Component Placement: The acetabular shell is impacted to the exact planned depth and angle with real-time numeric verification.'
      ]
    },
    technologyComparison: {
      title: 'Robotic Guidance vs Conventional Methods',
      description: 'Robotic assistance is designed to reduce orientation outliers while keeping the surgeon entirely in control.',
      points: [
        { label: 'Sub-Millimetre Accuracy', detail: 'Enforces component inclination and anteversion within strict planned target zones.' },
        { label: 'Haptic Soft-Tissue Shield', detail: 'Robotic feedback prevents reamers from extending beyond defined bony margins.' },
        { label: 'Surgeon Driven', detail: 'The robot never acts independently or makes decisions; it executes the surgeon\'s plan.' },
        { label: 'Balanced Evidence', detail: 'Robotic assistance reduces alignment outliers; long-term clinical outcome comparisons remain an active area of ongoing registry research.' }
      ]
    },
    benefitsAndLimitations: {
      benefits: [
        'Precise reproduction of pre-planned cup inclination and anteversion angles.',
        'Individualised assessment of pelvic tilt and spinopelvic mechanics.',
        'Conservation of healthy acetabular bone stock during socket preparation.',
        'Accurate restoration of natural femoral offset and leg length.'
      ],
      limitations: [
        'Requires a pre-operative CT scan exposing the patient to a modest diagnostic radiation dose.',
        'Requires fixation of optical tracking pins in the pelvic bone.',
        'Does not guarantee superior longevity or zero complications compared to well-performed manual surgery.'
      ]
    },
    risksAndComplications: [
      'Standard hip arthroplasty risks: infection, blood clots (DVT/PE), bleeding, and dislocation.',
      'Pin site discomfort or rare stress reaction at temporary pelvic tracking pin locations.',
      'Software or optical tracker line-of-sight interruption requiring conversion to conventional instruments.'
    ],
    recoveryTimeline: [
      { phase: 'Day 0', description: 'Assisted standing and walking using crutches on the afternoon of surgery.' },
      { phase: 'Weeks 1 to 3', description: 'Home recovery, gentle home exercises, walking with two crutches transitioning to one.' },
      { phase: 'Weeks 4 to 6', description: 'Unrestricted flat walking, weaning off walking aids, return to driving if emergency stop is safe.' },
      { phase: 'Weeks 6 to 12', description: 'Progressive return to golf, swimming, cycling, and active daily lifestyle.' }
    ],
    rehabilitationMilestones: [
      'Early activation of hip abductors and gluteal muscles.',
      'Symmetrical walking gait without trendelenburg limp.',
      'Return to independent staircase negotiation.'
    ],
    faqs: [
      {
        question: 'Does the robot perform the surgery by itself?',
        answer: 'No. The surgeon performs the surgery at all times. The robotic arm is a robotic instrument held and guided by Mr Shankar that prevents deviation outside the planned safety zone.'
      },
      {
        question: 'Is robotic hip replacement suitable for everyone?',
        answer: 'Most patients requiring total hip replacement are eligible, though conventional surgery remains an excellent, highly proven option. Mr Shankar will discuss whether robotic planning is beneficial for your specific anatomy.'
      }
    ],
    relatedLinks: [
      { title: 'Total Hip Replacement', href: '/hip-replacement/', description: 'Overview of primary and complex hip replacement.' },
      { title: 'Conventional vs Robotic Arthroplasty', href: '/conventional-vs-computer-assisted-vs-robotic-surgery/', description: 'Educational breakdown of technologies and clinical evidence.' },
      { title: 'Computer-Assisted Hip Surgery', href: '/computer-assisted-hip-replacement/', description: 'Dynamic optical navigation without robotic arms.' }
    ]
  },

  'computer-assisted-hip-replacement': {
    slug: 'computer-assisted-hip-replacement',
    badge: 'Navigated Arthroplasty',
    h1: 'Computer-Assisted & Navigated Hip Replacement',
    leadParagraph: 'Intra-operative optical navigation providing live digital verification of component inclination, anteversion, and limb length during hip arthroplasty without requiring pre-operative CT scans.',
    overview: [
      'Computer-assisted hip surgery utilises optical sensor arrays and intelligent tracking software to guide implant orientation during surgery. Mr Shankar has extensive experience in computer-navigated arthroplasty, having completed specialist fellowship training at premier centres.',
      'Unlike conventional visual alignment jigs, navigation calculates real-time spatial angles, helping the surgeon position the acetabular cup accurately within the safe zone, particularly in patients with unusual pelvic tilt.'
    ],
    whoMayBenefit: [
      'Patients with hip arthritis desiring verified component orientation without pre-operative CT radiation.',
      'Individuals with spinal deformities or prior lumbar spine surgery where pelvic tilt alters functional hip kinematics.',
      'Patients with atypical pelvic morphology where conventional visual landmarks are obscured.'
    ],
    symptomsTreated: [
      'Severe hip osteoarthritis pain, stiffness, and reduced walking capacity.',
      'Pain in the groin radiating down the anterior thigh to the knee.',
      'Difficulty putting on socks, getting in and out of cars, or negotiating steps.'
    ],
    procedureExplanation: {
      title: 'How Computer Navigation Works',
      description: 'Optical cameras communicate with wireless reference arrays placed on the pelvis and surgical instruments.',
      steps: [
        'Anatomical Landmark Registration: Key pelvic landmarks are digitised using an optical probe to calibrate the patient\'s coronal plane.',
        'Live Real-Time Feedback: As the acetabular reamer and cup impactor are positioned, digital angles appear continuously on screen.',
        'Angle Confirmation: The surgeon verifies exact inclination (typically 40°–45°) and anteversion (15°–20°) before final impaction.',
        'Limb Length Tracking: Real-time verification ensures that planned leg length and femoral offset are accurately restored.'
      ]
    },
    benefitsAndLimitations: {
      benefits: [
        'Reduces orientation outliers compared with purely visual manual guides.',
        'No pre-operative CT scan required (zero additional radiation).',
        'Continuous numeric feedback on leg length and cup position.',
        'Proven safety profile across thousands of audited registry procedures.'
      ],
      limitations: [
        'Requires temporary optical tracking pins in the pelvic bone.',
        'Slightly extends surgical preparation time by a few minutes.',
        'Does not include physical haptic feedback boundaries provided by robotic arms.'
      ]
    },
    risksAndComplications: [
      'Standard hip arthroplasty risks: infection, DVT/PE, bleeding, stiffness, or dislocation.',
      'Temporary pin site discomfort on the pelvic crest.'
    ],
    recoveryTimeline: [
      { phase: 'Day 0', description: 'Assisted standing with crutches within hours of surgery.' },
      { phase: 'Weeks 1 to 2', description: 'Mobilising with crutches, wound monitoring, and gentle walking.' },
      { phase: 'Weeks 6+', description: 'Return to driving and resumption of light recreational activities.' }
    ],
    rehabilitationMilestones: [
      'Restoration of symmetrical step length.',
      'Active hip abduction strength development.'
    ],
    faqs: [
      {
        question: 'How does computer navigation differ from robotic surgery?',
        answer: 'Computer navigation provides live digital feedback and measurements on a screen while the surgeon holds all instruments manually. Robotic surgery adds a physical robotic arm with haptic boundary enforcement.'
      }
    ],
    relatedLinks: [
      { title: 'Total Hip Replacement', href: '/hip-replacement/', description: 'Primary hip replacement surgery overview.' },
      { title: 'Robotic Hip Replacement', href: '/robotic-hip-replacement/', description: 'Mako robotic guidance with 3D CT modelling.' }
    ]
  },

  'minimally-invasive-hip-replacement': {
    slug: 'minimally-invasive-hip-replacement',
    badge: 'Tissue-Sparing Arthroplasty',
    h1: 'Minimally Invasive Hip Replacement Surgery',
    leadParagraph: 'Muscle-sparing hip replacement techniques, including the Rottinger and Direct Anterior approaches, designed to access the hip joint along natural muscle planes without detaching major tendons.',
    overview: [
      'Minimally invasive and muscle-sparing hip replacement aims to replace the damaged joint surfaces while minimising trauma to the surrounding musculature. Rather than detaching the gluteal abductors or major posterior rotators, these approaches work through natural inter-muscular intervals.',
      'Mr Shivakumar Shankar has completed specialised international training in muscle-sparing techniques, including the Rottinger approach at the Centre Hospitalier de Haguenau in France and the Direct Anterior Approach with Professor Wagner\'s unit in Germany.'
    ],
    whoMayBenefit: [
      'Patients seeking tissue-sparing hip surgery with accelerated early functional recovery.',
      'Active individuals who wish to preserve muscle architecture and minimise post-operative limp.',
      'Patients with suitable bone morphology and body habitus for anterior or anterolateral exposure.'
    ],
    symptomsTreated: [
      'Severe osteoarthritis of the hip with disabling pain and loss of motion.',
      'Difficulty walking, climbing stairs, and putting on shoes.',
      'Sleep disturbance due to hip discomfort.'
    ],
    procedureExplanation: {
      title: 'The Muscle-Sparing Surgical Approach',
      description: 'Working between natural anatomical intervals allows access to the hip capsule without cutting key stabilising tendons.',
      steps: [
        'Anterolateral / Anterior Interval: The surgeon enters along the natural inter-muscular plane between the tensor fasciae latae and gluteus medius.',
        'Capsular Exposure: The anterior hip capsule is opened, exposing the arthritic femoral head and acetabulum.',
        'Precision Joint Replacement: The arthritic bone is prepared and modern implants are seated with meticulous care.',
        'Tissue Preservation: Muscles remain in continuity, facilitating immediate post-operative stability.'
      ]
    },
    benefitsAndLimitations: {
      benefits: [
        'Reduced soft-tissue disruption and lower post-operative muscular soreness.',
        'Earlier return of independent walking without abductor limp.',
        'Inherent joint stability with reduced risk of posterior dislocation.',
        'Shorter hospital stays and rapid return to everyday activities.'
      ],
      limitations: [
        'Technically demanding surgery requiring specialist training and dedicated instruments.',
        'Not suitable for all anatomies (e.g. severe obesity, severe joint dysplasia, or complex prior surgeries).',
        'Potential temporary sensory numbness over the lateral thigh (lateral femoral cutaneous nerve irritation).'
      ]
    },
    risksAndComplications: [
      'Standard surgical risks: infection, blood clots, fracture, or nerve injury.',
      'Transient numbness over the outer thigh (typically resolves over weeks to months).'
    ],
    recoveryTimeline: [
      { phase: 'Day 0', description: 'Early bed-to-chair transfer and walking down the ward on the day of surgery.' },
      { phase: 'Weeks 1 to 3', description: 'Rapid reduction in walking aid dependency, often walking with a single stick by week 2.' },
      { phase: 'Weeks 4 to 6', description: 'Return to driving and return to desk-based employment.' }
    ],
    rehabilitationMilestones: [
      'Early independent unassisted walking with minimal limp.',
      'Rapid recovery of active straight leg raise and hip abduction.'
    ],
    faqs: [
      {
        question: 'What is the Rottinger approach?',
        answer: 'The Rottinger approach is a muscle-sparing anterolateral technique developed in Europe that accesses the hip joint without detaching the gluteal muscles, promoting rapid early stability.'
      }
    ],
    relatedLinks: [
      { title: 'Total Hip Replacement', href: '/hip-replacement/', description: 'Primary hip arthroplasty overview.' },
      { title: 'Robotic Hip Surgery', href: '/robotic-hip-replacement/', description: 'Mako robotic arm-assisted precision.' }
    ]
  },

  'knee-replacement': {
    slug: 'knee-replacement',
    badge: 'Knee Arthroplasty',
    h1: 'Specialist Knee Replacement & Arthroplasty in London & Essex',
    leadParagraph: 'Consultant-led total knee replacement, robotic-assisted Mako arthroplasty, and unicompartmental partial knee replacement engineered to relieve knee arthritis and restore stable limb alignment.',
    overview: [
      'Knee replacement surgery restores joint function and eliminates severe arthritis pain when non-operative treatments—such as weight management, physiotherapy, supportive braces, and intra-articular injections—no longer manage symptoms effectively.',
      'Mr Shivakumar Shankar is a specialist hip and knee surgeon appointed as NHS Consultant at BHRUT and providing private care at Spire Hartswood and Nuffield Health Brentwood Hospitals. His practice encompasses conventional knee replacement, computer-navigated alignment, and Mako robotic-assisted arthroplasty.'
    ],
    whoMayBenefit: [
      'Patients with advanced osteoarthritis, rheumatoid arthritis, or post-traumatic arthritis of the knee.',
      'Individuals with severe knee pain during walking, standing, or climbing stairs.',
      'Patients experiencing night pain, resting joint stiffness, or swelling.',
      'Patients with progressive bow-leg (varus) or knock-knee (valgus) deformity.'
    ],
    symptomsTreated: [
      'Weight-bearing knee pain and joint stiffness.',
      'Loss of full knee extension or limited flexion.',
      'Crepitus, catching, and sensation of joint wear.',
      'Instability or giving-way caused by arthritic joint surface loss.'
    ],
    procedureExplanation: {
      title: 'How Knee Replacement is Performed',
      description: 'Total knee replacement resurfaces the damaged ends of the femur and tibia with precisely shaped metallic alloy components separated by a durable medical-grade polyethylene bearing.',
      steps: [
        'Surgical Access: Anterior midline skin incision with gentle medial parapatellar arthrotomy.',
        'Distal Femoral Resurfacing: Precise bone cuts remove worn cartilage while preserving collateral ligament attachments.',
        'Tibial Preparation: The top of the tibia is prepared perpendicular to the mechanical axis.',
        'Ligament Balancing: Crucial balance of flexion and extension gaps ensures the knee feels stable throughout its full range of movement.',
        'Component Fixation: High-strength surgical bone cement secures the femoral and tibial components; a high-density polyethylene insert is locked in place.'
      ]
    },
    technologyComparison: {
      title: 'Conventional, Navigated & Robotic Approaches',
      description: 'Mr Shankar selects the optimal surgical alignment method tailored to patient anatomy.',
      points: [
        { label: 'Conventional Arthroplasty', detail: 'Uses intramedullary rods and mechanical cutting jigs to establish neutral mechanical alignment.' },
        { label: 'Computer Navigation', detail: 'Provides live digital angular readouts of bone resections and ligament tensioning.' },
        { label: 'Robotic-Assisted (Mako)', detail: 'Employs 3D CT modelling and robotic arm haptic boundaries for sub-millimetre bony resections.' },
        { label: 'Kinematic & Functional Alignment', detail: 'Respects individual pre-arthritic joint line obliquity and natural constitutional alignment.' }
      ]
    },
    benefitsAndLimitations: {
      benefits: [
        'Predictable, long-lasting relief from severe knee arthritis pain.',
        'Correction of bow-legged or knock-kneed alignment.',
        'Restoration of functional walking distance and everyday independence.',
        'Excellent long-term survivorship recorded on the National Joint Registry.'
      ],
      limitations: [
        'Knee replacements can feel slightly different from a natural, unoperated knee.',
        'Kneeling on hard surfaces may cause numbness or discomfort.',
        'Recovery requires commitment to dedicated daily physiotherapy for several months.'
      ]
    },
    risksAndComplications: [
      'Infection (<1% with clean-air laminar flow theatres and prophylactic antibiotics).',
      'Blood clots (DVT or PE, minimised with anti-coagulation and calf compression).',
      'Stiffness requiring manipulation under anaesthetic (MUA).',
      'Nerve or vascular injury, persistent anterior knee discomfort, or component loosening over time.'
    ],
    recoveryTimeline: [
      { phase: 'Day 0', description: 'Assisted standing and initial knee bends with hospital physiotherapist.' },
      { phase: 'Weeks 1 to 2', description: 'Mobilising with crutches, focusing on achieving full straight knee extension (0°).' },
      { phase: 'Weeks 3 to 6', description: 'Aiming for 90°+ knee flexion, weaning down to a single stick, managing swelling.' },
      { phase: 'Weeks 6 to 12', description: 'Return to driving once emergency braking is safe, resumption of low-impact recreation.' }
    ],
    rehabilitationMilestones: [
      'Achieving full knee extension (flat to bed) by week 2.',
      'Achieving 90° to 110° flexion by weeks 4 to 6.',
      'Active straight leg raise without extensor lag.',
      'Independent stair climbing before hospital discharge.'
    ],
    faqs: [
      {
        question: 'How much bend will I get after a knee replacement?',
        answer: 'Most patients achieve 100° to 120° of knee flexion, which is more than sufficient for climbing stairs, sitting in standard chairs, and driving.'
      },
      {
        question: 'Why is getting the knee straight so important early on?',
        answer: 'Full extension (0°) allows you to stand with your knee locked in a biomechanically stable position without exhausting your quadriceps muscles, preventing fatigue and a persistent limp.'
      }
    ],
    relatedLinks: [
      { title: 'Robotic Knee Replacement', href: '/robotic-knee-replacement/', description: 'Mako robotic-assisted total and partial knee surgery.' },
      { title: 'Partial Knee Replacement', href: '/partial-knee-replacement/', description: 'Preserving natural cruciate ligaments with unicompartmental resurfacing.' },
      { title: 'Knee Recovery Guide', href: '/knee-replacement-recovery/', description: 'Detailed exercise and recovery guide for knee patients.' },
      { title: 'Physiotherapy Protocols', href: '/physio-protocols/', description: 'Downloadable PDF rehabilitation pathways.' }
    ]
  },

  'robotic-knee-replacement': {
    slug: 'robotic-knee-replacement',
    badge: 'Robotic Arthroplasty',
    h1: 'Robotic-Assisted Knee Replacement (Mako)',
    leadParagraph: 'Advanced robotic-assisted total knee replacement combining pre-operative 3D CT planning, dynamic ligament balancing, and haptic robotic arm guidance to optimise joint kinematics.',
    overview: [
      'Robotic-assisted knee replacement utilising the Stryker Mako robotic system provides an exceptional level of precision in bone preparation and component alignment. Mr Shivakumar Shankar has extensive experience in robotic joint arthroplasty, performing robotic hip and knee surgery across London and Essex.',
      'The technology integrates an individualised 3D CT scan with intra-operative dynamic tension mapping, enabling the surgeon to fine-tune implant positioning to the patient\'s unique soft-tissue tension before making a single bone cut.'
    ],
    whoMayBenefit: [
      'Patients with advanced knee osteoarthritis seeking sub-millimetre component alignment.',
      'Individuals with complex constitutional knee alignment or significant deformity.',
      'Patients desiring customised ligament balancing throughout the complete range of motion.'
    ],
    symptomsTreated: [
      'Disabling knee pain from tricompartmental or bicompartmental arthritis.',
      'Progressive varus or valgus deformity.',
      'Joint effusion, warmth, and mobility restriction.'
    ],
    procedureExplanation: {
      title: 'The Robotic Knee Arthroplasty Sequence',
      description: 'How 3D CT modelling and robotic guidance operate during surgery.',
      steps: [
        'Pre-Op 3D CT Modelling: A dedicated CT scan generates an exact virtual 3D replica of the patient\'s knee.',
        'Virtual Dynamic Balancing: Intra-operatively, the knee is taken through its full arc of motion while sensors measure ligament tension in flexion and extension.',
        'Plan Adjustment: Mr Shankar fine-tunes implant sizing and rotation digitally to achieve balanced joint gaps.',
        'Robotic Haptic Resection: The robotic arm guides the saw blade within predefined boundaries, protecting the posterior cruciate and collateral ligaments.'
      ]
    },
    technologyComparison: {
      title: 'Robotic Guidance vs Conventional Alignment',
      description: 'A balanced look at what robotic technology offers.',
      points: [
        { label: 'Sub-Millimetre Accuracy', detail: 'Bone cuts correspond precisely to the pre-planned digital template.' },
        { label: 'Dynamic Ligament Tensioning', detail: 'Soft tissues are balanced virtually before bone cuts are finalised.' },
        { label: 'Haptic Boundary Protection', detail: 'Prevents saw excursion into posterior neurovascular or collateral structures.' },
        { label: 'Evidence Perspective', detail: 'Robotic assistance reduces alignment outliers; clinical recovery remains dependent on dedicated physiotherapy.' }
      ]
    },
    benefitsAndLimitations: {
      benefits: [
        'High precision in achieving balanced flexion and extension gaps.',
        'Minimised bone resection tailored to patient-specific anatomy.',
        'Protection of adjacent soft-tissue envelopes via haptic control.'
      ],
      limitations: [
        'Requires a pre-operative CT scan.',
        'Requires placement of temporary optical tracking pins in the femur and tibia.',
        'Does not guarantee that the knee will feel 100% like a natural unoperated joint.'
      ]
    },
    risksAndComplications: [
      'Standard knee replacement risks: infection, DVT/PE, stiffness, or persistent pain.',
      'Temporary tracking pin site tenderness.'
    ],
    recoveryTimeline: [
      { phase: 'Day 0', description: 'Standing and walking with physiotherapist assistance.' },
      { phase: 'Weeks 1 to 4', description: 'Restoring full extension, managing swelling, and working towards 90° flexion.' },
      { phase: 'Weeks 6+', description: 'Driving resumption and return to active low-impact recreation.' }
    ],
    rehabilitationMilestones: [
      'Full passive and active extension by week 2.',
      'Independent walking without crutches around weeks 4 to 6.'
    ],
    faqs: [
      {
        question: 'Does the robot make decisions during surgery?',
        answer: 'No. The robot is an instrument guided by Mr Shankar. The surgeon makes all clinical judgements and controls the robotic arm throughout.'
      }
    ],
    relatedLinks: [
      { title: 'Knee Replacement', href: '/knee-replacement/', description: 'Total knee replacement overview.' },
      { title: 'Partial Knee Replacement', href: '/partial-knee-replacement/', description: 'Robotic partial knee resurfacing.' }
    ]
  },

  'computer-assisted-knee-replacement': {
    slug: 'computer-assisted-knee-replacement',
    badge: 'Navigated Arthroplasty',
    h1: 'Computer-Assisted Knee Replacement Surgery',
    leadParagraph: 'Real-time computer navigation providing intra-operative digital tracking of alignment, mechanical axis, and joint gaps during knee replacement surgery.',
    overview: [
      'Computer-assisted knee surgery utilises optical tracking sensors to measure femoral and tibial bone resection angles with continuous digital feedback on an operating theatre monitor. Mr Shankar has utilised computer-navigated knee replacement for approximately 9 years in his arthroplasty practice.',
      'Navigation provides real-time verification of the mechanical axis without requiring pre-operative CT radiation, making it an excellent option for patients with femoral or tibial deformities.'
    ],
    whoMayBenefit: [
      'Patients with knee arthritis seeking precise mechanical alignment verification.',
      'Individuals with previous retained metalwork, intramedullary canal obstruction, or extra-articular deformity where conventional rods cannot be passed.'
    ],
    symptomsTreated: [
      'Severe knee joint pain, morning stiffness, and difficulty walking.'
    ],
    procedureExplanation: {
      title: 'Navigation Workflow in Knee Arthroplasty',
      description: 'Optical arrays attached to the femur and tibia track bone position continuously.',
      steps: [
        'Anatomical Mapping: The hip centre, knee centre, and ankle centre are registered to establish the patient\'s true mechanical axis.',
        'Resection Verification: As cutting jigs are pinned, digital degrees of varus/valgus and slope are confirmed.',
        'Gap Balancing: Joint gap tension is measured digitally in extension and flexion.'
      ]
    },
    benefitsAndLimitations: {
      benefits: [
        'Eliminates the need for long intramedullary alignment rods in the femoral canal, reducing fat embolisation risk.',
        'Reduces alignment outliers.',
        'No pre-operative CT scan radiation required.'
      ],
      limitations: [
        'Requires temporary optical tracking pins in the femur and tibia.',
        'Slightly extends operating time by a few minutes.'
      ]
    },
    risksAndComplications: [
      'Standard knee arthroplasty risks: infection, blood clots, stiffness, or loosening.',
      'Pin site discomfort.'
    ],
    recoveryTimeline: [
      { phase: 'Day 0', description: 'Early mobilisation and straight leg raise exercises.' },
      { phase: 'Weeks 1 to 6', description: 'Progressive range of motion, swelling control, and walking improvement.' }
    ],
    rehabilitationMilestones: [
      'Full knee extension and progressive flexion to 90°+.'
    ],
    faqs: [
      {
        question: 'Why choose computer-assisted navigation?',
        answer: 'It provides digital alignment accuracy without requiring pre-operative CT radiation, particularly advantageous if previous hardware blocks the marrow canal.'
      }
    ],
    relatedLinks: [
      { title: 'Total Knee Replacement', href: '/knee-replacement/', description: 'Primary knee arthroplasty overview.' },
      { title: 'Robotic Knee Replacement', href: '/robotic-knee-replacement/', description: 'Mako robotic technology.' }
    ]
  },

  'partial-knee-replacement': {
    slug: 'partial-knee-replacement',
    badge: 'Unicompartmental Arthroplasty',
    h1: 'Partial (Unicompartmental) Knee Replacement',
    leadParagraph: 'Tissue-preserving joint resurfacing replacing only the damaged compartment of the knee while keeping healthy cartilage, natural bone, and both cruciate ligaments completely intact.',
    overview: [
      'When arthritis is strictly confined to one compartment of the knee—most commonly the medial (inner) compartment or the patellofemoral joint—a partial knee replacement offers an alternative to total joint replacement. Because both the anterior cruciate ligament (ACL) and posterior cruciate ligament (PCL) are preserved, the knee retains its natural kinematics and proprioception.',
      'Mr Shivakumar Shankar performs partial knee replacement using conventional precision instrumentation and robotic assistance (Mako Partial Knee), offering rapid recovery and a natural-feeling joint for suitable candidates.'
    ],
    whoMayBenefit: [
      'Patients with isolated medial, lateral, or patellofemoral osteoarthritis.',
      'Individuals with functioning, intact anterior and posterior cruciate ligaments.',
      'Patients with a stable knee joint and correctable deformity.'
    ],
    symptomsTreated: [
      'Pain localised specifically to the inner side of the knee joint.',
      'Pain when rising from a chair or descending stairs while other parts of the knee feel normal.',
      'Absence of widespread lateral or patellofemoral joint pain.'
    ],
    procedureExplanation: {
      title: 'How Partial Knee Replacement Works',
      description: 'Only the worn articular surface of the affected compartment is resurfaced.',
      steps: [
        'Diagnostic Verification: Visual inspection confirms that lateral and patellofemoral compartments and cruciate ligaments are healthy.',
        'Minimal Bone Resection: Only 2 to 3 millimetres of bone are shaved from the worn femoral condyle and tibial plateau.',
        'Component Fixation: Precision metallic femoral and tibial implants are cemented in place with a mobile or fixed polyethylene bearing.',
        'Preserved Anatomy: Normal ligaments and remaining healthy cartilage continue to function naturally.'
      ]
    },
    benefitsAndLimitations: {
      benefits: [
        'Smaller surgical incision and minimal soft-tissue disruption.',
        'Retention of natural cruciate ligaments, resulting in a more natural knee feel.',
        'Faster rehabilitation, shorter hospital stay, and quicker return to work.',
        'Reduced blood loss and lower complication rates compared with total knee replacement.'
      ],
      limitations: [
        'Only suitable for patients with disease strictly isolated to one compartment.',
        'Arthritis can potentially develop in the remaining unreplaced compartments over subsequent years.',
        'Slightly higher long-term revision rate in national registries compared with total knee replacement.'
      ]
    },
    risksAndComplications: [
      'Standard surgical risks: infection, blood clots, stiffness, or fracture.',
      'Progression of arthritis in the remaining compartments over time.',
      'Bearing dislocation (if mobile bearing design is used).'
    ],
    recoveryTimeline: [
      { phase: 'Day 0', description: 'Weight-bearing and walking on the afternoon of surgery.' },
      { phase: 'Weeks 1 to 2', description: 'Rapid weaning off crutches, often walking independently around the house by week 2.' },
      { phase: 'Weeks 3 to 6', description: 'Return to driving, sedentary work, and active daily walking.' }
    ],
    rehabilitationMilestones: [
      'Rapid recovery of full extension and 110°+ flexion.',
      'Normal walking gait within 2 to 3 weeks.'
    ],
    faqs: [
      {
        question: 'Can a partial knee replacement be converted to a total knee replacement later?',
        answer: 'Yes. If arthritis develops in the other compartments years later, the partial knee can be straightforwardly revised to a standard total knee replacement.'
      }
    ],
    relatedLinks: [
      { title: 'Total Knee Replacement', href: '/knee-replacement/', description: 'Total knee arthroplasty overview.' },
      { title: 'Robotic Knee Surgery', href: '/robotic-knee-replacement/', description: 'Mako robotic partial knee resurfacing.' }
    ]
  },

  'knee-arthroscopy': {
    slug: 'knee-arthroscopy',
    badge: 'Keyhole Surgery',
    h1: 'Knee Arthroscopy & Keyhole Joint Preservation Surgery',
    leadParagraph: 'Minimally invasive keyhole knee surgery for torn meniscal cartilage, cartilage preservation, and joint debridement in London and Essex.',
    overview: [
      'Knee arthroscopy is a minimally invasive keyhole procedure performed through two small puncture incisions. A miniature camera (arthroscope) illuminates the interior of the knee, allowing Mr Shankar to inspect, repair, or trim damaged tissues with micro-surgical instruments.',
      'Mr Shankar has performed more than 1,200 knee arthroscopies. His surgical priority is always joint and tissue preservation: wherever biologically feasible, torn meniscal cartilage is repaired using specialised suture implants rather than removed, preserving natural shock absorption.'
    ],
    whoMayBenefit: [
      'Patients with symptomatic, mechanically locking meniscal tears unresponsive to conservative physiotherapy.',
      'Athletes and active individuals with acute sports-related cartilage or meniscal injury.',
      'Patients experiencing mechanical catching, clicking, or giving-way caused by loose bodies.'
    ],
    symptomsTreated: [
      'Sharp joint-line pain aggravated by twisting or squatting.',
      'True mechanical locking (inability to fully straighten the knee).',
      'Painful catching, clicking, or recurrent swelling after sports.'
    ],
    procedureExplanation: {
      title: 'The Arthroscopic Procedure',
      description: 'Performed as a day-case procedure under light general or regional anaesthesia.',
      steps: [
        'Portals: Two 5-millimetre puncture incisions are made at the front of the knee.',
        'Fluid Inflow: Sterile saline distends the joint to provide crystal-clear visual clarity.',
        'Diagnostic Sweep: Systematic inspection of the patella, trochlea, medial meniscus, ACL, PCL, and lateral meniscus.',
        'Targeted Intervention: Meniscal repair sutures placed, torn unstable flaps trimmed (partial meniscectomy), or loose fragments removed.',
        'Closure: Portals closed with adhesive tape or dissolvable sutures and waterproof dressing applied.'
      ]
    },
    benefitsAndLimitations: {
      benefits: [
        'Day-case procedure: return home the same day.',
        'Minimal post-operative pain and rapid wound healing.',
        'Meniscal preservation preserves long-term shock-absorbing protection.',
        'Rapid return to sedentary work (often within 1 to 2 weeks).'
      ],
      limitations: [
        'Arthroscopy is generally not effective for advanced, bone-on-bone widespread osteoarthritis.',
        'Meniscal repairs require a period of protected weight-bearing and restricted deep flexion.'
      ]
    },
    risksAndComplications: [
      'Infection (<0.2%), deep vein thrombosis (DVT), joint effusion, or failure of meniscal repair to heal.'
    ],
    recoveryTimeline: [
      { phase: 'Days 1 to 3', description: 'Rest, ice, elevation, and gentle active range of motion at home.' },
      { phase: 'Weeks 1 to 2', description: 'Resumption of normal flat walking, return to desk work.' },
      { phase: 'Weeks 4 to 8', description: 'Return to running, gym training, and sports-specific drills.' }
    ],
    rehabilitationMilestones: [
      'Normal unassisted walking gait within 7 to 10 days.',
      'Full pain-free range of motion.'
    ],
    faqs: [
      {
        question: 'Will knee arthroscopy cure my arthritis?',
        answer: 'Arthroscopy is primarily effective for mechanical problems like torn cartilage, locking, or loose bodies. It does not reverse generalised arthritis; where arthritis is advanced, joint replacement is more appropriate.'
      }
    ],
    relatedLinks: [
      { title: 'Knee Replacement', href: '/knee-replacement/', description: 'Solutions for advanced joint arthritis.' },
      { title: 'Partial Knee Replacement', href: '/partial-knee-replacement/', description: 'Unicompartmental resurfacing.' }
    ]
  }
};
