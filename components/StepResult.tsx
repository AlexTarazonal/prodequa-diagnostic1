
import React from 'react';
import { RESULTS } from '../constants';
import { ServiceCategory, LeadData } from '../types';

interface StepResultProps {
  primary: ServiceCategory;
  secondary?: ServiceCategory;
  leadData: LeadData;
  onFinish: () => void;
}

export const StepResult: React.FC<StepResultProps> = ({ primary, secondary, leadData, onFinish }) => {
  const profile = RESULTS[primary];

  const handlePrimaryAction = () => {
    window.open('https://prodequa.com/conversemos', '_blank');
    onFinish();
  };

  return (
    <div className="animate-in zoom-in-95 duration-1000">
      <div className="text-center mb-10 relative">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
        <div className="inline-block bg-[#00f2ff]/10 px-4 py-2 rounded-xl text-[#00f2ff] text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-[#00f2ff]/30">
          Informe de Diagnóstico Finalizado
        </div>
        <h2 className="text-3xl font-black text-white mb-2 tracking-tight">
          Estrategia para el Piloto <span className="text-[#00f2ff] uppercase">{leadData.email.split('@')[0]}</span>
        </h2>
        <p className="text-white/40 text-sm font-medium">
          Hemos identificado la solución técnica precisa para la escalabilidad de su eCommerce.
        </p>
      </div>

      {/* Result Card */}
      <div className="ai-card border-[#00f2ff]/20 rounded-[2.5rem] p-10 mb-8 relative overflow-hidden transition-all duration-500">
        <div className="flex items-center gap-5 mb-8 border-b border-white/5 pb-8 relative">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-4xl shadow-inner relative">
                <span className="relative z-10">{profile.icon}</span>
                <div className="absolute inset-0 bg-[#00f2ff]/5 blur-sm rounded-2xl"></div>
            </div>
            <div>
                <h4 className="text-[10px] font-black text-[#00f2ff] uppercase tracking-[0.2em] mb-1">Servicio Requerido:</h4>
                <p className="text-2xl font-bold text-white leading-tight">{profile.serviceName}</p>
            </div>
            <div className="absolute top-0 right-0 opacity-10 text-6xl">🤖</div>
        </div>
        
        <div className="space-y-8">
          <section className="relative">
            <div className="flex items-center gap-2 mb-3">
                <h4 className="text-[10px] font-bold text-[#00f2ff] uppercase tracking-widest leading-none">Diagnóstico de la misión:</h4>
            </div>
            <div className="pl-4 border-l-2 border-[#00f2ff]/30">
                <p className="text-white/90 leading-relaxed font-semibold text-xl italic">
                  "{profile.narrative}"
                </p>
            </div>
          </section>

          <section className="bg-white/5 p-6 rounded-3xl border border-white/5 shadow-inner">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Beneficio Principal:</h4>
            <p className="text-white/80 leading-relaxed font-bold text-lg">
              {profile.businessBenefit}
            </p>
          </section>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col items-center gap-8">
        <div className="w-full">
            <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-center">
              Establecer Conexión con el Comando
            </h3>
            <button
              onClick={handlePrimaryAction}
              className="group w-full bg-[#00f2ff] hover:bg-[#00d8e4] text-[#030712] px-10 py-7 rounded-3xl font-black text-2xl transition-all shadow-[0_0_35px_rgba(0,242,255,0.4)] transform hover:scale-[1.01] active:scale-100 flex items-center justify-center gap-4"
            >
              <span>{profile.cta}</span>
              <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="text-white/20 hover:text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-colors"
        >
          Reiniciar Escaneo de Sistemas
        </button>
      </div>
    </div>
  );
};
