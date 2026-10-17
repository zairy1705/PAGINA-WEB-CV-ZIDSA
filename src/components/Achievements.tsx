import React from 'react';
import { Award, ShieldCheck, Zap, CheckCircle2, TrendingUp, Sparkles, FileCheck } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/cvData';

export const Achievements: React.FC = () => {
  const mainAch = ACHIEVEMENTS[0];
  const secondAch = ACHIEVEMENTS[1];

  return (
    <section id="logros" className="py-20 bg-slate-50/70 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-900 tracking-wider uppercase mb-2">
            <span>Resultados e Impacto</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-medium">Hitos Técnicos</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            LOGROS DESTACADOS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hitos comprobables en aseguramiento metrológico, acreditación oficial ante la máxima autoridad de calidad del país (INACAL) y optimización de productividad operativa.
          </p>
        </div>

        {/* 2 Achievements Grid */}
        <div className="space-y-8">
          
          {/* Main Large Achievement Card: ACREDITACIÓN INACAL */}
          <div className="bg-white rounded-2xl border-2 border-sky-800/20 shadow-md p-6 sm:p-8 relative overflow-hidden text-left">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-sky-50 to-emerald-50/50 rounded-full blur-2xl -z-10 pointer-events-none" />

            {/* Top metadata */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-bold text-sky-900 uppercase tracking-wider">{mainAch.badge}</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-emerald-800">Norma: {mainAch.standard}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-900 bg-sky-50 px-3 py-1 rounded-md border border-sky-200">
                <Award className="w-3.5 h-3.5 text-sky-700" />
                <span>INACAL - Instituto Nacional de Calidad</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-snug mb-4">
                  {mainAch.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {mainAch.summary}
                </p>

                <div className="space-y-2.5">
                  {mainAch.impactPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlight box: 5 métodos de ensayo */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-sky-50/40 rounded-xl p-6 border border-sky-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-extrabold text-2xl text-sky-900">
                    5 Métodos de Ensayo
                  </span>
                  <FileCheck className="w-6 h-6 text-sky-700" />
                </div>
                
                <p className="text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">
                  Acreditados bajo NTP-ISO/IEC 17025:2017:
                </p>

                <ul className="space-y-2.5">
                  {mainAch.methods?.map((method, mIdx) => (
                    <li key={mIdx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-2xs">
                      <span className="w-5 h-5 rounded-full bg-sky-900 text-white flex items-center justify-center text-[10px] font-bold font-mono">
                        {mIdx + 1}
                      </span>
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500">
                  Laboratorio de Suelos, Aguas y Foliares · INIA Vista Florida
                </div>
              </div>

            </div>

          </div>

          {/* Second Achievement Card: ESTANDARIZACIÓN Y OPTIMIZACIÓN */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 text-left">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-bold text-sky-900 uppercase tracking-wider">{secondAch.badge}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-600">{secondAch.standard}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                <span>Mejora Continua y Eficiencia</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug mb-3">
                  {secondAch.title}
                </h3>
                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-emerald-600 italic mb-4">
                  "{secondAch.summary}"
                </blockquote>
              </div>

              <div className="lg:col-span-5 space-y-2">
                {secondAch.impactPoints.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
