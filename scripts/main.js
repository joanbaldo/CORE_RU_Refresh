// console.log('Test vinculación')

// EJERCICIOS REPASO RAMP UP - FUNCIONES

// Crea una función multiplicacion que espere dos parámetros a y b y que devuelva la multiplicación de los mismos.
/*
function multiplicacion(a, b) {
    a = prompt("Introduzca primer número");
    a = +a;
    b = prompt("Introduzca segundo número");
    b = +b;
    return a * b;
}
console.log(multiplicacion(2, 5))
*/
// Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor". Debes utilizar un condicional if/else.
/*
function imserso(edad) {
    edad = prompt("Porfavor introduce tu edad");
    edad = +edad;
    if (edad < 18) {
        console.log('Eres menor de edad');
            } else if (edad >=18 && edad <=40) {
        console.log('Eres mayor de edad');                
            } else {
                return console.log('Eres un adulto mayor');
                
            }

}
imserso()
*/
// Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".

// Opción 1 y 2 son PRE-SOFIA
// opcion 1 "Consoleando en el própio return"
/*
function sumaTresNumerosa(a, b, c) {
    a = prompt("Introduzca primer número");
    a = +a; //-> forzamos a convertir "lo que sea" a num y si no puede =dara como resultado NaN así que si una de las tres variables se suma como "NaN" el resultado que se consoleara será "NaN"
    console.log(typeof a)
    b = prompt("Introduzca segundo número");
    b = +b; //(ídem a)
    console.log(typeof b)
    c = prompt("Introduzca segundo número");
    c = +c; //(ídem a)
    console.log(typeof c)
    console.log(isNaN(c))
    if ((typeof a === 'number') && (typeof b === 'number') && (typeof c === 'number')) {
        console.log(a + b + c);
    } else {
        console.log('Debo ser ejecutada con números')
    }
}
sumaTresNumerosa()
*/
// opcion 2 "Consoleando al llamar a la función"

// function sumaTresNumerosa(a, b, c) {
//     a = prompt("Introduzca primer número");
//     b = prompt("Introduzca segundo número");
//     c = prompt("Introduzca segundo número");
//     if ((typeof a === 'number') && (typeof b === 'number') && (typeof c === 'number')) {
//         console.log(a + b + c);
//     } else {
//         return 'Debo ser ejecutada con números'1
//     }
// }
// console.log(sumaTresNumerosa())

//OPCIÓN 3 -BY SOFIA 
/*
function sumaTresNumerosa(a, b, c) {
    a = prompt("Introduzca primer número");
    a = +a;
    console.log(typeof a)
    console.log(isNaN(a))
    b = prompt("Introduzca segundo número");
    b = +b; 
    console.log(typeof b)
    console.log(isNaN(b))
    c = prompt("Introduzca segundo número");
    c = +c; 
    console.log(typeof c)
    console.log(isNaN(c))
    if ( isNaN(a) || isNaN(b) || isNaN(c) ) {
        console.log('Debo ser ejecutada con números');
    } else {
        console.log(a + b + c);
    }
}
sumaTresNumerosa()
*/
// Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de tres caracteres, debe devolver el string completo.

// No me funciona lavalidación con "isNaN" ya que si una cadena NO es un numero O No es un NaN (= true) ya asume que es un string (porque obviamente con el prompt no metes un array o un objeto)
/*
function primerosTresCaracteres(cadena) {
    cadena = prompt ("Por favor introduce un dato");
    // cadena = +cadena;
    console.log(typeof cadena);
          if ((isNaN(cadena)) && (typeof cadena == 'number')){
        console.log('Debo ser ejecutada con un string');
          } else if (cadena.length < 3) {
            console.log(cadena);
          } else {
            console.log(cadena.slice(0,3));
          }
}
primerosTresCaracteres()
*/
//REPASO PREVIO 
// (isNaN(cadena)) && 
// let cadena = 'Bootcampin'
// console.log(cadena.length)
// console.log(cadena.substring(0,4)+' '+ cadena.substring(9,10))

// Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.
/*
function getPrecioMostrarIVA (importe) {
    importe = prompt ("Porfavor introduzca importe");
    importe = +importe;
    if ( isNaN(importe)) {
        console.log('No es un formato correcto');
    } else {
        // console.log(importe);
        let totalConIva = importe *1.21;
        return console.log(totalConIva.toFixed(2) + "€");
    }
} 
getPrecioMostrarIVA()
*/

// EJERCICIOS EXTRA RAMP UP

//Crea la función penultimoCaracter que reciba un string como argumento y devuelva el penúltimo carácter del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de dos caracteres, debe devolver el primer carácter.


//Crea la función cuentaVocales que reciba un string como argumento y devuelva el número de vocales que contiene. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string".
function cuentaVocales(vocablo) {
    if (typeof vocablo !== 'string') {
        return'Debo ser ejecutada con un string'
    } else {
        // W.I.P
            }
}


//Crea la función potencia que acepte como argumento dos números y devuelva el resultado de elevar el primer número a la potencia del segundo número.
