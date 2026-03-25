"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden bg-black">
      {/* Camada de Fundo - Imagem Inteira, Nítida e Sem Blur */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/foto.jpg" // Certifique-se de que este arquivo existe na pasta public
          alt="Instituto Milla Interior" 
          fill
          priority // Garante o carregamento imediato (LCP)
          quality={100} // Máxima qualidade permitida pelo Next.js
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay de Cinema (Essencial para o Menu Branco aparecer) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.5),rgba(0,0,0,0.8))]" />
      </div>

      {/* Camada de Conteúdo Central (Gêmea da imagem) */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <header className="space-y-10">
          
          <div className="overflow-hidden">
            <span 
              className="text-[10px] md:text-xs tracking-[0.8em] uppercase text-white font-medium block mb-4"
              data-aos="fade-down"
              
            >
              Fisioterapia & Terapias Integrativas
            </span>
          </div>

          <h1 
            className="font-playfair text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-[1.05]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A arte <span className="hidden md:inline">de cuidar</span> <br />
            <span className="italic font-light text-[#C6A75E]">com excelência</span>
          </h1>

          <div 
            className="w-16 h-[1px] bg-[#C6A75E]/60 mx-auto" 
            data-aos="width" 
            data-aos-delay="400"
          />

          <p 
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-light leading-relaxed tracking-wide"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Atendimento humanizado que une tecnologia e acolhimento <br className="hidden md:block" />
            para transformar a sua qualidade de vida com acolhimento e ciência.
          </p>
        </header>

        <footer 
          className="mt-16 flex flex-col sm:flex-row justify-center gap-6"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {/* Botão idêntico ao da imagem (Fundo Oval) */}
          <a 
            href="#contato" 
            className="px-14 py-5 bg-white text-black tracking-[0.25em] uppercase text-xs transition-all duration-500 hover:bg-[#C6A75E] hover:text-white rounded-full shadow-2xl"
          >
            Agendar Consulta
          </a>
        </footer>
      </div>

      {/* Indicador de Rolagem Sutil (Opcional, mas dá o tom de luxo) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20">
        <div className="w-[1px] h-12 bg-white" />
      </div>
    </section>
  );
}