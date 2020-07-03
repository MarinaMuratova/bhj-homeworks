const taskInput = document.getElementById("task__input");
const tasksList = document.querySelector(".tasks__list");

// taskInput.addEventListener("keydown", function(e){
// 	e.preventDefault();
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
// 		taskInput.value = " ";
// 	}
// })

// taskInput.addEventListener("keydown", function(e){
// 	if(e.keyCode === 13){
// 		if(this.value.length > 0){
// 			tasksList.innerHTML +=
// 			`<div class="task">
//              <div class="task__title">
//              ${e.target.value}
//              </div>
//              <a href="#" class="task__remove">&times;</a>
//              </div>`;
// 		}
// 		taskInput.value = " ";
// 	}
// })
const form = document.querySelector(".tasks__control")
form.addEventListener("submit", e =>{
	e.preventDefault();
		if(this.value.length > 0){
			tasksList.innerHTML +=
			`<div class="task">
             <div class="task__title">
             ${e.target.value}
             </div>
             <a href="#" class="task__remove">&times;</a>
             </div>`;
		}
		taskInput.value = " ";
	
})


