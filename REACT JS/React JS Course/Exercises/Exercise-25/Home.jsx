import { Link } from "react-router"

const Home = () => {
  return (
    <div className='bg-gray-200 shadow-md mx-auto text-center p-6 min-h-screen capitalize'>
      <div className='p-4'>
        <h1 className='text-3xl font-bold mb-4'>welcome to recipe book</h1>
        <p className='text-gray-700 text-1xl'>discover delicious recipes and start cooking today</p>
      </div>

      <div className='grid grid-cols-2 justify-center items-center gap-6 max-w-3xl mx-auto m-2'>
        <div className='bg-red-600 text-white p-6 rounded-md hover:bg-red-500 cursor-pointer'> 
          <Link to='Recipes'>
            <h1>Browser Recipes</h1>
            <p>explore our collections of delicious recipes</p></Link>
        </div>
        <div className='bg-red-600 text-white p-6 rounded-md hover:bg-red-500 cursor-pointer'>
          <Link to='Recipes'>
            <h1>Recipes categories</h1>
            <p>find recipe by category</p>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Home