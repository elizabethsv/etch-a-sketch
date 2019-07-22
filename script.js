let containerDiv = document.getElementById("container")



for(let i = 0; i < 16; i++){
    let gridDiv = document.createElement("div")
    containerDiv.insertAdjacentElement('beforeend',gridDiv)
}