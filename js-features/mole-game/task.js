const holeList = document.getElementsByClassName("hole");
const deadStart = document.getElementById("dead");
const lostStart = document.getElementById("lost");

let deadNumber = parseInt(deadStart.textContent);
let lostNumber = parseInt(lostStart.textContent);

function deadOrLost(){
 let rightHole = holeList.className.includes("hole_has-mole");
   for (let i = 0; i < holeList.length; i++){
       if(rightHole){
		  deadNumber+=1;
		  deadStart.textContent = deadNumber;
	    } esle {
           lostNumber+=1;
           lostStart.textContent = lostNumber;
        }
    }
}
hole.onclick = deadOrLost;