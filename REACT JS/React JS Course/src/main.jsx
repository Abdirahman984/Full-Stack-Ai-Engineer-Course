import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import recipesRouters from '../Exercises/Exercise-25/RecipetsRouters'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={recipesRouters}/>
  </StrictMode>
)



