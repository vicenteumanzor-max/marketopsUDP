window.reportarFalla = function(idSucursal, categoria, idEquipo) {
    const descripcionFalla = prompt("Por favor, describa el problema que presenta este equipo:");
    
    if (!descripcionFalla) {
        return; 
    }

    let sucursales = JSON.parse(sessionStorage.getItem('sucursalesBD'));
    let sucursal = sucursales.find(s => s.id == idSucursal);
    let equipo = sucursal.equipos[categoria].find(e => e.id === idEquipo);

    const fechaActual = new Date().toLocaleString('es-CL');

    equipo.estado = "Con fallas";
    equipo.descripcion = descripcionFalla;
    equipo.fechaReporte = fechaActual;
    sucursal.fallas += 1;

    sessionStorage.setItem('sucursalesBD', JSON.stringify(sucursales));
    window.imprimirDatosSucursal(idSucursal); 
};

window.repararEquipo = function(idSucursal, categoria, idEquipo) {
    const confirmacion = confirm("¿Confirma que este equipo ha sido reparado y está funcionando correctamente?");
    
    if (!confirmacion) {
        return;
    }

    let sucursales = JSON.parse(sessionStorage.getItem('sucursalesBD'));
    let sucursal = sucursales.find(s => s.id == idSucursal);
    let equipo = sucursal.equipos[categoria].find(e => e.id === idEquipo);
    equipo.estado = "Sin fallas";
    equipo.descripcion = ""; 
    equipo.fechaReporte = ""; 
    sucursal.fallas -= 1;

    sessionStorage.setItem('sucursalesBD', JSON.stringify(sucursales));
    window.imprimirDatosSucursal(idSucursal); 
};