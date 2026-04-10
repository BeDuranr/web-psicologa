# 🌿 Dra. María González — Sitio Web Psicóloga

Proyecto Next.js 14 listo para desplegar en Vercel.

---

## 📁 Agregar la foto de perfil

Copia la foto de la psicóloga a la carpeta `/public/` con el nombre exacto:

```
public/foto-psicologa.jpg
```

La imagen se mostrará en la sección Hero. La prop `imageSrc` en `app/page.tsx` apunta a `/foto-psicologa.jpg`.

---

## ⚙️ Configurar Cal.com

1. Crea tu cuenta en [cal.com](https://cal.com) y obtén tu username
2. Abre `.env.local` y reemplaza `placeholder` por tu username:

```env
NEXT_PUBLIC_CALCOM_USERNAME=tu-username-aqui
```

3. En Vercel, agrega también la variable de entorno:
   - `NEXT_PUBLIC_CALCOM_USERNAME` = `tu-username-aqui`

---

## 🚀 Instalar y ejecutar localmente

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

---

## 🌐 Desplegar en Vercel

### Opción A: Desde GitHub (recomendado)

1. Sube el proyecto a un repositorio en GitHub
2. Ve a [vercel.com](https://vercel.com) → "New Project"
3. Importa el repositorio
4. Agrega la variable de entorno `NEXT_PUBLIC_CALCOM_USERNAME`
5. Haz clic en "Deploy"

### Opción B: Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## 📝 Personalizar el contenido

| Archivo | Qué cambiar |
|---|---|
| `components/Navbar.tsx` | Nombre y links |
| `components/Hero.tsx` | Título, subtítulo, textos del hero |
| `components/Stats.tsx` | Años de experiencia, pacientes, etc. |
| `components/About.tsx` | Bio, credenciales, enfoques |
| `components/Services.tsx` | Nombres, precios y duración de servicios |
| `components/HowItWorks.tsx` | Pasos del proceso |
| `components/FAQ.tsx` | Preguntas y respuestas |
| `components/Footer.tsx` | Email, horarios, links legales |
| `app/layout.tsx` | Título SEO, descripción, og:image |

---

## 🎨 Paleta de colores

| Variable | Color | Uso |
|---|---|---|
| `#6B9E7A` | Sage verde | Color principal, CTAs |
| `#EAF4ED` | Sage claro | Fondos secciones |
| `#C8E0CF` | Sage medio | Bordes, acentos |
| `#F8F5F0` | Crema | Fondo base |
| `#F2E8E4` | Blush | Secciones alternadas |
| `#C4826A` | Terracotta | Botón primario, acentos |

Para cambiar colores, edita `tailwind.config.ts` y `app/globals.css`.

---

## 📞 Soporte

Si tienes dudas sobre el código, revisa la [documentación de Next.js](https://nextjs.org/docs).
