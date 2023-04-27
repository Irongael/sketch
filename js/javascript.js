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

const gridBtn = document.querySelector('#btn');
gridBtn.addEventListener('click', () => {
    clearGrid();
    createGrid();
});




