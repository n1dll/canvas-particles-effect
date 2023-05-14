const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

const mouse = {
    x: 0,
    y: 0,
}

window.addEventListener('click', (e) => {
    mouse.x = e.x
    mouse.y = e.y
    drawCircle()

})

function drawCircle() {
    ctx.fillStyle = 'lightblue'
    ctx.beginPath()
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2)
    ctx.fill()
}


