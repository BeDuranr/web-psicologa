"use client";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Primera Consulta",
    subtitle: "Evaluación inicial",
    duration: "60 min",
    price: "$15.000",
    color: "bg-[#EAF4ED]",
    accent: "text-[#6B9E7A]",
    border: "border-[#C8E0CF]",
    tag: "Ideal para comenzar",
    tagColor: "bg-[#6B9E7A] text-white",
    features: [
      "Evaluación de motivo de consulta",
      "Historia personal y contexto de vida",
      "Definición de objetivos terapéuticos",
      "Sin compromiso de continuidad",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Sesión Individual",
    subtitle: "Proceso terapéutico",
    duration: "50 min",
    price: "$20.000",
    color: "bg-[#6B9E7A]",
    accent: "text-white",
    border: "border-transparent",
    tag: "Más solicitado",
    tagColor: "bg-[#C4826A] text-white",
    featured: true,
    features: [
      "Seguimiento de objetivos terapéuticos",
      "Técnicas cognitivo-conductuales (TCC)",
      "Identificación de patrones de pensamiento",
      "Herramientas prácticas para el día a día",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 bg-[#EAF4ED]"
      aria-labelledby="servicios-titulo"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-sm tracking-widest text-[#6B9E7A] uppercase mb-3 block">
            Lo que ofrezco
          </span>
          <h2
            id="servicios-titulo"
            className="font-serif text-4xl md:text-5xl font-semibold text-[#2C2C2C] mb-4"
          >
            Servicios
          </h2>
          <div className="divider-sage" />
          <p className="font-sans text-base text-[#5A5A5A] mt-6 max-w-xl mx-auto">
            Atención 100% online a través de videollamada. Todas las sesiones
            son confidenciales y en un ambiente cálido y profesional.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`reveal relative rounded-3xl p-8 border-2 ${service.color} ${service.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                service.featured ? "shadow-2xl scale-[1.02]" : "shadow-md"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              aria-label={`Servicio: ${service.title}`}
            >
              {/* Tag */}
              <span
                className={`absolute top-6 right-6 ${service.tagColor} font-sans text-xs font-semibold px-3 py-1 rounded-full`}
              >
                {service.tag}
              </span>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${
                  service.featured ? "bg-white/20" : "bg-white"
                } flex items-center justify-center mb-6 ${service.accent}`}
                aria-hidden="true"
              >
                {service.icon}
              </div>

              {/* Título */}
              <h3
                className={`font-serif text-2xl font-semibold mb-1 ${
                  service.featured ? "text-white" : "text-[#2C2C2C]"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`font-sans text-sm mb-6 ${
                  service.featured ? "text-white/70" : "text-[#8A8A8A]"
                }`}
              >
                {service.subtitle}
              </p>

              {/* Precio y duración */}
              <div className="flex items-end gap-3 mb-8">
                <span
                  className={`font-serif text-4xl font-semibold ${
                    service.featured ? "text-white" : "text-[#2C2C2C]"
                  }`}
                >
                  {service.price}
                </span>
                <span
                  className={`font-sans text-sm mb-1 ${
                    service.featured ? "text-white/70" : "text-[#8A8A8A]"
                  }`}
                >
                  / {service.duration}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8" role="list">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        service.featured ? "text-white/80" : "text-[#6B9E7A]"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={`font-sans text-sm leading-snug ${
                        service.featured ? "text-white/90" : "text-[#5A5A5A]"
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#agendar"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#agendar")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full block text-center font-sans text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 ${
                  service.featured
                    ? "bg-white text-[#6B9E7A] hover:bg-white/90"
                    : "bg-[#6B9E7A] text-white hover:bg-opacity-90"
                }`}
                aria-label={`Agendar ${service.title}`}
              >
                Agendar ahora
              </a>
            </article>
          ))}
        </div>

        {/* Nota de pago */}
        <p className="text-center font-sans text-sm text-[#8A8A8A] mt-10 reveal">
          🏦 Pago por transferencia bancaria.
        </p>
      </div>
    </section>
  );
}
