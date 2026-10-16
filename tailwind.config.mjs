/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Paleta principal ──────────────────────────────────
        'navy': '#33364b',   // Azul marino oscuro
        'teal': '#0e8890',   // Verde azulado principal
        'teal-light': '#81cfd1',   // Verde azulado claro / acento
        'indigo': '#231f5c',   // Índigo profundo
        'black': '#0a0a0a',   // Negro
        'white': '#ffffff',   // Blanco

        // ── Aliases semánticos (usados por el sitio) ──────────
        'primary': '#0e8890',   // teal → acción principal
        'primary-container': '#231f5c',   // indigo → contenedor primario
        'on-primary': '#ffffff',
        'on-primary-container': '#81cfd1',
        'primary-fixed': '#e0f7f8',
        'primary-fixed-dim': '#81cfd1',
        'on-primary-fixed': '#0a2a2b',
        'on-primary-fixed-variant': '#0e6870',

        'secondary': '#33364b',   // navy → secundario
        'secondary-container': '#33364b',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#81cfd1',
        'secondary-fixed': '#cdeaea',
        'on-secondary-fixed': '#0a2a2b',

        'background': '#ffffff',
        'surface': '#f4f7f8',
        'surface-container': '#e8f5f5',
        'surface-container-low': '#f0fafa',
        'surface-container-lowest': '#ffffff',
        'surface-container-high': '#cdeaea',
        'surface-container-highest': '#b8e0e1',
        'surface-dim': '#d0e8e9',
        'surface-bright': '#ffffff',
        'surface-tint': '#0e8890',
        'surface-variant': '#ddf0f0',
        'inverse-surface': '#231f5c',
        'inverse-on-surface': '#e8f5f5',
        'inverse-primary': '#81cfd1',

        'on-surface': '#0a0a0a',
        'on-surface-variant': '#33364b',
        'on-background': '#0a0a0a',

        'outline': '#33364b',
        'outline-variant': '#81cfd1',

        'error': '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        p: '0.625rem',
        full: '0.75rem',
      },
      spacing: {
        'margin-mobile': '16px',
        'section-padding': '80px',
        'container-max': '1200px',
        unit: '8px',
        gutter: '24px',
      },
      fontFamily: {
        cta: ['Inter', 'sans-serif'],
        h2: ['Fraunces', 'serif'],
        h1: ['Fraunces', 'serif'],
        h3: ['Fraunces', 'serif'],
        'label-caps': ['Inter', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'doctor': ['Fraunces', 'serif'],
      },
      fontSize: {
        cta: ['16px', { lineHeight: '1.0', letterSpacing: '0.02em', fontWeight: '500' }],
        h2: ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        h1: ['56px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' }],
        h3: ['28px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
        'label-caps': ['14px', { lineHeight: '1.4', letterSpacing: '0.04em', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
