'use strict'

const container = document.querySelector('.container');



function createGrid(gridInput){
    for(let i = 0; i < gridInput; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        // row.textContent = i;

        for(let j=0; j < gridInput; j++) {
        const square = document.createElement("div")
        square.classList.add("square");
        square.textContent = j;
        row.appendChild(square);
        
    }
}

checkChild();
}

function checkChild() {
    if (container.hasChildNodes) {
        console.log("YES")
    }
    
    const childNodes = document.querySelectorAll('div');
    childNodes.forEach((child) => {
        child.addEventListener('mouseleave', function(e) {
            console.log(e.target);
            e.target.style.backgroundColor = "red";
            
        })
    })
}


createGrid(16);