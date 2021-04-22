var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var timer = requestAnimationFrame(main)

var x = 0

var galaxy = new Image()
galaxy.src = "images/galaxy.jpg"
galaxy.onload = function(){
    main()
}


var mario = new Image()
mario.src = "images/mario3.png"
mario.onload - function(){
    main()
}


function main(){
    ctx.clearRect(0,0,canvas.canvasWidth, canvas.height )
    //draw images
    ctx.drawImage(galaxy,0,0,800,600)
    ctx.drawImage(mario,x,canvas.height/2,40,60)
    console.log('working')
    
    //Update position
    x += 1

    if(x > canvas.width + 20){
        x = -20;
    }
    timer = requestAnimationFrame(main)
}