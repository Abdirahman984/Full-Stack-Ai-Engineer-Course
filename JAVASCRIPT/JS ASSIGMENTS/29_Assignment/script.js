async function displayData (){
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let respond = await data.json()
    console.log(respond)
}

displayData();