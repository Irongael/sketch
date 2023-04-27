function createGrid() {
    const container = document.querySelector('#container');
    let num1 = prompt("please enter grid size", 1);

    if((num1 > 0) && (num1 < 101)) {
        container.style.gridTemplateColumns = `repeat(${num1}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${num1}, 1fr)`;
    
        let j = getGridSize(num1);

        for(let i = 0; i < j; i++) {
            const content = document.createElement('div');
            content.classList.add('content');

            container.appendChild(content);
        }

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
    num = num * num;
    return num;
}

function clearGrid() {
    const container = document.querySelector('#container');

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
}

function eraseDiv() {
    const gridDivs = document.querySelectorAll('.content');
    gridDivs.forEach((grid) => {
        grid.addEventListener('mousemove', () => {
            grid.classList.remove('black');
            grid.style.backgroundColor = null;
        });
    });
}

function drawDiv() {
    const gridDivs = document.querySelectorAll('.content');
    gridDivs.forEach((grid) => {
        grid.addEventListener('mousemove', () => {
            grid.classList.add('black');
        });
    });
}

function ranNum() {
    return Math.random() * (255 - 0) + 0;
}

function colorDiv() {
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