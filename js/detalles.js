document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const idSucursal = params.get('id');
    const contenedor = document.getElementById('contenedor-detalles');

    if (!idSucursal) {
        if (contenedor) contenedor.innerHTML = '<h2>Error: No se seleccionó ninguna sucursal.</h2>';
        window.location.href = '../index.html';
        return;
    }

    let sucursalesGuardadas = sessionStorage.getItem('sucursalesBD');
    
    if (!sucursalesGuardadas) {
        fetch('../data/sucursales.json')
            .then(res => res.json())
            .then(datos => {
                sessionStorage.setItem('sucursalesBD', JSON.stringify(datos));
                window.imprimirDatosSucursal(idSucursal);
            });
    } else {
        window.imprimirDatosSucursal(idSucursal);
    }
});


window.imprimirDatosSucursal = function(idSucursal) {
    const sucursales = JSON.parse(sessionStorage.getItem('sucursalesBD'));
    const usuarioActivo = JSON.parse(sessionStorage.getItem('usuarioLogueado'));
    const sucursal = sucursales.find(s => s.id == idSucursal);
    const contenedor = document.getElementById('contenedor-detalles');

    if (!sucursal || !contenedor) return;

    let html = `
        <div class="resumen-sucursal">
            <h2>Sucursal ${sucursal.nombre} - <i> ${sucursal.direccion}</i></h2>
            <p>Equipos totales: <b>${sucursal.total}</b></p>
            <p>Estado: <b class="${sucursal.fallas > 0 ? 'texto-rojo' : 'texto-verde'}">
                ${sucursal.fallas > 0 ? sucursal.fallas + ' equipos con falla' : 'Sin fallas'}
            </b></p>
        </div>
    `;

    const categorias = ['cajas', 'balanzas', 'impresoras'];

    categorias.forEach(categoria => {
        const tituloCategoria = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        
        html += `
            <div class="categoria-equipos">
                <h3>${tituloCategoria}</h3>
                <ul class="lista-equipos">
        `;

       sucursal.equipos[categoria].forEach(equipo => {
            let botonAccion = '';
            let descripcionHTML = '';

           
            if (equipo.estado === 'Con fallas') {
                descripcionHTML = `<p>Descripción de falla: <i>${equipo.descripcion}</i></p>`;
            }
            
            
            if (usuarioActivo.rol === 'encargado' && equipo.estado === 'Sin fallas') {
                 botonAccion = `<button onclick="window.reportarFalla('${sucursal.id}', '${categoria}', '${equipo.id}')" class="btn-ver" style="background-color: #e63946;">Reportar Falla</button>`;
            }
             else if (usuarioActivo.rol === 'soporte' && equipo.estado === 'Con fallas') {
                botonAccion = `<button onclick="window.repararEquipo(${sucursal.id}, '${categoria}', '${equipo.id}')" class="btn-ver">Marcar Reparado</button>`;
            }

           
            html += `
                <li>
                    <p>${equipo.nombre}</p>
                    <p>Estado: <b class="${equipo.estado === 'Con fallas' ? 'texto-rojo' : 'texto-verde'}">${equipo.estado}</b></p>
                    ${descripcionHTML}
                    ${botonAccion}
                    <p><small style="color: gray;">${equipo.fechaReporte || ''}</small></p>
                </li>
            `;
        });

        html += `</ul></div>`;
    });

    contenedor.innerHTML = html;
};