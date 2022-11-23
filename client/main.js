const cells = document.querySelectorAll('.cell');

for(let cell of cells){
    cell.addEventListener('click', handleCellClick)
}

function handleCellClick() {
    console.log("test")
}