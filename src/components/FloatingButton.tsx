"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingButton() {
  const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
  const whatsappLink = `https://wa.me/5561982057395?text=${message}`;

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-4">
      <div
        className="bg-white/95 backdrop-blur-sm px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-2xl rounded-br-none border border-[#EAE7E2] animate-bounce-slow"
        data-aos="fade-left"
        data-aos-delay="2000"
      >
        <span className="text-[#1C1C1C] text-[10px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">
          Agende sua consulta
        </span>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
      >
        <div className="absolute inset-0 bg-[#C6A75E] rounded-full animate-ping opacity-20" />

        <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#C6A75E] to-[#B8963F] text-white rounded-full shadow-[0_10px_30px_rgba(198,167,94,0.35)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_15px_40px_rgba(198,167,94,0.5)]">
          <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
        </div>
      </a>
    </div>
  );
}
