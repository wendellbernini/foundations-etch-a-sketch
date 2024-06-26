const container = document.querySelector('#container')
const button = document.querySelector('#button')

container.style.width = '720px'
container.style.height = '720px'

const containerWidth = parseInt(container.style.width)
const containerHeight = parseInt(container.style.height)

const removeAllSquares = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.remove());
}

const createSquare = () => {
    removeAllSquares();

    const userSquareOnWidth = parseInt(prompt('insert square numbers on width and height: '))
    const userSquareOnHeight = userSquareOnWidth

    if (userSquareOnWidth <= 100) {
        for (let i = 0; i < userSquareOnWidth * userSquareOnHeight; i++) {
            let div = document.createElement('div')
            div.classList.add('cell')
            div.style.width = `${containerWidth / userSquareOnWidth}px`
            div.style.height = `${containerHeight / userSquareOnHeight}px`
            div.style.opacity = '1';
            container.appendChild(div)

            div.addEventListener('mouseover', (e) => {
                let opacityNum = parseFloat(e.target.style.opacity)
                if (opacityNum > 0) {
                    e.target.style.opacity = opacityNum - 0.1
                }

                let rgb = Math.floor(Math.random() * 3) + 1
                if (rgb === 1) {
                    e.target.style.backgroundColor = 'red'
                } else if (rgb === 2) {
                    e.target.style.backgroundColor = 'green'
                } else {
                    e.target.style.backgroundColor = 'blue'
                }

                console.log(opacityNum)
            })
        }
    } else {
        createSquare()
    }
}

button.addEventListener('click', createSquare)
