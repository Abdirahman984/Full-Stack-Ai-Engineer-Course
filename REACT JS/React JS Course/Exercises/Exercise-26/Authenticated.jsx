import { useState } from "react"
import { createContext } from "react"

export const AutheContext = createContext()

const Authenticated = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const login = () => setIsAuthenticated(true)
    const logOut = () => setIsAuthenticated(false)

    return (
        <AutheContext.Provider value={{ isAuthenticated, login, logOut }}>
            {children}
        </AutheContext.Provider>
    )
}

export default Authenticated;