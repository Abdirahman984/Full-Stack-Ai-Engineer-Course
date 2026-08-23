import { useState } from "react";

const ListContainer = () => {
    const [users, setUsers] = useState([
        {id:1, name:"Abdirahman", email:"Abdirahmanali@gmail.com"},
        {id:2, name:"alin", email:"Abdirahimli@gmail.com"},
        {id:3, name:"Abdi", email:"Abdirali@gmail.com"}
       
    ])
    return (
        <div>
            <h2>list items</h2>
            {
                users.length > 0 ? (
                    <ul>
                        {
                            users.map(user => (
                                <li key={user.id}>{user.name} {user.email}</li>
                            ))
                        }
                    </ul>
                ): <p>users info not found</p>
            }
         
        </div>
    )
}

export default ListContainer;