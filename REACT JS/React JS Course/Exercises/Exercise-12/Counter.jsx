import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <h2>counter :{count} </h2>
            <button disabled={count < 1 } onClick={handleDecrement}>decrement</button>
            <button onClick={handleIncrement}>increment</button>

        </div>
    )
}

export default Counter;