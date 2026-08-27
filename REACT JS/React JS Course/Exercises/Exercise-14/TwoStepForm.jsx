import { useReducer } from "react"

const MultiStepForm = () => {

    const initialState = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_FIELD':
                return { ...state, [action.field]: action.value }
            case 'NEXT_STEP':
                return { ...state, step: state.step + 1 }
            case 'PREV_STEP':
                return { ...state, step: state.step - 1 }
            case 'RESET_FORM':
                return initialState
            default:
                return state

        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)


    const upDateField = () => dispatch({ type: 'UPDATE_FIELD' });
    const nextStep = () => dispatch({ type: 'NEXT_STEP' });
    const prveStep = () => dispatch({ type: 'PREV_STEP' })
    const resetForm = () => dispatch({ type: 'RESET_FORM' })

    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: e.target.name,
            value: e.target.value
        })
    }

    const handleSubmit = () => {
        alert('Regitration was successfully ')
        resetForm();
    }

    return (
        <div>
            <h2>multi step form Registration</h2>


            <form>
                {
                    state.step === 1 && (
                        <div>
                            <h2>step 1 : profile cart</h2>
                            <label htmlFor="first name">first Name :</label>
                            <input type="text" name="firstName" onChange={handleChange} value={state.firstName} />
                            <label htmlFor="first name" >last Name :</label>
                            <input type="text" name="lastName" onChange={handleChange} value={state.lastName} />
                            <button onClick={prveStep}>back</button>
                            <button onClick={nextStep}>next</button>
                        </div>
                    )
                }

                {
                    state.step === 2 && (
                        <div>
                            <h2>step 2: contact info</h2>
                            <label htmlFor="email">email :</label>
                            <input type="email" name="email" onChange={handleChange} value={state.email} />
                            <label htmlFor="phone number" >phone number:</label>
                            <input type="tel" name="phoneNumber" onChange={handleChange} value={state.phoneNumber} />
                            <button onClick={prveStep}>back</button>
                            <button onClick={nextStep}>next</button>
                        </div>
                    )
                }

                {
                    state.step === 3 && (
                        <div>
                            <h2>review information</h2>
                            <h3>firstName : {state.firstName}</h3>
                            <h3>lastName : {state.lastName}</h3>
                            <p>email : {state.email}</p>
                            <p>phone number : {state.phoneNumber}</p>
                            <button onClick={prveStep}>back</button>
                            <button onChange={handleSubmit}>confirm</button>

                        </div>

                    )
                }

                {
                    state.step === 4 && (
                        <div>
                            <h2 style={{ color: 'green' }}>Registration was successfuly</h2>
                            <button onChange={resetForm}>start over again</button>
                        </div>
                    )
                }


            </form>
        </div>
    )
}

export default MultiStepForm;