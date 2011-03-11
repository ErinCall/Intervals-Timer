(function() {
    var currentTime = 0;
    var timerIntervalId = 0;
    var script = [
        {
            state: 'neutral',
            duration: (0.05),
        },
        {
            state: 'on',
            duration: 4,
        },
        {
            state: 'off',
            duration: 1,
        }
    ];

    function tick() {
        if (currentTime == 0 ) {
            if (script.length > 0) {
                var newState = script.shift();
                window.intervalSetState(newState.state);
                currentTime = 600 * newState.duration;
            } else {
                window.intervalCancel();
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