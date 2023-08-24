/LOGIN DE PERSONAL/

/*Definición de usuario y clave*/
const usuarioAutorizado= "personalsalon";
const claveAutorizada= "Comisiones2023";

/*Mensaje de Bienvenida*/

alert ("Bienvenido al sistema de registro de ventas diarias de La casa del Programador. Para registrar tus ventas, primero debes ingresar el usuario y la clave que te otorgaron desde el departamento de RRHH.")

/*Petición y validación de usuario y clave*/
let usuarioIngresado= prompt("Por favor, ingrese su usuario");
    while (usuarioIngresado != usuarioAutorizado) { 
        alert("El usuario ingresado no existe. Por favor ingresa el usuario correcto.");
        usuarioIngresado= prompt("Ingrese nuevamente el usuario");
    }
let claveIngresada= prompt("Por favor ingrese su clave de acceso");
    while (claveIngresada != claveAutorizada) {
        alert("La clave ingresada no es correcta. Por favor ingresa la clave nuevamente.");
        claveIngresada= prompt("Vuelva a ingresar la clave de forma correcta");
    }

/* FUNCIONES */

//Funcion acumuladoVentas para calcular la suma de los montos de todas las ventas realizadas en el día por un empleado.

let cantidadDeVentas= parseInt(prompt ("¿Cuántas ventas realizaste hoy? \n Recorda que debes contar las operaciones, NO los productos individuales.")); //Esta variable me va a dar el límite de iteraciones al ciclo FOR.

function acumuladoVentas (cantidadDeVentas) {

    let sumaVentas= 0 //Declaro la variable y le asigno el valor 0 para que luego vaya acumulando los montos

        for(let venta=1; venta <= cantidadDeVentas; venta++) {
            let comprobante= prompt(`Indica el número de comprobante ${venta}`);
            let montoVenta= parseFloat(prompt(`¿Cuál es el monto de la venta número ${venta}?`));
        
            sumaVentas += montoVenta;
            
        }

    return sumaVentas;

}

//Funcion comisionPorVentas: Defino tres tramos de ventas, cada uno con su comisión específica. Para eso uso tres bloques condicionales.

function comisionPorVentas (totalVenta) {

    let comision; //declaro la variable comisión para que su ambito abarque todos los bloques IF.

    if(totalVenta < 500000) {
        comision= totalVenta*0.03; // Para ventas menores a medio millon, corresponde un 3%  de comisión
        alert ("Tus ventas de hoy te ubicaron dentro del grupo BASE, por lo que te corresponde un 3% de comisión.");
        

    } else if (totalVenta>=500000 && totalVenta<1000000) {
        comision= totalVenta*0.05; // Para ventas entre medio millon y 1 millon, corresponde un 5% de comisión
        alert ("Tus ventas de hoy te ubicaron dentro del grupo INTERMEDIO, por lo que te corresponde un 5% de comisión.");
        
    } else if (totalVenta>=1000000) {
        comision= (totalVenta*0.05) + 25000; // Para ventas mayores a 1 millon, 5% de comisión + un plus de $25.000
        alert ("Tus ventas de hoy te ubicaron dentro del grupo DESTACADO, por lo que además del 5% de comisión te corresponde un extra de $25.000.");
        
    } 

    return comision;
}




const totalVenta= acumuladoVentas(cantidadDeVentas);
const totalComision= comisionPorVentas(totalVenta);



alert (`Felicidades, realizaste ventas por un total de $ ${totalVenta}` );
alert (`Por el total de tus ventas te corresponde una comisión de $ ${totalComision}` );

