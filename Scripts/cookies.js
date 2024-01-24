console.log("cookies loaded");

var overlay = document.getElementById('overlay');
var overlayButtonContainers = document.getElementsByClassName("overlayButtonContainer");


var CRTorNot = Cookies.get("CRTorNot") !== undefined; 

if (CRTorNot) {
    overlay.remove()
 
    entranceAnimation();
} else {
 //   console.log("Cookie not set");
}

Cookies.set("CRTorNot", "true");
    
