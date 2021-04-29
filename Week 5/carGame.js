var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)

var xpos = 20

var start =  50
var finish = 750

//code for if game is over
var gameOver = true

//variable for large sprites
var mario = new Image()
mario.src = 'images/mario3.png'

mario.onload = function(){
    main();
}

    //Fuel variable
    var startFuel = fuel = randomnumber(0, canvas.width)
    var fuel = startFuel
    var fullBarwidth = 300

    //count down
    var sec = 3
    var fps = 60
    var frames = fps


//adding keypress
document.addEventListener("keydown", keyPressDown)
document.addEventListener("keyUp", keyPressUp)


function main(){
    //Call frame
    timer = requestAnimationFrame(main)

    //clear canvas
    ctx.clearRect(0,0, canvas, canvas.width, canvas.height)
    if(gameOver){
        ctx.fillstyle = "black"
        ctx.font = "30px arial"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to Start", canvas.width/2, canvas.height/2)
    }
    else{
        if(!gameOver && sec > 0){
            
        runStartTimer()
        drawStarTimer()
    }else{
        if(!gameOver == false && fuel > 0 && sec < 0){
            //update values
            xpos++;
            fuel--;
        }
    }
}


    //draw the things

    //Draw start and finish line
    drawStarline()
    drawFinishline()

    //draw car
    drawCar()
    drawCarimage()

    //draw fuel
    drawFuelbar()
    drawFuelText()

    //Determines if game is over





    ctx.fillStyle = "black"
    ctx.fillRect(start, 50, 10, 500)
    ctx.fillRect(finish, 50, 10, 500)

    //code for car
    ctx.fillStyle = "red"
    ctx.fillRect(xpos, canvas.height/2,30,20)

    ctx.drawImage(mario, xpos, canvas.height/2,20,50)
}

function keyPressDown(e){
    console.log(e.keyCode)
    //pressing spacebar
    if(e.keyCode == 32){ 
        gameOver = false
        //toggles game over on keypress
        //gameOver = !gameOver
        //document.addEventListener("keydown", keyPressDown);
    }
}

function keyPressUp(e){
    console.log(e.keyCode)
    //pressing spacebar
    /*if(e.keyCode = 32){
        gameOver = true
    }*/
}

function drawStarline(){
    ctx.fillStyle = "black"
    ctx.fillRect(start, 50, 10, 500)
}

function drawFinishline(){
    ctx.fillStyle = "black"
    ctx.fillRect(finish, 50, 10, 500)
}

function drawCar(){
    ctx.fillStyle = "red"
    ctx.fillRect(xpos, canvas.height/2,30,20)
}

function drawCarimage(){
    ctx.drawImage(mario, xpos, canvas.height/2,20,50)
}

function drawFuelbar(){
    var barCurrentwidth = fullBarwidth * (fuel/startFuel)

    ctx.fllStyle = "black"
    ctx.fillRect(start, 30, fullBarwidth, 20)
    if(fuel ){
        ctx.fillStyle = "red"
        ctx.fillRect(start, 30, barCurrentwidth, 20)
    }
}

function getFuelPercentage(){
    return fuel/startFuel
}

function fillStyle(){
    ctx.fillStyle = "black"
    ctx.font = "10px Arial"
    ctx.fillText(fuel, start, 25)
}

function runStarttimer(){
    frames -= 1;
    if(frames < 0){
        frames = fps
        sec -= 1
    }
}

function drawStarttimer(){
    ctx.fillStyle = "black"
    ctx.font = "10px Arial"
    ctx.textAlign = "center"
    ctx.fillText(sec, canvas.wdith/2, canvas.height/2);
}

function randomnumber(high, low){
    return Math.round(Math.random() * (high-low) + low)
}

function drawResults(){
    if(xpos > finish){
        ctx.fillStyle = "black"
    ctx.font = "10px Arial"
    ctx.textAlign = "center"
    ctx.fillText("You made it to the finish, you win!", canvas.wdith/2, canvas.height/2);
    }else{
        ctx.fillStyle = "black"
    ctx.font = "10px Arial"
    ctx.textAlign = "center"
    ctx.fillText("You ran out of fuel, you lose!", canvas.wdith/2, canvas.height/2);
    }
}

function restartGame(){
    location
}