import { Avatar, Indicator } from "@mantine/core"
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react"
import { NavLinks } from "./NavLink"
import { Link } from "react-router-dom"




export const Header = () => {
    return (
        <div className=" h-14 px-6 text-white flex items-center justify-between">

            {/* logo */}
            <Link to="/">   <div className="flex items-center gap-1 text-bright-sun-400">
                <IconAnchor className="h-8 w-8" stroke={2.5} />
                <p className="text-2xl font-bold">
                    JobHook
                </p>
            </div>
            </Link>


            {/* links */}
            <NavLinks />


            {/* profile */}
            <div className="flex gap-3 items-center">
                <div className="flex items-center gap-2">Profile
                    <Avatar src="avatar.png" alt="it's me" />
                </div>

                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <IconSettings className="h-6 w-6" stroke={1.5} />
                </div>
                <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                    <Indicator color="brightSun.4" size={8} offset={6} processing>
                        <IconBell className="h-6 w-6" stroke={1.5} />
                    </Indicator>
                </div>
            </div>

        </div>
    )
}