
var inputLista = document.getElementById("AddLista"); //boton de inicio creado en html//
inputLista.addEventListener("click",añadirLista); //la indicacion addEventListener afuera de  la funcion (click al boton activa funcion)//
var contenidoDiv = document.getElementById("caja") //el div que contiene el boton anterior

function añadirLista(){

	var boton = document.createElement("button"); 
	boton.setAttribute("type", "button");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
	boton.setAttribute("class", "btn btn-primary");
	boton.textContent = "Guardar";
	contenidoDiv.appendChild(boton);
	inputLista.value = "";

	boton.addEventListener("click",botonGuardar);

	function botonGuardar(){
		var rowpadre = document.getElementById("rowpapa")//Obtener el id del row que es padre de los divs a utilizar//
		var divQueseRecorre = document.createElement("div");
		divQueseRecorre.setAttribute("class", "col-xs-12 col-lg-4 col-md-4");
		divQueseRecorre.style.backgroundColor = "#5D4E4E";
		divQueseRecorre.style.marginRight = "1%";
		var divinternoQueRecorre = document.createElement("div");
		divinternoQueRecorre.setAttribute("class","col-xs-12 col-lg-12 col-md-12");
		var tituloTablero = document.createElement("h4");
		var textArea = document.createElement("textarea");
		textArea.setAttribute("placeholder","Añadir Tarjeta");
		textArea.style.display = "block";
		var botonAddLista = document.createElement("button");
		botonAddLista.setAttribute("type", "button");
		botonAddLista.setAttribute("class", "btn btn-primary");
		botonAddLista.textContent = "Añadir Tarjeta";
		tituloTablero.innerHTML = inputLista.value;
		divQueseRecorre.appendChild(tituloTablero);
		divQueseRecorre.appendChild(divinternoQueRecorre);
		divinternoQueRecorre.appendChild(textArea);
		divinternoQueRecorre.appendChild(botonAddLista);
		rowpadre.insertBefore(divQueseRecorre,rowpadre.firstChild)

		
	 botonAddLista.addEventListener("click",miLista);
	
    function miLista(){
    	
 		
 	    var p = document.createElement("p");
 	    p.innerHTML = textArea.value;
 	    divQueseRecorre.appendChild(p);
 	    textArea.value = "";
	    
     	}
	}
 }