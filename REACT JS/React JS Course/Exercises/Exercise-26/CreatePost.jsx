import { useState } from 'react'
import { useContext } from 'react'
import { PostsContext } from './PostsContext'
import { useNavigate } from 'react-router'

const CreatePost = () => {
    const { addPosts } = useContext(PostsContext)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        addPosts({title, content});
        navigate('/')
    }

    return (
        <div className='bg-white shadow-md p-2 w-2xl m-2'>
            <h2 className='p-1'>create new post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='p-1 '>
                        Title:{' '}
                        <input className='border'
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Content:{' '}
                        <textarea className='p-10 border mt-2'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        ></textarea>
                    </label>
                </div>
                <button className='bg-blue-400 text-white w-1xl px-2 py-1 mt-2 w-1/2' type="submit">Create Post</button>
            </form >
        </div >
    )
}

export default CreatePost