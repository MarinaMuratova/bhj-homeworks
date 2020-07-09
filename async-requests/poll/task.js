const pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.querySelector(".poll__answers");
const poll = document.querySelector(".poll");

let xhr = new XMLHttpRequest();
xhr.open("get", " https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();


xhr.onreadystatechange = function(){
	if (xhr.readyState === 4 & xhr.status === 200){
		const response = JSON.parse(xhr.responseText);
		console.log(response);
		console.log(response.id);
		console.log(response.data.title);
		let answers = response.data.answers;
		console.log(answers);
		pollTitle.insertAdjacentHTML('beforeEnd',
			`<div class="poll__title" id="poll__title">
            ${response.data.title}
            </div>`);
		for (let i = 0; i < answers.length; i++){
			pollAnswers.insertAdjacentHTML("beforeEnd", 
				`<button class="poll__answer">
            	${answers[i]}
                </button>`)
		}
	}	
}