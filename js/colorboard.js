const container = document.getElementById('container')
const colors = ['orange', 'yellow', 'white', 'cornflowerblue', 'lightblue' ]
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(square))
}

function setColor(element) {

    element.style.background = "yellow"
}