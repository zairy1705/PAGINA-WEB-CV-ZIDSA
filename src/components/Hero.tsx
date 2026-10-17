import React, { useState, useRef, useEffect } from 'react';
import { ArrowDownRight, FileDown, Mail, ShieldCheck, Award, Sparkles, CheckCircle2, Camera, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';
import defaultPortraitImg from '../assets/images/zaira_salvador_studio_portrait_1791900381465.jpg';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [currentPortrait, setCurrentPortrait] = useState<string>(defaultPortraitImg);
  const [isCustomImage, setIsCustomImage] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if the user previously uploaded a custom photo in their browser
    const savedImg = localStorage.getItem('zaira_custom_portrait');
    if (savedImg) {
      setCurrentPortrait(savedImg);
      setIsCustomImage(true);
      // Auto-persist to server disk so it becomes the permanent image for all visitors
      fetch('/api/save-portrait', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: savedImg }),
      }).catch(() => {});
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setCurrentPortrait(base64);
        setIsCustomImage(true);
        try {
          localStorage.setItem('zaira_custom_portrait', base64);
        } catch {
          // localStorage full or quota exceeded, ignore
        }
        // Persist permanently to server disk so it remains for everyone
        fetch('/api/save-portrait', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64 }),
        }).catch(() => {});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setCurrentPortrait(defaultPortraitImg);
    setIsCustomImage(false);
    localStorage.removeItem('zaira_custom_portrait');
  };
  return (
    <section id="inicio" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white">
      {/* Subtle scientific background elements: molecular grid & light beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#0369a1 1px, transparent 1px), radial-gradient(#059669 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            backgroundPosition: '0 0, 16px 16px',
          }}
        />

        {/* Ambient color halos */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl -z-10" />
        <div className="absolute top-32 right-10 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl -z-10" />

        {/* Subtle molecular SVG watermark in background */}
        <svg
          className="absolute top-20 right-5 w-80 h-80 text-slate-200/40 opacity-40 -z-10 hidden md:block"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <circle cx="100" cy="100" r="8" className="fill-sky-100" />
          <circle cx="40" cy="70" r="6" className="fill-emerald-100" />
          <circle cx="160" cy="70" r="6" className="fill-sky-100" />
          <circle cx="60" cy="150" r="6" className="fill-cyan-100" />
          <circle cx="140" cy="150" r="6" className="fill-emerald-100" />
          <line x1="100" y1="100" x2="40" y2="70" />
          <line x1="100" y1="100" x2="160" y2="70" />
          <line x1="100" y1="100" x2="60" y2="150" />
          <line x1="100" y1="100" x2="140" y2="150" />
          <line x1="40" y1="70" x2="60" y2="150" strokeDasharray="3 3" />
          <line x1="160" y1="70" x2="140" y2="150" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Professional status pill-free meta */}
            <div className="flex flex-wrap items-center gap-x-2 text-xs font-semibold text-slate-600 mb-4 tracking-wide uppercase">
              <span className="text-sky-900 font-bold">Colegiada y Habilitada</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700">CIP N.º {PERSONAL_INFO.cip}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">Trujillo, Perú</span>
            </div>

            {/* Full Name */}
            <h1 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] mb-3">
              ZAIRA INGRID DJANIRA <br className="hidden sm:inline" />
              <span className="text-sky-950">SALVADOR AMAYA</span>
            </h1>

            {/* Profession & Subtitle */}
            <div className="mb-6 space-y-1">
              <p className="font-display font-bold text-lg sm:text-xl text-sky-800 tracking-wide uppercase">
                {PERSONAL_INFO.title}
              </p>
              <p className="font-sans font-semibold text-sm sm:text-base text-emerald-800 tracking-wide">
                {PERSONAL_INFO.subtitle}
              </p>
            </div>

            {/* Bio quote / summary */}
            <div className="relative pl-4 border-l-2 border-sky-700/60 mb-8">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                "{PERSONAL_INFO.summary}"
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#experiencia"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-sky-900 hover:bg-sky-800 shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <span>VER MI EXPERIENCIA</span>
                <ArrowDownRight className="w-4 h-4 text-sky-300" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200/80 transition-all active:scale-98 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-sky-700" />
                <span>DESCARGAR CV</span>
              </button>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>CONTACTAR</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="font-display font-extrabold text-2xl text-slate-900">+9 Años</div>
                <div className="text-xs text-slate-500 font-medium">Trayectoria técnica</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-sky-900">5 Métodos</div>
                <div className="text-xs text-slate-500 font-medium">Acreditados INACAL</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl text-emerald-800">ISO 17025</div>
                <div className="text-xs text-slate-500 font-medium">Sistemas de calidad</div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Portrait with scientific composition & floating badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Frame wrapper */}
            <div className="relative w-full max-w-md">
              
              {/* Subtle back decorative geometry */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-sky-100 -z-10 hidden sm:block" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50/50 -z-20 hidden sm:block" />

              {/* Main Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-white group">
                <img
                  src={currentPortrait}
                  alt="Zaira Ingrid Djanira Salvador Amaya - Ingeniera Química"
                  className="w-full h-[440px] sm:h-[490px] object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />
                
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Photo quick action controls */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    title="Cargar tu fotografía personalizada"
                    className="p-2 rounded-lg bg-black/50 hover:bg-black/75 text-white/90 hover:text-white backdrop-blur-md transition-all shadow-md cursor-pointer flex items-center gap-1 text-[11px] font-medium"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Cambiar foto</span>
                  </button>

                  {isCustomImage && (
                    <button
                      onClick={handleResetImage}
                      title="Restablecer fotografía"
                      className="p-2 rounded-lg bg-black/50 hover:bg-black/75 text-white/90 hover:text-white backdrop-blur-md transition-all shadow-md cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Subtitle tag directly inside the image at bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                  <p className="font-display font-bold text-sm tracking-tight drop-shadow-sm">
                    Ing. Zaira Salvador Amaya
                  </p>
                  <p className="text-xs text-sky-200 font-medium drop-shadow-sm">
                    CIP 225124 · Química Analítica & Ambiental
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: +9 Años de Experiencia (Top-Left) */}
              <div className="absolute -top-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200/80 flex items-center gap-3 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-10 h-10 rounded-lg bg-sky-900 text-white flex items-center justify-center font-bold text-lg font-display">
                  +9
                </div>
                <div className="text-left leading-tight pr-2">
                  <span className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider">AÑOS DE</span>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase">EXPERIENCIA</span>
                </div>
              </div>

              {/* Floating Badge 2: ISO/IEC 17025:2017 (Bottom-Right) */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200/80 flex items-center gap-3 animate-in fade-in zoom-in-95 duration-700">
                <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-emerald-200" />
                </div>
                <div className="text-left leading-tight pr-2">
                  <span className="block text-xs font-extrabold text-slate-900">ISO/IEC</span>
                  <span className="text-[11px] font-bold text-emerald-700">17025:2017</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
