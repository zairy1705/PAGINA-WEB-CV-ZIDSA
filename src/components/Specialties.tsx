import React, { useState } from 'react';
import { 
  FlaskConical, 
  Activity, 
  Award, 
  Leaf, 
  Mountain, 
  Radar, 
  Droplets, 
  HeartPulse,
  X,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { SPECIALTIES, SpecialtyItem } from '../data/cvData';

export const Specialties: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-sky-700" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-700" />;
      case 'Award': return <Award className="w-5 h-5 text-emerald-700" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-emerald-800" />;
      case 'Mountain': return <Mountain className="w-5 h-5 text-amber-800" />;
      case 'Radar': return <Radar className="w-5 h-5 text-sky-800" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-cyan-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-700" />;
      default: return <FlaskConical className="w-5 h-5 text-sky-700" />;
    }
  };

  return (
    <section id="especialidades" className="py-20 bg-slate-50/70 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-900 tracking-wider uppercase mb-2">
            <span>Competencias Especializadas</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-medium">8 Pilares de Dominio</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            ÁREAS DE ESPECIALIZACIÓN
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Áreas de conocimiento técnico en las que convergen la ingeniería química aplicada, el control metrológico riguroso, la normativa ambiental peruana y la salud pública. Haz clic en cualquier área para ver su alcance.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIALTIES.map((spec) => (
            <div
              key={spec.number}
              onClick={() => setSelectedSpecialty(spec)}
              className="group bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(spec.iconName)}
                  </div>
                  <span className="font-display font-bold text-lg text-slate-300 group-hover:text-sky-800 transition-colors">
                    {spec.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-slate-900 text-sm tracking-tight mb-2 group-hover:text-sky-900 transition-colors">
                  {spec.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                  {spec.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-800 group-hover:text-sky-900">
                <span>Ver descripción técnica</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Drawer for selected specialty */}
        {selectedSpecialty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
              
              <button
                onClick={() => setSelectedSpecialty(null)}
                className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                  {getIcon(selectedSpecialty.iconName)}
                </div>
                <div>
                  <div className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                    Especialidad {selectedSpecialty.number}
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900">
                    {selectedSpecialty.title}
                  </h3>
                </div>
              </div>

              <div className="text-sm text-slate-600 leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                {selectedSpecialty.summary}
              </div>

              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Alcance y Metodologías Clave:
                </div>
                <ul className="space-y-2">
                  {selectedSpecialty.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Herramientas y Normativa Aplicada:
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-700">
                  {selectedSpecialty.keyTools.map((tool, tIdx) => (
                    <span key={tIdx} className="inline-flex items-center">
                      <span className="font-medium">{tool}</span>
                      {tIdx < selectedSpecialty.keyTools.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300 ml-2">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedSpecialty(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-sky-900 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
