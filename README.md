# GEONET

Plataforma web de gestión de redes de telecomunicaciones con geolocalización. GEONET permite a una operadora supervisar su infraestructura de fibra y radioenlaces sobre el mapa: ver el estado de cada nodo (activo, degradado o caído), detectar incidencias y cuántos clientes afectan, y administrar los nodos de red y las cuentas de usuario del sistema.

Este repositorio contiene la **maquetación web** del sistema: sistema de diseño, acceso público, panel de control y módulo CRUD.

**Asignatura:** Análisis y Diseño de Sistemas (ADS-433) · IUJO · Prof. Eduardo Nieves

## Integrantes

| Nombre | C.I. |
|---|---|
| Edgar Duno | V-20.670.098 |
| Luisana Santeliz | V-30.105.439 |
| Aixa Alejos | V-29.909.927 |
| Yoel Hernández | V-32.151.604 |

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica de las vistas |
| CSS3 | Estilos, variables en `:root` y diseño responsivo |
| JavaScript (ES6) | Validación, modales, toasts, filtros y CRUD en el navegador |
| Leaflet 1.9.4 | Mapa de la red en el panel (teselas oscuras de Esri) |
| Google Fonts | Tipografías Outfit (títulos) y Open Sans (textos) |

En el sistema final el mapa se implementará con Google Maps a través del backend, para no exponer la clave de la API en el navegador.

## Vistas

| Archivo | Contenido |
|---|---|
| [`sistema_diseno.html`](sistema_diseno.html) | Tipografía, paleta, iconos, botones en 4 estados, formularios, modales y toasts |
| [`login.html`](login.html) | Inicio de sesión |
| [`registro.html`](registro.html) | Registro de cuenta pública |
| [`dashboard.html`](dashboard.html) | Panel con indicadores, accesos directos y mapa de la red |
| [`crud.html`](crud.html) | Usuarios en tabla |
| [`crud-cards.html`](crud-cards.html) | Nodos de red en tarjetas |

Los estilos están en `styles.css` y el comportamiento en `script.js`.

## Cómo abrirlo

Abrir `login.html` en el navegador. No necesita instalación ni servidor.

Credenciales de prueba: usuario `eduno`, contraseña `geonet2026`.

El mapa del panel necesita conexión a internet.

## Créditos

Fotografía de fibra óptica de las pantallas de acceso: Compagnons, en [Unsplash](https://unsplash.com/photos/lY_JEN49Re4).
