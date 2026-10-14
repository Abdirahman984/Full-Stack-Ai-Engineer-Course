import { useContext } from "react"
import { PostsContext } from "./PostsContext"
import { useLocation, useNavigate, useParams } from "react-router"

const PostDetails = () => {
const {posts} = useContext(PostsContext)
const {postId} = useParams()
const location = useLocation()
const navigate = useNavigate()
const currentId = parseInt(postId)

const post = posts.find((p) => p.id === currentId)

    if (!post) {
        return <p>Post not found.</p>;
    }

    const handleNavigation = (direction) => {
        const newId = direction === 'next' ? currentId + 1 : currentId - 1;
        const newPost = posts.find((p) => p.id === newId);

        if (newPost) {
            navigate(`/posts/${newId}`, {
                state: { fromPostId: currentId },
            });
        }
    };
  return (
      <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => handleNavigation('prev')}>Previous</button>
          <button onClick={() => handleNavigation('next')}>Next</button>
          {location.state && (
              <p>You navigated here from post ID: {location.state.fromPostId}</p>
          )}
      </div>
  );
}

export default PostDetails