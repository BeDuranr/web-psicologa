import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad · Araceli Aguilera Jorquera",
  description:
    "Política de privacidad y tratamiento de datos personales del sitio web de Araceli Aguilera Jorquera, Psicóloga.",
};

const sections = [
  {
    title: "1. ¿Quién es responsable de tus datos?",
    content: `La responsable del tratamiento de los datos personales recopilados a través de este sitio web es Araceli Aguilera Jorquera, Psicóloga, con atención 100% online en Chile. Puedes contactarla directamente a través del correo electrónico psicoaraceliaguilera@gmail.com para cualquier consulta relacionada con tus datos personales.`,
  },
  {
    title: "2. ¿Qué datos se recopilan?",
    content: `Al agendar una consulta a través de este sitio, la plataforma Cal.com solicita información básica de contacto como tu nombre completo, dirección de correo electrónico y, opcionalmente, un número de teléfono. No se recopilan datos de salud en el formulario de agendamiento. La información clínica compartida durante las sesiones es tratada con absoluta confidencialidad conforme a las normas deontológicas del ejercicio de la psicología en Chile.`,
  },
  {
    title: "3. ¿Para qué se usan tus datos?",
    content: `Los datos recopilados al momento de agendar se utilizan exclusivamente para coordinar la consulta: confirmar la reserva, enviar recordatorios por correo electrónico y facilitar el enlace de videollamada. No se utilizarán para fines comerciales, publicidad ni serán compartidos con terceros salvo obligación legal.`,
  },
  {
    title: "4. ¿Quién almacena los datos?",
    content: `El agendamiento de consultas funciona a través de Cal.com, una plataforma externa con sus propios estándares de seguridad y política de privacidad (disponible en cal.com/privacy). Al usar el formulario de reserva, aceptas también las condiciones de Cal.com. Este sitio web no almacena datos en una base de datos propia.`,
  },
  {
    title: "5. ¿Por cuánto tiempo se conservan?",
    content: `Los datos de agendamiento se conservan en la plataforma Cal.com conforme a sus propias políticas de retención. Si deseas solicitar la eliminación de tus datos de Cal.com, puedes hacerlo directamente desde tu cuenta en esa plataforma o solicitándolo a través del correo de contacto indicado en esta política.`,
  },
  {
    title: "6. Tus derechos",
    content: `De acuerdo con la Ley N° 19.628 sobre Protección de la Vida Privada de Chile, tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. Para ejercer cualquiera de estos derechos, puedes escribir a psicoaraceliaguilera@gmail.com con el asunto "Datos personales" y te responderemos en un plazo razonable.`,
  },
  {
    title: "7. Seguridad",
    content: `Este sitio web opera bajo el protocolo HTTPS, lo que garantiza que la comunicación entre tu navegador y el servidor está cifrada. No almacenamos contraseñas ni información financiera. El pago de sesiones se coordina directamente entre las partes, sin intermediación de plataformas de pago en este sitio.`,
  },
  {
    title: "8. Cookies",
    content: `Este sitio web no utiliza cookies propias de seguimiento ni publicidad. Cal.com, como plataforma embebida, puede utilizar cookies técnicas necesarias para el funcionamiento del calendario. Para más detalles sobre las cookies de Cal.com, consulta su política de privacidad.`,
  },
  {
    title: "9. Cambios en esta política",
    content: `Esta política puede actualizarse ocasionalmente para reflejar cambios en la forma en que operamos o en la normativa vigente. Te recomendamos revisarla periódicamente. La fecha de última actualización se indica al final de esta página.`,
  },
  {
    title: "10. Contacto",
    content: `Para cualquier duda, consulta o solicitud relacionada con tu privacidad, puedes escribir a: psicoaraceliaguilera@gmail.com`,
  },
];

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      {/* Header */}
      <div className="bg-white border-b border-[#EAF4ED]">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#6B9E7A] hover:text-[#5a8a68] transition-colors duration-200"
            aria-label="Volver al inicio"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="font-sans text-sm font-medium">Volver al inicio</span>
          </Link>
          <span className="font-serif text-sm text-[#8A8A8A]">
            Araceli Aguilera Jorquera · Psicóloga
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Título */}
        <div className="mb-12">
          <span className="font-sans text-xs tracking-widest text-[#6B9E7A] uppercase mb-3 block">
            Transparencia y confianza
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-[#2C2C2C] mb-4">
            Política de Privacidad
          </h1>
          <div
            style={{
              width: 60,
              height: 3,
              background: "#6B9E7A",
              borderRadius: 2,
              marginBottom: 24,
            }}
          />
          <p className="font-sans text-base text-[#5A5A5A] leading-relaxed">
            Tu privacidad es importante. Esta política explica de manera clara y
            simple qué datos se recopilan cuando usas este sitio, cómo se usan y
            cuáles son tus derechos. Si tienes alguna duda, no dudes en escribirme.
          </p>
        </div>

        {/* Secciones */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-2xl p-7 border border-[#EAF4ED] shadow-sm"
            >
              <h2 className="font-serif text-xl font-semibold text-[#2C2C2C] mb-3">
                {section.title}
              </h2>
              <p className="font-sans text-sm text-[#5A5A5A] leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Pie */}
        <div className="mt-12 pt-8 border-t border-[#EAF4ED] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-[#8A8A8A]">
            Última actualización: abril de 2026
          </p>
          <Link
            href="/"
            className="font-sans text-sm font-medium text-[#6B9E7A] hover:underline"
          >
            Volver al sitio principal →
          </Link>
        </div>
      </div>
    </div>
  );
}
