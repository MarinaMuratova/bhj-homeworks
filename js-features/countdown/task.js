

function timer() {
	const timerValue =  document.getElementById("timer");
	timerValue.textContent-=1;
	if(timerValue.textContent == 0) { 
		alert("Вы победили в конкурсе!");
		clearInterval(timerId);
	}
}
let timerId = setInterval(timer, 1000);
