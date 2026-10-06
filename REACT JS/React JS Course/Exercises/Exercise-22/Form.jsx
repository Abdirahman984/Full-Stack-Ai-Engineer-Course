import { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {}



        if (!formData.userName.trim()) {
            newErrors.userName = 'username is required'

        }

        if (!formData.email.trim()) {
            newErrors.email = 'email is invalid'
        }
        if (!formData.password.trim()) {
            newErrors.password = 'you must put password'
        }

        return newErrors



    }



    const handleSubmit = (e) => {
        e.preventDefault()

        const validateErorrs = validateForm();
        console.log(validateErorrs)

        if (Object.keys(validateErorrs).length === 0) {
            console.log('success', formData)

        } else {
            setErrors(validateErorrs)

            console.log('form data', formData,)
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))

        // if (name === 'password' && !value === '0') {
        //     setErrors((prev) => ({...prev, password}))
        // } else{
        //     setErrors((prev) => ({...prev, [name] : value}))
        // }

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }))
        }
    }

    return (
        <div>
            <h1>form validation</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="">user name :</label>
                <input className='input' type="text" name='userName' onChange={handleChange} value={formData.userName} /> <br />
                {errors.userName && <p>{errors.userName}</p>}
                <label htmlFor="">email :</label>
                <input className='input' type="email" name='email' onChange={handleChange} value={formData.email} /> <br />
                {errors.email && <p>{errors.email}</p>}
                <label htmlFor="">password :</label>
                <input className='input' type="password" name='password' onChange={handleChange} value={formData.password} /> <br />
                {errors.password && <p>{errors.password}</p>}
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Form;