import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const WHATSAPP_NUMBER = '51920221581';
  const DISPLAY_PHONE = '920 221 581';
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Estimada Zaira, he revisado su CV y me gustaría comunicarme con Ud sobre una oportunidad profesional en nuestra organización.');

  const handleSend = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Pop-up bubble when clicked */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200 text-left">
          <div className="bg-emerald-700 text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white text-emerald-800 flex items-center justify-center font-bold text-xs">
                ZS
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight">Ing. Zaira Salvador Amaya</h4>
                <p className="text-[10px] text-emerald-200">WhatsApp Oficial: {DISPLAY_PHONE}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-white/80 hover:text-white rounded cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 bg-slate-50">
            <p className="text-[11px] text-slate-600 mb-2 font-medium">
              Envía un mensaje rápido a mi WhatsApp profesional:
            </p>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-600 bg-white resize-none"
            />
            <button
              onClick={handleSend}
              className="mt-2 w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Abrir WhatsApp ({DISPLAY_PHONE})</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contactar por WhatsApp al 920 221 581"
        className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer border border-emerald-500/50"
      >
        <MessageSquare className="w-5 h-5 text-white fill-white/20" />
        <span className="text-xs font-bold tracking-tight pr-1 hidden sm:inline">
          WhatsApp: {DISPLAY_PHONE}
        </span>
      </button>
    </div>
  );
};
