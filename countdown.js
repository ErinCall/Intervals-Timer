var currentTime = 40;
var timerIntervalId = 0;
var script = [
    200,
    150
];

function tick() {
    if (currentTime == 0 ) {
        if (script.length > 0) {
            intervalToggle();
            currentTime = script.shift();
        } else {
            intervalCancel();
            window.clearInterval(timerIntervalId)
        }
    } else {
        currentTime--;
    }
}

function displayTime() {
    var deciseconds = currentTime % 10;
    var seconds = (currentTime/10) % 60;
    var minutes = (currentTime/(60*10)) % 60;
    $('#countdown').html(sprintf(
        '%02d:%02d.%d', minutes, seconds, deciseconds
    ));
}

$(document).ready(function() {
    displayTime();
    timerIntervalId = window.setInterval(function() {
        tick();
        displayTime();
    }, 100)
});
