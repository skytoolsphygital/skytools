# SKYTOOLS GLOBAL ES / EN — Release Candidate 1

**Estado:** paquete local terminado y auditado; no publicado. **No fusionar esta rama aún.**

## Archivo final
El paquete `SKYTOOLS-GLOBAL-MAIN-ES-EN-RC1-Namecheap.zip` fue entregado en ChatGPT. Esta rama registra la preparación y no contiene todavía el código completo del ZIP.

**ZIP SHA-256:** `fff754d9359d26540d265c908001a77c5d65a5fdb29038cf27db0ec3ca12cf6c`

**Fuente de desarrollo:** commit de producción base `678ca5b928dc34b8d48f11655b4f112dd279901e`.

## Contenido de RC1
- Español: `/index.html`
- Inglés: `/en/index.html`
- Selector ES/EN único y navegación corporativa
- CSS y JS compartidos
- Imagen OG inglesa `/assets/img/og-skytools-main-en.png`
- Sitemap con idiomas y canonicals correctos
- Recursos e integración frontend de leads preservados

## Correcciones editoriales
- Eliminación de un selector de idioma duplicado en cada página
- Traducción de CONTACTO a CONTACT en inglés
- Atributos aria-label en inglés para menú legal e idioma
- Mantener términos de marca y valores técnicos de formulario sin traducir

## QA ejecutado
- 8 renderizados Chromium: ES/EN × 1440/900/390/320
- Sin desbordamientos horizontales ni errores JavaScript
- Iconografía, imágenes y logos cargados
- Menú abre y cierra con Escape
- Envío de formulario ES y EN simulado: éxito y error, sin ningún lead real
- GET HTTP local: `/`, `/en/`, CSS y JS responden 200
- Prueba de navegación de Chromium a localhost bloqueada por política del entorno: no afirmar prueba HTTP browser end-to-end
- No se verificó DNS, SSL, Namecheap ni Supabase en producción

## Pasos previos al merge/publicación
1. Importar todos los archivos del ZIP RC1 a esta rama de preview. Es imprescindible **subir contenido y activos completos** antes de crear o fusionar PR. El conector actual no permite leer el ZIP local para subir los binarios automáticamente.
2. Verificar equivalencia de los archivos contra SHA del ZIP.
3. Revisar diffs de código y traducción técnico-jurídica.
4. Autorizar merge a main y despliegue en Namecheap.
5. Validar URLs, CSS, JS, hreflang, OG, HTTPS y formulario con un envío real autorizado.

**No tocar `main` ni Namecheap en esta etapa.**
