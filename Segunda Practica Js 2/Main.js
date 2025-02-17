import { sumar, restar, multiplicar, dividir } from './Operaciones.js';

function calcular() {
  let continuar = true;

  while (continuar) {
    const opcion = prompt(
      "Calculadora Modular\nSeleccione una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir"
    );

    if (opcion === '5') {
      alert("¡Gracias por usar la calculadora!");
      continuar = false;
      break;
    }

    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
      alert("Por favor, ingrese números válidos.");
      continue;
    }

    let resultado;

    switch (opcion) {
      case '1':
        resultado = sumar(num1, num2);
        break;
      case '2':
        resultado = restar(num1, num2);
        break;
      case '3':
        resultado = multiplicar(num1, num2);
        break;
      case '4':
        resultado = dividir(num1, num2);
        break;
      default:
        alert("Opción no válida. Intente de nuevo.");
        continue;
    }

    alert(`El resultado es: ${resultado}`);
  }
}

console.log("La calculadora se ejecutará mediante la consola.");
calcular();
