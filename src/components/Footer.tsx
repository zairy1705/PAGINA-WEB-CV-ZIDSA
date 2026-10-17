import React from 'react';
import { ArrowUp, Award, ShieldCheck, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800 text-left">
          
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-800 text-white flex items-center justify-center font-display font-bold text-sm">
                ZS
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight text-white">
                {PERSONAL_INFO.shortName}
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm font-semibold text-sky-300 tracking-wide uppercase">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-slate-400">
              {PERSONAL_INFO.subtitle}
            </p>
            <p className="text-xs text-slate-500 pt-1">
              Trujillo – La Libertad – Perú · CIP N.º {PERSONAL_INFO.cip} ({PERSONAL_INFO.cipStatus})
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-slate-400">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="hover:text-sky-300 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Zaira Salvador Amaya. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Ciencia</span>
            <span>·</span>
            <span>Ingeniería</span>
            <span>·</span>
            <span>Calidad</span>
            <span>·</span>
            <span>Medio Ambiente</span>
            <span>·</span>
            <span>Agua</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
