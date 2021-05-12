var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)

var xpos = 20

var start =  58
var finish = 956

//code for if game is over
var gameOver = true

//variable for large sprites
var mario = new Image()
mario.src = 'images/mario3.png'

mario.onload = function(){
    main();
}

    //Fuel variable
    var startFuel = randomNumber(600, canvas.width)
    var fuel = startFuel
    var fullBarWidth = 300

    //count down
    var sec = 5
    var fps = 30
    var frames = fps


//adding keypress
document.addEventListener('keydown', keyPressDown)
document.addEventListener('keyup', keyPressUp)


function main(){
    //Call frame
    timer = requestAnimationFrame(main)

    //clear canvas
    ctx.clearRect(0,0, canvas.width, canvas.height)
    if(gameOver){
        ctx.fillStyle = "black"
        ctx.font = "30px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Press Space to Start", canvas.width/2, canvas.height/2)
    }
    else{
        if(!gameOver && sec > 0){
            
        runStartTimer()
        drawStartTimer()
    }else{
        if(gameOver == false && fuel > 0 && sec <= 0){
            //update values
            xpos++;
            fuel--;
        }
    }
}


    //draw the things

    //Draw start and finish line
    drawStartLine()
    drawFinishLine()

    //draw car
    drawCar()
    drawCarImage()

    //draw fuel
    drawFuelBar()
    drawFuelText()

    //Determines if game is over
    if(xpos > finish + 10 || fuel <= 0){
        drawResults() 
    }
    
}

function keyPressDown(e){
    console.log(e.keyCode)
    //pressing spacebar
    if(e.keyCode == 32){ 
        if(!gameOver && fuel <= 0){
            restartGame()
        }
        gameOver = false
        //toggles game over on keypress
        //gameOver = !gameOver
        //document.removeEventListener("keydown", keyPressDown);
    }
}

function keyPressUp(e){
    console.log(e.keyCode)
    //pressing spacebar
    if(e.keyCode == 32){
        //document.addEventlistener("Keydown", keyPressDown);
    }
}

function drawStartLine(){
    ctx.fillStyle = "black"
    ctx.fillRect(start, 50, 10, 500)
}

function drawFinishLine(){
    ctx.fillStyle = "black"
    ctx.fillRect(finish, 50, 10, 500)
}

function drawCar(){
    ctx.fillStyle = "red"
    ctx.fillRect(xpos, canvas.height/2,30,20)
}

function drawCarImage(){
    ctx.drawImage(mario, xpos, canvas.height/2-30, 30, 50)
}

function drawFuelBar(){
    var barCurrentWidth = fullBarWidth * getFuelPercentage()

    ctx.fillStyle = "black"
    ctx.fillRect(start, 30, fullBarWidth, 10)
    if(fuel>0){
        ctx.fillStyle = "red"
        ctx.fillRect(start, 30, barCurrentWidth, 10)
    }
}

function getFuelPercentage(){
    return fuel/startFuel
}

function drawFuelText(){
    ctx.fillStyle = "black"
    ctx.font = "25px Arial"
    ctx.fillText(fuel,start,25);
}

function runStartTimer(){
    frames -= 1;
    if(frames < 0){
        frames = fps
        sec -= 1
    }
}

function drawStartTimer(){
    ctx.fillStyle = "black"
    ctx.font = "25px Arial"
    ctx.textAlign = "center"
    ctx.fillText(sec, canvas.width/2, canvas.height/2)
}

function randomNumber(high, low){
    return Math.round(Math.random() * (high- low) + low)
}

function drawResults(){
    if(xpos > finish){
        ctx.fillStyle = "black"
        ctx.font = "25px Arial"
        ctx.textAlign = "center"
        ctx.fillText("You made it to the finish, you win!", canvas.width/2, canvas.height/2);
    }else{
        ctx.fillStyle = "black"
        ctx.font = "25px Arial"
        ctx.textAlign = "center"
        ctx.fillText("You ran out of fuel, you lose!", canvas.width/2, canvas.height/2);
    }
}

function restartGame(){
    location.reload()
}