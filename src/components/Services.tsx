"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    { slug: "fisioterapia_motora", title: "Fisioterapia Motora", description: "Reabilitação dos movimentos com foco em funcionalidade, autonomia e recuperação segura." },
    { slug: "fisioterapia_geriatrica", title: "Fisioterapia Geriátrica", description: "Cuidados especializados para a terceira idade, promovendo mobilidade e qualidade de vida." },
    { slug: "fisioterapia_pelvica", title: "Fisioterapia Pélvica", description: "Tratamento das disfunções do assoalho pélvico com abordagem técnica e acolhedora." },
    { slug: "nutricao", title: "Nutrição Clínica", description: "Planejamento alimentar estratégico para equilíbrio metabólico e saúde integral." },
    { slug: "psicologia", title: "Psicologia", description: "Acompanhamento emocional humanizado para fortalecimento e desenvolvimento pessoal." },
    { slug: "drenagem_linfatica", title: "Drenagem Linfática", description: "Estimulação da circulação e redução de edemas com técnica especializada." },
    { slug: "liberacao", title: "Liberação Miofascial", description: "Alívio de tensões musculares e melhora da mobilidade de forma eficaz." },
    { slug: "ventosaterapia", title: "Ventosaterapia", description: "Terapia complementar que estimula a circulação e promove equilíbrio corporal." },
    { slug: "corrente_russa", title: "Corrente Russa", description: "Fortalecimento muscular e reabilitação através de estimulação elétrica controlada." },
    { slug: "kinesio_taping", title: "Kinesio Taping", description: "Bandagem terapêutica para suporte muscular, estabilidade e alívio da dor." },
    { slug: "acupuntura", title: "Acupuntura", description: "Técnica milenar que promove equilíbrio energético e controle da dor." },
  ];

  return (
    <section id="servicos" className="bg-[#F5F1EA] pt-12 pb-32 md:pt-20 md:pb-48 px-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F5F1EA] to-transparent pointer-events-none z-10" />

      <div className="max-w-[1300px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-[#8C877F] block" data-aos="fade-up">
            Especialidades
          </span>
          <h2 className="text-4xl md:text-6xl font-light mt-6 text-[#1C1C1C] leading-[1.1] font-playfair" data-aos="fade-up" data-aos-delay="200">
            Cuidado completo
            <br />
            e <span className="italic text-[#C6A75E]">personalizado</span>
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mt-8" data-aos="fade-right" data-aos-delay="400" />
          <p className="mt-8 text-base md:text-lg text-[#8C877F] font-light max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="500">
            Cada especialidade é conduzida com excelência técnica e sensibilidade humana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-20">
          {services.map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group bg-white border border-[#EAE7E2] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-3 overflow-hidden relative cursor-default"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={`/${service.slug}.jpeg`}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={14} className="text-[#C6A75E]" strokeWidth={2} />
                </div>
              </div>

              <div className="p-8 md:p-10">
                <h3 className="text-lg md:text-xl font-light text-[#1C1C1C] transition-all duration-500 group-hover:text-[#C6A75E] font-playfair">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-[#8C877F] leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#C6A75E] to-[#C6A75E]/40 transition-all duration-700 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
