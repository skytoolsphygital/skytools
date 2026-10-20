# SKYTOOLS | Wireframe conceptual de homepage v0.1

Estado: **propuesta visual para validación**, no diseño final ni web publicada.
Fecha: 2026-10-19.
Dirección creativa: **Phygital Hybrid, industrial contemporáneo**.

## Objetivo de la homepage

Transmitir confianza B2B en capacidades reales de ingeniería, presentar la amplitud del portafolio y conducir al visitante hacia la solución adecuada o hacia una cotización.

**Promesa central:**
> Ingeniería de precisión para conectar el mundo físico con el digital.

**Titular hero propuesto:**
> INGENIERÍA REAL. INTELIGENCIA DIGITAL.

**Subtítulo:**
> Integramos sistemas RPAS, diseño industrial, captura de datos y tecnologías 3D para convertir retos complejos en soluciones medibles.

CTAs: «Explorar soluciones» y «Hablemos de tu proyecto».

## Wireframe desktop (1440 px como referencia)

```text
┌─────────────────────────────────────────────────────────────────────────┐
│ SKYTOOLS            Soluciones  Proyectos  Nosotros  Conocimiento [CTA] │
├─────────────────────────────────────────────────────────────────────────┤
│ [01] HERO                                                               │
│ INGENIERÍA REAL.                [FOTO REALISTA de RPAS con sensor LiDAR]  │
│ INTELIGENCIA DIGITAL.          [entorno industrial contemporáneo]        │
│ Valor, enfoque y diferenciales  [sin efectos sci-fi / sin drones ficticios]│
│ [EXPLORAR SOLUCIONES] [COTIZAR]                                          │
├─────────────────────────────────────────────────────────────────────────┤
│ [02] PRUEBA DE VALOR: Precision · Integración · Criterio técnico        │
├─────────────────────────────────────────────────────────────────────────┤
│ [03] SOLUCIONES                                                          │
│ [RPAS Industrial]    [FPV RAW]           [3D LAB]                        │
│ [Digital Eng.]       [RegTech]           [Intelligence & Control]        │
├─────────────────────────────────────────────────────────────────────────┤
│ [04] PROYECTOS REALES: caso destacado + 2 casos complementarios          │
│ Fotografías propias, problema, método, entregable y resultado validado   │
├─────────────────────────────────────────────────────────────────────────┤
│ [05] MÉTODO: Capturamos → Modelamos → Analizamos → Entregamos            │
├─────────────────────────────────────────────────────────────────────────┤
│ [06] QUIÉNES SOMOS + SKYTOOLS SAS BIC + enfoque phygital                 │
├─────────────────────────────────────────────────────────────────────────┤
│ [07] CONTACTO: HABLEMOS DE TU PROYECTO [CTA]                             │
├─────────────────────────────────────────────────────────────────────────┤
│ FOOTER: sitemap · contacto · privacidad · redes · información legal      │
└─────────────────────────────────────────────────────────────────────────┘
```

## Wireframe mobile (390 px como referencia)

```text
┌────────────────────────────┐
│ SKYTOOLS               ☰   │
├────────────────────────────┤
│ INGENIERÍA REAL.           │
│ INTELIGENCIA DIGITAL.      │
│ Subtítulo conciso          │
│ [EXPLORAR SOLUCIONES]      │
│ [COTIZAR PROYECTO]         │
│ [FOTO DRON COMPLETO]       │
│ LiDAR visible, SIN recorte │
├────────────────────────────┤
│ Diferencial 1              │
│ Diferencial 2              │
│ Diferencial 3              │
├────────────────────────────┤
│ Servicios (tarjetas 1 col) │
│ Proyecto destacado         │
│ Método                     │
│ Nosotros                   │
│ CTA contacto               │
│ Footer                     │
└────────────────────────────┘
```

## Jerarquía de secciones y mensajes

1. **Header**: logo original pendiente, navegación simple, CTA cotizar; sticky discreto.
2. **Hero**: texto conciso a la izquierda, foto a la derecha; en mobile título y foto sin ocultar sensor ni aeronave.
3. **Banda diferencial**: Ingeniería aplicada / Soluciones conectadas / Precisión verificable. No usar cifras sin respaldo.
4. **Seis soluciones**: RPAS Industrial, FPV RAW, 3D LAB, Digital Engineering, RegTech e Intelligence & Control.
5. **Casos de éxito**: usar trabajos autorizados del portafolio original; validar derechos, fechas, resultados y uso de logos.
6. **Metodología**: Captura / Procesamiento / Modelado / Decisión; la cadena puede variar por servicio.
7. **Nosotros**: perfiles e historia real de SKYTOOLS SAS BIC.
8. **CTA**: contacto visible y acceso a cada landing especializada.
9. **Footer**: navegación, términos, privacidad, datos legales y redes verificadas.

## Arte y medios: lineamientos aprobados

- Drones contemporáneos con geometría realista, hélices, brazos, tren de aterrizaje y sensores físicamente coherentes.
- Referencias visuales de arquitectura de equipos profesionales: **DJI Matrice 350 RTK con Zenmuse L2** (solo referente fotográfico, NO implica propiedad u operación de ese equipo por SKYTOOLS).
- Mostrar LiDAR, GNSS/RTK, cámaras RGB/térmicas solo donde corresponda al equipo en la escena. Nada de payloads falsos.
- Ambientes: infraestructura eléctrica, plantas de producción, cubiertas, topografía, activos e instalaciones reales.
- No usar hologramas exagerados, láseres verdes brillantes falsos ni arquitectura sci-fi.
- Reemplazar fotografías de referencia por imágenes propias de SKYTOOLS o con licencia antes de publicar.
- Hero: grafito profundo, verde SKYTOOLS como acento, fotografía dominante e información legible.

## Reglas de responsive

- Desktop: grid de 12 columnas; hero 5/7 o 6/6; servicios 3 columnas.
- Tablet: hero y grid adaptativos, servicios 2 columnas.
- Mobile: 1 columna, fotografía del dron debajo del texto sin recorte de propulsores/sensor; evitar usar background-size: cover sobre aeronaves protagonistas.
- CTA siempre legible; objetivos táctiles adecuados y contraste AA como mínimo.
- `prefers-reduced-motion` para animaciones; imágenes responsivas y optimizadas.

## Conversión y medición

- Main Web: legitimidad, exploración, portafolio y rutas a servicio.
- Landing especializadas: captación de demanda con mensajes específicos.
- GA4/GTM: eventos propuestos `view_service`, `click_landing`, `click_whatsapp`, `generate_lead` (los nombres finales se validarán contra medición existente).
- Formularios y Supabase: reaprovechar implementación validada sin claves privadas en frontend.
- HTTPS correcto en raíz y www es dependencia de lanzamiento.

## Contenido todavía pendiente

- Logo institucional vectorial aprobado.
- Fotos de aeronaves, proyectos, instalaciones y piezas 3D autorizadas.
- Casos verificables, hitos, testimonios y clientes con derechos de publicación.
- Confirmación de URLs definitivas para INDUSTRIAL, FPV RAW y 3D LAB.
- Definición de contacto corporativo y tratamiento de datos.

## Criterios de aceptación para diseño UI

- La primera pantalla explica «qué hacemos» en menos de 10 segundos.
- El dron visible se reconoce como equipo real y el sensor se distingue.
- En vertical no se ocultan hélices ni payload; prioridad a la fotografía de producto.
- Las seis unidades son comprensibles sin jerga excesiva.
- Hay una ruta a cotización desde cualquier sección relevante.
- Se pueden añadir futuros servicios sin rehacer la navegación.

> Fuentes internas de partida: Portafolio SKYTOOLS SAS BIC / Phygital Laws 2026, páginas 2–10, y proyectos activos INDUSTRIAL, FPV RAW y 3D LAB.
