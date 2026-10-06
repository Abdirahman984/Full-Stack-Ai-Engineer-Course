import { useContext } from 'react'
import themeContext from './Theme'

const ThemeComponet = () => {
    const theme = useContext(themeContext)

    const style = {
        background : theme === 'light' ? '#fff' : '#222',
        color : theme === 'light' ? '#222' : '#fff',
        padding : '20px',
        textAlign : 'center',
        width : '800px',
        margin : '0 auto'
    }
  return (
    <div style={style}>
          <h2>Theme {theme} Componet </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit at maiores, quo, assumenda explicabo saepe laboriosam perspiciatis animi necessitatibus neque molestiae eius deserunt obcaecati, quas totam sunt. Itaque, pariatur.</p>
        </div>
  )
}

export default ThemeComponet;


// import { useState } from "react";
// import themeContext from "../Projects/ThemeUseContext_02/Theme";
// import ThemeComponet from "../Projects/ThemeUseContext_02/ThemeComponet";


// const App = () => {

//     const [theme, setTheme] = useState('light')

//     const changeTheme = () => {
//         setTheme((prevous) => prevous === 'light' ? 'dark' : 'light')
//     }


//     return (
//         <themeContext.Provider value={theme}>
//             <button onClick={changeTheme}>switch to {theme === 'light' ? 'dark' : 'light'}</button>
//             <ThemeComponet />

//         </themeContext.Provider>


//     )
// }

// export default App;