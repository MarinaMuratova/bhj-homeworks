const dropdownItems = Array.from(document.querySelectorAll(".dropdown__item"));
const dropdownValue = document.querySelector(".dropdown__value");


dropdownItems.forEach((elem) =>  {
	elem.addEventListener('click', function(){
		this.closest(".dropdown__list").classList.remove('dropdown__list_active');
	}); 
});

