"use client";

import { useState, useEffect } from "react";
import ScrollLink from "./ScrollLink";

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
          <span className="font-serif text-2xl font-semibold text-ink transition-colors duration-300">
            Araceli Aguilera Jorquera
          </span>
          <span className="font-sans text-xs tracking-widest text-sage-accessible uppercase mt-0.5">
            Psicóloga
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) =>
            link.label === "Agendar" ? (
              <li key={link.href}>
                <ScrollLink
                  as="button"
                  href={link.href}
                  className="btn-primary !px-6 !py-2.5 !text-sm"
                  ariaLabel="Agendar consulta"
                >
                  Agendar hora
                </ScrollLink>
              </li>
            ) : (
              <li key={link.href}>
                <ScrollLink
                  as="button"
                  href={link.href}
                  className="font-sans text-sm text-graphite hover:text-sage-accessible transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage group-hover:w-full transition-all duration-300" />
                </ScrollLink>
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
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul
          className="bg-white/98 backdrop-blur-md px-6 py-4 flex flex-col gap-4 border-t border-sage-light"
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <ScrollLink
                as="button"
                href={link.href}
                onNavigate={() => setMenuOpen(false)}
                className={`w-full text-left font-sans text-base transition-colors duration-200 ${
                  link.label === "Agendar"
                    ? "btn-primary !w-full !text-center mt-2"
                    : "text-graphite hover:text-sage-accessible py-1"
                }`}
              >
                {link.label === "Agendar" ? "Agendar hora" : link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
