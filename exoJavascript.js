// variable global 
let longitude ; 
let largitude ;

// les balise 
let tagLongitude = document.querySelector("#x") ; 
let tagLargitude = document.querySelector("#y") ; 
// on recupere les position 
navigator.geolocation.getCurrentPosition(success, error);


// fonction de callback si la position existe 
function success(gps)
{
    tagLargitude.innerHTML = gps.coords.latitude ; 
    tagLongitude.innerHTML = gps.coords.longitude ; 
}

// fonction de callback en cas de système en panne 
function error()
{
    alert("Vous n'etes pas géolocalisable ") ; 
}
