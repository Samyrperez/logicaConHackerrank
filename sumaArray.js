/*Dada una matriz de números enteros, encuentre la suma de sus elementos.
Por ejemplo, si la matriz,  ar = [1, 2, 3];
1+2+3 = 6, regresa 6

Descripción de la función

Complete la función simpleArraySum en el editor que aparece a continuación. Debe devolver la suma de los elementos de la matriz como un entero. impleArraySum tiene los siguientes parámetros:

ar : una matriz de números enteros

Formato de entrada:
La primera línea contiene un número entero, que indica el tamaño de la matriz.
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

0 < n, ar[i] <= 1000 significa que:
- n (el tamaño de la matriz) debe ser mayor que 0.
- Cada elemento ar[i] en la matriz debe ser un número entero mayor que 0 y menor o igual a 1000.

// */
// $ar = [1, 2, 3, 4, 5, 6];

// function simpleArraySum($ar) {
//     return array_sum($ar);// array_sum: suma automaticamente todos los valores del array
// }
// $n = intval(trim(fgets(STDIN))); // intval(trim(...)) convierte el valor a un número entero.

// /* Cuándo usar STDIN?
// ✅ Cuando el script necesita recibir datos desde la terminal.
// ✅ En programación competitiva o desafíos de código.
// ✅ Cuando trabajas con archivos en línea de comandos.

// ⚠ No es necesario en una aplicación web porque los datos generalmente vienen de formularios ($_POST, $_GET).*/

// $ar = array_map('intval', explode(' ', trim(fgets(STDIN))));

// echo simpleArraySum($ar);




document.addEventListener("DOMContentLoaded", function(){

    let matrixNum = [10, 20, 5, 10, 30];

    function sumaArray(matrixNum) {
        if (matrixNum.length === 0 || matrixNum.length > 1000) {
            return "Los números ingresados son invalidos";
        } else {
            let suma = 0;
            for (let i = 0; i < matrixNum.length; i++) {
                suma += matrixNum[i];
            }
            return suma;
        }
    }

    let resultado = sumaArray(matrixNum);
    // alert(`El resultado de la suma de los elementos del array es: ${resultado}`);
    // alert(`El array tiene ${matrixNum.length} elementos.`);

    console.log(`El array tiene ${matrixNum.length} elementos.`);
    console.log(`El resultado de la suma de los elementos del array es: ${resultado}`)
});