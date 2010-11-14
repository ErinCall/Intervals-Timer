function decrementIt() {
	var currentTime = jQuery.trim($('#countdowner').html())
	if (currentTime == 0 ) {
		intervalToggle();
		currentTime = 10;
	} else {
		currentTime--;
	}
	$('#countdowner').html(currentTime);
}