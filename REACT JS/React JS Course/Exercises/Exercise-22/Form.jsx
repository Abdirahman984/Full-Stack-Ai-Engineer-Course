import React, { useState } from 'react'

const form = () => {

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: ''
    })

    const [isChacked, setIsChecked] = useState(false)

    const [selectedOption, setSelectedOption] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form data', formData, isChacked)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))


    }

    return (
        <div>
            <h1>form validation</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="">user name :</label>
                <input className='input' type="text" name='userName' onChange={handleChange} value={formData.userName} /> <br />
                <label htmlFor="">email :</label>
                <input className='input' type="email" name='email' onChange={handleChange} value={formData.email} /> <br />
                <label htmlFor="">password :</label>
                <input className='input' type="password" name='password' onChange={handleChange} value={formData.password} /> <br />
                <label htmlFor="">are you allwo the privacy </label>
                <input type="checkbox" name='checked' onChange={(e) => setIsChecked(e.target.checked)} value={isChacked.checked} /> <br />

                <select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
                    <option value="">select an option</option>
                    <option value="option-1">option 1</option>
                    <option value="option-2">option 2</option>
                    <option value="option-3">option 3</option>
                    <option value="option-4">option 4</option>
                </select>

                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default form;