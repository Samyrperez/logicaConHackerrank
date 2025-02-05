


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <!-- <form action="" method="post">
    <label for="a">Número 1:</label>
        <input type="number" name="a"  required>
        <br><br>
        <label for="b">Número 2:</label>
        <input type="number" name="b"  required>
        <br><br>
        <button type="submit">Sumar</button>
    </form> -->


    <?php
        function solveMeFirst(int $a, int $b): int {
            return $a + $b;
        }

        if ($_SERVER["REQUEST_METHOD"] == "POST"){
            $a = intval($_POST["a"]);
            $b = intval($_POST["b"]);

            if ($a < 1 && $a > 1000 || $b < 1 && $b > 1000) {
                echo "<h3 style='color: red;'>Error: Los números deben estar entre 1 y 1000.</h3>";
            }else {
                $resultado = solveMeFirst($a, $b);
            echo "<h3> Resultado: $resultado</h3>";
            }
            

        }

        
        ?>

<script src="./opcion2_compareTripleta.js"></script>
</body>
</html>

