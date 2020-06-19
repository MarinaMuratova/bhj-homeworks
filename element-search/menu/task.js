const menuLinks = document.querySelectorAll(".menu__link");
const menu = document.querySelectorAll(".menu");

menuLinks.onclick = function(){
	
	for (let i = 0; i < menuLinks.length; i++){
	      if(menuLinks[i].closest(".menu")){
	  	    menuLinks[i].classList.add(".menu_active");
	      }
	      if(menuLinks[i].closest(".menu_main")){
	  	    return false;
	    }
	}
	
};

// function close(){
// 	menu.classList.remove("menu_active");
// }

// // let menuSub = menuLinks[i].closest("menu_sub");
// const menuItems = document.querySelectorAll(".menu__item");
// 	const menu = menuLinks.closest(".menu");