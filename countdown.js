(function() {
    var currentTime = 0;
    var timerIntervalId = 0;
    var script = [
        {
            state: 'neutral',
            duration: (0.05),
        },
        {
            state: 'max',
            duration: 0.3,
        },
        {
            state: 'down',
            duration: 0.3,
        },
        {
            state: 'anaerobic',
            duration: 0.3,
        },
        {
            state: 'aerobic',
            duration: 0.3,
        },
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