import { useState } from 'react'

const FormSubmition = () => {

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({...prevData, [name] : value}))
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', formData)
    }

    return (
        <form className='p-4' onSubmit={handleSubmit}>
            <label className='p-4 my-6' htmlFor="">userName :</label>
            <input type="text" name='userName' placeholder='enter your username ' onChange={handleChange} value={formData.userName} />
            <label className='p-4 my-6' htmlFor="">email :</label>
            <input type="email" name='email' placeholder='enter your email ' onChange={handleChange} value={formData.email} />
            <label className='p-4 my-6' htmlFor="">password :</label>
            <input type="password" name='password' placeholder='enter your username password' onChange={handleChange} value={formData.password} />
            <button className='bg-green-600 text-white px-4 py-2 rounded-lg ml-6' type='submit '>submit</button>
        </form>
    )
}

export default FormSubmition