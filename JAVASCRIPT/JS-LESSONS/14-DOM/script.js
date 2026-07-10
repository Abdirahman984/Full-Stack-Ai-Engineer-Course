// let para = document.querySelector(".para")

// let pa = document.querySelector("p")


// let button1 = document.querySelector("button")
// function changeTextContent(){
//     para.textContent = "welcome back abdirahman"
// }
// // changeTextContent();

// function changeInnerContent(){
//     pa.innerHTML = "<div> hellow world welcome guys how are you doing <div/>"
// }


// let image = document.querySelector("img")

// function changeImage (){
//     image.setAttribute('src', 'https://images.unsplash.com/photo-1782366951167-70963bce07a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D')
//     let ask = prompt("enetr you favourte image url")
//     image.setAttribute('src', ask)
//     image.style.background ="green"
// }

// let para = document.querySelector(".para")
// para.style.backgroundColor = "red"
// para.style.padding = "20px"
// para.style.margin = "10px"


// function setLightMode(){
//     document.body.style.background = "white"
//     document.body.style.color = "black"
// }
// function setDarktMode(){
//     document.body.style.background = "black"
//     document.body.style.color = "white"
// }

// let clickButton = document.querySelector('.btn-1')
// let removeButton = document.querySelector('.btn-2')

// function handleClick (){
// console.log("click from addeventlistner")
// }

// clickButton.addEventListener("click", handleClick)

// removeButton.addEventListener("click", function (){
//     clickButton.removeEventListener("click", handleClick);
//     console.log("removed click ")
// })

// let colors = document.querySelector('#color')
// let selectedColor = document.querySelector('.selctedColor')
// let userInput = document.querySelector('#userInput')
// let user = document.querySelector('.user')

// colors.addEventListener('change', function (){
//     // console.log("color change", colors.value)
//     selectedColor.textContent = `The Selected Color is : ${colors.value}`
// })

// userInput.addEventListener('change', function (){
//     user.textContent = `user name is ${userInput.value}`
//     userInput.value = '';
// })

const form = document.querySelector('form')
const btn = document.querySelector('.btn')
let p = document.querySelector('p')

form.addEventListener('submit', function (event){
    event.preventDefault();
    // console.log("form submited ......")
    p.textContent = "form submited ......"
})