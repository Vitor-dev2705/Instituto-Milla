export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-[#F7F5F2] py-36 md:py-44 px-6 scroll-mt-32"
    >
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-32 items-start">

        {/* LADO ESQUERDO – TEXTO */}
        <div className="max-w-[480px]">

          <span className="text-xs tracking-[0.5em] uppercase text-[#8C877F]">
            Contato
          </span>

          <h2 className="text-4xl md:text-5xl font-light mt-8 leading-[1.15] text-[#1C1C1C]">
            Agende sua consulta
            <br />
            e dê o primeiro passo
          </h2>

          <div className="w-16 h-[1px] bg-[#C6A75E] mt-10"></div>

          <p className="mt-12 text-lg text-[#6B6B6B] leading-relaxed">
            Estamos à disposição para esclarecer dúvidas e orientar você
            sobre o melhor caminho para sua saúde e bem-estar.
          </p>

          <div className="mt-14 space-y-5 text-[#6B6B6B] text-sm tracking-wide">
            <p>Atendimento com horário marcado</p>
            <p>(61)982057395</p>
            <p>institutomilla@gmail.com</p>
          </div>

        </div>

        {/* LADO DIREITO – FORM */}
        <form className="flex flex-col gap-12">

          {/* Nome */}
          <div>
            <label className="text-xs tracking-[0.35em] uppercase text-[#8C877F]">
              Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome completo"
              className="mt-4 w-full bg-transparent border-b border-[#EAE7E2] py-4 text-[#1C1C1C] placeholder:text-[#B0AAA2] focus:outline-none focus:border-[#C6A75E] transition-all duration-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs tracking-[0.35em] uppercase text-[#8C877F]">
              Email
            </label>
            <input
              type="email"
              placeholder="seuemail@email.com"
              className="mt-4 w-full bg-transparent border-b border-[#EAE7E2] py-4 text-[#1C1C1C] placeholder:text-[#B0AAA2] focus:outline-none focus:border-[#C6A75E] transition-all duration-500"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label className="text-xs tracking-[0.35em] uppercase text-[#8C877F]">
              Mensagem
            </label>
            <textarea
              rows={4}
              placeholder="Escreva sua mensagem"
              className="mt-4 w-full bg-transparent border-b border-[#EAE7E2] py-4 text-[#1C1C1C] placeholder:text-[#B0AAA2] focus:outline-none focus:border-[#C6A75E] transition-all duration-500 resize-none"
            ></textarea>
          </div>

          {/* Botão */}
          <div className="pt-8">
            <button
              type="submit"
              className="px-14 py-5 bg-[#1C1C1C] text-white tracking-[0.3em] uppercase text-xs transition-all duration-500 hover:bg-[#C6A75E]"
            >
              Enviar Mensagem
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
