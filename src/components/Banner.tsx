"use client";
import { useEffect, useState } from "react";

export default function Banner() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.15); //
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* IMAGEM + PARALLAX */}
      <div
        className="absolute inset-0 will-change-transform transition-transform duration-100"
        style={{
          transform: `translate3d(0, ${offset}px, 0) scale(1.08)`,
        }}
      >
        <img
          src="/foto_servico.jpg"
          alt="Instituto Milla"
          className="w-full h-full object-cover"
        />

        {/* Overlay Premium */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.55),rgba(0,0,0,0.75))]" />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 text-center px-6 max-w-5xl">


        {/* Título */}
        <h1 className="text-5xl md:text-7xl lg:text-[84px] font-light mt-12 leading-[1.05]">
          Cuidado integrativo
          <br />
          com excelência
        </h1>

        {/* Linha dourada */}
        <div className="w-20 h-[1px] bg-[#C6A75E] mx-auto mt-12 opacity-80"></div>

        {/* Texto */}
        <p className="mt-12 max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
          Atendimento humanizado e terapias integrativas que promovem
          resultados consistentes com acolhimento, ciência e responsabilidade.
        </p>

        {/* Botões */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="#contato"
            className="px-14 py-5 bg-white text-black tracking-[0.25em] uppercase text-xs transition-all duration-500 hover:bg-[#C6A75E] hover:text-white"
          >
            Agendar Consulta
          </a>

          <a
            href="#sobre"
            className="px-14 py-5 border border-white/60 text-white tracking-[0.25em] uppercase text-xs transition-all duration-500 hover:bg-white hover:text-black"
          >
            Conheça o Instituto
          </a>

        </div>
      </div>
    </section>
  );
}
