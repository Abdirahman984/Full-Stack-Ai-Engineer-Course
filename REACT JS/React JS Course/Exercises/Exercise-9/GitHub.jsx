import { useEffect, useState } from "react";

const GitHubUsers = () => {
    const [searchGitHubUser, setsearchGitHubUser] = useState(null)
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (error) {
            console.log("error occured ! ")
        }
    }, [error])

    const FetchData = async () => {
        try {
            if (!inputValue) return
            setLoading(true)

            await new Promise((resolve) => setTimeout(resolve, 5000))

            const response = await fetch(`https://api.github.com/users/${inputValue}`)

            if (!response.ok) {
                throw new error("git hub user not found")
            }
            const data = await response.json();
            console.log("response data", data)
        setsearchGitHubUser(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }

        // FetchData();

    }


    const handleSearchBtn = () => {
        FetchData();
    }

    if (loading) return <h2>loading......</h2>

    return (
        <div>
            <h2>github user search</h2>
            <input type="text" placeholder="enetr your github user"
                onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
            <button onClick={handleSearchBtn}>search</button>

            <div>
             
            </div>
        </div>
    )
}




export default GitHubUsers;