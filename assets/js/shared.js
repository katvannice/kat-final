let current = 1;

function nextPopup() {
    document.getElementById("popup" + current).style.display = "none";
    current++;
    if (current <= 3) {
        document.getElementById("popup" + current).style.display = "block";
    } else {
        const desktop = document.getElementById("desktop");
        desktop.style.display = "flex";
    }
}

// live clock
setInterval(() => {
    document.getElementById("clock").textContent =
    new Date().toLocaleTimeString();
}, 1000);

function togglePlay() {
    const audio = document.getElementById("audioPlayer");
    const ipod = document.getElementById("ipodBtn");
    
    if (audio.paused) {
        audio.play();
        ipod.style.transform = "scale(0.95)";
    } else {
        audio.pause();
        ipod.style.transform = "scale(1)";
    }
}