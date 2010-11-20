var currentTime = 4;
function tick() {
	if (currentTime == 0 ) {
		intervalToggle();
		currentTime = 10;
	} else {
		currentTime--;
	}
}

function displayTime() {
	$('#countdown').html(currentTime);
}

$(document).ready(function() {
	displayTime();
	window.setInterval(function() {
		tick();
		displayTime();
	}, 1000)
});