var Countdown = (function() {
    var currentTime = 0;
    var timerIntervalId = 0;
    var workout = [];

    function tick() {
        if (currentTime == 0 ) {
            if (workout.length > 0) {
                var newState = workout.shift();
                ScreenColor.intervalSetState(newState.state, newState.label);
                currentTime = 600 * newState.duration;
            } else {
                ScreenColor.intervalCancel();
                ScreenColor.clearInterval(timerIntervalId)
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

    return {
        runWorkout : function() {
            workout = Parse.parseWorkout($('#workout-contents').val());

            $('#workout-container').children().hide();
            displayTime();
            timerIntervalId = window.setInterval(function() {
                tick();
                displayTime();
            }, 100)
        },
    };
})();
