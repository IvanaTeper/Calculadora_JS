// Pedir al usuario que ingrese la operación y los números
let operacion = prompt("Hola ... ingresa la operación que deseas realizar (suma, resta, multiplicaión, división)");
let numero1 = prompt("Ingresa el primer número con el que quieres operar");
let numero2 = prompt("Ingresa el segundo número con el que quieres operar");


//var operacion = prompt("Ingrese la operación deseada (suma, resta, multiplicación o división):");
//var numero1 = parseFloat(prompt("Ingrese el primer número:"));
//var numero2 = parseFloat(prompt("Ingrese el segundo número:"));



// Realizar la operación correspondiente
switch (operacion) {
     case "suma":
        resultado = numero1 + numero2;
        break;
     case "resta":
            resultado = numero1 - numero2;
            break;
     case "multiplicación":
      resultado = numero1 * numero2;
      break;
     case "división":
      if (numero2 === 0) {
          resultado = "Error: No se puede dividir entre cero.";
        } else {
            resultado = numero1 / numero2;
        }
        break;
        default:
            resultado = "Operación inválida.";
    }
        
let resultado = prompt(resultado);


// Mostrar el resultado
document.write(
`
<div class="color">
    <p>
        El resultado de la operación `+ operacion` + es: `+ resultado`
    </p>
</div>
`
)
