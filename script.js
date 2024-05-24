
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
            column.style.backgroundColor = "yellow";
        })
    }
    }
}

const button = document.querySelector("button");
const container = document.querySelector(".container")
button.addEventListener("click", () => {
    let number = prompt("Enter your desired grid size.");
    container.innerHTML = "";
    addGrid(number);
})

