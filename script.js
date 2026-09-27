/* GEONET · script compartido */

/* 1. DATOS DE EJEMPLO */

const USUARIOS = [
  { id: 1, nombre: 'Edgar Duno', usuario: 'eduno', correo: 'eduno@geonet.ve', rol: 'admin', zona: 'Nacional', estado: 'activo', alta: '2025-01-14' },
  { id: 2, nombre: 'Carla Medina', usuario: 'cmedina', correo: 'cmedina@geonet.ve', rol: 'operador', zona: 'Caracas', estado: 'activo', alta: '2025-02-03' },
  { id: 3, nombre: 'Luis Parra', usuario: 'lparra', correo: 'lparra@geonet.ve', rol: 'tecnico', zona: 'Carabobo', estado: 'activo', alta: '2025-02-21' },
  { id: 4, nombre: 'Andrea Rojas', usuario: 'arojas', correo: 'arojas@geonet.ve', rol: 'operador', zona: 'Zulia', estado: 'suspendido', alta: '2025-03-08' },
  { id: 5, nombre: 'Miguel Ortega', usuario: 'mortega', correo: 'mortega@geonet.ve', rol: 'tecnico', zona: 'Aragua', estado: 'activo', alta: '2025-03-19' },
  { id: 6, nombre: 'Daniela Suárez', usuario: 'dsuarez', correo: 'dsuarez@geonet.ve', rol: 'publico', zona: 'Caracas', estado: 'activo', alta: '2025-04-02' },
  { id: 7, nombre: 'Jorge Belisario', usuario: 'jbelisario', correo: 'jbelisario@geonet.ve', rol: 'tecnico', zona: 'Anzoátegui', estado: 'activo', alta: '2025-04-27' },
  { id: 8, nombre: 'Patricia León', usuario: 'pleon', correo: 'pleon@geonet.ve', rol: 'operador', zona: 'Bolívar', estado: 'activo', alta: '2025-05-11' },
  { id: 9, nombre: 'Rafael Guedez', usuario: 'rguedez', correo: 'rguedez@geonet.ve', rol: 'publico', zona: 'Carabobo', estado: 'suspendido', alta: '2025-05-30' },
  { id: 10, nombre: 'Verónica Alcalá', usuario: 'valcala', correo: 'valcala@geonet.ve', rol: 'admin', zona: 'Nacional', estado: 'activo', alta: '2025-06-16' },
  { id: 11, nombre: 'Samuel Rivas', usuario: 'srivas', correo: 'srivas@geonet.ve', rol: 'tecnico', zona: 'Zulia', estado: 'activo', alta: '2025-07-04' },
  { id: 12, nombre: 'Gabriela Pinto', usuario: 'gpinto', correo: 'gpinto@geonet.ve', rol: 'publico', zona: 'Aragua', estado: 'activo', alta: '2025-08-12' },
];

const NODOS = [
  { id: 1, codigo: 'CCS-01', nombre: 'Central Chacao', zona: 'Caracas', tipo: 'Central de fibra', estado: 'activo', clientes: 1284, enlaces: 6, lat: 10.4969, lon: -66.8536 },
  { id: 2, codigo: 'CCS-02', nombre: 'Nodo Altamira', zona: 'Caracas', tipo: 'Nodo de acceso', estado: 'activo', clientes: 942, enlaces: 4, lat: 10.4964, lon: -66.8479 },
  { id: 3, codigo: 'CCS-03', nombre: 'Nodo La Candelaria', zona: 'Caracas', tipo: 'Nodo de acceso', estado: 'degradado', clientes: 711, enlaces: 3, lat: 10.5061, lon: -66.9036 },
  { id: 4, codigo: 'CCS-04', nombre: 'Repetidor El Ávila', zona: 'Caracas', tipo: 'Radioenlace', estado: 'activo', clientes: 0, enlaces: 5, lat: 10.5361, lon: -66.8794 },
  { id: 5, codigo: 'CCS-05', nombre: 'Nodo Baruta', zona: 'Caracas', tipo: 'Nodo de acceso', estado: 'activo', clientes: 1073, enlaces: 4, lat: 10.4331, lon: -66.8756 },
  { id: 6, codigo: 'CCS-06', nombre: 'Nodo Catia', zona: 'Caracas', tipo: 'Nodo de acceso', estado: 'caido', clientes: 634, enlaces: 2, lat: 10.5089, lon: -66.9503 },
  { id: 7, codigo: 'VAL-01', nombre: 'Central Valencia', zona: 'Carabobo', tipo: 'Central de fibra', estado: 'activo', clientes: 1547, enlaces: 7, lat: 10.1621, lon: -68.0077 },
  { id: 8, codigo: 'VAL-02', nombre: 'Nodo San Diego', zona: 'Carabobo', tipo: 'Nodo de acceso', estado: 'activo', clientes: 688, enlaces: 3, lat: 10.2033, lon: -67.9578 },
  { id: 9, codigo: 'MCY-01', nombre: 'Nodo Maracay Centro', zona: 'Aragua', tipo: 'Nodo de acceso', estado: 'degradado', clientes: 823, enlaces: 4, lat: 10.2469, lon: -67.5958 },
  { id: 10, codigo: 'MAR-01', nombre: 'Central Maracaibo', zona: 'Zulia', tipo: 'Central de fibra', estado: 'activo', clientes: 1392, enlaces: 6, lat: 10.6545, lon: -71.6289 },
  { id: 11, codigo: 'MAR-02', nombre: 'Nodo La Lago', zona: 'Zulia', tipo: 'Nodo de acceso', estado: 'activo', clientes: 517, enlaces: 3, lat: 10.6742, lon: -71.6017 },
  { id: 12, codigo: 'BAR-01', nombre: 'Nodo Barcelona', zona: 'Anzoátegui', tipo: 'Nodo de acceso', estado: 'activo', clientes: 764, enlaces: 4, lat: 10.1333, lon: -64.6833 },
  { id: 13, codigo: 'PLC-01', nombre: 'Nodo Puerto La Cruz', zona: 'Anzoátegui', tipo: 'Radioenlace', estado: 'activo', clientes: 591, enlaces: 3, lat: 10.2167, lon: -64.6333 },
  { id: 14, codigo: 'CGU-01', nombre: 'Nodo Ciudad Guayana', zona: 'Bolívar', tipo: 'Central de fibra', estado: 'activo', clientes: 1106, enlaces: 5, lat: 8.3533, lon: -62.6519 },
];

const ETIQUETA_ROL = { admin: 'Administrador', operador: 'Operador', tecnico: 'Técnico', publico: 'Público' };
const ETIQUETA_ESTADO = { activo: 'Activo', degradado: 'Degradado', caido: 'Caído', suspendido: 'Suspendido' };

/* 2. ICONOS */

const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" hidden aria-hidden="true">
  <symbol id="i-usuario" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></symbol>
  <symbol id="i-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5v.5"/></symbol>
  <symbol id="i-candado" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></symbol>
  <symbol id="i-correo" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></symbol>
  <symbol id="i-ojo" viewBox="0 0 24 24"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="3"/></symbol>
  <symbol id="i-ojo-off" viewBox="0 0 24 24"><path d="M3 3l18 18"/><path d="M10.6 6.2A9.9 9.9 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3.2 3.8"/><path d="M6.6 6.8A17 17 0 0 0 2 12s3.5 6 10 6a9.6 9.6 0 0 0 3.6-.7"/></symbol>
  <symbol id="i-nuevo" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
  <symbol id="i-menos" viewBox="0 0 24 24"><path d="M5 12h14"/></symbol>
  <symbol id="i-editar" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></symbol>
  <symbol id="i-eliminar" viewBox="0 0 24 24"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/><path d="M10 11v6M14 11v6"/></symbol>
  <symbol id="i-buscar" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></symbol>
  <symbol id="i-filtro" viewBox="0 0 24 24"><path d="M3 5h18l-7 8v6l-4 2v-8Z"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 13 4 4L19 7"/></symbol>
  <symbol id="i-alerta" viewBox="0 0 24 24"><path d="M12 3 2 20h20L12 3Z"/><path d="M12 9v5M12 17.5v.5"/></symbol>
  <symbol id="i-error" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></symbol>
  <symbol id="i-cerrar" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></symbol>
  <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol>
  <symbol id="i-panel" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="10" width="7" height="11" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></symbol>
  <symbol id="i-marca" viewBox="0 0 256 256"><path fill="currentColor" stroke="none" d="M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Zm77.39,12.7A83.94,83.94,0,0,1,190.61,184a12,12,0,0,1-17.89-16,59.92,59.92,0,0,0,0-80,12,12,0,0,1,17.89-16,84.07,84.07,0,0,1,14.78,88.7ZM83.28,168a12,12,0,0,1-17.89,16,83.94,83.94,0,0,1,0-112A12,12,0,0,1,83.28,88a59.92,59.92,0,0,0,0,80ZM252,128a123.63,123.63,0,0,1-35.43,86.78A12,12,0,1,1,199.43,198a99.88,99.88,0,0,0,0-140,12,12,0,0,1,17.14-16.8A123.63,123.63,0,0,1,252,128ZM56.57,198a12,12,0,0,1-17.14,16.8,123.89,123.89,0,0,1,0-173.56A12,12,0,0,1,56.57,58a99.88,99.88,0,0,0,0,140Z"/></symbol>
  <symbol id="i-nodos" viewBox="0 0 24 24"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M12 7.5 6 15.8M12 7.5l6 8.3M7.4 18h9.2"/></symbol>
  <symbol id="i-equipo" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></symbol>
  <symbol id="i-clientes" viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.5a3.2 3.2 0 0 1 0 6M17.5 14.4A6.5 6.5 0 0 1 21.5 20"/></symbol>
  <symbol id="i-senal" viewBox="0 0 24 24"><path d="M5 18v-4M10 18v-8M15 18v-12M20 18V8"/></symbol>
  <symbol id="i-salir" viewBox="0 0 24 24"><path d="M12 3v9"/><path d="M6.3 6.3a8 8 0 1 0 11.4 0"/></symbol>
  <symbol id="i-ir" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></symbol>
  <symbol id="i-flecha" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></symbol>
  <symbol id="i-manchas" viewBox="0 0 120 72"><path d="M0 34c14-6 22 6 20 16-2 9 8 12 16 8 10-5 20 2 18 10-1 3-2 4-3 4H0Z"/><circle cx="46" cy="40" r="7"/><circle cx="10" cy="22" r="5"/><circle cx="62" cy="54" r="3"/></symbol>
</svg>`;

function icono(nombre, clase = 'icono') {
  return `<svg class="${clase}" aria-hidden="true"><use href="#i-${nombre}"></use></svg>`;
}

/* 3. MODALES */

function abrirModal(id) {
  const modal = document.getElementById(id);
  if (modal && !modal.open) modal.showModal();
}

function cerrarModal(id) {
  const modal = document.getElementById(id);
  if (modal && modal.open) modal.close();
}

function prepararModales() {
  document.querySelectorAll('dialog.modal').forEach((modal) => {
    modal.addEventListener('click', (evento) => {
      if (evento.target === modal) modal.close();
    });

    modal.addEventListener('close', () => {
      const zona = document.querySelector('.toasts');
      if (zona?.parentElement !== modal) return;
      document.body.append(zona);
      if (zona.children.length) zona.showPopover();
    });
  });

  document.querySelectorAll('[data-abre]').forEach((boton) => {
    boton.addEventListener('click', () => abrirModal(boton.dataset.abre));
  });

  document.querySelectorAll('[data-cierra]').forEach((boton) => {
    boton.addEventListener('click', () => cerrarModal(boton.dataset.cierra));
  });

  // Toasts de ejemplo del sistema de diseño
  const ejemplos = {
    exito: { titulo: '¡Registro exitoso!', texto: 'Los datos fueron guardados correctamente.' },
    error: { titulo: 'Error al procesar datos', texto: 'Revisa los campos obligatorios.' },
    aviso: { titulo: 'Nodo degradado', texto: 'CCS-03 reporta pérdida de paquetes.' },
  };

  document.querySelectorAll('[data-toast]').forEach((boton) => {
    boton.addEventListener('click', () => {
      const tipo = boton.dataset.toast;
      mostrarToast({ tipo, ...ejemplos[tipo] });
    });
  });
}

/* 4. TOASTS CON TEMPORIZADOR */

function contenedorToasts() {
  let zona = document.querySelector('.toasts');
  if (!zona) {
    zona = document.createElement('output');
    zona.className = 'toasts';
    zona.setAttribute('aria-live', 'polite');
  }
  const destino = document.querySelector('dialog[open]') || document.body;
  if (zona.parentElement !== destino) destino.append(zona);
  zona.popover = 'manual';
  if (zona.matches(':popover-open')) zona.hidePopover();
  zona.showPopover();
  return zona;
}

const DURACION_TOAST = { exito: 4, info: 4, aviso: 5, error: 6 };
const MAXIMO_TOASTS = 3;
const VUELTA_ANILLO = 107;

function mostrarToast({ tipo = 'exito', titulo = '', texto = '', segundos, accion }) {
  const iconos = { exito: 'check', error: 'error', aviso: 'alerta', info: 'senal' };
  const total = segundos ?? (accion ? 6 : DURACION_TOAST[tipo]);
  const zona = contenedorToasts();

  const vivos = [...zona.querySelectorAll('.toast:not(.toast--saliendo)')];
  if (vivos.length >= MAXIMO_TOASTS) vivos.at(-1).retirar();

  const toast = document.createElement('article');
  toast.className = `toast toast--${tipo}`;
  if (tipo === 'error') toast.setAttribute('role', 'alert');
  toast.innerHTML = `
    <span class="toast__manchas">${icono('manchas', '')}</span>
    <span class="toast__icono">${icono(iconos[tipo] || 'senal')}</span>
    <div class="toast__cuerpo">
      <p class="toast__titulo">${titulo}</p>
      <p class="toast__texto">${texto}</p>
    </div>
    ${accion ? `<button type="button" class="toast__accion">${accion.texto}</button>` : ''}
    <button type="button" class="toast__cerrar" aria-label="Cerrar notificación">
      <svg class="toast__anillo" viewBox="0 0 40 40" aria-hidden="true">
        <circle class="toast__pista" cx="20" cy="20" r="17" />
        <circle class="toast__avance" cx="20" cy="20" r="17" />
      </svg>
      <span class="toast__segundos cifra" aria-hidden="true">${total}</span>
      ${icono('cerrar', 'icono icono--sm toast__x')}
    </button>`;
  zona.prepend(toast);

  const marcador = toast.querySelector('.toast__segundos');
  const avance = toast.querySelector('.toast__avance');
  let restante = total;
  let pausado = false;

  const cuenta = setInterval(() => {
    if (pausado) return;
    restante -= 1;
    marcador.textContent = Math.max(restante, 0);
    avance.style.strokeDashoffset = VUELTA_ANILLO * (1 - restante / total);
    if (restante <= 0) retirar();
  }, 1000);

  const pausar = () => { pausado = true; };
  const seguir = () => { pausado = false; };
  toast.addEventListener('mouseenter', pausar);
  toast.addEventListener('mouseleave', seguir);
  toast.addEventListener('focusin', pausar);
  toast.addEventListener('focusout', seguir);

  function retirar() {
    if (toast.classList.contains('toast--saliendo')) return;
    clearInterval(cuenta);
    toast.classList.add('toast--saliendo');
    setTimeout(() => {
      toast.remove();
      if (!zona.children.length && zona.matches(':popover-open')) zona.hidePopover();
    }, 160);
  }

  toast.retirar = retirar;
  toast.querySelector('.toast__cerrar').addEventListener('click', retirar);
  toast.querySelector('.toast__accion')?.addEventListener('click', () => {
    accion.alPulsar();
    retirar();
  });
  return toast;
}

/* 5. BARRA LATERAL Y MENÚ HAMBURGUESA */

function prepararLateral() {
  const lateral = document.querySelector('.lateral');
  const boton = document.querySelector('.hamburguesa');
  const velo = document.querySelector('.velo');
  if (!lateral || !boton) return;

  const esMovil = () => window.matchMedia('(max-width: 768px)').matches;

  function abrir() {
    lateral.dataset.abierta = 'true';
    lateral.removeAttribute('inert');
    boton.setAttribute('aria-expanded', 'true');
    if (velo) velo.dataset.visible = 'true';
    lateral.querySelector('a, button')?.focus();
  }

  function cerrar(devolverFoco = true) {
    lateral.dataset.abierta = 'false';
    boton.setAttribute('aria-expanded', 'false');
    if (velo) velo.dataset.visible = 'false';
    if (esMovil()) lateral.setAttribute('inert', '');
    if (devolverFoco) boton.focus();
  }

  function sincronizar() {
    if (esMovil()) {
      if (lateral.dataset.abierta !== 'true') lateral.setAttribute('inert', '');
    } else {
      lateral.removeAttribute('inert');
      lateral.dataset.abierta = 'false';
      if (velo) velo.dataset.visible = 'false';
      boton.setAttribute('aria-expanded', 'false');
    }
  }

  boton.addEventListener('click', () => {
    if (lateral.dataset.abierta === 'true') cerrar();
    else abrir();
  });

  velo?.addEventListener('click', () => cerrar());

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && lateral.dataset.abierta === 'true') cerrar();
  });

  window.addEventListener('resize', sincronizar);
  sincronizar();
}

/* 6. VALIDACIÓN DE FORMULARIOS */

function marcarError(control, mensaje) {
  const campo = control.closest('.campo');
  if (!campo) return;
  const aviso = campo.querySelector('.campo__error');
  if (mensaje) {
    campo.classList.add('campo--error');
    control.setAttribute('aria-invalid', 'true');
    if (aviso) aviso.textContent = mensaje;
  } else {
    campo.classList.remove('campo--error');
    control.removeAttribute('aria-invalid');
    if (aviso) aviso.textContent = '';
  }
}

function validarControl(control) {
  const valor = control.value.trim();
  if (control.required && valor === '') return 'Este campo es obligatorio.';
  if (control.minLength > 0 && valor !== '' && valor.length < control.minLength) {
    return `Usa al menos ${control.minLength} caracteres.`;
  }
  if (control.type === 'email' && valor !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor)) {
    return 'Escribe un correo con formato válido.';
  }
  if (control.dataset.igualA) {
    const otro = document.getElementById(control.dataset.igualA);
    if (otro && valor !== otro.value) return 'Las contraseñas no coinciden.';
  }
  return '';
}

function validarFormulario(formulario) {
  let valido = true;
  formulario.querySelectorAll('.campo__control').forEach((control) => {
    const error = validarControl(control);
    marcarError(control, error);
    if (error) valido = false;
  });
  return valido;
}

function prepararValidacion() {
  document.querySelectorAll('.campo__control').forEach((control) => {
    const aviso = control.closest('.campo')?.querySelector('.campo__error');
    if (aviso && control.id) {
      aviso.id = `${control.id}-error`;
      control.setAttribute('aria-describedby', aviso.id);
    }
    control.addEventListener('blur', () => marcarError(control, validarControl(control)));
    control.addEventListener('input', () => {
      if (control.closest('.campo')?.classList.contains('campo--error')) {
        marcarError(control, validarControl(control));
      }
    });
  });

  // Mostrar u ocultar contraseña
  document.querySelectorAll('.campo__ojo').forEach((boton) => {
    boton.addEventListener('click', () => {
      const entrada = boton.parentElement.querySelector('input');
      const oculta = entrada.type === 'password';
      entrada.type = oculta ? 'text' : 'password';
      boton.innerHTML = icono(oculta ? 'ojo-off' : 'ojo', 'icono icono--sm');
      boton.setAttribute('aria-label', oculta ? 'Ocultar contraseña' : 'Mostrar contraseña');
    });
  });
}

/* Botones − / + de los campos numéricos */
function prepararNumeros() {
  document.querySelectorAll('.campo__caja input[type="number"]').forEach((entrada) => {
    const pasos = document.createElement('span');
    pasos.className = 'pasos';
    pasos.innerHTML = `
      <button type="button" class="pasos__boton" data-paso="-1" aria-label="Restar uno">${icono('menos', 'icono icono--sm')}</button>
      <button type="button" class="pasos__boton" data-paso="1" aria-label="Sumar uno">${icono('nuevo', 'icono icono--sm')}</button>`;
    entrada.after(pasos);

    pasos.querySelectorAll('[data-paso]').forEach((boton) => {
      boton.addEventListener('click', () => {
        if (boton.dataset.paso === '1') entrada.stepUp();
        else entrada.stepDown();
        entrada.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });
  });
}

/* Seguridad de la contraseña */
function prepararFuerza() {
  const medidor = document.querySelector('[data-fuerza]');
  const clave = document.getElementById('clave');
  if (!medidor || !clave) return;
  const niveles = [
    { texto: 'Débil', clase: 'debil' },
    { texto: 'Aceptable', clase: 'media' },
    { texto: 'Segura', clase: 'segura' },
  ];

  clave.addEventListener('input', () => {
    const valor = clave.value;
    medidor.hidden = valor === '';
    let puntos = 0;
    if (valor.length >= 8) puntos += 1;
    if (/[a-z]/.test(valor) && /[A-Z]/.test(valor)) puntos += 1;
    if (/\d/.test(valor)) puntos += 1;
    if (/[^a-zA-Z\d]/.test(valor)) puntos += 1;
    const nivel = niveles[valor.length < 8 ? 0 : Math.min(puntos - 1, 2)] || niveles[0];
    medidor.dataset.nivel = nivel.clase;
    medidor.querySelector('.fuerza__texto').textContent = `Seguridad: ${nivel.texto}`;
  });
}

/* Envío del login y del registro */
function prepararAcceso() {
  const login = document.getElementById('form-login');

  login?.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!validarFormulario(login)) return;

    const boton = login.querySelector('button[type="submit"]');
    boton.disabled = true;
    boton.innerHTML = '<span class="girador" aria-hidden="true"></span>Ingresando…';
    login.setAttribute('aria-busy', 'true');

    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 700);
  });

  document.querySelector('[data-recuperar]')?.addEventListener('click', () => {
    mostrarToast({
      tipo: 'info',
      titulo: 'Recupera tu acceso',
      texto: 'Pide a un administrador de GEONET que restablezca tu contraseña.',
    });
  });

  const registro = document.getElementById('form-registro-cuenta');

  registro?.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const terminos = document.getElementById('terminos');
    const avisoTerminos = document.getElementById('terminos-error');
    const camposOk = validarFormulario(registro);

    avisoTerminos.textContent = terminos.checked ? '' : 'Debes aceptar los términos para continuar.';
    if (!camposOk || !terminos.checked) {
      mostrarToast({
        tipo: 'error',
        titulo: 'No se pudo crear la cuenta',
        texto: 'Revisa los campos marcados.',
      });
      return;
    }

    const boton = registro.querySelector('button[type="submit"]');
    boton.disabled = true;
    boton.innerHTML = '<span class="girador" aria-hidden="true"></span>Creando tu cuenta…';
    registro.setAttribute('aria-busy', 'true');

    mostrarToast({
      tipo: 'exito',
      titulo: '¡Registro exitoso!',
      texto: 'Tu cuenta está lista. Entrando al panel…',
    });

    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1400);
  });
}

/* Muestras de color */
function prepararMuestras() {
  const muestras = document.querySelectorAll('.muestra');
  if (muestras.length === 0) return;
  const estilos = getComputedStyle(document.documentElement);

  muestras.forEach((muestra) => {
    const variable = muestra.dataset.token;
    const valor = estilos.getPropertyValue(`--${variable}`).trim();
    muestra.querySelector('.muestra__hex').textContent = valor;

    muestra.addEventListener('click', () => {
      navigator.clipboard?.writeText(valor);
      mostrarToast({ tipo: 'info', titulo: 'Color copiado', texto: `${valor} está en el portapapeles.` });
    });
  });
}

/* 7. INDICADORES DEL PANEL */

function calcularIndicadores() {
  const conIncidencia = NODOS.filter((n) => n.estado !== 'activo');
  const sumarClientes = (lista) => lista.reduce((suma, n) => suma + n.clientes, 0);
  return {
    nodos: NODOS.length,
    activos: NODOS.length - conIncidencia.length,
    incidencias: conIncidencia.length,
    caidos: NODOS.filter((n) => n.estado === 'caido').length,
    enlaces: NODOS.reduce((suma, n) => suma + n.enlaces, 0),
    conectados: sumarClientes(NODOS.filter((n) => n.estado !== 'caido')),
  };
}

function pintarIndicadores() {
  const zona = document.querySelector('[data-kpis]');
  if (!zona) return;
  const k = calcularIndicadores();

  const fecha = document.querySelector('[data-fecha]');
  if (fecha) {
    const hoy = new Date().toLocaleDateString('es', { weekday: 'long', day: 'numeric', month: 'long' });
    fecha.textContent = hoy.charAt(0).toUpperCase() + hoy.slice(1);
  }


  const usuariosActivos = USUARIOS.filter((u) => u.estado === 'activo').length;
  const tarjetas = [
    { rotulo: 'Nodos activos', valor: `${k.activos}/${k.nodos}`, chapa: `${((k.activos / k.nodos) * 100).toFixed(1).replace('.', ',')} %`, detalle: `${k.enlaces} enlaces en servicio`, enlace: 'crud-cards.html', tono: 'azul' },
    { rotulo: 'Clientes conectados', valor: k.conectados.toLocaleString('es-VE'), chapa: '6 zonas', detalle: 'Suscriptores con servicio', enlace: 'crud-cards.html', tono: 'noche' },
    { rotulo: 'Incidencias abiertas', valor: String(k.incidencias), chapa: `${k.caidos} caído`, detalle: 'Nodos degradados o caídos', enlace: 'crud-cards.html?filtro=incidencia', tono: 'rojo' },
    { rotulo: 'Usuarios del sistema', valor: String(USUARIOS.length), chapa: `${usuariosActivos} activos`, detalle: `${USUARIOS.length - usuariosActivos} cuentas suspendidas`, enlace: 'crud.html', tono: 'noche' },
  ];

  zona.innerHTML = tarjetas
    .map(
      (t) => `
      <article class="kpi kpi--${t.tono}">
        <a class="kpi__ir" href="${t.enlace}" aria-label="Ver detalle de ${t.rotulo.toLowerCase()}">${icono('ir', 'icono icono--sm')}</a>
        <p class="kpi__rotulo">${t.rotulo}</p>
        <p class="kpi__cifra">
          <span class="kpi__valor cifra">${t.valor}</span>
          <span class="kpi__chapa">${t.chapa}</span>
        </p>
        <p class="kpi__detalle">${t.detalle}</p>
      </article>`
    )
    .join('');
}

function pintarEstados() {
  const dona = document.querySelector('[data-dona]');
  if (!dona) return;
  const cuenta = { activo: 0, degradado: 0, caido: 0 };
  NODOS.forEach((n) => { cuenta[n.estado] += 1; });
  const total = NODOS.length;
  const activo = (cuenta.activo / total) * 100;
  const degradado = activo + (cuenta.degradado / total) * 100;

  dona.innerHTML = `
    <p class="dona__grafico" role="img" aria-label="${cuenta.activo} activos, ${cuenta.degradado} degradados y ${cuenta.caido} caído de ${total} nodos">
      <span class="dona__centro"><span class="dona__total cifra">${total}</span> nodos</span>
    </p>
    <dl class="dona__leyenda">
      ${['activo', 'degradado', 'caido'].map((e) => `
        <div class="dona__dato">
          <dt><span class="red__muestra red__muestra--${e}"></span>${ETIQUETA_ESTADO[e]}</dt>
          <dd class="cifra">${cuenta[e]}</dd>
        </div>`).join('')}
    </dl>`;
  dona.querySelector('.dona__grafico').style.setProperty('--activo', `${activo}%`);
  dona.querySelector('.dona__grafico').style.setProperty('--degradado', `${degradado}%`);
}

/* Altas desde el panel */
function prepararAltasPanel() {
  const hoy = new Date().toISOString().slice(0, 10);
  const altas = [
    { modal: 'modal-usuario', formulario: 'form-usuario', lista: USUARIOS, unicos: ['usuario', 'correo'], defecto: { estado: 'activo', alta: hoy } },
    { modal: 'modal-nodo', formulario: 'form-nodo', lista: NODOS, unicos: ['codigo'], defecto: { estado: 'activo', clientes: 0, enlaces: 1 } },
  ];

  altas.forEach((alta) => {
    const formulario = document.getElementById(alta.formulario);
    if (!formulario) return;

    document.querySelector(`[data-abre="${alta.modal}"]`)?.addEventListener('click', () => {
      formulario.reset();
      formulario.querySelectorAll('.campo__control').forEach((control) => marcarError(control, ''));
    });

    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();
      if (!validarFormulario(formulario)) {
        mostrarToast({ tipo: 'error', titulo: 'Error al procesar datos', texto: 'Revisa los campos obligatorios.' });
        formulario.querySelector('[aria-invalid="true"]')?.focus();
        return;
      }

      const datos = Object.fromEntries(new FormData(formulario).entries());
      formulario.querySelectorAll('input[type="number"]').forEach((control) => {
        datos[control.name] = Number(control.value);
      });

      const repetido = alta.unicos.find((campo) =>
        alta.lista.some((r) => String(r[campo]).toLowerCase() === String(datos[campo]).toLowerCase())
      );
      if (repetido) {
        const control = formulario.elements[repetido];
        marcarError(control, 'Ya está registrado. Usa otro valor.');
        control.focus();
        return;
      }

      alta.lista.unshift({ id: Date.now(), ...alta.defecto, ...datos });
      cerrarModal(alta.modal);
      pintarIndicadores();
      pintarEstados();
      mostrarToast({ tipo: 'exito', titulo: '¡Registro exitoso!', texto: `${datos.nombre} se agregó correctamente.` });
    });
  });
}

/* 8. MAPA DE LA RED */

const TRONCAL = [['MAR-01', 'VAL-01'], ['VAL-01', 'MCY-01'], ['MCY-01', 'CCS-01'], ['CCS-01', 'BAR-01'], ['BAR-01', 'CGU-01']];

const ACCESOS_RED = [
  ['MAR-01', 'MAR-02'], ['VAL-01', 'VAL-02'], ['BAR-01', 'PLC-01'],
  ['CCS-01', 'CCS-02'], ['CCS-01', 'CCS-03'], ['CCS-01', 'CCS-04'], ['CCS-01', 'CCS-05'], ['CCS-01', 'CCS-06'],
];

function estadoEnlace(a, b) {
  const estados = [a.estado, b.estado];
  if (estados.includes('caido')) return 'caido';
  if (estados.includes('degradado')) return 'degradado';
  return 'activo';
}

function pintarMapa() {
  const lienzo = document.querySelector('[data-mapa]');
  if (!lienzo) return;

  const tabla = document.querySelector('[data-incidencias]');
  const orden = { caido: 0, degradado: 1 };
  tabla.innerHTML = NODOS.filter((n) => n.estado !== 'activo')
    .sort((a, b) => orden[a.estado] - orden[b.estado])
    .map(
      (n) => `
      <tr>
        <td>
          <span class="tabla__principal">${n.nombre}</span>
          <span class="tabla__secundario cifra">${n.codigo}</span>
        </td>
        <td class="tabla__secundario">${n.zona}</td>
        <td><span class="insignia insignia--${n.estado}">${ETIQUETA_ESTADO[n.estado]}</span></td>
        <td class="cifra">${n.clientes.toLocaleString('es-VE')}</td>
        <td><button type="button" class="enlace-mapa" data-ver-nodo="${n.codigo}">Ver en el mapa</button></td>
      </tr>`
    )
    .join('');

  if (!window.L) {
    document.querySelector('[data-mapa-aviso]').hidden = false;
    return;
  }

  const tokens = getComputedStyle(lienzo);
  const color = {
    activo: tokens.getPropertyValue('--acento').trim(),
    degradado: tokens.getPropertyValue('--alerta').trim(),
    caido: tokens.getPropertyValue('--caido').trim(),
  };
  const sinMovimiento = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const mapa = L.map(lienzo, { scrollWheelZoom: false, zoomSnap: 0.25 });
  mapa.fitBounds(NODOS.map((n) => [n.lat, n.lon]), { padding: [36, 36] });
  const esri = 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas';
  const atribucion = 'Teselas &copy; Esri &mdash; Esri, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
  L.tileLayer(`${esri}/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}`, { attribution: atribucion, maxZoom: 16 }).addTo(mapa);
  L.tileLayer(`${esri}/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}`, { maxZoom: 16 }).addTo(mapa);

  mapa.on('click', () => mapa.scrollWheelZoom.enable());
  mapa.on('mouseout', () => mapa.scrollWheelZoom.disable());

  const porCodigo = Object.fromEntries(NODOS.map((n) => [n.codigo, n]));
  const trazar = (pares, grosor) =>
    pares.forEach(([a, b]) => {
      const estado = estadoEnlace(porCodigo[a], porCodigo[b]);
      L.polyline([[porCodigo[a].lat, porCodigo[a].lon], [porCodigo[b].lat, porCodigo[b].lon]], {
        color: color[estado],
        weight: grosor,
        opacity: estado === 'activo' ? 0.55 : 0.9,
        dashArray: estado === 'activo' ? null : '6 6',
        interactive: false,
      }).addTo(mapa);
    });
  trazar(ACCESOS_RED, 1.5);
  trazar(TRONCAL, 3);

  const marcadores = {};
  NODOS.forEach((n) => {
    const icono = L.divIcon({
      className: '',
      iconSize: [16, 16],
      html: `<span class="marcador marcador--${n.estado}"></span>`,
    });
    marcadores[n.codigo] = L.marker([n.lat, n.lon], { icon: icono, title: `${n.codigo} · ${n.nombre}`, alt: n.nombre })
      .addTo(mapa)
      .bindPopup(
        `<strong class="globo__titulo">${n.codigo} · ${n.nombre}</strong>
         <span class="globo__detalle">${n.tipo} · ${n.zona}</span>
         <span class="insignia insignia--${n.estado}">${ETIQUETA_ESTADO[n.estado]}</span>`
      )
;
  });

  tabla.querySelectorAll('[data-ver-nodo]').forEach((boton) => {
    boton.addEventListener('click', () => {
      const n = porCodigo[boton.dataset.verNodo];
      lienzo.scrollIntoView({ behavior: sinMovimiento ? 'auto' : 'smooth', block: 'center' });
      mapa.flyTo([n.lat, n.lon], 14, { duration: sinMovimiento ? 0 : 0.8 });
      mapa.once('moveend', () => marcadores[n.codigo].openPopup());
    });
  });
}

function pintarZonas() {
  const zona = document.querySelector('[data-zonas]');
  if (!zona) return;

  const porZona = {};
  NODOS.forEach((n) => {
    porZona[n.zona] = porZona[n.zona] || { nodos: 0, clientes: 0 };
    porZona[n.zona].nodos += 1;
    porZona[n.zona].clientes += n.clientes;
  });

  const mayor = Math.max(...Object.values(porZona).map((z) => z.clientes));

  zona.innerHTML = Object.entries(porZona)
    .sort((a, b) => b[1].clientes - a[1].clientes)
    .map(
      ([nombre, datos]) => `
      <p class="zona">
        <span>${nombre}</span>
        <span class="zona__barra"><span class="zona__relleno" data-porcentaje="${(datos.clientes / mayor) * 100}"></span></span>
        <span class="zona__cifra cifra">${datos.clientes.toLocaleString('es-VE')}</span>
      </p>`
    )
    .join('');

  zona.querySelectorAll('[data-porcentaje]').forEach((relleno) => {
    relleno.style.width = `${relleno.dataset.porcentaje}%`;
  });
}

/* 9. MÓDULO CRUD */

function iniciarCrud(config) {
  const lista = document.querySelector('[data-lista]');
  if (!lista) return;

  let registros = config.registros.map((r) => ({ ...r }));
  let pagina = 1;
  let editando = null;
  let porEliminar = null;

  const buscador = document.querySelector('[data-buscador]');
  const filtro = document.querySelector('[data-filtro]');
  const paginador = document.querySelector('[data-paginador]');
  const formulario = document.getElementById('form-registro');
  const modalForm = document.getElementById('modal-registro');
  const modalBaja = document.getElementById('modal-baja');

  function filtrados() {
    const texto = (buscador?.value || '').trim().toLowerCase();
    const clave = filtro?.value || 'todos';
    return registros.filter((r) => {
      if (clave === 'incidencia') {
        if (r.estado === 'activo') return false;
      } else if (clave !== 'todos' && r[config.campoFiltro] !== clave) return false;
      if (texto === '') return true;
      return config.camposBusqueda.some((c) => String(r[c]).toLowerCase().includes(texto));
    });
  }

  function pintar() {
    const datos = filtrados();
    const porPagina = config.porPagina;
    const paginas = Math.max(1, Math.ceil(datos.length / porPagina));
    if (pagina > paginas) pagina = paginas;
    const visibles = datos.slice((pagina - 1) * porPagina, pagina * porPagina);

    const vacio = document.querySelector('[data-vacio]');
    const envoltorio = document.querySelector('[data-envoltorio]');
    const hayDatos = visibles.length > 0;
    if (vacio) vacio.hidden = hayDatos;
    if (envoltorio) envoltorio.hidden = !hayDatos;

    const cuenta = document.querySelector('[data-cuenta]');
    if (cuenta) {
      cuenta.textContent = datos.length === registros.length
        ? `${registros.length} ${config.nombrePlural}`
        : `${datos.length} de ${registros.length} ${config.nombrePlural}`;
    }

    lista.innerHTML = visibles.map(config.plantilla).join('');
    pintarPaginador(datos.length, paginas);
    conectarAcciones();
  }

  function pintarPaginador(total, paginas) {
    if (!paginador) return;
    paginador.hidden = total === 0;
    const desde = total === 0 ? 0 : (pagina - 1) * config.porPagina + 1;
    const hasta = Math.min(pagina * config.porPagina, total);

    const botones = Array.from({ length: paginas }, (_, i) => i + 1)
      .map(
        (n) =>
          `<button type="button" class="paginador__pagina" data-pagina="${n}" aria-current="${n === pagina}">${n}</button>`
      )
      .join('');

    paginador.innerHTML = `
      <p class="paginador__estado">Mostrando <span class="cifra">${desde}-${hasta}</span> de <span class="cifra">${total}</span> ${config.nombrePlural}</p>
      <p class="paginador__botones">
        <button type="button" class="paginador__pagina" data-salto="-1" ${pagina === 1 ? 'disabled' : ''} aria-label="Página anterior">‹</button>
        ${botones}
        <button type="button" class="paginador__pagina" data-salto="1" ${pagina === paginas ? 'disabled' : ''} aria-label="Página siguiente">›</button>
      </p>`;

    paginador.querySelectorAll('[data-pagina]').forEach((boton) => {
      boton.addEventListener('click', () => {
        pagina = Number(boton.dataset.pagina);
        pintar();
      });
    });

    paginador.querySelectorAll('[data-salto]').forEach((boton) => {
      boton.addEventListener('click', () => {
        pagina += Number(boton.dataset.salto);
        pintar();
      });
    });
  }

  function conectarAcciones() {
    lista.querySelectorAll('[data-editar]').forEach((boton) => {
      boton.addEventListener('click', () => abrirFormulario(Number(boton.dataset.editar)));
    });
    lista.querySelectorAll('[data-eliminar]').forEach((boton) => {
      boton.addEventListener('click', () => pedirBaja(Number(boton.dataset.eliminar)));
    });
  }

  function abrirFormulario(id) {
    editando = id ? registros.find((r) => r.id === id) : null;
    document.getElementById('modal-registro-titulo').textContent = editando
      ? `Editar ${config.nombreSingular}`
      : `Nuevo ${config.nombreSingular}`;

    formulario.reset();
    formulario.querySelectorAll('.campo__control').forEach((control) => marcarError(control, ''));
    formulario.querySelector('[type="submit"]').textContent = editando ? 'Guardar cambios' : `Crear ${config.nombreSingular}`;
    if (editando) {
      Object.entries(editando).forEach(([clave, valor]) => {
        const control = formulario.elements[clave];
        if (control) control.value = valor;
      });
    }
    abrirModal('modal-registro');
  }

  function pedirBaja(id) {
    porEliminar = registros.find((r) => r.id === id);
    document.getElementById('baja-detalle').textContent = `${porEliminar[config.campoTitulo]} · ${porEliminar[config.campoSubtitulo]}`;
    abrirModal('modal-baja');
  }

  document.querySelector('[data-nuevo]')?.addEventListener('click', () => abrirFormulario(null));
  buscador?.form?.addEventListener('submit', (evento) => evento.preventDefault());
  const limpiar = document.querySelector('[data-limpiar]');
  buscador?.addEventListener('input', () => {
    if (limpiar) limpiar.hidden = buscador.value === '';
    pagina = 1;
    pintar();
  });
  limpiar?.addEventListener('click', () => {
    buscador.value = '';
    buscador.dispatchEvent(new Event('input'));
    buscador.focus();
  });
  filtro?.addEventListener('change', () => { pagina = 1; pintar(); });

  formulario?.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (!validarFormulario(formulario)) {
      mostrarToast({ tipo: 'error', titulo: 'Error al procesar datos', texto: 'Revisa los campos obligatorios.' });
      formulario.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    const datos = Object.fromEntries(new FormData(formulario).entries());
    formulario.querySelectorAll('input[type="number"]').forEach((control) => {
      datos[control.name] = Number(control.value);
    });

    const repetido = config.camposUnicos.find((campo) =>
      registros.some((r) => r !== editando && String(r[campo]).toLowerCase() === String(datos[campo]).toLowerCase())
    );
    if (repetido) {
      const control = formulario.elements[repetido];
      marcarError(control, 'Ya está registrado. Usa otro valor.');
      control.focus();
      return;
    }

    const eraEdicion = Boolean(editando);
    if (editando) {
      Object.assign(editando, datos);
    } else {
      registros.unshift({ id: Date.now(), ...config.valoresPorDefecto, ...datos });
      pagina = 1;
    }

    cerrarModal('modal-registro');
    pintar();
    mostrarToast({
      tipo: 'exito',
      titulo: eraEdicion ? 'Cambios guardados' : '¡Registro exitoso!',
      texto: `Los datos de ${datos[config.campoTitulo]} se guardaron correctamente.`,
    });
  });

  document.getElementById('confirmar-baja')?.addEventListener('click', () => {
    const eliminado = porEliminar;
    const posicion = registros.indexOf(eliminado);
    registros = registros.filter((r) => r !== eliminado);
    cerrarModal('modal-baja');
    pintar();
    mostrarToast({
      tipo: 'exito',
      titulo: 'Registro eliminado',
      texto: `Se dio de baja a ${eliminado[config.campoTitulo]}.`,
      accion: {
        texto: 'Deshacer',
        alPulsar: () => {
          registros.splice(posicion, 0, eliminado);
          pintar();
          mostrarToast({ tipo: 'info', titulo: 'Registro restaurado', texto: `${eliminado[config.campoTitulo]} vuelve a la lista.` });
        },
      },
    });
    porEliminar = null;
  });

  const parametros = new URLSearchParams(location.search);
  const filtroInicial = parametros.get('filtro');
  if (filtro && filtroInicial && [...filtro.options].some((o) => o.value === filtroInicial)) {
    filtro.value = filtroInicial;
  }

  pintar();
  if (parametros.has('nuevo')) abrirFormulario(null);
}

/* Plantillas de fila y de tarjeta */

function formatearFecha(iso) {
  return new Date(`${iso}T00:00`).toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' });
}

function filaUsuario(u) {
  const iniciales = u.nombre.split(' ').map((p) => p[0]).slice(0, 2).join('');
  return `
    <tr>
      <td>
        <span class="tabla__principal">${u.nombre}</span>
        <span class="tabla__secundario">${u.correo}</span>
      </td>
      <td class="tabla__secundario">${u.usuario}</td>
      <td><span class="insignia insignia--rol-${u.rol}">${ETIQUETA_ROL[u.rol]}</span></td>
      <td class="tabla__secundario">${u.zona}</td>
      <td>
        <span class="insignia insignia--${u.estado}">${ETIQUETA_ESTADO[u.estado]}
        </span>
      </td>
      <td class="tabla__secundario cifra"><time datetime="${u.alta}">${formatearFecha(u.alta)}</time></td>
      <td class="celda-acciones">
        <span class="tabla__acciones">
          <button type="button" class="btn-icono" data-editar="${u.id}" aria-label="Editar a ${u.nombre}" title="Editar">${icono('editar', 'icono icono--sm')}</button>
          <button type="button" class="btn-icono btn-icono--peligro" data-eliminar="${u.id}" aria-label="Eliminar a ${u.nombre}" title="Eliminar">${icono('eliminar', 'icono icono--sm')}</button>
        </span>
      </td>
    </tr>`;
}

function laminaNodo(tipo, estado) {
  const color = { activo: 'var(--ok)', degradado: 'var(--alerta)', caido: 'var(--caido)' }[estado];
  const figuras = {
    'Central de fibra': `
      <rect x="58" y="34" width="44" height="38" rx="4" fill="var(--acento-tenue)" stroke="var(--acento)"/>
      <path d="M68 44h24M68 53h24M68 62h14" stroke="var(--acento)"/>
      <path d="M30 53h28M102 53h28" stroke="var(--malla-nodo)" stroke-dasharray="4 4"/>
      <circle cx="26" cy="53" r="5" fill="${color}"/><circle cx="134" cy="53" r="5" fill="${color}"/>`,
    'Nodo de acceso': `
      <circle cx="80" cy="53" r="15" fill="var(--acento-tenue)" stroke="var(--acento)"/>
      <circle cx="80" cy="53" r="5" fill="${color}"/>
      <path d="M80 38V22M80 68v16M65 53H45M95 53h20" stroke="var(--malla-nodo)"/>
      <circle cx="80" cy="18" r="4" fill="var(--acento)"/><circle cx="80" cy="88" r="4" fill="var(--acento)"/>
      <circle cx="41" cy="53" r="4" fill="var(--acento)"/><circle cx="119" cy="53" r="4" fill="var(--acento)"/>`,
    Radioenlace: `
      <path d="M80 78V44" stroke="var(--acento)"/>
      <path d="M66 82h28l-14-38Z" fill="var(--acento-tenue)" stroke="var(--acento)"/>
      <circle cx="80" cy="40" r="5" fill="${color}"/>
      <path d="M92 30a17 17 0 0 1 0 20M102 22a30 30 0 0 1 0 36" stroke="var(--malla-nodo)" fill="none"/>
      <path d="M68 30a17 17 0 0 0 0 20M58 22a30 30 0 0 0 0 36" stroke="var(--malla-nodo)" fill="none"/>`,
  };

  return `
    <svg viewBox="0 0 160 106" role="img" aria-label="Esquema de ${tipo}" fill="none" stroke-width="1.6" stroke-linecap="round">
      <path d="M0 26h160M0 80h160M40 0v106M120 0v106" stroke="var(--malla-linea)" stroke-width="1"/>
      ${figuras[tipo] || figuras['Nodo de acceso']}
    </svg>`;
}

function tarjetaNodo(n) {
  return `
    <article class="tarjeta tarjeta--${n.estado}">
      <p class="tarjeta__lamina">
        ${laminaNodo(n.tipo, n.estado)}
        <span class="tarjeta__codigo cifra">${n.codigo}</span>
        <span class="insignia insignia--${n.estado} tarjeta__insignia">${ETIQUETA_ESTADO[n.estado]}</span>
      </p>
      <div class="tarjeta__cuerpo">
        <h3 class="tarjeta__titulo">${n.nombre}</h3>
        <p class="tarjeta__secundario">${n.tipo} · ${n.zona}</p>
        <div class="tarjeta__pie">
          <dl class="tarjeta__metricas">
            <div><dt>Clientes</dt><dd class="cifra">${n.clientes.toLocaleString('es-VE')}</dd></div>
            <div><dt>Enlaces</dt><dd class="cifra">${n.enlaces}</dd></div>
          </dl>
          <span class="tabla__acciones">
            <button type="button" class="btn-icono" data-editar="${n.id}" aria-label="Editar ${n.nombre}" title="Editar">${icono('editar', 'icono icono--sm')}</button>
            <button type="button" class="btn-icono btn-icono--peligro" data-eliminar="${n.id}" aria-label="Eliminar ${n.nombre}" title="Eliminar">${icono('eliminar', 'icono icono--sm')}</button>
          </span>
        </div>
      </div>
    </article>`;
}

/* 10. ARRANQUE */

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', SPRITE);
  prepararModales();
  prepararLateral();
  prepararValidacion();
  prepararNumeros();
  prepararFuerza();
  prepararAcceso();
  prepararMuestras();
  pintarIndicadores();
  pintarEstados();
  pintarMapa();
  prepararAltasPanel();
  pintarZonas();

  if (document.body.dataset.vista === 'usuarios') {
    iniciarCrud({
      registros: USUARIOS,
      plantilla: filaUsuario,
      porPagina: 6,
      campoFiltro: 'rol',
      camposBusqueda: ['nombre', 'usuario', 'correo', 'zona'],
      campoTitulo: 'nombre',
      campoSubtitulo: 'correo',
      camposUnicos: ['usuario', 'correo'],
      nombreSingular: 'usuario',
      nombrePlural: 'usuarios',
      valoresPorDefecto: { estado: 'activo', alta: new Date().toISOString().slice(0, 10) },
    });
  }

  if (document.body.dataset.vista === 'nodos') {
    iniciarCrud({
      registros: NODOS,
      plantilla: tarjetaNodo,
      porPagina: 6,
      campoFiltro: 'estado',
      camposBusqueda: ['codigo', 'nombre', 'zona', 'tipo'],
      campoTitulo: 'nombre',
      campoSubtitulo: 'codigo',
      camposUnicos: ['codigo'],
      nombreSingular: 'nodo',
      nombrePlural: 'nodos',
      valoresPorDefecto: { estado: 'activo', clientes: 0, enlaces: 1 },
    });
  }
});
