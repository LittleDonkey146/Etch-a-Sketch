const container = document.querySelector('#container');

const userAnswer = askUser();

function askUser(dimensions) {
    do {
        dimensions = window.prompt('What\'s the X value of the grid you want to make? The grid\'s dimensions will be ( X * X )');
    } while (dimensions > 64);
    return dimensions;
}

function squareCreation() {
    for(let i = 0; i < userAnswer; i++) {
        const newLine = document.createElement('div');
        newLine.classList.add('line');
        container.appendChild(newLine);
        for(let j = 0; j < userAnswer; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${500 / userAnswer}px`;
            square.style.height = `${500 / userAnswer}px`;
            square.addEventListener('mouseenter', function(event)  {
                event.target.style.background = 'yellow';
            });
            newLine.appendChild(square);
        }
    }
}

squareCreation();