# SKYTOOLS Main Web V03.4 — Namecheap

Versión basada en la previsualización aprobada el 20/oct/2026.

## Correcciones
- Logotipo oficial original compartido por SKYTOOLS (archivo transparente con margen de seguridad), en encabezado y pie.
- Galería de proyectos: imágenes individuales sin capturas de cards ni bandas negras, y visualización en proporción natural.
- Sustitución del cubo por imagen temática de ingeniería phygital, RPAS, GIS e infraestructura.
- Logos DEC y sello BIC desde archivos originales suministrados, con leyendas BIC.
- Se conservan favicon, sitemap.xml, robots.txt, enlaces a las landing y flujo `lead-v2` de Industrial.

## Subida segura
1. Confirmar **Document Root** de `skytools.org` en cPanel > Domains.
2. Hacer copia de seguridad antes de sustituir la web actual.
3. Para previsualizar, subir el contenido del ZIP a una subcarpeta dentro del Document Root, por ejemplo `skytools-preview/`.
4. Una vez aprobado, subir el contenido de `SKYTOOLS-MAIN-WEB-v03.3/` directamente al Document Root confirmado, no la carpeta contenedora.
5. Verificar raíz y www con HTTPS, navegación móvil, `sitemap.xml`, formulario y correo.

## Notas
- El formulario usa la Edge Function `lead-v2` y clave pública `anon` de INDUSTRIAL. Los mensajes desde el dominio principal se etiquetan `MAIN WEB | ...` en el tipo de proyecto. El backend actual los clasifica internamente como `source_site = industrial` y notifica por el mismo flujo. Prueba real pendiente.
- El endpoint restringe los orígenes: `localhost` y sitios de preview en otro dominio no envían. Una subcarpeta bajo `https://skytools.org` sí comparte origen.
- Los paneles gráficos derivados de la previsualización se mantienen como recursos conceptuales hasta reemplazarlos por fotografías verificadas con sus licencias correspondientes.
- URL de 3D LAB `https://3d.skytools.org/`: confirmar que ya está publicada antes del lanzamiento.
- No se cambió Supabase ni Namecheap directamente.

## Nueva vertical — Derecho Aeronáutico y regulación RPAS
- Tarjeta 7 destacada a ancho completo en Capacidades.
- Nueva sección `#derecho-aeronautico` con 6 líneas de servicio y fotografía conceptual adaptada de la previsualización aprobada.
- Enlace en el menú y el pie; CTA que preselecciona `Derecho aeronáutico / RPAS` en el formulario.
- Misma Edge Function pública `lead-v2`; el backend clasifica solicitudes de skytools.org como `industrial` internamente. El campo `project_type` incluye `MAIN WEB | Derecho aeronáutico / RPAS`, lo cual permite distinguirlas en la bandeja actual.
- No se añadió un dominio `legal.skytools.org` ni se modificó el backend. La prestación de asesoría específica deberá contar con profesionales habilitados y diagnóstico del caso.

## Alcance de verificación
- CSS, HTML, JS y archivos locales verificados estáticamente.
- Revisar diseño desktop y móvil después de desplegar; hacer envío controlado del formulario desde `https://skytools.org` antes de activar campañas. Si se usa un dominio de vista previa no autorizado, CORS bloqueará la llamada a `lead-v2`.

V03.6: retirada la nota interna del formulario de contacto en la interfaz.
