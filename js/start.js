const startButton = document.querySelector("#start-button");


// Eventlyssnare som tar startfunktionen som redirectar till kameran
startButton.addEventListener('click', () => {
    console.log("Button Working!");
    start();
});


//Redirecta till Kameran
function start() {
    window.location.replace("../camera.html");

}
