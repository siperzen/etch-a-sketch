const button = document.querySelector("button");
const container = document.querySelector(".container");

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function addGrid(number) {
    for(let i = 0; i < number; i++) {
       const row = document.createElement("div");
       row.classList.add("row")
       
       container.appendChild(row);

       for(let i = 0; i < number; i++) {
        const column = document.createElement("div");
        column.classList.add("column");

        row.appendChild(column);

        const squareHeight = 480 / number;
        console.log(squareHeight);
        column.style.height = `${squareHeight}px`;

        column.addEventListener("mouseover", () => {
            column.style.backgroundColor = randomRgbColor();
        })
    }
    }
}


button.addEventListener("click", () => {
    let number = prompt("Enter your desired grid size (Number).");
    if(number > 100) {
        alert("Too big, type a number less than 100")
    }
    else if(number < 1) {
        alert("Enter a positive number.");
    }
    else {
    container.innerHTML = "";
    addGrid(number);
};
})

