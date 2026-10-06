import React from 'react'
import { useRouteError } from 'react-router'

const NotFound = () => {

    const error = useRouteError()
   
  return (
  <div>
    <h2>this page is not {error.statusText}</h2>
  </div>
  )
}

export default NotFound