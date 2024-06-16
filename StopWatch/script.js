let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let intervalId = null;
    let isRunning = false;

    document.getElementById('start-button').addEventListener('click', startStopwatch);
    document.getElementById('stop-button').addEventListener('click', stopStopwatch);
    document.getElementById('reset-button').addEventListener('click', resetStopwatch);

    function startStopwatch() {
        if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(updateStopwatch, 1000);
    }
    }

    function stopStopwatch() {
        if (isRunning) {
        isRunning = false;
        clearInterval(intervalId);
    }
    }

    function resetStopwatch() {
        seconds = 0;
        minutes = 0;
        hours = 0;
        isRunning = false;
        clearInterval(intervalId);
        document.getElementById('stopwatch-display').innerHTML = '00:00:00';
    }

    function updateStopwatch() {
        if (isRunning) {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        }
        document.getElementById('stopwatch-display').innerHTML =
        hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');
    }
    }