let ul = document.querySelector("ul")
console.log(ul)

function addItem() {
    let item = document.createElement("li")
    item.textContent = "item 4"
    ul.append(item)
}

function removeItem() {
    if (ul.removeChild) {
        ul.removeChild(ul.lastChild)
    }

}