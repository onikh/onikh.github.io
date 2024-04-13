

console.log("animation loaded");


var upperCoverPanels = document.querySelectorAll(".coverPanel");
var blackLines = document.querySelectorAll(".blackLine");
var contentCoverPanel = document.getElementById("contentCoverPanel");

var animationsTriggered = false;


var textBoxText = new Typed('#textBoxText', {
    strings: ["welcome to my digital portfolio"],
    typeSpeed: 25,
    showCursor: false,
    startDelay: 1200
});
textBoxText.stop();


var nameBoxText = new Typed('#nameText', {
    strings: ["message"],
    typeSpeed: 25,
    showCursor: false,
    onComplete: function() {
	textBoxText.start();
    }
});
nameBoxText.stop();





function entranceAnimation() {
    
    upperCoverPanels.forEach(function(element) {
	element.classList.add("coverPanelAnimated");	
    });

    blackLines.forEach(function(element) {
	element.classList.add("blackLineAnimated");
    });

    contentCoverPanel.classList.add("contentCoverPanelReveal");

 


    
    
}


contentCoverPanel.addEventListener('animationend', function() {

	nameBoxText.start();	
});




function contentCoverPanelEntrance() {
    contentCoverPanel.classList.add("contentCoverPanelReveal");
}



