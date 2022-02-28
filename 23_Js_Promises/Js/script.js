console.log("Promises:")

let myPromise=new Promise((resolve,reject)=>{
    let age=20;
    if(age>=30){
        resolve("Success");
    }
    else{
        reject("Failure");
    }
})
// console.log(myPromise);

myPromise.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
});