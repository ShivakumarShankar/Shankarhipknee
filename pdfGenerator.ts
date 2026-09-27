import { jsPDF } from "jspdf";
import { LOGO_DATA_URI } from "./logoDataUri";
import { ProcedureRiskInfo, ComplicationGuide } from "./patientInfoData";
import { Protocol } from "./types";
import { SURGEON_NAME, SURGEON_ROLE } from "./constants";

const PRIMARY_NAVY = [27, 73, 101]; // #1B4965
const GOLD_ACCENT = [232, 162, 76]; // #E8A24C
const TEXT_DARK = [30, 41, 59]; // #1E293B
const TEXT_MUTED = [100, 116, 139]; // #64748B
const BG_CARD = [248, 250, 252]; // #F8FAFC
const BORDER_LIGHT = [226, 232, 240]; // #E2E8F0
const RED_ALERT = [185, 28, 28]; // #B91C1C
const BG_RED = [254, 242, 242]; // #FEF2F2

interface PdfContext {
  doc: jsPDF;
  pageWidth: number;
  pageHeight: number;
  margin: number;
  contentWidth: number;
  currentY: number;
}

function createPdfContext(): PdfContext {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
    compress: true
  });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  return {
    doc,
    pageWidth,
    pageHeight,
    margin,
    contentWidth,
    currentY: 15
  };
}

/**
 * Draws the mandatory practice header on every page:
 * Features:
 * - Logo image
 * - Mr Shivakumar Shankar
 * - Consultant Robotic Hip and Knee Surgeon
 * - Hospital affiliations & contact
 */
function drawHeader(ctx: PdfContext, isFirstPage: boolean = false) {
  const { doc, margin, pageWidth } = ctx;
  const headerY = 12;

  // 1. Logo
  try {
    if (LOGO_DATA_URI) {
      // 40mm wide, ~12mm tall
      doc.addImage(LOGO_DATA_URI, "PNG", margin, headerY, 38, 12);
    }
  } catch (e) {
    console.warn("Could not draw logo in PDF:", e);
  }

  // 2. Surgeon Name & Role Header Block
  const textX = margin + 42;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
  doc.text(SURGEON_NAME, textX, headerY + 4);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(GOLD_ACCENT[0], GOLD_ACCENT[1], GOLD_ACCENT[2]);
  doc.text(SURGEON_ROLE.toUpperCase(), textX, headerY + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text("Spire Hartswood Hospital &bull; Nuffield Health Brentwood &bull; Queen's Hospital", textX, headerY + 11.5);

  // Right-aligned contact info
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
  doc.text("Enquiries: 01277 554 132 | 07936 601 547", pageWidth - margin, headerY + 5, { align: "right" });
  doc.text("contact@londonarthroplasty.co.uk", pageWidth - margin, headerY + 8.5, { align: "right" });
  doc.text("www.londonarthroplasty.co.uk", pageWidth - margin, headerY + 11.5, { align: "right" });

  // Divider line
  const lineY = headerY + 14.5;
  doc.setDrawColor(BORDER_LIGHT[0], BORDER_LIGHT[1], BORDER_LIGHT[2]);
  doc.setLineWidth(0.4);
  doc.line(margin, lineY, pageWidth - margin, lineY);

  ctx.currentY = lineY + 6;
}

/**
 * Checks for page break and redraws header
 */
function checkPageBreak(ctx: PdfContext, requiredSpace: number) {
  const bottomThreshold = ctx.pageHeight - 22; // Leave room for footer
  if (ctx.currentY + requiredSpace > bottomThreshold) {
    ctx.doc.addPage();
    drawHeader(ctx, false);
  }
}

/**
 * Adds footer with page numbers to all pages
 */
function finalizeFooters(doc: jsPDF) {
  const totalPages = doc.getNumberOfPages();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;

  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    
    // Top border of footer
    doc.setDrawColor(BORDER_LIGHT[0], BORDER_LIGHT[1], BORDER_LIGHT[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
    doc.text(
      `${SURGEON_NAME} | ${SURGEON_ROLE} | Patient Information & Clinical Consent Guide`,
      margin,
      pageHeight - 7.5
    );

    doc.text(
      `Page ${i} of ${totalPages}`,
      pageWidth - margin,
      pageHeight - 7.5,
      { align: "right" }
    );
  }
}

/**
 * Draws an emergency red callout box
 */
function drawEmergencyNotice(ctx: PdfContext, text: string) {
  const { doc, margin, contentWidth } = ctx;
  checkPageBreak(ctx, 32);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  const title = "IMPORTANT CLINICAL NOTICE & EMERGENCY SYMPTOMS";
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  const splitText = doc.splitTextToSize(text, contentWidth - 10);
  const boxHeight = 10 + splitText.length * 4;

  // Background
  doc.setFillColor(BG_RED[0], BG_RED[1], BG_RED[2]);
  doc.setDrawColor(RED_ALERT[0], RED_ALERT[1], RED_ALERT[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin, ctx.currentY, contentWidth, boxHeight, 2, 2, "FD");

  // Title
  doc.setTextColor(RED_ALERT[0], RED_ALERT[1], RED_ALERT[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.text(title, margin + 5, ctx.currentY + 6);

  // Body
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(splitText, margin + 5, ctx.currentY + 11);

  ctx.currentY += boxHeight + 6;
}

/**
 * Draws a section header
 */
function drawSectionHeader(ctx: PdfContext, title: string, subtitle?: string) {
  checkPageBreak(ctx, 16);
  const { doc, margin, contentWidth } = ctx;

  doc.setFillColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
  doc.rect(margin, ctx.currentY, 2.5, 6, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
  doc.text(title.toUpperCase(), margin + 5, ctx.currentY + 4.8);

  ctx.currentY += 8;

  if (subtitle) {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
    const splitSub = doc.splitTextToSize(subtitle, contentWidth);
    doc.text(splitSub, margin + 5, ctx.currentY);
    ctx.currentY += splitSub.length * 4 + 2;
  }
}

/**
 * Generates and downloads a complete Procedure & Surgical Risks PDF
 */
export function generateProcedureRiskPdf(info: ProcedureRiskInfo) {
  const ctx = createPdfContext();
  const { doc, margin, contentWidth } = ctx;

  // First page header
  drawHeader(ctx, true);

  // Title block
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
  doc.text(info.procedureTitle, margin, ctx.currentY + 2);
  ctx.currentY += 7;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(GOLD_ACCENT[0], GOLD_ACCENT[1], GOLD_ACCENT[2]);
  doc.text(`PATIENT INFORMATION GUIDE & SURGICAL RISKS &bull; ${info.subtitle.toUpperCase()}`, margin, ctx.currentY);
  ctx.currentY += 7;

  // Emergency Box
  const emergencyWarning = 
    "This guide is general patient education and does not replace personalised advice from Mr Shivakumar Shankar or your hospital treating team. " +
    "If you develop severe breathlessness, chest pain, collapse, severe bleeding, or another medical emergency, immediately call 999 or attend A&E. " +
    "For concerning postoperative symptoms such as fever, worsening wound redness, discharge, or new calf swelling/pain, contact the clinical team or NHS 111.";
  drawEmergencyNotice(ctx, emergencyWarning);

  // Section 1: Non-Operative Options
  drawSectionHeader(ctx, "1. Non-Operative Treatment Options Discussed", "Conservative measures to manage symptoms prior to considering surgery");
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);

  const analgesiaLines = doc.splitTextToSize(`• Analgesia & Medical Therapy: ${info.nonOperativeOptions.analgesia}`, contentWidth);
  doc.text(analgesiaLines, margin, ctx.currentY);
  ctx.currentY += analgesiaLines.length * 4.2 + 2;

  const activityLines = doc.splitTextToSize(`• Activity Modification: ${info.nonOperativeOptions.activityModification}`, contentWidth);
  doc.text(activityLines, margin, ctx.currentY);
  ctx.currentY += activityLines.length * 4.2 + 2;

  // Exercises
  doc.setFont("helvetica", "bold");
  doc.text("• Low-Impact Cardiovascular Exercises Discussed:", margin, ctx.currentY);
  ctx.currentY += 4.5;
  doc.setFont("helvetica", "normal");
  info.nonOperativeOptions.exercises.forEach((ex) => {
    const lines = doc.splitTextToSize(`    - ${ex}`, contentWidth - 8);
    doc.text(lines, margin + 4, ctx.currentY);
    ctx.currentY += lines.length * 4;
  });
  ctx.currentY += 2;

  // Supplements
  doc.setFont("helvetica", "bold");
  doc.text("• Nutritional Supplements Discussed (Useful in Some Patients):", margin, ctx.currentY);
  ctx.currentY += 4.5;
  doc.setFont("helvetica", "normal");
  info.nonOperativeOptions.supplements.forEach((sup) => {
    const lines = doc.splitTextToSize(`    - ${sup}`, contentWidth - 8);
    doc.text(lines, margin + 4, ctx.currentY);
    ctx.currentY += lines.length * 4;
  });
  ctx.currentY += 6;

  // Section 2: Operative Plan
  drawSectionHeader(ctx, "2. Operative Surgical Plan & Technology", info.operativePlan.summary);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  info.operativePlan.approachesAndTechnology.forEach((item) => {
    checkPageBreak(ctx, 6);
    const lines = doc.splitTextToSize(`• ${item}`, contentWidth);
    doc.text(lines, margin, ctx.currentY);
    ctx.currentY += lines.length * 4 + 1.5;
  });
  ctx.currentY += 4;

  // Section 3: Risks and Complications
  drawSectionHeader(ctx, "3. Surgical Risks & Complications Explained", "Full disclosure of potential surgical complications as discussed during your consultation");

  info.surgicalRisks.forEach((risk, idx) => {
    checkPageBreak(ctx, 24);
    
    // Risk container
    doc.setFillColor(BG_CARD[0], BG_CARD[1], BG_CARD[2]);
    doc.setDrawColor(BORDER_LIGHT[0], BORDER_LIGHT[1], BORDER_LIGHT[2]);
    doc.setLineWidth(0.3);

    // Title + Incidence
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
    doc.text(`${idx + 1}. ${risk.title}`, margin + 3, ctx.currentY + 4.5);

    if (risk.incidence) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(7.5);
      doc.setTextColor(GOLD_ACCENT[0], GOLD_ACCENT[1], GOLD_ACCENT[2]);
      doc.text(`[${risk.incidence}]`, ctx.pageWidth - margin - 3, ctx.currentY + 4.5, { align: "right" });
    }

    ctx.currentY += 7;

    // Description
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
    const descLines = doc.splitTextToSize(risk.description, contentWidth - 6);
    doc.text(descLines, margin + 3, ctx.currentY);
    ctx.currentY += descLines.length * 3.8 + 2;

    // Warning signs if present
    if (risk.warningSigns && risk.warningSigns.length > 0) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(RED_ALERT[0], RED_ALERT[1], RED_ALERT[2]);
      doc.text("Symptoms to report immediately:", margin + 3, ctx.currentY);
      ctx.currentY += 3.5;
      
      doc.setFont("helvetica", "normal");
      doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
      risk.warningSigns.forEach((sign) => {
        const signLines = doc.splitTextToSize(`  • ${sign}`, contentWidth - 10);
        doc.text(signLines, margin + 3, ctx.currentY);
        ctx.currentY += signLines.length * 3.5;
      });
      ctx.currentY += 1.5;
    }

    // Management
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
    doc.text("Clinical assessment & management:", margin + 3, ctx.currentY);
    ctx.currentY += 3.5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
    const mgmtLines = doc.splitTextToSize(risk.managementOrAssessment, contentWidth - 6);
    doc.text(mgmtLines, margin + 3, ctx.currentY);
    ctx.currentY += mgmtLines.length * 3.8 + 4;
  });

  // Section 4: Post-operative Red Flags
  drawSectionHeader(ctx, "4. Post-Operative Symptom Checklist & When to Call", "Summary guidance for immediate post-discharge monitoring");

  checkPageBreak(ctx, 25);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(RED_ALERT[0], RED_ALERT[1], RED_ALERT[2]);
  doc.text("EMERGENCY 999 SYMPTOMS:", margin, ctx.currentY);
  ctx.currentY += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  info.postoperativeSymptomsToReport.emergency999.forEach((item) => {
    const lines = doc.splitTextToSize(`• ${item}`, contentWidth);
    doc.text(lines, margin + 2, ctx.currentY);
    ctx.currentY += lines.length * 3.8;
  });
  ctx.currentY += 3;

  checkPageBreak(ctx, 25);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
  doc.text("URGENTLY CONTACT SURGEON / WARD TEAM:", margin, ctx.currentY);
  ctx.currentY += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  info.postoperativeSymptomsToReport.urgentContactTeam.forEach((item) => {
    const lines = doc.splitTextToSize(`• ${item}`, contentWidth);
    doc.text(lines, margin + 2, ctx.currentY);
    ctx.currentY += lines.length * 3.8;
  });
  ctx.currentY += 5;

  // Section 5: Recovery Timeline
  drawSectionHeader(ctx, "5. Expected Recovery & Activity Milestones");
  checkPageBreak(ctx, 30);
  const recItems = [
    `Hospital Stay: ${info.recoveryAndRehabilitation.hospitalStay}`,
    `Early Mobilisation: ${info.recoveryAndRehabilitation.mobilisation}`,
    `Return to Driving: ${info.recoveryAndRehabilitation.driving}`,
    `Return to Work: ${info.recoveryAndRehabilitation.work}`,
    `Clinical Follow-up: ${info.recoveryAndRehabilitation.followUp}`
  ];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  recItems.forEach((it) => {
    const lines = doc.splitTextToSize(`• ${it}`, contentWidth);
    doc.text(lines, margin, ctx.currentY);
    ctx.currentY += lines.length * 3.8 + 1.5;
  });

  // Finalize all page footers
  finalizeFooters(doc);

  // Save PDF
  doc.save(info.filename);
}

/**
 * Generates and downloads a Complication Leaflet PDF
 */
export function generateComplicationLeafletPdf(guide: ComplicationGuide) {
  const ctx = createPdfContext();
  const { doc, margin, contentWidth } = ctx;

  drawHeader(ctx, true);

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
  doc.text(guide.title, margin, ctx.currentY + 2);
  ctx.currentY += 7;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(GOLD_ACCENT[0], GOLD_ACCENT[1], GOLD_ACCENT[2]);
  doc.text(`PATIENT INFORMATION GUIDE &bull; LONDON & ESSEX HIP & KNEE SURGERY`, margin, ctx.currentY);
  ctx.currentY += 6;

  // Emergency notice
  drawEmergencyNotice(ctx, guide.emergencyNotice);

  // What is this problem?
  drawSectionHeader(ctx, "What is this problem?");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  const probLines = doc.splitTextToSize(guide.whatIsThisProblem, contentWidth);
  doc.text(probLines, margin, ctx.currentY);
  ctx.currentY += probLines.length * 4 + 4;

  // What symptoms should I look for?
  drawSectionHeader(ctx, "What symptoms should I look for?");
  guide.symptomsToLookFor.forEach((sym) => {
    checkPageBreak(ctx, 6);
    const lines = doc.splitTextToSize(`• ${sym}`, contentWidth - 4);
    doc.text(lines, margin + 2, ctx.currentY);
    ctx.currentY += lines.length * 4;
  });
  ctx.currentY += 4;

  // How is it assessed?
  drawSectionHeader(ctx, "How is it assessed?");
  guide.howIsItAssessed.forEach((ass) => {
    checkPageBreak(ctx, 6);
    const lines = doc.splitTextToSize(`• ${ass}`, contentWidth - 4);
    doc.text(lines, margin + 2, ctx.currentY);
    ctx.currentY += lines.length * 4;
  });
  ctx.currentY += 4;

  // How is it treated?
  drawSectionHeader(ctx, "How is it treated?");
  guide.howIsItTreated.forEach((tr) => {
    checkPageBreak(ctx, 6);
    const lines = doc.splitTextToSize(`• ${tr}`, contentWidth - 4);
    doc.text(lines, margin + 2, ctx.currentY);
    ctx.currentY += lines.length * 4;
  });
  ctx.currentY += 6;

  // Frequently Asked Questions
  if (guide.faqs && guide.faqs.length > 0) {
    drawSectionHeader(ctx, "Frequently Asked Questions");
    guide.faqs.forEach((faq) => {
      checkPageBreak(ctx, 16);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
      const qLines = doc.splitTextToSize(`Q: ${faq.question}`, contentWidth);
      doc.text(qLines, margin, ctx.currentY);
      ctx.currentY += qLines.length * 4 + 1.5;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
      const aLines = doc.splitTextToSize(faq.answer, contentWidth);
      doc.text(aLines, margin, ctx.currentY);
      ctx.currentY += aLines.length * 3.8 + 4;
    });
  }

  // Related information notice
  checkPageBreak(ctx, 15);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7.5);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  const disclaimer = "This guide is for education and does not replace an individual consultation or your own hospital discharge instructions. Your surgeon's advice should take priority where it differs.";
  const disLines = doc.splitTextToSize(disclaimer, contentWidth);
  doc.text(disLines, margin, ctx.currentY);

  finalizeFooters(doc);
  doc.save(guide.filename);
}

/**
 * Generates and downloads a Rehabilitation Protocol PDF
 */
export function generateProtocolPdf(protocol: Protocol) {
  const ctx = createPdfContext();
  const { doc, margin, contentWidth } = ctx;

  drawHeader(ctx, true);

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
  doc.text(protocol.title, margin, ctx.currentY + 2);
  ctx.currentY += 7;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(GOLD_ACCENT[0], GOLD_ACCENT[1], GOLD_ACCENT[2]);
  doc.text(`REHABILITATION & PHYSIOTHERAPY PROTOCOL &bull; TIMELINE: ${protocol.timeline.toUpperCase()}`, margin, ctx.currentY);
  ctx.currentY += 7;

  // Emergency advice
  const notice = "Early progressive mobilisation is essential for optimal joint longevity. If you experience severe escalating pain, inability to bear weight, wound redness/discharge, or new calf swelling, contact Mr Shankar's team or attend hospital.";
  drawEmergencyNotice(ctx, notice);

  // Description
  drawSectionHeader(ctx, "Protocol Overview & Rehabilitation Objectives");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  const descLines = doc.splitTextToSize(protocol.description, contentWidth);
  doc.text(descLines, margin, ctx.currentY);
  ctx.currentY += descLines.length * 4 + 6;

  // Key Milestones
  drawSectionHeader(ctx, "Key Recovery Milestones & Progression Targets");
  protocol.keyMilestones.forEach((ms, idx) => {
    checkPageBreak(ctx, 12);
    
    // Milestone box
    doc.setFillColor(BG_CARD[0], BG_CARD[1], BG_CARD[2]);
    doc.setDrawColor(BORDER_LIGHT[0], BORDER_LIGHT[1], BORDER_LIGHT[2]);
    doc.setLineWidth(0.3);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
    doc.text(`Milestone ${idx + 1}:`, margin + 3, ctx.currentY + 4);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
    const msLines = doc.splitTextToSize(ms, contentWidth - 28);
    doc.text(msLines, margin + 25, ctx.currentY + 4);

    ctx.currentY += Math.max(msLines.length * 4 + 4, 8);
  });
  ctx.currentY += 4;

  // Clinical Support Contact
  drawSectionHeader(ctx, "Physiotherapy Coordination & Follow-up");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  const contactText = [
    `Lead Consultant: ${SURGEON_NAME} (${SURGEON_ROLE})`,
    "Clinical PA & Practice Manager: Sarah | 01277 554 132 | 07936 601 547",
    "Clinical Email: contact@londonarthroplasty.co.uk",
    "Hospital Inpatient Physiotherapy Departments: Spire Hartswood (Brentwood) & Nuffield Health Brentwood Hospital"
  ];
  contactText.forEach((c) => {
    doc.text(`• ${c}`, margin, ctx.currentY);
    ctx.currentY += 4;
  });

  finalizeFooters(doc);
  doc.save(protocol.filename);
}
