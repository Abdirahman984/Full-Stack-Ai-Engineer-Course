import { useState } from "react";

const FormValidation = () => {
    const [validateUser, setValidateUser] = useState("")
    const [validatePassword, setValidatePassword] = useState("")
    const [isLogin, setLogin] = useState(false)


    const handleLogIn = (event) => {
        event.preventDefault();

        if (validateUser && validatePassword) {
            setLogin(true)
        }

    }

    const handleLogOut = () => {
        setLogin(false)
        setValidateUser("")
        setValidatePassword("")
    }
    if (isLogin) {
        return(
            <div>
                <h1>welcome {validateUser}</h1>
                <button onClick={handleLogOut}>Logout</button>
            </div>
        )
       
    }

    return (

        <div className="form">

            <div>
                <h2>form validation</h2>
                <form onSubmit={handleLogIn}>
                    <label htmlFor="user name">user name:</label>
                    <input type="text" required id="user" onChange={(e) =>
                        setValidateUser(e.target.value)} value={validateUser} /> <br />
                    <label htmlFor="user name">password:</label>
                    <input type="password" id="password" onChange={(e) => setValidatePassword(e.target.value)} required /> <br />
                    <button type="submit">{isLogin ? 'Logout' : 'Login'}</button>
                </form>
            </div>

        </div>
    )
}

export default FormValidation;