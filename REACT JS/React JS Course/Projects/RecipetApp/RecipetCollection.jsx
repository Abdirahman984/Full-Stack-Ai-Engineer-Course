import React, { useState } from 'react'

const RecipetCollection = () => {

    const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];

    const [selectCategory, setSelectCategory] = useState()

    const recipes = [
        {
            id: 1,
            title: 'Pancakes',
            category: 'Breakfast',
            time: '20 min',
            difficulty: 'easy',
            image: '🥞',
            ingredients: ['flour', 'eggs', 'milk', 'butter']
        },
        {
            id: 2,
            title: 'Pasta Carbonara',
            category: 'Dinner',
            time: '30 min',
            difficulty: 'medium',
            image: '🍝',
            ingredients: ['pasta', 'eggs', 'cheese', 'bacon']
        },
        {
            id: 3,
            title: 'Caesar Salad',
            category: 'Lunch',
            time: '15 min',
            difficulty: 'easy',
            image: '🥗',
            ingredients: ['lettuce', 'croutons', 'parmesan', 'chicken']
        },
        {
            id: 4,
            title: 'Chocolate Cake',
            category: 'Dessert',
            time: '45 min',
            difficulty: 'medium',
            image: '🍰',
            ingredients: ['flour', 'cocoa', 'sugar', 'eggs']
        }
    ];

    const difficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'easy':
                return 'bg-green-100 text-green-600'
            case 'medium':
                return 'bg-yellow-100 text-yellow-600'
            case 'hard':
                return 'bg-red-100 text-red-600'
            case 'easy':
                return 'bg-gray-100 text-gray-600'
        }
    }

    const filterRecipes = selectCategory == 'All' ? recipes : recipes.filter((recipe) => recipe.category == selectCategory)

    return (
        <div className='min-h-screen bg-linear-to-br from-orange-500 to-rose-100 p-8 4 capitalize'>
            <div className='mx-auto'>
                <div className='text-center mb-10 capitalize'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-5'>Recipe Collection</h1>
                    <p className='text-2xl text-gray-600'>find out your favourite food and cook it now </p>
                </div>
                <div className='flex justify-center gap-10'>

                    {
                        categories.map((category) => (
                            <button key={category}
                                onClick={() => setSelectCategory(category)} className={`px-4 py-2 rounded-full ${selectCategory === category ? 'bg-orange-600 text-white cursor-pointer ' : 'bg-white text-gray-600 text-xl capitalize'}`}>{category}</button>
                        ))
                    }


                </div>

                {/* RECEPIES */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5'>
                    {
                        filterRecipes.map((recipe) => (
                            // RECEPE HEADER
                            <div className='bg-white rounded-lg shadow-lg '>
                                <div className=' p-6 '>
                                    <div className='flex flex-wrap justify-between items-center'>
                                        <h2 className='text-gray-800 text-2xl'>{recipe.title}</h2>
                                        <span className='text-4xl font-extrabold'>{recipe.image}</span>
                                    </div>
                                    {/* RECIPES DETAILS */}
                                    <div className='flex items-center gap-6 m-2'>
                                        <span className='text-gray-500 text-sm '>⏰ {recipe.time}</span>
                                        <span className={`text-lg px-2 py-1 rounded-full ${difficultyColor(recipe.difficulty)}`}>{recipe.difficulty}</span>
                                    </div>
                                    {/* INGREDIENTS */}
                                    <div>
                                        <h2 className='text-gray-600 text-lg'>ingredients</h2>
                                        <div  className='flex flex-wrap items-center gap-8 px-4 py-1'>
                                            {
                                                recipe.ingredients.map((ingredient, index) => (
                                                    <span className='bg-gray-100 text-gray-600 text-medium px-4 py2 rounded-full'>{ingredient}</span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {
                    filterRecipes.length === 0 && (
                        <div className='font-lg text-center p-5'>
                            <span className='text-center p-2 text-gray-600 text-medium'>
                                no recipe are found, its empty</span>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default RecipetCollection