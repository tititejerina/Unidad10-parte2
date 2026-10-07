let listaDeSuper = [];

listaDeSuper[0] = "sal";
listaDeSuper[1] = "galletitas";
listaDeSuper[2] = "fideos";

listaDeSuper.push("lechuga", "tomate");
listaDeSuper.unshift("yerba", "coca");

console.log(listaDeSuper.length);

let noHabia = listaDeSuper.pop();
let comprado = listaDeSuper.shift();

console.log(listaDeSuper.length);

console.log(listaDeSuper);
console.log("La cantidad de elementos dentro del array es: " + listaDeSuper.length);
console.log("El primer elemento del array es: " + listaDeSuper[0]);

let ultimoElemento = listaDeSuper.length - 1;

console.log("El último elemento del array es: " + listaDeSuper[listaDeSuper.length - 1]);
console.log("El último elemento usando la variable es: " + listaDeSuper[ultimoElemento]);