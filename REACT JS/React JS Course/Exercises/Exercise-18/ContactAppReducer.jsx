import { useReducer, useState } from 'react'

const initialState = {}


const ContactReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state, [action.field] : action.value}
        default:
            return state
    }
}

const ContactAppReducer = () => {

    const [state, dispatch] = useReducer(ContactReducer, initialState)


    const [inputValue, setInputValue] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    })


    const handleChange = (e) => {
        setInputValue( (e) => {
            dispatch({
                type: 'ADD',
                field: e.target.name,
                value: e.target.value
            })
        } )


    }



    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='min-h-screen bg-gray-100 '>
            <div className='mx-auto px-4 py-2'>
                <h1 className='text-2xl font-bold capitalize'>form validation</h1>
                <form onSubmit={handleSubmit} className='capitalize'>
                    <label className='text-md font-medium' htmlFor="full name">full name :</label>
                    <input name='fullName' onChange={(e) => setInputValue(e.target.value)} value={inputValue.value} className='bg-gray-200 rounded-lg border-none outline-none px-4 py-1 m-2' type="text" /> <br />
                    <label className='text-md font-medium' htmlFor="email">enter email :</label>
                    <input name='email' onChange={(e) => setInputValue(e.target.value)} value={inputValue.value} className='bg-gray-200 rounded-lg border-none outline-none px-4 py-1 m-2' type="text" /> <br />
                    <label className='text-md font-medium' htmlFor="phone number">phone Number :</label>
                    <input name='phoneNumber' onChange={(e) => setInputValue(e.target.value)} value={inputValue.value} className='bg-gray-200 rounded-lg border-none outline-none px-4 py-1 m-2' type="text" /> <br />
                    <button onClick={handleChange} className='text-md font-medium bg-green-400 text-white px-4 py-2 rounded-lg'>sumbit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactAppReducer;




