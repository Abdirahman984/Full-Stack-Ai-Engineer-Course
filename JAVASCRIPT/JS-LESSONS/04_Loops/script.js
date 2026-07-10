// // LOOPS

// FOR LOOP
// for(let i=0; i<=10; i++){
//     console.log(i)
// }

// WHILE LOOP
let count = ["ali", "aisha", "osman", "hassan"]

// // console.log(count)

// for(let i=0; i<count.length; i++){
//     console.log(count[i])
// }

// let i=0;
// while (i<count.length){
//     console.log(count[i])
//     i++
// }

// FOR OF
// const names = ["aiish", "naima", "hafsa"]
// for(name of names){
// console.log(names)
// }

// const language = {
//     name:"javascript"
// }

// for (let lan of language.name){
//     console.log(language)
// }

let student = {name:"Abdirahman", age:19, Id:"AU"}

for(const key in student){
    console.log(student[key])
}

let language = "javascript"
for(const key in language){
    console.log(language[key])
}