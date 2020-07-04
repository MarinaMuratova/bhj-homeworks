let xhr = new XMLHttpRequest();// экземпляр объекта XMLHttpRequest
console.log(xhr);
xhr.open("get", " https://netology-slow-rest.herokuapp.com");
xhr.send();
xhr.onreadystatechange = function(){
	if (xhr.readyState === 4){
		console.log(xhr.responseText);
	};
};