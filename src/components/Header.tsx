import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Award, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';

interface HeaderProps {
  onOpenCvModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Perfil', href: '#perfil' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Competencias', href: '#competencias' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Certificaciones', href: '#certificaciones' },
    { label: 'Logros', href: '#logros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-xs py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Name */}
          <a href="#inicio" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-900 text-white flex items-center justify-center font-display font-bold text-sm tracking-wider shadow-sm group-hover:bg-sky-800 transition-colors">
              ZS
            </div>
            <div>
              <div className="font-display font-bold text-slate-900 tracking-tight text-base sm:text-lg leading-tight group-hover:text-sky-900 transition-colors">
                {PERSONAL_INFO.shortName}
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 tracking-wider uppercase">
                <span>{PERSONAL_INFO.title}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-emerald-700 font-semibold">CIP {PERSONAL_INFO.cip}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-slate-600 hover:text-sky-900 transition-colors relative after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-0.5 after:bg-sky-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-900 hover:bg-sky-800 rounded-lg shadow-xs hover:shadow-md transition-all active:scale-98 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-sky-300" />
              <span>DESCARGAR CV</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCvModal}
              aria-label="Descargar CV"
              className="p-2 text-sky-900 hover:bg-sky-50 rounded-md"
            >
              <FileDown className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-sky-900 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-900 hover:bg-slate-50 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-sky-900 hover:bg-sky-800 rounded-lg shadow-sm"
            >
              <FileDown className="w-4 h-4 text-sky-300" />
              <span>DESCARGAR CV COMPLETO</span>
            </button>
            <div className="flex items-center justify-around pt-2 text-xs text-slate-500">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-sky-900">
                <Mail className="w-3.5 h-3.5" />
                <span>Correo</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1 hover:text-sky-900">
                <Phone className="w-3.5 h-3.5" />
                <span>Llamar</span>
              </a>
              <span className="flex items-center gap-1 font-medium text-emerald-700">
                <Award className="w-3.5 h-3.5" />
                <span>CIP {PERSONAL_INFO.cip}</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
