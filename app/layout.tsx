import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = "https://araceli-psicologa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Araceli Aguilera Jorquera | Psicóloga",
  description:
    "Psicóloga con enfoque cognitivo-conductual. Acompañamiento terapéutico individual y de pareja. Agenda tu primera consulta online de forma fácil y segura.",
  keywords: [
    "psicóloga",
    "terapia online",
    "cognitivo conductual",
    "terapia individual",
    "terapia de pareja",
    "salud mental",
    "Chile",
    "UCSH",
  ],
  authors: [{ name: "Araceli Aguilera Jorquera" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Araceli Aguilera Jorquera | Psicóloga",
    description:
      "Psicóloga con enfoque cognitivo-conductual. Acompañamiento terapéutico individual y de pareja. Agenda tu primera consulta online.",
    type: "website",
    locale: "es_CL",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Araceli Aguilera Jorquera | Psicóloga",
    description:
      "Psicóloga con enfoque cognitivo-conductual. Atención individual y de pareja online.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Araceli Aguilera Jorquera",
  jobTitle: "Psicóloga",
  description:
    "Psicóloga con enfoque cognitivo-conductual (TCC), acompañamiento terapéutico individual y de pareja.",
  url: siteUrl,
  image: `${siteUrl}/foto-psicologa.jpg`,
  email: "mailto:psicoaraceliaguilera@gmail.com",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad Católica Silva Henríquez",
  },
  knowsAbout: [
    "Terapia Cognitivo-Conductual",
    "Ansiedad",
    "Autoestima",
    "Terapia de pareja",
    "Desarrollo personal",
  ],
  areaServed: "CL",
  availableLanguage: "es",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorantGaramond.variable} ${dmSans.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
