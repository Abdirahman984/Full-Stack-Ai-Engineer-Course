import React, { useEffect, useRef } from 'react'

const InputUseRef = () => {

    const inputRef = useRef(null)

    console.log(inputRef)

    useEffect(() => {
        if (inputRef.current){
            inputRef.current.focus();
          
        }
    }, []);

    return (
        <div>
            <input ref={inputRef} className='bg-blue-600 border-red-500 text-white mx-auto m-8' type="text" placeholder='focus on mount' />
        </div>
    )
}

export default InputUseRef