import { NavLink } from "react-router";
const Nav = () => {
  return (
  <div className="capitalize flex justify-around bg-gray-100 shadow-md p-5 text-gray-800">
    <h1 className="font-bold text-2xl text-red-600">recipe book</h1>
          <nav className="text-1xl font-medium flex gap-6">
              <NavLink className={({isActive}) => (isActive ? 'font-bold text-red-600' : undefined) } to='/'>Home</NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'font-bold text-red-600' : undefined)} to='Recipes'>Recipes</NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'font-bold text-red-600' : undefined)} to='Categories'>Categories</NavLink>
          </nav>
  </div>
  )
}

export default Nav;