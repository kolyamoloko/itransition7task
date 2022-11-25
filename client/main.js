const cells = document.querySelectorAll('.cell');
const pingButton = document.getElementById("testPing");
pingButton.addEventListener("click", ping);

const startForm = document.getElementById("startForm");
const nameInput = document.getElementById("nameInput");
const codeInput = document.getElementById("codeInput");
const gameStatus = document.getElementById("gameStatus");
const socket = io();
const activeGame = null;
const gameCode = null;
const playerNum = null;

startForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = nameInput.value;
    const code = codeInput.value;
    socket.emit("joinGAme", username, code,  (success, joinedNumber) => {
        console.log(success);
        if(success) {
            playerNum = joinNumber;
            gameCode = code;
            activeGame = "TODO";
            updateHeader();
        }
    });
});

for(let cell of cells){
    cell.addEventListener('click', handleCellClick)
}

function handleCellClick() {
    console.log("test")
}
function ping() {
    const startTime = new Date().getTime();
    fetch("http://localhost:3000/ping", 
    {
        method: "GET", 

    })
        .then((res) => res.json())
        .then((resObj)=>{
            const endTime = new Date().getTime();
            console.log(resObj.ping + " - " + (endTime - startTime) + "ms"  )
        })
        .catch(); 
}

function updateHeader() {
    if(!activeGame) gameStatus.innerText = "No Active Game!";
    else if (!activeGame.playerTwoName) gameStatus.innerText = "waiting for an Opponent!";
}