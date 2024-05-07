let x = 10;
let z = 88;
if (x < 10 && z < 7){
    console.log("this is truthy");
} else if(x == 10) {
    console.log("second condition");
} else if (z == 5 ){
    console.log("third condition");
} 
else {
    console.log("this is falsy...");
}
let i = 1;
while ( i <= 5){
    console.log("number is " + ++i);
    i++;
}
let y = 1;
do{
    console.log("do while + " + y);
    y++;
}while (y > 5);

for (let ii = 1; ii <=5;ii++){
    console.log("this is ii" + ii);
}

//Array
let tt = [1,2,3,4,5];
//let colors = [red,blue,orange,green];
let colorss = ["red","blue","orange","green"];
let stats = [4.0,3.7,5.0];
console.log(colorss[0]);
console.log(colorss.length);

let person = {'name': "Bryan", "age":"40",height:"6.0"};
console.log(person);
console.log(person.name);
console.log(person.age);
person.name ="Lilly";

for (let i = 0;i<colorss.length;i++){
    console.log("coolor is " + colorss[i]);
}
for(let stat of stats ){
    console.log(stat);
}
for(let prop in person){
    console.log(prop + " = " + person[prop]);
}
function myF(num1,num2){
    let sum = num1 + num2;
    return sum;
}
let getSum=myF(6,7);
console.log(getSum);

function addItems(){
    console.log("testing");
}
 addItems();

 let sports = ["basketball","football","soccer"];
 function addArray(array){
    for (let item of array){
        console.log(item);
    }
 }
 addArray(sports);
 addArray(colorss);