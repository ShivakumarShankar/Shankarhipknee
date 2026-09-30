// Structured Clinical Data for Procedures, Risks, and Patient Information Guides
// Authored by Mr Shivakumar Shankar - Consultant Robotic Hip and Knee Surgeon

export interface ProcedureRiskInfo {
  id: string;
  procedureTitle: string;
  joint: 'Hip' | 'Knee';
  category: 'hip' | 'knee' | 'robotic' | 'preservation' | 'injection';
  subtitle: string;
  filename: string;
  shortSummary: string;
  nonOperativeOptions: {
    analgesia: string;
    activityModification: string;
    exercises: string[];
    supplements: string[];
  };
  operativePlan: {
    summary: string;
    approachesAndTechnology: string[];
    objectives: string[];
  };
  surgicalRisks: {
    title: string;
    incidence?: string;
    description: string;
    warningSigns?: string[];
    managementOrAssessment: string;
  }[];
  postoperativeSymptomsToReport: {
    emergency999: string[];
    urgentContactTeam: string[];
    normalExpectedSymptoms: string[];
  };
  recoveryAndRehabilitation: {
    hospitalStay: string;
    mobilisation: string;
    driving: string;
    work: string;
    followUp: string;
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface ComplicationGuide {
  id: string;
  title: string;
  joint: 'Hip' | 'Knee' | 'Hip & Knee';
  category: 'Infection' | 'Blood Clots' | 'Dislocation' | 'Nerve Injury' | 'Fracture' | 'Pain & Stiffness' | 'Instability' | 'Arthroscopy';
  filename: string;
  whatIsThisProblem: string;
  symptomsToLookFor: string[];
  howIsItAssessed: string[];
  howIsItTreated: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  emergencyNotice: string;
}

export const PROCEDURE_RISK_DATA: ProcedureRiskInfo[] = [
  {
    id: "total-hip-replacement",
    procedureTitle: "Total Hip Replacement",
    joint: "Hip",
    category: "hip",
    subtitle: "Conventional, Computer-Assisted & Robotic",
    filename: "Mr_Shankar_Total_Hip_Replacement_Patient_Guide_and_Risks.pdf",
    shortSummary: "Comprehensive patient information guide detailing non-operative management, surgical planning, robotic precision, and detailed risks and complications of total hip replacement.",
    nonOperativeOptions: {
      analgesia: "Optimised medical analgesia including simple analgesics and anti-inflammatory medications taken under clinical guidance to manage arthritic inflammation.",
      activityModification: "Pacing daily activities, avoiding sustained high-impact loading, using supportive footwear, and weight optimisation to reduce mechanical joint forces.",
      exercises: [
        "Stationary and outdoor cycling (promotes smooth joint fluid lubrication without impact)",
        "Swimming and hydrotherapy (low-gravity aerobic conditioning)",
        "Cross-trainer / Elliptical machine (fluid low-impact cardiovascular training)",
        "Rowing machine and targeted core/hip abductor strengthening exercises"
      ],
      supplements: [
        "Glucosamine Sulphate (cartilage matrix support)",
        "Cod Liver Oil / Omega-3 Essential Fatty Acids (natural joint lubrication and anti-inflammatory action)",
        "Turmeric / Curcumin extract (clinically useful natural anti-inflammatory in some patients)"
      ]
    },
    operativePlan: {
      summary: "Total hip replacement replaces the diseased femoral head and worn acetabular socket with precision artificial components engineered to eradicate joint pain and restore leg mobility.",
      approachesAndTechnology: [
        "Robotic-assisted and computer-navigated total hip arthroplasty (first pioneered in Essex & NE London by Mr Shankar)",
        "Rottinger muscle-sparing approach (developed at Centre Hospitalier de Haguenau, France)",
        "Minimally invasive anterior approach navigating natural muscular planes without muscle detachment",
        "Modern posterior approach with anatomical soft-tissue repair",
        "High-performance ceramic-on-polyethylene bearing surfaces"
      ],
      objectives: [
        "Eradication of arthritic groin, buttock, and thigh pain",
        "Accurate restoration of femoral offset and anatomical leg length",
        "Rapid mobilisation within hours of surgery through Enhanced Recovery pathways"
      ]
    },
    surgicalRisks: [
      {
        title: "Infection (Superficial Wound or Deep Prosthetic Joint Infection)",
        incidence: "Uncommon (< 1 - 2%)",
        description: "Joint replacement infection is uncommon but important to recognise. Infection may occur soon after surgery (skin and wound) or, less commonly, months or years later from bacteria entering the bloodstream from another source.",
        warningSigns: [
          "Increasing or worsening hip/groin pain",
          "Spreading redness, warmth, or swelling around the wound",
          "Wound drainage, persistent ooze, or pus",
          "Fever, chills, or feeling generally unwell",
          "A new deterioration in mobility or walking function"
        ],
        managementOrAssessment: "Assessed by clinical examination, blood inflammatory markers (ESR, CRP), plain X-rays, and sterile joint aspiration for microbiology. Treated with targeted antibiotics, wound care, surgical washout with implant retention (DAIR) in selected early cases, or revision surgery for established deep infection."
      },
      {
        title: "Blood Clots (Venous Thromboembolism: DVT & PE)",
        incidence: "Temporary elevated risk following major joint surgery",
        description: "Hip replacement temporarily increases the risk of deep vein thrombosis (DVT) in the calf or thigh, and pulmonary embolism (PE) if a clot travels to the lungs.",
        warningSigns: [
          "New or increasing calf pain, tenderness, or warmth",
          "One-sided calf or leg swelling",
          "Sudden breathlessness or difficulty breathing (Requires 999)",
          "Chest pain, coughing blood, dizziness, or collapse (Requires 999)"
        ],
        managementOrAssessment: "Prevention includes same-day mobilisation, prescribed anticoagulant medications (do not stop without consulting the team if bruising occurs), and mechanical compression. Assessed via urgent venous ultrasound or emergency hospital CT pulmonary angiography."
      },
      {
        title: "Dislocation of Hip Prosthesis",
        incidence: "Low risk; minimised by robotic alignment and muscle-sparing approaches",
        description: "A hip replacement can dislocate when the prosthetic ball comes out of the socket. Risk varies with patient factors, surgical approach, implant orientation, and movement compliance.",
        warningSigns: [
          "Sudden severe hip or groin pain",
          "An inability to move the hip or bear weight normally",
          "The operated leg appearing visibly shortened or rotated",
          "A sudden major change in hip position or function"
        ],
        managementOrAssessment: "Requires immediate hospital attendance for examination and urgent X-ray reduction. Recurrent dislocation requires specialist investigation of orientation, hip precautions, bracing in selected cases, or revision surgery."
      },
      {
        title: "Leg-Length Difference (Discrepancy)",
        incidence: "Sensation common early on; true permanent discrepancy rare",
        description: "Patients may notice that the operated leg feels longer or shorter after hip replacement. This frequently reflects pelvic tilt, muscle tightness, or the body adapting to restored anatomical height rather than a true bony difference.",
        warningSigns: [
          "Sensation of unequal leg length",
          "Altered walking pattern or pelvic/back discomfort early in recovery"
        ],
        managementOrAssessment: "Assessed by clinical and gait examination and standing full-length X-rays. Many early symptoms improve as soft tissues and pelvis adapt. Persistent differences are managed with guided physiotherapy or shoe raises; further surgery is rarely needed."
      },
      {
        title: "Nerve Injury & Foot Drop",
        incidence: "Rare (< 1%)",
        description: "Nerve symptoms can include temporary nerve irritation (neuropraxia) or, rarely, more significant nerve injury to the sciatic, femoral, or obturator nerves. Numbness around the surgical scar is normal because small skin nerves are divided by the incision.",
        warningSigns: [
          "Numbness, tingling, or pins and needles down the leg",
          "New weakness in the lower limb",
          "Difficulty lifting the foot or moving the ankle (Foot Drop)"
        ],
        managementOrAssessment: "Assessed with neurological examination, review of history, and nerve conduction studies if required. Most nerve irritation improves gradually over time. New inability to lift the foot requires prompt medical assessment."
      },
      {
        title: "Periprosthetic Fracture",
        incidence: "Uncommon; may occur intra-operatively or following a fall",
        description: "A periprosthetic fracture is a break in the bone around a joint replacement. It most commonly follows a significant fall or injury, but can occasionally occur during implant seating or around a loosened component.",
        warningSigns: [
          "Sudden severe pain after a fall or injury",
          "Inability or marked difficulty bearing weight",
          "Deformity, abnormal movement, or new acute bruising"
        ],
        managementOrAssessment: "Avoid putting weight through the limb and seek urgent assessment. Evaluated with X-rays and CT scanning. Treated with operative fixation using specialised plates/cables or revision of the joint replacement."
      },
      {
        title: "Seroma & Wound Drainage",
        incidence: "Occasional mild fluid collection",
        description: "A seroma is a sterile fluid accumulation under the skin incision. It requires meticulous dressing and clinical monitoring to ensure the skin seal remains watertight.",
        managementOrAssessment: "Managed conservatively with pressure dressings and surveillance. Should never be aspirated in a non-sterile outpatient setting without consultant instruction."
      },
      {
        title: "Delayed Recovery / Altered Outcome",
        incidence: "Variable based on pre-operative health and mobility",
        description: "Rehabilitation progress can vary based on bone quality, pre-existing spinal conditions, and overall physical stamina. Recovery may take 6 to 12 months to reach peak outcome.",
        managementOrAssessment: "Structured outpatient physiotherapy, supervised hydrotherapy, and milestone-based reviews."
      },
      {
        title: "Small Risk of Major Medical Complications or Death",
        incidence: "Extremely low (< 0.1% in elective joint surgery)",
        description: "Major systemic complications including myocardial infarction, stroke, or fatal pulmonary embolism are rare but recognised risks of major orthopaedic surgery and general/spinal anaesthesia.",
        managementOrAssessment: "Rigorous pre-operative anaesthetic assessment, cardiac screening, and multidisciplinary hospital care minimise these risks."
      },
      {
        title: "Need for Future Revision Surgery",
        incidence: "Approximately 5% at 15-20 years with modern ceramic bearings",
        description: "Artificial joints have a finite lifespan. Over decades, wear of bearing surfaces, aseptic loosening, or late infection may necessitate revision surgery.",
        managementOrAssessment: "Annual or periodic radiographic review ensures any early loosening or wear is identified before bone loss occurs."
      }
    ],
    postoperativeSymptomsToReport: {
      emergency999: [
        "Sudden breathlessness or significant difficulty breathing",
        "Chest pain, tightness, or pressure",
        "Coughing up blood",
        "Sudden dizziness, confusion, or collapse"
      ],
      urgentContactTeam: [
        "Increasing redness, heat, or spreading inflammation around the wound",
        "Persistent wound drainage, clear ooze, or pus",
        "Fever (temperature above 38°C) or shaking chills",
        "New or increasing calf pain, tenderness, or one-sided leg swelling",
        "Sudden severe pain with inability to put weight on the leg (suspected fracture or dislocation)",
        "New weakness or inability to lift the foot (foot drop)"
      ],
      normalExpectedSymptoms: [
        "Mild swelling around the hip and thigh that worsens towards evening and settles with elevation",
        "Bruising tracking down the thigh towards the knee (normal gravity effect)",
        "Localised numbness in the skin immediately adjacent to the surgical scar",
        "Clicking sensations during certain movements as muscles strengthen"
      ]
    },
    recoveryAndRehabilitation: {
      hospitalStay: "Typically 1 to 2 nights at Spire Hartswood or Nuffield Brentwood, with same-day discharge option for selected fit patients.",
      mobilisation: "Full weight-bearing walking with crutches on Day 0 within hours of surgery under physiotherapist guidance.",
      driving: "Usually resumed at 6 weeks post-surgery once full emergency braking control and reaction times are restored.",
      work: "Desk-based work at 4 to 6 weeks; heavy manual occupations at 10 to 12 weeks.",
      followUp: "Routine wound check and dressing removal at 10-14 days; consultant clinical and X-ray review with Mr Shankar at 6 weeks."
    }
  },
  {
    id: "total-knee-replacement",
    procedureTitle: "Total Knee Replacement",
    joint: "Knee",
    category: "knee",
    subtitle: "Conventional, Computer-Navigated & Robotic",
    filename: "Mr_Shankar_Total_Knee_Replacement_Patient_Guide_and_Risks.pdf",
    shortSummary: "Detailed clinical guidance on non-operative management, surgical resurfacing, robotic balancing, and thorough disclosure of risks including infection, DVT, stiffness, and the 15% residual pain phenomenon.",
    nonOperativeOptions: {
      analgesia: "Scheduled oral analgesia, topical anti-inflammatory gels, and anti-inflammatory tablets taken under clinical supervision.",
      activityModification: "Transitioning away from high-impact jogging or jumping to joint-sparing activities that keep the quadriceps active.",
      exercises: [
        "Stationary exercise bike with low resistance (promotes synovial nourishment and knee flexion)",
        "Swimming and water aerobics (buoyancy unloads articular cartilage)",
        "Cross-trainer / Elliptical machine (smooth circular motion without foot strike)",
        "Rowing machine (controlled knee extension and quad firing)"
      ],
      supplements: [
        "Glucosamine Sulphate",
        "Cod Liver Oil / Omega-3 fatty acids",
        "Turmeric / Curcumin extract"
      ]
    },
    operativePlan: {
      summary: "Total knee replacement resurfaces the damaged femoral condyles and tibial plateau, correcting angular deformity (bowlegs or knock-knees) and restoring a smooth joint gliding motion.",
      approachesAndTechnology: [
        "Robotic-assisted and computer-navigated knee arthroplasty (Golden Jubilee Hospital fellowship training)",
        "Dynamic intra-operative soft tissue and ligament balancing",
        "Sub-millimetre bone resection ensuring correct mechanical axis",
        "Premium biocompatible cobalt-chrome or oxidised zirconium implants with high-flexion polyethylene inserts"
      ],
      objectives: [
        "Long-term relief from crippling knee pain and nocturnal ache",
        "Restoration of full knee extension (straightening) and functional flexion",
        "Safe return to walking, gardening, cycling, golf, and active hobbies"
      ]
    },
    surgicalRisks: [
      {
        title: "Infection After Knee Replacement",
        incidence: "Uncommon (< 1 - 2%)",
        description: "Infection after knee replacement is uncommon but potentially serious. It may present early after surgery or later in the life of the implant, sometimes arising from bacteria entering the bloodstream from another source.",
        warningSigns: [
          "Increasing knee pain rather than expected recovery",
          "Spreading redness or warmth around the joint",
          "Wound drainage, persistent leakage, or pus",
          "Fever, chills, or feeling systemically unwell",
          "New deterioration in function or range of motion"
        ],
        managementOrAssessment: "Assessed by clinical examination, blood tests (ESR, CRP), X-rays, and sterile joint aspiration for microbiology. Treatment may include antibiotics, wound management, surgical washout (DAIR) in selected early cases, or staged revision surgery for established deep infection."
      },
      {
        title: "Neurovascular Damage & Numb Patch Around Knee",
        incidence: "Common for skin numb patch (expected); rare for major nerve/vessel damage (< 0.5%)",
        description: "During knee replacement, small sensory skin nerves (specifically the infrapatellar branch of the saphenous nerve) are divided by the vertical incision. This causes a small numb patch on the outer side of the knee. This is harmless, expected, and usually permanent. Injury to major nerves (peroneal nerve causing foot drop) or major popliteal blood vessels is very rare.",
        warningSigns: [
          "Inability to lift the toes or foot (foot drop)",
          "Severe numbness across the entire foot or sole",
          "Cold, pale, or pulseless foot"
        ],
        managementOrAssessment: "Neurological examination, immediate consultant review. Scar numbness is reassured as normal."
      },
      {
        title: "Blood Clots (Venous Thromboembolism: DVT & PE)",
        incidence: "Temporary post-operative risk",
        description: "Surgery temporarily increases clotting risk. Clots can develop in the deep veins of the calf (DVT) and potentially travel to the lungs (pulmonary embolism).",
        warningSigns: [
          "New or increasing calf pain, tenderness, or heat",
          "One-sided calf or lower limb swelling",
          "Emergency 999: Sudden breathlessness, chest pain, coughing blood, or collapse"
        ],
        managementOrAssessment: "Early mobilisation on Day 0, prescribed anticoagulant blood-thinning medication (do not stop without advice if bruising occurs), and mechanical calf pumps. Assessed via urgent venous ultrasound."
      },
      {
        title: "15% Residual Pain & Altered Sensation",
        incidence: "Recognised clinical outcome in approximately 15% of patients",
        description: "National orthopaedic joint registry data and clinical trials demonstrate that approximately 15% of Total Knee Replacement patients can have residual pain, stiffness, or discomfort in spite of the operation and implant placement being technically and radiologically successful.",
        warningSigns: [
          "Pain that improves then plateaus or lingers after activity",
          "A sensation that the knee feels artificial or tight"
        ],
        managementOrAssessment: "Careful clinical evaluation, stability assessment, exclusion of infection or loosening, targeted physiotherapy, and realistic pacing. Most patients find pain improves significantly compared to pre-operative arthritis."
      },
      {
        title: "Stiffness After Knee Replacement (Limited Motion)",
        incidence: "5 - 10% experience temporary or persistent stiffness",
        description: "Knee stiffness can occur during recovery. Early movement and progressive rehabilitation are important, but stiffness may have several causes including arthrofibrosis, swelling, or inadequate pain control.",
        warningSigns: [
          "Difficulty straightening the knee completely (flexion contracture)",
          "Limited bending (unable to achieve 90 degrees)",
          "Difficulty negotiating stairs or rising from low chairs",
          "Range-of-motion progress that has plateaued or worsened"
        ],
        managementOrAssessment: "Intensive guided physiotherapy, swelling control, and cryotherapy. In selected cases where progress is stalled within 6-12 weeks, manipulation under anaesthesia (MUA) or arthroscopic arthrolysis may be recommended."
      },
      {
        title: "Instability & Giving Way",
        incidence: "Uncommon; minimised by robotic ligament tensioning",
        description: "Instability means the knee feels insecure, gives way, or moves abnormally during activity. It may relate to soft-tissue balance, implant positioning, or ligament competence.",
        warningSigns: [
          "Recurrent giving way or feeling that the knee will buckle",
          "Difficulty controlling the knee on stairs or uneven ground",
          "Recurrent swelling or ache following walking"
        ],
        managementOrAssessment: "Clinical examination through full arc of motion, weight-bearing stress X-rays, and quad/hamstring rehabilitation. In structural cases, bracing or component revision may be considered."
      },
      {
        title: "Periprosthetic Fracture",
        incidence: "Uncommon (< 1%)",
        description: "A break in the femur or tibia surrounding the knee components, usually following a fall or slip.",
        warningSigns: [
          "Sudden acute pain after a fall",
          "Inability to put weight on the operated leg",
          "Deformity or severe swelling"
        ],
        managementOrAssessment: "Avoid weight-bearing. Urgent hospital assessment with X-rays and CT. Treated with internal plate fixation or revision surgery."
      },
      {
        title: "Possible Future Need for Revision Surgery",
        incidence: "Approximately 5-8% at 15-20 years",
        description: "Implant wear, loosening, or late infection may eventually require partial or complete revision of the knee prosthesis.",
        managementOrAssessment: "Periodic clinical and radiographic follow-up to monitor implant fixation."
      }
    ],
    postoperativeSymptomsToReport: {
      emergency999: [
        "Sudden breathlessness or severe chest pain",
        "Coughing blood or unexplained collapse",
        "Sudden coldness, numbness, or loss of circulation to the foot"
      ],
      urgentContactTeam: [
        "Increasing knee redness, spreading warmth, or fever",
        "Wound ooze, persistent drainage, or bleeding",
        "New or worsening calf tenderness or severe swelling",
        "Sudden loss of ability to bear weight after a twist or slip",
        "Inability to lift the foot or toes"
      ],
      normalExpectedSymptoms: [
        "Swelling around the knee that increases after exercise and takes 6-9 months to fully resolve",
        "A clicking or clunking sound as the metal and plastic surfaces meet (normal mechanical sound)",
        "Numb skin patch on the outer border of the scar",
        "Warmth across the knee for several months as internal healing tissue remodels"
      ]
    },
    recoveryAndRehabilitation: {
      hospitalStay: "Typically 1 to 2 nights with full inpatient physiotherapy support.",
      mobilisation: "Walking with frame or crutches on the day of surgery; active knee bending and extension started immediately.",
      driving: "6 weeks post-operation, once emergency braking reflex is verified.",
      work: "Sedentary office roles at 4 to 6 weeks; physically demanding jobs at 10 to 12 weeks.",
      followUp: "Wound assessment at 10-14 days; consultant review with X-rays at 6 weeks and 6 months."
    }
  },
  {
    id: "partial-knee-replacement",
    procedureTitle: "Uni-compartmental (Partial) Knee Replacement",
    joint: "Knee",
    category: "knee",
    subtitle: "Targeted Compartment Resurfacing & Ligament Preservation",
    filename: "Mr_Shankar_Partial_Knee_Replacement_Patient_Guide_and_Risks.pdf",
    shortSummary: "Patient information guide covering single-compartment arthritis, cruciate ligament preservation, non-operative measures, and risks including potential conversion to total knee replacement.",
    nonOperativeOptions: {
      analgesia: "Prescribed anti-inflammatories, analgesics, and targeted topical therapy.",
      activityModification: "Focus on non-impact sports; unloader knee bracing where appropriate.",
      exercises: [
        "Cycling on stationary trainer and road cycling",
        "Swimming (crawl and gentle kick)",
        "Cross-trainer / Elliptical machine",
        "Rowing machine and non-impact quad strengthening"
      ],
      supplements: [
        "Glucosamine Sulphate",
        "Cod Liver Oil",
        "Turmeric / Curcumin extract"
      ]
    },
    operativePlan: {
      summary: "Uni-compartmental knee replacement resurfaces solely the diseased medial or lateral compartment, sparing the healthy patellofemoral and opposite compartments along with both cruciate ligaments (ACL and PCL).",
      approachesAndTechnology: [
        "Minimally invasive incision with reduced tissue disruption",
        "Robotic-guided bone preparation for anatomical implant positioning",
        "Preservation of native knee proprioception and natural kinematic feel"
      ],
      objectives: [
        "Rapid recovery and faster return to active sports than total knee replacement",
        "Near-normal knee kinematics and high patient satisfaction"
      ]
    },
    surgicalRisks: [
      {
        title: "Potential Need for Conversion to Total Knee Replacement",
        incidence: "Recognised medium-to-long term possibility",
        description: "Because only the worn compartment is replaced, arthritis may develop or progress in the remaining untreated compartments of the knee over time. If other compartments become involved, conversion to total knee replacement surgery may be required.",
        managementOrAssessment: "Regular clinical reviews and weight-bearing X-rays to assess disease progression."
      },
      {
        title: "Infection (Superficial or Deep)",
        incidence: "Low risk (< 1%)",
        description: "Prosthetic joint infection requires prompt recognition and intervention.",
        warningSigns: ["Worsening pain", "Spreading redness/warmth", "Wound leakage", "Fever"],
        managementOrAssessment: "Assessed with inflammatory bloods and aspiration; managed with antibiotics, washout, or revision."
      },
      {
        title: "Neuromuscular Damage & Skin Numbness",
        incidence: "Common for scar numbness; rare for nerve palsy",
        description: "Small risk of a numb patch of skin around the knee scar; rare major neuromuscular injury.",
        managementOrAssessment: "Careful surgical technique; scar numbness improves or adapts."
      },
      {
        title: "Blood Clots (DVT & PE)",
        incidence: "Lower risk than total knee replacement, but prophylaxis required",
        description: "Venous thromboembolism in the calf or pulmonary circulation.",
        warningSigns: ["Calf swelling/pain", "Sudden breathlessness or chest pain (999)"],
        managementOrAssessment: "Early mobilisation and prescribed chemical thromboprophylaxis."
      },
      {
        title: "Potential Risk of Fracture",
        incidence: "Uncommon (< 1%)",
        description: "Periprosthetic fracture of the tibial plateau or femoral condyle.",
        managementOrAssessment: "Assessed with X-ray/CT; treated with internal fixation or conversion to total knee replacement."
      },
      {
        title: "Delayed Recovery / Altered Outcome",
        incidence: "Variable",
        description: "Slower than anticipated recovery or persistent swelling.",
        managementOrAssessment: "Physiotherapy guidance and activity modification."
      },
      {
        title: "15% Residual Symptoms Risk",
        incidence: "Recognised outcome in some patients",
        description: "A minority of patients experience mild residual pain or stiffness despite successful surgery.",
        managementOrAssessment: "Clinical evaluation and rehabilitation."
      },
      {
        title: "Possible Future Need for Revision Surgery",
        incidence: "Dependent on longevity and compartment health",
        description: "Bearing wear, loosening, or disease progression may necessitate revision.",
        managementOrAssessment: "Annual or biennial check-ups with Mr Shankar."
      }
    ],
    postoperativeSymptomsToReport: {
      emergency999: [
        "Sudden shortness of breath or chest pain",
        "Collapse or coughing blood"
      ],
      urgentContactTeam: [
        "Spreading wound redness or heat",
        "Wound leakage or purulent discharge",
        "Severe calf swelling or pain",
        "Sudden inability to put weight on the knee"
      ],
      normalExpectedSymptoms: [
        "Moderate joint swelling that improves with elevation and ice",
        "Bruising tracking down the shin",
        "Mild stiffness first thing in the morning"
      ]
    },
    recoveryAndRehabilitation: {
      hospitalStay: "Day case or 1 night stay.",
      mobilisation: "Immediate weight-bearing within hours of surgery; crutches used for 1-3 weeks.",
      driving: "Usually resumed around 4 to 6 weeks once emergency stop can be performed painlessly.",
      work: "Office duties at 2 to 4 weeks; active jobs at 6 to 8 weeks.",
      followUp: "Wound inspection at 10-14 days; consultant review at 6 weeks."
    }
  },
  {
    id: "knee-arthroscopy",
    procedureTitle: "Knee Arthroscopy & Partial Medial Meniscectomy",
    joint: "Knee",
    category: "preservation",
    subtitle: "Minimally Invasive Keyhole Surgery & Meniscal Preservation",
    filename: "Mr_Shankar_Knee_Arthroscopy_Patient_Guide_and_Risks.pdf",
    shortSummary: "Patient guide covering keyhole joint preservation, meniscal trimming and repair, non-operative measures, and detailed surgical risks including persistent symptoms if underlying arthritis is present.",
    nonOperativeOptions: {
      analgesia: "Paracetamol, oral anti-inflammatories, and topical gels for mechanical irritation.",
      activityModification: "Avoidance of deep squats, pivoting, twisting sports, and high-impact loading during acute flares.",
      exercises: [
        "Gentle cycling on stationary exercise bike",
        "Swimming (avoiding vigorous breaststroke whip kick)",
        "Quadriceps strengthening and hamstring stretching exercises"
      ],
      supplements: [
        "Glucosamine and Cod Liver Oil",
        "Turmeric / Curcumin extract"
      ]
    },
    operativePlan: {
      summary: "Day-case keyhole arthroscopy using optical fibre-optic camera and micro-instruments through two tiny 5mm puncture portals to inspect the knee, resect unstable meniscal tears, or suture repair torn cartilage.",
      approachesAndTechnology: [
        "High-definition video arthroscopy",
        "Tissue-preserving meniscal repair techniques (saving healthy tissue whenever viable)",
        "Micro-debridement of mechanical chondral flaps and removal of loose bodies"
      ],
      objectives: [
        "Relief of mechanical catching, locking, and giving way",
        "Rapid recovery and return to athletic and daily activities"
      ]
    },
    surgicalRisks: [
      {
        title: "Residual Symptoms if Pre-existing Arthritis is Present",
        incidence: "Common if cartilage wear exists",
        description: "Knee arthroscopy is designed to treat mechanical problems such as unstable meniscal tears. It does not reverse or cure underlying wear-and-tear arthritis. If pre-existing osteoarthritis is present, residual ache and stiffness may persist, and if arthritis progresses over time, it might warrant future surgery such as partial or total knee replacement.",
        managementOrAssessment: "Clear pre-operative MRI and clinical discussion regarding expectations and long-term joint preservation."
      },
      {
        title: "Infection (Septic Arthritis)",
        incidence: "Very rare (< 0.5%)",
        description: "Infection inside the knee joint after arthroscopy is rare but requires prompt medical attention.",
        warningSigns: [
          "Rapidly increasing pain rather than gradual improvement",
          "Severe swelling, redness, and heat",
          "Fever, chills, or feeling unwell"
        ],
        managementOrAssessment: "Assessed with clinical examination, blood tests, and joint fluid analysis; treated with targeted antibiotics and urgent arthroscopic washout if confirmed."
      },
      {
        title: "Bleeding into the Joint (Haemarthrosis)",
        incidence: "Uncommon (< 1-2%)",
        description: "Bleeding inside the knee joint after surgery can cause marked, tense swelling and throbbing pain within the first 24-72 hours.",
        managementOrAssessment: "Managed with ice, compression, elevation, and in cases of marked tension, clinical aspiration under sterile conditions."
      },
      {
        title: "Blood Clots (DVT & PE)",
        incidence: "Low risk; elevated with prolonged immobility",
        description: "Deep vein thrombosis in the calf or leg veins.",
        warningSigns: ["New calf pain, swelling, or tenderness", "Emergency: shortness of breath or chest pain (999)"],
        managementOrAssessment: "Early mobilisation, ankle pump exercises, and risk-stratified anticoagulation."
      },
      {
        title: "Neurovascular Damage",
        incidence: "Rare (< 0.5%)",
        description: "Minor skin numbness around the puncture portal incisions due to microscopic cutaneous nerve irritation; rare injury to deeper vessels.",
        managementOrAssessment: "Numbness around portal incisions is benign and typically fades."
      },
      {
        title: "Persistent Swelling & Delayed Return to Sport",
        incidence: "Common in early weeks",
        description: "Some swelling is expected. Timing for return to sports depends on the exact procedure performed (meniscal trim vs repair), tissue healing, and rehabilitation progress.",
        managementOrAssessment: "Milestone-based progression rather than a generic fixed timeline."
      }
    ],
    postoperativeSymptomsToReport: {
      emergency999: [
        "Chest pain or difficulty breathing",
        "Collapse or fainting"
      ],
      urgentContactTeam: [
        "Rapidly increasing swelling or severe throbbing pain",
        "Wound redness, leakage, or fever",
        "New calf pain or swelling"
      ],
      normalExpectedSymptoms: [
        "Mild swelling and stiffness for 2-4 weeks",
        "Minor bruising around the portal puncture sites",
        "Clicking sensations as quadriceps tone recovers"
      ]
    },
    recoveryAndRehabilitation: {
      hospitalStay: "Day-case surgery (discharge home within hours).",
      mobilisation: "Weight-bearing as tolerated immediately; crutches used for 2 to 7 days for comfort.",
      driving: "Usually 1 to 2 weeks (once off strong painkillers and able to perform emergency stop).",
      work: "Desk work at 1 week; manual jobs at 3 to 6 weeks.",
      followUp: "Wound review at 10-14 days; physiotherapy follow-up at 2 to 6 weeks."
    }
  },
  {
    id: "hip-joint-injection",
    procedureTitle: "Hip Joint Injection (Diagnostic & Therapeutic)",
    joint: "Hip",
    category: "injection",
    subtitle: "Differentiating Hip Pathology vs Lumbar Spine",
    filename: "Mr_Shankar_Hip_Joint_Injection_Patient_Guide_and_Risks.pdf",
    shortSummary: "Patient guide for image-guided hip injections used as a crucial diagnostic test to differentiate hip joint arthritis from referred lumbar spine/back pain, and as therapeutic relief.",
    nonOperativeOptions: {
      analgesia: "Oral analgesia and anti-inflammatory medications.",
      activityModification: "Modifying sitting positions, avoiding low chairs, and pacing walking distances.",
      exercises: [
        "Gentle hip mobility and core strengthening",
        "Swimming and stationary cycling",
        "Non-impact daily stretches"
      ],
      supplements: [
        "Glucosamine and Cod Liver Oil",
        "Turmeric / Curcumin extract"
      ]
    },
    operativePlan: {
      summary: "Image-guided injection into the right or left hip joint with local anaesthetic alone or combined with corticosteroid. Crucially performed as a diagnostic procedure to differentiate the source of pain: Hip vs Lumbar Spine.",
      approachesAndTechnology: [
        "Fluoroscopic (X-ray) or ultrasound guidance ensuring precise needle placement inside the joint capsule",
        "Diagnostic local anaesthetic instillation",
        "Long-acting anti-inflammatory corticosteroid"
      ],
      objectives: [
        "Diagnostic clarity: If hip pain resolves during local anaesthetic action, pain is proven to arise from the hip; if unchanged, pain is referred from the lumbar spine",
        "Therapeutic pain relief and reduction of joint inflammation"
      ]
    },
    surgicalRisks: [
      {
        title: "Temporary Relief & Potential Need for Future Surgery",
        incidence: "Expected outcome of diagnostic injection",
        description: "A hip injection is a diagnostic and temporising procedure. If pain settles initially and recurs at a later date, the potential need for definitive operative surgery (such as Total Hip Replacement) has been explained.",
        managementOrAssessment: "Pain diary kept by the patient for 2-3 weeks post-injection to guide definitive surgical decision-making."
      },
      {
        title: "Infection (Septic Arthritis)",
        incidence: "Extremely rare (< 1 in 10,000)",
        description: "Risk of introducing infection into the hip joint.",
        warningSigns: ["Increasing severe pain 24-72 hours after injection", "Fever or chills", "Inability to bear weight"],
        managementOrAssessment: "Conducted under strict sterile theatre or radiology conditions. Urgent clinical assessment if infection suspected."
      },
      {
        title: "Neurovascular Damage",
        incidence: "Extremely rare (< 0.1%)",
        description: "Irritation to the adjacent femoral nerve or blood vessels.",
        warningSigns: ["Leg weakness or severe groin numbness"],
        managementOrAssessment: "Minimised by real-time image guidance and anatomical precision."
      },
      {
        title: "Residual Pain & Post-Injection Flare",
        incidence: "Occasional (5 - 10%)",
        description: "A temporary increase in pain or stiffness for 24 to 48 hours as the steroid crystals settle into the synovial membrane.",
        managementOrAssessment: "Ice packs, paracetamol, and rest for 48 hours."
      },
      {
        title: "Steroid-Related Systemic Effects",
        incidence: "Temporary",
        description: "Corticosteroid can cause temporary facial flushing or a transient elevation in blood glucose levels in diabetic patients.",
        managementOrAssessment: "Diabetic patients should monitor blood sugars carefully for 48-72 hours."
      }
    ],
    postoperativeSymptomsToReport: {
      emergency999: [
        "Severe allergic reaction (facial swelling, wheezing)"
      ],
      urgentContactTeam: [
        "Severe increasing hip pain or high fever",
        "Inability to move the leg or bear weight"
      ],
      normalExpectedSymptoms: [
        "Mild groin soreness at the injection puncture site for 24 hours",
        "Temporary numbness in the upper thigh while local anaesthetic is active"
      ]
    },
    recoveryAndRehabilitation: {
      hospitalStay: "Outpatient / Day procedure (home after 30 minutes observation).",
      mobilisation: "Rest for 24 to 48 hours; resume normal daily activities gradually.",
      driving: "Do not drive on the day of injection; resume next day if pain-free and leg strength normal.",
      work: "Resume work 24 to 48 hours post-injection.",
      followUp: "Follow-up consultation with Mr Shankar to review diagnostic pain diary."
    }
  }
];

export const COMPLICATION_LEAFLETS: ComplicationGuide[] = [
  {
    id: "infection-after-hip-replacement",
    title: "Infection After Hip Replacement",
    joint: "Hip",
    category: "Infection",
    filename: "Mr_Shankar_Infection_After_Hip_Replacement_Patient_Guide.pdf",
    emergencyNotice: "If you have severe breathlessness, chest pain, collapse, severe bleeding, or another medical emergency, call 999 or attend A&E. For concerning postoperative symptoms such as fever, worsening wound redness/discharge, or new calf swelling/pain, seek urgent clinical advice or NHS 111.",
    whatIsThisProblem: "A joint replacement infection is uncommon but important to recognise. Infection may occur soon after surgery or, less commonly, months or years later. It may involve the skin and wound or the deeper tissues around the implant.",
    symptomsToLookFor: [
      "Increasing or worsening pain",
      "Increasing redness, warmth or swelling",
      "Wound drainage or pus",
      "Fever, chills or feeling unwell",
      "A new deterioration in mobility or function"
    ],
    howIsItAssessed: [
      "Clinical examination of the hip and incision",
      "Blood tests such as inflammatory markers (ESR, CRP)",
      "X-rays when appropriate",
      "Joint aspiration and microbiology when indicated",
      "Further imaging or specialist assessment in selected cases"
    ],
    howIsItTreated: [
      "Treatment depends on timing, the organism, the condition of the implant and the patient's health.",
      "Options can include targeted antibiotics, wound treatment, surgical washout with implant retention (DAIR) in selected early infections, or revision surgery for established infection."
    ],
    faqs: [
      {
        question: "How do I know if my hip replacement is infected?",
        answer: "No single symptom proves infection. Worsening pain, wound drainage, redness, fever or deterioration in function should prompt assessment."
      },
      {
        question: "Is some wound redness normal?",
        answer: "A small amount of early postoperative redness can occur, but spreading redness, increasing pain, warmth, discharge or systemic symptoms should be assessed."
      },
      {
        question: "Will the implant always have to be removed?",
        answer: "No. In selected early infections, treatment may be possible without removing well-fixed components. Established infections may require revision surgery."
      }
    ]
  },
  {
    id: "blood-clots-after-hip-or-knee-replacement",
    title: "Blood Clots After Hip or Knee Replacement",
    joint: "Hip & Knee",
    category: "Blood Clots",
    filename: "Mr_Shankar_Blood_Clots_After_Hip_or_Knee_Replacement_Guide.pdf",
    emergencyNotice: "Chest pain, significant difficulty breathing, collapse or other signs of a potentially serious pulmonary embolism require emergency assessment - call 999 or attend A&E immediately.",
    whatIsThisProblem: "Hip and knee replacement temporarily increase the risk of venous thromboembolism (VTE), including deep vein thrombosis (DVT) and pulmonary embolism (PE). Your team will assess your individual risk and prescribe appropriate prevention.",
    symptomsToLookFor: [
      "New or increasing calf pain",
      "One-sided calf or leg swelling",
      "Tenderness or warmth",
      "Sudden breathlessness",
      "Chest pain, coughing blood, dizziness or collapse"
    ],
    howIsItAssessed: [
      "Individual clinical risk assessment",
      "Clinical examination of both lower limbs",
      "Ultrasound for suspected DVT when appropriate",
      "Further assessment for suspected PE, usually in an emergency setting (CTPA)"
    ],
    howIsItTreated: [
      "Prevention commonly includes early mobilisation, prescribed anticoagulant medication when indicated, and other measures selected according to individual risk.",
      "Follow your own discharge instructions rather than changing anticoagulants yourself."
    ],
    faqs: [
      {
        question: "Can I stop my blood thinner if I bruise?",
        answer: "Do not stop prescribed anticoagulation without discussing it with your clinical team. Some bruising is expected, but stopping thinners prematurely can cause dangerous blood clots."
      },
      {
        question: "What symptoms need 999?",
        answer: "Chest pain, significant difficulty breathing, collapse or other signs of a potentially serious pulmonary embolism require emergency assessment via 999."
      }
    ]
  },
  {
    id: "dislocation-after-hip-replacement",
    title: "Dislocation After Hip Replacement",
    joint: "Hip",
    category: "Dislocation",
    filename: "Mr_Shankar_Dislocation_After_Hip_Replacement_Patient_Guide.pdf",
    emergencyNotice: "Do not try to manipulate the hip yourself. Seek urgent medical assessment or attend A&E.",
    whatIsThisProblem: "A hip replacement can dislocate when the ball comes out of the socket. Risk varies with the operation, patient factors, implant design and circumstances. Your surgeon may give specific movement precautions depending on your operation.",
    symptomsToLookFor: [
      "Sudden severe hip or groin pain",
      "An inability to move or bear weight normally",
      "The leg appearing shortened or rotated",
      "A sudden major change in hip position or function"
    ],
    howIsItAssessed: [
      "Examination and urgent X-ray are usually required.",
      "Further imaging may be considered depending on the circumstances."
    ],
    howIsItTreated: [
      "A dislocated hip usually requires urgent reduction under sedation or anaesthesia.",
      "If dislocation recurs, your surgeon may investigate the cause and discuss precautions, bracing in selected cases, implant changes or revision surgery."
    ],
    faqs: [
      {
        question: "What should I do if I think my hip has dislocated?",
        answer: "Do not try to manipulate the hip yourself. Keep still, do not bear weight, and call an ambulance (999) or attend the nearest A&E."
      },
      {
        question: "Can it happen again?",
        answer: "Yes. Recurrent dislocation requires specialist assessment to identify contributing factors (such as component positioning or soft-tissue laxity) and discuss prevention or revision."
      }
    ]
  },
  {
    id: "leg-length-difference-after-hip-replacement",
    title: "Leg-Length Difference After Hip Replacement",
    joint: "Hip",
    category: "Pain & Stiffness",
    filename: "Mr_Shankar_Leg_Length_Difference_After_Hip_Replacement_Guide.pdf",
    emergencyNotice: "This guide is general patient education and does not replace advice from your surgeon or treating team.",
    whatIsThisProblem: "Patients may notice that the operated leg feels longer or shorter after hip replacement. This can reflect true measured difference, pelvic position, muscle tightness or an altered sensation while the body adapts to the new joint.",
    symptomsToLookFor: [
      "A sensation of unequal leg length",
      "Altered walking pattern",
      "Pelvic or back discomfort",
      "Persistent symptoms that do not improve"
    ],
    howIsItAssessed: [
      "Clinical assessment and gait assessment",
      "Standing X-rays or other imaging when indicated",
      "Comparison with preoperative measurements and the opposite side"
    ],
    howIsItTreated: [
      "Many early symptoms improve as swelling, muscle tightness and gait mechanics settle.",
      "Persistent or substantial differences should be assessed. Management depends on the cause and may include physiotherapy, reassurance, a shoe modification in selected cases, or further investigation."
    ],
    faqs: [
      {
        question: "Is a feeling of a longer leg common early on?",
        answer: "Some patients experience this sensation early in recovery as the muscles and pelvis adapt to the restored joint height."
      },
      {
        question: "Will I need another operation?",
        answer: "Usually not. Further surgery is reserved for selected cases where there is a significant correctable problem causing persistent symptoms."
      }
    ]
  },
  {
    id: "nerve-injury-after-hip-or-knee-surgery",
    title: "Nerve Injury After Hip or Knee Surgery",
    joint: "Hip & Knee",
    category: "Nerve Injury",
    filename: "Mr_Shankar_Nerve_Injury_After_Hip_or_Knee_Surgery_Guide.pdf",
    emergencyNotice: "Significant weakness or rapidly changing neurological findings require prompt medical assessment.",
    whatIsThisProblem: "Nerve symptoms can include numbness, tingling, weakness or, rarely, more significant nerve injury. Temporary nerve irritation can occur, while major nerve injury is uncommon.",
    symptomsToLookFor: [
      "Numbness or altered sensation",
      "Pins and needles",
      "New weakness in the leg muscles",
      "Difficulty lifting the foot or moving the ankle (Foot Drop)",
      "Persistent or worsening neurological symptoms"
    ],
    howIsItAssessed: [
      "Neurological examination",
      "Review of the surgical and medical history",
      "Further tests such as nerve conduction studies or imaging in selected cases"
    ],
    howIsItTreated: [
      "Management depends on severity and cause.",
      "Some nerve symptoms improve gradually with time as the nerve recovers.",
      "Significant weakness or rapidly changing neurological findings require prompt assessment."
    ],
    faqs: [
      {
        question: "Is numbness around a surgical scar normal?",
        answer: "Some local numbness can occur because small skin nerves may be affected by the incision. This is harmless and expected."
      },
      {
        question: "What about foot drop?",
        answer: "New inability to lift the foot requires prompt medical assessment by your surgical team."
      }
    ]
  },
  {
    id: "periprosthetic-fracture",
    title: "Periprosthetic Fracture",
    joint: "Hip & Knee",
    category: "Fracture",
    filename: "Mr_Shankar_Periprosthetic_Fracture_Patient_Guide.pdf",
    emergencyNotice: "If you suspect a fracture, avoid putting weight through the limb until you have been assessed unless a clinician has specifically advised otherwise.",
    whatIsThisProblem: "A periprosthetic fracture is a break in the bone around a joint replacement. It most commonly follows a significant fall or injury, but some fractures can occur around an implant that has loosened.",
    symptomsToLookFor: [
      "Sudden pain after a fall or injury",
      "Inability or marked difficulty bearing weight",
      "Deformity or abnormal movement",
      "New swelling or bruising"
    ],
    howIsItAssessed: [
      "Plain X-rays of the entire bone and implant",
      "CT scanning in selected cases",
      "Assessment of implant stability and underlying bone quality"
    ],
    howIsItTreated: [
      "Treatment depends on the fracture pattern, implant stability, bone quality and overall health.",
      "Options can include surgical fixation with specialised plates/cables or revision of the joint replacement, sometimes in combination."
    ],
    faqs: [
      {
        question: "Can I walk on it?",
        answer: "If you suspect a fracture, avoid putting weight through the limb until you have been assessed unless a clinician has specifically advised otherwise."
      },
      {
        question: "Is surgery always needed?",
        answer: "Many clinically significant periprosthetic fractures require operative treatment, but management is individualised."
      }
    ]
  },
  {
    id: "infection-after-knee-replacement",
    title: "Infection After Knee Replacement",
    joint: "Knee",
    category: "Infection",
    filename: "Mr_Shankar_Infection_After_Knee_Replacement_Patient_Guide.pdf",
    emergencyNotice: "For concerning postoperative symptoms such as fever, worsening wound redness/discharge, or new calf swelling/pain, seek urgent clinical advice or NHS 111.",
    whatIsThisProblem: "Infection after knee replacement is uncommon but potentially serious. It may present early after surgery or later in the life of the implant.",
    symptomsToLookFor: [
      "Increasing knee pain",
      "Increasing redness or warmth",
      "Wound drainage or persistent leakage",
      "Fever or feeling unwell",
      "New deterioration in function"
    ],
    howIsItAssessed: [
      "Clinical examination",
      "Blood tests (inflammatory markers ESR/CRP)",
      "X-rays",
      "Joint aspiration and microbiology when indicated"
    ],
    howIsItTreated: [
      "Treatment may include antibiotics, wound management, surgical washout in selected early cases, or revision surgery for established infection.",
      "The treatment plan depends on timing, organism, implant stability and patient factors."
    ],
    faqs: [
      {
        question: "Is swelling alone a sign of infection?",
        answer: "Swelling is common after knee replacement. Persistent or increasing swelling accompanied by pain, redness, drainage or fever needs assessment."
      },
      {
        question: "Can infection occur years later?",
        answer: "Yes. Late infection can occur and may sometimes arise from bacteria entering the bloodstream from another source (such as dental or urinary tract infections)."
      }
    ]
  },
  {
    id: "persistent-pain-after-knee-replacement",
    title: "Persistent Pain After Knee Replacement",
    joint: "Knee",
    category: "Pain & Stiffness",
    filename: "Mr_Shankar_Persistent_Pain_After_Knee_Replacement_Guide.pdf",
    emergencyNotice: "Pain is expected during recovery, but persistent or worsening pain after knee replacement deserves assessment.",
    whatIsThisProblem: "Pain is expected during recovery, but persistent or worsening pain after knee replacement deserves assessment. The cause may be related to recovery, stiffness, infection, implant position, loosening, instability or another condition (approx. 15% of patients experience residual ache).",
    symptomsToLookFor: [
      "Pain that is not improving as expected",
      "Pain that improves then worsens",
      "Pain at rest or at night",
      "Pain associated with swelling, instability or stiffness",
      "New systemic symptoms"
    ],
    howIsItAssessed: [
      "History and clinical examination",
      "Assessment of range of motion and stability",
      "X-rays",
      "Blood tests and joint aspiration when infection is suspected",
      "Additional imaging in selected cases"
    ],
    howIsItTreated: [
      "Treatment depends on the cause. It may include rehabilitation, medication, treatment of infection, management of stiffness or instability, or revision surgery where a correctable implant-related problem is identified."
    ],
    faqs: [
      {
        question: "How long is pain normal?",
        answer: "Recovery varies considerably. Your surgeon or physiotherapist can advise whether your pattern of pain is within the expected recovery range (full recovery often takes 12 months)."
      },
      {
        question: "Does persistent pain mean the replacement has failed?",
        answer: "No. Persistent pain has many possible causes and requires assessment before conclusions are drawn."
      }
    ]
  },
  {
    id: "stiffness-after-knee-replacement",
    title: "Stiffness After Knee Replacement",
    joint: "Knee",
    category: "Pain & Stiffness",
    filename: "Mr_Shankar_Stiffness_After_Knee_Replacement_Patient_Guide.pdf",
    emergencyNotice: "Exercise should be progressive and guided. Severe or escalating pain is not a reason to force movement without advice.",
    whatIsThisProblem: "Knee stiffness can occur during recovery. Early movement and an appropriate rehabilitation programme are important, but stiffness may have several causes and should be assessed if progress is limited.",
    symptomsToLookFor: [
      "Difficulty straightening the knee",
      "Limited bending (unable to achieve functional 90°+)",
      "Difficulty with stairs or sitting",
      "Progress that has plateaued or worsened"
    ],
    howIsItAssessed: [
      "Range-of-motion assessment",
      "Clinical examination",
      "X-rays when appropriate",
      "Assessment for infection or other causes when indicated"
    ],
    howIsItTreated: [
      "Treatment can include physiotherapy, pain control, swelling management and, in selected cases, manipulation under anaesthesia (MUA) or further surgery.",
      "Timing is important and should be discussed with your surgical team."
    ],
    faqs: [
      {
        question: "Should I push through severe pain?",
        answer: "Exercise should be progressive and guided. Severe or escalating pain is not a reason to force movement without advice."
      },
      {
        question: "Can stiffness be treated?",
        answer: "Yes, depending on its cause and timing. Early assessment is helpful when progress is poor."
      }
    ]
  },
  {
    id: "instability-after-knee-replacement",
    title: "Instability After Knee Replacement",
    joint: "Knee",
    category: "Instability",
    filename: "Mr_Shankar_Instability_After_Knee_Replacement_Guide.pdf",
    emergencyNotice: "Recurrent giving way should be discussed with your clinical team.",
    whatIsThisProblem: "Instability means the knee feels insecure, gives way or moves abnormally during activity. It may relate to soft-tissue balance, implant position, ligament function or other factors.",
    symptomsToLookFor: [
      "Giving way",
      "A sense that the knee is unstable",
      "Difficulty on stairs",
      "Recurrent swelling or pain after activity"
    ],
    howIsItAssessed: [
      "Clinical examination through the range of motion",
      "Standing and dynamic X-rays where appropriate",
      "Assessment of alignment and implant position",
      "Further imaging in selected cases"
    ],
    howIsItTreated: [
      "Management depends on the cause and severity.",
      "It may include rehabilitation, activity modification, bracing in selected cases or revision surgery where a structural problem is identified."
    ],
    faqs: [
      {
        question: "Is occasional weakness normal?",
        answer: "Strength and confidence can take time to return. Recurrent giving way should be discussed with your clinical team."
      },
      {
        question: "Does instability always need revision surgery?",
        answer: "No. The cause must be established first; some cases can be managed without revision."
      }
    ]
  },
  {
    id: "knee-arthroscopy-infection-bleeding-clots",
    title: "Knee Arthroscopy: Infection, Bleeding and Blood Clots",
    joint: "Knee",
    category: "Arthroscopy",
    filename: "Mr_Shankar_Knee_Arthroscopy_Complications_Patient_Guide.pdf",
    emergencyNotice: "If you have severe breathlessness, chest pain, collapse, severe bleeding, or another medical emergency, call 999 or attend A&E.",
    whatIsThisProblem: "Knee arthroscopy is generally safe, but complications can occur. Important complications include infection, bleeding into the joint, blood clots, nerve or blood vessel injury and persistent symptoms.",
    symptomsToLookFor: [
      "Increasing pain rather than gradual improvement",
      "Increasing swelling or redness",
      "Wound discharge",
      "Fever or feeling unwell",
      "New calf pain/swelling",
      "New numbness or weakness"
    ],
    howIsItAssessed: [
      "Clinical examination",
      "Blood tests or imaging when indicated",
      "Ultrasound for suspected DVT",
      "Joint assessment if infection or significant bleeding is suspected"
    ],
    howIsItTreated: [
      "Treatment depends on the complication.",
      "Infection may require antibiotics and occasionally washout.",
      "Significant bleeding may require aspiration or further treatment.",
      "Suspected DVT/PE requires urgent assessment."
    ],
    faqs: [
      {
        question: "Is swelling normal after arthroscopy?",
        answer: "Some swelling is expected. Rapidly increasing swelling, severe pain, fever or wound discharge should be assessed."
      },
      {
        question: "When can I return to sport?",
        answer: "Timing depends on the procedure performed, tissue healing and rehabilitation progress. Follow your specific protocol rather than a generic timeline."
      }
    ]
  }
];
