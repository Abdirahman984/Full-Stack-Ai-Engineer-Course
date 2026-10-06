import { Link } from "react-router";

export const recipes = [
    {
        id: 1,
        title: 'Classic Chocolate Cake',
        description: 'Rich and moist chocolate cake perfect for any occasion',
        category: 'desserts'
    },
    {
        id: 2,
        title: 'Spaghetti Carbonara',
        description: 'Traditional Italian pasta with creamy egg sauce',
        category: 'dinner'
    },
    {
        id: 3,
        title: 'Greek Salad',
        description: 'Fresh Mediterranean salad with feta cheese',
        category: 'lunch'
    },
    {
        id: 4,
        title: 'Breakfast Smoothie Bowl',
        description: 'Healthy and colorful breakfast bowl',
        category: 'breakfast'
    }
];
const Recipes = () => {
 

    return (
        <div>
            <div className="mx-auto min-h-screen text-center px-15 py-5">
                <h1 className="text-2xl font-bold text-center capitalize mb-6">all recipes</h1>
                <div className=" px-6 text-center grid grid-cols-3 gap-10 capitalize ">
                  
                    {
                        recipes.map((recipe) => (
                            <div key={recipe.id} className="bg-white text-gray-800 shadow-md p-6 rounded-lg mx-auto">
                                <Link to='RecipeDetails/:id'>
                                    <h3 className="font-bold text-1xl mb-3 text-gray-800 ">{recipe.title}</h3>
                                    <p className="text-gray-800 mb-2">{recipe.description}</p>
                                    <span className="bg-red-100 text-red-600 rounded-full px-3 py-1 capitalize">{recipe.category}</span>

                                </Link>
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default Recipes