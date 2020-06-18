const holeList = document.getElementsByClassName("hole");
const deadStart = document.getElementById("dead");
const lostStart = document.getElementById("lost");

let deadNumber = parseInt(deadStart.textContent);
let lostNumber = parseInt(lostStart.textContent);
for (let i = 0; i < holeList.length; i++){
   let rightHole = holeList.className.includes("hole_has-mole");
   holeList[i].onclick = function(){
   		if(rightHole){
		  deadNumber++;
		  deadStart.textContent = deadNumber;
	    } esle {
           lostNumber++;
           lostStart.textContent = lostNumber;
        }
    }
}

