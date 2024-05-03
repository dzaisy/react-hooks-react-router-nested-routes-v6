import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [ //  by entering our different route objects as an array associated with our App route's children key, we've set them up to render inside of our App component. That means that if we navigate to any of these nested routes — such as /login, for example — our App component will render with our Login component as a child component.
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "/profile/:id",
                        element: <UserProfile />
                    }
                ]
            }, 
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
];

export default routes;