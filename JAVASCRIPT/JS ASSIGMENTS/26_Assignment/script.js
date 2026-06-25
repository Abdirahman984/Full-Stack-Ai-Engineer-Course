// SYNDCHRONOUS
function giveMe(){
    return alert("how are you doing")
}

giveMe();

console.log("this message is blocked by the prevous code and next one")

// ASYNDCHRONOUS

function data (){
    setTimeout (()=>{
console.log("i come here after 1 second ")
    },1000)
}

data()