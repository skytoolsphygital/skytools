# SKYTOOLS ECOSYSTEM — Navegación unificada v1

Fecha de definición: 2026-10-20
Estado: arquitectura aprobada, pendiente implementación y QA.

## Decisión
Mantener webs especializadas en sus subdominios y unificarlas mediante un componente de navegación compartida, menús internos consistentes, footer institucional y enlaces bidireccionales a la Main Web. No fusionar las landing ni mover URLs durante esta fase.

## Inventario verificado en GitHub
- Main Web: `skytoolsphygital/skytools`, `index.html` (el repositorio no es una copia idéntica del ZIP productivo V03.6).
- INDUSTRIAL: `skytoolsphygital/INDUSTRIAL`, `index.html`, navbar tradicional de varias páginas.
- FPV RAW: `skytoolsphygital/FPV_RAW`, `index.html`, enlaces Servicios, Campañas, Contacto y Reel.
- 3D LAB: `skytoolsphygital/3D`, `index.html`, navegación por anclas y CTA WhatsApp.

El acceso público a las URLs no pudo verificarse mediante el lector web en esta revisión; se deben probar desde navegador antes de publicar cualquier cambio.

## Rutas objetivo del ecosistema

| Unidad | URL de referencia | Estado |
| --- | --- | --- |
| Corporativo | https://skytools.org/ | Principal |
| RPAS Industrial | https://industrial.skytools.org/ | Landing propia |
| FPV RAW | https://fpvraw.skytools.org/ | Landing propia |
| 3D LAB | https://3d.skytools.org/ | Landing propia |
| Plataformas inmersivas 360° | https://skytools.org/#inmersivas | Sección Main Web, hasta landing propia |
| Derecho Aeronáutico | https://skytools.org/#derecho-aeronautico | Sección Main Web, hasta landing propia |

Validar todas estas rutas en la versión publicada y después de cada despliegue. Evitar abrir en pestaña nueva por defecto para la navegación corporativa.

## Componente SKYTOOLS Global Navigation

- El isotipo/wordmark SKYTOOLS funciona como enlace claro a https://skytools.org/ en landing especializadas, conservando una indicación secundaria de la unidad actual.
- Añadir en el header un disparador `Explorar SKYTOOLS` y desplegable de unidades con la unidad actual destacada.
- En todas las landing conservar el CTA dominante original (cotizar / WhatsApp / pedir servicio); no competir visualmente con él.
- Versión móvil: apertura con botón, foco visible, cierre Escape y controles aptos para pantalla táctil.
- Componentes con la misma semántica CSS/HTML y datos compartidos: estilos variables por unidad en lugar de copiar menús distintos.
- Footer común con contacto principal +57 312 771 6555, logo corporativo, enlaces a unidades, Sociedades BIC; incluir partners solo cuando correspondan y tengan autorización.
- Marcar enlaces externos con prácticas seguras si se usan nuevas pestañas; preferir navegación dentro de la misma pestaña.

## Diseño

- Familia Industrial: grafito/azul petróleo, verde SKYTOOLS, tipografía legible, fotografía técnica.
- Unidades retienen acentos propios (Derecho Aeronáutico: cian/azul).
- Barra de exploración compacta; evitar overlay que tape formularios o interfiera con botones de conversión.

## Medición y conversión

- En esta fase NO alterar formularios, funciones backend, claves, etiquetas GA4 ni flujos de leads.
- A futuro, definir evento normalizado para clics de navegación (`ecosystem_nav_click`), con `source_site`, `destination_site` y `link_location` según consentimiento aplicable.
- Validar medición cross-subdomain GA4/UTM antes de modificar seguimiento o reenviar parámetros; no duplicar conversiones.

## Plan de implementación y criterios de aceptación

1. **Prototipo / piloto**: aplicar navegación y footer compartido primero en 3D LAB en rama de desarrollo, sin cambiar producción; QA desktop y móvil.
2. **Main Web**: reconciliar GitHub con ZIP V03.6 aprobado y sumar selector global sobre versión canónica.
3. **FPV RAW**: integrar componente y mantener menú de servicios, reel y CTA; validar fotos en móvil.
4. **INDUSTRIAL**: integración final con mayor cautela por las campañas y formularios activos. Pruebas end-to-end de formulario, WhatsApp y eventos.
5. **Publicación gradual**: respaldos previos, revisar document roots de Namecheap, HTTPS con y sin www, enlaces, accesibilidad, indexación y medición.

### QA por web
- Enlace a main desde cada landing y vuelta a las demás páginas.
- Navegación accesible, sin cambios no deseados en SEO ni rutas canonicals.
- Header y footer sin recortes de logotipos; móvil vertical validado.
- Formularios, envío y correo se comportan igual que antes; prueba controlada una vez publicado.
- No usar el código del repositorio principal como paquete de despliegue hasta consolidar su diferencia con V03.6.

## Alcance excluido
Sin migración de dominios, sin contenido jurídico adicional, sin nuevo CRM, sin campañas nuevas, sin cambios de backend por ahora.
