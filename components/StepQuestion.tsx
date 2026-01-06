
import React, { useState } from 'react';
import { Question } from '../types';

interface StepQuestionProps {
  question: Question;
  onNext: (answer: string | string[]) => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
}

export const StepQuestion: React.FC<StepQuestionProps> = ({ question, onNext, onBack, currentStep, totalSteps }) => {
  const [selected, setSelected] = useState<string | string[]>(question.type === 'multiple' ? [] : '');

  const handleSelect = (id: string) => {
    if (question.type === 'single') {
      setSelected(id);
      setTimeout(() => onNext(id), 400);
    } else {
      setSelected((prev) => {
        const arr = prev as string[];
        if (arr.includes(id)) return arr.filter(i => i !== id);
        return [...arr, id];
      });
    }
  };

  const isSelected = (id: string) => {
    if (Array.isArray(selected)) return selected.includes(id);
    return selected === id;
  };

  return (
    <div className="mt-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-xl robot-float">🤖</div>
        <h2 className="text-2xl font-bold text-white leading-tight">
          {question.title}
        </h2>
      </div>

      {question.subtitle && (
        <p className="text-white/50 text-sm mb-8 border-l-2 border-[#00f2ff]/30 pl-4">{question.subtitle}</p>
      )}

      <div className="grid grid-cols-1 gap-4 mt-8">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className={`
              flex items-start text-left p-6 rounded-2xl border transition-all group relative overflow-hidden
              ${isSelected(option.id) 
                ? 'border-[#00f2ff] bg-[#00f2ff]/5 shadow-[0_0_15px_rgba(0,242,255,0.1)]' 
                : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10'}
            `}
          >
            {isSelected(option.id) && (
                <div className="absolute top-0 left-0 h-full w-1 bg-[#00f2ff]"></div>
            )}
            <span className="text-3xl mr-5 opacity-80 group-hover:scale-110 transition-transform">
              {option.icon}
            </span>
            <div className="flex-1">
              <div className={`font-bold text-lg mb-1 ${isSelected(option.id) ? 'text-[#00f2ff]' : 'text-white'}`}>
                {option.label}
              </div>
              <div className="text-sm text-white/50 leading-relaxed">
                {option.description}
              </div>
            </div>
            {isSelected(option.id) && (
                <div className="ml-2 text-[#00f2ff]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-12 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="text-white/30 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          Regresar
        </button>
        
        {question.type === 'multiple' && (
          <button
            disabled={(selected as string[]).length === 0}
            onClick={() => onNext(selected)}
            className="bg-[#00f2ff] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#00d8e4] text-[#030712] px-10 py-4 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(0,242,255,0.3)]"
          >
            Siguiente Protocolo
          </button>
        )}
      </div>
    </div>
  );
};
