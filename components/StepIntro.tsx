
import React from 'react';

interface StepIntroProps {
  onStart: () => void;
}

export const StepIntro: React.FC<StepIntroProps> = ({ onStart }) => {
  return (
    <div className="text-center">
      <div className="mb-8 flex justify-center">
        <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full"></div>
            <span className="text-8xl robot-float relative z-10">🤖</span>
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
        Hola, soy <span className="text-[#00f2ff]">Darky</span>
      </h1>
      <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
        Estoy aquí para escanear los sistemas de tu eCommerce. Juntos detectaremos qué "módulo de propulsión" necesitas para escalar sin límites operativos.
      </p>
      
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={onStart}
          className="bg-[#00f2ff] hover:bg-[#00d8e4] text-[#030712] px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] transform hover:-translate-y-1 active:translate-y-0"
        >
          Iniciar Protocolo de Diagnóstico
        </button>
        <div className="flex items-center gap-2 text-white/30 text-[9px] font-bold uppercase tracking-[0.2em]">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          Escaneo Seguro Habilitado
        </div>
      </div>
    </div>
  );
};
