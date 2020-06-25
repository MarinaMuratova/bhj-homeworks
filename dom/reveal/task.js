const reveal = Array.from(document.querySelectorAll(".reveal"));
const viewportHeight = window.innerHeight;
console.log(`${viewportHeight} viewportHeight`);

window.addEventListener('scroll', function(){
	reveal.forEach((elem) => {
		let coords = elem.getBoundingClientRect().top;
	       if (coords < viewportHeight) {
		       elem.classList.add('reveal_active');
	        }
	});
})