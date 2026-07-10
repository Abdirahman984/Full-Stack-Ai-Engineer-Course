// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = true
//             if (success) {
//                 resolve({id:93, name:"abdirahman"})
//             } else {
//                 reject("failed user to get data")
//             }
//         }, 1000)
//     })
// }

// fetchData()
// .then ((data) => {
//     console.log("user data", data)
// })

// .catch ((error) =>{
//     console.log(error)
// })

// async function displayData (){
//     try {
//         let user = await fetchData();
//         console.log(user)
//     } catch(ero){
//         console.log(err)
//     }
// }

// displayData();




// function friendBookPromise() {
//     return new Promise((resolve, reject)=>{
//         let book = false
//         if (book) {
//             resolve("i get the book thank you my freind")
//         } else {
//             reject("fuck you you break the promise")
//         }
//     })

// }

// async function displayBooks (){
//     try{
//         let data = await friendBookPromise();
//         console.log(data)
//     } catch(error){
// console.log(error)
//     }

// }

// displayBooks();

// friendBookPromise()
//     .then((promise) => {
//         console.log(promise)
//     })

//     .catch((error) => {
//         console.log("error", error)
//     })


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true
            if (success) {
                resolve("data has been reach successfullt !")
            } else {
                reject("failed user to reach data")
            }
        }, 1000)
    })
}

// fetchData()
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

async function displayData() {
    try {
        let response = await fetchData()
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

displayData();