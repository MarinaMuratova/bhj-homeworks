const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltip.forEach((elem) => {
	elem.addEventListener('click', function(e){
		e.preventDefault();

		let current = document.querySelector(".tooltip_active");
        if(current){
        	current.classList.remove("tooltip_active");
        } 
        this.nextElementSibling.classList.add("tooltip_active");
        let position = this.getBoundingClientRect();

		this.nextElementSibling.style.top = `${position.top + 22}px`;
		this.nextElementSibling.style.left = `${position.left}px`;
	});
})