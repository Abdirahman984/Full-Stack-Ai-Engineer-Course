// FUNCTION DECLARATION
function calculatePrice (price, quantity){
return price * quantity
}

let result = calculatePrice(200, 100)

console.log(result/2)

// FUNCTION EXPRESSION
let greeting = function(name){
    console.log("how are you doing" +" " + name)
}

greeting("abdirahman");

// ARROW FUNCTION

let salan =(name)=>{
console.log("how are you doing my friend" + " " + name)
}
salan("Aisha")


// GLOBAL SCOPE AND LOCAL SCOPE
let x = 10
let y = 20
{
  
    // console.log(x+y)
}

console.log(x + y)