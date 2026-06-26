# Terraza More Twins — Salón de Eventos

Sitio web del salón de eventos **Terraza More Twins** (Ciudad Juárez, Chihuahua). Single-page elegante para bodas, XV años, graduaciones y eventos corporativos, con galería, formulario de reservación y contacto directo por WhatsApp.

## Desarrollo

```bash
npm install
npm run dev      # servidor con auto-reload (o: npm start)
```

Luego abre http://localhost:3000

## Estructura

```
├── server.js          # servidor Express (sirve /public)
├── package.json
└── public/
    ├── index.html     # el sitio completo (CSS + JS embebidos)
    └── assets/        # logo + fotos del salón
```

## Notas

- Tema oscuro "black-tie nocturno": fondo casi negro cálido, marfil y acento dorado champagne. 100% responsive de 375px a 2560px.
- Sin dependencias externas salvo Google Fonts y Fontshare.
- Tipografía: Cormorant Garamond (títulos) + Satoshi (cuerpo).
- Contacto: +52 33 2608 6585 · WhatsApp · [Facebook](https://www.facebook.com/profile.php?id=61566528497027)

## Despliegue

Se publica en GitHub Pages mediante GitHub Actions (`.github/workflows/jekyll-gh-pages.yml`),
que sube la carpeta `public/` directamente (sin Jekyll; `public/.nojekyll` lo desactiva).
Requiere que en **Settings → Pages → Source** esté seleccionado **"GitHub Actions"**.
Sitio en vivo: <https://vidzza.github.io/terraza-more-twins/>
