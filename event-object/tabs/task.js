const tabList = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
const tabNavigation = document.querySelector('.tab__navigation');
let tabTextContent = [];
	for (let i = 0; i < tabList.length; i++){
		tabTextContent.push(tabList[i].textContent);
	}

tabList.forEach((elem) => {
	elem.addEventListener('click', function(e){
		document.querySelector(".tab_active").classList.remove("tab_active");
		this.classList.add('tab_active'); 
		let indexOfTab = tabTextContent.indexOf(document.querySelector(".tab_active").textContent);
		document.querySelector(".tab__content_active").classList.remove("tab__content_active");
		tabsContent[indexOfTab].classList.add("tab__content_active");
	})
})