document.addEventListener('DOMContentLoaded', function() { 
    
    const verificador = sessionStorage.getItem('usuarioLogueado');
    const ruta = window.location.pathname;
    
    if (!verificador) {
        if (!ruta.includes('index.html')) {
            alert("Acceso denegado. Debe iniciar sesión primero.");
            window.location.href = '../index.html';
        }
        return; 
    }
    
    const usuarioActivo = JSON.parse(verificador);
    
    if (ruta.includes('panel-sucursales.html') && usuarioActivo.rol === 'encargado') {
        alert("Acceso denegado. Su rol no puede acceder a esta página");
        window.location.href = `detalles.html?id=${usuarioActivo.id_sucursal}`;
        return;
    }
    
    if (ruta.includes('index.html')) {
        if (usuarioActivo.rol === 'administrativo' || usuarioActivo.rol === 'soporte') {
            window.location.href = "html/panel-sucursales.html";
            return;
        } else {
            window.location.href = `html/detalles.html?id=${usuarioActivo.id_sucursal}`;
            return;
        }
    }

    const cerrarsesion = document.getElementById('cerrar-sesión');
    if (cerrarsesion) {
        cerrarsesion.addEventListener('click', function(event) {
            event.preventDefault();
            sessionStorage.removeItem('usuarioLogueado');
            window.location.href = '../index.html';
        });
    }

    const container = document.getElementById('usuario');
    if (container) {
        container.innerHTML = `Usuario: ${usuarioActivo.nombre}`;
    }
 
    if (usuarioActivo.rol === 'administrativo' || usuarioActivo.rol === 'soporte') {
        const barra = document.querySelector('.barra'); 
        
        if (barra) {
            barra.insertAdjacentHTML('afterbegin', `
                <a href="detalles.html">Detalles Sucursales</a>
                <a href="panel-sucursales.html">Panel Sucursales</a>
            `);
        }
    }
});