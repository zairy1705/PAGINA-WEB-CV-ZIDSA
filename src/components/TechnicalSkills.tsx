import React from 'react';
import { 
  Atom, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Languages, 
  Check, 
  CheckCircle2, 
  BarChart3,
  Layers
} from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/cvData';

export const TechnicalSkills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return <Atom className="w-5 h-5 text-sky-800" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-800" />;
      case 'Globe': return <Globe className="w-5 h-5 text-emerald-900" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-slate-800" />;
      case 'Languages': return <Languages className="w-5 h-5 text-cyan-800" />;
      default: return <Atom className="w-5 h-5 text-sky-800" />;
    }
  };

  return (
    <section id="competencias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-900 tracking-wider uppercase mb-2">
            <span>Matriz de Capacidades</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-medium">Dashboard Técnico</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            COMPETENCIAS TÉCNICAS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Consolidado de destrezas instrumentales, normativas de calidad, marcos regulatorios ambientales, software y proficiencia lingüística aplicada al sector minero, químico y de saneamiento.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {TECHNICAL_SKILLS.map((cat, idx) => {
            const isBroad = cat.category === 'GESTIÓN AMBIENTAL Y MINERÍA' || cat.category === 'CALIDAD Y ACREDITACIÓN';

            return (
              <div
                key={cat.category}
                className={`bg-slate-50/50 rounded-xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between ${
                  isBroad ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200/80">
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shadow-xs">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Dominio 0{idx + 1}
                      </span>
                      <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                        {cat.category}
                      </h3>
                    </div>
                  </div>

                  {/* Skills list */}
                  <ul className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-left group">
                        <div className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-700 mt-1 shrink-0" />
                          <div>
                            <span className="font-semibold text-xs sm:text-sm text-slate-800 block">
                              {skill.name}
                            </span>
                            {skill.note && (
                              <span className="text-xs text-slate-500 font-normal leading-tight block">
                                {skill.note}
                              </span>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer annotation for languages */}
                {cat.category === 'IDIOMAS' && (
                  <div className="mt-6 pt-3 border-t border-slate-200/60 text-xs text-slate-500">
                    <strong className="text-slate-700">Certificación Celpe-Bras:</strong> Examen oficial de proficiencia en lengua portuguesa reconocido por el Ministerio de Educación de Brasil.
                  </div>
                )}

                {/* Footer annotation for ISO 17025 */}
                {cat.category === 'CALIDAD Y ACREDITACIÓN' && (
                  <div className="mt-6 pt-3 border-t border-slate-200/60 text-xs text-emerald-800 font-medium">
                    Alineado a directrices de INACAL y guías metrológicas EURACHEM / GUM.
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
