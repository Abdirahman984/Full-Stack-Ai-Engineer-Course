import { Link, Outlet } from "react-router";

export const categories = [
        {
            id: 'breakfast',
            name: 'Breakfast',
            description: 'Start your day right'
        },
        {
            id: 'lunch',
            name: 'Lunch',
            description: 'Midday favorites'
        },
        {
            id: 'dinner',
            name: 'Dinner',
            description: 'Evening meals'
        },
        {
            id: 'desserts',
            name: 'Desserts',
            description: 'Sweet treats'
        }
    ];
const Categories = () => {



    return (
        <div>
            <div className="bg-white shadow-sm p-6 max-w-4xl mx-auto mt-6">
                <h1 className="text-2xl font-bold mr-6">categories</h1>
                <div>
                    {
                        categories.map((category) => (
                            <div key={category.id} className="p-4 mr-6">
                                <Link to={`/Categories/${category.id}`}>
                                    <h3 className="text-1xl font-bold">{category.name}</h3>
                                    <p className="text-gray-600">{category.description}</p>
                                </Link>
                            </div>

                        ))
                    }

                </div>

               

            </div>
            <div >
                <Outlet />
            </div>
        </div>
        
        
    )
}

export default Categories