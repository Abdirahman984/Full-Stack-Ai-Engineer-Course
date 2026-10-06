import { useEffect, useRef, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    const prevousCountRef = useRef()

    useEffect(() => {
        prevousCountRef.current = count

    },[count])

    const prevousCount = prevousCountRef.current

    console.log(prevousCount)

  return (
    <div>
        <h1>count :{count} </h1>
        <h1>prevous :{prevousCount} </h1>

        <button onClick={() => setCount(count +1)}>increment</button>
    </div>
  )
}

export default Counter