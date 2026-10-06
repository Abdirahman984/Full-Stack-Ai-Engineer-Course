import { useState } from "react";
import { useEffect } from "react";

const ExampleUseEffects = () => {
    const [title, setTitle] = useState("")
    const [name, setName] = useState ("")

    useEffect(()=> {
        document.title = title
        console.log(title)
    }, [title])
    return (
       <div>
            <h2>type inoder to see what you type</h2>
            <input type="text" placeholder="write title" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <input type="text" placeholder="write something" onChange={(e) => setName(e.target.value)} value={name}/>


       </div>


    )
}

export default ExampleUseEffects;

import { useEffect, useState } from "react";

function Display() {
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let result;
        if (isRunning) {
            result = setInterval(() => {
                console.log("waaali")
                setCount((prev) => prev + 1)
            }, 1000)

        }
        return (() => clearInterval(result))
    }, [isRunning])

    const handleStart = () => {
        setIsRunning(true)
    }

    const handleStop = () => {
        setIsRunning(false)
    }

    const handleReset = () => {
        setIsRunning(false)
        setCount(0)
    }
    return (
        <div>
            <h1>time tricker</h1>
            <p>count {count} secons</p>
            <button disabled={isRunning} onClick={handleStart}>start </button>
            <button disabled={!isRunning} onClick={handleStop}>stop </button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}
export default Display;