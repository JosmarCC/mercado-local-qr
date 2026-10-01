# MercadoLocal QR — Vue 3 (final)

Spike finalista + repo final. Vue 3 + Vite + TypeScript + PWA.

## Reproducir (máx. 5 comandos)
1. `git clone <TU-REPO>`
2. `cd mercado-local-qr`
3. `npm install`
4. `npm run test`
5. `npm run dev` — abrir http://localhost:5173

Build: `npm run build` · Preview PWA: `npm run preview`

## Funcionalidad
Listar desde `public/productos.json`, buscar + filtro categoría, estado agotado, favoritos en localStorage, detalle accesible (`dialog` + aria), manifest + Service Worker, responsive desde 360px.

## Decisiones
Ver documento técnico puntos 7–9. Selección: Vue por 4.45/5.0.

## Troubleshooting
- SW con caché vieja: DevTools → Aplicación → Service Workers → Bypass for network.
- Errores de tipos Vue: usar extensión Vue Official + `npx vue-tsc --noEmit`.

## Spikes
- Final Vue: raíz del repo (`spikes/vue-spike` es copia de referencia).
- React: `spikes/react-spike/` (Vite + React + Workbox manual).
