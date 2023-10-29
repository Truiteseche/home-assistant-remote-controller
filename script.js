
const gate = document.getElementById("gate");
const leftGarage = document.getElementById("left-garage");
const rightGarage = document.getElementById("right-garage");



function handleClick(id) {
    console.log("Clicked:", id)
}

gate.addEventListener("click", () => handleClick("gate"));
leftGarage.addEventListener("click", () => handleClick("leftGarage"));
rightGarage.addEventListener("click", () => handleClick("rightGarage"));