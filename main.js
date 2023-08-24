/* LOGIN DE PERSONAL */

/* Definición de usuario y clave */
const usuarioAutorizado = {
    usuario: "personalsalon",
    clave: "Comisiones2023"
};

/* Mensaje de Bienvenida */
alert("Bienvenido al sistema de registro de ventas diarias de La casa del Programador. Para registrar tus ventas, primero debes ingresar el usuario y la clave que te otorgaron desde el departamento de RRHH.");

/* Petición y validación de usuario y clave */
let usuarioIngresado = prompt("Por favor, ingrese su usuario");
while (usuarioIngresado !== usuarioAutorizado.usuario) {
    alert("El usuario ingresado no existe. Por favor ingresa el usuario correcto.");
    usuarioIngresado = prompt("Ingrese nuevamente el usuario");
}
let claveIngresada = prompt("Por favor ingrese su clave de acceso");
while (claveIngresada !== usuarioAutorizado.clave) {
    alert("La clave ingresada no es correcta. Por favor ingresa la clave nuevamente.");
    claveIngresada = prompt("Vuelva a ingresar la clave de forma correcta");
}

