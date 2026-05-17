"use client";

const stats = [
  { number: "11+", label: "Especialidades" },
  { number: "38+", label: "Convênios" },
  { number: "5.000+", label: "Vidas Transformadas" },
  { number: "100%", label: "Humanizado" },
];

export default function Stats() {
  return (
    <section className="relative z-20 -mt-16 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div
          className="bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)] grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#F5F1EA]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group py-10 md:py-14 px-6 text-center hover:bg-[#F5F1EA]/50 transition-all duration-500 relative"
            >
              <p className="font-playfair text-3xl md:text-4xl lg:text-5xl font-light text-[#C6A75E] group-hover:scale-105 transition-transform duration-500">
                {stat.number}
              </p>
              <p className="mt-3 text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8C877F] font-light">
                {stat.label}
              </p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C6A75E] group-hover:w-1/2 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
