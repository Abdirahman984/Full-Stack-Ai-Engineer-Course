import { useEffect, useState } from "react";

function MouseMoveConroler() {
    const [cordinates, setCordinates] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleCordinates = (e) => {
            setCordinates({x: e.clientX, y: e.clientY})
        }

        window.addEventListener("mousemove", handleCordinates)

       return (()=>{
           window.removeEventListener("mousemove", handleCordinates)
       })

    }, [])
    return (
        <div>
            <h1>mouse move controler</h1>
            <p>X-axis your position right now X {cordinates.x}</p>
            <p>Y-axis your position right now Y {cordinates.y}</p>
        </div>

    )
}

export default MouseMoveConroler;