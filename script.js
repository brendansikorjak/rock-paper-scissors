var results = {
    win: ['RS', 'PR', 'SP'],
    tie: ['RR', 'PP', 'SS'],
    lose: ['SR', 'RP', 'RS'],
    againMessage: function () {
        console.log("Play again?");
    }
}

var options = ['R', 'P', 'S'];

//Computer's random input
function computerOption() {
    var index = Math.floor(Math.random() * 3);
    return options[index]
}



function game() {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    function displayScore() {
        return "Player score: " + playerScore + "\nComputer Score: " + computerScore + "\nTie Score: " + tieScore
    }

    //Set the first play again to true so we can play the first game
    var playAgain = true;

    //Allows the gamescore to not reset when we play again
    while (playAgain) {
        var computerChoice = computerOption();
        let userChoice = prompt("Lets play Rock Paper Scissors!\nPick R for rock, P for paper, or S for scissors")
        //Player will stay in this loop until they pick a valid choice
        while (!options.includes(userChoice)) {
            userChoice = prompt("Invalid Entry!\nEnter R for rock, P for paper, or S for scissors")
        }
        alert("You chose " + userChoice + "." + " The computer chose " + computerChoice + ".")
        // Display Win or Lose or Draw and score and updates the score
        if (results['win'].includes(userChoice + computerChoice)) {
            playerScore++
            alert("You Win\n\n" + displayScore());
        } else if (results['lose'].includes(userChoice + computerChoice)) {
            computerScore++
            alert("You Lose\n\n" + displayScore());
        } else if (results['tie'].includes(userChoice + computerChoice)) {
            tieScore++;
            alert("Tie\n\n" + displayScore());
        } 
        playAgain = confirm("Play Again?")
    }
}

game();