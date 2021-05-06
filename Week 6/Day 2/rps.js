//Array of choices
var rps =[]
rps[0] = "rock"
rps[1] = "paper"
rps[2] = "scissors"

//Array for buttons
var btn = document.querySelectorAll('button')
//assign event listeners to the button
btn[0].addEventListener('click', function(e){playGame(0)})
btn[1].addEventListener('click', function(e){playGame(1)})
btn[2].addEventListener('click', function(e){playGame(2)})

function playGame(playerChoice){
    //generate cpu choice
    var cpuChoice = Math.floor(Math.random() *2.99)

    //example of switch case
    switch(playerChoice){
        case 0:
            if(cpuChoice == 0){
                //its a tie
                showResults("Rock", "Rock", "Its a tie")
            }
            else if(cpuChoice == 1){
                //computer wins
                showResults("Rock", "Paper", "You lose the computer wins")
            }
            else{
                //Player wins
                showResults("Rock", "Scissors", "You Win")
            }
            break;
        case 1:
                if(cpuChoice == 0){
                    //its a tie
                    showResults("Paper", "Rock", "You Win")
                }
                else if(cpuChoice == 1){
                    //computer wins
                    showResults("Paper", "Paper", "It's a tie")
                }
                else{
                    //Player wins
                    showResults("Paper", "Scissors", "You lose the computer wins")
                }
            break;
        case 2:
                if(cpuChoice == 0){
                    //its a tie
                    showResults("Scissors", "Rock", "You lose the computer wins")
                }
                else if(cpuChoice == 1){
                    //computer wins
                    showResults("Scissors", "Paper", "You Win")
                }
                else{
                    //Player wins
                    showResults("Scissors", "Scissors", "It's a tie")
                }
            break;
    }

}

function showResults(pChoice,cChoice,results){
    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("result").innerHTML = results
}