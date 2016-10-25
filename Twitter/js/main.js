
function myList(){

	var divInput = document.getElementById("checklist");
	var textArea = document.getElementById("texto");
	var porHacer = document.createElement("li");
	divInput.appendChild(porHacer);
	porHacer.innerHTML= textArea.value;
	var inputCheckbox = document.createElement("input");
	porHacer.appendChild(inputCheckbox);
	inputCheckbox.setAttribute("type", "checkbox");
	
}




