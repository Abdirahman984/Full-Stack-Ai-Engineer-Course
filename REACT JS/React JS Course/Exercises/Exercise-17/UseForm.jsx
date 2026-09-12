import { useState } from 'react'

 const useForm = (intialValue) => {

    const [values, setValues] = useState(intialValue)

const handleChange = (e) => {
   const {name, value} = e.target;
   setValues({
    ...values,
    [name]:value
   })
}
    
  return {values, handleChange}
}

export default useForm;


