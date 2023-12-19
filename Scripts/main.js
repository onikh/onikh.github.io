

var soundEffects = document.querySelectorAll(".sfx");
var music = document.getElementById("music");
var overlay = document.getElementById('overlay');
var overlayButtonContainers = document.getElementsByClassName("overlayButtonContainer");

var switchSFX = document.getElementById("switch");

var buttonsInteractable = false;

var buttonYes = document.getElementById("soundButtonYes");
var buttonNo = document.getElementById("soundButtonNo");

Cookies.set("testCookie", "string!!");
const optionsSelected = Cookies.get('testCookie') !== undefined;

if (optionsSelected) {
    console.log("cookie works :)");
} else {
    console.log("cookie doesn't work :(");
}

var musicQueued = false;

var CRT = false;


for (var i = 0; i < soundEffects.length; i++) {
	    soundEffects[i].volume = 0;
}


//overlay.parentNode.removeChild(overlay);

function overlayButtonAction(button) {

    if (buttonsInteractable) {

        for (var i = 0; i < overlayButtonContainers.length; i++) {
            overlayButtonContainers[i].style.opacity = 0;
        }
        buttonsInteractable = false;

	if (button.id == "CRTButtonYes") {
	    typed.destroy();
	    overlay.remove();

	    if (!CRT) {
		toggleCRT();
	    }

	    if (musicQueued) {
		console.log("testing music")
		music.play();
	    }
	}

	if (button.id == "CRTButtonNo") {
	    typed.destroy();
	    overlay.remove();

	    if (CRT) {
		toggleCRT();
	    }
	}


	if (button.id == "musicButtonYes") {
	    typed.reset();
	    typed.strings = ["Would you like to enable a CRT filter?"];
	    musicQueued = true;
	    buttonYes.id = "CRTButtonYes";
	    buttonNo.id = "CRTButtonNo";
	}

	if (button.id == "musicButtonNo") {
	    typed.reset();
	    typed.strings = ["Would you like to enable a CRT filter?"];
	    musicQueued = false;
	    buttonYes.id = "CRTButtonYes";
	    buttonNo.id = "CRTButtonNo";

	}

        if (button.id == "soundButtonYes") {
	    
            typed.reset();
            typed.strings = ["Would you like to enable music?"];
            //typed.start()
            for (var i = 0; i < soundEffects.length; i++) {
                soundEffects[i].volume = 1;
            }

	    buttonYes.id = "musicButtonYes";
	    buttonNo.id = "musicButtonNo";
	    
        }

	if (button.id == "soundButtonNo") {
	    typed.reset();
	    typed.strings = ["Would you like to enable music?"];
	    buttonYes.id = "musicButtonYes";
	    buttonNo.id = "musicButtonNo";
	    for (var i = 0; i < soundEffects.length; i++) {
                soundEffects[i].volume = 0;
            }
	}



        switchSFX.play();
        switchSFX.currentTime = 0

    }

}


 



var typed = new Typed('#overlayText', {
    strings: ["Welcome to Onik Hoque\'s Digital Portfolio.", "There are various highly recommended optional effects and features.", "Would you like to enable sound effects?"],
    typeSpeed: 30,
    showCursor: false,
    onComplete: function() {
	setTimeout(function() {
 	for (var i = 0; i < overlayButtonContainers.length; i++) {
	    overlayButtonContainers[i].style.opacity = 1;
	}
	    buttonsInteractable = true;
	}, 150);
    }
});


//MAKE THIS WORK WITH RELATIVE LINK




function toggleCRT() {
    
    if (CRT == true) {
	document.getElementById("rainbow").style.display = "none";
	document.getElementById("flicker").style.display = "none";
	document.getElementById("CRTImage").src= "Images/crtdisabled.png";
	var audio = document.getElementById("switch");
	audio.play();
	CRT = false;
    } else if (CRT == false) {
	document.getElementById("rainbow").style.display = "block";
	document.getElementById("flicker").style.display = "block";
	document.getElementById("CRTImage").src = "Images/crt.png";
	var audio = document.getElementById("switch");
	audio.play();
	CRT = true;
    }
}


const CRTButton = document.getElementById("crtToggle");

CRTButton.addEventListener("click", toggleCRT);

//END CRT BUTTON




//HOVER SOUNDS



document.querySelectorAll(".dropdown").forEach( item => {
    item.addEventListener("mouseover", function( event ) {
	var audio = document.getElementById("out");
	if (event.target == event.currentTarget) {
	  audio.play();
	  audio.currentTime = 0;
	    
	}
    }, false);
})



document.querySelectorAll(".grayLink").forEach( item => {
    item.addEventListener("mouseover", function( event ) {
	    switchSFX.play();
	    switchSFX.currentTime = 0;
	
    }, false);
})

	

// navBar.addEventListener("mouseover", function( event ) {
//     var audio = document.getElementById("out");
//     out.play();
//     out.currentTime = 0;
//     console.log("mouse");
// }, false);




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
    console.log(canvas.style.height);
    canvas.style.height = stringCanvasSize + "px";
    console.log(canvas.style.height);
}

console.log(canvas.clientHeight, canvas.style.height);
console.log(canvas.clientHeight, canvas.style.border);




