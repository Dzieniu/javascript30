document.addEventListener("keydown", function(e){
		var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		var current = document.querySelector(`div[data-key="${e.keyCode}"]`);
		if(!audio) return;
		current.classList.add('current');
		audio.play();
		audio.currentTime=0;
});

document.addEventListener("keyup", function(e){
	var current = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if(!current) return;
	current.classList.remove('current');
})