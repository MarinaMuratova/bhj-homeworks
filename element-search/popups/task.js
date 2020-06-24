const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalClose = Array.from(document.querySelectorAll(".modal__close"));
const showSuccess = document.querySelector(".show-success");
const modal = document.querySelectorAll(".modal");

showSuccess.onclick = function (){
	modalMain.classList.remove("modal_active");
	modalSuccess.classList.add("modal_active");
}

modalClose.forEach((elem) => {
	elem.addEventListener('click', closeModalWindow);
})

// function closeModalWindow(){
//   	if(this.closest("#modal_main")){
// 		modalMain.classList.remove("modal_active");
// 	} 
// 	if(this.closest("#modal_success")){
// 		modalSuccess.classList.remove("modal_active");
// 	}
// };

function closeModalWindow(){
  	let modal = this.closest("div.modal");
	modal.classList.remove("modal_active");
};

