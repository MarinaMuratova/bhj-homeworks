// const modalMain = document.getElementById("modal_main");
const modalActive = document.querySelector(".modal_active");
const modalClose = document.querySelector(".modal__close");

modalClose.onclick = function (){
	modalActive.style.display = "none";
}
const showSuccess = document.querySelector(".show-success");
const modalSuccess = document.getElementById("modal_success");

showSuccess.onclick = function (){
	modalSuccess.classList.add("modal_active");
}