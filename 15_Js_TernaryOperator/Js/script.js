
console.log("Ternary Operator:")

let numbers=[1,2,3,4,5,6,7,8,9,10]

for(let i=0;i<numbers.length;i++){
                                            
    // if(i%2==1){
    // console.log(numbers[i]+10)
    // }                                     //ternaty operator
                                             let result=(i%2==1)?numbers[i]+10:numbers[i];
                                                console.log(result);
    // else{                                        
    //     console.log(numbers[i]);
    // }
}


