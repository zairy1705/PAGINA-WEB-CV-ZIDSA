import React from 'react';
import { FileDown, Eye, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';

interface CVDownloadProps {
  onOpenCvModal: () => void;
}

export const CVDownload: React.FC<CVDownloadProps> = ({ onOpenCvModal }) => {
  const handleDirectPrintOrDownload = () => {
    onOpenCvModal();
  };

  return (
    <section id="cv-descarga" className="py-16 bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 text-white relative overflow-hidden">
      {/* Subtle background graphics */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          
          {/* Left Info */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-widest mb-2">
              <FileText className="w-4 h-4 text-sky-400" />
              <span>DESCARGA MI CV</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-3">
              Consulta mi trayectoria profesional completa.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              Accede a la versión documentada y actualizada con el desglose cronológico de funciones, acreditaciones ante INACAL, métodos instrumentales ICP/AAS y habilitación en el Colegio de Ingenieros del Perú.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-sky-200">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                CIP N.º {PERSONAL_INFO.cip} Colegiada
              </span>
              <span aria-hidden="true" className="text-sky-600">·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Habilitación Vigente
              </span>
              <span aria-hidden="true" className="text-sky-600">·</span>
              <span>Formato Oficial A4</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              onClick={handleDirectPrintOrDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-900 bg-white hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all active:scale-98 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-sky-800" />
              <span>DESCARGAR CV PDF</span>
            </button>

            <button
              onClick={onOpenCvModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-sky-900/60 hover:bg-sky-800/80 border border-sky-400/40 shadow-sm transition-all active:scale-98 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-sky-300" />
              <span>VER CV</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
