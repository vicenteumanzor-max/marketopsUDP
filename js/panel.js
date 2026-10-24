document.addEventListener('DOMContentLoaded', function() {
    
   
    const contenedor = document.querySelector('.lista-sucursales');
    const todas=document.getElementById('filtrar-todas');
    const conFallas=document.getElementById('solo-fallas');

    fetch('data/sucursales.json')
        .then(respuesta => respuesta.json()) 
        .then(datosSucursales => {
            
           
            contenedor.innerHTML = '';

            
            datosSucursales.forEach(sucursal => {
                
                const li = document.createElement('li');

               
                const claseColor = sucursal.fallas > 0 ? 'texto-rojo' : 'texto-verde';
                const textoEstado = sucursal.fallas > 0 ? `${sucursal.fallas} equipos con falla` : 'Sin fallas';

               
                li.innerHTML = `
                    Sucursal ${sucursal.id} - ${sucursal.nombre}:
                    <p>Equipos totales: <b>${sucursal.total}</b> </p>
                    <p>Estado: <b class="${claseColor}">${textoEstado}</b></p>
                    <a href="detalles.html?id=${sucursal.id}" class="btn-ver">Ver equipos</a>
                `;

                
                contenedor.appendChild(li);
            });
            conFallas.addEventListener('click', function() {
                const filtro = document.querySelectorAll('.lista-sucursales li');
                filtro.forEach(sucursal=> {
                    const sinFallas = sucursal.querySelector('.texto-verde');
                    if (sinFallas) {
                        sucursal.style.display = 'none';
                    } else {
                        sucursal.style.display = '';
                    }
                });
            });

            todas.addEventListener('click', function() {
                const filtro = document.querySelectorAll('.lista-sucursales li');
                filtro.forEach(sucursal => {
                    sucursal.style.display = '';
                });
            });

        })
        .catch(error => {
            console.error("Error al cargar el JSON:", error);
        });
});