# MaxiloSalud — Sitio Web Clínico

Sitio web para clínica de cirugía bucal y maxilofacial. Construido con **Astro 4 + Tailwind CSS**.

## 🚀 Stack

- [Astro 4](https://astro.build) — Framework de sitios estáticos ultrarrápidos
- [Tailwind CSS](https://tailwindcss.com) — Utilidades CSS con design system personalizado
- Tipografía: **Manrope** (headlines) + **Inter** (body)
- Iconos: Google Material Symbols Outlined

## 📂 Estructura

```
src/
├── layouts/
│   └── Layout.astro        # Layout base con nav y footer
├── pages/
│   ├── index.astro         # Página de inicio
│   ├── servicios.astro     # Servicios especializados
│   ├── doctor.astro        # Perfil del Dr. / Sobre nosotros
│   ├── agendar.astro       # Formulario de cita → WhatsApp
│   └── contacto.astro      # Información de contacto
├── styles/
│   └── global.css          # Estilos base + Tailwind imports
public/
└── favicon.svg
```

## ⚙️ Instalación

```bash
npm install
npm run dev
```

El sitio corre en `http://localhost:4321`

## 🏗️ Build para producción

```bash
npm run build
npm run preview
```

## 🌐 Deploy

### Vercel (recomendado)
1. Sube el proyecto a GitHub
2. Conecta el repo en [vercel.com](https://vercel.com)
3. Deploy automático en cada push a `main`

### Netlify
1. Sube a GitHub
2. Conecta en [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📱 Personalización rápida

### Número de WhatsApp
En `src/pages/agendar.astro`:
```js
const WHATSAPP_NUMBER = '521XXXXXXXXXX'; // ← Reemplaza aquí
```

En `src/layouts/Layout.astro` y `src/pages/contacto.astro`:
```html
href="https://wa.me/521XXXXXXXXXX"  <!-- ← Y aquí -->
```

### Información del doctor
Edita los datos en `src/pages/doctor.astro` y el badge en `src/pages/agendar.astro`.

### Colores y tipografía
El design system completo vive en `tailwind.config.mjs`. Los tokens siguen el esquema definido en `DESIGN.md`.
