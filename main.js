const makeBoard = document.getElementById("createBoard");
const gamelog = document.getElementById("gamelog");
const mainBoard = document.getElementById("board");
let arrays =    [   
                    ['','',''],
                    ['','',''],
                    ['','','']
                ];

let totalTurns = 1;
// --------------------------------------------------------------
function createElement(tag, i, j, classname){
    const element = document.createElement(tag);    
    element.id = `${i}${j}`;
    element.className = classname;

    return element;
}
// --------------------------------------------------------------

function drawMarks(temp, totalTurns, i, j){
    const whosTurn = document.getElementById("turn");
    
    if (totalTurns % 2 === 0){
        temp.innerText = "X";
        createArray(temp, i, j);
    }else{
        temp.innerText = "O";
        createArray(temp, i, j);
    }
}

function reset(){
    mainBoard.removeChild(mainBoard.firstChild);
    
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

function gameStart(buttonId, i, j){
    const temp = document.getElementById(`${buttonId}`);

    if(mainBoard.hasChildNodes()){
        // TODO
        if(totalTurns < 10 && temp.innerText === ''){

            drawMarks(temp, totalTurns, i, j);
            totalTurns += 1;
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
