'use strict'

const container = document.querySelector('.container');
const buttonIncrease = document.querySelector('.increase');
const buttonDecrease = document.querySelector('.decrease');
let getGridNumber = 16;

const createGrid = function(gridInput){
        for(let i = 0; i < gridInput; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        
        for(let j=0; j < gridInput; j++) {
            const square = document.createElement("div")
            square.classList.add("square");
            square.classList.add('hover');
            square.textContent = j;
            row.appendChild(square);
            
        }
    } const changeGridUp = function(gridInput) { 
            gridInput = getGridNumber++;
            console.log(getGridNumber);
            }
    const changeGridDown = function(gridInput) { 
                gridInput = getGridNumber--;
                console.log(getGridNumber);
                }
    checkChild();
    const increase = buttonIncrease.addEventListener('click', changeGridUp)
    const decrease = buttonDecrease.addEventListener('click', changeGridDown)
}

function checkChild() {    
    const childNodes = document.querySelectorAll("div.hover");
    let count = 0;
    const countNum = document.querySelector(".count");
    childNodes.forEach((child) => {
        child.addEventListener('mouseover', function(e) {
            // console.log(e.target);
            // e.stopPropagation();
            e.target.style.backgroundColor = "tomato";
            // e.target.style.border = "yellow 0.1px solid";
            count++;
            countNum.textContent = count;
            if (count === 256) {
                countNum.textContent = "DONE";
            }
            
        }, {capture: false, once: true})
    })
}


createGrid(16);

