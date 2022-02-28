console.log("CallBack Functions:")

function displayName(){
    document.getElementById("demo").innerHTML=myName;
}
function myName(){
    displayName("raja");
}