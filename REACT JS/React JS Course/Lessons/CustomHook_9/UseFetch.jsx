import { useState, useEffect } from "react"
const UseFetch = (url) => {
    const [gitHubUser, setGitHubUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const isMountain = true
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                console.log("before json response..", response)

                if (!response.ok) {
                    throw new Error(`https is working properly ${response.status}`)
                }

                const data = await response.json()
                console.log("after json response..", data)

                if (isMountain) {
                    setGitHubUser(data)
                    setLoading(false)
                }

            } catch (error) {
                setError(null)
                console.error(error)
            }
        }

        fetchData();
    }, [url])

    return { gitHubUser, loading, error }
}

export default UseFetch;