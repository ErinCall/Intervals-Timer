var currentTime = 40;
function tick() {
	if (currentTime == 0 ) {
		intervalToggle();
		currentTime = 2*60*10;
	} else {
		currentTime--;
	}
}

function displayTime() {
	var deciseconds = Math.floor(currentTime % 10);
	var seconds = Math.floor(currentTime/10) % 60;
	var minutes = (Math.floor(currentTime/(60*10))) % 60;
	$('#countdown').html(sprintf(
		'%02d:%02d.%d', minutes, seconds, deciseconds
	));
}

$(document).ready(function() {
	displayTime();
	window.setInterval(function() {
		tick();
		displayTime();
	}, 100)
});