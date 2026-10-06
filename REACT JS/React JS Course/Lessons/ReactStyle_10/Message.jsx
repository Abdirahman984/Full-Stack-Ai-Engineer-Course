import { useState } from 'react'
import style from '../ReactStyle_10/message.module.css'

export const Message = () => {
  return (
    <div className={style.messageContainer}>
          <h2>Message</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dignissimos magnam sapiente ad exercitationem, dolores esse numquam ullam odit vitae, in sunt sed incidunt voluptatum necessitatibus eligendi, omnis eaque impedit!</p>
          <h3>abdirahman</h3>

          <div className={isActive ? style.activeMessage : style.inctiveMessage}>
              <h2>Message</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dignissimos magnam sapiente ad exercitationem, dolores esse numquam ullam odit vitae, in sunt sed incidunt voluptatum necessitatibus eligendi, omnis eaque impedit!</p>
              <h3>ali </h3>
          </div>

    </div>

  )
}
