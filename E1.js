// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function numerosParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }
}

numerosParOImpar(33);
numerosParOImpar(48);
numerosParOImpar(67);
numerosParOImpar(118);


// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor,
//  y si ninguno lo es, indicar por consola que son iguales.

function mayorOMenor(num1, num2) {
    if (num1 < num2) {
        console.log("El numero es menor");
    } else if (num1 > num2) {
        console.log("El numero es mayor");
    } else {
        console.log("el numero es igual");
    }
}

mayorOMenor(33, 46);
mayorOMenor(54, 87);
mayorOMenor(25, 25);
mayorOMenor(33, 89);


// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.


function multiplo(num3) {
    if (num3 % 5 === 0) {
        console.log("El numero es multiplo de 5");
    } else {
        console.log("El numero tipeado no es multiplo de 5");
    }
}

multiplo(4);
multiplo(35);
multiplo(76);
multiplo(125);


// 4- Crear una función que reciba un número por parámetro e imprima 
// por consola todos los números desde el 0 hasta llegar a ese número.

function hastaNumIndicado(num4) {
    for (let i = 0; i <= num4; i++) {
        console.log(i);
    }
}

hastaNumIndicado(16);
hastaNumIndicado(23);
hastaNumIndicado(29);
hastaNumIndicado(36);


// 5 - Crear una función que reciba una palabra y un número por parámetro e 
// imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function palabraRepetida(palabra, num5) {
    for (let i = 0; i < num5; i++) {
        console.log(palabra);
    }

}

palabraRepetida("Chelitowan", 3);
palabraRepetida("Chelitowan", 7);
palabraRepetida("Chelitowan", 9);
palabraRepetida("Chelitowan", 11);


// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function miarray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }
}

const array = ["loco", 7, "js", "moto", 342];
miarray(array);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola 
// todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. 
// Ayuda: Recuerden que el primer índice de un array es "0".

function quintaPosicion(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        if (i !== 4) {
            console.log(arr1[i]);
        }
        
    }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
quintaPosicion(numeros);


// 8 - Crea una función que reciba un array de números y un número por parámetro e 
// imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function numeroMultiplicado(arr2, num6) {
    for (let i = 0; i < arr2.length; i++) {
        const resultado = arr2[i] * num6;
        console.log(resultado);
    }
}

const miArray = [2, 4, 6, 8, 9];
const multiplicador = 5;
numeroMultiplicado(miArray, multiplicador);