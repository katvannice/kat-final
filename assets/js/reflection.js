let reflectionCurrent = 1;
const totalPopups = 5;

function nextPopup() {
    document.getElementById("popup" + reflectionCurrent).style.display = "none";
    reflectionCurrent++;
    if (reflectionCurrent <= totalPopups) {
        document.getElementById("popup" + reflectionCurrent).style.display = "block";
    }
}