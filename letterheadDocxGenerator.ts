import { 
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
  Header, Footer, ImageRun, AlignmentType, BorderStyle, WidthType,
  convertMillimetersToTwip
} from 'docx';
import { LOGO_DATA_URI } from './logoDataUri';

export interface LetterheadContent {
  date?: string;
  patientName?: string;
  dob?: string;
  salutation?: string;
  body?: string;
  signoff?: string;
  surgeonName?: string;
  surgeonTitle?: string;
}

/**
 * Converts a data URI (base64) to Uint8Array for docx ImageRun in browser or node
 */
function dataUriToUint8Array(dataUri: string): Uint8Array {
  const base64 = dataUri.split(',')[1] || dataUri;
  if (typeof atob === 'function') {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  } else {
    return Buffer.from(base64, 'base64');
  }
}

/**
 * Builds the official Microsoft Word (.docx) document with running headers/footers.
 */
export function buildLetterheadDocx(data: LetterheadContent = {}): Document {
  const logoBytes = dataUriToUint8Array(LOGO_DATA_URI);

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

  // Header Table (Left: Logo, Centre: Name & Affiliations, Right: Contact)
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
          // Left: Logo
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
                    data: logoBytes,
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

          // Centre: Surgeon Title & Affiliations
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
                spacing: { after: 30, before: 10 },
                children: [
                  new TextRun({
                    text: data.surgeonName || 'Mr Shivakumar Shankar',
                    font: 'Calibri',
                    bold: true,
                    size: 26, // 13pt
                    color: '1B4965',
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { after: 50 },
                children: [
                  new TextRun({
                    text: data.surgeonTitle || 'Consultant Robotic Hip and Knee Surgeon',
                    font: 'Calibri',
                    bold: true,
                    size: 18, // 9pt
                    color: '2A5F82',
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { after: 60 },
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
                spacing: { line: 240, after: 15 },
                children: [
                  new TextRun({
                    text: 'MOBILE: ',
                    font: 'Calibri',
                    bold: true,
                    size: 14,
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
                spacing: { line: 240, after: 15 },
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
                spacing: { line: 240, after: 20 },
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
                spacing: { line: 240, after: 60 },
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

  // Footer Table
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
                    size: 15,
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

  const bodyParagraphs: Paragraph[] = [];

  // 1. Patient Fields
  bodyParagraphs.push(
    new Paragraph({
      spacing: { before: 180, after: 100 },
      children: [
        new TextRun({
          text: 'Date: ',
          font: 'Calibri',
          bold: true,
          size: 22,
          color: '334155',
        }),
        new TextRun({
          text: data.date || '______________________',
          font: 'Calibri',
          size: 22,
          color: data.date ? '0F172A' : '94A3B8',
        }),
      ],
    }),
    new Paragraph({
      spacing: { before: 60, after: 100 },
      children: [
        new TextRun({
          text: 'Patient Name: ',
          font: 'Calibri',
          bold: true,
          size: 22,
          color: '334155',
        }),
        new TextRun({
          text: data.patientName || '____________________________________________________',
          font: 'Calibri',
          size: 22,
          color: data.patientName ? '0F172A' : '94A3B8',
        }),
      ],
    }),
    new Paragraph({
      spacing: { before: 60, after: 160 },
      children: [
        new TextRun({
          text: 'DOB: ',
          font: 'Calibri',
          bold: true,
          size: 22,
          color: '334155',
        }),
        new TextRun({
          text: data.dob || '______________________',
          font: 'Calibri',
          size: 22,
          color: data.dob ? '0F172A' : '94A3B8',
        }),
      ],
    }),
    new Paragraph({
      spacing: { before: 120, after: 220 },
      children: [
        new TextRun({
          text: 'Dear ',
          font: 'Calibri',
          size: 22,
          color: '1E293B',
        }),
        new TextRun({
          text: data.salutation || '______________________,',
          font: 'Calibri',
          size: 22,
          color: data.salutation ? '0F172A' : '94A3B8',
        }),
      ],
    })
  );

  // 2. Free Editable Body
  if (data.body && data.body.trim()) {
    const rawParagraphs = data.body.split('\n\n');
    rawParagraphs.forEach((p) => {
      const trimmed = p.trim();
      if (!trimmed) {
        bodyParagraphs.push(new Paragraph({ spacing: { before: 60, after: 100 } }));
      } else {
        bodyParagraphs.push(
          new Paragraph({
            spacing: { before: 80, after: 140, line: 276 },
            children: [
              new TextRun({
                text: trimmed,
                font: 'Calibri',
                size: 22,
                color: '1E293B',
              }),
            ],
          })
        );
      }
    });
  } else {
    // Blank editable lines
    for (let i = 0; i < 7; i++) {
      bodyParagraphs.push(
        new Paragraph({
          spacing: { before: 100, after: 160 },
          children: [new TextRun({ text: '', size: 22 })],
        })
      );
    }
  }

  // 3. Sign-off block
  bodyParagraphs.push(
    new Paragraph({
      spacing: { before: 320, after: 120 },
      children: [
        new TextRun({
          text: data.signoff || 'Yours sincerely,',
          font: 'Calibri',
          size: 22,
          color: '1E293B',
        }),
      ],
    }),
    // Blank signature space
    new Paragraph({ spacing: { before: 100, after: 100 }, children: [new TextRun({ text: '', size: 22 })] }),
    new Paragraph({ spacing: { before: 100, after: 100 }, children: [new TextRun({ text: '', size: 22 })] }),
    new Paragraph({ spacing: { before: 100, after: 100 }, children: [new TextRun({ text: '', size: 22 })] }),
    // Name and role
    new Paragraph({
      spacing: { before: 60, after: 30 },
      children: [
        new TextRun({
          text: data.surgeonName || 'Mr Shivakumar Shankar',
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
          text: data.surgeonTitle || 'Consultant Robotic Hip and Knee Surgeon',
          font: 'Calibri',
          size: 20,
          color: '475569',
        }),
      ],
    })
  );

  return new Document({
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
        children: bodyParagraphs,
      },
    ],
  });
}

/**
 * Browser-friendly download of editable .docx file
 */
export async function downloadLetterheadDocx(
  data: LetterheadContent = {},
  filename: string = 'Mr_Shivakumar_Shankar_Patient_Letterhead.docx'
): Promise<void> {
  const doc = buildLetterheadDocx(data);
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
