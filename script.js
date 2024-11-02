'use strict'

const container = document.querySelector('.container');
const buttonIncrease = document.querySelector('.increase');
const buttonDecrease = document.querySelector('.decrease');

function createGrid(gridInput){
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
    }

    function gridChangeSize(e){
    
    let countBtnIncrease = gridInput;
    let countBtnDecrease = gridInput;
    if (e.target === buttonIncrease){
        countBtnIncrease ++;
        console.log(countBtnIncrease);
        createGrid(gridInput + 1);
        // return gridInput + 1;
    }
        else if (e.target === buttonDecrease) {
        countBtnDecrease--;
        console.log(countBtnIncrease);
        return gridInput - 1;
        // createGrid(countBtnDecrease)
        }
    console.log(countBtnIncrease)
    console.log(countBtnDecrease)
    // countBtnIncrease = createGrid();
    // createGrid();
    }
    checkChild();
    buttonIncrease.addEventListener('click', gridChangeSize)
    buttonDecrease.addEventListener('click', gridChangeSize)
}

function checkChild() {    
    const childNodes = document.querySelectorAll("div.hover");
    let count = 0;
    const countNum = document.querySelector(".count");
    childNodes.forEach((child) => {
        child.addEventListener('mouseenter', function(e) {
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