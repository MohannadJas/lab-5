let divImageContainer = document.getElementById("photoGallery");

let imgElem = document.createElement("img");
imgElem.src = "./public/images/img1.jpg";

imgElem.width = 650;
imgElem.height = 550;
divImageContainer.appendChild(imgElem);

let delButton = document.createElement("button");
delButton.innerText = "delete";
divImageContainer.appendChild(delButton)

delButton.addEventListener("click" , function(){
imgElem.remove();
this.remove();

})

 // Zooming
let zoomInBtn = document.createElement("button")
zoomInBtn.innerText = " + ";
let zoomOutBtn = document.createElement("button")
zoomOutBtn.innerText = " - ";

divImageContainer.appendChild(zoomInBtn);
divImageContainer.appendChild(zoomOutBtn);


const scaleFactor = 1.5;

zoomInBtn.addEventListener("click" , function(){
imgElem.width *= scaleFactor;
imgElem.height *= scaleFactor;

})

zoomOutBtn.addEventListener("click" , function(){
    imgElem.width /= scaleFactor;
imgElem.height /= scaleFactor;
})