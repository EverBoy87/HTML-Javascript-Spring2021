var canvas = document.querySelector('canvas')
var ctx =  canvas.getContext('2d')

var gravity = 1
var friction = 0.6
var dogeImg = new Image()
    dogeImg.src = "Images/dogecoin.png"

dogeImg.onload = function(){
    main()
}

function randomrange(high, low){
    return Math.random() * (high - low) + low
}

function GameObject(){
    //examples of properties in a class
    this.radius = randomrange(10,2)
    this.color = `rgb(${randomrange(0,255)}, ${randomrange(0,255)}, ${randomrange(0,255)})` //"yellow"
    this.x = canvas.width * 0.5//randomrange(canvas.width,0)
    this.y = canvas.height * 0.5//randomrange(canvas.height,0)
    this.vx = randomrange(30,-30)
    this.vy = randomrange(30,-30)

    //example of a method in a class
    this.drawCircle = function(){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true)
        ctx.closePath()
        ctx.fill()
    }
    this.drawSquare = function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x - this.radius, this.y - this.radius, - this.radius*2,  this.radius*2)
    }
    
    this.drawSprite = function(){
       ctx.drawImage(dogcoin, this.x - this.radius, this.y - this.radius, - this.radius*2,  this.radius*2)
    }

    //this handles the movement
    this.move = function (){
        //this.vx *= friction
        //this.vy *= friction
        this.x += this.vx
        this.y += this.vy
        if(this.y > canvas.height + this.radius){
            //this line resets particle position
            //this.y = this.radius
            this.y = canvas.height - this.radius

            this.vy = -this.vy * 0.6;
        }
        if(this.x < this.radius){
            this.x = this.radiusthis.vx = this.vx * 0.6
        }
        if(this.x > camvas.width - this.radius)
        this.x = canvas.width - canvas.width
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
        partcle[i].vy += gravity 
        //particle[i].y += 1
        console.log(particle[i].color)
        particle[i].move()
        //drawing functions
        //particle[i].drawCircle()
        //particle[i].drawSquare()
        particle[i].drawSprite()
    }
    timer = requestAnimationFrame(main)
}


