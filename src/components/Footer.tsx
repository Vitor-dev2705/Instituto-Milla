"use client";

import { Instagram, MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#B8B5AF] pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/20 to-transparent" />

      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          <div data-aos="fade-up">
            <h3 className="text-white text-xs tracking-[0.5em] uppercase mb-8 flex items-center gap-2">
              Instituto Milla
            </h3>
            <p className="text-sm leading-relaxed mb-8 pr-4">
              Referência em cuidado integrativo, unindo ciência e humanização para promover sua saúde e bem-estar de forma completa.
            </p>
            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/institutomilla/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#C6A75E] hover:bg-[#C6A75E]/10 text-white hover:text-[#C6A75E] transition-all duration-300 rounded-full"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-white text-xs tracking-[0.5em] uppercase mb-8">Navegação</h3>
            <ul className="space-y-4 text-sm uppercase tracking-widest text-[11px]">
              <li><a href="#sobre" className="hover:text-[#C6A75E] transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-[1px] bg-[#C6A75E] transition-all duration-300" />Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-[#C6A75E] transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-[1px] bg-[#C6A75E] transition-all duration-300" />Especialidades</a></li>
              <li><a href="#metodo" className="hover:text-[#C6A75E] transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-[1px] bg-[#C6A75E] transition-all duration-300" />Metodologia</a></li>
              <li><a href="#contato" className="hover:text-[#C6A75E] transition-colors inline-flex items-center gap-2 group"><span className="w-0 group-hover:w-3 h-[1px] bg-[#C6A75E] transition-all duration-300" />Agendamento</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-white text-xs tracking-[0.5em] uppercase mb-8">Contato</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-center gap-4">
                <Phone size={14} className="text-[#C6A75E] shrink-0" />
                <span>(61) 98205-7395</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={14} className="text-[#C6A75E] shrink-0" />
                <span className="break-all">institutomilla@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={14} className="text-[#C6A75E] shrink-0" />
                <span>Horário marcado</span>
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-white text-xs tracking-[0.5em] uppercase mb-8">Localização</h3>
            <div className="flex items-start gap-4 text-sm leading-relaxed">
              <MapPin size={14} className="text-[#C6A75E] shrink-0 mt-1" />
              <span>
                Brasília, DF<br />
                Ed. Le Quartier - Av. Pau Brasil, L. 10 - Águas Claras, 71926-000
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-[#666]">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Instituto Milla. Feito com <Heart size={10} className="text-[#C6A75E] inline" fill="#C6A75E" /> em Brasília.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
