import React, { useContext } from 'react'
import { AutheContext } from './Authenticated'
import { useNavigate } from 'react-router'

const Login = () => {
    const {login} = useContext(AutheContext)
    const navigate = useNavigate()

    const handleLogin = () => {
        login();
        navigate("/CreatePost")

    }


  return (
    <div>
          <h1> Login page </h1>
          <button onClick={handleLogin} className='bg-green-600 text-white px-2 py-1'>Login</button>
        </div>

  )
}

export default Login