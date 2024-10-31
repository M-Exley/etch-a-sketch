'use strict'
const gridSize = Number(prompt("Enter number of squares per axis, 16 or less:"));
let x = gridSize;
console.log(x);

function draw (numberOfSquares) {
    for(x=0; x<=numberOfSquares; x++) {
    const container = document.querySelector('.container');
    const newDivOne = document.createElement('div');
    newDivOne.className = 'new-div-one';
    newDivOne.textContent = x;
    container.appendChild(newDivOne);
    newDivOne.addEventListener('mouseenter', function(e) {
        let target = newDivOne;
        console.log(e.target);
        if (e.target) {
            target.style.backgroundColor = "red";
            
        }
    })
}
}

function getContainerDimensions () {
    const container = document.querySelector('.container');
    let height = container.getBoundingClientRect().height;
    let width = container.getBoundingClientRect().width;
    let availableSpace = (height * width) / 16;
    console.log(availableSpace);
     
    
}
draw(gridSize - 1);
getContainerDimensions();