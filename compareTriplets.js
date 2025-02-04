document.addEventListener("DOMContentLoaded", function(){
    
    let a = [30, 80, 90];
    let b = [40, 50, 100];
    
    function compareTriplets(a, b) {
        const minRange = 1;
        const maxRange = 100;

        for (let i = 0; i < a.length; i++){
            // Valido que los valores esten entre 1 y 100
            if (a[i] < minRange || a[i] > maxRange || b[i] < minRange || b[i] > maxRange){
                throw new Error(`Los valores deben estar entre ${minRange} y ${maxRange}`); 
            }
        }

        // Creo una variable para guardar los puntos del jugador
        let scoreA = 0;
        let scoreB = 0;

        for (let i = 0; i < a.length ; i++){
            if (a[i] > b[i]){
                scoreA++;
            } else if (a[i] < b[i]){
                scoreB++;
            }
        }
        return [scoreA, scoreB];
        
    }

    console.log(compareTriplets(a, b));
});