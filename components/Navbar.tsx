"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Preguntas", href: "#faq" },
  { label: "Agendar", href: "#agendar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col leading-none group"
          aria-label="Ir al inicio"
        >
          <span
            className={`font-serif text-2xl font-semibold transition-colors duration-300 ${
              scrolled ? "text-[#2C2C2C]" : "text-[#2C2C2C]"
            }`}
          >
            Araceli Aguilera Jorquera
          </span>
          <span className="font-sans text-xs tracking-widest text-[#6B9E7A] uppercase mt-0.5">
            Psicóloga
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) =>
            link.label === "Agendar" ? (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="btn-primary !px-6 !py-2.5 !text-sm"
                  aria-label="Agendar consulta"
                >
                  Agendar hora
                </button>
              </li>
            ) : (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="font-sans text-sm text-[#5A5A5A] hover:text-[#6B9E7A] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6B9E7A] group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            )
          )}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#2C2C2C] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul
          className="bg-white/98 backdrop-blur-md px-6 py-4 flex flex-col gap-4 border-t border-[#EAF4ED]"
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-left font-sans text-base transition-colors duration-200 ${
                  link.label === "Agendar"
                    ? "btn-primary !w-full !text-center mt-2"
                    : "text-[#5A5A5A] hover:text-[#6B9E7A] py-1"
                }`}
              >
                {link.label === "Agendar" ? "Agendar hora" : link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
