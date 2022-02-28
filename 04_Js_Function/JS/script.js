console.log("Functions using Switch Case:");

function add(num1,num2){
    var result=num1+num2;
    console.log(result);
}

function mul(num1,num2){
    var result=num1*num2;
    console.log(result);
}

function sub(num1,num2){
    var result=num1-num2;
    console.log(result);
}

function div(num1,num2){
    var result=num1/num2;
    console.log(result);
}

var option=Number(prompt("Enter Any Number"))

var num1=Number(prompt("Enter num1 value:"))
var num2=Number(prompt("Enter num2 value:"))

switch(option){
    case 1:
        add(10,20);
        break;
    case 2:
        mul(10,20);
        break;
    case 3:
        sub(10,20);
        break;  
    case 4:
        div(10,20);
        break; 
    default:
        console.log("Enter valid option:"); 
}


