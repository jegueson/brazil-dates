import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Printer, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrazilianHoliday } from "@/data/brazilian-holidays";

interface PrintCalendarProps {
  currentDate: Date;
  holidays: BrazilianHoliday[];
  view?: 'month' | 'year';
}

export function PrintCalendar({ currentDate, holidays, view = 'month' }: PrintCalendarProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      // Create a hidden element with calendar content
      const printElement = document.createElement('div');
      printElement.style.position = 'absolute';
      printElement.style.left = '-9999px';
      printElement.style.width = '794px'; // A4 width in pixels at 96 DPI
      printElement.style.backgroundColor = 'white';
      printElement.style.padding = '40px';
      printElement.style.fontFamily = 'Arial, sans-serif';
      
      // Create calendar HTML
      const monthYear = format(currentDate, 'MMMM yyyy', { locale: ptBR });
      const title = view === 'year' 
        ? `Calendário de Feriados - ${format(currentDate, 'yyyy')}` 
        : `Calendário de Feriados - ${monthYear}`;
      
      printElement.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2563eb; font-size: 28px; margin: 0; text-transform: capitalize;">
            ${title}
          </h1>
          <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 14px;">
            Feriados Brasileiros
          </p>
        </div>
        
        <div style="margin-bottom: 30px;">
          ${holidays.map(holiday => `
            <div style="margin-bottom: 20px; padding: 15px; border-left: 4px solid #2563eb; background-color: #f8fafc;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <h3 style="margin: 0; color: #1e293b; font-size: 18px;">${holiday.name}</h3>
                <span style="color: #059669; font-weight: bold; font-size: 14px;">
                  ${format(new Date(holiday.date), 'dd/MM/yyyy')}
                </span>
              </div>
              <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.5;">
                ${holiday.description}
              </p>
              ${holiday.traditions && holiday.traditions.length > 0 ? `
                <div style="margin-top: 10px;">
                  <strong style="color: #1e293b; font-size: 12px;">Tradições:</strong>
                  <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #64748b; font-size: 12px;">
                    ${holiday.traditions.slice(0, 3).map(tradition => `<li>${tradition}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
        
        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            Gerado em ${format(new Date(), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
          </p>
          <p style="color: #9ca3af; font-size: 12px; margin: 5px 0 0 0;">
            www.feriados-brasileiros.com.br
          </p>
        </div>
      `;
      
      document.body.appendChild(printElement);
      
      // Generate canvas from HTML
      const canvas = await html2canvas(printElement, {
        scale: 2,
        useCORS: true,
        allowTaint: false
      });
      
      // Remove the temporary element
      document.body.removeChild(printElement);
      
      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Generate filename
      const filename = view === 'year' 
        ? `calendario-feriados-${format(currentDate, 'yyyy')}.pdf`
        : `calendario-feriados-${format(currentDate, 'MM-yyyy')}.pdf`;
      
      pdf.save(filename);
      
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={generatePDF}
        disabled={isGenerating}
      >
        <Download className="w-4 h-4 mr-2" />
        {isGenerating ? 'Gerando...' : 'PDF'}
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={handlePrint}
      >
        <Printer className="w-4 h-4 mr-2" />
        Imprimir
      </Button>
    </div>
  );
}