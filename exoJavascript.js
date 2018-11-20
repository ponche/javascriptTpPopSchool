// declaration des balises 
let baliseInputUser = document.querySelector("#inputUser") ; 
let baliseButtonSubmit = document.querySelector("#buttonSubmit") ; 
let baliseButtonReset = document.querySelector("#buttonReset") ; 
let baliseMessage = document.querySelector("#message") ; 
let baliseScore = document.querySelector("#score") ; 

// declaration des variables 
let numberMystere = Math.floor(Math.random() * 100 + 1) ; 
let numberUser ; 
let compteurEssai = 0 ; 

// les ecouteur d'evenement 
baliseButtonSubmit.addEventListener("click", function(){
    // un essai est jouer 
    compteurEssai++ ; 
    numberUser = parseFloat(baliseInputUser.value); 
    if (numberMystere == numberUser)
    {
        // utilisateur a gagné 
        alert("Bravo, vous avez trouver le nombre, vous aves fait " + compteurEssai + " tentative pour le trouver ") ; 
        reset() ; 
    }
    else
    {
        if(numberMystere < numberUser)
        {
            baliseMessage.innerHTML = "<strong>c'est moins</strong>" ; 
        }
        else
        {
            baliseMessage.innerHTML = "<strong>c'est plus</strong>" ; 
        }
        // modif message score 
        baliseScore.innerHTML = "nombre tentative : " + compteurEssai ; 
    }
}); 
baliseButtonReset.addEventListener("click", reset) ; 

function reset() 
{
    compteurEssai = 0 ; 
    numberMystere = Math.floor(Math.random() * 100 + 1) ; 
    baliseInputUser.value = "" ; 
    baliseMessage.innerHTML = "" ; 
    baliseScore.innerHTML = "" ; 
}
