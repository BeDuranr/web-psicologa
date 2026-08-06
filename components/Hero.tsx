"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollLink from "./ScrollLink";

interface HeroProps {
  imageSrc?: string;
}

export default function Hero({ imageSrc = "/foto-psicologa.jpg" }: HeroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-cream flex items-center overflow-hidden pt-20"
      aria-label="Sección principal"
    >
      {/* Fondo decorativo */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-sage-light rounded-bl-[80px] hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-32 h-32 bg-sage-medium rounded-full opacity-30 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-32 left-1/3 w-20 h-20 bg-blush rounded-full opacity-50 blur-xl"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Texto */}
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sage-light rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
            <span className="font-sans text-sm text-sage-accessible font-medium">
              Atención online · Chile
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-ink leading-tight mb-6">
            Un espacio{" "}
            <span className="text-sage-accessible italic">seguro</span>
            <br />
            para sanar
          </h1>

          <p className="font-sans text-lg text-graphite leading-relaxed mb-10 max-w-md">
            Acompañamiento psicológico con enfoque cognitivo-conductual.
            Juntos identificamos los patrones que te limitan y trabajamos
            hacia el bienestar que mereces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <ScrollLink
              href="#agendar"
              className="btn-primary text-center"
              ariaLabel="Agendar primera consulta"
            >
              Agendar primera consulta
            </ScrollLink>
            <ScrollLink
              href="#sobre-mi"
              className="btn-secondary text-center"
              ariaLabel="Conocer más sobre la psicóloga"
            >
              Conocer más
            </ScrollLink>
          </div>

          {/* Badge de enfoque */}
          <div className="mt-12 flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-sage-medium rounded-full px-4 py-2 shadow-sm">
              <span className="text-base" aria-hidden="true">🎓</span>
              <span className="font-sans text-sm text-graphite">
                Egresada <span className="font-semibold text-ink">UCSH</span> · Enfoque <span className="font-semibold text-sage-accessible">TCC</span>
              </span>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div
          className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Marco decorativo */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full border-2 border-sage-medium rounded-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -right-4 w-full h-full bg-sage-medium rounded-3xl opacity-30"
              aria-hidden="true"
            />

            {/* Imagen principal */}
            <div className="relative w-72 h-96 sm:w-80 sm:h-[440px] lg:w-96 lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt="Araceli Aguilera Jorquera, Psicóloga"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 animate-bounce"
        aria-hidden="true"
      >
        <span className="font-sans text-xs text-ash tracking-widest uppercase">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-sage"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
