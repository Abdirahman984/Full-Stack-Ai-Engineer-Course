import { useEffect, useState } from "react";

const FetchData = () => {
    const [users, setUser] = useState([])
const [loading, setLoading] = useState (false)
    useEffect(() => {
   
        const fetchUser = async () => {
            setLoading(true)
            console.log("loading --", loading)
            await new Promise((resolve) => setTimeout(resolve, 10000))
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            console.log("before json", response)
            const data = await response.json();
            console.log("after json", data)
            setLoading(false)
            console.log("loading done ---...")
            setUser(data)
        }

        fetchUser();
    }, [])

    if (loading) return <h2>loading .......</h2>
    return (
        <div>
            <h1>fetching data</h1>
            <h2>user title</h2>
            <ul>

                {
                    users.map(user => (
                        <li key={user.id}>{user.title}</li>
                    ))
                }

            </ul>
        </div>
    )
}

export default FetchData;
