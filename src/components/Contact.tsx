"use client";

import React, { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const nome = formData.get("nome");
    const especialidade = formData.get("especialidade");
    const mensagem = formData.get("mensagem");

    const textoWhatsApp = `*Novo Agendamento - Instituto Milla*
    
*Paciente:* ${nome}
*Interesse:* ${especialidade}
*Mensagem:* ${mensagem}`;

    const mensagemCodificada = encodeURIComponent(textoWhatsApp);
    const numeroTelefone = "5561982057395";
    
    setTimeout(() => {
      window.open(`https://wa.me/${numeroTelefone}?text=${mensagemCodificada}`, "_blank");
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contato" className="bg-[#F7F5F2] py-20 md:py-32 px-6 scroll-mt-32">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Lado do Texto */}
        <div className="space-y-8" data-aos="fade-right">
          <div>
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C6A75E] font-bold block mb-4">Contato</span>
            <h2 className="text-4xl md:text-6xl font-playfair font-light text-[#1C1C1C] leading-tight">
              Inicie sua jornada <br /> de <span className="italic">bem-estar.</span>
            </h2>
          </div>
          <p className="text-[#6B6B6B] font-light text-lg leading-relaxed max-w-md">
            Selecione o serviço desejado. Nossa equipe especializada entrará em contato para alinhar os detalhes do seu atendimento.
          </p>
          <div className="pt-6 border-t border-[#1C1C1C]/5 space-y-4 text-[#1C1C1C] font-medium tracking-tight">
            <p className="text-sm opacity-60 uppercase tracking-widest text-[9px]">Localização e Contato</p>
            <p className="text-lg">(61) 98205-7395</p>
            <p className="text-lg underline underline-offset-4 decoration-[#C6A75E]">institutomilla@gmail.com</p>
          </div>
        </div>

        {/* Lado do Formulário */}
        <div className="bg-white p-8 md:p-14 shadow-2xl relative" data-aos="fade-left">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="relative">
                <label className="text-[9px] tracking-[0.2em] uppercase text-[#8C877F] font-bold">Nome Completo</label>
                <input name="nome" type="text" required placeholder="Ex: Maria Silva" className="w-full bg-transparent border-b border-[#EAE7E2] py-3 focus:outline-none focus:border-[#C6A75E] transition-colors" />
              </div>
              <div className="relative">
                <label className="text-[9px] tracking-[0.2em] uppercase text-[#8C877F] font-bold">Serviço de Interesse</label>
                <select 
                  name="especialidade" 
                  required 
                  className="w-full bg-transparent border-b border-[#EAE7E2] py-3 focus:outline-none focus:border-[#C6A75E] transition-colors appearance-none cursor-pointer text-[#1C1C1C]"
                >
                  <option value="" className="text-gray-400">Selecione o serviço...</option>
                  <optgroup label="Fisioterapia">
                    <option value="Fisioterapia Motora">Fisioterapia Motora</option>
                    <option value="Fisioterapia Geriátrica">Fisioterapia Geriátrica</option>
                    <option value="Fisioterapia Pélvica">Fisioterapia Pélvica</option>
                  </optgroup>
                  <optgroup label="Saúde e Bem-estar">
                    <option value="Nutrição Clínica">Nutrição Clínica</option>
                    <option value="Psicologia">Psicologia</option>
                    <option value="Acupuntura">Acupuntura</option>
                  </optgroup>
                  <optgroup label="Terapias Corporais">
                    <option value="Drenagem Linfática">Drenagem Linfática</option>
                    <option value="Liberação Miofascial">Liberação Miofascial</option>
                    <option value="Ventosaterapia">Ventosaterapia</option>
                    <option value="Corrente Russa">Corrente Russa</option>
                    <option value="Kinesio Taping">Kinesio Taping</option>
                  </optgroup>
                  <option value="Outros">Outros / Dúvidas</option>
                </select>
                {/* Ícone de seta customizado para o select */}
                <div className="absolute right-0 bottom-4 pointer-events-none text-[#C6A75E] text-[10px]">▼</div>
              </div>
            </div>

            <div className="relative">
              <label className="text-[9px] tracking-[0.2em] uppercase text-[#8C877F] font-bold">Como podemos ajudar?</label>
              <textarea name="mensagem" rows={3} required placeholder="Fale brevemente sobre o que você busca..." className="w-full bg-transparent border-b border-[#EAE7E2] py-3 focus:outline-none focus:border-[#C6A75E] transition-all resize-none"></textarea>
            </div>

            <button type="submit" disabled={loading} className="w-full py-6 bg-[#1C1C1C] text-white tracking-[0.4em] uppercase text-[10px] font-bold transition-all hover:bg-[#C6A75E] disabled:opacity-50 flex justify-center items-center gap-4">
              {loading ? "Processando..." : "Solicitar Agendamento"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}