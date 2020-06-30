const rotatorCase = document.querySelectorAll('span.rotator__case');

// setInterval(() => {

//     rotatorCase[i].classList.toggle('rotator__case_active');
//     i++
//     rotatorCase[i].classList.toggle('rotator__case_active');
//     if(i >= rotatorCase.length){
//     	i = 0;
//     }
// }, 1000)

setInterval(() => {
	let activeRotator = document.querySelector('.rotator__case_active');
	if(activeRotator){
		activeRotator.classList.remove('rotator__case_active')
	}
	let nextElement = activeRotator.nextElementSibling;
	if(nextElement){
		nextElement.classList.add('rotator__case_active');
	} else{
		
	}

}, 1000)
