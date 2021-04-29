//Defines variable to access canvas properties by ID
var canvas = document.getElementById('canvas')
//Define the drawing context of the canvas Element
var ctx = canvas.getContext('2d')

var galaxy = new Image()
galaxy.src = 'images/galaxy.jpg'

galaxy.onload = function () {
    ctx.drawImage(galaxy, 0, 0, 800, 600)
    //Draw rectangle
    ctx.fillStyle = "rgb( 50, 50, 100)"
    ctx.strokeStyle = "green"
    ctx.lineWidth = "5"

    ctx.strokeRect(30, 30, 100, 100);
    ctx.fillRect(30, 30, 100, 100);

    //draw line
    ctx.moveTo(800, 0)
    ctx.lineTo(800, 600)
    ctx.stroke()

    ctx.moveTo(800, 0)
    ctx.lineTo(0, 600)
    ctx.stroke()

    //draw circle
    //ctx.artx(x,y startAngle, endAngle, isCounterClockwise)
    ctx.beginPath()
    ctx.arc(400, 300, 50, 0, (3 * Math.PI) / 2, false)
    ctx.lineTo(400, 300)
    ctx.closePath()
    ctx.fill()

    //draw shape

    ctx.fillStyle = "#5"

    ctx.beginPath()
    ctx.moveTo(650, 100)
    ctx.lineTo(700, 140)
    ctx.lineTo(675, 200)
    ctx.lineTo(625, 200)
    ctx.lineTo(600, 140)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    //Draw an image to canvas
    //Creates instance 
    var mario = new Image()
    mario.src = 'images/mario.png'
    //Callback function loads image and draws it to the canvas
    mario.onload = function () {

        ctx.drawImage(mario, 600, 300, 40, 80)
    }

}