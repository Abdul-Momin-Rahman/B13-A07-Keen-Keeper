import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../components/Home";
import Timeline from "../components/Timeline";
import Stats from "../components/Stats";
import FriendDetails from "../components/FriendDetails";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <RootLayout/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : '/friend/:id',
                element : <FriendDetails/>
            },
            {
                path : 'timeline',
                element : <Timeline/>
            },
            {
                path : 'stats',
                element : <Stats/>
            }
        ],
        errorElement : <NotFound/>
    }
])