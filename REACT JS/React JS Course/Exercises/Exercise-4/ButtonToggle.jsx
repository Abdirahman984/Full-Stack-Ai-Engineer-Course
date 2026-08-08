import { useState } from "react";

function ButtonToggle() {
    const [isOn, setOn] = useState(true)
    function validate() {
        setOn(!isOn)

    }
    return (
        <>
            <button onClick={validate}> TURN {isOn ? 'ON' : 'OFF'} </button>
            {isOn && <p >turn on now</p>}

        </>
    )
}

export default ButtonToggle;