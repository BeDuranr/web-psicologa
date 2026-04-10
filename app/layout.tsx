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

export const metadata: Metadata = {
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
  openGraph: {
    title: "Araceli Aguilera Jorquera | Psicóloga",
    description:
      "Psicóloga con enfoque cognitivo-conductual. Acompañamiento terapéutico individual y de pareja. Agenda tu primera consulta online.",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Araceli Aguilera Jorquera - Psicóloga",
      },
    ],
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
