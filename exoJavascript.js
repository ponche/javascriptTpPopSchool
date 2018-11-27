// declaration des balises 
let baliseInputNewStudent = document.querySelector("#newStudent") ; 
let baliseButtonNewStudent = document.querySelector("#buttonNewStudent") ; 
let baliseListeStudents = document.querySelector("#listeStudents"); 

// mon objet liste 
let listeStudent = {}; 
let students = [] ; 

// des ligne obscure 
var myImage = document.querySelector("#myImage");
fetch("http://api-students.popschool-lens.fr/students.json")
    .then(response => response.json())
    .then(function (myJson) {
        listeStudent = myJson ; 
        listeStudent.students.forEach(element => {
            students.push(element) ; 
            updateListe() ; 
        });
    });


// le reste du code parcours un array students 

// update liste 
function updateListe()
{
    // effacement de la liste student 
    baliseListeStudents.innerHTML = "" ; 

    // tri des eleves par ordre aphanumérique 
    students.sort() ; 

    // ajout des balise student
    for(let i = 0 ; i < listeStudent.students.length ; i++) 
    {
        // utilisation de la for, car besoin de connaitre id 
        console.log("boucle : " + i ) ; 
        let baliseStudent = createElementStudent( listeStudent.students[i].firstname , i) ; 
        baliseListeStudents.appendChild(baliseStudent) ; 
    }
}

// create balise student 
function createElementStudent(prenom, id) 
{
    let divStudent = document.createElement("div") ; 
    divStudent.id = id  ; 
    
    // creation de input 
    let divInput = document.createElement("input"); 
    divInput.value = prenom ; 
    divInput.placeholder = prenom ; 
    divInput.id = "i" + id ; 

    // creation button delete
    let divButtonDelete = document.createElement("button") ; 
    divButtonDelete.innerHTML = "Delete Student" ; 
    divButtonDelete.id = "d" + id ; 
    
    // creation button change prenom
    let divButtonChange = document.createElement("button") ;
    divButtonChange.innerHTML = "Change Prenom" ; 
    divButtonChange.id = "c" + id ;  

    // assemblage de la balise student 
    divStudent.appendChild(divInput) ; 
    divStudent.appendChild(divButtonChange); 
    divStudent.appendChild(divButtonDelete); 

    // on renvoie la balise en return ( le dino pond oeuf ) 
    return divStudent ; 

}

// on met un ecouteur d'evenement sur le bouton add student 
baliseButtonNewStudent.addEventListener("click", function(){
    // click sur le bouton add student 

    listeStudent.students.push({firstname : baliseInputNewStudent.value, lastname: "Sans famille", sex: "X"}) ; 
    baliseInputNewStudent.value = "" ; 
    updateListe() ; 
}) ; 

// on met un mega ecouteur qui va écouter la liste students
baliseListeStudents.addEventListener("click", function(e){
    // mon mega ecouteur 
    console.log("click sur la liste") ; 
    if(e.target.id != "undefined")
    {
        // on peut continuer, il contient au moins une valeur 
        if(e.target.id[0] == "c")
        {
            // on execute le code pour le changement de nom 
            console.log("button change") ; 
            let idArray = getIndexArray(e.target.id); 
            // on recupere input 
            let baliseInput = document.querySelector("#i" + idArray) ; 
            // on met a jour le tableau 
            listeStudent.students[idArray].firstname = baliseInput.value ; 
            // on met a jour tous le tableau 
            updateListe() ; 
        }
        else if(e.target.id[0] == "d")
        {
            // on execute le code pour la suppresion 
            console.log("button delete") ; 
            let idArray = getIndexArray(e.target.id); 
            // demande de confirmation 
            if(confirm("Voulez vous supprimer " + listeStudent.students[idArray].firstname))
            {
                // on supprime item dans le tebleau 
                listeStudent.students.splice(idArray, 1) ; 
                // on met a jour tous le tableau 
                updateListe() ;    
            }
             
        }
        else 
        {
            // click dans le néant 
            console.log("click dans le vide") ; 
        }
    }

}); 

// mise a jour de la liste 
//updateListe() ; 

// function recuperation id via la class 
function getIndexArray(idClass)
{
    return parseInt(idClass.slice(1)) ;
}
