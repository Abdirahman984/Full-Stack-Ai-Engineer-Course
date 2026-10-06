import { useState } from "react"

const CheckboxDropDown = () => {

    const [isChecked, setIsChecked] = useState(false)
    const [selectOption, setSelectOption] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleCheckbox = (e) => {
        setIsChecked(e.target.checked)
        if (isChecked) {
            alert('please select checkbox')
            return
        }

        if (selectOption === '') {
            alert('please select opt')
            return
        }
    }

  

  
    console.log(isChecked)
    console.log(selectOption)

    return (
        <div className='p-4'>
            <form onSubmit={handleSubmit}>
                <label className='p-4' htmlFor="">checkbox</label>
                <input onChange={handleCheckbox} value={isChecked} type="checkbox" />

                <select onChange={(e) => setSelectOption(e.target.value)} value={selectOption}>
                    <option value="">select option</option>
                    <option value="option-1">option 1</option>
                    <option value="option-2">option 2</option>
                    <option value="option-3">option 3</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default CheckboxDropDown