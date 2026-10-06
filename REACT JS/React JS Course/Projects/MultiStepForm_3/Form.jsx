import { useReducer } from "react"

const FormVarivication = () => {

    const initialState = {
        // personalinfo
        step: 1,
        fullName: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",

        // varification
        varifyEmailCode: "",

        // Identity details
        idType: "",
        idNumber: "",
        uploadPhotoId: "",

        // address
        country: "",
        cityName: "",
        postalCode: "",
        streetAddress: "",
        date: "",

        // review display result

    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_FIELD':
                return { ...state, [action.field]: action.value }
            case 'NEXT_STEP':
                return { ...state, step: state.step + 1 }
            case 'PREVIOUS_STEP':
                return { ...state, step: state.step - 1 }
            case 'RESET_FORM':
                return initialState
            default:
                return state
        }
    }



    const [state, dispatch] = useReducer(reducer, initialState)

    const upDateField = () => dispatch(({ type: 'UPDATE_FIELD' }))
    const nextStep = () => dispatch(({ type: 'NEXT_STEP' }))
    const PreviousStep = () => dispatch(({ type: 'PREVIOUS_STEP' }))
    const RestForm = () => dispatch(({ type: 'RESET_FORM' }))

    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: e.target.name,
            value: e.target.value,

        })
    }

    return (
        <div className="validation">


            <div>
                <form>
                    {
                        state.step === 1 && (
                            <div>
                                <h2>form varivication</h2>
                                <label htmlFor="full name">full name</label>
                                <input type="text" name="fullName" onChange={handleChange} value={state.fullName} required />
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" onChange={handleChange} value={state.email} required />
                                <label htmlFor="phone number">phone number</label>
                                <input type="tel" name="phoneNumber" onChange={handleChange} value={state.phoneNumber} />
                                <label htmlFor="date of birth">date of birth</label>
                                <input type="date" name="dateOfBirth" onChange={handleChange} value={state.dateOfBirth} />
                                <button className="next" onClick={nextStep}>next</button>
                            </div>
                        )
                    }

                    {
                        state.step === 2 && (
                            <div>
                                <fieldset className="fieldset">
                                    <legend>identify details </legend>
                                    <div className="field">
                                        <label htmlFor="idType">ID type :</label>
                                        <select id="idType" name="idType">
                                            <option value="national_id">National ID</option>
                                            <option value="passport">Passport</option>
                                            <option value="drivers_license">Driver's license</option>
                                        </select>
                                    </div>

                                    <div className="field">
                                        <label htmlFor="idNumber">ID number</label>
                                        <input
                                            type="number"
                                            id="idNumber"
                                            name="idNumber"
                                            required
                                            aria-describedby="idNumber-error" placeholder="id number" onChange={handleChange} value={state.idNumber} />
                                        <span id="idNumber-error" className="error" hidden>  Enter your ID number</span>
                                    </div>

                                    <div className="field">
                                        <label htmlFor="idFile" className="file-dropzone dropzone">
                                            <span id="fileLabel">Upload a photo of your ID</span> </label>
                                        <input type="file" id="idFile" name="idFile" accept="image/*" hidden onChange={handleChange} />
                                    </div>

                                </fieldset>

                                <div className="btn1">
                                    <button onClick={PreviousStep}>back</button>
                                    <button onClick={nextStep}>next</button>
                                </div>
                            </div>
                        )
                    }


                    {
                        state.step === 3 && (
                            <div>

                                <fieldset className="fieldset">
                                    <legend>address</legend>
                                    <div className="field">
                                        <label htmlFor="idType">country</label>
                                        <legend>select country</legend>
                                        <select id="idType" name="idType">
                                            <option value="kenya">kenya</option>
                                            <option value="somalia">somalia</option>
                                            <option value="united kingdom">united kingdom</option>
                                            <option value="united state">united state</option>
                                            <option value="brazil">brazil</option>
                                            <option value="spain">spain</option>
                                        </select>
                                    </div>

                                    <div className="field city">
                                        <label htmlFor="city">city name</label>
                                        <label htmlFor="postal code">postal Code</label>
                                        <input type="text" name="cityName" placeholder="enter your city name" onChange={handleChange} value={state.cityName} />
                                        <input type="number" name="postalCode" placeholder="write postal code" onChange={handleChange} value={state.postalCode} />
                                    </div>

                                    <div className="field">
                                        <label htmlFor="street address">street address</label>
                                        <input type="text" name="streetAddress" placeholder="write your street address" onChange={handleChange} value={state.streetAddress} />
                                    </div>
{}

                                </fieldset>

                                <div className="btn1">
                                    <button onClick={PreviousStep}>back</button>
                                    <button onClick={nextStep}>next</button>
                                </div>
                            </div>
                        )
                    }

                    {
                        state.step === 4 && (
                            <div>
                                <h2>your output</h2>
                                <h4>fullName : {state.fullName}</h4>
                                <h4>email :{state.email}</h4>
                                <h4>phone number :{state.phoneNumber}</h4>
                                <h4>date of birth :{state.dateOfBirth}</h4>
                                <h4> id number :{state.idNumber}</h4>
                                <h4>city: {state.cityName}</h4>
                                <h4>postal code : {state.postalCode}</h4>

                            </div>
                        )
                    }

                </form>
            </div>
        </div>
    )

    console.log(state.cityName)
}

export default FormVarivication;