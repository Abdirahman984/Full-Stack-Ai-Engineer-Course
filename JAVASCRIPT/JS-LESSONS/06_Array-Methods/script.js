// FOR EACH METHOD ()
// let fruits = ["banana", "mango", "pawopawo", "chares"]

// fruits.forEach((fruits) => {
//     console.log("i love " + fruits)
// })

// let student = [
//     { name: "abdirhman", age: 19, city: "nairobi" },
//     { name: "aisha", age: 14, city: "london" },
//     { name: "osman", age: 29, city: "mogadisho" }
// ]

// student.forEach((student) => {
//     console.log(student)
// })

// .MAP ()
// const numbers = [2, 4, 7, 6, 8]

// let result = numbers.map((num)=>{
//     return num * 2
   
// })
// console.log(result)

// .FILTER
// let num = [1, 2, 3, 4, 5]

// let newNum = num.filter((number)=>{
// return number >2
// })
// console.log(newNum)


// const studentResult = [20, 40, 60, 80, 100]

// let pass = studentResult.filter((cb)=>{
//     return cb > 50
// })

// console.log(pass)

// .REDUCE

// let myNumbers = [1,2,3,4,5]

// let myNewNumber = myNumbers.reduce((total, current)=> total + current
// ,0)

// console.log(myNewNumber)


// Destructuring arrow
let fruits = ["banana", "mango", "apple"]
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

let [first, second, third] = fruits
console.log(first)
