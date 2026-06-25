let num1 = [1,2,3]
let num2 = [4,5,5]

let sum = [...num1, ...num2]
console.log(sum)

function multiply (...add){
return add.reduce((total, current)=>total * current, 1)
}

console.log(multiply(10,20))