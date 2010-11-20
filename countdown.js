var currentTime = 4;
function tick() {
	if (currentTime == 0 ) {
		intervalToggle();
		currentTime = 2*60;
	} else {
		currentTime--;
	}
}

function displayTime() {
	var seconds = (currentTime) % 60;
	var minutes = (Math.floor(currentTime/(60))) % 60;
	$('#countdown').html(sprintf(
		'%02d:%02d', minutes, seconds
	));
}

$(document).ready(function() {
	displayTime();
	window.setInterval(function() {
		tick();
		displayTime();
	}, 1000)
});