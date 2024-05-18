let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resumeBtn = document.getElementById('resumeBtn');
const resetBtn = document.getElementById('resetBtn');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function print(txt) {
    display.innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButton("STOP");
}

function stop() {
    clearInterval(timerInterval);
    showButton("RESUME");
}

function resume() {
    start();
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("START");
}

function showButton(buttonKey) {
    const buttonToShow = buttonKey === "START" ? startBtn : buttonKey === "STOP" ? stopBtn : resumeBtn;
    const buttonToHide = buttonKey === "START" ? resumeBtn : buttonKey === "STOP" ? startBtn : stopBtn;

    buttonToShow.style.display = "inline-block";
    buttonToHide.style.display = "none";

    startBtn.disabled = buttonKey !== "START";
    stopBtn.disabled = buttonKey !== "STOP";
    resumeBtn.disabled = buttonKey !== "RESUME";
    resetBtn.disabled = buttonKey === "START";
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resumeBtn.addEventListener("click", resume);
resetBtn.addEventListener("click", reset);
