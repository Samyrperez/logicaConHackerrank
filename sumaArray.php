
<?php

$matrixNum = [20, 20, 5, 10, 30];

function sumaArray($matrixNum) {
    foreach ($matrixNum as $num) {
        if ($num < 1 || $num > 1000) {
            echo "<h3 style='color: red;'>Error: Los números deben estar entre 1 y 1000.</h3>";
            return null;
        }
    }
    $sum = 0;
    foreach ($matrixNum as $num) {
    $sum += $num;
    }
    return $sum;

};

$resultado = sumaArray($matrixNum);
$contador = count($matrixNum);

echo "<h1 style= 'color: blue;'>La cantidad de elementos del array son: $contador</h1>";
echo "<h1> Resultado: $resultado</h1>";


?>
