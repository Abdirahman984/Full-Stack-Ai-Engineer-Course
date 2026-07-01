// GET DATA FROM USER 

async function getData() {
    try {
        const respond = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!respond.ok) {
            throw new error(`ERROR PLEASE TRY AGAIN TO FIX, ${respond.status}`)
        }
        console.log("before json", respond)

        let data = await respond.json()
        console.log("after json", data)

    } catch (error) {
        console.log(error)
    }
}

getData();

