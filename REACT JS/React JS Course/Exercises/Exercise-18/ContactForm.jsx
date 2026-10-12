
const ContactForm = ({contact, isEditing, handleChange,handleSubmit,handleCancelBtn }) => {
    return (
            <form onSubmit={handleSubmit} className="text-left capitalize p-1">
                <label htmlFor="">username : </label>
                <input onChange={handleChange} value={contact.userName} name="userName" className="border p-1 rounded-sm mb-2" type="text" /> <br />
                <label htmlFor="">email : </label>
                <input onChange={handleChange} value={contact.email} name="email" className="border p-1 rounded-sm mb-2" type="email" /> <br />
                <label htmlFor="">password :</label>
                <input onChange={handleChange} value={contact.password} name="password"
                    className="border p-1 rounded-sm mb-2" type="password" /> <br />
                <div className='flex gap-4'>
                    <button className="bg-green-500 text-white capitalize p-2 rounded-md" type="submit">{isEditing ? 'Update' : 'Add'}</button>
                    {isEditing && <button className="bg-green-500 text-white capitalize p-2 rounded-md" onClick={handleCancelBtn}>cancel</button>}
                </div>
            </form>
    
    )
}

export default ContactForm