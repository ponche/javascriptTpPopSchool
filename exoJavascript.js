// declaration des balise 
let baliseButtonGenerator = document.querySelector("#buttonGenerator");
let baliseSuperDamier = document.querySelector("#superDamier");
let baliseInputRow = document.querySelector("#numberRow");
let baliseInputColumn = document.querySelector("#numberColumn");

// declaration du tableau en 2D 
let damier = [];


// fonction creator cellule 
function createCellule(couleur) {
    let cellule = document.createElement("div");
    cellule.classList.add("cellule");
    if (couleur == "black")
        cellule.classList.add("black");
    if (couleur == "white")
        cellule.classList.add("white");

    return cellule
}


function generatorDamier(row, column) {
    // on creer les row 
    for (let i = 0; i < row; i++) {
        let divRow = document.createElement("div");
        divRow.classList.add("row");
        baliseSuperDamier.appendChild(divRow);
        // damier.push(baliseSuperDamier);
        let rowEven = i % 2;

        // on cree les div Cellule 
        for (let j = 0; j < column; j++) {
            let divCellule = document.createElement("div");
            divCellule.classList.add("cellule");
            // ajout de la couleur 
            let columnEven = j % 2;
            if (rowEven == columnEven) {
                divCellule.classList.add("black");
            }
            else {
                divCellule.classList.add("white");
            }
            divRow.appendChild(divCellule);
            // ajout dans le tableau 
            // damier[i].push(divCellule) ; 


        }

    }
}

// ajout ecouteur evenemnt button 
baliseButtonGenerator.addEventListener("click", function(){
    let nombreRow = parseInt(baliseInputRow.value)  ; 
    let nombreColumn = parseInt(baliseInputColumn.value)  ;
    generatorDamier(nombreRow, nombreColumn) ; 

}); 