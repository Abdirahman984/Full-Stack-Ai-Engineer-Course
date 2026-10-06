import { useParams } from "react-router"
import { users } from "./UserList"

const UserProflle = () => {
    const { userId } = useParams()

    const userInfo = users.filter(user => user.id == userId)[0]
    console.log(userInfo)

    return (
        <div className="capitalize">
            <h2 className="text-2xl font-bold">user Profile</h2>
            <p>user id : {userId}</p>
            <p>userName : {userInfo.name}</p>
          
        </div>
    )
}

export default UserProflle