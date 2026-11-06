# Textil La Nona — sitio institucional v3

Sitio estático de la empresa familiar Textil La Nona (Independencia 175, Leandro N. Alem, Misiones). Paleta clara y cálida inspirada en el papel y el crema del sitio original, tipografía editorial (Cormorant Garamond + Nunito), fotos reales de la fábrica como protagonistas y videos de stock reales de maquinaria textil (no animaciones 3D ni estética oscura).

## Concepto visual

Casa de familia, no showroom tecnológico. Fondos paper `#F6F0E6` y cream `#ECE3D4`, tinta `#24364A`, acento mostaza `#C07A32` y un pie en corteza `#3C2A1E`. Mucho aire, titulares serif, fotos grandes en bloques alternados y un hero con video real de telar más un velo claro suave para que el texto se lea sin oscurecer la escena.

El movimiento es footage real (muted, autoplay, loop, `playsinline`) y, en la interfaz, solo fades suaves al entrar en vista y un parallax leve en las fotos. Si el visitante pide `prefers-reduced-motion` o navega con Save-Data, los videos quedan en el fotograma poster y las animaciones de UI se desactivan.

## Build (Cloudflare Pages)

- Node 20 o superior
- Comando de build: `npm run build`
- Directorio de salida: `dist`
- Framework: Astro (salida 100 % estática, sin servidor)
- Preview local: `npm run preview`

En Cloudflare Pages: framework preset *Astro* (o none), build `npm run build`, output `dist`.

```bash
npm install
npm run build
```

## Contacto (sin cambios)

- WhatsApp consultas: https://wa.me/543754434100?text=Hola!%20quiero%20mas%20información%20acerca%20de%20sus%20productos%20y%20servicios.
- WhatsApp revendedores: https://wa.me/543754434100?text=Hola!%20quiero%20el%20precio%20especial%20para%20revendedores.
- Teléfono visible: +54 3754 434100
- Dirección: Independencia 175, Leandro N. Alem, Misiones, Argentina
- Mapa embebido de esa dirección
- Facebook e Instagram apuntan a `#contacto` hasta que existan URLs reales

## Videos (descargados en `public/video/`)

Todos se comprimen a ~720p, H.264 MP4 + VP9 WebM, sin audio, con poster JPG. Licencia: [Pexels License](https://www.pexels.com/license/) (uso gratuito, también comercial; no hace falta atribuir, pero se documenta; no revender el archivo crudo como stock).

| Archivo | Uso en el sitio | Título en Pexels | Autor | ID | Página | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| `loom.mp4` / `loom.webm` + `loom-poster.jpg` | Fondo del hero | Automated Textile Production in Loom Factory | Nova lv | 30183334 | https://www.pexels.com/video/automated-textile-production-in-loom-factory-30183334/ | Telar industrial con hilos en movimiento |
| `spools.mp4` / `spools.webm` + `spools-poster.jpg` | Banda del proceso | Industrial Textile Production Machine | Mahidul Islam Nakib | 35469635 | https://www.pexels.com/video/industrial-textile-production-machine-35469635/ | Conos / carreteles de hilo en máquina |
| `thread.mp4` / `thread.webm` + `thread-poster.jpg` | Bloque de servicios | A machine that is making a white thread | K | 26569048 | https://www.pexels.com/video/a-machine-that-is-making-a-white-thread-26569048/ | Recorte a 10 s del original (24 s) para bajar peso |

Fotos propias del cliente (no stock) en `public/img/`: `logo-mark.webp`, `trapo.webp`, `trapo-color.webp`, `urdido.webp`, `carretel.webp`.

## Secciones

1. Hero (`#inicio`) — video de telar + overlay claro + textos originales
2. Nota de bienvenida — tono familiar, sin cifras inventadas
3. Productos (`#productos`) — textos originales y fotos reales grandes
4. Proceso (`#proceso`) — cuatro pasos reescritos con calidez + video de conos
5. A quiénes abastecemos (`#abastecemos`) — hogares, comercios, talleres, trato directo
6. Servicios (`#servicios`) — textos originales de recarga de urdido + foto de carretel + video de hilo
7. Revendedores (`#revendedores`) — textos originales de mayorista
8. Sobre nosotros (`#sobre-nosotros`) — textos originales (incluye «más de 15 años»)
9. Preguntas frecuentes (`#preguntas`) — basadas en esos mismos textos
10. Contacto (`#contacto`) — datos, WhatsApp y mapa originales
11. Pie — «© {año} La Nona. Todos los derechos reservados.»

No se inventan cantidades de producción, clientela ni años extra. Si más adelante hay cifras reales para proceso o capacidad, se pueden sumar acá.

## SEO

Se conserva y mejora lo de la v1: title, description, canonical, Open Graph, Twitter, JSON-LD LocalBusiness / TextileFactory, `robots.txt` y `sitemap.xml` hacia `https://textillanona.com.ar/`.
