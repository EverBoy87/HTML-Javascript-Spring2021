var canvas = document.querySelector('canvas')
var ctx =  canvas.getContext('2d')

function randomrange(high, low){
    return Math.random() * (high - low) + low
}

function GameObject(){
    //examples of properties in a class
    this.radius = randomrange(10,2)
    this.color = `rgb(${randomrange(0,255)}, ${randomrange(0,255)}, ${randomrange(0,255)})` //"yellow"
    this.x = randomrange(canvas.width,0)
    this.y = randomrange(canvas.height,0)
    this.vx = randomrange(30,0)
    this.vy = randomrange(30,0)

    //example of a method in a class
    this.drawCircle = function(){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true)
        ctx.closePath()
        ctx.fill()
    }

    //this handles the movement
    this.move = function (){
        //this.x += this.vx
        this.y += this.vy
        if(this.y > canvas.height + this.radius){
            this.y = this.radius
        }
    }
}

//create an instance of the gameobject class
//var particle = new GameObject()

//particle.x = 10
//particle.drawCircle()
var particle = []

var numParticle = 1000
var timer = requestAnimationFrame(main)

//for loop
for(var i = 0; i<numParticle; i++){
    particle[i] = new GameObject()
    particle[i].drawCircle()
}

function main(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    console.log(particle.length)
    for(var i = 0; i< particle.length; i++ ){
        particle[i].y += 1
        console.log(particle[i].color)
        particle[i].drawCircle()
    }
    timer = requestAnimationFrame(main)
}


