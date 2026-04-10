"use client";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CALCOM_USERNAME || "";
const CAL_EVENT = process.env.NEXT_PUBLIC_CALCOM_EVENT || "consulta";

export default function Booking() {
  const calUrl = `https://cal.com/${CAL_USERNAME}/${CAL_EVENT}?embed=true&theme=light&brandColor=%236B9E7A&layout=month_view`;

  return (
    <section
      id="agendar"
      className="py-24 bg-[#F8F5F0]"
      aria-labelledby="agendar-titulo"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="font-sans text-sm tracking-widest text-[#6B9E7A] uppercase mb-3 block">
            Da el primer paso
          </span>
          <h2
            id="agendar-titulo"
            className="font-serif text-4xl md:text-5xl font-semibold text-[#2C2C2C] mb-4"
          >
            Agenda tu consulta
          </h2>
          <div className="divider-sage" />
          <p className="font-sans text-base text-[#5A5A5A] mt-6 max-w-lg mx-auto">
            Selecciona el día y hora que prefieras. Recibirás una confirmación
            inmediata con el enlace de videollamada.
          </p>
        </div>

        {/* Beneficios rápidos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 reveal">
          {[
            { icon: "🔒", label: "100% confidencial" },
            { icon: "💻", label: "Sesión online" },
            { icon: "⚡", label: "Confirmación inmediata" },
            { icon: "🔄", label: "Reagenda fácilmente" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl px-4 py-4 flex items-center gap-3 border border-[#EAF4ED] shadow-sm"
            >
              <span className="text-xl" aria-hidden="true">{item.icon}</span>
              <span className="font-sans text-xs font-medium text-[#5A5A5A]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Cal.com iframe embed */}
        <div className="reveal bg-white rounded-3xl overflow-hidden shadow-lg border border-[#EAF4ED]">
          {CAL_USERNAME ? (
            <iframe
              src={calUrl}
              width="100%"
              height="700"
              frameBorder="0"
              title="Agenda una consulta con Araceli Aguilera"
              loading="lazy"
              style={{ display: "block" }}
            />
          ) : (
            // Fallback si no hay username configurado
            <div className="min-h-[400px] flex flex-col items-center justify-center p-12 text-center">
              <div className="w-16 h-16 bg-[#EAF4ED] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#6B9E7A]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="font-sans text-sm font-semibold text-[#2C2C2C] mb-2">
                Calendario no configurado
              </p>
              <p className="font-sans text-xs text-[#8A8A8A]">
                Agrega tu username de Cal.com en{" "}
                <code className="bg-[#EAF4ED] px-1 py-0.5 rounded text-[#6B9E7A]">
                  .env.local
                </code>
              </p>
            </div>
          )}
        </div>

        {/* Contacto alternativo */}
        <p className="text-center font-sans text-sm text-[#8A8A8A] mt-8 reveal">
          ¿Prefieres escribirme primero?{" "}
          <a
            href="mailto:psicoaraceliaguilera@gmail.com"
            className="text-[#6B9E7A] font-medium hover:underline"
          >
            psicoaraceliaguilera@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
