var css = document.querySelector("h3");
var colorInput1 = document.querySelector(".colorInput1");
var comma = document.querySelector(".comma");
var colorInput2 = document.querySelector(".colorInput2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var btn = document.querySelector("button");

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background + ";";

btn.style.background = "linear-gradient(to left, " + color1.value + ", " + color2.value + ")";

function random() {
	colorInput1.innerHTML = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
	colorInput2.innerHTML = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
	body.style.background = "linear-gradient(to left, " + colorInput1.innerHTML + ", " + colorInput2.innerHTML + ")";
	btn.style.background = "linear-gradient(to left, " + colorInput1.innerHTML + ", " + colorInput2.innerHTML + ")";
}

btn.addEventListener("click", random);



function background() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", background);

color2.addEventListener("input", background);
