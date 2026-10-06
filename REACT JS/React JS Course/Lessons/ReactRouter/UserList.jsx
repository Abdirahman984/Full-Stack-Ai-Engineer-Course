import { Link } from "react-router"

export const users = [
    { id: 1, name: 'abdirahman', role: 'developer' },
    { id: 2, name: 'aisha', role: 'software engineer' },
    { id: 3, name: 'ali', role: 'designer' },
    { id: 4, name: 'najma', role: 'nurse' }
]

 const UserList = () => {
   
    return (
        <div className= 'capitalize'>

            <h2 className="text-2xl font-bold">user List</h2>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UserList