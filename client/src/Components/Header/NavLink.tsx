import { Link, useLocation } from "react-router-dom"


export const NavLinks = () => {

    const Links = [
        {
            name: "Find Jobs",
            path: "/find-jobs"
        },
        {
            name: "Find Talent",
            path: "/find-talent"
        },
        {
            name: "Upload Job",
            path: "/upload-job"
        },
        {
            name: "About Us",
            path: "/about-us"
        }
    ]


    const location = useLocation()

    return (
        <div className="flex gap-5 text-mine-shaft-300 h-full items-center">
            {
                Links.map((link, index) =>
                    <div
                        className={`${location.pathname === link.path ? "border-bright-sun-400 text-bright-sun-400" : " border-transparent"} h-full border-t-[3px] flex items-center`}
                    >
                        <Link key={index} to={link.path}>{link.name}</Link>

                    </div>
                )
            }


        </div>
    )
}