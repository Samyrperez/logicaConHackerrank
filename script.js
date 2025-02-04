/*Dada una matriz de números enteros, encuentre la suma de sus elementos.
Por ejemplo, si la matriz,  ar = [1, 2, 3];
1+2+3 = 6, regresa 6

Descripción de la función

Complete la función simpleArraySum en el editor que aparece a continuación. Debe devolver la suma de los elementos de la matriz como un entero. impleArraySum tiene los siguientes parámetros:

ar : una matriz de números enteros

Formato de entrada:
La primera línea contiene un número entero,, que indica el tamaño de la matriz.
La segunda línea contiene números enteros separados por espacios que representan los elementos de la matriz.

Restricciones
0<n,ar[i]<=1000

Formato de salida:
Imprime la suma de los elementos de la matriz como un único entero.
Entrada de muestra

6
1 2 3 4 10 11

Ejemplo de salida:
31

Explicación:
Imprimimos la suma de los elementos del array:
1+2+3+4+10+11=31
*/

function simpleArraySum(ar) {
    let suma = 0
    console.log(`La cantidad de los elementos en el array: ${ar.length}`)

    let resultado = "La suma de los elementos es: "
    for (let i = 0; i < ar.length; i++) {
        suma += ar[i]

        resultado += ar[i] + (i < ar.length - 1 ? " + " : "") 
    }

    console.log(`${resultado} = ${suma}`)
    
}

const ar = [1, 2, 3, 4]

console.log(simpleArraySum(ar))

