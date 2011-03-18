var ScreenColor = (function() {
    function setBodyColor(color) {
        $('#outer').css('background-color', color);
    }
    
    function setDisplay(label) {
        $('#interval-label').html(label);
    }

    var stateColors = {
        max: '#ff0d00',
        anaerobic: '#ff5300',
        aerobic: '#ff7c00',
        down: '#36bbce',
        neutral: '#f5f5dc',
    };
    return {
        intervalSetState : function(newState, label) {
            if ( ! stateColors[newState] ) {
                newState = 'neutral';
            }
            setBodyColor(stateColors[newState]);
            setDisplay(label);
        },
        intervalCancel : function() {
            intervalSetState('neutral', 'All Done!')
        }
    };
})();
