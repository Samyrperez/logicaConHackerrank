/* Alice y Bob crearon un problema cada uno para HackerRank. Un revisor califica los dos desafíos y otorga puntos en una escala de 1 a 100 para tres categorías: claridad del problema , originalidad y dificultad .

La calificación para el desafío de Alice es el triplete a = (a[0], a[1], a[2]) , y la calificación para el desafío de Bob es el triplete b = (b[0], b[1], b[2]) .

La tarea es encontrar sus puntos de comparación comparando a[0] con b[0] , a[1] con b[1] y a[2] con b[2] .

Si a[i] > b[i] , entonces Alice recibe 1 punto.
Si a[i] < b[i] , entonces Bob recibe 1 punto.
Si a[i] = b[i] , entonces ninguna persona recibe un punto.
Los puntos de comparación son el total de puntos que una persona ganó.

Dados a y b , determine sus respectivos puntos de comparación.
*/

document.addEventListener("DOMContentLoaded", function(){
    
    let a = [30, 80, 90];
    let b = [40, 50, 100];

    
    
    function compareTriplets(a, b) {
        const minRange = 1;
        const maxRange = 100;
        
        // Creo una variable para guardar los puntos del jugador
        let scoreA = 0;
        let scoreB = 0;

        for (let i = 0; i < a.length; i++){
            // Valido que los valores esten entre 1 y 100
            if (a[i] < minRange || a[i] > maxRange || b[i] < minRange || b[i] > maxRange){
                throw new Error(`Los valores deben estar entre ${minRange} y ${maxRange}`); 
            }

            if (a[i] > b[i]){
                scoreA++;
                continue;
            }  
            
            if (a[i] < b[i]){
                scoreB++;
                continue;
            }            
        }

        if (scoreA === scoreB){
            console.log(`El juego termino en empate`);
            return [scoreA, scoreB];
        }

        if (scoreA > scoreB){
            console.log(`El jugador Alice es el ganador con ${scoreA} puntos`);
            return [scoreA, scoreB];
        }
        
        console.log(`El jugador Bob es el mejor con ${scoreB} puntos`);
    

        

        return [scoreA, scoreB];
        
    }

    console.log(compareTriplets(a, b));
});