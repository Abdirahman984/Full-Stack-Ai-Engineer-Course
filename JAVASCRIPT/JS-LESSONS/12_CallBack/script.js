// function greeting (name){
//     console.log(`hellow, how are you doing ${name}`)
// }

// function askQuiz (callback){
// const quiz = prompt("what is your name ?")
// callback(quiz)
// }

// askQuiz(greeting)

function calculator (a,b, callback){
return callback(a, b)
}

function add (a, b){
    return a + b 
}

function sub (a, b){
    return a - b
}

console.log(calculator(10, 20, add))
console.log(calculator(70, 20, sub))