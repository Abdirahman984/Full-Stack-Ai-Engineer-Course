import { Link, useParams } from "react-router";
const RecipeDetails = () => {
    const { id } = useParams();
    console.log(id)
    const recipes = {
        id,
        title: 'Sample Recipe',
        ingredients: [
            '2 cups flour',
            '1 cup sugar',
            '3 eggs',
            '1 cup milk'
        ],
        instructions: [
            'Mix dry ingredients',
            'Add wet ingredients',
            'Bake at 350°F for 25 minutes'
        ]
    };
    return (
        <div className="bg-white shadow-md p-6 mt-4 mx-auto max-w-4xl">
            <div className="capitalize">
                <div>
                    <Link to='/Recipes' className="text-red-600 font-bold text-1xl">⬅ back to recipes</Link>


                </div>
                <div className="">
                    <h2 className="font-bold text-2xl mt-2">{recipes.title}</h2>

                    <div className=" grid grid-cols-2 justify-center items-center p-2">
                        <div>
                            <ul>
                                <h2 className="text-1xl font-bold mb-2">ingredients</h2>
                                {
                                    recipes.ingredients.map((ingredient, index) => (
                                        <li key={index}>
                                            {ingredient}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-1xl font-bold mb-2">instructions</h2>
                            <ol>
                                {
                                    recipes.instructions.map((instruction, index) => (
                                        <li className="list-disc" key={index}>
                                            {instruction}
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>
                   </div>
                </div>
                
            </div>
        </div>
    )
}



export default RecipeDetails;