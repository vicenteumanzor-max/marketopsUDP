const passwordInput = document.getElementById("password").value;
const confirmPasswordInput = document.getElementById("confirm-password").value;
if(passwordInput.length < 8 || /\d/.test(passwordInput) === false ||    /[A-Z]/.test(passwordInput) === false || /[a-z]/.test(passwordInput) === false){
    alert("La contraseña debe tener estos campos: al menos 8 caracteres, un número, una letra mayúscula y una letra minúscula.");
    return false;
}
if(passwordInput !== confirmPasswordInput){
    alert("Las contraseñas no coinciden.");
    return false;
}
