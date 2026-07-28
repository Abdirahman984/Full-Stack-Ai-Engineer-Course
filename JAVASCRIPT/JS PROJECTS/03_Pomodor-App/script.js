const displayTimer = document.querySelector(".timer")

const startButton = document.querySelector(".startButton")
const stopButton = document.querySelector(".stopButton")
const resetButton = document.querySelector(".resetButton")


let totalTimeLeft = 1500;

let interval;

function updateTimer() {
    convertMinutes = Math.floor(totalTimeLeft / 60)
    convertSeconds = Math.floor(totalTimeLeft % 60)

    displayTimer.textContent = `${convertMinutes.toString().padStart(2, "0")} : ${convertSeconds.toString().padStart(2, "0")}`

}

startButton.addEventListener("click", function () {
    clearInterval(interval)
    interval = setInterval(() => {
        totalTimeLeft--
        updateTimer();
        saveData()

        if (totalTimeLeft === 0) {
            alert("time is up")
            totalTimeLeft = 1500
            clearInterval(interval)
            updateTimer();
        }
    }, 1000)

    saveData()
})

stopButton.addEventListener("click", function () {
    clearInterval(interval)
    updateTimer()
    saveData()
})

resetButton.addEventListener("click", function () {
    clearInterval(interval)
    totalTimeLeft = 1500
    updateTimer();
    saveData()
})


function saveData() {
    localStorage.setItem("totalTimeLeft", totalTimeLeft)
}

function showData() {
    let saved = localStorage.getItem("data")
    displayTimer
}

showData();