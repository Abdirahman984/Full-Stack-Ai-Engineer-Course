import { useContext } from 'react'
import { PostsContext } from './PostsContext'
import { useLocation } from 'react-router'
import { Link } from 'react-router'

const Home = () => {
  const { posts } = useContext(PostsContext)

  const location = useLocation()

  const quary = new URLSearchParams(location.search)

  const searchTerm = quary.get('search') || '';

  const filterPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className='bg-white shadow-md p-2 max-w-2xl m-4 '>
      <div>
        <form>
          <input type="text" className='border-2 border-blue-400 w-full px-2 py-1'
            name='search'
            placeholder='search posts'
            defaultValue={searchTerm}
          />
          <button className='bg-blue-400 text-white capitalize mt-4 w-full' type='submit'>search</button>
        </form>
      </div>
      <div>
        <ul>
          {
            filterPosts.map((post) => (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>

  )
}

export default Home