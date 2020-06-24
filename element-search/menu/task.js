const menuItems = Array.from(document.querySelectorAll("li.menu__item"));

menuItems.forEach((elem) => {
	elem.addEventListener('mouseover', function(evt){
		let menu = this.querySelector('.menu_sub');
	    if(menu){
	  	    menu.classList.add('menu_active');
	  	    evt.preventDefault();
	    } else{
	    	evt.preventDefault();
	    }
	})
});
