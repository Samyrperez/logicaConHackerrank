// Complete la función solveMeFirst para calcular la suma de dos números enteros.

document.addEventListener('DOMContentLoaded', function(){
    
    let a = parseFloat(prompt("Ingresa el primer número: "));
    let b = parseFloat(prompt("Ingresa el segundo número: "));
    
    function solveMyFirst(a, b) {

        if (a >= 1 && a <= 1000 || b >= 1 && b <= 1000){
            let resultado = a + b;
            return resultado;
        } else {
            return "Los números ingresados son invalidos";
        }
    };

    let resultado = solveMyFirst(a, b);
    alert(`El resultado de la suma es: ${a} + ${b} = ${resultado}`);
});