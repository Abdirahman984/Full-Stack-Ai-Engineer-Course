let inputBox = document.querySelector("#input-box")
let keys = document.querySelector(".keys")

function appentToDigits (input){
inputBox.value += input
}


function clearDisplay() {
    inputBox.value = "";
}

function calculate (){
inputBox.value = eval(inputBox.value)
}
