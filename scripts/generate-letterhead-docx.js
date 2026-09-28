import fs from 'fs';
import path from 'path';
import { 
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
  Header, Footer, ImageRun, AlignmentType, BorderStyle, WidthType, HeightRule,
  convertInchesToTwip, convertMillimetersToTwip
} from 'docx';

export async function generateLetterheadDocx(outputPath = 'public/Mr_Shivakumar_Shankar_Patient_Letterhead.docx') {
  const logoBuffer = fs.readFileSync('public/logo.png');

  const borderNone = {
    style: BorderStyle.NONE,
    size: 0,
    color: 'FFFFFF',
  };

  const borderBottomDivider = {
    style: BorderStyle.SINGLE,
    size: 8, // 1pt
    color: '1B4965',
  };

  const borderTopDivider = {
    style: BorderStyle.SINGLE,
    size: 4,
    color: 'CBD5E1',
  };

  const headerTable = new Table({
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
    borders: {
      top: borderNone,
      left: borderNone,
      right: borderNone,
      bottom: borderBottomDivider,
      insideHorizontal: borderNone,
      insideVertical: borderNone,
    },
    rows: [
      new TableRow({
        children: [
          // Left: Brand Logo
          new TableCell({
            width: {
              size: 28,
              type: WidthType.PERCENTAGE,
            },
            borders: {
              top: borderNone,
              left: borderNone,
              right: borderNone,
              bottom: borderNone,
            },
            children: [
              new Paragraph({
                children: [
                  new ImageRun({
                    data: logoBuffer,
                    transformation: {
                      width: 145,
                      height: 46.5,
                    },
                    type: 'png',
                  }),
                ],
              }),
            ],
          }),

          // Centre: Surgeon Title & Hospital Affiliations
          new TableCell({
            width: {
              size: 44,
              type: WidthType.PERCENTAGE,
            },
            borders: {
              top: borderNone,
              left: borderNone,
              right: borderNone,
              bottom: borderNone,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { after: 40, before: 20 },
                children: [
                  new TextRun({
                    text: 'Mr Shivakumar Shankar',
                    font: 'Calibri',
                    bold: true,
                    size: 26, // 13pt
                    color: '1B4965',
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { after: 60 },
                children: [
                  new TextRun({
                    text: 'Consultant Robotic Hip and Knee Surgeon',
                    font: 'Calibri',
                    bold: true,
                    size: 18, // 9pt
                    color: '2A5F82',
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { after: 80 },
                children: [
                  new TextRun({
                    text: "Spire Hartswood Hospital  •  Nuffield Health Brentwood Hospital  •  Queen's Hospital",
                    font: 'Calibri',
                    size: 13, // 6.5pt
                    color: '64748B',
                  }),
                ],
              }),
            ],
          }),

          // Right: Contact Details & Website
          new TableCell({
            width: {
              size: 28,
              type: WidthType.PERCENTAGE,
            },
            borders: {
              top: borderNone,
              left: borderNone,
              right: borderNone,
              bottom: borderNone,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing: { line: 240, after: 20 },
                children: [
                  new TextRun({
                    text: 'MOBILE: ',
                    font: 'Calibri',
                    bold: true,
                    size: 14, // 7pt
                    color: '475569',
                  }),
                  new TextRun({
                    text: '07587 765888',
                    font: 'Calibri',
                    bold: true,
                    size: 14,
                    color: '0F172A',
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing: { line: 240, after: 20 },
                children: [
                  new TextRun({
                    text: 'LANDLINE: ',
                    font: 'Calibri',
                    bold: true,
                    size: 14,
                    color: '475569',
                  }),
                  new TextRun({
                    text: '020 3523 0621',
                    font: 'Calibri',
                    size: 14,
                    color: '1E293B',
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing: { line: 240, after: 30 },
                children: [
                  new TextRun({
                    text: 'EMAIL: ',
                    font: 'Calibri',
                    bold: true,
                    size: 14,
                    color: '475569',
                  }),
                  new TextRun({
                    text: 'hip.knee_specialist@yahoo.com',
                    font: 'Calibri',
                    size: 13,
                    color: '1B4965',
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing: { line: 240, after: 80 },
                children: [
                  new TextRun({
                    text: 'www.shivakumarshankar.co.uk',
                    font: 'Calibri',
                    bold: true,
                    size: 14,
                    color: '1B4965',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  const footerTable = new Table({
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
    borders: {
      top: borderTopDivider,
      left: borderNone,
      right: borderNone,
      bottom: borderNone,
      insideHorizontal: borderNone,
      insideVertical: borderNone,
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: {
              size: 60,
              type: WidthType.PERCENTAGE,
            },
            borders: {
              top: borderNone,
              left: borderNone,
              right: borderNone,
              bottom: borderNone,
            },
            children: [
              new Paragraph({
                spacing: { before: 80 },
                children: [
                  new TextRun({
                    text: 'Mr Shivakumar Shankar  •  Consultant Robotic Hip and Knee Surgeon',
                    font: 'Calibri',
                    size: 15, // 7.5pt
                    color: '64748B',
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: {
              size: 40,
              type: WidthType.PERCENTAGE,
            },
            borders: {
              top: borderNone,
              left: borderNone,
              right: borderNone,
              bottom: borderNone,
            },
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing: { before: 80 },
                children: [
                  new TextRun({
                    text: 'www.shivakumarshankar.co.uk',
                    font: 'Calibri',
                    size: 15,
                    color: '1B4965',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: {
              width: convertMillimetersToTwip(210), // A4
              height: convertMillimetersToTwip(297),
            },
            margin: {
              top: convertMillimetersToTwip(14),
              bottom: convertMillimetersToTwip(18),
              left: convertMillimetersToTwip(18),
              right: convertMillimetersToTwip(18),
              header: convertMillimetersToTwip(10),
              footer: convertMillimetersToTwip(10),
            },
          },
        },
        headers: {
          default: new Header({
            children: [headerTable],
          }),
        },
        footers: {
          default: new Footer({
            children: [footerTable],
          }),
        },
        children: [
          // Editable Patient Details Block
          new Paragraph({
            spacing: { before: 180, after: 120 },
            children: [
              new TextRun({
                text: 'Date: ',
                font: 'Calibri',
                bold: true,
                size: 22, // 11pt
                color: '334155',
              }),
              new TextRun({
                text: '______________________',
                font: 'Calibri',
                size: 22,
                color: '94A3B8',
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 80, after: 120 },
            children: [
              new TextRun({
                text: 'Patient Name: ',
                font: 'Calibri',
                bold: true,
                size: 22,
                color: '334155',
              }),
              new TextRun({
                text: '____________________________________________________',
                font: 'Calibri',
                size: 22,
                color: '94A3B8',
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 80, after: 180 },
            children: [
              new TextRun({
                text: 'DOB: ',
                font: 'Calibri',
                bold: true,
                size: 22,
                color: '334155',
              }),
              new TextRun({
                text: '______________________',
                font: 'Calibri',
                size: 22,
                color: '94A3B8',
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 140, after: 260 },
            children: [
              new TextRun({
                text: 'Dear ',
                font: 'Calibri',
                size: 22,
                color: '1E293B',
              }),
              new TextRun({
                text: '______________________,',
                font: 'Calibri',
                size: 22,
                color: '94A3B8',
              }),
            ],
          }),

          // Generous Free Space for Patient Letters (User can type or paste freely)
          new Paragraph({
            spacing: { before: 100, after: 200 },
            children: [
              new TextRun({
                text: '',
                font: 'Calibri',
                size: 22,
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 100, after: 200 },
            children: [
              new TextRun({
                text: '',
                font: 'Calibri',
                size: 22,
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 100, after: 200 },
            children: [
              new TextRun({
                text: '',
                font: 'Calibri',
                size: 22,
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 100, after: 200 },
            children: [
              new TextRun({
                text: '',
                font: 'Calibri',
                size: 22,
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 100, after: 200 },
            children: [
              new TextRun({
                text: '',
                font: 'Calibri',
                size: 22,
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 100, after: 200 },
            children: [
              new TextRun({
                text: '',
                font: 'Calibri',
                size: 22,
              }),
            ],
          }),

          // Editable Sign-off Block
          new Paragraph({
            spacing: { before: 360, after: 120 },
            children: [
              new TextRun({
                text: 'Yours sincerely,',
                font: 'Calibri',
                size: 22,
                color: '1E293B',
              }),
            ],
          }),

          // Blank signature space (approx 4-5 blank lines for physical or digital signature)
          new Paragraph({
            spacing: { before: 120, after: 120 },
            children: [new TextRun({ text: '', size: 22 })],
          }),
          new Paragraph({
            spacing: { before: 120, after: 120 },
            children: [new TextRun({ text: '', size: 22 })],
          }),
          new Paragraph({
            spacing: { before: 120, after: 120 },
            children: [new TextRun({ text: '', size: 22 })],
          }),

          // Surgeon Name and Role
          new Paragraph({
            spacing: { before: 60, after: 40 },
            children: [
              new TextRun({
                text: 'Mr Shivakumar Shankar',
                font: 'Calibri',
                bold: true,
                size: 22,
                color: '1B4965',
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 20, after: 80 },
            children: [
              new TextRun({
                text: 'Consultant Robotic Hip and Knee Surgeon',
                font: 'Calibri',
                size: 20,
                color: '475569',
              }),
            ],
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Saved Word letterhead document to: ${outputPath} (${buffer.length} bytes)`);
  return buffer;
}

// If run directly via node
if (process.argv[1] && process.argv[1].endsWith('generate-letterhead-docx.js')) {
  generateLetterheadDocx();
}
