'use strict'

const container = document.querySelector('.container');



function createGrid(gridInput){
    for(let i = 0; i < gridInput; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        for(let j=0; j < gridInput; j++) {
            const square = document.createElement("div")
            square.classList.add("square");
            square.classList.add('hover');
        // square.textContent = j;
        row.appendChild(square);
        
    }
}

checkChild();
}

function checkChild() {    
    const childNodes = document.querySelectorAll("div.hover");
    let count = 0;
    const countNum = document.querySelector(".count");
    childNodes.forEach((child) => {
        child.addEventListener('mouseenter', function(e) {
            console.log(e.target);
            // e.stopPropagation();
            e.target.style.backgroundColor = "tomato";
            // e.target.style.border = "yellow 0.1px solid";
            count++;
            countNum.textContent = count;
            // console.log(count);
            
        }, {capture: false})
    })
}


createGrid(16);