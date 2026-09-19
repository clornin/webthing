const rl1 = new Audio("audio/rl1.mp3");
const rl2 = new Audio("audio/rl2.mp3");
const rl3 = new Audio("audio/rl3.mp3");
const gs1 = new Audio("audio/shot1.mp3");
const gs2 = new Audio("audio/shot2.mp3");
const gs3 = new Audio("audio/shot3.mp3");
const lasCharge = new Audio("audio/laser charge.mp3");
const  lasPew = new Audio("audio/laser pew.mp3");


//get elements for mouse hovered
const rl1HoverElems = document.querySelectorAll("a.rl1Hover");
const rl2HoverElems = document.querySelectorAll("a.rl2Hover");
const rl3HoverElems = document.querySelectorAll("a.rl3Hover");
const lasHoverElems = document.querySelectorAll("a.lasHover");

//get elements for mouse clicked
const gs1ClickElems = document.querySelectorAll("a.gs1Click");
const gs2ClickElems = document.querySelectorAll("a.gs2Click");
const gs3ClickElems = document.querySelectorAll("a.gs3Click");
const lasClickElems = document.querySelectorAll("a.lasClick");

//delay browser page change to give time for click sound to play, for all with 'delay' class (e.g. no delay for links that open new tab)
const DELAYAMOUNTms = 700;
const linkClickDelay = "event.preventDefault(); setTimeout(() => location.href = this.href, " + DELAYAMOUNTms + ");";
document.querySelectorAll("a.delay").forEach(function(elem) {
	elem.setAttribute("onclick", linkClickDelay);
});


//Hover event listeners
rl1HoverElems.forEach(function(elem) {
	elem.addEventListener("mouseenter", () => {
		rl1.currentTime = 0;
		rl1.play();
	});
});

rl2HoverElems.forEach(function(elem) {
	elem.addEventListener("mouseenter", () => {
		rl2.currentTime = 0;
		rl2.play();
	});
});

rl3HoverElems.forEach(function(elem) {
	elem.addEventListener("mouseenter", () => {
		rl3.currentTime = 0;
		rl3.play();
	});
});

lasHoverElems.forEach(function(elem) {
	elem.addEventListener("mouseenter", () => {
		lasCharge.currentTime = 0;
		lasCharge.play();
	});
});


//Click event listeners
gs1ClickElems.forEach(function(elem) {
	elem.addEventListener("click", () => {
		gs1.currentTime = 0;
		gs1.play();
	});
});

gs2ClickElems.forEach(function(elem) {
	elem.addEventListener("click", () => {
		gs2.currentTime = 0;
		gs2.play();
	});
});

gs3ClickElems.forEach(function(elem) {
	elem.addEventListener("click", () => {
		gs3.currentTime = 0;
		gs3.play();
	});
});

lasClickElems.forEach(function(elem) {
	elem.addEventListener("click", () => {
		lasPew.currentTime = 0;
		lasPew.play();
	});
});