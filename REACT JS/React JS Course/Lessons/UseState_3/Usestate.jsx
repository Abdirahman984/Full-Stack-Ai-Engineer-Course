// import { useState } from "react"

// EXAMPLE 1

// function Calculate() {
//     const [count, setCount] = useState(0)
//     function Increment() {
//         setCount(count + 1)
//         console.log(count)
//     }

//     return (
//         <>
//             <p>YOU CLICKED THE BUTTON {count} times</p>
//             <button onClick={Increment}>click the button</button>
//         </>
//     )
// }

// EXAMPLE 2

// function DisplayMessage() {

//   const [isVisible, setToggle] = useState(true)
//   function toggle (){
//     setToggle(!isVisible)
//   }

//   return (
//     <>
//       {isVisible && <p>this message is toggle</p>}
//       <button onClick={toggle}>{isVisible ? 'hide' : 'show'} message</button>
//     </>
//   )
// }

// EXAMPLE 3

// import { useState } from "react"

// function DisplayMessage() {
// const [name, setName] = useState()

// function validateUser (event){
// setName(event.target.value)
// }

//   return (
//   <>
//   <input type="text" placeholder="enter your name" onChange={validateUser}/>
//   <p>hellow, {name}</p>
//   </>
      
//   )
// }

// export default DisplayMessage;


// export default DisplayMessage;

// export default Calculate


// import { useState } from "react";

// function Display() {
//     const [user, setName] = useState({ name: "abdi", age: 20, city: "nairobi" })
//     function validate() {
//         setName({ ...user,  age : user.age + 1 })
//     }
//     return (
//         <>
//             <p>{user.name} {user.age} {user.city}</p>
//             <button onClick={validate}>click here</button>
//         </>

//     )
// }

// export default Display;



// import { useState } from "react";

// function Display() {
//     const [fruits, setFruits] = useState([
//         "apple", "mangoes", "cherry"
//     ])

//     const validate = () => {
//         setFruits([...fruits, "orange"])
//     }

//     return (
//         <>
//             <ul>
//                 {fruits.map(fruit => (
//                     <li>{fruit}</li>
//                 ))}
//             </ul>
//             <button onClick={validate}>add orange</button>
//         </>
//     )
// }

// export default Display;







// import { useState } from "react";

// function TodoList() {
//     const [inputValue, setInputValue] = useState("")
//     const [todos, setTask] = useState([])

//     function inputBoxHandle(event) {
//         setInputValue(event.target.value)
//         // console.log(event.target.value)
//     }

//     function handleAddTask() {
//         const newTodo = {
//             id: crypto.randomUUID(),
//             text: inputValue,
//             completed: false
//         }

//         setTask([...todos, newTodo])
//         setInputValue("")
//         console.log(newTodo)


//     }


//     return (
//         <div className="container">
//             <h2>Todo List </h2>
//             <input type="text" placeholder="Todo List Task" onChange={inputBoxHandle} value={inputValue} />
//             <button onClick={handleAddTask}>add</button>
//             <ul>
//                 {
//                     todos.map(todo=>(
//                         <li>{todo.text}</li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

// export default TodoList;