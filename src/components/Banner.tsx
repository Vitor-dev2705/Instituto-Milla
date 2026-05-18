"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Banner() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/foto.jpg"
          alt="Instituto Milla Interior"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center animate-zoomSlow"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.4),rgba(0,0,0,0.75))]" />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[300px] h-[300px] bg-[#C6A75E]/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[200px] h-[200px] bg-[#C6A75E]/[0.04] rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mt-10 md:mt-0">
        <header className="space-y-6 md:space-y-10">

          <h1
            className="font-playfair text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-[1.1] md:leading-[1.05]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A arte de cuidar <br />
            <span className="italic font-light text-[#C6A75E]">com excelência</span>
          </h1>

          <div
            className="w-14 md:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/80 to-transparent mx-auto"
            data-aos="zoom-in"
            data-aos-delay="400"
          />

          <p
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed tracking-wide px-2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Atendimento humanizado que une tecnologia e acolhimento
            para transformar a sua qualidade de vida.
          </p>
        </header>

        <footer
          className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 sm:px-0"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <a
            href="#contato"
            className="group relative px-10 sm:px-14 py-4 sm:py-5 bg-white text-black tracking-[0.25em] uppercase text-[11px] sm:text-xs transition-all duration-500 hover:bg-[#C6A75E] hover:text-white rounded-full shadow-2xl overflow-hidden text-center"
          >
            <span className="relative z-10">Agendar Consulta</span>
            <div className="absolute inset-0 bg-[#C6A75E] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
          <a
            href="#servicos"
            className="px-10 sm:px-14 py-4 sm:py-5 border border-white/30 text-white tracking-[0.25em] uppercase text-[11px] sm:text-xs transition-all duration-500 hover:border-[#C6A75E] hover:text-[#C6A75E] rounded-full backdrop-blur-sm text-center"
          >
            Nossos Serviços
          </a>
        </footer>
      </div>

      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-[8px] md:text-[9px] tracking-[0.4em] uppercase text-white/30">Scroll</span>
        <ChevronDown size={14} className="text-white/30" strokeWidth={1} />
      </div>
    </section>
  );
}
