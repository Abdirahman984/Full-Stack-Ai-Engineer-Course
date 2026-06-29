// .MAP ()
let numbers = [1,2,3,4.5]
let newNumbers = numbers.map((num)=> num * 2)
console.log(newNumbers)

//  .FILTER ()
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
newNums = nums.filter((num1)=> num1 % 2 ===0)
console.log(newNums)

// .REDUCE()
const num = [10, 20, 30, 40];
let newNum = num.reduce((total, currency)=> total + currency, 0)
console.log(newNum)

// .FOREACH
const names = ["ali", "sara", "omar"];
const result = []
names.forEach((name)=> result.push(name.toUpperCase()))
console.log(result)