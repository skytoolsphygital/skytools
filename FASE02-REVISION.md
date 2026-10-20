# SKYTOOLS ECOSYSTEM · MAIN WEB · Fase 02 / PREVISUALIZACIÓN

**Estado:** diseño piloto local basado en el ZIP V03.6 aprobado. NO desplegado; NO es un ZIP final de Namecheap.

## Cambios deliberados
- Barra "SKYTOOLS ECOSYSTEM" compartimentada debajo del header existente, sin ocupar espacio dentro del menú comercial.
- Selector de unidades: Corporativo, Industrial, FPV RAW, 3D LAB, Plataformas Inmersivas 360°, Derecho Aeronáutico.
- Navegación dentro de una misma pestaña hacia las landing (sin `target="_blank"` en las tarjetas de las tres principales unidades).
- Accesibilidad de menú con native details/summary, cierre por Escape, clic fuera y enlaces.
- Banda de enlaces a unidades en el pie, sin alterar logotipo, sello BIC ni logo DEC.

## Conservado SIN modificar
- HTML de formulario, estructura de campos, consentimientos y selectores.
- Configuración de Supabase y JS original de envío de leads (solo se agrega código independiente de navegación al final del JS).
- sitemap.xml, robots.txt, favicon, canónicos y política de SEO.
- Imágenes originales del ZIP, paleta y secciones.

## Riesgos / verificaciones antes de publicación
- Probar `https://3d.skytools.org/` y landing en navegador tras publicación.
- Formulario real en el dominio oficial, CORS, entrega de correo y eventos de conversión.
- HTTPS en raíz y www; asegurar Document Root en Namecheap.
- Los enlaces a Plataformas 360° y Derecho Aeronáutico usan anclas de la Main Web hasta crear landing propias.

## GitHub
La rama principal actual en GitHub NO coincide con el ZIP V03.6 en estructura y recursos gráficos. NO sobrescribir `main` hasta aprobar la previsualización y reconciliar archivos para evitar despliegues inconsistentes.
