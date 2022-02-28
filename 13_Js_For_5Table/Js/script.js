

var a=Number(prompt("Enter Table You Want To Display?"));//Prints Tables

if(a<=50){
   for(var i=1;i<=10;i++){
       console.log(a+"*"+i+"="+i*a);
   } 
}
   else{
       alert("Max is 50")
   }