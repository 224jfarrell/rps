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