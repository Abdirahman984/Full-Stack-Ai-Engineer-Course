import { useReducer, useState } from 'react'
import ContactForm from './ContactForm';
import ContactList from './ContactList';

export const initialState = [];

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'EDIT':
            return state.map((contact) => contact.id === action.payload.id ? action.payload : contact)
        case 'DELETE':
            return state.filter((contact) => contact.id !== action.payload)
        case 'TOGGLE':
            return state.map((contact) => contact.id === action.payload ?
                { ...contact, favourite: !contact.favourite } : contact)
        default:
            return state

    }
}

const ContactAppReducer = () => {

    const [contacts, dispatch] = useReducer(reducer, initialState)

    const [contact, setContact] = useState({
        userName: "",
        email: "",
        password: ""
    })

    const [isEditing, setIsEditing] = useState(null)


    const handleChange = (e) => {
        const { name, value } = e.target
        setContact({ ...contact, [name]: value })
    }

    const handleEdit = (contac) => {
        setIsEditing(contac.id)
        setContact(contac)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (contact.userName && contact.email && contact.password) {
            if (isEditing) {
                dispatch({
                    type: 'EDIT',
                    payload: contact
                })
            } else {
                dispatch({
                    type: 'ADD',
                    payload: { ...contact, id: Date.now(), favourite: false }
                })

            }

            setContact({
                userName: "",
                email: "",
                password: ""
            });
        }

    }

    const handleCancelBtn = () => {
        setContact({
            id: null,
            userName: "",
            email: "",
            password: ""
        })

        setIsEditing(false)
    }



    return (
        <div>
            <div className="bg-gray-100 shadow-md min-h-screen mx-auto p-2 capitalize text-center">

                <div className="bg-white shadow-lg max-w-2xl mx-auto p-4">
                    <h2 className="font-bold text-2xl mb-2">form validation</h2>
                    <ContactForm
                        contact={contact}
                        isEditing={isEditing}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleCancelBtn={handleCancelBtn}
                    />

                    <ContactList
                        contacts={contacts}
                        dispatch={dispatch}
                        handleEdit={handleEdit}
                        contac
                    />

                </div>
            </div>
        </div>
    )
}


export default ContactAppReducer





