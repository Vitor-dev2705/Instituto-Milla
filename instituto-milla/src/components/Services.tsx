import Link from "next/link";

export default function Services() {
  const services = [
    {
      slug: "fisioterapia-motora",
      title: "Fisioterapia Motora",
      description:
        "Reabilitação dos movimentos com foco em funcionalidade, autonomia e recuperação segura.",
    },
    {
      slug: "fisioterapia-geriatrica",
      title: "Fisioterapia Geriátrica",
      description:
        "Cuidados especializados para a terceira idade, promovendo mobilidade e qualidade de vida.",
    },
    {
      slug: "fisioterapia-pelvica",
      title: "Fisioterapia Pélvica",
      description:
        "Tratamento das disfunções do assoalho pélvico com abordagem técnica e acolhedora.",
    },
    {
      slug: "nutricao-clinica",
      title: "Nutrição Clínica",
      description:
        "Planejamento alimentar estratégico para equilíbrio metabólico e saúde integral.",
    },
    {
      slug: "psicologia",
      title: "Psicologia",
      description:
        "Acompanhamento emocional humanizado para fortalecimento e desenvolvimento pessoal.",
    },
    {
      slug: "drenagem-linfatica",
      title: "Drenagem Linfática",
      description:
        "Estimulação da circulação e redução de edemas com técnica especializada.",
    },
    {
      slug: "liberacao-miofascial",
      title: "Liberação Miofascial",
      description:
        "Alívio de tensões musculares e melhora da mobilidade de forma eficaz.",
    },
    {
      slug: "ventosaterapia",
      title: "Ventosaterapia",
      description:
        "Terapia complementar que estimula a circulação e promove equilíbrio corporal.",
    },
    {
      slug: "corrente-russa",
      title: "Corrente Russa",
      description:
        "Fortalecimento muscular e reabilitação através de estimulação elétrica controlada.",
    },
    {
      slug: "kinesio-taping",
      title: "Kinesio Taping",
      description:
        "Bandagem terapêutica para suporte muscular, estabilidade e alívio da dor.",
    },
    {
      slug: "acupuntura",
      title: "Acupuntura",
      description:
        "Técnica milenar que promove equilíbrio energético e controle da dor.",
    },
  ];

  return (
    <section
      id="servicos"
      className="bg-[#F5F1EA] py-40 md:py-48 px-6"
    >
      <div className="max-w-[1300px] mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.6em] uppercase text-[#8C877F]">
            Especialidades
          </span>

          <h2 className="text-5xl md:text-6xl font-light mt-10 text-[#1C1C1C] leading-[1.1]">
            Cuidado completo
            <br />
            e personalizado
          </h2>

          <div className="w-20 h-[1px] bg-[#C6A75E] mx-auto mt-12"></div>
        </div>

        {/* GRID PREMIUM */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 mt-28">

          {services.map((service, i) => (
            <Link
              key={i}
              href={`/servicos/${service.slug}`}
              className="group relative bg-white p-12 
                         border border-[#EAE7E2]
                         transition-all duration-500
                         hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)]
                         hover:-translate-y-2"
            >


              <h3 className="text-2xl font-light text-[#1C1C1C] mt-6 
                             transition-all duration-400 
                             group-hover:text-[#C6A75E]">
                {service.title}
              </h3>

              <p className="mt-6 text-[#6B6B6B] leading-relaxed">
                {service.description}
              </p>

              {/* Linha animada inferior */}
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C6A75E] 
                              transition-all duration-500 group-hover:w-full"></div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
