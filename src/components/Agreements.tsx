"use client";

import { Shield } from "lucide-react";

export default function Agreements() {
  const convenios = [
    "Afeb", "Afeb Brasal", "Allianz saúde", "Asse DF Saúde", "Bacen", "Care Plus",
    "Casec (Codevasf)", "Casembrapa", "Codevasf", "Conab", "E-Vida", "Embratel Telos",
    "Fapes (Bndes)", "Fascal", "Gama", "Inas GDF", "Notedrame", "Onint", "Petrobrás",
    "PF Saúde (Polícia Federal)", "Plan Assist", "Postal Saúde", "Pro-Social-TRF1",
    "Proasa", "Real Grandeza", "Samo / Agmp", "Saúde caixa", "Saúde Petrobras",
    "Serpro", "Sis", "Stf-Med", "Stm (Pals / Jmu)", "T.R.F", "Telos (AMAP)",
    "TJDFT TRT STF", "TRE", "TRT Região", "Unafiscor"
  ];

  return (
    <section id="convenios" className="bg-white py-24 md:py-32 px-6 overflow-hidden relative">
      <div className="absolute top-12 right-12 opacity-[0.02] pointer-events-none hidden lg:block">
        <Shield size={400} strokeWidth={0.3} />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.5em] uppercase text-[#8C877F] block" data-aos="fade-up">
            Facilidades
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-light mt-6 text-[#1C1C1C]" data-aos="fade-up" data-aos-delay="200">
            Convênios <span className="italic text-[#C6A75E]">Atendidos</span>
          </h2>
          <div className="w-16 h-[1px] bg-[#C6A75E] mx-auto mt-8" data-aos="zoom-in" data-aos-delay="400" />
          <p className="mt-6 text-base text-[#8C877F] font-light max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="500">
            Trabalhamos com os principais convênios de Brasília para facilitar seu acesso ao cuidado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-8">
          {convenios.sort().map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 20, 400)}
              className="flex items-center gap-3 py-3 px-3 border-b border-[#F7F5F2] hover:border-[#C6A75E]/40 hover:bg-[#F5F1EA]/50 transition-all duration-300 group cursor-default rounded-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] opacity-30 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
              <span className="text-sm text-[#6B6B6B] group-hover:text-[#1C1C1C] transition-colors font-light tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-xs text-[#8C877F] italic" data-aos="fade-in" data-aos-delay="600">
          * Para outros convênios ou informações sobre reembolsos, entre em contato conosco.
        </p>
      </div>
    </section>
  );
}
