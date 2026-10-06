import { useState } from "react";

function RenderingList() {

    // const [fruits, setFruits] = useState([])

    // const fruits = ["banana", "mango", "cherry"]
    // const fruits = []
    // const todos = [
    //     { id: 1, text: "build project js" },
    //     { id: 2, text: "learn react js" },
    //     { id: 3, text: "build project react js solo" }
    // ]

    const [todos, setTodos] = useState(null)

    return (
        <div>
            <h2>rendering list of items</h2>
            {/* <ul>
                {
                    todos.length > 0 ? (
                        todos.map(todo => {
                            return <li key={todo.id}>{todo.text}</li>
                        })
                    ): <p>fruits not found</p>

                }
                
            </ul> */}

        {
         todos  ? (<p>{todos.text}</p> ): <p>not found items</p>
        }
        </div>
    )
}

export default RenderingList;