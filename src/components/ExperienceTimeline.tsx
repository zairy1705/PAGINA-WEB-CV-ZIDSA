import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Briefcase,
  Layers,
  ArrowRight
} from 'lucide-react';
import { EXPERIENCES, ExperienceItem } from '../data/cvData';

export const ExperienceTimeline: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<string[]>(['exp-01', 'exp-07']);
  const [activeCategory, setActiveCategory] = useState<string>('TODOS');
  const [showAllExpanded, setShowAllExpanded] = useState<boolean>(false);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleToggleAll = () => {
    if (showAllExpanded) {
      setExpandedIds(['exp-01', 'exp-07']);
      setShowAllExpanded(false);
    } else {
      setExpandedIds(EXPERIENCES.map(e => e.id));
      setShowAllExpanded(true);
    }
  };

  const categories = ['TODOS', 'Laboratorios', 'Gestión Ambiental', 'Minería', 'Salud y Agua'];

  const filteredExperiences = activeCategory === 'TODOS'
    ? EXPERIENCES
    : EXPERIENCES.filter(exp => exp.category === activeCategory);

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-900 tracking-wider uppercase mb-2">
              <span>Trayectoria Profesional</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span className="text-slate-500 font-medium">+9 Años de Experiencia</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              EXPERIENCIA PROFESIONAL
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Cronología inversa de roles desempeñados en laboratorios transnacionales de ensayo, entidades públicas de fiscalización ambiental y salud, centros de investigación agronómica y plantas mineras.
            </p>
          </div>

          {/* Action to expand/collapse all */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleAll}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-sky-900 bg-sky-50 hover:bg-sky-100 rounded-lg border border-sky-200/80 transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-sky-700" />
              <span>{showAllExpanded ? 'CONTRAER TODAS' : 'VER TRAYECTORIA COMPLETA'}</span>
            </button>
          </div>
        </div>

        {/* Filter bar (Zero-pill button segmented bar) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-lg mb-12 overflow-x-auto max-w-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline list */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {filteredExperiences.map((exp, index) => {
            const isExpanded = expandedIds.includes(exp.id);
            const isHighlight = exp.highlight;

            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline node icon */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                    isHighlight
                      ? 'bg-sky-900 border-sky-600 text-white shadow-md ring-4 ring-sky-100'
                      : exp.isCurrent
                      ? 'bg-emerald-700 border-emerald-500 text-white ring-4 ring-emerald-100'
                      : 'bg-white border-slate-300 text-slate-500 group-hover:border-sky-700 group-hover:text-sky-900'
                  }`}
                >
                  {isHighlight ? (
                    <Award className="w-4 h-4 text-sky-200" />
                  ) : (
                    <span className="text-[11px] font-bold font-mono">
                      0{EXPERIENCES.findIndex(e => e.id === exp.id) + 1}
                    </span>
                  )}
                </div>

                {/* Card Container */}
                <div
                  className={`rounded-xl border transition-all duration-200 ${
                    isHighlight
                      ? 'bg-gradient-to-r from-sky-50/70 via-white to-sky-50/30 border-sky-300 shadow-md ring-1 ring-sky-200'
                      : 'bg-white border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  {/* Card Header (Clickable to expand) */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-5 sm:p-6 cursor-pointer select-none"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                      
                      {/* Left Header info */}
                      <div className="space-y-1">
                        
                        {/* Meta text kicker with zero-pill discipline */}
                        <div className="flex flex-wrap items-center gap-x-2 text-xs text-slate-500 mb-1.5">
                          <span className="font-semibold text-sky-900 uppercase tracking-wider">
                            EXPERIENCIA 0{EXPERIENCES.findIndex(e => e.id === exp.id) + 1}
                          </span>
                          <span aria-hidden="true" className="text-slate-300">·</span>
                          <span className="text-slate-600">{exp.category}</span>
                          {exp.isCurrent && (
                            <>
                              <span aria-hidden="true" className="text-slate-300">·</span>
                              <span className="text-emerald-700 font-bold uppercase tracking-wider">Puesto Actual</span>
                            </>
                          )}
                          {isHighlight && (
                            <>
                              <span aria-hidden="true" className="text-slate-300">·</span>
                              <span className="text-sky-800 font-bold uppercase tracking-wider">Etapa Destacada de Liderazgo</span>
                            </>
                          )}
                        </div>

                        {/* Role Title */}
                        <h3 className={`font-display font-bold text-lg sm:text-xl tracking-tight leading-snug ${
                          isHighlight ? 'text-sky-950 font-extrabold' : 'text-slate-900'
                        }`}>
                          {exp.role}
                        </h3>

                        {/* Organization & Department */}
                        <div className="text-sm font-semibold text-slate-800">
                          {exp.organization}
                        </div>
                        {exp.department && (
                          <div className="text-xs text-slate-500 font-normal">
                            {exp.department}
                          </div>
                        )}
                      </div>

                      {/* Right Header: Period & Toggle Icon */}
                      <div className="flex items-center sm:flex-col sm:items-end justify-between gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.period}</span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-xs font-medium text-sky-800">
                          <span className="hidden sm:inline">{isExpanded ? 'Ocultar' : 'Ver funciones'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>

                    </div>

                    {/* Preview snippet if collapsed */}
                    {!isExpanded && (
                      <p className="mt-3 text-xs text-slate-500 line-clamp-1 italic">
                        {exp.responsibilities[0]}
                      </p>
                    )}
                  </div>

                  {/* Expanded Content: Key Responsibilities */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 animate-in fade-in duration-200">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Actividades y Funciones Principales:
                      </div>
                      
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                              isHighlight ? 'text-sky-700' : 'text-emerald-600'
                            }`} />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Highlight footnote for ALS Senior Lab Coordinator */}
                      {isHighlight && (
                        <div className="mt-5 p-3 rounded-lg bg-sky-900 text-white text-xs leading-relaxed flex items-center gap-3">
                          <Award className="w-5 h-5 text-sky-300 shrink-0" />
                          <div>
                            <strong className="block font-display font-semibold">Hito de Liderazgo Geoquímico e Instrumental</strong>
                            Coordinación técnica de laboratorio de alta productividad, dirección de auditorías de acreditación ISO/IEC 17025 y gestión analítica instrumental avanzada.
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA to see Full CV */}
        <div className="mt-14 text-center">
          <button
            onClick={handleToggleAll}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <span>{showAllExpanded ? 'REDUCIR VISTA DE EXPERIENCIA' : 'DESPLEGAR TODAS LAS EXPERIENCIAS'}</span>
            <ArrowRight className="w-4 h-4 text-slate-600" />
          </button>
        </div>

      </div>
    </section>
  );
};
