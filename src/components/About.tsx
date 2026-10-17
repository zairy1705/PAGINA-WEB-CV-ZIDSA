import React from 'react';
import { FlaskConical, ShieldCheck, Leaf, Droplets, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    FlaskConical: <FlaskConical className="w-6 h-6 text-sky-700" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-700" />,
    Leaf: <Leaf className="w-6 h-6 text-emerald-800" />,
    Droplets: <Droplets className="w-6 h-6 text-sky-600" />,
  };

  return (
    <section id="perfil" className="py-20 bg-slate-50/60 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-900 tracking-wider uppercase mb-2">
            <span>Identidad Profesional</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-medium">Trayectoria Técnica</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            SOBRE MÍ
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Mi trayectoria profesional integra de forma sólida la rigurosidad analítica del laboratorio químico, los sistemas de calidad bajo la norma ISO/IEC 17025, la gestión ambiental minera y la protección de la salud pública mediante el saneamiento y la vigilancia del agua.
          </p>
        </div>

        {/* 4 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAL_INFO.coreAreas.map((area) => (
            <div
              key={area.num}
              className="group relative bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[area.icon]}
                  </div>
                  <span className="font-display font-bold text-2xl text-slate-300 group-hover:text-sky-800 transition-colors">
                    {area.num}
                  </span>
                </div>

                <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug tracking-tight mb-3">
                  {area.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {area.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500 group-hover:text-sky-800 transition-colors">
                <span>Especialidad técnica</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Institutional affiliation summary */}
        <div className="mt-12 bg-white rounded-xl p-6 border border-slate-200/70 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Colegio Profesional</span>
            <h4 className="font-display font-bold text-slate-900 text-base">
              Colegio de Ingenieros del Perú – Consejo Departamental La Libertad
            </h4>
            <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
              <span>Registro CIP: <strong>225124</strong></span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-semibold">Estado: Colegiada y Habilitada</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#experiencia"
              className="text-xs font-semibold text-sky-900 hover:text-sky-700 flex items-center gap-1"
            >
              <span>Ver cronología laboral</span>
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
