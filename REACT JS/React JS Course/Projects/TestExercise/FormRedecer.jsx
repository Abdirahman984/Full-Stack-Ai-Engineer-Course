import { useReducer } from "react"

const FormRedecer = () => {

    const initialState = {
        fullName: "",
        email: "",
        phoneNumber: "",

    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return { ...state, [field.action]: action.value }
        }

    }

    // const [state, dispatch] = useReducer(reducer, initialState)



    return (
        <div>
            <h2>add new contact</h2>
            <form>
                <label htmlFor="">full name :</label>
                <input type="text" name='fullName' />
                <label htmlFor="">email :</label>
                <input type="text" name='email'  />
                <label htmlFor="">phone :</label>
                <input type="text" name='phoneNumber'/>
                <button>add</button>
            </form>
        </div>
    )
}

export default FormRedecer;
