import ContactItem from "./ContactItem"

const ContactList = ({ contacts, dispatch, handleEdit }) => {

    return (
        <div>
            <div>
                <ul className='p-4 text-left'>
                    {
                        contacts.length === 0 ? (
                            <p>no conatct yet</p>

                        ) : (
                            contacts.map((contac) => (
                                <ContactItem key={contac.id}
                                    dispatch={dispatch}
                                    handleEdit={handleEdit}
                                    contac={contac}
                                />
                            ))
                        )

                    }
                </ul>
            </div>
        </div>
    )
}

export default ContactList