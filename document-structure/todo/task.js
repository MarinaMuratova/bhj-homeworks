const taskInput = document.getElementById("task__input");
const tasksList = document.querySelector(".tasks__list");
const form = document.querySelector(".tasks__control");

// taskInput.addEventListener("keydown", function(e){
	
// 	if(e.keyCode === 13){
// 		if(this.value.length > 0){
// 			tasksList.insertAdjacentHTML("afterBegin", 
// 			`<div class="task">
//              <div class="task__title">
//              ${this.value}
//              </div>
//              <a href="#" class="task__remove">&times;</a>
//              </div>`);
// 		} 
//         e.preventDefault();
// 		taskInput.value = "";

// 		let taskRemove = Array.from(document.querySelectorAll(".task__remove"));
//         taskRemove.forEach(elem =>{
//            elem.onclick = (e) => {
// 		     e.preventDefault();
// 		     elem.closest('.task').remove();
//            }
//         })   
// 	}
// })


taskInput.addEventListener("keydown", function(e){
	if(e.keyCode === 13){
		addTask(e)
	}
})

form.addEventListener("submit", function(e){
	e.preventDefault();
	addTask(e)
})

function addTask(){
	if(taskInput.value.length > 0){
			tasksList.insertAdjacentHTML("afterBegin", 
			`<div class="task">
             <div class="task__title">
             ${taskInput.value}
             </div>
             <a href="#" class="task__remove">&times;</a>
             </div>`);
	} 
       
	taskInput.value = "";
	let taskRemove = Array.from(document.querySelectorAll(".task__remove"));
        taskRemove.forEach(elem =>{
           elem.onclick = (e) => {
		     e.preventDefault();
		     elem.closest('.task').remove();
           }
        })   
}













