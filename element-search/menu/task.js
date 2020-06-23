// const menuLinks = document.querySelectorAll(".menu__link");
const menuItems = Array.from(document.querySelectorAll(".menu__item"));
// const menu = document.querySelectorAll(".menu");

menuItems.forEach((elem) => {
	elem.addEventListener('click', function(){
		if(this.closest('.menu_main')){
            this.classList.add("menu_active");
		}
		
	    if(this.contains('menu_sub')){
	  	    return false
	    } 
	}
});
