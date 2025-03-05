import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layouts/Main";
import { Home } from "../Pages/HomePage/Home";
import { FindJobs } from "../Pages/Find Jobs/FindJobs";
import { FindTalent } from "../Pages/Find Talent/FindTalent";
import { TalentProfile } from "../Pages/Talent Profile/TalentProfile";
import { PostJob } from "../Pages/Post Job/PostJob";



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
            },
            {
                path: "/upload-job",
                element: <PostJob />
            },
            {
                path: "/about-us",
                element: <div>About Us</div>
            }
        ]
    }
])