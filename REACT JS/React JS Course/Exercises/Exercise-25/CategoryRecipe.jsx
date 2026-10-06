import { Link, useParams } from "react-router";

const CategoryRecipe = () => {

    const allRecipes = [
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
        },
        {
            id: 5,
            title: 'Tiramisu',
            description: 'Classic Italian coffee-flavored dessert',
            category: 'desserts'
        }
    ];

    const { categoryId } = useParams()
    console.log(categoryId)


    const recipes = allRecipes.filter((recipe) => recipe.category == categoryId)



    return (

        <div>
            <div>
                <div className="bg-white shadow-md p-4 max-w-4xl mx-auto mt-2 capitalize">
                  <h1 className="text-2xl font-bold">{categoryId} recipe</h1>
                    {
                        recipes.length > 0 ? (
                            <div className="bg-white shadow-sm p-6 max-w-4xl mx-auto mt-6 border">
                                <h2 className="font-bold">{categoryId} </h2>
                                {
                                    recipes.map((recipe) => (
                                        <Link key={recipe.id} to={`/recipes/:${recipe.id}`}>
                                            <p className="text-gray-600 mb-2">{recipe.description}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        ) : (
                            <p className="text-gray-600">No recipes found in this category.</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryRecipe;