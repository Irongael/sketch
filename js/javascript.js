function createGrid() {
    const container = document.querySelector('#container');
    let num1 = prompt("please enter grid size", 1);
    //once dimensions are given gridtemplate style is added to properly size drawing grid
    if((num1 > 0) && (num1 < 101)) {
        container.style.gridTemplateColumns = `repeat(${num1}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num1}, 1fr)`;
    
        let j = getGridSize(num1);
        
        //uses j to generate the proper number of divs for our drawing grid
        for(let i = 0; i < j; i++) {
            const content = document.createElement('div');
            content.classList.add('content');

            container.appendChild(content);
        }

        //adds event listener so by default our grid can change gridDivs from white to black
        const gridDivs = document.querySelectorAll('.content');
        gridDivs.forEach((grid) => {
            grid.addEventListener('mousemove', () => {
                grid.classList.add('black');
            });
        });
    }
    else {
        console.log("ERROR");
    }
}

function getGridSize(num) {
    //calculates the total number of gridDivs needed for a num x num grid
    num = num * num;
    return num;
}

function clearGrid() {
    //clears the current grid by removing all child elements from grid #container
    const container = document.querySelector('#container');

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
}

function eraseDiv() {
    //changes our cursor into an eraser for our drawing grid
    const gridDivs = document.querySelectorAll('.content');
    gridDivs.forEach((grid) => {
        grid.addEventListener('mousemove', () => {
            grid.classList.remove('black');
            grid.style.backgroundColor = null;
        });
    });
}

function drawDiv() {
    //changes our cursor into a black pen for our drawing grid
    const gridDivs = document.querySelectorAll('.content');
    gridDivs.forEach((grid) => {
        grid.addEventListener('mousemove', () => {
            grid.classList.add('black');
            grid.style.backgroundColor = null;
        });
    });
}

function ranNum() {
    //returns a random number between 0 and 255
    return Math.random() * (255 - 0) + 0;
}

function colorDiv() {
    //changes our cursor into a rainbow pen using 3 random rgb values
    const gridDivs = document.querySelectorAll('.content');
    gridDivs.forEach((grid) => {
        let num1 = ranNum();
        let num2 = ranNum();
        let num3 = ranNum();
        grid.addEventListener('mousemove', () => {
            grid.style.backgroundColor =`rgb(${num1}, ${num2}, ${num3})`;
        });
    });
}

function clearDiv() {
    const gridDivs = document.querySelectorAll('.content');
    gridDivs.forEach((grid) => {
        grid.style.backgroundColor = null;
        grid.classList.remove('black');
    });
}

createGrid();

const gridBtn = document.querySelector('#btn');
gridBtn.addEventListener('click', () => {
    clearGrid();
    createGrid();
});

const eraseBtn = document.querySelector('#eraseBtn');
eraseBtn.addEventListener('click', () => {
    eraseDiv();
});

const drawBtn = document.querySelector('#drawBtn');
drawBtn.addEventListener('click', () => {
    drawDiv();
});

const colorBtn = document.querySelector('#colorBtn');
colorBtn.addEventListener('click', () => {
    colorDiv();
});

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', () => {
    clearDiv();
});