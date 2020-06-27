const interestCheck = Array.from(document.querySelectorAll('.interest__check')); //нашла инпуты

// interestCheck.forEach((elem) => {
// 	let interestClosest = elem.closest('.interest'); //нашла родителя инпута
// 	if(interestClosest.querySelector('.interests')){ //если у родителя инпута есть вложенный список
// 		elem.addEventListener('change', function(){ //добавляем на него событие
//            if(elem.checked){ //если на элементе галочка
//               interestClosest.querySelectorAll('.interest__check').checked = true;//то ставим галочку на все дочерние
//            }
// 		}); 
// 	}
// })


interestCheck.forEach((elem) => {
	elem.addEventListener('change', function(){ //добавляем на него событие
	    let interestClosest = elem.closest('.interest'); //нашла родителя инпута
	    if(interestClosest.querySelector('.interests')){ //если у родителя инпута есть вложенный список
		if(elem.checked){ //если на элементе галочка
              interestClosest.querySelectorAll('.interest__check').checked = true;//то ставим галочку на все дочерние
           }
		}; 
	})
})