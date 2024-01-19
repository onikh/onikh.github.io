

//document.addEventListener('DOMContentLoaded', function() {
    var upperCoverPanels = document.querySelectorAll(".coverPanel");
var blackLines = document.querySelectorAll(".blackLine");
var contentCoverPanel = document.getElementById("contentCoverPanel");


var animationsTriggered = false;

function entranceAnimation() {
    
    upperCoverPanels.forEach(function(element) {
	element.classList.add("coverPanelAnimated");	
    });

    blackLines.forEach(function(element) {
	element.classList.add("blackLineAnimated");
    });

    contentCoverPanel.classList.add("contentCoverPanelReveal");

    console.log("entrancceAnimation");


  	
    
}


contentCoverPanel.addEventListener('animationend', function() {

    if (contentCoverPanel.classList.contains("contentCoverPanelReveal")) {
	contentCoverPanel.style.display = "none";



	
var nameBox = new Typed('#nameText', {
    strings: ["Message"],
    typeSpeed: 15,
    showCursor: false /*  ,
      onComplete: function() {
	setTimeout(function() {
 	for (var i = 0; i < overlayButtonContainers.length; i++) {
	    overlayButtonContainers[i].style.opacity = 1;
	}
	    buttonsInteractable = true;
	}, 150);
    } */
});




	
    } else if (contentCoverPanel.classList.contains("contentCoverPanelHide")) {
	contentCoverPanel.style.display = "initial";
    }
	
	
	});




function contentCoverPanelEntrance() {
    contentCoverPanel.classList.add("contentCoverPanelReveal");
}
