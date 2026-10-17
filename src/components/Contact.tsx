import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  Send, 
  MessageSquare, 
  Linkedin, 
  CheckCircle2,
  Copy,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/cvData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.mensaje) return;

    setIsSubmitting(true);
    // Simulating message dispatch and generating mailto as backup
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage('¡Gracias por tu mensaje! Me pondré en contacto contigo a la brevedad posible.');
      // Prepare mailto link trigger
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.asunto || 'Contacto Profesional - Web CV')}&body=${encodeURIComponent(`Nombre: ${formData.nombre}\nCorreo: ${formData.correo}\n\nMensaje:\n${formData.mensaje}`)}`;
      window.location.href = mailtoLink;
      
      setFormData({
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: '',
      });
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const whatsappUrl = `https://wa.me/51920221581?text=${encodeURIComponent(
    'Estimada Zaira, he revisado su CV y me gustaría comunicarme con Ud sobre una oportunidad profesional en nuestra organización.'
  )}`;

  return (
    <section id="contacto" className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-900 tracking-wider uppercase mb-2">
            <span>Canales de Comunicación</span>
            <span aria-hidden="true" className="text-slate-300">/</span>
            <span className="text-slate-500 font-medium">Disponibilidad Profesional</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight mb-4">
            ¿TIENES UN PROYECTO O UNA OPORTUNIDAD PROFESIONAL?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            "Estoy interesada en proyectos relacionados con ingeniería química, laboratorios, calidad, gestión ambiental, análisis instrumental, agua, saneamiento y optimización de procesos."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct contact details and quick action buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-6">
            
            <div className="space-y-4">
              {/* Email Card */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-800 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Correo Electrónico
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="font-display font-bold text-sm sm:text-base text-slate-900 hover:text-sky-800 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded cursor-pointer"
                    title="Copiar correo"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] font-semibold text-emerald-700 mt-2 block">
                    ✓ Correo copiado al portapapeles
                  </span>
                )}
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Teléfono / WhatsApp
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-display font-bold text-sm sm:text-base text-slate-900 hover:text-emerald-800 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-700 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Ubicación
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* CIP Card */}
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-900 text-white flex items-center justify-center">
                    <Award className="w-5 h-5 text-sky-200" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Colegio de Ingenieros del Perú
                    </span>
                    <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                      CIP N.º {PERSONAL_INFO.cip}
                    </span>
                    <span className="text-xs text-emerald-700 font-semibold block mt-0.5">
                      {PERSONAL_INFO.cipStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Direct Action Buttons */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Conectar directamente:
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-sky-950 bg-sky-100 hover:bg-sky-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-800" />
                  <span>Correo Electrónico</span>
                </a>

                {/* LinkedIn Button configured and prepared */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                  title="Perfil de LinkedIn (enlace de red profesional)"
                >
                  <Linkedin className="w-4 h-4 text-sky-700" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm text-left">
            <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
              Enviar Mensaje Profesional
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Completa el formulario para consultas sobre consultoría, laboratorios, calidad ISO 17025 o gestión ambiental.
            </p>

            {statusMessage && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-center gap-2.5 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre o empresa"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-800/20 focus:border-sky-800 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="correo" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="correo"
                    required
                    value={formData.correo}
                    onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                    placeholder="nombre@organizacion.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-800/20 focus:border-sky-800 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="asunto" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  value={formData.asunto}
                  onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                  placeholder="Ej: Oportunidad de consultoría en ISO 17025 / Análisis instrumental"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-800/20 focus:border-sky-800 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="Detalles del proyecto, alcance técnico o requerimiento..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-800/20 focus:border-sky-800 transition-colors resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-white bg-sky-900 hover:bg-sky-800 shadow-xs hover:shadow-md transition-all active:scale-98 disabled:opacity-70 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-sky-300" />
                  <span>{isSubmitting ? 'ENVIANDO MENSAJE...' : 'ENVIAR MENSAJE'}</span>
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
