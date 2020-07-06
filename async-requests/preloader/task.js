const loaderActive = document.querySelector(".loader_active");
let xhr = new XMLHttpRequest();
const items = document.getElementById('items');


	xhr.open("get", "https://netology-slow-rest.herokuapp.com");
    xhr.send();


xhr.onreadystatechange = function(){
	if (xhr.readyState === 4 & xhr.status === 200){
		loaderActive.classList.remove("loader_active");
		let object = JSON.parse(xhr.responseText);
		console.log(object);
		for (let valute in object){
			let value = object[valute]
			console.log(value.response.valute)
		}
		valuteList.forEach(elem => {
		 	items.innerHTML += `<div class="item">
                         <div class="item__code">${valuteList.CharCode}</div>
                         <div class="item__value">${valuteList.Value}</div>
                         <div class="item__currency">руб.</div>
                         </div>`
		})
		}
	}


