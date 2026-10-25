# MarketOps - Plataforma de monitoreo de equipos en sucursal
- Proyecto de **Desarrollo Web y Móvil**, Universidad Diego Portales.

*MarketOps es una cadena de supermercados nacional, que necesita una plataforma web para el equipo de soporte técnico.*

---
# Equipo
- Rocío Molina
- Genesis Llancanao
- Vicente Umanzor

---
# Estado Actual (Entrega 2):
- Prototipo interactivo hecho con **HTML, CSS y JavaScript**, sin dependencias externas. Los datos se cargan desde archivos JSON y los cambios se guardan solo durante la sesión del navegador.

[Instancia en vivo: 44.207.193.27](http://44.207.193.27)

---
# Qué cambió respecto a la Entrega 1
- Datos de sucursales y equipos cargados desde `sucursales.json` (antes estaban escritos en el HTML).
- Inicio de sesión con validación contra `users.json` y tres roles: soporte, administrativo y encargado.
- Páginas internas protegidas: sin sesión se redirige al inicio, y cada encargado solo ve su sucursal.
- Panel con filtros «Ver todas» y «Solo con fallas».
- Detalle de una sola sucursal según el `id` de la URL.
- El encargado reporta fallas (con descripción y fecha) y el técnico marca equipos como reparados.
- Diseño responsivo para celular, tablet y escritorio.
- Se eliminó la sección de e-commerce del inicio.

---
# Estructura
- **index.html**: inicio e inicio de sesión.
- **html/panel-sucursales.html**: listado de las 12 sucursales con equipos y fallas.
- **html/detalles.html**: equipos (cajas, balanzas, impresoras) de una sucursal.
- **css/: **base**, **index** , **panel-sucursales**,**detalles** y **stylesize** (adaptación por dispositivo).
- **js/**: **login**, **sesion**, **panel**, **detalles** y **acciones**.
- **data/**: **sucursales.json** y **users.json**.
- **img/**: logo.

---
# Acceso de prueba
| Rol | Correo | Contraseña |
|---|---|---|
| Administrador | admin@marketops.cl | ejemploadmin |
| Soporte técnico | soporte@marketops.cl | ejemplosupp |
| Encargado Maipú | maipu@marketops.cl | ejemplomaipu |
| Encargado Providencia | providencia@marketops.cl | ejemploprovi |
| Encargado Melipilla | melipilla@marketops.cl | ejemplomeli |

---
# Limitaciones
- Los cambios se pierden al cerrar sesión (no hay base de datos).
- Las credenciales están en un archivo accesible desde el navegador (solo válido para un prototipo).
- Un equipo con falla se asume como dado de baja.

---
# Pendiente Entrega 3
- Backend y persistencia real de datos.
- Historial de fallas por sucursal, con fecha de reporte y resolución.
- Gestión de usuarios por parte del administrador.
