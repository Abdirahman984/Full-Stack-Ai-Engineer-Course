import UseFetch from "./UseFetch"

const Post = () => {

    const { gitHubUser, loading, error } = UseFetch(`https://jsonplaceholder.typicode.com/posts`)

    if (loading) return <h2>loading ...........</h2>
    return (
        <div>
            <h2>Post</h2>
         
        </div>
    )
}

export default Post