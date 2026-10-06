import { useState } from "react";

const ToggleButton = () => {

    const [isVisible, setIsVisible] = useState(false)

    const toggle = () => setIsVisible(!isVisible)

    return (
        <div>
            <button onClick={toggle}>{isVisible ? 'hide message' : 'show message'}</button>
            {isVisible && <p>this is toggleable message ......................</p>}
        </div>

    )


}
export default ToggleButton;