import { useContext } from "react";
import UserProfile from "./UserProfile"
import userContext from "./UserContext";

const Navbar = ( ) => {
    const user = useContext(userContext)
    return (
        <div>
            <h2>Navbar {user.role} section</h2>
            <UserProfile/>
        </div>
    )
}

export default Navbar;