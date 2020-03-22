let input = document.getElementById("input");
let output = document.getElementById("output")
console.log(output.value)
input.addEventListener("keydown", checkIp);

function checkIp(e){
    let arr = input.value.split(" ");
    let regExp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\.?$/
            let array = [];
    for(var i = 0; i <= arr.length; i++){
        if(regExp.test(arr[i]) == true){
           array.push(arr[i]);
        }
        
    }
    output.value = array;
    
}