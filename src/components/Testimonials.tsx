"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "O atendimento foi transformador. Desde o primeiro contato, senti acolhimento, profissionalismo e um cuidado genuíno com minha saúde.",
    name: "Ana Martins",
    role: "Paciente de Fisioterapia Pélvica",
  },
  {
    text: "Profissionais excepcionais e ambiente acolhedor. A equipe multidisciplinar fez toda diferença na minha recuperação pós-operatória.",
    name: "Carlos Eduardo",
    role: "Paciente de Fisioterapia Motora",
  },
  {
    text: "Encontrei no Instituto Milla o equilíbrio que buscava. O tratamento integrado de nutrição e psicologia mudou minha relação com a saúde.",
    name: "Mariana Costa",
    role: "Paciente de Nutrição e Psicologia",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="bg-[#F5F1EA] py-32 md:py-44 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(198,167,94,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <span
          className="text-xs tracking-[0.5em] uppercase text-[#8C877F] block"
          data-aos="fade-up"
        >
          Depoimentos
        </span>

        <h2
          className="text-4xl md:text-5xl font-playfair font-light mt-8 text-[#1C1C1C] leading-[1.15]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Experiências de quem já <br className="hidden md:block" />
          <span className="italic text-[#C6A75E]">passou por aqui</span>
        </h2>

        <div className="w-16 h-[1px] bg-[#C6A75E] mx-auto mt-10" data-aos="zoom-in" data-aos-delay="400" />

        <div className="mt-20 relative" data-aos="fade-up" data-aos-delay="600">
          <div className="flex items-center justify-center mb-8">
            <Quote size={40} className="text-[#C6A75E]/20" strokeWidth={1} />
          </div>

          <div className="min-h-[200px] flex items-center justify-center">
            <div key={current} className="animate-fadeUp">
              <p className="text-xl md:text-2xl italic text-[#6B6B6B] leading-relaxed max-w-[700px] mx-auto font-light">
                {testimonials[current].text}
              </p>

              <div className="mt-12">
                <p className="text-sm tracking-[0.4em] uppercase text-[#1C1C1C] font-medium">
                  {testimonials[current].name}
                </p>
                <p className="text-xs text-[#8C877F] mt-2 tracking-wide">
                  {testimonials[current].role}
                </p>
                <div className="w-10 h-[1px] bg-[#C6A75E] mx-auto mt-4" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 mt-14">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-[#EAE7E2] hover:border-[#C6A75E] hover:text-[#C6A75E] text-[#1C1C1C] transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    i === current ? "bg-[#C6A75E] w-6" : "bg-[#1C1C1C]/15 hover:bg-[#C6A75E]/50"
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-[#EAE7E2] hover:border-[#C6A75E] hover:text-[#C6A75E] text-[#1C1C1C] transition-all duration-300"
              aria-label="Próximo"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
