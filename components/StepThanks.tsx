
import React from 'react';
import { RESULTS } from '../constants';
import { ServiceCategory } from '../types';

interface StepThanksProps {
  category: ServiceCategory;
}

export const StepThanks: React.FC<StepThanksProps> = ({ category }) => {
  const profile = RESULTS[category];

  return (
    <div className="animate-in fade-in zoom-in-95 duration-1000 text-center">
      <div className="mb-10">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>
          <span className="text-8xl robot-float relative z-10 block">🤖</span>
        </div>
      </div>

      <div className="space-y-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
          ¡Gracias por confiar en la <span className="text-[#00f2ff]">analítica de Darky</span>!
        </h2>
        <p className="text-white/60 text-lg max-w-md mx-auto leading-relaxed">
          Hemos iniciado el protocolo de enlace. Mientras un especialista revisa tu diagnóstico, te invito a explorar más sobre nuestras misiones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto mb-10">
        <button
          onClick={() => window.open(profile.casesUrl, '_blank')}
          className="flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 hover:border-[#00f2ff]/40 hover:bg-white/10 text-white p-8 rounded-[2rem] font-bold transition-all group"
        >
          <span className="text-4xl group-hover:scale-125 transition-transform duration-500">📁</span>
          <div className="text-center">
            <div className="text-[10px] font-black text-[#00f2ff] uppercase tracking-widest mb-1 opacity-60">Triunfos de Misión</div>
            <div className="text-lg">Casos de Éxito</div>
          </div>
        </button>
        
        <button
          onClick={() => window.open(profile.serviceUrl, '_blank')}
          className="flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 hover:border-[#00f2ff]/40 hover:bg-white/10 text-white p-8 rounded-[2rem] font-bold transition-all group"
        >
          <span className="text-4xl group-hover:scale-125 transition-transform duration-500">🌐</span>
          <div className="text-center">
            <div className="text-[10px] font-black text-[#00f2ff] uppercase tracking-widest mb-1 opacity-60">Especificaciones</div>
            <div className="text-lg">Página del Servicio</div>
          </div>
        </button>
      </div>

      <button 
        onClick={() => window.location.reload()}
        className="text-white/20 hover:text-white text-[10px] font-bold uppercase tracking-[0.4em] transition-colors"
      >
        Finalizar Sesión de Usuario
      </button>
    </div>
  );
};
