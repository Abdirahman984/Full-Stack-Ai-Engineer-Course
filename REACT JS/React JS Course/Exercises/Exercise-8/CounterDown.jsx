import { useEffect, useState } from "react";

function CounterDown() {
    const [initialTime, setInitialTime] = useState(30)
    const [remainingTime, setRemainingTime] = useState(30)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let doCount;
       if(isRunning && remainingTime > 0){
           doCount = setInterval(() => {
               console.log("waali .........")
               setRemainingTime((prev) => prev - 1)
           }, 1000)
       }
        console.log("unmounting ....")
        return (() => clearInterval(doCount))
      

    }, [isRunning, remainingTime])

    const handleTimer = (e) => {
        const time = Number(e.target.value)
        setInitialTime(time)
        setRemainingTime(time)
        setIsRunning(false)
        
    }

    const handleStart = () => {
       if(remainingTime > 0){
           setIsRunning(true)
       }
    }
    const handleStop = () => {
        setIsRunning(false)
    }
    const handleReset = () => {
        setIsRunning(false)
        setRemainingTime(initialTime)
    }


    return (
        <div className="container">
            <h1>COUNTER DOWN APP</h1>
            <label htmlFor="">set time (seconds) </label>
            <input type="text" value={initialTime} onChange={handleTimer} /><br />
            <p>time left is {remainingTime} seconds </p> <br/>
            <button disabled ={isRunning || remainingTime === 0}  onClick={handleStart}>start</button>
            <button disabled={!isRunning} onClick={handleStop}>stop</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default CounterDown;