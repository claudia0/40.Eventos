
var botonLista = document.getElementById("lista");
botonLista.addEventListener("click",añadirLista);
var contenidoDiv = document.getElementById("caja");

function añadirLista(){
	var input = document.createElement("input");
	input.setAttribute("placeholder","Añadir Título...");
	var boton = document.createElement("button");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
	boton.setAttribute("class", "btn btn-primary");
	boton.setAttribute("type", "button");
	boton.textContent = "Guardar";
	contenidoDiv.appendChild(input);
	contenidoDiv.appendChild(boton);
		
	boton.addEventListener("click",botonGuardar);

	function botonGuardar(){
		var div2 = document.getElementById("caja2");
		var textArea = document.createElement("textarea");
		textArea.setAttribute("placeholder","Añadir Tarjeta");
		textArea.style.display = "block";
		var botonAddLista = document.createElement("button");
		botonAddLista.setAttribute("type", "button");
		botonAddLista.setAttribute("class", "btn btn-primary");
		botonAddLista.textContent = "Añadir Lista";
		var tituloTablero = document.createElement("h4");
		tituloTablero.innerHTML = input.value;
		div2.appendChild(tituloTablero);
		div2.appendChild(textArea);
		div2.appendChild(botonAddLista);
		


	 botonAddLista.addEventListener("click",miLista);
	
    function miLista(){
 		var div3 = document.getElementById("caja3");
 	    var p = document.createElement("p");
 	    var inputLista = document.createElement("input");
		inputLista.setAttribute("placeholder","Añadir Lista");
 	    div3.appendChild(p);
 	    div3.appendChild(inputLista);
 	    p.innerHTML = inputLista.value;

	    
     	}
	}
 }