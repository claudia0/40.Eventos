
var botonLista = document.getElementById("lista"); //boton de inicio creado en html//
botonLista.addEventListener("click",añadirLista); //la indicacion addEventListener va afuera de  la funcion (que haga click al boton se activa la funcion)//
var contenidoDiv = document.getElementById("caja") //el div que contiene el boton anterior

function añadirLista(){

	var input = document.createElement("input");
	input.setAttribute("placeholder","Añadir Título...");
	var boton = document.createElement("button"); 
	boton.setAttribute("type", "button");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
	boton.setAttribute("class", "btn btn-primary");
	boton.textContent = "Guardar";
	contenidoDiv.appendChild(input);
	contenidoDiv.appendChild(boton);
		
	boton.addEventListener("click",botonGuardar);

	function botonGuardar(){
		var rowpadre = document.getElementById("rowpapa")
		var divQueseRecorre = document.createElement("div");
		divQueseRecorre.setAttribute("class", "col-xs-12 col-lg-4 col-md-4");
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
		tituloTablero.innerHTML = input.value;
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