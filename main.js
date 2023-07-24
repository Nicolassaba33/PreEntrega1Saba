/*=============================================
=       Calcular Producto A Dolar Tarjeta      =
=============================================*/

alert(
  "Programa para saber el costo de tu producto dolarizado a pesos argentinos con tarjetas"
);
let i;
const dolarOficial = 283.5;
const impuestoPais = 0.3;
const ganancias = 0.45;

let dolarConImpuesto = dolarOficial * impuestoPais;
let dolarConGanancias = dolarOficial * ganancias;

for (i = 0; i <= 2; i++) {
  const producto = prompt("Ingrese nombre del producto");
  const montoProducto = prompt("Ingresar monto del producto");

  totalProductoDolar =
    (dolarOficial + dolarConGanancias + dolarConImpuesto) * montoProducto;

  alert(`Su producto: ${producto} le va a costar: $${totalProductoDolar} ARS`);

  if (i == 2) {
    alert("Si desea continuar ingrese 'S'");
    let letra = prompt("");
    if (letra == "S") {
      i = 0;
    } else {
      alert("Muchas gracias por utilizar el sistema");
      break;
    }
  }
}
