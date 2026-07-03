let imge = document.querySelector(".img")

function change (){
    let askQuiz1 = prompt("Enter your favourite image")
imge.setAttribute('src', askQuiz1)
    let askQuiz2 = prompt("Enter your favourite border-color size")
    imge.style.border = askQuiz2
    let askQuiz3 = prompt("Enter your favourite width size")
    imge.style.width = askQuiz3
    let askQuiz4 = prompt("Enter your favourite height size")
    imge.style.height = askQuiz4
    let askQuiz5 = prompt("Enter your favourite border radius")
    imge.style.height = askQuiz5

}


