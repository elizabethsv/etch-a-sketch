let containerDiv = document.getElementById("container")
let gridDiv;
let clearGridBtn = document.getElementById("clearGridBtn")
let newGridBtn = document.getElementById("newGridBtn")
let numberOfGrids = 0


function makeGrid(number){
    for(let i = 0; i < (number**2); i++){
        gridDiv = document.createElement("div")
        gridDiv.className = "gridDiv"
        containerDiv.style.gridTemplateColumns = `repeat(${number}, 20px)`
        containerDiv.style.gridTemplateRows = `repeat(${number}, 20px)`
        containerDiv.insertAdjacentElement('beforeend',gridDiv)
        gridDiv.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = "black"
        })   
     }
 }
 

makeGrid(16)

clearGridBtn.addEventListener("click", ()=>{
    gridDiv = document.getElementsByClassName("gridDiv")
    for (let i = 0; i < gridDiv.length; i++){
        gridDiv[i].removeAttribute("style")
    }
})

newGridBtn.addEventListener("click", ()=>{
    
    let gridDivsToRemove = document.querySelectorAll(".gridDiv")
    for(let i = 0; i< gridDivsToRemove.length; i++){
        gridDivsToRemove[i].remove()
    }
    numberOfGrids = prompt("Grid size: ");
    Number(numberOfGrids)
    makeGrid(numberOfGrids);
})