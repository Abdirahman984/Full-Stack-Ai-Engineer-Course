let numbers = [1,2,3,4,5]
let allNumbers = [...numbers, 6,8,9]
// console.log(allNumbers)


function sum (...numbers){
return numbers.reduce((total, current)=> total +current)
}
console.log(sum(20, 20), numbers)

let num1 = [20,30,40]
let num2 = [10,14,16]

const total = [...num1, num2]
console.log(total)