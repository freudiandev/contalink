# ContaLink

Sitio web corporativo de ContaLink para servicios de firma electrónica Uanataca y asesoría contable y tributaria en Ecuador.

## Stack

- Next.js 15 con App Router
- TypeScript
- Tailwind CSS 4
- p5.js
- Metadata API y JSON-LD
- Docker
- Vercel

## Ejecutar con Docker

```bash
docker compose up --build -d
```

Abre [http://localhost:3000](http://localhost:3000).

Docker levanta tres instancias del sitio y un proxy Nginx que distribuye
las solicitudes entre ellas.

Si tu instalación utiliza el binario clásico:

```bash
docker-compose up --build
```

## Ejecutar localmente

```bash
npm install
npm run dev
```

Comandos de calidad y producción:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Publicar en Vercel

El proyecto está preparado para desplegarse como una aplicación Next.js en
Vercel. Cada `push` a `main` genera un despliegue de producción cuando el
repositorio está conectado desde el panel de Vercel.

Configura esta variable de entorno para Production, Preview y Development:

```bash
NEXT_PUBLIC_SITE_URL=https://ecuadorfirma.me
```

También puedes publicar manualmente con la CLI:

```bash
vercel --prod
```

## Rutas

- `/`
- `/firma-electronica-ecuador`
- `/contabilidad-tributaria-quito`
- `/blog`
- `/blog/[slug]`
- `/contacto`

## Contenido editable

- Datos generales: `src/data/site.ts`
- Precios: `src/data/prices.ts`
- Servicios: `src/data/services.ts`
- Preguntas frecuentes: `src/data/faqs.ts`
- Artículos: `src/data/blog.ts`

## Assets

Los placeholders están en `public/assets`. Sustitúyelos por los archivos finales del cliente manteniendo nombres claros y dimensiones adecuadas. La interfaz actual no depende de que existan imágenes raster, por lo que no se rompe si todavía no fueron entregadas.

También conviene actualizar los enlaces sociales en `src/data/site.ts` y confirmar precios, certificaciones y textos legales con la cliente.
