const colorPicker = document.querySelector("#color-picker")
const colorPreview = document.querySelector(".preview")
const colorHistory = document.querySelector(".colorHistory")
const clearHistory = document.querySelector(".clearHistory")

colorPicker.addEventListener('input', function (event){
    event.preventDefault();
    colorPreview.style.backgroundColor = colorPicker.value
    const colorChoose = document.createElement("li")
    colorChoose.textContent = colorPicker.value
    colorHistory.appendChild(colorChoose)
    colorChoose.style.color = colorPicker.value
  
})

clearHistory.addEventListener("click", function (){
colorHistory.remove();
})