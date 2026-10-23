document.addEventListener('DOMContentLoaded', function() {
    const formLogin= document.getElementById('Inicio-sesion');
    if(formLogin){
        formLogin.addEventListener('submit', function(event){
            event.preventDefault();
            const correo=document.getElementById('email').value.toLowerCase();
            const contrasena=document.getElementById('password').value;
            fetch('data/users.json')
            .then(respuesta => respuesta.json())
            .then(users=> {
                const usuarioLogueado= users.find(
                    usuario=> usuario.correo.toLowerCase()=== correo && usuario.password===contrasena);
                    if(usuarioLogueado){
                        sessionStorage.setItem('logueado', JSON.stringify(usuarioLogueado));
                        if(usuarioLogueado.rol==='soporte' || usuarioLogueado.rol==='administrativo'){
                            window.location.href="panel-sucursales.html";
                        }
                        else if(usuarioLogueado.rol==='encargado'){
                            window.location.href='detalles.html?id=${usuarioLogueado.id_sucursal}';
                        }
                    }
                        else{
                            alert('Correo o contraseña incorrectos. ¿Olvidó la contraseña? Contactese con algún administrativo')
                        }

                    })
                    .catch(error =>{
                        console.error("Error al cargar los usuarios:", error);
                        alert("Hubo un error de conexión al intentar iniciar sesión");
                    });

    });
}
});

