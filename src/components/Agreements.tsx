"use client";

export default function Agreements() {
  const convenios = [
    "Afeb", "Afeb Brasal", "Allianz saúde", "Asse DF Saúde", "Bacen", "Care Plus", 
    "Casec (Codevasf)", "Casembrapa", "Codevasf", "Conab", "E-Vida", "Embratel Telos", 
    "Fapes (Bndes)", "Fascal", "Gama", "Inas GDF", "Notedrame", "Onint", "Petrobrás",
    "PF Saúde (Polícia Federal)", "Plan Assist", "Postal Saúde", "Pro-Social-TRF1", 
    "Proasa", "Real Grandeza", "Samo / Agmp", "Saúde caixa", "Saúde Petrobras", 
    "Serpro", "Sis", "Stf-Med", "Stm (Pals / Jmu)", "T.R.F", "Telos (AMAP)", 
    "TJDFT TRT STF", "TRE", "TRT Região", "Unafiscor"
  ];

  return (
    <section id="convenios" className="bg-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.5em] uppercase text-[#8C877F] block" data-aos="fade-up">
            Facilidades
          </span>
          <h2 className="text-4xl md:text-5xl font-light mt-6 text-[#1C1C1C]" data-aos="fade-up" data-aos-delay="200">
            Convênios Atendidos
          </h2>
          <div className="w-16 h-[1px] bg-[#C6A75E] mx-auto mt-8" data-aos="zoom-in" data-aos-delay="400"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8">
          {convenios.sort().map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 20} 
              className="flex items-center gap-3 py-2 border-b border-[#F7F5F2] hover:border-[#C6A75E] transition-colors duration-300 group cursor-default">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E] opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-sm text-[#6B6B6B] group-hover:text-[#1C1C1C] transition-colors font-light tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-xs text-[#8C877F] italic" data-aos="fade-in" data-aos-delay="800">
          * Para outros convênios ou informações sobre reembolsos, entre em contato conosco.
        </p>
      </div>
    </section>
  );
}