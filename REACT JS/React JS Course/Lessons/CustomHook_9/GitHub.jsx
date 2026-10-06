import UseFetch from "./UseFetch";

const GitHub = () => {


    const { gitHubUser, loading, error } = UseFetch(`https://api.github.com/users/abdirahman984`);



    if (loading) return <h2>loading ...........</h2>

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '300px' }}>
            <img src={gitHubUser.avatar_url} alt={gitHubUser.name} style={{ width: '100%', borderRadius: '50%' }} />
            <h2>{gitHubUser.name || gitHubUser.login}</h2>
            <p>{gitHubUser.bio}</p>
            <ul>
                <li><strong>Followers:</strong> {gitHubUser.followers}</li>
                <li><strong>Following:</strong> {gitHubUser.following}</li>
                <li><strong>Public Repos:</strong> {gitHubUser.public_repos}</li>
            </ul>
            <a href={gitHubUser.html_url} target="_blank" rel="noreferrer">View Profile on GitHub</a>
        </div>
    )
}
export default GitHub;