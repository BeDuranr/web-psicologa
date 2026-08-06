import ScrollLink from "./ScrollLink";

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
    color: "bg-sage-light",
    accent: "text-sage-accessible",
    border: "border-sage-medium",
    tag: "Ideal para comenzar",
    tagColor: "bg-sage-accessible text-white",
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
    color: "bg-sage-accessible",
    accent: "text-white",
    border: "border-transparent",
    tag: "Más solicitado",
    tagColor: "bg-terracotta-accessible text-white",
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
      className="py-24 bg-sage-light"
      aria-labelledby="servicios-titulo"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-sm tracking-widest text-sage-accessible uppercase mb-3 block">
            Lo que ofrezco
          </span>
          <h2
            id="servicios-titulo"
            className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-4"
          >
            Servicios
          </h2>
          <div className="divider-sage" />
          <p className="font-sans text-base text-graphite mt-6 max-w-xl mx-auto">
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
                  service.featured ? "text-white" : "text-ink"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`font-sans text-sm mb-6 ${
                  service.featured ? "text-white/90" : "text-ash"
                }`}
              >
                {service.subtitle}
              </p>

              {/* Precio y duración */}
              <div className="flex items-end gap-3 mb-8">
                <span
                  className={`font-serif text-4xl font-semibold ${
                    service.featured ? "text-white" : "text-ink"
                  }`}
                >
                  {service.price}
                </span>
                <span
                  className={`font-sans text-sm mb-1 ${
                    service.featured ? "text-white/90" : "text-ash"
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
                        service.featured ? "text-white/80" : "text-sage"
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
                        service.featured ? "text-white/90" : "text-graphite"
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <ScrollLink
                href="#agendar"
                className={`w-full block text-center font-sans text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 ${
                  service.featured
                    ? "bg-white text-sage-accessible hover:bg-white/90"
                    : "bg-sage-accessible text-white hover:bg-opacity-90"
                }`}
                ariaLabel={`Agendar ${service.title}`}
              >
                Agendar ahora
              </ScrollLink>
            </article>
          ))}
        </div>

        {/* Nota de pago */}
        <p className="flex items-center justify-center gap-2 font-sans text-sm text-ash mt-10 reveal">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>
          Pago por transferencia bancaria.
        </p>
      </div>
    </section>
  );
}
