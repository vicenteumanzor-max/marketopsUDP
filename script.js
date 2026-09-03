const form = document.getElementById("registration-form");
form.addEventListener("submit", function(event){
    event.preventDefault();
const passwordInput = document.getElementById("password").value;
const confirmPasswordInput = document.getElementById("confirm-password").value;
const mensajeError = document.getElementById("mensaje-error");
if(passwordInput.length < 8 || /\d/.test(passwordInput) === false ||    /[A-Z]/.test(passwordInput) === false || /[a-z]/.test(passwordInput) === false){
    mensajeError.textContent = "La contraseña debe tener estos campos: al menos 8 caracteres, un número, una letra mayúscula y una letra minúscula.";
    return false;
}
if(passwordInput !== confirmPasswordInput){
    mensajeError.textContent = "Las contraseñas no coinciden.";
    return false;
}
mensajeError.textContent = "";
});
