"use client";

import { Phone, ClipboardList, Heart, Star } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Primeiro Contato",
    description: "Acolhimento desde a primeira mensagem, entendendo suas necessidades e expectativas.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Avaliação Completa",
    description: "Análise detalhada e personalizada para construir seu plano terapêutico ideal.",
  },
  {
    icon: Heart,
    number: "03",
    title: "Tratamento Integrado",
    description: "Protocolos de alta precisão com acompanhamento humanizado em cada sessão.",
  },
  {
    icon: Star,
    number: "04",
    title: "Resultado & Evolução",
    description: "Monitoramento contínuo da sua evolução, ajustando o caminho para o melhor resultado.",
  },
];

export default function Method() {
  return (
    <section
      id="metodo"
      className="bg-[#1C1C1C] py-32 md:py-44 px-6 overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,#C6A75E_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#C6A75E_0%,transparent_50%)]" />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <span
            className="text-xs tracking-[0.5em] uppercase text-[#C6A75E] block"
            data-aos="fade-up"
          >
            Método
          </span>

          <h2
            className="text-4xl md:text-6xl font-playfair font-light mt-8 leading-[1.1] text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Nossa abordagem
            <br />
            <span className="italic text-[#C6A75E]">integrativa</span>
          </h2>

          <div
            className="w-16 h-[1px] bg-[#C6A75E]/60 mx-auto mt-10"
            data-aos="zoom-in"
            data-aos-delay="400"
          />

          <p
            className="mt-10 text-lg text-white/50 leading-relaxed max-w-[640px] mx-auto font-light"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Trabalhamos com uma metodologia humanizada, focada na escuta ativa
            e planos terapêuticos individualizados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="group relative text-center p-8 lg:p-6 border border-white/[0.06] hover:border-[#C6A75E]/30 transition-all duration-700 hover:bg-white/[0.02]"
              >
                <div className="absolute top-4 right-4 text-[10px] tracking-[0.3em] text-white/10 font-light group-hover:text-[#C6A75E]/30 transition-colors duration-500">
                  {step.number}
                </div>

                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-[#C6A75E]/20 rounded-full group-hover:border-[#C6A75E]/50 group-hover:bg-[#C6A75E]/5 transition-all duration-500">
                  <Icon size={22} className="text-[#C6A75E]" strokeWidth={1.2} />
                </div>

                <h3 className="text-white text-sm tracking-[0.2em] uppercase font-light mb-4 group-hover:text-[#C6A75E] transition-colors duration-500">
                  {step.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed font-light">
                  {step.description}
                </p>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C6A75E] group-hover:w-full transition-all duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
