function getMotto(){
    let motto = prompt("What is your Motto");
    return motto;
}
function getCount(){
    let number = prompt("How many times to print motto");
    return number;
}
function printMotto(x,y){
    let z = 0;
    while (z < y) {
        console.log(x);
        z+=1;
    }
}
let x = getMotto();
let y = getCount();
printMotto(x,y);
    
