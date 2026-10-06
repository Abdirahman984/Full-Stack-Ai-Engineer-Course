
import { createBrowserRouter } from 'react-router'
import App from '../../src/App'
import Home from './Home'
import Recipes from './Recipes'
import Categories from './Categories'
import RecipeDetails from './RecipeDetails'
import CategoryRecipe from './CategoryRecipe'


const recipesRouters = createBrowserRouter([
    {
        path: '/',
        element: <App />,

        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'Recipes',
                element: <Recipes />,
            },

            {
                path: '/Recipes/:RecipeDetails/:id',
                element: <RecipeDetails />
            },
            {
                path: 'Categories',
                element: <Categories />,

                children : [
                    {
                        path: ':categoryId',
                        element: <CategoryRecipe/>
                    }
                ]
            }
        ]
    }
])


export default recipesRouters