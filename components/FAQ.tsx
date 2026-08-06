"use client";

import { useState } from "react";
import { CONTACT_EMAIL, MAILTO_URL } from "@/lib/constants";

const faqs = [
  {
    question: "¿Cómo funciona la terapia online?",
    answer:
      "Las sesiones se realizan por videollamada en una plataforma segura y confidencial. Solo necesitas una conexión a internet estable, un dispositivo con cámara y un lugar tranquilo. Es tan efectiva como la presencial y tiene la ventaja de que puedes conectarte desde cualquier lugar.",
  },
  {
    question: "¿Cómo sé si la psicoterapia es para mí?",
    answer:
      "Si estás pasando por un momento difícil, sientes que tus emociones te superan, tienes dificultades en tus relaciones, o simplemente quieres conocerte mejor y crecer personalmente, la terapia puede ser una herramienta poderosa. La primera consulta está diseñada precisamente para evaluar si podemos trabajar juntos.",
  },
  {
    question: "¿Con qué frecuencia son las sesiones?",
    answer:
      "Generalmente las sesiones son semanales o quincenales, dependiendo de las necesidades de cada persona. Al inicio solemos recomendar sesiones semanales para crear un ritmo terapéutico. A medida que el proceso avanza, la frecuencia puede ajustarse.",
  },
  {
    question: "¿Qué pasa si necesito cancelar o reagendar?",
    answer:
      "Entiendo que pueden surgir imprevistos. Puedes cancelar o reagendar con al menos 24 horas de anticipación sin costo. Cancelaciones con menos de 24 horas pueden tener un cargo del 50% del valor de la sesión. Puedes gestionar todo esto directamente desde el sistema de agendamiento.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 bg-sage-light"
      aria-labelledby="faq-titulo"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="font-sans text-sm tracking-widest text-sage-accessible uppercase mb-3 block">
            Resuelve tus dudas
          </span>
          <h2
            id="faq-titulo"
            className="font-serif text-4xl md:text-5xl font-semibold text-ink mb-4"
          >
            Preguntas frecuentes
          </h2>
          <div className="divider-sage" />
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`reveal bg-white rounded-2xl shadow-sm border-2 transition-colors duration-300 ${
                  isOpen ? "border-sage" : "border-sage-medium"
                }`}
              >
                {/* Pregunta */}
                <button
                  className="w-full flex items-center justify-between px-7 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span
                    className={`font-serif text-lg font-medium pr-4 ${
                      isOpen ? "text-sage-accessible" : "text-ink"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-sage text-white rotate-180"
                        : "bg-sage-light text-sage"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      width="16"
                      height="16"
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
                </button>

                {/* Respuesta — animación solo con maxHeight */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.45s ease",
                  }}
                >
                  <p className="font-sans text-sm text-graphite leading-relaxed px-7 pb-6 pt-1">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 reveal">
          <p className="font-sans text-sm text-graphite mb-4">
            ¿Tienes otra pregunta? Escríbeme directamente.
          </p>
          <a
            href={MAILTO_URL}
            className="font-sans text-sm font-semibold text-sage-accessible hover:underline transition-all"
            aria-label="Enviar correo con preguntas"
          >
            {CONTACT_EMAIL} →
          </a>
        </div>
      </div>
    </section>
  );
}
