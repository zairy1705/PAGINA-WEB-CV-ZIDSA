import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import { EDUCATION, PERSONAL_INFO } from '../data/cvData';

export const Education: React.FC = () => {
  return (
    <section id="formacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-900 tracking-wider uppercase mb-2">
            <span>Grados Académicos y Posgrado</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-medium">Universidades Nacionales</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            FORMACIÓN ACADÉMICA
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Formación universitaria rigurosa en ingeniería química y estudios de posgrado en gestión operativa y logística en las principales universidades públicas del Perú.
          </p>
        </div>

        {/* Academic Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {EDUCATION.map((edu, idx) => (
            <div
              key={edu.id}
              className="bg-slate-50/50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between text-left relative overflow-hidden"
            >
              {/* Subtle accent bar on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-900 to-sky-700" />

              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.period}</span>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-sky-100 text-sky-900 tracking-wider uppercase">
                    {edu.status}
                  </span>
                </div>

                {/* Degree title */}
                <h3 className="font-display font-extrabold text-xl text-slate-900 tracking-tight mb-2">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="text-sm font-semibold text-sky-900 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {edu.details}
                </p>
              </div>

              {/* Extra credential info */}
              {edu.credential ? (
                <div className="pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <Award className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{edu.credential}</span>
                </div>
              ) : (
                <div className="pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs text-slate-500">
                  <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Estudios de Posgrado concluidos satisfactoriamente.</span>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
