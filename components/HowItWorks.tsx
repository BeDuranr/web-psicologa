"use client";

const steps = [
  {
    number: "01",
    title: "Elige tu horario",
    description:
      "Revisa el calendario de disponibilidad y selecciona el día y hora que mejor se adapte a tu rutina.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Confirma tu consulta",
    description:
      "Completa un breve formulario y realiza el pago seguro. Recibirás una confirmación por correo con el enlace de videollamada.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Conéctate online",
    description:
      "El día de tu sesión, entra al enlace desde tu computador, tablet o celular. Sin instalaciones ni complicaciones.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Comienza tu proceso",
    description:
      "Juntos evaluaremos tus necesidades y definiremos los objetivos. El cambio comienza con el primer paso.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 bg-[#F8F5F0]"
      aria-labelledby="como-funciona-titulo"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-sm tracking-widest text-[#6B9E7A] uppercase mb-3 block">
            Simple y sin complicaciones
          </span>
          <h2
            id="como-funciona-titulo"
            className="font-serif text-4xl md:text-5xl font-semibold text-[#2C2C2C] mb-4"
          >
            Cómo funciona
          </h2>
          <div className="divider-sage" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Línea conectora (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-gradient-to-r from-[#C8E0CF] via-[#6B9E7A] to-[#C8E0CF]"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`reveal text-center group`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Número + icono */}
              <div className="relative inline-flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-white border-2 border-[#C8E0CF] rounded-full flex items-center justify-center text-[#6B9E7A] shadow-sm group-hover:border-[#6B9E7A] group-hover:shadow-md transition-all duration-300 relative z-10">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#6B9E7A] text-white rounded-full flex items-center justify-center font-sans text-xs font-bold z-20">
                  {step.number}
                </span>
              </div>

              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C] mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-[#5A5A5A] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <a
            href="#agendar"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#agendar")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
            aria-label="Agendar primera consulta ahora"
          >
            Agendar mi primera consulta
          </a>
        </div>
      </div>
    </section>
  );
}
