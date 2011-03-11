(function() {
    function setBodyColor(color) {
        $('#countdown-outer').css('background-color', color);
    }

    var stateColors = {
        on: '#ff0000',
        off: '#0000ff',
        neutral: '#f5f5dc',
    };
    window.intervalSetState = function(newState) {
        if ( ! stateColors[newState] ) {
            newState = 'neutral';
        }
        setBodyColor(stateColors[newState]);
    }

    window.intervalCancel = function() {
        intervalSetState('neutral')
    }
})();