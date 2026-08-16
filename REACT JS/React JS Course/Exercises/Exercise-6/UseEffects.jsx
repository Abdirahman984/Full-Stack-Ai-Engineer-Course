import { useEffect, useState } from "react";

function ManagerInput () {
    const [name, setName] = useState("")
    const [greeting, setGreeting] = useState("hello")

    useEffect(()=> {
        document.title = `${name} ${greeting}`
        console.log("title")
    }, [name])
    return (
       <div>
            <h1>EXERCISE 6</h1>
          <h2>enter your name</h2>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
          <h2>choose your greeting</h2>
            <input type="text" onChange={(e) => setGreeting(e.target.value)} value={greeting}/>
       </div>
        
    )
}

export default ManagerInput;