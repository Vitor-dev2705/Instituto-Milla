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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.04)] py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        <div className="flex flex-col items-center select-none">
          <h1
            className={`text-[11px] tracking-[0.75em] font-light transition duration-500 ${
              scrolled ? "text-[#1C1C1C]" : "text-white"
            }`}
          >
            <a href="#home">INSTITUTO MILLA</a>
          </h1>
          <div className={`w-12 h-[1px] mt-3 transition-all duration-500 ${scrolled ? "bg-[#C6A75E]" : "bg-white/50"}`} />
        </div>

        <nav
          className={`hidden xl:flex gap-12 text-[10px] tracking-[0.35em] uppercase transition-colors duration-500 ${
            scrolled ? "text-[#6B6B6B]" : "text-white/80"
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="relative group hover:text-[#C6A75E] transition-colors duration-300"
            >
              {item.label}
              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-[#C6A75E] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(true)}
          className={`xl:hidden text-[11px] tracking-[0.5em] font-medium transition duration-500 ${
            scrolled ? "text-[#1C1C1C]" : "text-white"
          }`}
        >
          MENU
        </button>
      </div>

      {menuOpen && (
        <div className="xl:hidden fixed inset-0 bg-[#F7F5F2] z-[200] flex flex-col items-center justify-center overflow-y-auto">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent" />

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-10 right-10 w-10 h-10 flex items-center justify-center border border-[#EAE7E2] hover:border-[#C6A75E] text-[#1C1C1C] hover:text-[#C6A75E] transition-all rounded-full"
          >
            &#x2715;
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
                      <span className={`text-[10px] text-[#C6A75E] transition-transform duration-300 ${servicesOpen ? "rotate-90" : ""}`}>
                        &rarr;
                      </span>
                    </button>

                    {servicesOpen && (
                      <div className="flex flex-col items-center gap-4 mt-6 bg-white/70 backdrop-blur-sm p-8 w-screen max-w-xs rounded-sm border border-[#EAE7E2]">
                        {serviceItems.map((service, i) => (
                          <a
                            key={i}
                            href={service.href}
                            onClick={() => {
                              setMenuOpen(false);
                              setServicesOpen(false);
                            }}
                            className="text-[10px] tracking-[0.2em] text-[#6B6B6B] hover:text-[#C6A75E] text-center transition-colors"
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
