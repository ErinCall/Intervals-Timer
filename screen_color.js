(function() {
    function setBodyColor(color) {
        $('#outer').css('background-color', color);
    }

    var stateColors = {
        max: '#ff0d00',
        anaerobic: '#ff5300',
        aerobic: '#ff7c00',
        down: '#36bbce',
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