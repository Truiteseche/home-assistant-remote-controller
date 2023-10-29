
const gate = document.getElementById("gate");
const garage1 = document.getElementById("garage-1");
const garage2 = document.getElementById("garage-2");
const garage3 = document.getElementById("garage-3");



function handleClick(id) {
    console.log("Clicked:", id)
}

gate.addEventListener("click", () => handleClick("gate"));
garage1.addEventListener("click", () => handleClick("garage1"));
garage2.addEventListener("click", () => handleClick("garage2"));
garage3.addEventListener("click", () => handleClick("garage3"));