const makeBoard = document.getElementById("createBoard");
const gamelog = document.getElementById("gamelog");
const mainBoard = document.getElementById("board");
let arrays =    [   
                    ['','',''],
                    ['','',''],
                    ['','','']
                ];

let totalTurns = 1;
let playerTurn = "";
let disableClick = false;
// --------------------------------------------------------------
function createElement(tag, i, j, classname){
    const element = document.createElement(tag);    
    element.id = `${i}${j}`;
    element.className = classname;

    return element;
}
// --------------------------------------------------------------


function reset(){
    mainBoard.removeChild(mainBoard.firstChild);
    disableClick = false;
    arrays = [   
                ['','',''],
                ['','',''],
                ['','','']
                            ];

    while(gamelog.firstChild){
        gamelog.removeChild(gamelog.firstChild);
    }
    console.clear();
    totalTurns = 1;
}

function createArray(temp, i, j){
    arrays[i][j] = temp.innerText;
    console.log(arrays);
}

function drawMarks(temp, totalTurns, i, j){
    const whosTurn = document.getElementById("turn");
    
    if (totalTurns % 2 === 0){
        temp.innerText = "X";
        createArray(temp, i, j);
        if(checkForWin()){
            playerTurn = "Player 1"
            gamelog.innerText = `${playerTurn} won`;
            disableBoard();
        }
    }else{
        temp.innerText = "O";
        createArray(temp, i, j);
        if(checkForWin()){
            playerTurn = "Player 2"
            gamelog.innerText = `${playerTurn} won`;
            disableBoard();
        }
    }
}

function checkForWin(){
    // row -> check adjacent cell
    for (let i = 0; i < 3; i++){
        if (arrays[i][0] === arrays[i][1] && 
            arrays[i][0] === arrays[i][2] &&
            arrays[i][0] !== ''){
                return true;
        }
    }
    // column -> check adjacent cell
    for (let j = 0; j < 3; j++){
        if (arrays[0][j] === arrays[1][j] && 
            arrays[0][j] === arrays[2][j] &&
            arrays[0][j] !== ''){
                return true;
        }
    }
    // diagonal -> check for win
    if(arrays[0][0] != '' && arrays[0][0] === arrays[1][1] && arrays[0][0] === arrays[2][2]){
        return true;
    }
    if(arrays[0][2] != '' && arrays[0][2] === arrays[1][1] && arrays[0][2] === arrays[2][0]){
        return true;
    }


    return false;
}

function disableBoard(){
    disableClick = true;
}

function gameStart(buttonId, i, j){
    const temp = document.getElementById(`${buttonId}`);
    
    if(mainBoard.hasChildNodes()){
        // TODO
        if(totalTurns < 10 && temp.innerText === '' && disableClick === false){
            
            drawMarks(temp, totalTurns, i, j);
            totalTurns += 1;
            if (totalTurns === 10 && checkForWin() === false){
                gamelog.innerText = "It's a draw."
                console.log(totalTurns);
            }
        }
    }
}

// --------------------------------------------------------------
function createboard(){
    makeBoard.innerText = 'Reset Board';
    while(mainBoard.firstChild){
        reset();
    }
    
    for (let i = 0; i < 3; i++ ){
        
        for (let j = 0; j < 3; j++){
            
            const squareBoard = createElement('div', i, j, "square");
            squareBoard.addEventListener("click", ()=>{
                console.log(`A square numbered ${squareBoard.id} is pressed`);
                gameStart(squareBoard.id, i, j);
            })
            
            mainBoard.appendChild(squareBoard);
        }
    }    
}
// --------------------------------------------------------------
makeBoard.addEventListener("click", () => {
    console.log("Create board/Reset board is pressed");
    createboard();
});
