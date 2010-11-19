function decrementIt() {
	var currentTime = jQuery.trim($('#inner').html())
	if (currentTime == 0 ) {
		intervalToggle();
		currentTime = 10;
	} else {
		currentTime--;
	}
	$('#inner').html(currentTime);
}
