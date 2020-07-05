const loaderActive = document.querySelector(".loader_active");
let xhr = new XMLHttpRequest();// экземпляр объекта XMLHttpRequest
const items = document.getElementById('items');
console.log(xhr);
function sendRequest(){
	xhr.open("get", " https://netology-slow-rest.herokuapp.com");
    xhr.send();
}

function fillItems(response){
     items.innerHTML += `<div class="item">
                         <div class="item__code">${CharCode}</div>
                         <div class="item__value">${Value}</div>
                         <div class="item__currency">руб.</div>
                         </div>`
}

xhr.onreadystatechange = function(){
	if (xhr.readyState === 4){
		if (this.status === 200) {
		console.log(xhr.responseText);
		loaderActive.classList.remove("loader_active");
	}else{
		sendRequest()
	}
};
}
