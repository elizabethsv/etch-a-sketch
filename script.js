let containerDiv = document.getElementById("container")
let gridDiv;
let clearGridBtn = document.getElementById("clearGridBtn")
let numberOfGrids = prompt("Enter number of squares per side: ")

for(let i = 0; i < 256; i++){
    gridDiv = document.createElement("div")
    gridDiv.className = "gridDiv"
    containerDiv.insertAdjacentElement('beforeend',gridDiv)
    gridDiv.addEventListener("mouseover", function(e){
        e.target.style.backgroundColor = "black"
    })   
}


clearGridBtn.addEventListener("click", ()=>{
    gridDiv = document.getElementsByClassName("gridDiv")
    for (let i = 0; i < gridDiv.length; i++){
        gridDiv[i].removeAttribute("style")
    }
  

})