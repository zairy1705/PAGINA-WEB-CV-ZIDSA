import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Eye, 
  Download, 
  ExternalLink, 
  Award,
  AlertCircle
} from 'lucide-react';
import { PUBLIC_DOCUMENTS, PERSONAL_INFO } from '../data/cvData';

export const Documents: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  return (
    <section id="documentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-900 tracking-wider uppercase mb-2">
            <span>Acreditación Institucional</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-medium">Credenciales Verificadas</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            DOCUMENTACIÓN PROFESIONAL
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Resumen de documentos oficiales, títulos y certificados habilitantes. Conforme a las buenas prácticas de protección de datos personales, los documentos de carácter sensible se presentan en formato de credencial pública verificada.
          </p>
        </div>

        {/* Sensitive data protection note banner */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 mb-10 flex items-start gap-3.5 text-xs text-slate-600 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-800 font-semibold block">Política de Privacidad y Transparencia:</strong>
            Los documentos emitidos protegen datos sensibles (DNI, RUC, domicilios particulares y datos bancarios). Las constancias completas de trabajo, foliados y expedientes técnicos están disponibles para validación directa mediante solicitud institucional.
          </div>
        </div>

        {/* Public Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PUBLIC_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-xs hover:border-sky-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between text-left"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider">{doc.type}</span>
                  <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {doc.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base text-slate-900 leading-snug mb-2">
                  {doc.title}
                </h3>

                {/* Institution */}
                <div className="text-xs font-medium text-sky-900 mb-2">
                  {doc.institution}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {doc.description}
                </p>
              </div>

              {/* Card Footer: Verified Status */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Acreditación Oficial</span>
                </div>

                <span className="text-slate-400 font-mono text-[11px]">
                  {doc.issueDate}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional verification notice */}
        <div className="mt-12 text-center p-6 bg-slate-50/70 rounded-xl border border-slate-200/70 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600 mb-3">
            ¿Requiere copia legalizada de constancias de trabajo, certificados de auditoría o expedientes de acreditación INACAL?
          </p>
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Solicitud%20de%20Dossier%20Documentario%20-%20Ing.%20Zaira%20Salvador`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-sky-900 bg-white hover:bg-sky-50 rounded-lg border border-sky-300 shadow-2xs transition-colors"
          >
            <span>SOLICITAR DOSSIER PROFESIONAL COMPLETO</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
