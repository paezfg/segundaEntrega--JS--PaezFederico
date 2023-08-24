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

/* Funciones */

// Funcion para registrar ventas en un array de objetos
let ventas = [];
let cantidadDeVentas = parseInt(prompt("¿Cuántas ventas realizaste hoy?"));

for (let venta = 1; venta <= cantidadDeVentas; venta++) {
    let comprobante = prompt(`Indica el número de comprobante ${venta}`);
    let montoVenta = parseFloat(prompt(`¿Cuál es el monto de la venta número ${venta}?`));
    ventas.push({ comprobante, montoVenta });
}

// Funcion para calcular la suma de los montos de todas las ventas realizadas
function acumuladoVentas() {
    let sumaVentas = ventas.reduce((total, venta) => total + venta.montoVenta, 0);
    return sumaVentas;
}

// Funcion para calcular la comisión por ventas
function comisionPorVentas() {
    let totalVenta = acumuladoVentas();
    let comision;

    if (totalVenta < 500000) {
        comision = totalVenta * 0.03;
        alert("Tus ventas de hoy te ubicaron dentro del grupo BASE, por lo que te corresponde un 3% de comisión.");
    } else if (totalVenta >= 500000 && totalVenta < 1000000) {
        comision = totalVenta * 0.05;
        alert("Tus ventas de hoy te ubicaron dentro del grupo INTERMEDIO, por lo que te corresponde un 5% de comisión.");
    } else if (totalVenta >= 1000000) {
        comision = totalVenta * 0.05 + 25000;
        alert("Tus ventas de hoy te ubicaron dentro del grupo DESTACADO, por lo que además del 5% de comisión te corresponde un extra de $25.000.");
    }

    return comision;
}

// Calcular comisión y mostrar resultados
const totalComision = comisionPorVentas();
const totalVenta = acumuladoVentas();

alert(`Felicidades, realizaste ventas por un total de $ ${totalVenta}`);
alert(`Por el total de tus ventas te corresponde una comisión de $ ${totalComision}`);
