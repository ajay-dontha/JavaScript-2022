console.log("Filter, Map")

let numbers=[0,1,2,3,4,5,6,7,8,9,10]
console.log(numbers.filter((element)=>element));//filters no.of elemets in array

console.log(numbers.filter((element)=>element%2==0));//filters even numbers

console.log(numbers.filter((element)=>element%2!=0));//filters odd numbers

let names=["abhi","vamshi","narri","ajay Rd","raghu","ravi","arun"]
names.filter((names)=>console.log(names))


console.log(numbers.map((element)=>element+100));// map is used for changing the content use