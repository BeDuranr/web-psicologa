"use client";

import Link from "next/link";

const footerLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Agendar consulta", href: "#agendar" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#2C2C2C] text-white"
      role="contentinfo"
      aria-label="Pie de página"
    >
      {/* CTA Banner */}
      <div className="bg-[#6B9E7A] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
            ¿Lista/o para comenzar tu proceso?
          </h2>
          <p className="font-sans text-base text-white/80 mb-8 max-w-xl mx-auto">
            El primer paso es el más importante. Agenda tu consulta hoy y
            empieza a construir el bienestar que mereces.
          </p>
          <button
            onClick={() => handleNavClick("#agendar")}
            className="bg-white text-[#6B9E7A] font-sans font-semibold px-10 py-4 rounded-full hover:bg-[#F8F5F0] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            aria-label="Ir a la sección de agendamiento"
          >
            Agendar ahora
          </button>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-xl font-semibold text-white">
                Araceli Aguilera Jorquera
              </span>
              <br />
              <span className="font-sans text-xs tracking-widest text-[#6B9E7A] uppercase">
                Psicóloga
              </span>
            </div>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Acompañamiento psicológico con enfoque cognitivo-conductual.
              Un espacio seguro, ordenado y cercano para tu bienestar emocional.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-sans text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Navegación
            </h3>
            <nav aria-label="Navegación del pie de página">
              <ul className="space-y-3" role="list">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="font-sans text-sm text-white/60 hover:text-[#6B9E7A] transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-sans text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contacto
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#6B9E7A] mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:psicoaraceliaguilera@gmail.com"
                  className="font-sans text-sm text-white/60 hover:text-[#6B9E7A] transition-colors duration-200"
                  aria-label="Enviar correo electrónico"
                >
                  psicoaraceliaguilera@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#6B9E7A] mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-sans text-sm text-white/60">
                  Atención 100% online · Chile
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#6B9E7A] mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-sans text-sm text-white/60">
                  Lunes a viernes · 9:00 – 20:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-white/40 text-center md:text-left">
              © {new Date().getFullYear()} Araceli Aguilera Jorquera · Todos los derechos reservados
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacidad"
                className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors"
                aria-label="Política de privacidad"
              >
                Política de privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
