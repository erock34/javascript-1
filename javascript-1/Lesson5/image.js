function getImage(){
   //let img =  document.getElementByID("picture").value;
   let value = imagee.picture.value;
   //let img = image.picure.value.
   let picture = document.createElement("img");
   picture.src = value;
   //Let img = image.picture.value;
   //let ul = document.getElementById("picture");
     //   let li = document.createElement("li");
     //   img.appendChild(document.createTextNode(picture));
     //   ul.appendChild(li);
   document.getElementById("displayImg").appendChild(picture);
}