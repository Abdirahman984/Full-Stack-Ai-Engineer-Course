import { useContext } from "react"
import { AutheContext } from "./Authenticated"
import { Navigate } from "react-router"

const Protected = ({ element }) => {

    const { isAuthenticated } = useContext(AutheContext)
    if (!isAuthenticated) {
        return <Navigate to={"/Login"} replace />
    }

    return element

}

export default Protected