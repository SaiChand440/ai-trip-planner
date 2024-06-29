import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs; // Set fonts for pdfmake


export const generatePdf = (jsonData, dates) => {

    console.log('jsoin data', jsonData)

    const docDefinition = {
        content: [
          {
            text: jsonData?.title,
            fontSize: 24,
            bold: true,
            alignment: 'center',
          },
          {
            text: `${dates.from} - ${dates.to}`,
          },
          // You can add images, tables, or other elements here
        ],
      };

    pdfMake.createPdf(docDefinition).download(); // Triggers download
  };
