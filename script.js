let containerDiv = document.getElementById("container")
let gridDiv;


for(let i = 0; i < 256; i++){
    gridDiv = document.createElement("div")
    gridDiv.className = "gridDiv"
    containerDiv.insertAdjacentElement('beforeend',gridDiv)
}

