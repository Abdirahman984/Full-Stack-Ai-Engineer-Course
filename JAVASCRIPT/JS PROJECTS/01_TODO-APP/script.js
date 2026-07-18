let inputBox = document.querySelector("#input-box")
let addTask = document.querySelector(".addTask")
let listContainer = document.querySelector(".list-container")


addTask.addEventListener("click", function (){
    if(inputBox.value === ""){
        alert("you must write something")
    }else{
        let li = document.createElement("li")
        li.textContent = inputBox.value
        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = '<i class="fa-solid fa-trash"></i>'
        li.appendChild(span)
    }
    
    inputBox.value = "";
    saveData()
})


listContainer.addEventListener("click", function (e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    } else if(e.target.closest("SPAN")){
        e.target.closest("li").remove();
        saveData()
    }
})

function saveData (){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData (){
    listContainer.innerHTML = localStorage.getItem("data")
}

showData();

















































// const inputBox = document.querySelector("#input-box")
// const listContainer = document.querySelector(".listContainer")
// const addTaskButton = document.querySelector(".addTask")

// let tasks = []

// addTaskButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     if (inputBox.value === "") {
//         alert("add task you want to do ")
//         return
//     }
    
//     tasks.push()


//     // create li here to display tasks[text], checkbox, delet button
//     let li = document.createElement("li")

//     // div that contain span(tasks) and checkbox
//     let div = document.createElement("div")
//     let span = document.createElement("span")
//     span.textContent = inputBox.value
//     let check = document.createElement("input")
//     check.type = "checkbox"

//     // append to with checkbox and task [text]
//     div.appendChild(check)
//     div.appendChild(span)

//     // create delet button
//     let deleteButton = document.createElement("button")
//     deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
//     deleteButton.classList.add("delet-btn")

//     // li append 2 child div and delet button
//     li.appendChild(div)
//     li.appendChild(deleteButton)

//     listContainer.appendChild(li)

//     inputBox.value = "";
   

//     check.addEventListener("change", function () {
//         if (check.checked) {
//             span.classList.toggle("completed")
            
//         } else {
//             span.classList.remove("completed")
            
//         }
//     })
    
//     deleteButton.addEventListener("click", function(){
//         listContainer.lastChild.remove()
//     })

// })

// function saveData (){
   
// }

// function showData (){

// }














