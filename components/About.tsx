"use client";

const credentials = [
  {
    icon: "🎓",
    title: "Formación",
    desc: "Licenciada en Psicología · Universidad Católica Silva Henríquez",
  },
  {
    icon: "🧠",
    title: "Enfoque terapéutico",
    desc: "Terapia Cognitivo-Conductual (TCC) — con respaldo científico sólido",
  },
  {
    icon: "📋",
    title: "Registro",
    desc: "Inscrita en el Registro Nacional de Prestadores Individuales de Salud",
  },
  {
    icon: "✨",
    title: "Sello personal",
    desc: "Metodología ordenada, estructurada y centrada en la persona",
  },
];

const enfoques = [
  { label: "Cognitivo-Conductual", color: "bg-[#F2E8E4] text-[#C4826A]" },
  { label: "Terapia Individual", color: "bg-[#EAF4ED] text-[#6B9E7A]" },
  { label: "Ansiedad y Autoestima", color: "bg-[#F2E8E4] text-[#C4826A]" },
  { label: "Desarrollo Personal", color: "bg-[#EAF4ED] text-[#6B9E7A]" },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-24 bg-[#F8F5F0]"
      aria-labelledby="sobre-mi-titulo"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-sm tracking-widest text-[#6B9E7A] uppercase mb-3 block">
            Conóceme
          </span>
          <h2
            id="sobre-mi-titulo"
            className="font-serif text-4xl md:text-5xl font-semibold text-[#2C2C2C] mb-4"
          >
            Sobre mí
          </h2>
          <div className="divider-sage" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Texto */}
          <div className="reveal reveal-delay-1">
            <p className="font-sans text-base text-[#5A5A5A] leading-relaxed mb-6">
              Soy psicóloga egresada de la Universidad Católica Silva Henríquez,
              con una profunda vocación por el acompañamiento emocional y el
              bienestar de las personas. Desde mis inicios en la carrera me
              destaqué por ser ordenada, metódica y comprometida — cualidades
              que hoy pongo al servicio de cada proceso terapéutico.
            </p>
            <p className="font-sans text-base text-[#5A5A5A] leading-relaxed mb-6">
              Mi trabajo se basa en la Terapia Cognitivo-Conductual (TCC),
              un enfoque con amplio respaldo científico que nos permite trabajar
              de manera estructurada, identificando los pensamientos, emociones
              y conductas que pueden estar afectando tu día a día. Atiendo
              temáticas como ansiedad, autoestima, dificultades relacionales
              y desarrollo personal.
            </p>
            <p className="font-sans text-base text-[#5A5A5A] leading-relaxed mb-10">
              Aunque estoy en los inicios de mi carrera profesional, traigo
              conmigo una formación sólida y ganas genuinas de acompañarte.
              Creo en construir un vínculo terapéutico de confianza, donde
              puedas expresarte libremente y avanzar a tu propio ritmo.
            </p>

            {/* Enfoques */}
            <div>
              <p className="font-sans text-sm font-semibold text-[#2C2C2C] mb-4 uppercase tracking-wider">
                Mis enfoques terapéuticos
              </p>
              <div className="flex flex-wrap gap-3">
                {enfoques.map((e) => (
                  <span
                    key={e.label}
                    className={`${e.color} font-sans text-sm font-medium px-4 py-2 rounded-full`}
                  >
                    {e.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tarjeta de cita + credenciales */}
          <div className="space-y-6 reveal reveal-delay-2">
            {/* Cita destacada */}
            <div className="bg-[#6B9E7A] text-white rounded-3xl p-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
                aria-hidden="true"
              />
              <svg
                className="w-10 h-10 text-white/40 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="font-serif text-xl font-light italic leading-relaxed mb-6">
                "El primer paso hacia el cambio es la conciencia. El segundo es
                la aceptación."
              </blockquote>
              <p className="font-sans text-sm text-white/70">— Nathaniel Branden</p>
            </div>

            {/* Credenciales */}
            <div className="bg-white rounded-3xl p-8 border border-[#EAF4ED] shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-[#2C2C2C] mb-6">
                Formación y credenciales
              </h3>
              <ul className="space-y-5" role="list">
                {credentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="text-2xl w-10 shrink-0 text-center"
                      aria-hidden="true"
                    >
                      {cred.icon}
                    </span>
                    <div>
                      <p className="font-sans text-sm font-semibold text-[#2C2C2C]">
                        {cred.title}
                      </p>
                      <p className="font-sans text-sm text-[#5A5A5A]">
                        {cred.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
