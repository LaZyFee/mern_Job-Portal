import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layouts/Main";
import { Home } from "../Pages/HomePage/Home";
import { FindJobs } from "../Pages/Find Jobs/FindJobs";
import { FindTalent } from "../Pages/Find Talent/FindTalent";
import { TalentProfile } from "../Pages/Talent Profile/TalentProfile";
import { PostJobPage } from "../Pages/Post Job/PostJobPage";



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
                element: <PostJobPage />
            },
            {
                path: "/about-us",
                element: <div>About Us</div>
            }
        ]
    }
])