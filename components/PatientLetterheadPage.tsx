import React, { useState } from 'react';
import { 
  FileText, Download, Printer, RefreshCw, Check, ArrowLeft, 
  Sparkles, ExternalLink, ShieldCheck, Mail, Phone, Globe
} from 'lucide-react';
import { downloadLetterheadDocx } from '../letterheadDocxGenerator';
import { generatePatientLetterheadPdf } from '../pdfGenerator';

interface PatientLetterheadPageProps {
  onBack?: () => void;
}

export const PatientLetterheadPage: React.FC<PatientLetterheadPageProps> = ({ onBack }) => {
  const [date, setDate] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [salutation, setSalutation] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [isGeneratingDocx, setIsGeneratingDocx] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);

  const handleInsertToday = () => {
    const today = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    setDate(today);
  };

  const handleReset = () => {
    if (body.trim() && !window.confirm('Reset the letterhead to blank? Any typed text will be cleared.')) {
      return;
    }
    setDate('');
    setPatientName('');
    setDob('');
    setSalutation('');
    setBody('');
  };

  const handleDownloadDocx = async () => {
    setIsGeneratingDocx(true);
    try {
      await downloadLetterheadDocx({
        date,
        patientName,
        dob,
        salutation,
        body,
        signoff: 'Yours sincerely,',
        surgeonName: 'Mr Shivakumar Shankar',
        surgeonTitle: 'Consultant Robotic Hip and Knee Surgeon'
      }, 'Mr_Shivakumar_Shankar_Patient_Letterhead.docx');
    } catch (err) {
      console.error('Failed to generate docx in browser, falling back to static template:', err);
      const link = document.createElement('a');
      link.href = '/Mr_Shivakumar_Shankar_Patient_Letterhead.docx';
      link.download = 'Mr_Shivakumar_Shankar_Patient_Letterhead.docx';
      link.click();
    } finally {
      setIsGeneratingDocx(false);
    }
  };

  const handleDownloadPdf = () => {
    setIsGeneratingPdf(true);
    try {
      generatePatientLetterheadPdf({
        date,
        patientName,
        dob,
        salutation,
        body,
        signoff: 'Yours sincerely,',
        surgeonName: 'Mr Shivakumar Shankar',
        surgeonTitle: 'Consultant Robotic Hip and Knee Surgeon'
      }, 'Mr_Shivakumar_Shankar_Patient_Letterhead.pdf');
    } catch (err) {
      console.error('Failed to generate PDF, falling back to static template:', err);
      const link = document.createElement('a');
      link.href = '/Mr_Shivakumar_Shankar_Patient_Letterhead.pdf';
      link.download = 'Mr_Shivakumar_Shankar_Patient_Letterhead.pdf';
      link.click();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100/80 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Top Controls Toolbar (Hidden when printing) */}
      <div className="print:hidden max-w-5xl mx-auto mb-8">
        {/* Navigation Breadcrumb & Back */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            {onBack ? (
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4965] hover:text-[#0F2D3F] bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs transition-colors"
              >
                <ArrowLeft size={14} /> Back to Practice
              </button>
            ) : (
              <a
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4965] hover:text-[#0F2D3F] bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs transition-colors"
              >
                <ArrowLeft size={14} /> Back to Home
              </a>
            )}
            <span className="text-xs text-slate-400">/</span>
            <span className="text-xs font-semibold text-slate-600">Practice Resources</span>
            <span className="text-xs text-slate-400">/</span>
            <span className="text-xs font-bold text-[#1B4965]">Patient Letterhead Template</span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <ShieldCheck size={13} /> Official Practice Template
          </span>
        </div>

        {/* Action Card */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200/90">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <FileText className="text-[#1B4965]" size={26} />
                Patient Letterhead Template
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Clean, professional A4 consultant letterhead for NHS and private patient correspondence. 
                Type or paste freely below, then download as an editable <strong>Word (.docx)</strong> document, 
                print-ready <strong>PDF</strong>, or print directly.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0">
              {/* Download Word DOCX */}
              <button
                onClick={handleDownloadDocx}
                disabled={isGeneratingDocx}
                className="inline-flex items-center gap-2 bg-[#1B4965] hover:bg-[#15384F] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all hover:shadow active:scale-98"
                title="Download Microsoft Word document with running header and footer"
              >
                <Download size={15} />
                {isGeneratingDocx ? 'Generating Word...' : 'Download Word (.docx)'}
              </button>

              {/* Download PDF */}
              <button
                onClick={handleDownloadPdf}
                disabled={isGeneratingPdf}
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all hover:shadow active:scale-98"
                title="Download print-ready PDF document"
              >
                <Download size={15} />
                {isGeneratingPdf ? 'Generating PDF...' : 'Download PDF (.pdf)'}
              </button>

              {/* Print */}
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-300 shadow-2xs transition-colors"
                title="Print directly to connected printer or save as PDF"
              >
                <Printer size={15} />
                Print
              </button>

              {/* Reset to Blank */}
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-2.5 rounded-xl font-medium transition-colors"
                title="Clear all fields back to blank"
              >
                <RefreshCw size={13} />
                Reset
              </button>
            </div>
          </div>

          {/* Quick links to standalone downloadable files */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-semibold text-slate-700">Separate Template Files:</span>
              <a 
                href="/Mr_Shivakumar_Shankar_Patient_Letterhead.docx" 
                download="Mr_Shivakumar_Shankar_Patient_Letterhead.docx"
                className="text-[#1B4965] hover:underline font-bold inline-flex items-center gap-1"
              >
                <FileText size={13} /> Direct Word Template (.docx)
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href="/Mr_Shivakumar_Shankar_Patient_Letterhead.pdf" 
                download="Mr_Shivakumar_Shankar_Patient_Letterhead.pdf"
                className="text-[#1B4965] hover:underline font-bold inline-flex items-center gap-1"
              >
                <FileText size={13} /> Direct Blank PDF Template (.pdf)
              </a>
            </div>

            <button
              onClick={handleInsertToday}
              className="text-xs font-semibold text-[#1B4965] hover:text-[#15384F] hover:underline cursor-pointer"
            >
              + Insert Today's Date
            </button>
          </div>
        </div>
      </div>

      {/* Main A4 Letterhead Canvas (Styled strictly as an A4 sheet: 210mm x 297mm) */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-xl print:shadow-none border border-slate-300 print:border-none rounded-sm min-h-[297mm] p-[16mm] flex flex-col justify-between text-slate-900 transition-all">
        
        {/* ================================================== */}
        {/* HEADER SECTION (Top 15–20% of A4 page)             */}
        {/* ================================================== */}
        <div>
          <div className="flex flex-row items-center justify-between gap-4 pb-3 border-b-2 border-[#1B4965]">
            
            {/* Left Column: Brand Logo */}
            <div className="w-[28%] flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="London Essex Hip and Knee Surgeon" 
                className="h-11 sm:h-13 w-auto object-contain max-w-full"
              />
            </div>

            {/* Centre Column: Surgeon Name, Title & Hospital Affiliations */}
            <div className="w-[44%] text-center flex flex-col items-center justify-center px-1">
              <h2 className="text-base sm:text-lg font-black text-[#1B4965] tracking-tight leading-tight">
                Mr Shivakumar Shankar
              </h2>
              <p className="text-[10px] sm:text-[11px] font-bold text-[#2A5F82] uppercase tracking-wider mt-0.5 leading-tight">
                Consultant Robotic Hip and Knee Surgeon
              </p>
              <p className="text-[8.5px] sm:text-[9.5px] text-slate-500 font-medium mt-1 leading-snug">
                Spire Hartswood Hospital &bull; Nuffield Health Brentwood Hospital &bull; Queen's Hospital
              </p>
            </div>

            {/* Right Column: Contact Details & Website */}
            <div className="w-[28%] flex-shrink-0 text-right flex flex-col justify-center text-[9px] sm:text-[10px] space-y-0.5 text-slate-700">
              <div className="leading-tight">
                <span className="font-bold text-slate-500">MOBILE: </span>
                <span className="font-bold text-slate-900">07587 765888</span>
              </div>
              <div className="leading-tight">
                <span className="font-bold text-slate-500">LANDLINE: </span>
                <span className="font-medium text-slate-800">020 3523 0621</span>
              </div>
              <div className="leading-tight">
                <span className="font-bold text-slate-500">EMAIL: </span>
                <span className="text-[#1B4965] font-medium">hip.knee_specialist@yahoo.com</span>
              </div>
              <div className="leading-tight pt-0.5">
                <span className="font-bold text-[#1B4965]">www.shivakumarshankar.co.uk</span>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* LETTER BODY (Free Space for Patient Letters)       */}
          {/* ================================================== */}
          <div className="pt-6 sm:pt-8 text-slate-900 text-xs sm:text-sm leading-relaxed space-y-3">
            
            {/* Simple Editable Patient Fields */}
            <div className="space-y-2 pb-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#1B4965] w-24 flex-shrink-0">Date:</span>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="______________________"
                  className="w-full max-w-xs px-2 py-0.5 border-b border-dashed border-slate-300 focus:border-[#1B4965] focus:outline-none bg-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-[#1B4965] w-24 flex-shrink-0">Patient Name:</span>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="______________________________________"
                  className="w-full max-w-md px-2 py-0.5 border-b border-dashed border-slate-300 focus:border-[#1B4965] focus:outline-none bg-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-[#1B4965] w-24 flex-shrink-0">DOB:</span>
                <input
                  type="text"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="______________________"
                  className="w-full max-w-xs px-2 py-0.5 border-b border-dashed border-slate-300 focus:border-[#1B4965] focus:outline-none bg-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-slate-800 font-medium">Dear</span>
                <input
                  type="text"
                  value={salutation}
                  onChange={(e) => setSalutation(e.target.value)}
                  placeholder="______________________,"
                  className="w-full max-w-xs px-2 py-0.5 border-b border-dashed border-slate-300 focus:border-[#1B4965] focus:outline-none bg-transparent text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Completely Free Writing Area (User can type or paste any patient letter) */}
            <div className="pt-2">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={14}
                placeholder="[Free editable space for patient correspondence. Type or paste your clinical consultation letter, diagnosis, GP summary, or patient instructions here...]"
                className="w-full p-2.5 text-slate-900 leading-relaxed border border-transparent hover:border-slate-200 focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#1B4965]/20 rounded-md transition-colors resize-y font-serif text-sm placeholder:text-slate-300 placeholder:italic bg-transparent"
              />
            </div>

            {/* ================================================== */}
            {/* SIGN-OFF                                           */}
            {/* ================================================== */}
            <div className="pt-4 space-y-1">
              <p className="text-slate-800">Yours sincerely,</p>
              
              {/* Space for electronic or handwritten signature */}
              <div className="h-14 sm:h-16 w-56 flex items-end">
                <span className="text-[11px] text-slate-300 italic print:hidden select-none">
                  (Signature space)
                </span>
              </div>

              <div>
                <p className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                  Mr Shivakumar Shankar
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-tight">
                  Consultant Robotic Hip and Knee Surgeon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* FOOTER                                             */}
        {/* ================================================== */}
        <div className="pt-8 mt-12 border-t border-slate-200 flex items-center justify-between text-[9px] sm:text-[10px] text-slate-500 font-medium">
          <div>
            <span>Mr Shivakumar Shankar</span>
            <span className="mx-1.5 text-slate-300">•</span>
            <span>Consultant Robotic Hip and Knee Surgeon</span>
          </div>
          <div>
            <span className="text-[#1B4965] font-semibold">www.shivakumarshankar.co.uk</span>
          </div>
        </div>

      </div>

      {/* Print Instructions Callout at Bottom (hidden when printing) */}
      <div className="print:hidden max-w-5xl mx-auto mt-8 bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 text-xs text-blue-900 space-y-2">
        <div className="flex items-center gap-2 font-bold text-blue-950">
          <Sparkles size={16} className="text-[#1B4965]" />
          Medical Letterhead Printing & Word Compatibility Notes
        </div>
        <p className="leading-relaxed text-blue-800">
          • <strong>Multi-Page Expansion:</strong> In Microsoft Word, the header and footer are placed in the document header/footer layers so they automatically repeat across pages without shifting your text.
        </p>
        <p className="leading-relaxed text-blue-800">
          • <strong>Direct Physical Printing:</strong> Click <strong>Print</strong> above to send this template straight to your office printer. All browser navigation and action toolbars are automatically hidden.
        </p>
        <p className="leading-relaxed text-blue-800">
          • <strong>Exact Address:</strong> The website URL is preserved as <code className="bg-blue-100/80 px-1 py-0.5 rounded font-mono text-[#1B4965]">www.shivakumarshankar.co.uk</code> across all headers, footers, and correspondence files.
        </p>
      </div>

    </div>
  );
};
