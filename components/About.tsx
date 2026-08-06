const credentials = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Formación",
    desc: "Licenciada en Psicología · Universidad Católica Silva Henríquez",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Enfoque terapéutico",
    desc: "Terapia Cognitivo-Conductual (TCC) — con respaldo científico sólido",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Registro",
    desc: "Inscrita en el Registro Nacional de Prestadores Individuales de Salud",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: "Sello personal",
    desc: "Metodología ordenada, estructurada y centrada en la persona",
  },
];

const enfoques = [
  { label: "Cognitivo-Conductual", color: "bg-blush text-terracotta-accessible" },
  { label: "Terapia Individual", color: "bg-sage-light text-sage-accessible" },
  { label: "Ansiedad y Autoestima", color: "bg-blush text-terracotta-accessible" },
  { label: "Desarrollo Personal", color: "bg-sage-light text-sage-accessible" },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-24 bg-cream"
      aria-labelledby="sobre-mi-titulo"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-sm tracking-widest text-sage-accessible uppercase mb-3 block">
            Conóceme
          </span>
          <h2
            id="sobre-mi-titulo"
            className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-4"
          >
            Sobre mí
          </h2>
          <div className="divider-sage" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Texto */}
          <div className="reveal reveal-delay-1">
            <p className="font-sans text-base text-graphite leading-relaxed mb-6">
              Soy psicóloga egresada de la Universidad Católica Silva Henríquez,
              con una profunda vocación por el acompañamiento emocional y el
              bienestar de las personas. Desde mis inicios en la carrera me
              destaqué por ser ordenada, metódica y comprometida — cualidades
              que hoy pongo al servicio de cada proceso terapéutico.
            </p>
            <p className="font-sans text-base text-graphite leading-relaxed mb-6">
              Mi trabajo se basa en la Terapia Cognitivo-Conductual (TCC),
              un enfoque con amplio respaldo científico que nos permite trabajar
              de manera estructurada, identificando los pensamientos, emociones
              y conductas que pueden estar afectando tu día a día. Atiendo
              temáticas como ansiedad, autoestima, dificultades relacionales
              y desarrollo personal.
            </p>
            <p className="font-sans text-base text-graphite leading-relaxed mb-10">
              Aunque estoy en los inicios de mi carrera profesional, traigo
              conmigo una formación sólida y ganas genuinas de acompañarte.
              Creo en construir un vínculo terapéutico de confianza, donde
              puedas expresarte libremente y avanzar a tu propio ritmo.
            </p>

            {/* Enfoques */}
            <div>
              <p className="font-sans text-sm font-semibold text-ink mb-4 uppercase tracking-wider">
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
            <div className="bg-sage-accessible text-white rounded-3xl p-8 relative overflow-hidden">
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
              <p className="font-sans text-sm text-white/90">— Nathaniel Branden</p>
            </div>

            {/* Credenciales */}
            <div className="bg-white rounded-3xl p-8 border border-sage-light shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-ink mb-6">
                Formación y credenciales
              </h3>
              <ul className="space-y-5" role="list">
                {credentials.map((cred, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center text-sage shrink-0"
                      aria-hidden="true"
                    >
                      {cred.icon}
                    </span>
                    <div>
                      <p className="font-sans text-sm font-semibold text-ink">
                        {cred.title}
                      </p>
                      <p className="font-sans text-sm text-graphite">
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
