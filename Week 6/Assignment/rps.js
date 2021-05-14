//Array of words
var c = document.getElementById('canvas')
var ctx = c.getContext('2d')
var rps = [];
rps[0] = 'Rock' 
rps[1] = 'Paper'
rps[2] = 'Scissors'



//Array of Buttons
var btn = document.querySelectorAll('a')
//Changes the words in the buttons

//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener('click', function(e){
    play(0)
})
btn[1].addEventListener('click', function(e){
    play(1)
})
btn[2].addEventListener('click', function(e){
    play(2)
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice
function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    
    alert(rps[pChoice] + " " + rps[cChoice]) 

    switch(pChoice){
        case 0:
            if(cChoice == 0)
            {
                //display a tie
                ctx.fillStyle = "blue"
                ctx.font = "25px Reggae One"
                ctx.textAlign = "center"
                ctx.fillText("You Tied", canvas.width/2, canvas.height/2)
            }
            else if(cChoice == 1)
            {
                //display a loss
                ctx.fillStyle = "red"
                ctx.font = "25px Reggae One"
                ctx.textAlign = "center"
                ctx.fillText("You Lost", canvas.width/2, canvas.height/2)
            }
            else
            {
                //display a win
                ctx.fillStyle = "green"
                ctx.font = "25px Reggae One"
                ctx.textAlign = "center"
                ctx.fillText("You Won", canvas.width/2, canvas.height/2)
            }
            break;

            case 1:
                if(cChoice == 0)
                {
                    //display a tie
                    ctx.fillStyle = "blue"
                    ctx.font = "25px Reggae One"
                    ctx.textAlign = "center"
                    ctx.fillText("You Win", canvas.width/2, canvas.height/2)
                }
                else if(cChoice == 1)
                {
                    //display a loss
                    ctx.fillStyle = "red"
                    ctx.font = "25px Reggae One"
                    ctx.textAlign = "center"
                    ctx.fillText("Tie", canvas.width/2, canvas.height/2)
                }
                else
                {
                    //display a win
                    ctx.fillStyle = "green"
                    ctx.font = "25px Reggae One"
                    ctx.textAlign = "center"
                    ctx.fillText("You Lost", canvas.width/2, canvas.height/2)
                } 
            break;

            case 2:
                if(cChoice == 0)
                {
                    //display a tie
                    ctx.fillStyle = "blue"
                    ctx.font = "25px Reggae One"
                    ctx.textAlign = "center"
                    ctx.fillText("You Lost", canvas.width/2, canvas.height/2)
                }
                else if(cChoice == 1)
                {
                    //display a loss
                    ctx.fillStyle = "red"
                    ctx.font = "25px Reggae One"
                    ctx.textAlign = "center"
                    ctx.fillText("You Win", canvas.width/2, canvas.height/2)
                }
                else
                {
                    //display a win
                    ctx.fillStyle = "green"
                    ctx.font = "25px Reggae One"
                    ctx.textAlign = "center"
                    ctx.fillText("You Tie", canvas.width/2, canvas.height/2)
                }
             break;
    }
}
function restartGame(){
    location.reload()
}

