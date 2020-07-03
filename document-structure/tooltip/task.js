const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

hasTooltip.forEach((elem) => {
	elem.addEventListener('click', function(e){
		e.preventDefault();
		elem.insertAdjacentHTML("afterEnd",`<div class="tooltip tooltip_active">${elem.title}</div>`);
		// console.log(elem.nextElementSibling);
  //       });
  //       if(elem.nextElementSibling){
  //       	elem.nextElementSibling.remove();
	});
})