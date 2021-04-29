var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var shapes = new Image()
shapes.src = 'images/shapes.png'

shapes.onload = function() {
    ctx.drawImage(shapes, 800, 800, 0, 0)
    //Draw rectangle
    ctx.fillStyle = "yellow"
    ctx.strokeStyle = "black"
    ctx.lineWidth = "5"

    ctx.strokeRect(30, 30, 100, 100);
    ctx.fillRect(30, 30, 100, 100);
    ctx.moveTo(800, 800)
    ctx.lineTo(84,548)

    //Draw a line
    ctx.beginPath()
    ctx.moveTo(800, 800)
    ctx.lineTo(84, 548)
    ctx.stroke(255,0,0)
    
}