const rotatorCase = Array.from(document.querySelectorAll('span.rotator__case'));
let i =0;
setInterval(() => {

    rotatorCase[i].classList.remove('rotator__case_active');
    i++

    if(i >= rotatorCase.length){
    	i = 0;
    }
    rotatorCase[i].classList.add('rotator__case_active');
}, 1000)

// setInterval(() => {
// 	let activeRotator = document.querySelector('.rotator__case_active');
// 	if(activeRotator){
// 		activeRotator.classList.remove('rotator__case_active')
// 	}
// 	let nextElement = activeRotator.nextElementSibling;
// 	if(nextElement){
// 		nextElement.classList.add('rotator__case_active');
// 	} else{
// 		rotatorCase[0];
// 	}

// }, 1000)
