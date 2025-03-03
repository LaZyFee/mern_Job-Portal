import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layouts/Main";
import { Home } from "../Pages/HomePage/Home";
import { FindJobs } from "../Pages/Find Jobs/FindJobs";
import { FindTalent } from "../Pages/Find Talent/FindTalent";
import { TalentProfile } from "../Pages/Talent Profile/TalentProfile";



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
            },
            {
                path: "/find-talent",
                element: <FindTalent />
            },
            {
                path: "/talent-profile",
                element: <TalentProfile />
            }
        ]
    }
])