
function toggleCRT() {
    
    if (CRT == true) {
	document.getElementById("rainbow").style.display = "none";
	document.getElementById("flicker").style.display = "none";
	document.getElementById("CRTImage").src= "Images/crtdisabled.png";
	//buttonClickSound();
	dialogueBlipSound();
	CRT = false;
    } else if (CRT == false) {
	document.getElementById("rainbow").style.display = "block";
	document.getElementById("flicker").style.display = "block";
	document.getElementById("CRTImage").src = "Images/crt.png";
	buttonClickSound();
	CRT = true;
    }

    console.log("neighbor");
}


const CRTButton = document.getElementById("crtToggle");

CRTButton.addEventListener("click", toggleCRT);

