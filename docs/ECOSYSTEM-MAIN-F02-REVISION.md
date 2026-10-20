# Fase 02 · SKYTOOLS ECOSYSTEM Main Web · REVISIÓN

**Estado: preview local para aprobar. NO desplegado ni fusionado a main.**

## Fuente canónica de diseño

Se partió del ZIP local previamente aprobado `SKYTOOLS-MAIN-WEB-v03.6-Namecheap.zip`, NO del `index.html` antiguo del repositorio.

Inventario base: 33 archivos. Prototipo: 34 archivos (incluido `FASE02-REVISION.md`).
Archivos de código cambiados respecto al ZIP aprobado:
- `index.html`: nuevo selector en header y navegación cruzada en footer, enlaces especializados en la misma pestaña.
- `assets/css/styles.css`: estilos aislados `ecosystem-*`, responsive.
- `assets/js/main.js`: cierre menú por Escape, clic fuera, y coordinación del menú móvil.

Contenido de formulario, configuración de `lead-v2`, imágenes de marca, sitemap y robots.txt preservados sin cambios.

## Funcionalidades en preview

- SKYTOOLS Corporativo (estado actual)
- RPAS Industrial → `https://industrial.skytools.org/`
- FPV RAW → `https://fpvraw.skytools.org/`
- 3D LAB → `https://3d.skytools.org/`
- Plataformas inmersivas 360° → `#inmersivas` (sección del sitio)
- Derecho Aeronáutico → `#derecho-aeronautico` (sección del sitio)

## QA realizado en renderizado aislado

- 1440x900, 900x950, 390x844 y 320x720: sin desbordamiento horizontal.
- Selector abierto/cerrado y cierre por Escape: correcto.
- Menú mobile existente independiente: correcto.
- 6 unidades y enlaces del footer: identificados.
- 0 errores JS en estas previsualizaciones.
- Logotipos y medios originales íntegros.
- **No se hizo envío real de leads**, no se publicó el sitio.

## Discrepancia GitHub vs ZIP

`main` todavía representa un sitio de estructura distinta a la V03.6. Su árbol remoto tiene aproximadamente 18 blobs frente a 33 archivos del ZIP; los nombres y el diseño difieren, incluidos varios recursos gráficos. **No hacer merge de un parche aislado**: tras la aprobación, sincronizar el conjunto completo de archivos del ZIP de revisión sobre GitHub y evaluar un PR antes de publicar.

## Estado de entregables

La previsualización local se preparó como `SKYTOOLS-ECOSYSTEM-MAIN-F02-PREVIEW.zip` (entregado en el chat), junto a capturas escritorio y móvil. Esta rama almacena el acta de revisión. El ZIP no ha sido subido a GitHub en esta etapa y no se ha reemplazado `main`.

## Próximos pasos

1. Usuario aprueba la previsualización o solicita cambios.
2. Reconciliar completamente la rama de preview con los 34 archivos del ZIP.
3. Verificar formularios/analytics/SSL en entorno permitido.
4. Aprobar PR de GitHub y preparar ZIP final para Namecheap.
5. Publicar solo con autorización explícita.
