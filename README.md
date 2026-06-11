# Portfolio profesional — Alberto Bort

Portfolio ejecutivo de **Alberto Bort**, Technical Project Lead & IT Business Analyst (Valencia). SPA en React con enfoque editorial sobrio: sistema de diseño propio con CSS variables ("grafito + azul acero"), tema dark/light, accesibilidad WCAG 2.2 AA y SEO con JSON-LD.

**Producción:** https://perfil-profesional.vercel.app

## Stack

- **React 18** (Create React App / react-scripts 5)
- **React Router 6** — rutas: `/`, `/experience`, `/skills`, `/projects`, `/contact` + 404
- **Framer Motion 12** — transiciones y entrada de secciones, con `MotionConfig reducedMotion="user"` global
- **Lucide React** — iconografía
- **CSS modular por componente** sobre tokens en `src/theme.css` (sin Tailwind ni CSS-in-JS)
- **Fuentes self-hosted** (Inter + Outfit, woff2 con subsets latin/latin-ext) servidas desde `public/fonts/` con `@font-face` inline en `index.html` y preload
- **Vercel** — rewrites SPA, security headers y caché immutable (`vercel.json`)

## Scripts

```bash
npm install        # instalar dependencias
npm start          # desarrollo en http://localhost:3000
npm test           # tests (Jest + React Testing Library); CI: npm test -- --watchAll=false
npm run build      # build de producción en build/
```

No existe script de deploy: el despliegue lo hace **Vercel** automáticamente en cada push a `main`.

## Estructura

```
public/
  fonts/                  # woff2 self-hosted (preload + @font-face en index.html)
  Alberto_Bort_CV_ESP_2026.pdf
  index.html              # SEO, OG/Twitter, JSON-LD (Person), theme inicial
  sitemap.xml · robots.txt · manifest.json
src/
  data/portfolio-data.js  # ÚNICA fuente de verdad de contenido (datos + microcopy uiText)
  theme.css               # sistema de diseño: tokens de color/tipografía/espaciado
  index.css · print.css   # ajustes globales y estilos de impresión
  components/             # un .js + .css por componente
    shared/               # SectionHeader, TechTag, TypeWriter, AnimatedCounter, ...
  context/                # ThemeContext (dark/light), ToastContext
  hooks/                  # useFocusTrap, usePageTitle
```

### Editar contenido

Todo el contenido profesional (experiencia, proyectos, skills, contacto, microcopy de la interfaz) vive en [`src/data/portfolio-data.js`](src/data/portfolio-data.js). Los componentes solo renderizan; no hay textos de negocio hardcodeados en ellos.

## Accesibilidad

- Un `<h1>` por página (vía `SectionHeader`), skip link, focus visible, modal con focus trap y ESC.
- Menú móvil con `aria-expanded`/`aria-controls`.
- `prefers-reduced-motion` respetado en Framer Motion (global), canvas de partículas, typewriter y contadores.
- Niveles de competencia con indicador no dependiente solo del color (relleno del punto + texto sr-only).

## Tests

- `src/setupTests.js` mockea `matchMedia`, `IntersectionObserver`, `ResizeObserver` y `scrollTo` (no existen en JSDOM).
- Los tests están anclados a `portfolio-data.js` (nombre, CV, empresas), no al copy visual, para sobrevivir a cambios de diseño.

## Mejoras futuras

- **Migración a Vite**: CRA está sin mantenimiento (avisos de Babel/Browserslist en build). Vite + Vitest reduciría tiempos de build y eliminaría la deuda de react-scripts. No se ha ejecutado para mantener estable la cadena actual.
- **og-image**: regenerar `public/og-image.jpg` (1200×630) con la paleta nueva — fondo `#0A0E14`, nombre en Outfit y tesis en Inter. Receta sin herramientas de diseño: maquetar un HTML local y capturar con el navegador.
- **favicon.ico**: pesa 66 KB; regenerar multi-size (16/32/48) ~15 KB. `favicon.svg` ya es el icono primario.
- **CSP**: añadir `Content-Security-Policy` en `vercel.json` requiere permitir `frame-src` de Google Forms y el script inline del tema (`INLINE_RUNTIME_CHUNK=false`); hacerlo en un cambio aislado.
- **Dominio**: el CV enlaza `albertobortcv.vercel.app` y el código usa `perfil-profesional.vercel.app`; confirmar el canónico y unificar.

## Licencia

Proyecto personal. El contenido (textos, CV, imagen) es propiedad de Alberto Bort.
