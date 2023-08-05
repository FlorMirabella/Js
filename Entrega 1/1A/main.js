/* let nombre = prompt("Ingrese el nombre").toLowerCase();

if (nombre != "" && (nombre === "ANA" || nombre === "ana")) {
 alert(`Hola ${nombre}`);
} else {
   alert("No eres Ana");
 } */

let edad = parseInt(prompt("Ingrese su edad (numero)"));

 if (edad < 18) {
   alert("No podes ver la pelicula");
 } else if (edad < 21) {
   alert("Podes ver la pelicula acompañada por un mayor de 21");
 } else if (edad >= 21) {
 alert("¡Gracias por comprar tus tickets!");
}

for (let entrada = 1; entrada <= 2; entrada++) {
 let nombre = prompt("Ingrese el nombre");
alert(`entrada #${entrada} Nombre: ${nombre}`);
}

alert("No puedes compras mas de 2 ticket por operación. Muchas gracias");



