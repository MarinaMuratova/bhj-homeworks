const reveal = document.querySelector(".reveal");
const viewportHeight = window.innerHeight;
console.log(`${viewportHeight} viewportHeight`);

window.addEventListener('scroll', function(){
	let coords = reveal.getBoundingClientRect().top;
	console.log(coords);
	if (coords < viewportHeight) {
		reveal.classList.add('reveal_active');
	}
})