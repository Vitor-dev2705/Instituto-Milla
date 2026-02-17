export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-36 md:py-44 px-6">
      <div className="max-w-[900px] mx-auto text-center">

        {/* Label */}
        <span className="text-xs tracking-[0.5em] uppercase text-[#8C877F]">
          Depoimentos
        </span>

        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-light mt-8 text-[#1C1C1C] leading-[1.15]">
          Experiências de quem já passou por aqui
        </h2>

        {/* Linha dourada */}
        <div className="w-16 h-[1px] bg-[#C6A75E] mx-auto mt-10"></div>

        {/* Depoimento */}
        <div className="mt-20 relative">

          {/* Aspas decorativas */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] text-[#F1EEE9] font-serif select-none">
            “
          </span>

          <div className="bg-[#F7F5F2] px-12 py-16 md:px-20 md:py-20 shadow-[0_30px_60px_rgba(0,0,0,0.05)]">

            <p className="text-xl md:text-2xl italic text-[#6B6B6B] leading-relaxed relative z-10">
              O atendimento foi transformador. Desde o primeiro contato,
              senti acolhimento, profissionalismo e um cuidado genuíno
              com minha saúde.
            </p>

            <div className="mt-12">
              <p className="text-sm tracking-[0.4em] uppercase text-[#1C1C1C]">
                Ana Martins
              </p>
              <div className="w-10 h-[1px] bg-[#C6A75E] mx-auto mt-4"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
