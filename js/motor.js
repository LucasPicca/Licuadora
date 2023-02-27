let blenderState = "off";
const blender = document.getElementById("blender");
const blenderSound = document.getElementById("blender-sound")
const blenderButton = document.getElementById("blender-button-sound")

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
    } else{
        blenderButton.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}
