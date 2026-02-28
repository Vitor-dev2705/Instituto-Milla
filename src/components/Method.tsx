"use client";

export default function Method() {
  return (
    <section 
      id="metodo" 
      className="bg-[#F7F5F2] py-36 md:py-44 px-6 overflow-hidden"
    >
      <div className="max-w-[1000px] mx-auto text-center">

        {/* Label*/}
        <span 
          className="text-xs tracking-[0.5em] uppercase text-[#8C877F] block"
          data-aos="fade-up"
        >
          Método
        </span>

        {/* Título*/}
        <h2 
          className="text-4xl md:text-5xl font-light mt-8 leading-[1.15] text-[#1C1C1C]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Nossa abordagem integrativa
        </h2>

        {/* Linha dourada*/}
        <div 
          className="w-16 h-[1px] bg-[#C6A75E] mx-auto mt-10"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="800"
        ></div>

        {/* Texto*/}
        <p 
          className="mt-14 text-lg text-[#6B6B6B] leading-relaxed max-w-[720px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Trabalhamos com uma metodologia humanizada, focada na escuta ativa,
          avaliação personalizada e planos terapêuticos individualizados.
          Cada paciente recebe atenção única, garantindo um cuidado integral,
          estratégico e profundamente personalizado.
        </p>

      </div>
    </section>
  );
}