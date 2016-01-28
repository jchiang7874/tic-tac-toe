//Tic Tac Toe//

//////////// User Selection //////////////////

$(document).ready(function() {
  startValue();
})



var player, winnerX, winnerO, tieXO, msg, count = 0, countX = 0, countO = 0, countXO = 0, sqs = $("td"), btnStart, btnReset;
    msg = $(".msg")[0];
    winnerX = $("#winX")[0];
    winnerO = $("#winO")[0];
    tieXO = $("#tie")[0];
    btnStart = $("button")[1];
    btnReset = $("button")[0];

btnStart.addEventListener("click", startValue);
btnReset.addEventListener("click", resetScore);

function startValue() {
var selection = prompt("X or O?");

    if (selection == "X" || selection == "x") {
        msg.innerText = selection.toUpperCase() + " will start";
        player = "X";
    } else if (selection == "O" || selection == "o") {
        msg.innerText = selection.toUpperCase() + " will start";
        player = "O";
    } else {
        alert("Please select X or O")
    }

}

function nextMove(square) {
    if (square.innerText == "") {
        square.innerText = player;
        msg.innerText = player + "'s turn";
        nextTurn();
        count++;
    }

    if (square.innerText == "O") {
        square.style.color = "rgb(0, 247, 0)";
    } else {
        square.style.color = "rgb(255, 128, 4)";
    }

    if (count >= 5){
        checkWinCombo();
    }

    if (count == 9) {
        alert("It's a tie!");
        countXO++;
        tieXO.innerText = "Tie: " + countXO;
        resetBoard();
        startValue();
        count = 0;

    }
}

function nextTurn() {
    if (player == "X") {
        player = "O";
        msg.innerText = player + "'s turn";
    } else {
        player = "X";
        msg.innerText = player + "'s turn";
    }
}


function checkWinCombo() {
    //var winningCombo = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8], [2,4,6]];
    var arr = []; //["", "undefined", "O", "X", "", "", "O", "", "X"]

    for (var i = 0; i < sqs.length; i++) {
        arr.push(sqs[i].innerText) ;
    }

    if ((arr[0] == "X" && arr[1] == "X" && arr[2] == "X") || (arr[0] == "O" && arr[1] == "O" && arr[2] == "O")) {
        alert(arr[0] + ' is the winner');
        if (arr[0] == 'X') {
            countX++;
            winX.innerText = "X: " + countX;
        } else {
            countO++;
            winO.innerText = "O: " + countO;
        }
        resetBoard();
        startValue();
        count = 0;
    } else if ((arr[3] == "X" && arr[4] == "X" && arr[5] == "X") || (arr[3] == "O" && arr[4] == "O" && arr[5] == "O")) {
        alert(arr[3] + ' is the winner');
        if (arr[3] == 'X') {
            countX++;
            winX.innerText = "X: " + countX;
        } else {
            countO++;
            winO.innerText = "O: " + countO;
        }
        resetBoard();
        startValue();
        count = 0;
    } else if ((arr[6] == "X" && arr[7] == "X" && arr[8] == "X") || (arr[6] == "O" && arr[7] == "O" && arr[8] == "O")) {
        alert(arr[6] + ' is the winner');
        if (arr[6] == 'X') {
            countX++;
            winX.innerText = "X: " + countX;
        } else {
            countO++;
            winO.innerText = "O: " + countO;
        }
        resetBoard();
        startValue();
        count = 0;
    } else if ((arr[0] == "X" && arr[3] == "X" && arr[6] == "X") || (arr[0] == "O" && arr[3] == "O" && arr[6] == "O")) {
        alert(arr[0] + ' is the winner');
        if (arr[0] == 'X') {
            countX++;
            winX.innerText = "X: " + countX;
        } else {
            countO++;
            winO.innerText = "O: " + countO;
        }
        resetBoard();
        startValue();
        count = 0;
    } else if ((arr[1] == "X" && arr[4] == "X" && arr[7] == "X") || (arr[1] == "O" && arr[4] == "O" && arr[7] == "O")) {
        alert(arr[1] + ' is the winner');
        if (arr[1] == 'X') {
            countX++;
            winX.innerText = "X: " + countX;
        } else {
            countO++;
            winO.innerText = "O: " + countO;
        }
        resetBoard();
        startValue();
        count = 0;
    } else if ((arr[2] == "X" && arr[5] == "X" && arr[8] == "X") || (arr[2] == "O" && arr[5] == "O" && arr[8] == "O")) {
        alert(arr[2] + ' is the winner');
        if (arr[2] == 'X') {
            countX++;
            winX.innerText = "X: " + countX;
        } else {
            countO++;
            winO.innerText = "O: " + countO;
        }
        resetBoard();
        startValue();
        count = 0;
    } else if ((arr[0] == "X" && arr[4] == "X" && arr[8] == "X") || (arr[0] == "O" && arr[4] == "O" && arr[8] == "O")) {
        alert(arr[0] + ' is the winner');
        if (arr[0] == 'X') {
            countX++;
            winX.innerText = "X: " + countX;
        } else {
            countO++;
            winO.innerText = "O: " + countO;
        }
        resetBoard();
        startValue();
        count = 0;
    } else if ((arr[2] == "X" && arr[4] == "X" && arr[6] == "X") || (arr[2] == "O" && arr[4] == "O" && arr[6] == "O")) {
        alert(arr[2] + ' is the winner');
        if (arr[2] == 'X') {
            countX++;
            winX.innerText = "X: " + countX;
        } else {
            countO++;
            winO.innerText = "O: " + countO;
        }
        resetBoard();
        startValue();
        count = 0;
    }

}

function resetBoard() {
    for (var i = 0; i < sqs.length; i++) {
        sqs[i].innerText = "" ;
    }
}

function resetScore() {
    winnerX.innerText = "X: 0";
    winnerO.innerText = "O: 0";
    tieXO.innerText = "Tie: 0";
    msg.innerText = "Let's Play!";
    resetBoard();
}



