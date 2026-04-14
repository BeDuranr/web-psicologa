"use client";

import { useState } from "react";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CALCOM_USERNAME || "";
const CAL_EVENT = process.env.NEXT_PUBLIC_CALCOM_EVENT || "consulta";

const TRANSFER_DATA = [
  { label: "Nombre", value: "Araceli Alejandra Aguilera Jorquera" },
  { label: "RUT", value: "20.560.464-2" },
  { label: "Banco", value: "Bci / Banco Crédito e Inversiones" },
  { label: "Tipo de cuenta", value: "Cuenta Vista" },
  { label: "N° de cuenta", value: "777020560464" },
  { label: "Correo", value: "psicoaraceliaguilera@gmail.com" },
];

export default function Booking() {
  const calUrl = `https://cal.com/${CAL_USERNAME}/${CAL_EVENT}?embed=true&theme=light&brandColor=%236B9E7A&layout=month_view`;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = TRANSFER_DATA.map((d) => `${d.label}: ${d.value}`).join("\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

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
            Elige el día y hora que prefieras. Luego realiza la transferencia
            y envía el comprobante por WhatsApp para confirmar tu sesión.
          </p>
        </div>

        {/* Beneficios rápidos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 reveal">
          {[
            { icon: "🔒", label: "100% confidencial" },
            { icon: "💻", label: "Sesión online" },
            { icon: "🏦", label: "Pago por transferencia" },
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

        {/* Datos de pago */}
        <div className="reveal mb-10 bg-white rounded-3xl border border-[#EAF4ED] shadow-sm overflow-hidden">
          <div className="bg-[#EAF4ED] px-7 py-4 flex items-center gap-3">
            <svg className="w-5 h-5 text-[#6B9E7A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <p className="font-sans text-sm font-semibold text-[#2C2C2C]">
              Datos para la transferencia
            </p>
          </div>

          <div className="px-7 py-6">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mb-6">
              {TRANSFER_DATA.map((item) => (
                <div key={item.label}>
                  <p className="font-sans text-xs text-[#8A8A8A] uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-sans text-sm font-semibold text-[#2C2C2C]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#EAF4ED] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="font-sans text-sm text-[#5A5A5A]">
                Una vez realizada la transferencia, envía el comprobante por WhatsApp para confirmar tu hora.
              </p>
              <div className="shrink-0 flex items-center gap-3">
                {/* Botón copiar datos */}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 bg-white text-[#6B9E7A] font-sans text-sm font-semibold px-5 py-3 rounded-full border border-[#6B9E7A] hover:bg-[#EAF4ED] transition-colors duration-200 shadow-sm"
                  aria-label="Copiar datos de transferencia"
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      ¡Copiado!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copiar datos
                    </>
                  )}
                </button>
                {/* Botón WhatsApp */}
                <a
                  href="https://wa.me/56976143079"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white font-sans text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#20bd5a] transition-colors duration-200 shadow-sm"
                  aria-label="Enviar comprobante por WhatsApp"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar comprobante
                </a>
              </div>
            </div>
          </div>
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
