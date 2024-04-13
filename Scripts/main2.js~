






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
//		music.play();
	    }

	    entranceAnimation();
	}

	if (button.id == "CRTButtonNo") {
	    typed.destroy();
	    overlay.remove();

	    if (CRT) {
		toggleCRT();
	    }

	    entranceAnimation();
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



        buttonClickSound();


    }

}


 

if (!CRTorNot) {

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
}

