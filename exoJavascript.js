// recupération des balise HTML 
let baliseBigBen = document.querySelector("#bigBen") ; 

// declaration des variable 
let bigBen = new Date ; 

// code executer à chaque seconde 
function ticTac()
{
    // se code sera executer tous les secondes 
    bigBen = new Date ; 
    console.log("tic tac") ; 
    baliseBigBen.innerHTML = bigBen.getHours() + " : " + bigBen.getMinutes() ;  
}

// creation du timer 
window.setInterval(ticTac, 100) ;  

