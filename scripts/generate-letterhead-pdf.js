import fs from 'fs';
import { jsPDF } from 'jspdf';

export function generateLetterheadPdf(outputPath = 'public/Mr_Shivakumar_Shankar_Patient_Letterhead.pdf') {
  const logoBuffer = fs.readFileSync('public/logo.png');
  const LOGO_DATA_URI = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;

  const PRIMARY_NAVY = [27, 73, 101]; // #1B4965
  const TEXT_DARK = [30, 41, 59]; // #1E293B
  const TEXT_MUTED = [100, 116, 139]; // #64748B

  function drawLetterheadHeader() {
    const headerY = 12;

    // 1. Left: Brand Logo
    try {
      if (LOGO_DATA_URI) {
        doc.addImage(LOGO_DATA_URI, 'PNG', margin, headerY, 40, 12.8);
      }
    } catch (e) {
      console.warn('Could not draw logo in PDF:', e);
    }

    // 2. Centre: Surgeon Name & Affiliations
    const centreX = margin + 44;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12.5);
    doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
    doc.text('Mr Shivakumar Shankar', centreX, headerY + 4);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
    doc.text('Consultant Robotic Hip and Knee Surgeon', centreX, headerY + 8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
    doc.text("Spire Hartswood Hospital • Nuffield Health Brentwood Hospital • Queen's Hospital", centreX, headerY + 11.5);

    // 3. Right: Contact details
    const rightX = pageWidth - margin;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.8);
    doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
    doc.text('MOBILE:', rightX - 22, headerY + 3.5, { align: 'right' });
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
    doc.text('07587 765888', rightX, headerY + 3.5, { align: 'right' });

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
    doc.text('LANDLINE:', rightX - 22, headerY + 6.8, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
    doc.text('020 3523 0621', rightX, headerY + 6.8, { align: 'right' });

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
    doc.text('EMAIL:', rightX - 44, headerY + 10.1, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
    doc.text('hip.knee_specialist@yahoo.com', rightX, headerY + 10.1, { align: 'right' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.2);
    doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
    doc.text('www.shivakumarshankar.co.uk', rightX, headerY + 13.5, { align: 'right' });

    // Subtle horizontal divider line
    const lineY = headerY + 16;
    doc.setDrawColor(203, 213, 225); // #CBD5E1
    doc.setLineWidth(0.4);
    doc.line(margin, lineY, pageWidth - margin, lineY);

    return lineY + 8;
  }

  function drawLetterheadFooter() {
    const footerY = pageHeight - 12;
    doc.setDrawColor(226, 232, 240); // #E2E8F0
    doc.setLineWidth(0.3);
    doc.line(margin, footerY, pageWidth - margin, footerY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
    doc.text('Mr Shivakumar Shankar • Consultant Robotic Hip and Knee Surgeon', margin, footerY + 5);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
    doc.text('www.shivakumarshankar.co.uk', pageWidth - margin, footerY + 5, { align: 'right' });
  }

  let currentY = drawLetterheadHeader();

  // Patient details block (clean lines for handwriting or manual typing)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
  doc.text('Date:', margin, currentY);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('______________________', margin + 14, currentY);
  currentY += 6;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
  doc.text('Patient Name:', margin, currentY);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('____________________________________________________', margin + 28, currentY);
  currentY += 6;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
  doc.text('DOB:', margin, currentY);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('______________________', margin + 14, currentY);
  currentY += 9;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  doc.text('Dear ______________________,', margin, currentY);
  currentY += 10;

  // Sign-off at bottom
  const signoffY = pageHeight - 55;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(TEXT_DARK[0], TEXT_DARK[1], TEXT_DARK[2]);
  doc.text('Yours sincerely,', margin, signoffY);

  // Space for signature (20mm)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(PRIMARY_NAVY[0], PRIMARY_NAVY[1], PRIMARY_NAVY[2]);
  doc.text('Mr Shivakumar Shankar', margin, signoffY + 22);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(TEXT_MUTED[0], TEXT_MUTED[1], TEXT_MUTED[2]);
  doc.text('Consultant Robotic Hip and Knee Surgeon', margin, signoffY + 26.5);

  drawLetterheadFooter();

  const arrayBuffer = doc.output('arraybuffer');
  fs.writeFileSync(outputPath, Buffer.from(arrayBuffer));
  console.log(`Saved PDF letterhead document to: ${outputPath}`);
}

if (process.argv[1] && process.argv[1].endsWith('generate-letterhead-pdf.js')) {
  generateLetterheadPdf();
}
