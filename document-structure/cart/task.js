// const minusProduct = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
// const plusProduct = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const productQuantityControl = Array.from(document.querySelectorAll(".product__quantity-control"));
const cartProduct = document.querySelector(".cart__products")
const productAdd = Array.from(document.querySelectorAll(".product__add"));


function minusQuantity(item){
	let minusItem = item.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent--;
    if(minusItem < 1){
    	return minusItem = 1
    }
}

function plusQuantity(item){
	let minusItem = item.closest(".product__quantity-controls").querySelector(".product__quantity-value").textContent++;
}

productQuantityControl.forEach((elem)=>{
	elem.addEventListener("click", function(){
		if(this.classList.contains("product__quantity-control_inc")){
			plusQuantity(elem);
		}
		if(this.classList.contains("product__quantity-control_dec")){
			minusQuantity(elem);
		}    
	})
})

productAdd.forEach((elem)=>{
	elem.addEventListener("click", function(){
       
	})
})



