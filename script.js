const container = document.querySelector('#container');

var slider = document.getElementById("myRange");
slider.addEventListener('mouseup', () => squareCreation(slider.value));
var output = document.getElementById("demo");
output.innerHTML = `Dimensions: ${slider.value} x ${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `Dimensions: ${this.value} x ${this.value}`;
}

function askUser(dimensions) { // PROPABLY NOT NEEDED
    userAnswer = dimensions;
    console.log(userAnswer);
    return dimensions;
}

function squareCreation(squares) {
    container.innerHTML = ' ';
    for(let i = 0; i < squares; i++) {    
        const newLine = document.createElement('div');
        newLine.classList.add('line');
        container.appendChild(newLine);

        for(let j = 0; j < squares; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${500 / squares}px`;
            square.style.height = `${500 / squares}px`;
            
            square.addEventListener('mouseenter', function(event)  {
                event.target.style.background = 'black';
            });
            
            newLine.appendChild(square);
        }
    } 
}

squareCreation(slider.value);