const mainBoard = document.getElementById("board");
const makeBoard = document.getElementById("createBoard");
let totalTurns = 1;
// --------------------------------------------------------------
function createboard(){
        while(mainBoard.firstChild){
            mainBoard.removeChild(mainBoard.firstChild);
            totalTurns = 1;
        }

        for (let i = 0; i < 9; i++ ){
            const squareBoard = document.createElement("div");

            squareBoard.id = `${i}`;

            squareBoard.addEventListener("click", ()=>{
                console.log(`A square numbered ${squareBoard.id} is pressed`);
                gameStart(squareBoard.id);
            })
    
            squareBoard.className = "square";
            mainBoard.appendChild(squareBoard);
            makeBoard.innerText = 'Reset Board';
        }
    
}
// --------------------------------------------------------------
function gameStart(buttonId){
    if(mainBoard.hasChildNodes()){
        // TODO
        if(totalTurns < 10){

            drawMarks(buttonId, totalTurns);
            console.log(totalTurns);
            totalTurns += 1;
        }
    }
}
function drawMarks(buttonId, totalTurns){
    const temp = document.getElementById(`${buttonId}`);

    whosTurn(temp, totalTurns);
    
}
function whosTurn(temp, index){
    if (index % 2 === 0){
        temp.innerText = "X";
    }else{
        temp.innerText = "O";
    }
}
// --------------------------------------------------------------
makeBoard.addEventListener("click", () => {
    console.log("Create board/Reset board is pressed");
    createboard();
});
