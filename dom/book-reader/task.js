const fontSize = Array.from(document. querySelectorAll('a.font-size'));

fontSize.forEach((elem) => {
	elem.addEventListener('click', function(e){
		e.preventDefault();

		let activeSize = document.querySelector('.font-size_active');
		if(activeSize){
			activeSize.classList.remove('font-size_active');
		}
		elem.classList.add('font-size_active');

		if(elem.querySelector(".font-size_small")){
			let smallSize = this.closest('.book');
			smallSize.classList.add("book_fs-small");
		}
		if(elem.querySelector(".font-size_big")){
			let bigSize = this.closest('.book');
			bigSize.classList.add("book_fs-big");
		}
	})
})
