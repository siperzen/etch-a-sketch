function addGrid(number) {
    for(let i = 0; i < number; i++) {
       const row = document.createElement("div");
       row.classList.add("row")
       const container = document.querySelector(".container");
       container.appendChild(row);

       for(let i = 0; i < number; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);

        const squareHeight = 480 / number;
        console.log(squareHeight);
        column.style.height = `${squareHeight}px`;
    }
    }
}

// /* I want the squares to shrink and grow depending on
// the size of the container;
// divide the height based on the given number;
// for example the container is 720px and the given number is 6;
// then - divide the height by six

addGrid(21)