import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  Calendar,
  Building2,
  GraduationCap,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, ACHIEVEMENTS, TECHNICAL_SKILLS } from '../data/cvData';

interface CVViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVViewerModal: React.FC<CVViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[94vh] flex flex-col shadow-2xl border border-slate-200 relative overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header Actions Bar (hidden in print) */}
        <div className="p-4 sm:px-6 border-b border-slate-200 flex items-center justify-between bg-slate-50 no-print">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-900 text-white flex items-center justify-center font-bold text-xs">
              CV
            </div>
            <div>
              <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                Curículum Vítae Ejecutivo – Ing. Zaira Salvador Amaya
              </h4>
              <p className="text-xs text-slate-500">
                Documento oficial actualizado · CIP N.º {PERSONAL_INFO.cip}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-900 hover:bg-sky-800 rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-sky-200" />
              <span>Imprimir / Guardar PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
              aria-label="Cerrar visor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container (Scrollable on screen, clean on print) */}
        <div className="flex-1 overflow-auto p-6 sm:p-10 bg-slate-100/50 print:p-0 print:bg-white text-left">
          
          <div className="bg-white max-w-3xl mx-auto p-8 sm:p-12 rounded-xl shadow-xs border border-slate-200/90 print:shadow-none print:border-none print:p-0">
            
            {/* CV Header */}
            <div className="border-b-2 border-slate-900 pb-6 mb-6">
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                {PERSONAL_INFO.fullName}
              </h1>
              <div className="font-display font-bold text-base text-sky-900 mt-1 uppercase tracking-wide">
                {PERSONAL_INFO.title}
              </div>
              <div className="text-xs font-semibold text-emerald-800 mt-0.5">
                {PERSONAL_INFO.subtitle}
              </div>

              {/* Contact meta strip */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-4 pt-3 border-t border-slate-100">
                <span className="font-semibold text-slate-900">CIP: {PERSONAL_INFO.cip} ({PERSONAL_INFO.cipStatus})</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>{PERSONAL_INFO.email}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mb-6">
              <h2 className="font-display font-bold text-xs uppercase tracking-wider text-sky-900 border-b border-sky-900/30 pb-1 mb-2">
                Perfil Profesional
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {PERSONAL_INFO.summary} {PERSONAL_INFO.extendedBio}
              </p>
            </div>

            {/* Highlights / Acreditación INACAL */}
            <div className="mb-6 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-display font-bold text-xs text-sky-900 uppercase tracking-wide">
                  Logro Clave: Acreditación ante INACAL (NTP-ISO/IEC 17025:2017)
                </h3>
              </div>
              <p className="text-xs text-slate-600 mb-2">
                Validación metrológica y acreditación oficial de 5 métodos de ensayo: pH en suelos, pH en aguas, Conductividad en suelos, Conductividad en aguas y Materia orgánica.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h2 className="font-display font-bold text-xs uppercase tracking-wider text-sky-900 border-b border-sky-900/30 pb-1 mb-4">
                Experiencia Profesional (+9 Años)
              </h2>

              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="text-left">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                      <div>
                        <span className="font-bold text-xs sm:text-sm text-slate-900">
                          {exp.role}
                        </span>
                        <span className="text-xs text-slate-600"> — {exp.organization}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    {exp.department && (
                      <div className="text-[11px] text-slate-500 italic mb-1.5">
                        {exp.department}
                      </div>
                    )}
                    <ul className="space-y-1 pl-4 list-disc text-[11px] text-slate-600 leading-relaxed">
                      {exp.responsibilities.slice(0, 4).map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-6 page-break">
              <h2 className="font-display font-bold text-xs uppercase tracking-wider text-sky-900 border-b border-sky-900/30 pb-1 mb-3">
                Formación Académica
              </h2>
              <div className="space-y-3">
                {EDUCATION.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline text-xs font-bold text-slate-900">
                      <span>{edu.degree}</span>
                      <span className="text-[11px] font-medium text-slate-500">{edu.period}</span>
                    </div>
                    <div className="text-xs text-sky-900 font-semibold">{edu.institution}</div>
                    <div className="text-[11px] text-slate-600">{edu.details}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Certifications Summary */}
            <div className="mb-6">
              <h2 className="font-display font-bold text-xs uppercase tracking-wider text-sky-900 border-b border-sky-900/30 pb-1 mb-3">
                Certificaciones y Diplomados Destacados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700">
                {CERTIFICATIONS.slice(0, 10).map((c) => (
                  <div key={c.id} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>{c.name}</strong> {c.hours ? `(${c.hours}h)` : ''} · {c.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills & Languages */}
            <div>
              <h2 className="font-display font-bold text-xs uppercase tracking-wider text-sky-900 border-b border-sky-900/30 pb-1 mb-3">
                Competencias Técnicas e Idiomas
              </h2>
              <div className="text-xs text-slate-700 space-y-1.5">
                <div>
                  <strong className="text-slate-900">Análisis Instrumental:</strong> ICP-OES, ICP-MS, Absorción Atómica (AAS), Ensayos al Fuego, Digestiones multielementales.
                </div>
                <div>
                  <strong className="text-slate-900">Calidad:</strong> NTP-ISO/IEC 17025:2017, QA/QC, Validación de Métodos, Incertidumbre de Medición, BPL.
                </div>
                <div>
                  <strong className="text-slate-900">Gestión Ambiental y Minera:</strong> IGAFOM, DIA, Planes de Cierre, Monitoreo Ambiental (ECA/LMP), Fiscalización.
                </div>
                <div>
                  <strong className="text-slate-900">Herramientas Digitales:</strong> Excel Avanzado, Power BI, SAP Business One, Microsoft Office.
                </div>
                <div>
                  <strong className="text-slate-900">Idiomas:</strong> Español (Nativo) · Portugués (Avanzado – Certificación Celpe-Bras) · Inglés (Intermedio).
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 sm:px-6 border-t border-slate-200 flex items-center justify-between bg-white no-print">
          <span className="text-xs text-slate-500">
            Formato estándar compatible con normas de selección institucional.
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-900 hover:bg-sky-800 rounded-lg shadow-2xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-sky-300" />
              <span>Imprimir / Descargar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
