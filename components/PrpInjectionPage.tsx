import React from 'react';
import { 
  Calendar, Shield, AlertCircle, Clock, ArrowRight, 
  Activity, Droplet, CheckCircle2, HelpCircle, PhoneCall, 
  ExternalLink, ShieldAlert, Sparkles, FileText, CreditCard, ShieldCheck
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

interface PrpInjectionPageProps {
  onBook: () => void;
  onNavigate: (href: string) => void;
}

export const PrpInjectionPage: React.FC<PrpInjectionPageProps> = ({
  onBook,
  onNavigate
}) => {
  return (
    <article className="pt-24 sm:pt-28 md:pt-32 pb-20 font-sans text-slate-800 bg-[#F8FAFC]">
      {/* 1. HERO BREADCRUMB & HEADER */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="hover:text-[#1B4965]">Home</a>
            <span>/</span>
            <a href="/knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('knee-replacement'); }} className="hover:text-[#1B4965]">Knee Services</a>
            <span>/</span>
            <span className="text-[#1B4965] font-bold">PRP Injections</span>
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            Non-Surgical Musculoskeletal Therapy
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            PRP Injections in London &amp; Essex
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mt-4 leading-relaxed max-w-4xl">
            Platelet-Rich Plasma (PRP) injections are a non-surgical treatment option that may be considered for selected musculoskeletal conditions. PRP is prepared from a patient's own blood and contains a concentration of platelets and associated growth factors.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <button
              onClick={onBook}
              className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              <Calendar size={16} /> Book Clinical Consultation
            </button>
            <a
              href="#how-it-works"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              How Treatment Works
            </a>
            <a
              href="#benefits-evidence"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              Benefits &amp; Evidence
            </a>
          </div>
        </div>
      </section>

      {/* 2. CLINICAL PERSPECTIVE / BALANCED ADVICE BANNER */}
      <section className="py-4 bg-[#F0F7FA] border-b border-[#D1E6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 text-xs sm:text-sm text-slate-700">
          <ShieldAlert size={18} className="text-[#1B4965] flex-shrink-0" />
          <p>
            <strong>Consultant Clinical Governance:</strong> PRP is an adjunct non-surgical option for selected patients. It is not a guaranteed cure for joint degeneration and does not replace established surgical options when severe joint disease is present.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* 3. INTRODUCTION & WHAT IS PRP */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#1B4965] block mb-1">
              Biological Assessment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What is PRP? (Platelet-Rich Plasma)
            </h2>
          </div>

          <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Platelet-Rich Plasma (PRP) is an autologous blood-derived biological preparation. In healthy blood, platelets are primarily known for their critical role in clotting; however, they also contain an abundance of biologically active proteins, cytokines, and growth factors involved in natural tissue repair signaling and inflammatory modulation.
            </p>
            <p>
              During a PRP procedure, a small volume of the patient's own blood is collected, processed in a specialised centrifuge to concentrate the platelets into plasma, and then carefully delivered directly into the affected joint or soft-tissue region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-[#1B4965] font-bold text-sm">
                <Droplet size={17} />
                <span>100% Autologous</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prepared exclusively from your own blood, eliminating the risk of foreign biological reactions, transmissible infections, or allergic rejection.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-[#1B4965] font-bold text-sm">
                <Sparkles size={17} />
                <span>Concentrated Factors</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Centrifugation concentrates platelets above baseline blood levels, providing an enriched reservoir of natural bioactive signaling proteins.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-[#1B4965] font-bold text-sm">
                <Activity size={17} />
                <span>Non-Surgical Care</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Carried out as an outpatient procedure in the consulting clinic with minimal recovery downtime and no requirement for general anaesthesia.
              </p>
            </div>
          </div>
        </section>

        {/* 4. CONDITIONS WHERE PRP MAY BE CONSIDERED */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#1B4965] block mb-1">
              Indications &amp; Patient Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Conditions Where PRP May Be Considered
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            PRP is not indicated for every patient or every type of musculoskeletal pain. In Mr Shankar's practice, PRP is carefully evaluated on an individual basis as part of a structured, non-surgical management strategy for selected conditions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#1B4965]" />
                Selected Mild-to-Moderate Knee Osteoarthritis
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                May be considered in early or moderate knee osteoarthritis where initial conservative steps (physiotherapy, exercise, weight management) have yielded incomplete relief, and where patients wish to explore non-surgical options before considering arthroplasty.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#1B4965]" />
                Selected Tendon-Related Conditions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                May be considered for recalcitrant chronic tendinopathies, such as patellar tendinopathy (jumper's knee) or select lateral elbow tendinopathy, that have not resolved with structured eccentric physiotherapy.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#1B4965]" />
                Persistent Synovial Irritation &amp; Chondral Wear
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                May be considered for patients with recurrent joint effusion or mild focal cartilage wear where mechanical catching or unstable meniscal tears have been ruled out on MRI.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#1B4965]" />
                Bridge in Active Lifestyle Preservation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                May be considered for active individuals seeking symptom reduction to enable participation in rehabilitation exercises and low-impact fitness.
              </p>
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed flex items-start gap-3">
            <AlertCircle size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Important Clinical Distinction:</strong> PRP does <em>not</em> cure osteoarthritis or rebuild bone. In cases of severe, end-stage "bone-on-bone" joint disease or major structural joint deformity, the evidence indicates PRP is rarely beneficial, and surgical joint replacement or realigning procedures remain the gold standard.
            </div>
          </div>
        </section>

        {/* 5. HOW PRP TREATMENT WORKS */}
        <section id="how-it-works" className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#1B4965] block mb-1">
              Step-by-Step Pathway
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How PRP Treatment Works
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            PRP treatment is generally performed as an outpatient procedure in a private clinical consulting setting. The time required can vary depending on the assessment and treatment being undertaken (typically approximately 30 to 45 minutes):
          </p>

          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Consultation & Clinical Assessment',
                desc: 'Mr Shankar performs a thorough orthopaedic history, physical examination, and reviews recent weight-bearing X-rays or MRI scans to confirm whether PRP is biologically suitable for your specific diagnosis.'
              },
              {
                step: '2',
                title: 'Discussion of Suitability & Alternatives',
                desc: 'A transparent discussion regarding realistic expectations, potential benefits, limitations, costs, and alternative options (such as ongoing physiotherapy or surgery) before you decide to proceed.'
              },
              {
                step: '3',
                title: 'Blood Sample Collection',
                desc: 'A small volume of venous blood (typically 15 to 30 ml) is drawn from a vein in your arm using a standard sterile needle, similar to a routine laboratory blood test.'
              },
              {
                step: '4',
                title: 'Preparation & Centrifugation',
                desc: 'The blood tube is placed in a specialised medical centrifuge. Rapid rotation separates red and white blood cells from the plasma, concentrating the platelets into a dedicated autologous layer under sterile conditions.'
              },
              {
                step: '5',
                title: 'Targeted Injection into the Affected Area',
                desc: 'The skin is cleansed with antiseptic solution. The concentrated platelet-rich plasma is carefully injected directly into the joint space or peritendinous area under strict aseptic technique.'
              },
              {
                step: '6',
                title: 'Post-Treatment Advice & Rehabilitation',
                desc: 'Some temporary modification of activity may be recommended following PRP treatment. Specific advice will depend on the area treated and the individual\'s clinical circumstances. Patients should follow the individual aftercare advice provided following their procedure.'
              }
            ].map((s) => (
              <div key={s.step} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/80 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#1B4965] text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. POTENTIAL BENEFITS & LIMITATIONS / EVIDENCE */}
        <section id="benefits-evidence" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Potential Benefits */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#1B4965] block mb-1">
                Clinical Objectives
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Potential Benefits
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When considered for appropriate early-to-moderate conditions, potential benefits may include:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Symptom Relief:</strong> Some patients report noticeable reduction in aching pain and joint stiffness.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Functional Improvement:</strong> May facilitate better tolerance for walking, stairs, and rehabilitation exercises.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Natural Biological Factors:</strong> Harnesses your body's own biological signaling without synthetic additives.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>In-Clinic Convenience:</strong> Walk-in, walk-out outpatient appointment without hospital admission.</span>
              </li>
            </ul>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 mt-2">
              <strong>Notice:</strong> Individual patient response is variable. Response depends on joint alignment, age, body mass index, and baseline grade of wear.
            </div>
          </div>

          {/* Limitations and Evidence */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[11px] uppercase tracking-wider font-bold text-amber-700 block mb-1">
                Evidence-Based Perspective
              </span>
              <h2 className="text-xl font-bold text-slate-900">
                Limitations &amp; Evidence
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In accordance with professional medical guidance and published orthopaedic literature:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Variable Clinical Evidence:</strong> Peer-reviewed studies show varied results depending on formulation, concentration, and patient severity.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Not a Cartilage Cure:</strong> PRP does not regrow lost cartilage or reverse established structural arthritic changes.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>No Guarantees:</strong> There is no clinical guarantee of permanent pain relief, avoidance of future surgery, or return to competitive sports.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <span><strong>Duration of Effect:</strong> Where beneficial, symptomatic relief commonly lasts between 6 to 12 months, after which reassessment is needed.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 7. RISKS AND SIDE EFFECTS */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#1B4965] block mb-1">
              Informed Patient Consent
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Risks &amp; Side Effects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Because PRP is prepared from your own blood, adverse allergic or systemic reactions are extraordinarily rare. However, like any interventional needle procedure, recognized potential risks include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-1">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <strong className="text-slate-900 block mb-1">Post-Injection Discomfort</strong>
              <span className="text-slate-600">Temporary soreness, aching, or feeling of fullness may occur following treatment as the biological response initiates.</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <strong className="text-slate-900 block mb-1">Local Bruising &amp; Swelling</strong>
              <span className="text-slate-600">Minor bruising or mild skin swelling around the blood draw site or the injection entry point.</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <strong className="text-slate-900 block mb-1">Infection (Rare)</strong>
              <span className="text-slate-600">Extremely rare risk (&lt;1 in 10,000) strictly minimised through hospital-grade sterile aseptic technique.</span>
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <strong className="text-slate-900 block mb-1">Variable Response</strong>
              <span className="text-slate-600">Possibility that the treatment does not provide noticeable or sustained symptom reduction.</span>
            </div>
          </div>
        </section>

        {/* 8. ALTERNATIVE NON-SURGICAL AND SURGICAL OPTIONS */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#1B4965] block mb-1">
              Comprehensive Care Spectrum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Alternative Non-Surgical &amp; Surgical Options
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            PRP is one option among a broad spectrum of evidence-based treatments. Depending on your symptoms, clinical examination, and imaging, Mr Shankar will discuss all appropriate pathways with you:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Non-Surgical Alternatives */}
            <div className="space-y-3">
              <h3 className="font-bold text-[#1B4965] text-sm sm:text-base uppercase tracking-wider border-b border-slate-200 pb-2">
                Non-Surgical Alternatives
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong>Activity Modification &amp; Low-Impact Exercise:</strong> Cycling, swimming, and pacing activities to reduce joint load.
                </li>
                <li className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong>Targeted Physiotherapy:</strong> Strengthening surrounding quadriceps, hamstrings, and core to stabilize kinematics.
                </li>
                <li className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong>Weight Optimisation:</strong> Reducing body weight meaningfully lowers compressive forces across the weight-bearing joint.
                </li>
                <li className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong>Analgesia &amp; Other Injections:</strong> Simple pain relief or targeted corticosteroid / hyaluronic acid injections where appropriate.
                </li>
              </ul>
            </div>

            {/* Surgical Alternatives */}
            <div className="space-y-3">
              <h3 className="font-bold text-[#1B4965] text-sm sm:text-base uppercase tracking-wider border-b border-slate-200 pb-2">
                Established Surgical Options
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong>Knee Arthroscopy &amp; Meniscal Repair:</strong> Keyhole surgery for symptomatic unstable mechanical meniscal tears or loose bodies.
                </li>
                <li className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong>Partial (Unicompartmental) Knee Replacement:</strong> Resurfacing isolated inner or outer compartment disease while preserving natural ligaments.
                </li>
                <li className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong>Robotic &amp; Computer-Assisted Total Knee Replacement:</strong> Mako robotic-assisted arthroplasty for bicompartmental or tricompartmental arthritis.
                </li>
                <li className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong>Total Hip Replacement:</strong> Where groin or referred pain is originating from advanced hip osteoarthritis.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 9. SUITABILITY AND ASSESSMENT */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#1B4965] block mb-1">
              Personalised Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Suitability &amp; Clinical Assessment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center font-bold">1</div>
              <h3 className="font-bold text-slate-900">Clinical Evaluation</h3>
              <p className="text-slate-600 leading-relaxed">
                Detailed evaluation of pain onset, aggravating factors, functional limitations, prior therapies, and current medications.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center font-bold">2</div>
              <h3 className="font-bold text-slate-900">Imaging Review</h3>
              <p className="text-slate-600 leading-relaxed">
                Review of weight-bearing X-rays to assess joint space loss and MRI scans to evaluate cartilage integrity, bone edema, and menisci.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-[#EAF1F6] text-[#1B4965] flex items-center justify-center font-bold">3</div>
              <h3 className="font-bold text-slate-900">Shared Decision-Making</h3>
              <p className="text-slate-600 leading-relaxed">
                A frank discussion on whether non-surgical PRP or surgical intervention offers the greatest clinical predictability for your lifestyle goals.
              </p>
            </div>
          </div>
        </section>

        {/* 10. FUNDING AND INSURANCE */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#1B4965] block mb-1">
              Payment &amp; Insurance Details
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Funding and Insurance
            </h2>
          </div>

          <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              PRP treatment is generally a self-funded treatment. Some private medical insurers may not cover or authorise PRP injections, depending on the individual policy, insurer criteria and the clinical circumstances. Patients are advised to check directly with their insurer before proceeding with treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#1B4965]" />
                Private Medical Insurance Considerations
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#1B4965] font-bold">&bull;</span>
                  <span>PRP may not be covered under all private medical insurance policies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1B4965] font-bold">&bull;</span>
                  <span>Prior authorisation may be required by some insurers before treatment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1B4965] font-bold">&bull;</span>
                  <span>Patients should confirm their individual level of cover directly with their insurer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1B4965] font-bold">&bull;</span>
                  <span>The fact that a patient has private medical insurance does not necessarily mean that PRP treatment will be covered.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <CreditCard size={18} className="text-[#1B4965]" />
                Self-Funded Option
              </h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#1B4965] font-bold">&bull;</span>
                  <span>If insurance does not cover the treatment, PRP may be available as a self-funded option, subject to clinical suitability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1B4965] font-bold">&bull;</span>
                  <span>Suitability is determined during your clinical consultation following thorough assessment and imaging review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1B4965] font-bold">&bull;</span>
                  <span>Clear and transparent hospital package and facility fee information is confirmed in advance by the hospital outpatient team.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 11. FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#1B4965] block mb-1">
              Patient Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <HelpCircle size={26} className="text-[#1B4965]" />
              Frequently Asked Questions About PRP
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Is PRP treatment covered by private medical insurance?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Coverage varies between insurers and individual policies. PRP treatment may not be covered or may require prior authorisation. Patients should check directly with their private medical insurer before proceeding. Where insurance does not cover PRP, treatment may be available as a self-funded option, subject to clinical assessment and suitability.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Is PRP right for everyone?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No. PRP is not suitable for every patient or every condition. Patients with severe, end-stage "bone-on-bone" joint degeneration, severe angular deformity, active infections, or certain blood disorders generally experience little or no benefit from PRP, and are usually better managed with other conservative interventions or surgical joint replacement.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                How many PRP injections will I need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                For knee osteoarthritis, my usual treatment protocol is a course of <strong className="font-semibold text-slate-900">three PRP injections, typically given at intervals of approximately 2–3 weeks</strong>.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                However, treatment is individualised. A <strong className="font-semibold text-slate-900">single PRP injection may also be considered</strong> depending on the condition being treated, the severity of symptoms, clinical findings, patient preference and response to treatment.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The appropriate number and timing of injections will be discussed following clinical assessment.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                What should I expect during the appointment?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                PRP treatment is generally performed as an outpatient procedure. The time required can vary depending on the assessment and treatment being undertaken (typically approximately 30 to 45 minutes). A routine blood sample is collected from your arm, prepared in a specialised medical centrifuge to concentrate platelets and bioactive signaling factors, and then carefully delivered into the affected area under strict sterile conditions. Patients should follow the individual instructions provided following their procedure.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                What is the recovery after an injection?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Recovery and response to PRP vary between individuals and according to the condition being treated. Some temporary soreness or discomfort may occur following treatment. Some temporary modification of activity may be recommended, and advice regarding activity, exercise and rehabilitation will be tailored to the individual. Patients should follow the individual aftercare advice provided following their procedure. Some patients may experience improvement in symptoms, but response to PRP varies and benefit cannot be guaranteed.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Can PRP cure arthritis?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>No. PRP cannot cure arthritis or reverse structural damage.</strong> While PRP contains biological growth factors that may reduce joint inflammation and ease pain in selected early or moderate osteoarthritis, it does not regrow lost cartilage or reconstruct an arthritic joint.
              </p>
            </div>
          </div>
        </section>

        {/* 12. SUMMARY & CALL TO ACTION */}
        <section className="p-8 sm:p-10 bg-gradient-to-br from-[#1B4965] to-[#13364B] rounded-2xl text-white shadow-md space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
              Private Consultations &bull; Essex &amp; London
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Discuss PRP Suitability with Mr Shivakumar Shankar
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              To discuss whether Platelet-Rich Plasma (PRP) injection is suitable for your condition, book a comprehensive clinical consultation with Mr Shivakumar Shankar at Spire Hartswood Hospital or Nuffield Health Brentwood Hospital.
            </p>

            <div className="p-3.5 bg-white/10 rounded-xl border border-white/15 text-xs text-slate-200 leading-relaxed">
              <strong className="text-white">Please note:</strong> PRP treatment is generally self-funded, and private medical insurance cover varies between policies. Please check with your insurer before treatment.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/book-consultation"
              onClick={(e) => { e.preventDefault(); onNavigate('/book-consultation'); }}
              className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3.5 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              <Calendar size={16} /> Book Consultation
            </a>
            <a
              href={`tel:${MOBILE_PHONE.replace(/\s+/g, '')}`}
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-3.5 rounded-lg font-bold text-sm transition-colors flex items-center gap-2"
            >
              <PhoneCall size={16} /> Call Secretary ({MOBILE_PHONE})
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-xs text-slate-300 hover:text-white underline transition-colors"
            >
              Email Practice Secretary: {EMAIL}
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div>
              <strong className="text-white block">Spire Hartswood Hospital</strong>
              Eagle Way, Brentwood, Essex CM13 3LE &bull; Tel: 01277 695 695
            </div>
            <div>
              <strong className="text-white block">Nuffield Health Brentwood Hospital</strong>
              Shenfield Road, Brentwood, Essex CM15 8EH &bull; Tel: 01277 263 263
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};
