import { createContext } from "react";

const languagueContext = createContext('en')

export default languagueContext;


// import { createContext } from "react";

// const SwitchLanguage = createContext("en")

// export default SwitchLanguage;


// import { useState } from "react";
// import SwitchLanguage from "../Exercises/Exercise-15/SwitchToLanguage";
// import SwitchTo from "../Exercises/Exercise-15/SwitchTo";


// const App = () => {

//     const [language, setLanguage] = useState("en")

//     const toggle = () => {
//         setLanguage((prevLanguage) => prevLanguage === "en" ? "es" : "en")
//     }



//     return (
//         <SwitchLanguage.Provider value={language}>
//             <button onClick={toggle}>switch to {language === "en" ? "english" : "spanish"}</button>
//             <SwitchTo />
//         </SwitchLanguage.Provider>
//     )
// }

// export default App;