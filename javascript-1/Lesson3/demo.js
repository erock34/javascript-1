document.getElementById("headingID").innerHTML = "updated content";
let headingContent = document.getElementById("headingID").innerHTML;
console.log(headingContent);
document.querySelector(".myheading").innerHTML = "updated from query";
let headingContent2 = document.querySelector(".myheading").innerHTML;
console.log(headingContent2);

const paragraph = document.createElement("p");
