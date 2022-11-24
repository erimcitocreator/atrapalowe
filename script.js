document.getElementById('jugador').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 30;
necesarios = 50;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("jugador").style.marginTop =randNum + "px";
   document.getElementById("jugador").style.marginLeft =randNum2 + "px";
   if (puntos == 50) {
   	alert("GANASTE");
   }
}


function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("PERDISTE :(");
		tiempo = 0;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);