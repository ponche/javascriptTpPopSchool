// capture des balise 
let baliseInputSexe = document.querySelector("#sexe") ; 
let baliseInputCl = document.querySelector("#clBu") ; 
let baliseInputPourcentage = document.querySelector("#pourcentageA") ; 
let baliseInputPoids = document.querySelector("#poids") ; 
let baliseSubmit = document.querySelector("#submit") ; 

// un ecouteur d'event 
baliseSubmit.addEventListener("click", aaa) ; 

function aaa() 
{
    // code executer au moment du click sur le bouton 
    let theSexe = baliseInputSexe.value ; 
    let volume = baliseInputCl.value ; 
    let pourcentage = baliseInputPourcentage.value ; 
    let masse = baliseInputPoids.value ; 

    let grammage = tauxAlcool(theSexe, volume, pourcentage, masse) ; 

    alert("Votre taux alcool est égal à  : " +  grammage) ; 



}


function tauxAlcool(sexe, clBu, pourcentageAlcool, poids)
{
    let coeffSexe ; 
    if (sexe == "homme")
    {
        coeffSexe = 0.7 ; 
    }
    else if (sexe == "femme")
    {
        coeffSexe = 0.6 ; 
    }
    else
    {
        // erreur je fait planter volontaire 
        console.error("le paramètre sexe est incorrect") ; 
        // je balance un return pour sortir de la fonction 
        // return sert a renvoyer une valeur et a sortir de la fonction 
        return 
    }
    let tauxAlcool = (clBu * (pourcentageAlcool / 100 * 8) / ( coeffSexe * poids) ); 

    // je termine et renvoie le resultat grace à au mot clé return 
    return tauxAlcool ; 
}


// appel de la fonction 