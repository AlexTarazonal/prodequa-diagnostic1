
import React, { useState } from 'react';
import { LeadData } from '../types';

interface StepFormProps {
  onSubmit: (data: LeadData) => void;
  onBack: () => void;
}

export const StepForm: React.FC<StepFormProps> = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState<LeadData>({
    email: '',
    whatsapp: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-10 text-center">
        <div className="w-20 h-20 bg-white/5 rounded-full mx-auto flex items-center justify-center text-4xl mb-4 robot-float border border-white/10">🤖</div>
        <h2 className="text-3xl font-extrabold text-white mb-2 leading-tight">
          Protocolo de Identificación
        </h2>
        <p className="text-white/50 text-sm max-w-xs mx-auto">
          Darky necesita tus credenciales de tripulante para procesar los datos de la misión.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-sm mx-auto">
        <div className="space-y-5">
          <div className="relative">
            <label className="block text-[9px] font-bold text-[#00f2ff] uppercase mb-2 tracking-[0.3em] opacity-80">
              Canal de Enlace (Email Corporativo)
            </label>
            <input
              required
              type="email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:border-[#00f2ff] focus:ring-1 focus:ring-[#00f2ff]/20 outline-none transition-all placeholder:text-white/20"
              placeholder="piloto@empresa.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div className="relative">
            <label className="block text-[9px] font-bold text-white/40 uppercase mb-2 tracking-[0.3em]">
              Telemetría Móvil (WhatsApp - Opcional)
            </label>
            <input
              type="tel"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:border-[#00f2ff] focus:ring-1 focus:ring-[#00f2ff]/20 outline-none transition-all placeholder:text-white/20"
              placeholder="+51 999 999 999"
              value={formData.whatsapp}
              onChange={e => setFormData({...formData, whatsapp: e.target.value})}
            />
          </div>
        </div>

        <div className="pt-8 flex flex-col items-center gap-5">
          <button
            type="submit"
            className="w-full bg-[#00f2ff] hover:bg-[#00d8e4] text-[#030712] px-8 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_0_25px_rgba(0,242,255,0.4)] hover:scale-[1.02]"
          >
            ACTIVAR COMANDOS
          </button>
          <button 
            type="button"
            onClick={onBack}
            className="text-white/20 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
          >
            Abortar Protocolo
          </button>
        </div>
      </form>
    </div>
  );
};
