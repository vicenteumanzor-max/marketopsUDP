document.addEventListener('DOMContentLoaded', function() {
    const todas= document.getElementById('filtrar-todas');
    const fallas=document.getElementById('solo-fallas');
    const sucursales=document.querySelectorAll('.lista-sucursales li');

    fallas.addEventListener('click', function() {
        sucursales.forEach(function(sucursal) {
        const sinfallas=sucursal.querySelector('.texto-verde');
        if(sinfallas){
            sucursal.style.display = 'none';
        }
        else{
            sucursal.style.display = '';
        }
    });
    });

    todas.addEventListener('click', function() {
        sucursales.forEach(function(sucursal) {
            sucursal.style.display = '';
        });
    });
});
            