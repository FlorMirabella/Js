const suma = (a, b) => a + b;
const producto2 = (valorProducto) => valorProducto / 25;

let precioProducto = 500;
let nuevoPrecio = suma(precioProducto, producto2(precioProducto));

console.log(nuevoPrecio);

