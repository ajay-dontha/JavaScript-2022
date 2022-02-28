console.log("Rest Parameters")

let myArray=(name,...array)=>console.log(`${name} ${array}`);

myArray("ajay",10,20,30,40,50);