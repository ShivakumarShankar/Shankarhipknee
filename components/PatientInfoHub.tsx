import React, { useState } from 'react';
import { 
  FileText, Download, Calendar, CheckCircle2, AlertCircle, 
  HelpCircle, Search, Clock, ShieldAlert, HeartPulse, ChevronRight, Phone
} from 'lucide-react';
import { 
  FAQS, 
  PROTOCOLS, 
  SURGEON_NAME, 
  SURGEON_ROLE, 
  MOBILE_PHONE, 
  LANDLINE_PHONE, 
  EMAIL, 
  SECRETARY_NAME 
} from '../constants';

export type PatientInfoMode = 
  | 'overview' 
  | 'hip-recovery' 
  | 'knee-recovery' 
  | 'preparing' 
  | 'faqs' 
  | 'protocols';

interface PatientInfoHubProps {
  mode: PatientInfoMode;
  onBook: () => void;
  onNavigate: (href: string) => void;
}

export const PatientInfoHub: React.FC<PatientInfoHubProps> = ({
  mode,
  onBook,
  onNavigate
}) => {
  const [faqSearch, setFaqSearch] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('all');
  const [generatingPdf, setGeneratingPdf] = useState<string | null>(null);

  const handleDownloadProtocol = async (proto: any) => {
    try {
      setGeneratingPdf(proto.title);
      const { generateProtocolPdf } = await import('../pdfGenerator');
      await generateProtocolPdf(proto);
    } catch (e) {
      console.error("PDF generation failed:", e);
    } finally {
      setGeneratingPdf(null);
    }
  };

  const getHeaderInfo = () => {
    switch (mode) {
      case 'hip-recovery':
        return {
          badge: 'Recovery Pathway • Hip Arthroplasty',
          h1: 'Hip Replacement Recovery & Rehabilitation Guide',
          lead: 'Comprehensive hip replacement recovery milestones, physiotherapy exercises, wound care guidance, walking progression, returning to driving, and return to work under Mr Shivakumar Shankar in London and Essex.'
        };
      case 'knee-recovery':
        return {
          badge: 'Recovery Pathway • Knee Arthroplasty',
          h1: 'Knee Replacement Rehabilitation & Recovery Guide',
          lead: 'Detailed knee replacement rehabilitation pathway covering knee extension (0°), flexion milestones, swelling control, icing protocols, stair negotiation, and return to daily activities under Mr Shivakumar Shankar in London and Essex.'
        };
      case 'preparing':
        return {
          badge: 'Pre-Operative Preparation',
          h1: 'Preparing for Joint Replacement Surgery',
          lead: 'Everything you need to know before coming to hospital: pre-assessment medical checks, medication management, home environment preparation, hospital packing list, and smoking cessation.'
        };
      case 'faqs':
        return {
          badge: 'Patient Questions',
          h1: 'Frequently Asked Questions (FAQs)',
          lead: 'Clear, expert answers to common questions regarding private consultations, fees, health insurance, surgical planning, hospital stays, and aftercare under Mr Shivakumar Shankar.'
        };
      case 'protocols':
        return {
          badge: 'Physiotherapy & Rehabilitation',
          h1: 'Physiotherapy Protocols & Rehabilitation Guides',
          lead: 'Structured clinical physiotherapy pathways and downloadable patient PDF protocols for hip replacement, total knee replacement, partial knee replacement, and knee arthroscopy.'
        };
      default:
        return {
          badge: 'Patient Information Hub',
          h1: 'Patient Information & Surgical Education Guides',
          lead: 'Clear, factual guidance for patients undergoing hip or knee surgery under the care of Mr Shivakumar Shankar in London and Essex.'
        };
    }
  };

  const header = getHeaderInfo();

  const filteredFaqs = FAQS.filter(f => {
    const matchesSearch = f.question.toLowerCase().includes(faqSearch.toLowerCase()) || 
                          f.answer.toLowerCase().includes(faqSearch.toLowerCase());
    const matchesCategory = selectedFaqCategory === 'all' || f.category.toLowerCase() === selectedFaqCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <article className="pt-24 sm:pt-28 md:pt-32 pb-20 font-sans text-slate-800 bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="hover:text-[#1B4965]">Home</a>
            <span>/</span>
            <a href="/patient-information" onClick={(e) => { e.preventDefault(); onNavigate('/patient-information'); }} className="hover:text-[#1B4965]">Patient Information</a>
            {mode !== 'overview' && (
              <>
                <span>/</span>
                <span className="text-[#1B4965] font-bold">{header.badge}</span>
              </>
            )}
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#EAF1F6] text-[#1B4965] text-xs font-bold uppercase tracking-wider mb-4 border border-slate-200">
            {header.badge}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {header.h1}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 mt-4 leading-relaxed max-w-4xl">
            {header.lead}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <button
              onClick={onBook}
              className="bg-[#E8A24C] hover:bg-[#D99136] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center gap-2"
            >
              <Calendar size={16} /> Book Private Consultation
            </button>
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); onNavigate('/contact'); }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-lg font-bold text-sm transition-colors"
            >
              Contact Practice Secretary
            </a>
          </div>
        </div>
      </section>

      {/* 2. RECOVERY WARNING / DISCLAIMER */}
      <section className="py-6 bg-[#FFFBEB] border-b border-[#FDE68A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
            <ShieldAlert size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Important Clinical Notice:</strong> Recovery rates vary from person to person depending on general health, bone quality, muscular strength, and surgical approach. Always follow the explicit instructions and post-operative guidance given by your treating clinical and surgical team.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED SECTIONS BASED ON MODE */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Hub Navigation Cards */}
          <div className="mb-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { title: 'Hip Recovery', href: '/hip-replacement-recovery', modeKey: 'hip-recovery' },
              { title: 'Knee Recovery', href: '/knee-replacement-recovery', modeKey: 'knee-recovery' },
              { title: 'Preparing for Surgery', href: '/preparing-for-surgery', modeKey: 'preparing' },
              { title: 'Patient FAQs', href: '/frequently-asked-questions', modeKey: 'faqs' },
              { title: 'Physio Protocols', href: '/physio-protocols', modeKey: 'protocols' },
            ].map((btn, idx) => (
              <a
                key={idx}
                href={btn.href}
                onClick={(e) => { e.preventDefault(); onNavigate(btn.href); }}
                className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all last:col-span-2 sm:last:col-span-1 ${
                  mode === btn.modeKey 
                    ? 'bg-[#1B4965] text-white border-[#1B4965] shadow-xs' 
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                }`}
              >
                {btn.title}
              </a>
            ))}
          </div>

          {/* HIP RECOVERY MODE */}
          {(mode === 'hip-recovery' || mode === 'overview') && (
            <div className="mb-14 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-2xl font-black text-slate-900">
                Hip Replacement Recovery Milestones &amp; Practical Advice
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enhanced Recovery After Surgery (ERAS) protocols combine spinal anaesthesia, targeted local anaesthetic infiltration, and muscle-sparing surgical exposure so that most patients stand and walk with a physiotherapist on the day of their hip replacement. While individual progress depends on pre-operative fitness, bone quality, and whether surgery is primary or revision, the structured timeline below outlines typical post-operative milestones.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Day 0 to Week 2</h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• Same-day mobilisation with two crutches or a frame under physiotherapy supervision.</li>
                    <li>• Safe stair negotiation practice (up with the non-operated leg first, down with the crutches and operated leg first) prior to hospital discharge.</li>
                    <li>• Keep your waterproof surgical dressing undisturbed, clean, and dry; shower only as instructed by the ward team.</li>
                    <li>• Scheduled multimodal analgesia and venous thromboembolism (VTE) prophylaxis tablets or injections.</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Weeks 2 to 6</h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• Progressive transition from two crutches to a single walking stick held in the hand opposite the operated hip.</li>
                    <li>• Surgical wound check and clip or suture review by the outpatient nursing team at day 10 to 14.</li>
                    <li>• Gradual increase in outdoor walking on even pavements and targeted hip abductor (gluteus medius) strengthening.</li>
                    <li>• Sleeping comfortably on your back or on the non-operated side with a firm pillow placed between the knees.</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Weeks 6 to 12+</h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• Consultant clinical and radiological follow-up review at approximately 6 weeks post-operation.</li>
                    <li>• Return to driving (typically 4 to 6 weeks) once completely off strong opioid medication and able to perform a firm emergency stop.</li>
                    <li>• Return to desk-based work at 4 to 6 weeks, or physically demanding manual work at 8 to 12 weeks.</li>
                    <li>• Graduated resumption of low-impact activities including swimming (once the wound is fully sealed), static cycling, golf, and country walking.</li>
                  </ul>
                </div>
              </div>

              {mode === 'hip-recovery' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-2.5">
                      <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Core Daily Hip Physiotherapy Exercises</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Consistent, gentle daily repetition (3 to 4 times per day) is more effective than infrequent strenuous workouts:
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                        <li>• <strong>Ankle Pumps &amp; Gluteal Squeezes:</strong> Hourly foot dorsiflexion/plantarflexion and buttock contractions in the first fortnight to stimulate venous return.</li>
                        <li>• <strong>Heel Slides &amp; Static Quadriceps:</strong> Controlled knee and hip flexion sliding the heel along the bed, followed by pressing the back of the knee flat for 5 seconds.</li>
                        <li>• <strong>Standing Hip Abduction &amp; Extension:</strong> Holding a sturdy kitchen worktop, gently lift the operated leg out to the side and backwards while keeping the trunk upright to eliminate any pre-operative limp.</li>
                      </ul>
                    </div>

                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-2.5">
                      <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Private Hospital Rehabilitation &amp; Follow-Up in Brentwood</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Inpatient and outpatient physiotherapy, wound care clinics, and 6-week consultant follow-up appointments are coordinated directly at your treating hospital:
                      </p>
                      <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                        <li>• <a href="/nuffield-brentwood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('nuffield-brentwood-hospital'); }} className="font-bold text-[#1B4965] hover:underline">Nuffield Health Brentwood Hospital (CM15 8EH)</a> — Dedicated inpatient and outpatient physiotherapy following <strong>MAKO robotic-assisted</strong>, minimally invasive, and conventional total hip replacement.</li>
                        <li>• <a href="/spire-hartswood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('spire-hartswood-hospital'); }} className="font-bold text-[#1B4965] hover:underline">Spire Hartswood Hospital, Brentwood (CM13 3LE)</a> — Specialist arthroplasty rehabilitation following <strong>conventional and computer-navigated</strong> total hip replacement (MAKO robotic surgery is not available at Spire Hartswood).</li>
                        <li>• <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="font-bold text-[#1B4965] hover:underline">Contact Practice Secretary</a> — Reach Mr Shankar’s team for post-operative appointments, insurance authorisation, or clinical queries.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    <h3 className="text-lg font-black text-slate-900">Frequently Asked Questions: Hip Replacement Recovery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                        <h4 className="font-bold text-slate-900 text-xs">When can I drive after a total hip replacement?</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Most patients return to driving between 4 and 6 weeks after hip replacement, provided they are no longer taking sedating opioid painkillers, can enter and exit the car comfortably, and can perform a confident emergency stop. Patients with an automatic car following a left hip replacement may sometimes resume slightly earlier after clinical confirmation.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                        <h4 className="font-bold text-slate-900 text-xs">How long will I stay in hospital after hip replacement surgery?</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          With Enhanced Recovery After Surgery (ERAS) pathways at Nuffield Health Brentwood Hospital and Spire Hartswood Hospital, the typical inpatient stay is 1 to 2 nights, with selected medically fit patients eligible for day-case discharge once safe on crutches and stairs.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                        <h4 className="font-bold text-slate-900 text-xs">Do I need to sleep on my back after a hip replacement?</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Sleeping on your back is recommended during the first 2 to 4 weeks, or sleeping on your non-operated side with a firm pillow between your knees to prevent the operated leg crossing the midline. Mr Shankar’s team will confirm any specific hip precautions based on your surgical approach.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                        <h4 className="font-bold text-slate-900 text-xs">When can I fly after hip replacement surgery?</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Short-haul flights are generally deferred until at least 6 weeks post-operatively, and long-haul flights (over 4 hours) are typically advised to wait until 12 weeks after surgery due to the elevated risk of deep vein thrombosis (DVT) during prolonged cabin immobility.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3 text-xs">
                <span className="font-bold text-slate-700">Related Hip Procedures:</span>
                <a href="/hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('hip-replacement'); }} className="font-bold text-[#1B4965] hover:underline">Total Hip Replacement &rarr;</a>
                <a href="/robotic-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('robotic-hip-replacement'); }} className="font-bold text-[#1B4965] hover:underline">MAKO Robotic Hip Replacement &rarr;</a>
                <a href="/minimally-invasive-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('minimally-invasive-hip-replacement'); }} className="font-bold text-[#1B4965] hover:underline">Minimally Invasive Hip Surgery &rarr;</a>
                <a href="/revision-hip-replacement" onClick={(e) => { e.preventDefault(); onNavigate('revision-hip-replacement'); }} className="font-bold text-[#1B4965] hover:underline">Revision Hip Replacement &rarr;</a>
              </div>
            </div>
          )}

          {/* KNEE RECOVERY MODE */}
          {(mode === 'knee-recovery' || mode === 'overview') && (
            <div className="mb-14 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-2xl font-black text-slate-900">
                Knee Replacement Rehabilitation &amp; Mobility Focus
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Successful recovery after total or partial knee replacement relies on active patient participation in daily physiotherapy, disciplined swelling control, and progressive range-of-motion exercises. Unlike the hip, the knee joint requires dedicated daily work to prevent scar tissue stiffness and restore both full straightening (extension) and smooth bending (flexion).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Restoring Extension (0°)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Straightening the knee completely (0 degrees) is the critical early objective for an efficient, limp-free walking gait. Practise pressing the back of the knee firmly down into the mattress and resting your heel on a rolled towel with nothing supporting the back of the knee.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Swelling &amp; Ice Management</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Post-operative swelling and mild warmth around the knee are normal physiological responses for 3 to 6 months. Regular cryotherapy (ice packs wrapped in a damp towel for 15–20 minutes, 4 times daily) and high leg elevation after exercise control joint effusion.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Achieving Flexion (90° to 115°+)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Aim for 90 degrees of knee bend before or shortly after week 2, progressing towards 110–120+ degrees over weeks 6 to 12. Seated heel slides and gentle upright stationary cycling (once flexion reaches ~95°) safely build flexion and quadriceps endurance.
                  </p>
                </div>
              </div>

              {mode === 'knee-recovery' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                      <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Day 0 to Week 2</h3>
                      <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                        <li>• Same-day weight-bearing with crutches under physiotherapy guidance after spinal and adductor canal block analgesia.</li>
                        <li>• Regular scheduled pain relief taken 30 minutes before exercise sessions to permit comfortable knee bending.</li>
                        <li>• Wound clip or suture inspection at day 12 to 14; keep waterproof dressing dry until healed.</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                      <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Weeks 2 to 6</h3>
                      <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                        <li>• Progression from two crutches to one walking stick indoors and outdoors as quadriceps control improves.</li>
                        <li>• Outpatient physiotherapy focusing on patellar mobility, step-ups, balance, and stationary bike revolutions.</li>
                        <li>• Return to driving around 4 to 6 weeks (or 2 to 4 weeks after partial knee replacement) once emergency braking is brisk and pain-free.</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                      <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Weeks 6 to 12 &amp; Beyond</h3>
                      <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                        <li>• 6-week outpatient clinical and X-ray review with Mr Shankar.</li>
                        <li>• Return to sedentary work at 4 to 6 weeks; active or manual roles at 8 to 12 weeks.</li>
                        <li>• Continued soft-tissue remodelling, strength gains, and fading of residual warmth for up to 9 to 12 months.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-2.5">
                    <h3 className="font-bold text-slate-900 text-sm text-[#1B4965]">Private Hospital Knee Rehabilitation &amp; Follow-Up Locations</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Your post-operative physiotherapy, wound review, and consultant follow-up are delivered across Mr Shankar’s two Brentwood private hospital centres:
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                      <li>• <a href="/nuffield-brentwood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('nuffield-brentwood-hospital'); }} className="font-bold text-[#1B4965] hover:underline">Nuffield Health Brentwood Hospital (CM15 8EH)</a> — Specialist inpatient and outpatient physiotherapy gym supporting patients after <strong>MAKO robotic-assisted total and partial knee replacement</strong> as well as conventional knee surgery.</li>
                      <li>• <a href="/spire-hartswood-hospital" onClick={(e) => { e.preventDefault(); onNavigate('spire-hartswood-hospital'); }} className="font-bold text-[#1B4965] hover:underline">Spire Hartswood Hospital, Brentwood (CM13 3LE)</a> — Dedicated orthopaedic rehabilitation following <strong>conventional and computer-navigated total and partial knee replacement</strong> and day-case knee arthroscopy (MAKO robotic surgery is not available at Spire Hartswood).</li>
                      <li>• <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="font-bold text-[#1B4965] hover:underline">Contact Practice Secretary</a> — Arrange a post-operative review, physiotherapy referral, or private knee consultation.</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    <h3 className="text-lg font-black text-slate-900">Frequently Asked Questions: Knee Replacement Recovery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                        <h4 className="font-bold text-slate-900 text-xs">How long is it normal for a replaced knee to stay swollen or warm?</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Moderate swelling and a slight feeling of warmth around the knee are completely normal for 3 to 6 months after knee replacement as internal soft tissues remodel. Provided there is no spreading redness, fever, worsening rest pain, or wound discharge, this settles gradually with icing and elevation.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                        <h4 className="font-bold text-slate-900 text-xs">When can I drive after a total or partial knee replacement?</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          After a total knee replacement, most patients resume driving at 4 to 6 weeks. After a partial (unicompartmental) knee replacement, driving is often possible at 3 to 4 weeks. In all cases, you must be off strong opioid analgesia and able to perform an emergency stop safely.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                        <h4 className="font-bold text-slate-900 text-xs">Can I kneel after a knee replacement?</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Once the surgical scar has fully healed and matured (typically from 8 to 12 weeks onwards), kneeling does not damage the metal or polyethylene implant components. Some patients notice mild scar sensitivity or numbness on the outer side of the incision, which improves by kneeling on a soft cushion.
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                        <h4 className="font-bold text-slate-900 text-xs">Why is straightening the knee (0° extension) so important early on?</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          If a replaced knee heals with a slight bend (fixed flexion contracture), standing and walking require constant quadriceps muscle effort and can cause a persistent limp. Avoiding pillows directly underneath the back of the knee and performing daily heel-prop stretches ensures full extension.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3 text-xs">
                <span className="font-bold text-slate-700">Related Knee Procedures:</span>
                <a href="/knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('knee-replacement'); }} className="font-bold text-[#1B4965] hover:underline">Total Knee Replacement &rarr;</a>
                <a href="/robotic-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('robotic-knee-replacement'); }} className="font-bold text-[#1B4965] hover:underline">MAKO Robotic Knee Replacement &rarr;</a>
                <a href="/partial-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('partial-knee-replacement'); }} className="font-bold text-[#1B4965] hover:underline">Partial Knee Replacement &rarr;</a>
                <a href="/computer-assisted-knee-replacement" onClick={(e) => { e.preventDefault(); onNavigate('computer-assisted-knee-replacement'); }} className="font-bold text-[#1B4965] hover:underline">Computer-Navigated Knee Surgery &rarr;</a>
              </div>
            </div>
          )}

          {/* PREPARING FOR SURGERY MODE */}
          {(mode === 'preparing' || mode === 'overview') && (
            <div className="mb-14 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-2xl font-black text-slate-900">
                Preparing for Joint Replacement: Checklist &amp; Advice
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#1B4965]" /> What to Prepare at Home
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• Remove loose rugs, cables, and trip hazards from main walkways.</li>
                    <li>• Arrange non-slip mats in the bathroom and consider a stable shower stool.</li>
                    <li>• Stock up on easy-to-prepare meals and store essentials at waist height.</li>
                    <li>• Ensure a stable chair with arms and firm cushion is available.</li>
                  </ul>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#1B4965]" /> What to Bring to Hospital
                  </h3>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• All current medications in their original labelled pharmacy boxes.</li>
                    <li>• Supportive, flat walking shoes or slippers with firm non-slip rubber soles.</li>
                    <li>• Loose, comfortable day clothes that easily accommodate joint dressings.</li>
                    <li>• Personal toiletries, phone, and long charging lead.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* WARNING SIGNS SECTION */}
          <div className="mb-14 bg-rose-50/70 p-6 sm:p-8 rounded-2xl border border-rose-200 shadow-xs space-y-4">
            <h3 className="text-lg font-black text-rose-950 flex items-center gap-2">
              <AlertCircle size={20} className="text-rose-700" /> When to Contact the Clinical Team Immediately
            </h3>
            <p className="text-xs text-rose-900 leading-relaxed">
              While serious complications are uncommon, you must contact the hospital ward, Mr Shankar's secretary, or emergency services immediately if you experience:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-rose-900">
              <li>• Sudden, severe pain or swelling in the calf of either leg (potential DVT).</li>
              <li>• Sudden breathlessness, shortness of breath, or sharp chest pain (potential PE).</li>
              <li>• Spreading redness, heat, worsening wound leakage, foul discharge, or high fever (&gt;38°C).</li>
              <li>• Sudden inability to bear weight through the operated leg or acute joint dislocation.</li>
            </ul>
          </div>

          {/* PROTOCOLS MODE */}
          {(mode === 'protocols' || mode === 'overview') && (
            <div className="mb-14 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-black text-slate-900">
                  Downloadable Clinical Rehabilitation Protocols
                </h2>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  PDF format &bull; Clinically approved
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROTOCOLS.map((proto, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] uppercase font-bold text-[#1B4965] bg-[#EAF1F6] px-2.5 py-0.5 rounded">
                          {proto.joint} Joint
                        </span>
                        <span className="text-xs text-slate-400 font-semibold">{proto.timeline}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-1">{proto.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{proto.description}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => handleDownloadProtocol(proto)}
                        disabled={generatingPdf === proto.title}
                        className="bg-[#1B4965] hover:bg-[#13364B] text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors disabled:opacity-50"
                      >
                        <Download size={13} />
                        <span>{generatingPdf === proto.title ? 'Generating...' : 'Download PDF Protocol'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQS MODE */}
          {(mode === 'faqs' || mode === 'overview') && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <HelpCircle size={22} className="text-[#1B4965]" /> Patient FAQs
                </h2>
                <div className="relative w-full sm:w-72">
                  <Search size={15} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={faqSearch}
                    onChange={(e) => setFaqSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-[#1B4965]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {filteredFaqs.slice(0, mode === 'overview' ? 6 : 20).map((faq, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                    <h3 className="font-bold text-slate-900 text-sm">{faq.question}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </article>
  );
};
