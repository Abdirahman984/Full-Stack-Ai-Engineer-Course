let registerForm = document.querySelector(".register-form")

const firstName = document.querySelector(".first-name")
const lastName = document.querySelector(".last-name")
const userEmail= document.querySelector(".email")
const userPassword= document.querySelector(".password")
const userConfirmPassword= document.querySelector(".confirmPassword")
const confirmPivacy = document.querySelector("#confirm")

const signUpButton = document.querySelector(".btn")

const successMessage = document.querySelector(".success")
const errorMessage = document.querySelector(".error")
const information = document.querySelector(".info")

registerForm.addEventListener("submit", function (e){
    e.preventDefault();

    errorMessage.textContent = "";
    successMessage.textContent = ""; 
    information.textContent = "";

   const isUserFisrtNameValid = validateUserFisrtName();
   const isUserLastName = validateLastName();
   const isUserEmaiVaild = validateEmail();
   const isValidatePassword = validatePassword();
   const isValidateConfirmPassword = validateConfirmPassword();
   const isValidatePrivacy = validatePrivacy();


    if (!isUserFisrtNameValid) {
        firstName.focus()
        return 
    } else if(!isUserLastName){
        lastName.focus()
        return  
    } else if(!isUserEmaiVaild){
        userEmail.focus()
        return
    } else  if(!isValidatePassword){
        userPassword.focus()
    } else if(!isValidateConfirmPassword){
        userConfirmPassword.focus()
    } else if(!isValidatePrivacy){
confirmPivacy.focus();
    }else{
        information.textContent = "";
        successMessage.textContent = "register is successfully"
    }
})

information.textContent = ""

function validateUserFisrtName (){
    if(firstName.value.trim() === ""){
        setError(firstName, "please enter your Fisrt name")
        return false
    } else{
       setSucess(firstName) 
       return true
    }
}

function validateLastName (){
    if(lastName.value.trim() === ""){
        setError(lastName, "please enetr your last name")
        return false
    } else{
        setSucess(lastName)
        return true
    }
}

function validateEmail (){
    const emailParten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(!userEmail.value.match(emailParten)){
        setError(userEmail, "please enter valid email")
        return false
    }else{
        setSucess(userEmail)
        return true
    }
}

function validatePassword (){
    if(userPassword.value.length < 8){
        setError(userPassword, "your password must be at least 8 characters")
        return false
    } else{
        setSucess(userPassword)
        return true
    }
}

function validateConfirmPassword (){
    if(userPassword.value.trim() === "" || userConfirmPassword.value.trim() === ""){
        setError(userConfirmPassword, "please fill in both password fields")
        return
    }
    if(userPassword.value !== userConfirmPassword.value){
        setError(userConfirmPassword, "password do not match try again !")
        return false
    } else{
        setSucess(userConfirmPassword)
        return true
    }
}

function validatePrivacy (){
    if(!confirmPivacy.checked){
setError(confirmPivacy, "read the prvacy & allow")
return false
    }else{
        setSucess(confirmPivacy)
        return true
    }
}



function setSucess (element){
element.classList.add("valid")
element.classList.remove("invalid")
    information.textContent = "";
}

function setError (element, message){
    element.classList.add("invalid")
    element.classList.remove("valid")
    errorMessage.textContent = message
    information.textContent = "";
   
}

















































// const registerForm = document.querySelector('#register')

// let userName = document.querySelector('#userName')
// let userEmail = document.querySelector('#email')
// let userPassword = document.querySelector('#password')
// let userConfirmPassword = document.querySelector('#confirmPassword')

// let success = document.querySelector(".success")
// let error = document.querySelector(".error")

// registerForm.addEventListener("submit", function (event){
//     event.preventDefault();

//     error.textContent = "";
//     success.textContent = "";

//     const isUserValid = validateUserName();
//     const isUserEmaiVaild = validateEmail();
//     const isValidatePassword = validatePassword();
//     const isValidateConfirmPassword = validateConfirmPassword();

//     if(!isUserValid){
//         userName.focus()
//         return
//     } else if(!isUserEmaiVaild){
//         userEmail.focus()
//         return 
//     } else if(!isValidatePassword){
//         userPassword.focus();
//         return 
//     } else if(!isValidateConfirmPassword){
//         userConfirmPassword.focus();
//         return
//     }
//     success.textContent = "Regiistration is successfully !"
// })

// function validateUserName (){
//     if(userName.value.trim() === ""){
//         setError(userName, "username must filled")
//         return false
//     } else{
//         setSucess(userName)
//         return true
//     }
// }

// function validateEmail (){
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//     if(!userEmail.value.match(emailPattern)){
// setError(userEmail, "please enter valid email")
// return false
//     } else{
//        setSucess(userEmail) 
// return true
//     }
// }

// function validatePassword (){
//     if(userPassword.value.length < 8){
//         setError(userPassword, "your password must be at least 8 character")
//         return false
//     } else{
//         setSucess(userPassword)
//         return true
//     }
// }

// function validateConfirmPassword (){

//     if(userPassword.value.trim() === "" || userConfirmPassword.value.trim()=== ""){
//         setError(userConfirmPassword, "password do not match try agian")
//         return false 
//     }

//     if(userPassword.value !== userConfirmPassword.value){
//         setError(userConfirmPassword, "password do not match try agian")
//         return false
//     }else{
//         setSucess(userConfirmPassword)
//         return true
//     }
// }

// function setSucess (element){
// element.classList.add('valid')
// element.classList.remove('invalid')

// }
// function setError (element, message){
// element.classList.add('invalid')
// element.classList.remove('valid')
//     error.textContent = message
// }















// registerForm.addEventListener("submit", function (event) {
//     event.preventDefault();
    
//     let submitBtn = document.querySelector('#submit-btn')
  
//     if (userName === "") {
//         p.textContent = "Enter your user name ?"
//         return
//     }
   
//     const emailParten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!userEmail.match(emailParten)) {
//         p.textContent = "please enter valid email address"
//         return
//     }

//     if (userPassword.length !== 8) {
//         p.textContent = "user password must be at least 8 characters"
//         return
//     }
//     if(userConfirmPassword !== userPassword){
// p.textContent = "password does not match please try again !"
// return
//     }
//     p.textContent = "register is successfully"
// })