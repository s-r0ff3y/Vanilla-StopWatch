
window.onload = function() {
    var mins = "00";
    var secs = "00";
    var changeMinutes = document.getElementById('mins');
    var changeSeconds = document.getElementById('secs');

    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    var resetBtn = document.getElementById('resetBtn');

    var Interval;

    function startTimer() {
        mins ++;

        if(mins <= 9) {
            changeMinutes.innerHTML = "0" + mins;
        }

        if(mins > 9) {
            changeMinutes.innerHTML = mins;
        }

        if(mins > 99) {
            secs ++;

            changeSeconds.innerHTML = "0" + secs;
            mins = "0";
            changeMinutes.innerHTML = "0" + 0;
        }

        if(secs > 9) {
            changeSeconds.innerHTML = secs;
        }
    }

    startBtn.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    stopBtn.onclick = function() {
        clearInterval(Interval);
    }

    resetBtn.onclick = function() {
        clearInterval(Interval);
        changeMinutes.innerHTML = "00";
        changeSeconds.innerHTML = "00";
    }
}