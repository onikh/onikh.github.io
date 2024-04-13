
var soundEffects = document.querySelectorAll(".sfx");
var buttonClicked = document.getElementById("switch");
var dialogueBlip = document.getElementById("dialogue");

var music = document.getElementById("music");
var audio = document.getElementById("out");

function buttonClickSound() {
    buttonClicked.currentTime = 0;
    buttonClicked.play();
}

function dialogueBlipSound() {
    dialogueBlip.currentTime = 0;
    dialogueBlip.play();
}    


//HOVER SOUNDS




document.querySelectorAll(".dropdown").forEach( item => {
    item.addEventListener("mouseover", function( event ) {
	
	if (event.target == event.currentTarget) {
	  audio.play();
	    audio.currentTime = 0;
	    console.log("triggered");
	    
	}
    }, false);
})



document.querySelectorAll(".dropdown").forEach( item => {
    item.addEventListener("click", function( event ) {
	buttonClickSound();
	    //switchSFX.currentTime = 0;
	
    }, false);
})






