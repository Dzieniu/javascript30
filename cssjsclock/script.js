function setSeconds() {
	var data = new Date();
	var seconds = data.getSeconds();
	var secondsdegrees=seconds*6+90
	const secondhand = document.querySelector('.second');
	secondhand.style.transform =`rotate(${secondsdegrees}deg)`;
};

function setMinutes() {
	var data = new Date();
	var minutes = data.getMinutes();
	var minutesdegrees=minutes*6+90;
	const minutehand = document.querySelector('.minute');
	minutehand.style.transform =`rotate(${minutesdegrees}deg)`;
};

function setHours() {
	var data = new Date();
	var hours = data.getHours();
	console.log(hours);
	var hoursdegrees=(hours+1)*30+90;
	const hourhand = document.querySelector('.hour');
	hourhand.style.transform =`rotate(${hoursdegrees}deg)`;
};


setInterval(setSeconds,1000);
setInterval(setMinutes,1000);
setInterval(setHours,1000);