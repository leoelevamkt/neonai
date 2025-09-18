const metrics = [
  {
    value: "5k+",
    label: "Profissionais atendidos"
  },
  {
    value: "24h",
    label: "Entrega média"
  },
  {
    value: "4.9/5",
    label: "Avaliação média"
  },
  {
    value: "99%",
    label: "Satisfação pós-ajustes"
  }
];

export default function Metrics() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-neon hover:scale-105 transition-transform duration-300" data-aos="fade-right" data-aos-delay={index * 200} data-aos-duration="800">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-brand-cyan to-brand-pink bg-clip-text text-transparent mb-2">{metric.value}</div>
            <div className="text-gray-300 font-medium text-xs sm:text-sm lg:text-base">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
