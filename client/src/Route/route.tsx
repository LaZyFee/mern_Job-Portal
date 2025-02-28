import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layouts/Main";
import { Home } from "../Pages/HomePage/Home";
import { FindJobs } from "../Pages/Find Jobs/FindJobs";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/find-jobs",
                element: <FindJobs />
            }
        ]
    }
])