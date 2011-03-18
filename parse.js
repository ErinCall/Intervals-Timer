Parse = (function () {
    return {
        parseWorkout : function(workoutScript) {
            var workout = [];
            $.each(workoutScript.split("\n"), function(index, value) {
                var parts = value.split(' ');
                var state = parts[0];
                var duration = parts[1];
                var label = parts[2];
                if (! label) label = state;
                workout[index] = {
                    state: state,
                    duration: duration,
                    label: label,
                };
            });

            return workout;
        },
    };
})();
