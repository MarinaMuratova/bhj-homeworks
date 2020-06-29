const rotatorCase = Array.from(document.querySelectorAll('span.rotator__case'));

setInterval(() => {
    rotatorCase[i].classList.toggle('rotator__case_active');
    i++
    rotatorCase[i].classList.toggle('rotator__case_active');
    if(i >= rotatorCase.length){
    	i = 0;
    }
}, 1000)


