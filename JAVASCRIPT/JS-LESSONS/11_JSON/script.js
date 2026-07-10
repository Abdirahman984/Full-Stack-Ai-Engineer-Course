// async function fetchDat (){
//     let response = await fetch ("index.json")
//     let data = response.json();
//     console.log("respond:🔥", response)
// }

// fetchDat();


async function displayData (){
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let result = await data.json();
    console.log(result[0])
} 

displayData()


