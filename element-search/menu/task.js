// const menuLinks = document.querySelectorAll(".menu__link");
const menuItems = document.querySelectorAll(".menu__item");
// const menu = document.querySelectorAll(".menu");

menuItems.onclick = function(){
	for (let i = 0; i < menuItems.length; i++){
		let menuActive = menuItems[i].closest("menu");
		menuActive.classList.add("menu_active");
	      if(menuItems[i].contains("menu_sub")){
	  	    return false
	    } 
	}
	
};

// function close(){
// 	menu.classList.remove("menu_active");
// }

// // let menuSub = menuLinks[i].closest("menu_sub");
// const menuItems = document.querySelectorAll(".menu__item");
// 	const menu = menuLinks.closest(".menu");