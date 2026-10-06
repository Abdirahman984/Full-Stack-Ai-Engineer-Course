import { NavLink } from "react-router"
const Nav = () => {
  return (
<div>
    <header className="bg-gray-100 py-4 flex justify-around gap-6 capitalize shadow-md">
        <h1 className="font-bold text-2xl">my app</h1>
              <nav className="space-x-5">
                  <NavLink className={({ isActive }) => (isActive ? 'font-bold underline' : undefined)} to="/">Home</NavLink>
                  <NavLink className={({ isActive }) => (isActive ? 'font-bold underline' : undefined)} to="About">About</NavLink>
                  <NavLink className={({ isActive }) => (isActive ? 'font-bold underline' : undefined)} to="Contact">Contact</NavLink>
                  <NavLink className={({ isActive }) => (isActive ? 'font-bold underline' : undefined)} to="/users">users</NavLink>
                  <NavLink className={({ isActive }) => (isActive ? 'font-bold underline' : undefined)} to="/dashboard">Dashboard</NavLink>
              </nav>
    </header>
</div>
  )
}

export default Nav