"use client";

import React, { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

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
    <section id="contato" className="bg-[#F7F5F2] py-20 md:py-32 px-6 scroll-mt-32 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(198,167,94,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
        <div className="space-y-8" data-aos="fade-right">
          <div>
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C6A75E] font-bold block mb-4">Contato</span>
            <h2 className="text-4xl md:text-6xl font-playfair font-light text-[#1C1C1C] leading-tight">
              Inicie sua jornada <br /> de <span className="italic text-[#C6A75E]">bem-estar.</span>
            </h2>
          </div>
          <p className="text-[#6B6B6B] font-light text-lg leading-relaxed max-w-md">
            Selecione o serviço desejado. Nossa equipe especializada entrará em contato para alinhar os detalhes do seu atendimento.
          </p>

          <div className="pt-6 border-t border-[#1C1C1C]/5 space-y-5">
            <p className="text-sm opacity-60 uppercase tracking-widest text-[9px] text-[#8C877F]">Localização e Contato</p>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 flex items-center justify-center border border-[#EAE7E2] group-hover:border-[#C6A75E] transition-colors rounded-full">
                <Phone size={16} className="text-[#C6A75E]" strokeWidth={1.5} />
              </div>
              <span className="text-lg text-[#1C1C1C] font-medium">(61) 98205-7395</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 flex items-center justify-center border border-[#EAE7E2] group-hover:border-[#C6A75E] transition-colors rounded-full">
                <Mail size={16} className="text-[#C6A75E]" strokeWidth={1.5} />
              </div>
              <span className="text-lg text-[#1C1C1C] font-medium underline underline-offset-4 decoration-[#C6A75E]/40">institutomilla@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 flex items-center justify-center border border-[#EAE7E2] group-hover:border-[#C6A75E] transition-colors rounded-full">
                <MapPin size={16} className="text-[#C6A75E]" strokeWidth={1.5} />
              </div>
              <span className="text-sm text-[#6B6B6B] font-light">Ed. Le Quartier - Águas Claras, Brasília - DF</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-14 shadow-[0_40px_80px_rgba(0,0,0,0.06)] relative" data-aos="fade-left">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C6A75E] via-[#C6A75E]/50 to-transparent" />

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="relative">
                <label className="text-[9px] tracking-[0.2em] uppercase text-[#8C877F] font-bold">Nome Completo</label>
                <input name="nome" type="text" required placeholder="Ex: Maria Silva" className="w-full bg-transparent border-b border-[#EAE7E2] py-3 focus:outline-none focus:border-[#C6A75E] transition-colors placeholder:text-[#C6A75E]/30" />
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
                <div className="absolute right-0 bottom-4 pointer-events-none text-[#C6A75E] text-[10px]">&#x25BC;</div>
              </div>
            </div>

            <div className="relative">
              <label className="text-[9px] tracking-[0.2em] uppercase text-[#8C877F] font-bold">Como podemos ajudar?</label>
              <textarea name="mensagem" rows={3} required placeholder="Fale brevemente sobre o que você busca..." className="w-full bg-transparent border-b border-[#EAE7E2] py-3 focus:outline-none focus:border-[#C6A75E] transition-all resize-none placeholder:text-[#C6A75E]/30" />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group w-full py-6 bg-[#1C1C1C] text-white tracking-[0.4em] uppercase text-[10px] font-bold transition-all duration-500 hover:bg-[#C6A75E] disabled:opacity-50 flex justify-center items-center gap-4 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {loading ? "Processando..." : "Solicitar Agendamento"}
                {!loading && <Send size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
