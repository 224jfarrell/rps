document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById('rock2').disabled = true;
    document.getElementById('paper2').disabled = true;
    document.getElementById('scissors2').disabled = true;
    document.getElementById('player2').hidden = true;
})

function lockInUser(answer){
    document.getElementById('choiceUser').append(answer)
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
    var random = Math.floor(Math.random()*3);
    if(random == 0){
        document.getElementById('choiceComp').append('rock');
    } else if(random == 1){
        document.getElementById('choiceComp').append('paper');
    } else if(random == 2){
        document.getElementById('choiceComp').append('scissors');
    } else {
        document.write('integer error, please refresh');
    };
    if(answer == 'rock' && random == 2){
        document.getElementById('result').append('you win');
    } else if(answer == 'paper' && random == 0){
        document.getElementById('result').append('you win');
    } else if(answer == 'scissors' && random == 1){
        document.getElementById('result').append('you win');
    } else if(answer == 'rock' && random == 0){
        document.getElementById('result').append('tie');
    } else if(answer == 'paper' && random == 1){
        document.getElementById('result').append('tie');
    } else if(answer == 'scissors' && random == 2){
        document.getElementById('result').append('tie');
    } else if(answer == 'rock' && random == 1){
        document.getElementById('result').append('you lost');
    } else if(answer == 'paper' && random == 2){
        document.getElementById('result').append('you lost');
    } else if(answer == 'scissors' && random == 0){
        document.getElementById('result').append('you lost');
    }
}


function lockInP1(){
    document.getElementById('choiceP1').append("?????")
    document.getElementById('rock1').disabled = true;
    document.getElementById('paper1').disabled = true;
    document.getElementById('scissors1').disabled = true;
    document.getElementById('player1').hidden = true;
    document.getElementById('rock2').disabled = false;
    document.getElementById('paper2').disabled = false;
    document.getElementById('scissors2').disabled = false;
    document.getElementById('player2').hidden = false;
}

function lockInP2(){
    document.getElementById('choiceP2').append("?????")
    document.getElementById('rock2').disabled = true;
    document.getElementById('paper2').disabled = true;
    document.getElementById('scissors2').disabled = true;
    document.getElementById('player2').hidden = true;
}

function userInputs(answer1, answer2){
    if(answer2){
        if(answer1 == 'rock' && answer2 == 'scissors'){
            document.getElementById('result').append('p1 win');
        } else if(answer1 == 'paper' && answer2 == 'rock'){
            document.getElementById('result').append('p1 win');
        } else if(answer1 == 'scissors' && answer2 == 'paper'){
            document.getElementById('result').append('p1 win');
        } else if(answer1 == 'rock' && answer2 == 'rock'){
            document.getElementById('result').append('tie');
        } else if(answer1 == 'paper' && answer2 == 'paper'){
            document.getElementById('result').append('tie');
        } else if(answer1 == 'scissors' && answer2 == 'scissors'){
            document.getElementById('result').append('tie');
        } else if(answer1 == 'rock' && answer2 == 'paper'){
            document.getElementById('result').append('p2 win');
        } else if(answer1 == 'paper' && answer2 == 'scissors'){
            document.getElementById('result').append('p2 win');
        } else if(answer1 == 'scissors' && answer2 == 'rock'){
            document.getElementById('result').append('p2 win');
        }
    }
    console.log(answer1);
    console.log(answer2);
}