/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Evita que el sitio sea embebido en iframes de otros dominios (anti-clickjacking)
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Evita que el navegador adivine el tipo de contenido (MIME sniffing)
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Fuerza HTTPS por 1 año e incluye subdominios
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          // Limita la información del referrer al origen
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Restringe el acceso a APIs sensibles del navegador
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Política de contenido: permite Cal.com en iframes y recursos necesarios
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cal.com https://*.cal.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "frame-src https://cal.com https://*.cal.com",
              "connect-src 'self' https://cal.com https://*.cal.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
