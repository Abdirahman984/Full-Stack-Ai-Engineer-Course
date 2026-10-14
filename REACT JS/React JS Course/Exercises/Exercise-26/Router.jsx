import { createBrowserRouter } from "react-router";
import App from "../../src/App";
import Home from "./Home";
import CreatePost from "./CreatePost";
import Login from "./Login";
import Logout from "./Logout";
import Protected from "./Protected";
import PostDetails from "./PostDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,

        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/CreatePost',
                element: (
                    <Protected element={<CreatePost />}></Protected>
                )
            },
            {
                path: '/post/:postId',
                element: <PostDetails />
            },
            {
                path: '/Login',
                element: <Login />
            },
            {
                path: '/Logout',
                element: <Logout />
            }
        ]
    }
])

export default router;