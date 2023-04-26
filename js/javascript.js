function createGrid() {
    const container = document.querySelector('#container');

    for(let i = 0; i < 16; i++) {
        const content = document.createElement('div');
        content.classList.add('content');

        container.appendChild(content);
    }
}

createGrid();