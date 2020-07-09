const loaderActive = document.querySelector(".loader_active");

const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open("get", "https://netology-slow-rest.herokuapp.com");
xhr.send();


xhr.onreadystatechange = function(){
	if (xhr.readyState === 4 & xhr.status === 200){
		loaderActive.classList.remove("loader_active");
		let object = JSON.parse(xhr.responseText).response.Valute;
		console.log(object);
		for (let valute in object){
			items.insertAdjacentHTML('beforeEnd',
				`<div class="item">
                 <div class="item__code">${object[valute].CharCode}</div>
                 <div class="item__value">${object[valute].Value}</div>
                 <div class="item__currency">руб.</div>
                 </div>`);
		}	
	}
}


