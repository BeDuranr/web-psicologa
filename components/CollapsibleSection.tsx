"use client";

import { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      {/* Barra de toggle — solo visible en móvil */}
      <button
        className="md:hidden w-full flex items-center justify-between px-6 py-4 bg-white border-b border-[#EAF4ED] shadow-sm"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-1.5 h-5 rounded-full bg-[#6B9E7A]"
            aria-hidden="true"
          />
          <span className="font-serif text-lg font-semibold text-[#2C2C2C]">
            {title}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-[#6B9E7A] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Contenido: colapsable en móvil, siempre visible en desktop */}
      <div
        className={`mobile-collapsible${isOpen ? " is-open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
