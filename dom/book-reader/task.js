const fontSize = Array.from(document. querySelectorAll('a.font-size'));

fontSize.forEach((elem) => {
	elem.addEventListener('click', function(){
		for(let i = 0; i < fontSize.length; i++){
			if(fontSize[i].contains('font-size_active')){
               fontSize[i].remove('font-size_active');
		    }
		}
		this.classList.add('font-size_active');
		if(this.contains("font-size_small")){
			let smallSize = this.closest('.book');
			smallSize.classList.add("book_fs-small");
		}
		if(this.contains("font-size_big")){
			let bigSize = this.closest('.book');
			bigSize.classList.add("book_fs-big");
		}
	})
})
