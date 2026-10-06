import { createBrowserRouter } from "react-router";
import App from "../../src/App";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import UserList from "./UserList";
import UserProflle from "./UserProflle";
import { ProductsDetails } from "./ProductsDetails";
import Dashboard from "./Dashboard";
import OverView from "./OverView";
import Settings from "./Settings";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },

            {
                path: 'About',
                element: <About />
            },
            {
                path: 'Contact',
                element: <Contact />
            },
            {
                path: 'users',
                element: <UserList />
            },
            {
                path: 'users/:userId',
                element: <UserProflle />
            },
            {
                path: 'products/:categoryId',
                element: <ProductsDetails />
            },
            {
                path: 'products/:categoryId/:productId',
                element: <ProductsDetails />
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
                
            children: [
                    {
                        index: true,
                        element: <OverView />
                    },
                    {
                        path: 'settings',
                        element: <Settings />
                    }
                ]
            }
        ]
    }
])

export default Router;