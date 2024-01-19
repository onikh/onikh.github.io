
var soundEffects = document.querySelectorAll(".sfx");
var buttonClicked = document.getElementById("switch");

var music = document.getElementById("music");
var audio = document.getElementById("out");

function buttonClickSound() {
    buttonClicked.currentTime = 0;
    buttonClicked.play();
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



document.querySelectorAll(".grayLink").forEach( item => {
    item.addEventListener("mouseover", function( event ) {
	buttonClickSound();
	    //switchSFX.currentTime = 0;
	
    }, false);
})






