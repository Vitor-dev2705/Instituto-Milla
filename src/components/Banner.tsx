"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col lg:flex-row bg-[#F5F1EA] overflow-hidden">
      
      {/* Lado Esquerdo: Conteúdo e Tipografia */}
      <div className="flex-1 flex items-center justify-center px-8 py-20 lg:py-0 z-10">
        <div className="max-w-xl">
          <span 
            className="text-[10px] tracking-[0.6em] uppercase text-[#8C877F] block mb-8"
            data-aos="fade-right"
          >
            Saúde Integrativa
          </span>

          <h1 
            className="text-5xl md:text-7xl lg:text-[80px] font-light text-[#1C1C1C] leading-[1.1] tracking-tight mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Cuidado <br />
            <span className="italic text-[#C6A75E]">com excelência</span>
          </h1>

          <p 
            className="text-[#6B6B6B] text-lg font-light leading-relaxed mb-12 max-w-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Atendimento humanizado que une tecnologia e acolhimento para 
            transformar sua qualidade de vida.
          </p>

          <div data-aos="fade-up" data-aos-delay="600">
            <a 
              href="#contato" 
              className="inline-block px-12 py-5 bg-[#1C1C1C] text-white text-[10px] tracking-[0.4em] uppercase transition-all duration-500 hover:bg-[#C6A75E] hover:px-16"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>

      {/* Lado Direito: Imagem com Recorte Profissional */}
      <div className="flex-1 relative min-h-[50vh] lg:min-h-screen overflow-hidden group">
        <Image
          src="/foto_servico.jpg"
          alt="Instituto Milla"
          fill
          priority
          quality={100}
          className="object-cover transition-transform duration-[10s] group-hover:scale-110"
        />
        {/* Overlay lateral suave para transição entre foto e fundo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1EA] via-transparent to-transparent lg:block hidden w-32" />
      </div>

      {/* Detalhe Lateral Flutuante */}
      <div className="absolute left-8 bottom-12 hidden lg:block opacity-30">
        <div className="w-[1px] h-20 bg-[#1C1C1C] mx-auto mb-4" />
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#1C1C1C] rotate-180 [writing-mode:vertical-lr]">
          Est. 2026
        </p>
      </div>
    </section>
  );
}