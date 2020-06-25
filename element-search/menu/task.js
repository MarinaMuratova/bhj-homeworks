const menuItems = Array.from(document.querySelectorAll(".menu_main > .menu__item"));

menuItems.forEach((elem) => {
	elem.addEventListener('click', function(evt){
		let menu = this.querySelector('.menu_sub');
	    if(menu){
	  	    menu.classList.toggle('menu_active');
	  	}
	  	let subMenu = evt.target.closest('.menu_sub');
        if (!subMenu) {
            evt.preventDefault();
        }
	})
});


