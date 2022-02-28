console.log("Default Parameters:")

function displayAge(age1=10){
    console.log(age1);
}
displayAge();

let displayAges=(age1,age2)=>console.log(`${age1} ${age2}`);
displayAges(12,22);