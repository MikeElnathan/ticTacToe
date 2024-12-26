const mainBoard = document.getElementById("board");
const makeBoard = document.getElementById("createBoard");
console.log("   hello");
// --------------------------------------------------------------
function createboard(){
        mainBoard.innerHTML = '';

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
        drawMarks(buttonId);
    }
}

function drawMarks(buttonId){
    const temp = document.getElementById(`${buttonId}`);

    temp.innerText = "X";
}
// --------------------------------------------------------------
makeBoard.addEventListener("click", () => {
    console.log("Create board is pressed");
    createboard();
});
