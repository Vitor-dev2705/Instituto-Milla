"use client";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Convênios", href: "#convenios" },
  { label: "Método", href: "#metodo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const serviceItems = [
  { label: "Fisioterapia Motora", href: "#servicos" },
  { label: "Fisioterapia Geriátrica", href: "#servicos" },
  { label: "Fisioterapia Pélvica", href: "#servicos" },
  { label: "Nutrição Clínica", href: "#servicos" },
  { label: "Psicologia", href: "#servicos" },
  { label: "Drenagem Linfática", href: "#servicos" },
  { label: "Liberação Miofascial", href: "#servicos" },
  { label: "Ventosaterapia", href: "#servicos" },
  { label: "Corrente Russa", href: "#servicos" },
  { label: "Kinesio Taping", href: "#servicos" },
  { label: "Acupuntura", href: "#servicos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueia o scroll da página quando o menu mobile está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-white shadow-sm py-4" : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex flex-col items-center select-none">
          <h1
            className={`text-[11px] tracking-[0.75em] font-light transition duration-500 ${
              scrolled ? "text-[#1C1C1C]" : "text-[#1C1C1C]" 
              /* Alterado para manter preto sempre, ou troque para 'text-white' se seu fundo for escuro */
            }`}
          >
            <a href="#home">INSTITUTO MILLA</a>
          </h1>
          <div className="w-12 h-[1px] bg-[#C6A75E] mt-4 opacity-80"></div>
        </div>

        {/* MENU DESKTOP */}
        <nav
          className={`hidden xl:flex gap-14 text-[11px] tracking-[0.4em] uppercase ${
            scrolled ? "text-[#6B6B6B]" : "text-[#1C1C1C]"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative group hover:text-[#C6A75E] transition"
            >
              {item.label}
              <span className="absolute left-0 -bottom-3 w-0 h-[1px] bg-[#C6A75E] transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(true)}
          className={`xl:hidden text-[11px] tracking-[0.5em] font-medium transition duration-500 ${
            scrolled ? "text-[#1C1C1C]" : "text-[#1C1C1C]"
          }`}
        >
          MENU
        </button>
      </div>

      {/* MOBILE MENU FULLSCREEN */}
      {menuOpen && (
        <div className="xl:hidden fixed inset-0 bg-[#F7F5F2] z-[200] flex flex-col items-center justify-center overflow-y-auto">
          {/* Botão de fechar reforçado */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-10 right-10 text-2xl text-[#1C1C1C] p-2"
          >
            ✕
          </button>

          <nav className="flex flex-col items-center gap-10 text-[14px] tracking-[0.4em] uppercase text-[#1C1C1C]">
            {navItems.map((item, index) => {
              if (item.label === "Serviços") {
                return (
                  <div key={index} className="flex flex-col items-center">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="hover:text-[#C6A75E] transition flex items-center gap-3"
                    >
                      {item.label}
                      <span className={`text-[10px] transition-transform ${servicesOpen ? "rotate-90" : ""}`}>
                        →
                      </span>
                    </button>

                    {servicesOpen && (
                      <div className="flex flex-col items-center gap-4 mt-6 bg-white/50 p-8 w-screen max-w-xs rounded-sm transition-all animate-in fade-in slide-in-from-top-4">
                        {serviceItems.map((service, i) => (
                          <a
                            key={i}
                            href={service.href}
                            onClick={() => {
                              setMenuOpen(false);
                              setServicesOpen(false);
                            }}
                            className="text-[10px] tracking-[0.2em] text-[#6B6B6B] hover:text-[#C6A75E] text-center"
                          >
                            {service.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#C6A75E] transition"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}