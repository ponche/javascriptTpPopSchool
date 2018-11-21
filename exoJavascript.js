// declaration des balises 
let baliseInputNewStudent = document.querySelector("#newStudent") ; 
let baliseButtonNewStudent = document.querySelector("#buttonNewStudent") ; 
let baliseListeStudents = document.querySelector("#listeStudents")

// liste des eleves 
var students = ["Alexandre","Béatrice","Benoît","Émeric","Florian","Gwenaëlle","Jérémy","Johan","Justine M","Justine P","Justine T","Kévin","Loïc","Mathieu","Matthias","Rémi","Samuel","Sébastien","Sullivan","Thomas","Tiffany","Valentin","Yann"];

// update liste 
function updateListe()
{
    // effacement de la liste student 
    baliseListeStudents = "" ; 

    // tri des eleves par ordre aphanumérique 
    students.sort() ; 

    // ajout des balise student
    for(let i = 0 ; i < students ; i++) 
    {
        // utilisation de la for, car besoin de connaitre id 
        let baliseStudent = createElementStudent(students[i], i) ; 
        baliseListeStudents.appendChild(baliseStudent) ; 
    }
}

// create balise student 
function createElementStudent(prenom, id) ; 
{
    let divStudent = document.createElement("div") ; 
    divStudent.id = id  ; 
    
    // creation de input 
    let divInput = document.createElement("input"); 
    divInput.value = prenom ; 
    divInput.placeholder = prenom ; 

    // creation button delete
    let divButtonDelete = document.createElement("button") ; 
    divButtonDelete.innerHTML = "Delete Student" ; 
    divButtonDelete.id = "d" + id ; 
    
    // creation button change prenom
    let divButtonChange = document.createElement("button") ;
    divButtonChange.innerHTML = "Change Prenom" ; 
    divButtonChange.id = "c" + id ;  

    // assemblage de la balise student 
    divStudent.appendChild(divButtonChange); 
    divStudent.appendChild(divButtonDelete); 

    // on renvoie la balise en return ( le dino pond oeuf ) 
    return divStudent ; 

}
