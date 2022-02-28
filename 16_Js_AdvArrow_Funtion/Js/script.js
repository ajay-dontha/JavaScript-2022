console.log("Js Arrow Functions")

//Traditional Function
function displayName(){
    let myName="Raja"
    console.log("MyName is:"+myName);
}
displayName();

let displayAge=function(){
    let myAge=18;
    console.log("MyAge:"+myAge);
}
displayAge();

//Advance Arrow Function
let displayFirstName=()=>console.log("Sai");
displayFirstName();

//Using OneParameter 
//Traditional Function
function displayQualification(qualification){
    console.log("The Qualification:"+qualification)
}
displayQualification("BTech");

let displayCompanyName=function(companyName){
    console.log("CompanyName:"+companyName);
}
displayCompanyName("Lorven Private Limited");

//Using OneParameter
//Advance Arrow Function
let displayLocation=((myLocation)=>console.log("My Location:"+myLocation));
displayLocation("Banglore");

let displayCity=City=>console.log("City:"+City);
displayCity("Karimnagar");

//Using TwoParameter
//Traditional Functions
function add(num1,num2){
    let results=num1+num2
    console.log("Results:"+results)
}
add(10,20);

function mul(num1,num2){
    let results=num1*num2
    console.log("Results:"+results);
}
mul(20,5);

//Using TwoParameter
//Advance Arrow Functions
let sub=((num1,num2)=>console.log("Sub:"+(num1-num2)));
sub(10,5);