function setBodyColor(color) {
	$('#outer').css('background-color', color);
}

var start = 1;
function intervalToggle() {
	if ( start ) {
		setBodyColor('#ff0000');
		start = 0;
	} else {
		setBodyColor('#0000ff');
		start = 1;
	}
}