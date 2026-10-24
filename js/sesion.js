document.addEventListener('DOMContentLoaded', function() { 
    
    const verificador = sessionStorage.getItem('usuarioLogueado');
    const ruta = window.location.pathname;
    
    if (!verificador) {
        if (!ruta.includes('index.html')) {
            alert("Acceso denegado. Debe iniciar sesión primero.");
            window.location.href = 'index.html';
        }
        return; 
    }
    
    const usuarioActivo = JSON.parse(verificador);
    
    if (ruta.includes('panel-sucursales.html') && usuarioActivo.rol === 'encargado') {
        window.location.href = `detalles.html?id=${usuarioActivo.id_sucursal}`;
        return;
    }
    
    if (ruta.includes('index.html')) {
        if (usuarioActivo.rol === 'administrativo' || usuarioActivo.rol === 'soporte') {
            window.location.href = "panel-sucursales.html";
            return;
        } else {
        
            window.location.href = `detalles.html?id=${usuarioActivo.id_sucursal}`;
            return;
        }
    }
}); 