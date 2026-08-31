import React, { useContext } from 'react'
import switchContext from './SwitchToLanguage'

const SwitchTo = () => {
  const lang = useContext(switchContext)
  const mesaage = {
    en: "hellow",
    es: '¡Hola!'
  }
  return (
    <h2>{mesaage[lang]}</h2>
  )
}

export default SwitchTo;