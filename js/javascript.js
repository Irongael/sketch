function createGrid() {
    const container = document.querySelector('#container');
    let num1 = prompt("please enter grid size", 1);

    container.style.gridTemplateColumns = `repeat(${num1}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num1}, 1fr)`;
    
    let j = getGridSize(num1);

    for(let i = 0; i < j; i++) {
        const content = document.createElement('div');
        content.classList.add('content');

        container.appendChild(content);
    }
}

function getGridSize(num) {
    num = num * num;
    return num;
}

createGrid();