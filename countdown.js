function decrementIt() {
	var currentTime = jQuery.trim($('#countdown').html())
	if (currentTime == 0 ) {
		intervalToggle();
		currentTime = 10;
	} else {
		currentTime--;
	}
	$('#countdown').html(currentTime);
}
