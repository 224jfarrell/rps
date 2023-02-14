function disable(){
    document.getElementById('rock2').disabled = true;
    document.getElementById('paper2').disabled = true;
    document.getElementById('scissors2').disabled = true;
    document.getElementById('player2').disabled = true;

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

// function lockInP1(answer){
//     document.getElementById('choiceP1').append("?????")
//     document.getElementById('rock1').disabled = true;
//     document.getElementById('paper1').disabled = true;
//     document.getElementById('scissors1').disabled = true;
//     document.getElementById('player1').disabled = true;
//     document.getElementById('rock2').disabled = false;
//     document.getElementById('paper2').disabled = false;
//     document.getElementById('scissors2').disabled = false;
//     document.getElementById('player2').disabled = false;
// }

// function lockInP2(answer){
//     document.getElementById('choiceP2').append("?????")
//     document.getElementById('rock2').disabled = true;
//     document.getElementById('paper2').disabled = true;
//     document.getElementById('scissors2').disabled = true;
//     document.getElementById('player2').disabled = true;
// }
