let unit = "inches";
let radius = prompt("Enter a radius in " + unit);
let circleArea = Math.PI * radius * radius;
let userRoundPreference = prompt("Would you like to round? (y/n)");
if (userRoundPreference === "y" || userRoundPreference === "Y"){
circleArea = circleArea.toFixed(2);
}
alert("The area is " + unit + " is " + circleArea + ".");