function calculator (a,b, callback){
return callback(a,b)
}

function multiply (a,b){
return a * b
}

function div (a,b){
    return a/b
}

console.log(calculator(10, 10, multiply));
console.log(calculator(100, 10, div));