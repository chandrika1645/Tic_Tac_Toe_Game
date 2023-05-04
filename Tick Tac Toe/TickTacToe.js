let flag = 1;
var b11, b12, b13,b21, b22, b23,b31, b32, b33;
function playerMove(position){
    if (flag===1) {
        document.querySelector(`${position}`).innerHTML = 'X';
        flag=0;
    }else{
        document.querySelector(`${position}`).innerHTML = '0';
        flag=1;
    }

    playerMove1();


}

function reset(){
    document.querySelector('.b11').innerHTML = '';
    document.querySelector('.b12').innerHTML = '';
    document.querySelector('.b13').innerHTML = '';
    document.querySelector('.b21').innerHTML = '';
    document.querySelector('.b22').innerHTML = '';
    document.querySelector('.b23').innerHTML = '';
    document.querySelector('.b31').innerHTML = '';
    document.querySelector('.b32').innerHTML = '';
    document.querySelector('.b33').innerHTML = '';
}

function playerMove1(param){
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.querySelector('.b11').innerHTML;
    b2 = document.querySelector('.b12').innerHTML;
    b3 = document.querySelector('.b13').innerHTML;
    b4 = document.querySelector('.b21').innerHTML;
    b5 = document.querySelector('.b22').innerHTML;
    b6 = document.querySelector('.b23').innerHTML;
    b7 = document.querySelector('.b31').innerHTML;
    b8 = document.querySelector('.b32').innerHTML;
    b9 = document.querySelector('.b33').innerHTML;

    // player x wons conditions
    if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        window.alert('Player X won');
        reset()
    }
    else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
  
        window.alert('Player X won');
        reset()
    }
    else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        window.alert('Player X won');
        reset()
    }
    else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        window.alert('Player X won');
        reset()
    }
    else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        window.alert('Player X won');
        reset()
    }
    else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        window.alert('Player X won');
        reset()
    }
    else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        window.alert('Player X won');
        reset()
    }
    else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        window.alert('Player X won');
        reset()
    }


    // player O wons conditions
    else if ((b1 == '0') && (b2 == '0') && (b3 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
        reset()
    }
    else if ((b1 == '0') && (b4 == '0') && (b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
        reset()
    }
    else if ((b7 == '0') && (b8 == '0') && (b9 == b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
        reset()
    }
    else if ((b3 == '0') && (b6 == '0') && (b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
        reset()
    }
    else if ((b1 == '0') && (b5 == '0') && (b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
        reset()
    }
    else if ((b3 == '0') && (b5 == '0') && (b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
        reset()
    }
    else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
        reset()
    }
    else if ((b4 == '0') && (b5 == '0') && (b6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        window.alert('Player 0 won');
        reset()
    }
  
    //Tie Conditions
    else if ((b1 == '0') && (b2 == '0') && (b3 == '0') && 
        (b4 == '0') && (b5 == '0') && (b6 == '0') && 
        (b7 == '0') && (b8 == '0') && (b9 == '0')) {
            document.getElementById('print')
                .innerHTML = "Match Tie";
            alert('Match Tie');
            reset()
    }
}