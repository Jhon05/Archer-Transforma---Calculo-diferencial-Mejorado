# ArcoTransforma v56 · interfaz Deriva Invaders + bloqueos Conquista Integral

Este mismo archivo ZIP sirve para los dos destinos.

## GitHub Pages

1. Descomprime `ArcoTransforma_v56_Bloqueos_Conquista_Integral_SCORM_GitHub.zip` en tu computador.
2. En GitHub abre **Add file → Upload files**.
3. Arrastra de una sola vez todos los archivos y las cuatro carpetas extraídas: `avframes`, `banco`, `bg_progression` y `targets`.
4. Comprueba que `index.html` e `imsmanifest.xml` queden directamente en la raíz del repositorio, no dentro de otra carpeta.
5. Pulsa **Commit changes**.
6. En **Settings → Pages** selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.

`imsmanifest.xml` puede permanecer en GitHub: no impide que GitHub Pages abra `index.html`.

## Brightspace SCORM 1.2

Carga directamente **este mismo ZIP cerrado**, sin descomprimirlo. `imsmanifest.xml` está en la raíz del paquete. El juego comunica una nota de 0.00 a 5.00 y marca aprobado desde 3.00.

## Contenido compacto

Las 130 imágenes de animación del arquero están agrupadas en 13 hojas de sprites. El paquete mantiene una estructura compacta y no contiene la carpeta intermedia `a`; las carpetas `avframes`, `banco`, `bg_progression` y `targets` quedan directamente en la raíz.


## Control de integridad v56
- Bloquea clic derecho, copiar/cortar, guardar, imprimir, recargar, ver código fuente y atajos usuales de herramientas de desarrollo.
- Registra salida de pantalla completa, cambio de pestaña/minimización y pérdida de foco.
- Primera incidencia: advertencia. Incidencias 2–4: descuento de 0,05 puntos por incidencia. Quinta incidencia: intento anulado y nota SCORM 0,00.


## v57 — Integridad Conquista Integral verificada
- Caché y service worker actualizados para evitar cargar versiones antiguas.
- Bloqueos activos: pantalla completa, pestaña/minimización, foco, clic derecho, copiar/cortar/pegar, guardar, imprimir, recargar, código fuente, herramientas de desarrollo y PrintScreen.
- Incidencia 1: advertencia. Incidencias 2–4: −0,05. Incidencia 5: nota 0 y bloqueo definitivo visible.
