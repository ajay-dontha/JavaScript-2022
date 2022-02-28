console.log("ArrayMethods:")

let salaries=[10000.0,50000.0,40000.0,80000.0,90000.0];

//1.Traditional For
for(let i=0;i<=salaries.length;i++){
    console.log(salaries[i])
}

//2.For Of
for(let salary of salaries){
    console.log(salary);
}

//3.For In
for(let salary of salaries){
    console.log(salary);
}

//4.For each
salaries.forEach(salary => {
    console.log(salaries)
});
