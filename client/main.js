const cells = document.querySelectorAll('.cell');
const pingButton = document.getElementById("testPing");
pingButton.addEventListener("click", ping);

const startForm = document.getElementById("startForm");
const nameInput = document.getElementById("nameInput");
const codeInput = document.getElementById("codeInput");
const socket = io();
startForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = nameInput.value;
    const code = codeInput.value;
    socket.emit("joinGAme", username, code,  () => {

    });
})






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