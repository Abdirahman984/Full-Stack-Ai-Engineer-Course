import React from 'react'
import { useContext } from 'react'
import languagueContext from './SwitchToLanguage'

const SwitchTo = () => {

    const language = useContext(languagueContext)

    const text = {
        en: 'hello',
        es: 'holla !'
    }

    return (
        <div>
            <h2>{text[language]}</h2>
        </div>
    )
}

export default SwitchTo










// import React, { useContext } from 'react'
// import SwitchLanguage from './SwitchToLanguage'

// const SwitchTo = () => {
//   const language = useContext(SwitchLanguage)

//   const message = {
//     en: "hello",
//     es: "holla !"
//   }
//   return (
//     <div>
//       <h2>{message[language]}</h2>
//     </div>
//   )
// }

// export default SwitchTo;