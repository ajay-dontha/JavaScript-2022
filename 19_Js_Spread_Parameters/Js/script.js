console.log("Spread Parameters:");

function displayArray(num,...num1){
    console.log(num,num1);
}
displayArray(10,20,30,40,50,60,70,80);

function displayAge(age,...ages){
    console.log(`${age} ${ages}`);
}
displayAge(20,23,45,67,89);

let firstArray=[10,20,39,58,100];
let secondArray=[10,58,65];

let fullArray=[...firstArray,...secondArray];
console.log(fullArray);