
<?php
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


function simpleArraySum($ar) {
    return array_sum($ar);
}

// Leer el tamaño del array (no es necesario usar $n realmente)
$n = intval(trim(fgets(STDIN)));

// Leer la línea de números y convertirlos en un array de enteros
$ar = array_map('intval', explode(' ', trim(fgets(STDIN))));

echo simpleArraySum($ar) . "\n"; // Mostrar la suma
?>
