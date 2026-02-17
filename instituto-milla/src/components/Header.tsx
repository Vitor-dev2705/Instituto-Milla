"use client";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Método", href: "#metodo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const serviceItems = [
  { label: "Fisioterapia Motora", href: "/servicos/fisioterapia-motora" },
  { label: "Fisioterapia Geriátrica", href: "/servicos/fisioterapia-geriatrica" },
  { label: "Fisioterapia Pélvica", href: "/servicos/fisioterapia-pelvica" },
  { label: "Nutrição Clínica", href: "/servicos/nutricao" },
  { label: "Psicologia", href: "/servicos/psicologia" },
  { label: "Drenagem Linfática", href: "/servicos/drenagem-linfatica" },
  { label: "Liberação Miofascial", href: "/servicos/liberacao-miofascial" },
  { label: "Ventosaterapia", href: "/servicos/ventosaterapia" },
  { label: "Corrente Russa", href: "/servicos/corrente-russa" },
  { label: "Kinesio Taping", href: "/servicos/kinesio-taping" },
  { label: "Acupuntura", href: "/servicos/acupuntura" },
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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-7 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex flex-col items-center select-none">
          <h1
            className={`text-[11px] tracking-[0.75em] font-light transition duration-500 ${
              scrolled ? "text-[#1C1C1C]" : "text-white"
            }`}
          >
            <button id="#home">INSTITUTO MILLA</button>
          </h1>
          <div className="w-12 h-[1px] bg-[#C6A75E] mt-4 opacity-80"></div>
        </div>

        {/* MENU DESKTOP */}
        <nav
          className={`hidden xl:flex gap-20 text-[11px] tracking-[0.4em] uppercase ${
            scrolled ? "text-[#6B6B6B]" : "text-white"
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
          className={`xl:hidden text-[11px] tracking-[0.5em] transition duration-500 ${
            scrolled ? "text-[#1C1C1C]" : "text-white"
          }`}
        >
          MENU
        </button>
      </div>

      {/* MOBILE MENU FULLSCREEN */}
      {menuOpen && (
        <div className="xl:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-10 text-[13px] tracking-[0.4em] uppercase text-[#1C1C1C]">
          {/* BOTÃO DE FECHAR NO TOPO */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-lg font-semibold text-[#1C1C1C] hover:text-[#C6A75E] transition"
          >
            ✕
          </button>

          {navItems.map((item, index) => {
            if (item.label === "Serviços") {
              return (
                <div key={index} className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="hover:text-[#C6A75E] transition duration-300 flex items-center gap-2"
                  >
                    {item.label}
                    <span
                      className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-90" : "rotate-0"
                      }`}
                    >
                      →
                    </span>
                  </button>

                  {servicesOpen && (
                    <div className="flex flex-col gap-2 mt-2">
                      {serviceItems.map((service, i) => (
                        <a
                          key={i}
                          href={service.href}
                          onClick={() => {
                            setMenuOpen(false);
                            setServicesOpen(false);
                          }}
                          className="text-[11px] tracking-[0.3em] text-[#6B6B6B] hover:text-[#C6A75E] transition duration-300"
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
                className="hover:text-[#C6A75E] transition duration-300"
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}