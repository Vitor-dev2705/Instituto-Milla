"use client";
import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-[#F5F1EA] pt-24 pb-4 md:pt-40 md:pb-8 lg:pt-52 lg:pb-12 px-6 sm:px-12 overflow-hidden relative">
      
      <div className="absolute -right-20 top-1/4 opacity-[0.03] pointer-events-none select-none hidden 2xl:block">
        <span className="font-playfair text-[25vw] leading-none text-[#1C1C1C] tracking-tighter">Milla</span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <div 
            className="lg:col-span-5 relative w-full group" 
            data-aos="fade-right" 
            data-aos-duration="1500"
          >
            <div className="absolute -inset-6 border-[0.5px] border-[#C6A75E]/40 translate-x-4 translate-y-4 pointer-events-none z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
            
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
              <Image 
                src="/foto_about.jpg" 
                alt="Instituto Milla Interior" 
                fill
                className="object-cover scale-105 transition-transform duration-[15s] ease-out group-hover:scale-100"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-[#332F2A]/5 mix-blend-multiply" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 text-center lg:text-left">
            
            <header className="space-y-6 mb-12">
              <div className="flex items-center justify-center lg:justify-start gap-4" data-aos="fade-up">
                <div className="w-10 h-[1px] bg-[#C6A75E]" />
                <span className="text-xs tracking-[0.7em] uppercase text-[#8C877F] font-light">
                  Nossa Essência
                </span>
              </div>

              <h2 
                className="font-playfair text-5xl md:text-7xl xl:text-[90px] font-light leading-[0.95] text-[#1C1C1C] tracking-tight" 
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                Onde a ciência <br />
                encontra o <br />
                <span className="italic text-[#C6A75E] pl-2">acolhimento.</span>
              </h2>
            </header>

            <div className="max-w-[540px] mx-auto lg:mx-0">
              <p 
                className="text-lg md:text-xl text-[#6B6B6B] font-light leading-relaxed mb-8"
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                O Instituto Milla nasceu para redefinir o conceito de saúde boutique. 
                Unimos protocolos de alta precisão com um ambiente desenhado para 
                o seu relaxamento profundo.
              </p>

              <p 
                className="text-base md:text-lg text-[#8C877F] font-light leading-relaxed italic mb-0"
                data-aos="fade-up" 
                data-aos-delay="500"
              >
                Aqui, cada paciente é uma história única, tratada com a exclusividade 
                que a sua vida exige e o seu corpo merece.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute left-8 bottom-4 hidden lg:block overflow-hidden pointer-events-none">
        <p className="text-[10px] tracking-[0.6em] text-[#1C1C1C]/30 uppercase [writing-mode:vertical-lr] rotate-180 font-light">
          Instituto Milla — Est. 2026
        </p>
      </div>
    </section>
  );
}