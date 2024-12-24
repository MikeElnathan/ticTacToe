const mainBoard = document.getElementById("board");
const makeBoard = document.getElementById("createBoard");
console.log("   hello");
// ------------------------------------------------
function createboard(){
    
    for (let i = 0; i < 9; i++ ){
        mainBoard.value = '';
        const squareBoard = document.createElement("div");
        squareBoard.addEventListener("click", ()=>{
            console.log("A sauare is pressed");
        })

        squareBoard.className = "square";
        mainBoard.appendChild(squareBoard);
    }
}

makeBoard.addEventListener("click", () => {
    console.log("Create board is pressed");
    createboard();
});
