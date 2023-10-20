let zahl = 0;
const zahlAnzeige = document.getElementById("zahl");

window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        zahl += 120;
    } else {
        zahl-=20;
    }
    zahlAnzeige.innerText = zahl;
});
