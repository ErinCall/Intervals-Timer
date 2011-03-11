(function() {
    function setBodyColor(color) {
        $('#countdown-outer').css('background-color', color);
    }

    var start = 1;
    window.intervalToggle = function() {
        if ( start ) {
            setBodyColor('#ff0000');
            start = 0;
        } else {
            setBodyColor('#0000ff');
            start = 1;
        }
    }

    window.intervalCancel = function() {
        setBodyColor('#f5f5dc')
    }
})();