const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalClose = document.querySelectorAll(".modal__close");
const showSuccess = document.querySelector(".show-success");


showSuccess.onclick = function (){
	modalMain.classList.remove("modal_active");
	modalSuccess.classList.add("modal_active");
}

modalClose.onclick = function (){
	if(modalClose.closest("#modal_main")){
		modalMain.classList.remove("modal_active");
	} 
	if(modalClose.closest("#modal_success")){
		modalSuccess.classList.remove("modal_active");
	}
}

