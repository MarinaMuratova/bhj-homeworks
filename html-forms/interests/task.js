const interestCheck = Array.from(document.querySelectorAll('.interest__check')); //нашла инпуты

interestCheck.forEach((elem) => {
	elem.addEventListener('change', function(){ //добавляем на него событие
	    let interestClosest = elem.closest('.interest');
	    let interestChecked = Array.from(interestClosest.querySelectorAll('.interest__check')); //нашла родителя инпута
	    if(interestClosest.querySelector('.interests')){ //если у родителя инпута есть вложенный список
		   if(elem.checked){ //если на элементе галочка
              interestChecked.forEach((elem) => {elem.checked = true});//то ставим галочку на все дочерние
           }else{
           	  interestChecked.forEach((elem) => {elem.checked = false});
           }
		}; 
	})
})