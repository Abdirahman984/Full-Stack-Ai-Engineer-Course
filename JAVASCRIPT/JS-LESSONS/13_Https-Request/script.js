// GET DATA 
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        if (!response.ok) {
            throw new Error("failed user to featch data")
        }

        let data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}

fetchData();

// POST DATA

async function postData() {
    try {
        const respond = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "post",
            body: JSON.stringify({
                title: 'this is my title as abdirahman',
                body: 'bar my body',
                userId: 1,
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        })
        if (!respond.ok) {
            throw new error("the data was failed to reach user")
        }

        console.log("before json", respond)

        const newData = await respond.json();
        console.log("after json", newData)
    } catch (error) {
        console.log(error)
    }

}

postData();