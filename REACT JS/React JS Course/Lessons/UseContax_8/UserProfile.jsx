import { useContext } from "react"
import userContext from "./UserContext"

const UserProfile = () => {

    const user = useContext(userContext)
    return (
    
        <div>
            <h4> UserProfile</h4>
            <h5>{user.name}</h5>
            <h5>{user.rele}</h5>
        </div>

    )
}

export default UserProfile