const form = document.getElementById("form");
const progress = document.getElementById("progress");
const send = document.getElementById("send");

send.addEventListener("click", e => {
	e.preventDefault();
	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open("post", " https://netology-slow-rest.herokuapp.com/upload.php");

	xhr.addEventListener("readystatechange", function(){
		if(this.readyState === 1 && this.status === 200) {
	  progress.value = 0.2;
    } else if(this.readyState === 2 && this.status === 200) {
	  progress.value = 0.5;
	} else if(this.readyState === 3 && this.status === 200) {
	  progress.value = 0.7;
	} else if(this.readyState === 4 && this.status === 200) {
	  progress.value = 1;
	}
	});
	xhr.send(formData);
})
