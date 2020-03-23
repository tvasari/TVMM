var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.createElement("button")
var btntext = document.createTextNode("random");

function randomize() {
	color1.value = "#" + Math.floor(Math.random() * 999999);
	color2.value = "#" + Math.floor(Math.random() * 999999);
	console.log(color1.value);
	console.log(color2.value);
	setGradient()
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomize);

button.appendChild(btntext);
body.appendChild(button);

setGradient();