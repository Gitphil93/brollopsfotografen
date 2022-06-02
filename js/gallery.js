const galleryElem = document.querySelector("#gallery");
const cameraButton = document.querySelector("#camera-button");

const images = JSON.parse(localStorage.getItem('weddingApp')); // läggs utanför alla funktioner för att allt skall kunna nå denna

//Gör element och en funktion som tar bort bilderna från sidan men ej local storage
function createImages(image, index) {
    const div = document.createElement("div") ; 
    const deleteButton = document.createElement("button");
    const imageElem = document.createElement("img");
    imageElem.setAttribute("src", image.image)
    div.appendChild(imageElem);
    deleteButton.innerHTML = "X";
    deleteButton.addEventListener("click", () => {
        div.removeChild(deleteButton,imageElem);
        div.parentNode.removeChild(div);
        deleteFunction(index);
    })
    div.appendChild(deleteButton);
    gallery.appendChild(div);
    }

// hämtar datan i local storage och sparar den i images. sedan loopas images igenom och får ett [i] som är typ ett värde
    function getImages(){
        const images = JSON.parse(localStorage.getItem("weddingApp"));
     //    console.log(images);
        for (let i = 0; i < images.length; i++){
            createImages(images[i], i);
        }
     };

     //raderar rätt bild i local storage
     function deleteFunction(index){
        const newImages = JSON.parse(localStorage.getItem("weddingApp"));
        newImages.splice(index, 1);
        localStorage.setItem("weddingApp", JSON.stringify(newImages));
        console.log(index)
        }




//Ta sig från galleri till kamera
cameraButton.addEventListener('click', () => {
    console.log("Button Working!");
    camera();
});


//Gör så att knappen tar oss vidare till en annan sida
function camera() {
    window.location.href = ("../camera.html");

}



getImages();