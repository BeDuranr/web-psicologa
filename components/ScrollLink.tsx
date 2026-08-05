"use client";

interface ScrollLinkProps {
  href: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
  as?: "a" | "button";
}

export default function ScrollLink({
  href,
  className,
  ariaLabel,
  children,
  as = "a",
}: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  if (as === "button") {
    return (
      <button onClick={handleClick} className={className} aria-label={ariaLabel}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
