import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  Building2, 
  User, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  ArrowRight,
  Clock,
  ShieldCheck
} from 'lucide-react';

export const RecruiterWhatsAppBox: React.FC = () => {
  const WHATSAPP_NUMBER = '51920221581';
  const DISPLAY_PHONE = '+51 920 221 581';

  const [company, setCompany] = useState('');
  const [recruiterName, setRecruiterName] = useState('');
  const [opportunityType, setOpportunityType] = useState('Propuesta Laboral');
  const [customNotes, setCustomNotes] = useState('');

  const opportunityOptions = [
    { label: 'Propuesta Laboral', icon: '💼', text: 'Queremos presentarte una propuesta laboral para el área de' },
    { label: 'Consultoría en Laboratorio / ISO 17025', icon: '🔬', text: 'Requerimos tus servicios para asesoría / auditoría en laboratorios e ISO 17025' },
    { label: 'Gestión Ambiental y Minera', icon: '🌿', text: 'Tenemos un proyecto de evaluación de instrumentos ambientales / formalización minera' },
    { label: 'Calidad de Agua y Saneamiento', icon: '💧', text: 'Buscamos especialista en vigilancia sanitaria de agua / saneamiento básico' },
    { label: 'Coordinar Entrevista', icon: '📅', text: 'Revisamos tu CV y nos gustaría coordinar una entrevista' },
  ];

  // Construct message dynamically
  const buildMessage = () => {
    let msg = `Estimada Zaira, he revisado su CV y me gustaría comunicarme con Ud sobre una oportunidad profesional en nuestra organización.`;

    const extras: string[] = [];
    if (recruiterName.trim() && company.trim()) {
      extras.push(`Le saluda ${recruiterName.trim()} de ${company.trim()}.`);
    } else if (company.trim()) {
      extras.push(`Le contactamos desde ${company.trim()}.`);
    } else if (recruiterName.trim()) {
      extras.push(`Le saluda ${recruiterName.trim()}.`);
    }

    if (opportunityType && opportunityType !== 'Propuesta Laboral') {
      extras.push(`Interés: ${opportunityType}.`);
    }

    if (customNotes.trim()) {
      extras.push(`Detalles: ${customNotes.trim()}`);
    }

    if (extras.length > 0) {
      msg += `\n\n${extras.join('\n')}`;
    }

    return msg;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = buildMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleQuickDirectChat = () => {
    const quickMsg = `Estimada Zaira, he revisado su CV y me gustaría comunicarme con Ud sobre una oportunidad profesional en nuestra organización.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(quickMsg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reclutadores-whatsapp" className="py-16 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-slate-50 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Box */}
        <div className="bg-white rounded-3xl border-2 border-emerald-500/30 shadow-xl overflow-hidden relative">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-emerald-700 via-emerald-800 to-sky-900 text-white p-6 sm:p-8 relative overflow-hidden">
            {/* Subtle decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div className="text-left space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Canal Directo para Reclutadores & Empresas</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
                  Contáctame Directamente por WhatsApp
                </h3>
                <p className="text-emerald-100 text-xs sm:text-sm font-normal max-w-xl">
                  Si representas a una empresa, consultora o institución y deseas presentar una propuesta laboral o coordinar una entrevista, puedes enviarme un mensaje al instante.
                </p>
              </div>

              {/* Verified WhatsApp Phone Badge */}
              <div className="shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center sm:text-right">
                <div className="flex items-center justify-center sm:justify-end gap-2 text-emerald-300 font-mono text-xs font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WhatsApp Activo</span>
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono tracking-tight text-white mt-0.5">
                  {DISPLAY_PHONE}
                </div>
                <div className="text-[11px] text-emerald-200/80">
                  Respuesta profesional oportuna
                </div>
              </div>
            </div>
          </div>

          {/* Form & Preview Grid */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            
            {/* Left Column: Interactive Form */}
            <form onSubmit={handleSendWhatsApp} className="lg:col-span-7 space-y-5">
              
              {/* Type of opportunity pills */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Tipo de Oportunidad / Interés
                </label>
                <div className="flex flex-wrap gap-2">
                  {opportunityOptions.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setOpportunityType(opt.label)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 border ${
                        opportunityType === opt.label
                          ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <span>{opt.icon}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recruiter & Company Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="recruiter-company" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Empresa / Institución
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      id="recruiter-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Ej: Minera / Laboratorio / DIRIS"
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="recruiter-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Tu Nombre o Cargo
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      id="recruiter-name"
                      type="text"
                      value={recruiterName}
                      onChange={(e) => setRecruiterName(e.target.value)}
                      placeholder="Ej: Lic. Gómez / Jefe de RRHH"
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Custom message details */}
              <div>
                <label htmlFor="recruiter-notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Detalles Adicionales del Puesto o Proyecto (Opcional)
                </label>
                <textarea
                  id="recruiter-notes"
                  rows={3}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Ej: Modalidad presencial/remoto, ubicación del proyecto o disponibilidad requerida..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-colors resize-y"
                />
              </div>

              {/* Main Submit Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 active:scale-98 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>ENVIAR MENSAJE A WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 text-emerald-200" />
                </button>

                <button
                  type="button"
                  onClick={handleQuickDirectChat}
                  className="px-4 py-3.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer text-center"
                  title="Abrir chat directamente sin llenar campos"
                >
                  Chat Directo Rápido
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Al hacer clic se abrirá WhatsApp Web o la App móvil con el mensaje redactado listo para enviar al <strong>920221581</strong>.</span>
              </div>
            </form>

            {/* Right Column: Simulated WhatsApp Preview Bubble */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Vista Previa del Mensaje</span>
                  </span>
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    +51 920 221 581
                  </span>
                </div>

                {/* WhatsApp Chat Simulation Card */}
                <div className="bg-[#EFEAE2] rounded-2xl p-4 sm:p-5 border border-slate-300 shadow-inner relative">
                  
                  {/* WhatsApp contact top header */}
                  <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-black/10">
                    <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                      ZS
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">
                        Ing. Zaira Salvador Amaya
                      </div>
                      <div className="text-[10px] text-emerald-700 font-medium">
                        En línea · CIP 225124
                      </div>
                    </div>
                  </div>

                  {/* Outgoing Message Bubble */}
                  <div className="bg-[#E7FFDB] rounded-xl rounded-tr-none p-3.5 shadow-xs border border-emerald-300/40 text-slate-800 text-xs leading-relaxed whitespace-pre-wrap font-sans">
                    {buildMessage()}
                    <div className="text-[10px] text-slate-400 text-right mt-2 flex items-center justify-end gap-1 font-mono">
                      <span>Ahora</span>
                      <span className="text-sky-600 font-bold">✓✓</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Direct phone reminder badge */}
              <div className="mt-4 p-3 bg-white rounded-xl border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Número directo:</span>
                  <strong className="text-slate-900 font-mono">920 221 581</strong>
                </span>
                <span className="text-[11px] text-slate-400">
                  Trujillo, Perú
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
