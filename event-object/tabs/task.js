const tabList = Array.from(document.querySelectorAll('.tab'));
console.log(tabList);
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
console.log(tabsContent);

const tabNavigation = document.querySelector('.tab__navigation');

tabList.forEach((elem) => {
	elem.addEventListener('click', function(e){
		for(let i = 0; i < tabList.length; i++){
			tabList[i].classList.remove("tab_active");
		}
		this.classList.add('tab_active'); //при клике на таб, ему добавляется активный класс

        for(let i = 0; i < tabList.length; i++){
		    if(tabNavigation.childNodes[i].classList.contains("tab_active")){
			    let indexText = tabNavigation.childNodes[i].textContent;
			    let indexOfTab = tabList.indexOf(indexText);
	        }	
		}
		tabsContent[indexOfTab].classList.add("tab__content_active");
	})
})