// constant variables & hämtar in våra html ID:N
const display = document.getElementById("display")

const startTimerBtn = document.getElementById("startTimerBtn");
const stopTimerBtn = document.getElementById("stopTimerBtn");
const resetTimerBtn = document.getElementById("resetTimerBtn");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false

//function start = sätter intervall som börjar från 0. 
//isRunning, funktionen som avgör om klockan tickar eller ej. Om isRunning är false så står den still, om true = run.

function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
// vi sätter en, 1970-grejen
function stop() {
    if (isRunning) {
        clearInterval(timer)
        elapsedTime = Date.now() - startTime;
        isRunning = false
    }

}

// function för reset. allt värde ska alltså återställas och sättas till noll(0)
function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;


    // deklarerar exakta tidsslag, dvs, 1min = 60 osv osv och uppdaterar timern
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliSeconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String (seconds).padStart(2, "0");
    milliSeconds = String (milliSeconds).padStart(2, "0");


    display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;


}

startTimerBtn.addEventListener("click", function () {
    start()
})

stopTimerBtn.addEventListener("click", function () {
    stop()
})

resetTimerBtn.addEventListener("click", function () {
    reset()
})