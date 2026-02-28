"use client";

import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#B8B5AF] pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div data-aos="fade-up">
            <h3 className="text-white text-xs tracking-[0.5em] uppercase mb-8">Instituto Milla</h3>
            <p className="text-sm leading-relaxed mb-8 pr-4">
              Referência em cuidado integrativo, unindo ciência e humanização para promover sua saúde e bem-estar de forma completa.
            </p>
            <div className="flex gap-5">
              <a 
                href="https://www.instagram.com/institutomilla/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#C6A75E] transition-colors flex items-center gap-2 group"
              >
                <Instagram size={18} strokeWidth={1.5} />
                <span className="text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">@institutomilla</span>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-white text-xs tracking-[0.5em] uppercase mb-8">Navegação</h3>
            <ul className="space-y-4 text-sm uppercase tracking-widest text-[11px]">
              <li><a href="#sobre" className="hover:text-[#C6A75E] transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-[#C6A75E] transition-colors">Especialidades</a></li>
              <li><a href="#metodo" className="hover:text-[#C6A75E] transition-colors">Metodologia</a></li>
              <li><a href="#contato" className="hover:text-[#C6A75E] transition-colors">Agendamento</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-white text-xs tracking-[0.5em] uppercase mb-8">Contato</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <Phone size={16} className="text-[#C6A75E] shrink-0" />
                <span>(61) 98205-7395</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={16} className="text-[#C6A75E] shrink-0" />
                <span className="break-all">institutomilla@gmail.com</span>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={16} className="text-[#C6A75E] shrink-0" />
                <span>Atendimento com horário marcado</span>
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-white text-xs tracking-[0.5em] uppercase mb-8">Localização</h3>
            <div className="flex items-start gap-4 text-sm leading-relaxed">
              <MapPin size={16} className="text-[#C6A75E] shrink-0" />
              <span>
                Brasília, DF<br />
                Sua Localização Aqui, Edifício X<br />
                Sala 000 — CEP 00000-000
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-[#666]">
          <p>© {new Date().getFullYear()} Instituto Milla. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}