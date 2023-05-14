const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

const mouse = {
    x: undefined,
    y: undefined,
}

window.addEventListener('click', (e) => {
    mouse.x = e.x
    mouse.y = e.y
})

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x
    mouse.y = e.y
})

function drawCircle() {
    ctx.fillStyle = 'lightblue'
    ctx.beginPath()
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2)
    ctx.fill()
}

function animate(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawCircle()
    requestAnimationFrame(animate)
}

animate()