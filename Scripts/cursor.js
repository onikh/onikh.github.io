// CUSTOM CURSOR


let mouse = document.getElementById("mouse");
function isTouchDevice() {
    try {

	document.createEvent("TouchEvent");
	return true;
    } catch (e) {
	return false;
    }
}
const move = (e) => {

    try {
	var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
	var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) {}

    mouse.style.left = x - 50 + "px";
    mouse.style.top = y - 50 + "px";
};

document.addEventListener("mousemove", (e) => {
    move(e);
});

document.addEventListener("touchmove", (e) => {
    move(e);
});



//CANVAS RESIZE HANDLER

var canvas = document.getElementById("canvas");
const navBar = document.getElementById("navBar");
const bottomBar = document.getElementById("bottomBar");



window.addEventListener("resize", resize);
window.addEventListener("load", (event) => {

});

function resize() {
    const canvasSize = (document.documentElement.clientHeight - navBar.clientHeight - bottomBar.clientHeight - 10)
    const stringCanvasSize = canvasSize.toString();

    canvas.style.height = stringCanvasSize + "px";

}

