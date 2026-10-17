import React, { useState } from 'react';
import { 
  Award, 
  Clock, 
  Calendar, 
  ExternalLink, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ShieldCheck, 
  FileCheck,
  Building,
  CheckCircle2,
  Printer
} from 'lucide-react';
import { CERTIFICATIONS, CertificationItem, PERSONAL_INFO } from '../data/cvData';

export const CertificationsGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('TODOS');
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const filters = [
    'TODOS',
    'LABORATORIOS',
    'CALIDAD',
    'AMBIENTE',
    'MINERÍA',
    'AGUA',
    'SEGURIDAD',
    'GESTIÓN',
  ];

  const filteredCerts = activeFilter === 'TODOS'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter(c => c.category === activeFilter);

  const handleOpenModal = (cert: CertificationItem) => {
    setSelectedCert(cert);
    setZoomLevel(1);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
    setZoomLevel(1);
  };

  const handleNext = () => {
    if (!selectedCert) return;
    const currentIndex = filteredCerts.findIndex(c => c.id === selectedCert.id);
    const nextIndex = (currentIndex + 1) % filteredCerts.length;
    setSelectedCert(filteredCerts[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    if (!selectedCert) return;
    const currentIndex = filteredCerts.findIndex(c => c.id === selectedCert.id);
    const prevIndex = (currentIndex - 1 + filteredCerts.length) % filteredCerts.length;
    setSelectedCert(filteredCerts[prevIndex]);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 2.0));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <section id="certificaciones" className="py-20 bg-slate-50/70 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-900 tracking-wider uppercase mb-2">
            <span>Acreditaciones y Posgrados</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-medium">16 Certificaciones Especializadas</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            CERTIFICACIONES Y ESPECIALIZACIONES
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Diplomados de alta especialización y cursos de actualización profesional con acreditación horaria en laboratorios, calidad ISO 17025, SSOMA, aguas y fiscalización minero-ambiental.
          </p>
        </div>

        {/* Filter Bar (Zero-pill segmented buttons) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/60 rounded-xl mb-10 overflow-x-auto max-w-full">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === f
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
              }`}
            >
              {f}
              {f === 'TODOS' ? ` (${CERTIFICATIONS.length})` : ` (${CERTIFICATIONS.filter(c => c.category === f).length})`}
            </button>
          ))}
        </div>

        {/* Grid of Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Visual Mini-Certificate Preview Banner */}
              <div 
                onClick={() => handleOpenModal(cert)}
                className="h-36 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 p-4 text-white relative cursor-pointer overflow-hidden flex flex-col justify-between group-hover:brightness-105 transition-all"
              >
                {/* Subtle certificate border frame inside preview */}
                <div className="absolute inset-2 border border-sky-400/20 rounded pointer-events-none" />

                <div className="flex items-center justify-between text-[11px] text-sky-200/80 font-mono tracking-wider">
                  <span>CERTIFICACIÓN OFICIAL</span>
                  <span className="text-emerald-400 font-bold">{cert.category}</span>
                </div>

                <div className="my-auto text-center px-2">
                  <p className="font-display font-bold text-xs sm:text-sm text-white line-clamp-2 drop-shadow-xs">
                    {cert.name}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>{cert.institution}</span>
                  <span>{cert.year}</span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-sky-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5 bg-sky-900/90 px-3 py-1.5 rounded-lg border border-sky-400/40">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Ver Certificado Completo</span>
                  </span>
                </div>
              </div>

              {/* Card Body Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  {/* Meta text with zero-pill separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-sky-900">{cert.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {cert.year}
                    </span>
                    {cert.hours && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-bold text-emerald-700 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-emerald-600" />
                          {cert.hours} horas
                        </span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug mb-2 group-hover:text-sky-900 transition-colors">
                    {cert.name}
                  </h3>

                  {/* Institution */}
                  <div className="text-xs text-slate-600 mb-3 flex items-start gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{cert.institution}</span>
                  </div>

                  {/* Topics covered */}
                  <div className="text-xs text-slate-500 mb-4 line-clamp-2">
                    {cert.topics.join(' · ')}
                  </div>
                </div>

                {/* Action button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenModal(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-sky-900 bg-sky-50 hover:bg-sky-100 rounded-lg border border-sky-200/80 transition-colors cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5 text-sky-700" />
                    <span>VER CERTIFICADO</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ============================================================ */}
        {/* MODAL DE CERTIFICADO COMPLETO CON ZOOM Y NAVEGACIÓN */}
        {/* ============================================================ */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            
            {/* Modal Container */}
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 relative overflow-hidden animate-in zoom-in-95 duration-200">
              
              {/* Modal Top Bar */}
              <div className="p-4 sm:px-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-900 text-white flex items-center justify-center">
                    <Award className="w-4 h-4 text-sky-300" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 leading-tight">
                      {selectedCert.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{selectedCert.institution}</span>
                      <span aria-hidden="true">·</span>
                      <span>Año {selectedCert.year}</span>
                      {selectedCert.hours && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="font-semibold text-emerald-700">{selectedCert.hours} horas académicas</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Top Controls: Zoom + Close */}
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="hidden sm:flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1">
                    <button
                      onClick={handleZoomOut}
                      className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded cursor-pointer"
                      title="Alejar"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="text-[11px] font-mono px-1 font-semibold text-slate-700">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded cursor-pointer"
                      title="Acercar"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleResetZoom}
                      className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded cursor-pointer"
                      title="Restablecer Zoom"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={handleCloseModal}
                    className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
                    aria-label="Cerrar modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Viewer Body (Scrollable with zoom) */}
              <div className="flex-1 overflow-auto p-4 sm:p-8 bg-slate-100/90 flex items-center justify-center">
                
                {/* Simulated High-Fidelity Institutional Certificate Diploma */}
                <div
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                  className="transition-transform duration-200 bg-white max-w-2xl w-full p-8 sm:p-12 rounded-lg shadow-xl border-8 border-double border-slate-300 relative text-center text-slate-800"
                >
                  {/* Subtle Ornamental Certificate Guilloche & Corners */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-sky-900" />
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-sky-900" />
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-sky-900" />
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-sky-900" />

                  {/* Institution Watermark/Header */}
                  <div className="mb-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-sky-900 text-white flex items-center justify-center mb-3 shadow-md">
                      <ShieldCheck className="w-7 h-7 text-sky-200" />
                    </div>
                    <div className="font-display font-extrabold text-xs sm:text-sm tracking-widest text-slate-900 uppercase">
                      {selectedCert.institution}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">
                      CERTIFICADO OFICIAL DE ACREDITACIÓN PROFESIONAL
                    </div>
                  </div>

                  {/* Title of Presentation */}
                  <div className="my-6">
                    <span className="text-xs font-serif italic text-slate-500 block mb-1">
                      Otorga la presente certificación a:
                    </span>
                    <h3 className="font-display font-extrabold text-lg sm:text-2xl text-sky-950 uppercase tracking-wide border-b-2 border-sky-900/30 inline-block pb-1">
                      {PERSONAL_INFO.fullName}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 mt-1">
                      Ingeniera Química · CIP N.º {PERSONAL_INFO.cip}
                    </p>
                  </div>

                  {/* Course / Diplomado title */}
                  <div className="my-6 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <span className="text-xs text-slate-500 block mb-1 font-serif italic">
                      Por haber aprobado satisfactoriamente el programa de:
                    </span>
                    <h4 className="font-display font-extrabold text-base sm:text-xl text-slate-900 leading-snug">
                      {selectedCert.name}
                    </h4>
                    {selectedCert.hours && (
                      <div className="text-xs font-bold text-emerald-800 mt-2">
                        Equivalente a {selectedCert.hours} Horas Académicas
                      </div>
                    )}
                  </div>

                  {/* Topics breakdown */}
                  <div className="text-[11px] text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
                    <strong>Contenido curricular:</strong> {selectedCert.topics.join(' · ')}
                  </div>

                  {/* Bottom Signatures & Seal */}
                  <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-8 items-end text-xs text-slate-600">
                    <div>
                      <div className="w-24 h-0.5 bg-slate-400 mx-auto mb-1.5" />
                      <span className="block font-semibold text-slate-800">Dirección Académica</span>
                      <span className="text-[10px] text-slate-400">Firma Autorizada</span>
                    </div>

                    <div>
                      <div className="w-24 h-0.5 bg-slate-400 mx-auto mb-1.5" />
                      <span className="block font-semibold text-slate-800">Coordinación de Calidad</span>
                      <span className="text-[10px] text-slate-400">Registro N.º {selectedCert.verificationCode || '2026-CIP-ZS'}</span>
                    </div>
                  </div>

                  {/* Bottom Code & Year */}
                  <div className="mt-6 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>Emisión: {selectedCert.year} · Perú</span>
                    <span>Código de verificación: {selectedCert.verificationCode || 'VERIFIED'}</span>
                  </div>

                </div>

              </div>

              {/* Modal Footer: Prev / Next Navigation */}
              <div className="p-4 sm:px-6 border-t border-slate-200 flex items-center justify-between bg-white">
                <button
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <div className="text-xs text-slate-500 font-medium">
                  {filteredCerts.findIndex(c => c.id === selectedCert.id) + 1} de {filteredCerts.length}
                </div>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
