let blenderState = "off";
const blender = document.getElementById("blender");
const blenderSound = document.getElementById("blender-sound")
const blenderButton = document.getElementById("blender-button-sound")

//Click en pantalla táctil
const touchElement = document.getElementById("blender-button")
touchElement.addEventListener("touchstart", function(event){
    if(event.targetTouches.length == 1){
        let touch = event.targetTouches[0]
    }
})

function blenderControl() {
    if (blenderState === "off") {
        blenderState = "on";
        sound();
        blender.classList.add("active");
    } else {
        blenderState = "on"
        sound();
        blender.classList.remove("active");
        blenderState = "off";
    }
}

function sound(){
    if(blenderSound.paused){
        blenderButton.play();
        blenderSound.play(); 
        blenderSound.currentTime = 0;
    } else{
        blenderButton.play();
        blenderSound.pause();
    }
}
