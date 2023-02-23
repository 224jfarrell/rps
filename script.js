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

let choice1 = null;
let choice2 = null;

function disable(idr, idp, ids){
    document.getElementById(idr).disabled = true;
    document.getElementById(idp).disabled = true;
    document.getElementById(ids).disabled = true;
}

function css1(id){
    document.getElementById(id).style.marginTop = "45px";
}

function css2(id){
    document.getElementById(id).style.marginTop = "61px";
}

function lockInP1(answer){
    document.getElementById('choiceP1').append("?????")
    disable('rock1', 'paper1', 'scissors1')
    css1('rock1', 'paper1,', 'scissors1')
    document.getElementById('player1').hidden = true;
    document.getElementById('rock2').disabled = false;
    document.getElementById('paper2').disabled = false;
    document.getElementById('scissors2').disabled = false;
    document.getElementById('player2').hidden = false;
    choice1 = answer;
}

function lockInP2(answer){
    document.getElementById('choiceP2').append(answer)
    disable('rock2', 'paper2', 'scissors2')
    css2('rock2', 'paper2,', 'scissors2')
    document.getElementById('player2').hidden = true;
    choice2 = answer;
}



function userInputs(choice1, choice2){
    if(choice2){
        document.getElementById('choiceP1').innerHTML = '';
        document.getElementById('choiceP1').append(choice1);
        if(choice1 == 'rock' && choice2 == 'scissors'){
            document.getElementById('result').append('p1 win');
        } else if(choice1 == 'paper' && choice2 == 'rock'){
            document.getElementById('result').append('p1 win');
        } else if(choice1 == 'scissors' && choice2 == 'paper'){
            document.getElementById('result').append('p1 win');
        } else if(choice1 == 'rock' && choice2 == 'rock'){
            document.getElementById('result').append('tie');
        } else if(choice1 == 'paper' && choice2 == 'paper'){
            document.getElementById('result').append('tie');
        } else if(choice1 == 'scissors' && choice2 == 'scissors'){
            document.getElementById('result').append('tie');
        } else if(choice1 == 'rock' && choice2 == 'paper'){
            document.getElementById('result').append('p2 win');
        } else if(choice1 == 'paper' && choice2 == 'scissors'){
            document.getElementById('result').append('p2 win');
        } else if(choice1 == 'scissors' && choice2 == 'rock'){
            document.getElementById('result').append('p2 win');
        }
    }
}