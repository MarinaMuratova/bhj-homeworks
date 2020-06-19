const holeList = document.getElementsByClassName("hole");
const deadStart = document.getElementById("dead");
const lostStart = document.getElementById("lost");

let deadNumber = parseInt(deadStart.textContent);
let lostNumber = parseInt(lostStart.textContent);
for (let i = 0; i < holeList.length; i++){
   
   holeList[i].onclick = function(){
    let rightHole = holeList[i].classList.contains("hole_has-mole");
   		if(rightHole){
		    deadNumber++;
		    deadStart.textContent = deadNumber;
	    } else {
          lostNumber++;
          lostStart.textContent = lostNumber;
      }
      if(deadNumber==10){
        alert("Вы выиграли");
        reset();
      }
      else if(lostNumber==5){
        alert("Вы проиграли");
        reset();
      }

    }
}

function reset () {
    dead.textContent = 0;
    lost.textContent = 0;
}
