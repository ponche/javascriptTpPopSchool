// calcul du cumul et moyenne 

// declaration des balise 
let baliseInput = document.querySelector("#fieldMath") ; 
let baliseButtonSubmit = document.querySelector("#submitMath") ; 
let baliseButtonReset = document.querySelector("#resetMath") ; 
let baliseResultMath = document.querySelector("#resultatMath") ; 

// declaration des variable 
let tableauNumber = [] ; 
let cumul = 0 ; 
let moyenne = 0 ; 

// ajouts des ecouteurs evenement
baliseButtonSubmit.addEventListener("click", function(){
    // code executer quand click sur le bouton ajouter valeur 

    tableauNumber.push(parseFloat(baliseInput.value)) ; 

    // reset avant de calculer 
    cumul = 0 ; 

    // calcul du cumul
    tableauNumber.forEach(function(valeur){
        cumul += valeur ; 
    }); 
    // calcul de la moyenne 
    moyenne = cumul / tableauNumber.length ; 

    // affichage des resultat 
    baliseResultMath.innerHTML = "<span> cumul : " + cumul + " </span><br/> <span> moyenne : " + moyenne + " <br/> " ; 


}); 
baliseButtonReset.addEventListener("click", function(){
    baliseResultMath.innerHTML = "" ; 
    tableauNumber = [] ; 
    baliseButtonSubmit.value = "" ; 
})