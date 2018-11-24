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
    let hours = bigBen.getHours() ; 
    let minutes = bigBen.getMinutes() ; 
    let secondes = bigBen.getSeconds() ; 
    // ajoute des zero si neccessaire 
    let stringHours = hours < 10 ? "0" + hours : hours ; 
    let stringMinutes = minutes < 10 ? "0" + minutes : minutes ;
    let stringSecondes = secondes < 10 ? "0" + secondes : secondes ;  
    baliseBigBen.innerHTML = stringHours + " : " + stringMinutes + "   secondes: " + stringSecondes ;  
}

// creation du timer 
window.setInterval(ticTac, 100) ;  

