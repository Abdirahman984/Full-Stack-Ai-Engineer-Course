// import { UseForm } from "react";
import useForm from "./UseForm"

const FormConatact = () => {

    const {values, handleChange } = useForm({
        name: "",
        email: "",
        phone: '',
        message: ""
    })


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("form value", values)
    }
    

    return (
        <div>
            <h2>conatact form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">name</label>
                <input type="text" name='name' onChange={handleChange} value={values.name} />  <br />
                <label htmlFor="email">email</label>
                <input type="email" name='email' onChange={handleChange} value={values.email} /> <br />
                <label htmlFor="message">message</label> <br />
                <textarea name="message" id="message" onChange={handleChange} value={values.message} rows={3} cols={25} ></textarea>
                <button type="submit">submit</button>
            </form>
        </div>

    )

}

export default FormConatact;