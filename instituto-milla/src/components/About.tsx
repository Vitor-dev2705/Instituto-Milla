

export default function Sobre() {
  return (
    <>
      <section id="sobre" className="bg-[#EFEDE9] py-40 md:py-52 px-8">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-32 items-center">
          {/* IMAGEM */}
          <div className="relative">
            <img
              src="/foto_servico.jpg"
              alt="Instituto Milla"
              className="w-full h-[650px] object-cover rounded-sm shadow-[0_40px_80px_rgba(0,0,0,0.06)]"
            />
          </div>

          {/* TEXTO */}
          <div className="max-w-[560px]">
            <span className="text-xs tracking-[0.6em] uppercase text-[#9C958C]">
              Sobre
            </span>

            <h2 className="text-5xl md:text-6xl font-light mt-10 leading-[1.1] text-[#1C1C1C]">
              Uma abordagem integrativa
              <br />
              centrada no cuidado completo
            </h2>

            <div className="w-20 h-[1px] bg-[#C6A75E] mt-12"></div>

            <p className="mt-14 text-lg text-[#6B6B6B] leading-relaxed">
              Nosso instituto nasceu com a proposta de oferecer um cuidado
              profundo e personalizado, unindo ciência, escuta ativa e
              acompanhamento contínuo para promover saúde de forma integral.
            </p>

            <p className="mt-8 text-lg text-[#6B6B6B] leading-relaxed">
              Cada atendimento é pensado de maneira estratégica, respeitando
              a individualidade e proporcionando uma experiência acolhedora,
              sofisticada e transformadora.
            </p>
          </div>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE DE ATENDIMENTO */}
    </>
  );
}