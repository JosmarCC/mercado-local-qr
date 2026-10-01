# Texto listo para pegar en Google Docs — MercadoLocal QR

## 1. REEMPLAZO para punto 8 — Instalación, configuración y solución de problemas

### Repositorio
https://github.com/TU-USUARIO/mercado-local-qr
Rama `main` = final Vue 3. Carpeta `spikes/react-spike/` = spike React equivalente.

### Versiones y requisitos (verificado por el equipo)
| Herramienta | Versión | Licencia | Mantenimiento activo |
|---|---|---|---|
| Node.js LTS | 20.x | MIT | Sí, LTS |
| Vue | 3.4.x | MIT | Sí |
| Vite | 5.0.x | MIT | Sí |
| vite-plugin-pwa | 0.17.x | MIT | Sí |
| Vitest + Vue Test Utils | 1.x / 2.4.x | MIT | Sí |
| TypeScript | 5.3.x | Apache-2.0 | Sí |

Herramientas de calidad: ESLint 8.x + Prettier 3.x (`npm run lint`, `npm run format`).

### Pasos para reproducción (máximo 5 comandos)
1. git clone https://github.com/TU-USUARIO/mercado-local-qr.git
2. cd mercado-local-qr
3. npm install
4. npm run test
5. npm run dev — abrir http://localhost:5173

Build reproducible: `npm run build`. Preview PWA aislado: `npm run preview`. Sin secretos en el repositorio.

### Solución de problemas comunes
* Error de caché en el Service Worker durante desarrollo local:
  * Síntoma: los cambios no se reflejan al recargar.
  * Solución: DevTools (F12) → Aplicación → Service Workers → marcar "Bypass for network", o probar con `npm run build && npm run preview`.
* Fallo en resolución de tipos de TypeScript tras clonar:
  * Síntoma: errores de módulos de Vue en el IDE.
  * Solución: instalar extensión oficial Vue - Official (Volar) en VS Code y ejecutar `npx vue-tsc --noEmit`.

---

## 2. NUEVO punto 14 — Conclusiones

La selección de Vue.js 3 (4.45/5.00) sobre React (4.00/5.00) no responde a una preferencia personal —el equipo tenía familiaridad introductoria con React— sino al ajuste medido al contexto: curva de aprendizaje suave, integración PWA casi sin fricción mediante vite-plugin-pwa y métricas Lighthouse superiores (97/95/100/92 frente a 94/92/100/90), cumpliendo holgadamente el mínimo de 85 exigido.

Los resultados podrían cambiar en otro contexto: con un equipo experto en .NET/C#, Blazor WASM subiría a ~4.10 y sería competitivo; con requisito estricto de SSR e indexación dinámica, React + Next.js ganaría por madurez en edge/servidor; y con horizonte a 5+ años sin rotación, Angular igualaría a Vue por su estructura opinada y mantenibilidad.

## 3. NUEVO punto 14 — Mejoras esperadas

* Deuda del spike: faltan iconos PWA 192/512 finales, pruebas end-to-end offline (Playwright), caché completa de imágenes y validación con lector de pantalla.
* Riesgos de dependencia: `vite-plugin-pwa` y Workbox concentran la lógica offline; mitigación: fijar versiones en `package-lock.json`, revisar releases trimestralmente y mantener fallback manual con Workbox.
* Plan de actualización (3 años): actualizar Node LTS + Vue/Vite cada 6 meses, re-ejecutar Lighthouse y `npm run test` en CI, y revalidar licencias MIT/Apache-2.0 antes de cada release a hosting estático (Cloudflare Pages / Netlify, carpeta `dist/`).

---

## 4. REEMPLAZO para punto 18 — Bibliografía APA 7

* Evan You y equipo de Vue. (s. f.). *Documentación de Vue.js 3*. Consultado el 30 de septiembre de 2026, de https://vuejs.org/guide/introduction.html
* Evan You y equipo de Vite. (s. f.). *Guía de Vite*. Consultado el 30 de septiembre de 2026, de https://vitejs.dev/guide/
* Anthony Fu y equipo. (s. f.). *Vite Plugin PWA*. Consultado el 30 de septiembre de 2026, de https://vite-pwa-org.netlify.app/
* Meta Platforms. (s. f.). *Documentación de React*. Consultado el 30 de septiembre de 2026, de https://react.dev/learn
* Google. (s. f.). *Documentación de Angular y Angular PWA*. Consultado el 30 de septiembre de 2026, de https://angular.dev/ y https://angular.io/guide/service-worker-intro
* Microsoft. (s. f.). *Blazor WebAssembly*. Consultado el 30 de septiembre de 2026, de https://learn.microsoft.com/aspnet/core/blazor/
* Mozilla Contributors. (s. f.). *MDN Web Docs: Progressive Web Apps*. Consultado el 30 de septiembre de 2026, de https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
* Vitest Team. (s. f.). *Guía de Vitest*. Consultado el 30 de septiembre de 2026, de https://vitest.dev/guide/
* Programa oficial de Desarrollo Web Integral, Unidad I. (2026). *Casos de estudio DWINT*.

> Nota: sustituye TU-USUARIO por tu usuario real de GitHub antes de entregar. Cambia la fecha de consulta si consultaste otro día.
