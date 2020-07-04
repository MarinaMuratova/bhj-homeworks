const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltip.forEach((elem) => {
	elem.addEventListener('click', function(e){
		e.preventDefault();
		let current = document.querySelector(".tooltip_active");
        if(current){
        	current.classList.remove("tooltip_active");
        } 
        this.classList.add("tooltip_active");
		// this.insertAdjacentHTML("afterEnd",`<div class="tooltip tooltip_active">${elem.title} </div>`);
		let tooltip = document.querySelector(".tooltip_active");
        let position = this.getBoundingClientRect();
		tooltip.style.top = position.top;
		tooltip.style.left = position.left;

	});
})