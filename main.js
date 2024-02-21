const lightbulb = document.getElementById('light-bulb');
const lightswitch = document.getElementById('light-switch');
const status = document.getElementById('status-of-switch');

let isLightOn = false;

lightswitch.addEventListener('click', function (){
    if(isLightOn){
        lightbulb.src = "light-off.png"
        lightswitch.src = "switch-off.png"
        status.textContent = "TURN ON THE LIGHT.";
    }
    else{
        lightbulb.src = "light-on.png";
        lightswitch.src = "switch-on.png";
        status.textContent = "You DID It! Now, turn OFF the light."
    }
    isLightOn = !isLightOn;
});