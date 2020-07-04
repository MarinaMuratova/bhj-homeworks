const taskInput = document.getElementById("task__input");
const tasksList = document.querySelector(".tasks__list");
const taskRemove = Array.from(document.querySelectorAll(".task__remove"));

taskInput.addEventListener("keydown", function(e){
	
	if(e.keyCode === 13){
		if(this.value.length > 0){
			tasksList.insertAdjacentHTML("afterBegin", 
			`<div class="task">
             <div class="task__title">
             ${this.value}
             </div>
             <a href="#" class="task__remove">&times;</a>
             </div>`);
		} 
        e.preventDefault();
		taskInput.value = " ";
	}
})

taskRemove.forEach((elem) => {
	elem.onclick = function(e){
		e.preventDefault();
		this.closest('task').remove();
	}
})