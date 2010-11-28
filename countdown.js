(function() {
    var currentTime = 80;
    var timerIntervalId = 0;
    var script = [
        4, 1,
    ];

    function tick() {
        if (currentTime == 0 ) {
            if (script.length > 0) {
                intervalToggle();
                currentTime = 600 * script.shift();
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
})();