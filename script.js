
const gate = document.getElementById("gate");
const garage1 = document.getElementById("garage-1");
const garage2 = document.getElementById("garage-2");
const garage3 = document.getElementById("garage-3");

const infraredTransmitter = document.getElementById("infrared-transmitter")

let lastTimeoutId = null;

function handleClick(id) {
    // alert("Clicked: " + id)

    const options = {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        }
    }
    fetch(`https://192.168.1.10:3000/api/relay/${id}?turn=on`);
    infraredTransmitter.classList.add("emit");
    clearTimeout(lastTimeoutId);
    lastTimeoutId = setTimeout(() => infraredTransmitter.classList.remove("emit"), 1000);
}

gate.addEventListener("click", () => handleClick(0));
garage1.addEventListener("click", () => handleClick(1));
garage2.addEventListener("click", () => handleClick(2));
garage3.addEventListener("click", () => handleClick(3));
