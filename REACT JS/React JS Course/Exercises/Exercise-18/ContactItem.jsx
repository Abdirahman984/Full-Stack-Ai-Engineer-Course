
const ContactItem = ({contac, dispatch, handleEdit}) => {
    return (
        <li key={contac.id}>
            <div>
                <p>name : {contac.userName} {contac.favourite && '★'}</p>
                <p> email : {contac.email}</p>
                <p> password :{contac.password}</p>
            </div>
            <div className='flex gap-6 '>
                <button className='bg-green-600 text-white px-2 py-1 rounded-md ' onClick={() => dispatch({ type: 'TOGGLE', payload: contac.id })}>Favourite</button>
                <button className='bg-green-600 text-white px-2 py-1 rounded-md' onClick={() => handleEdit(contac)}>Edit</button>
                <button className='bg-green-600 text-white px-2 py-1 rounded-md ' onClick={() => dispatch({ type: 'DELETE', payload: contac.id })}>Delete</button>
            </div>
        </li>
    )
}

export default ContactItem