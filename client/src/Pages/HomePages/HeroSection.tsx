
import { Avatar, TextInput } from "@mantine/core"
import BoyImage from "/assets/Boy.png"
import AvatarImage from "/assets/avatar.png"
import AvatarImage2 from "/assets/avatar1.png"
import AvatarImage3 from "/assets/avatar2.png"
import GoogleImage from "/assets/Icons/Google.png"
import { IconSearch } from "@tabler/icons-react"


export const HeroSection = () => {
    return (
        <div className="flex items-center px-16">
            {/* content */}
            <div className="flex flex-col w-[45%] gap-3">

                <h1 className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400"> Find Your <span>Dream Job</span>  With Us </h1>

                <p className="text-mine-shaft-300 text-lg">Good life begins with a good company. Start explore thousands of job in one place.</p>

                {/* search bar */}
                <div className="flex gap-3 mt-5">
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-2 px-2 text-mine-shaft-200 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Title" placeholder="Software Engineer" />
                    <TextInput className="bg-mine-shaft-900 rounded-lg p-2 px-2 text-mine-shaft-200 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Type" placeholder="Full Time" />

                    {/* search button */}
                    <div className="flex items-center justify-center w-20 h-full rounded-lg bg-bright-sun-400 p-2 text-mine-shaft-100">
                        <IconSearch className="h-[85%] w-[85%]" />
                    </div>

                </div>
            </div>
            {/* image */}
            <div className="w-[55%] flex items-center justify-center relative">
                {/* hero image */}
                <img src={BoyImage} alt="Hero Image" />
                {/* got job */}
                <div className="w-fit absolute top-[50%] -right-10 border border-bright-sun-400 p-2 rounded-lg backdrop-blur-md">
                    <div className="text-center text-mine-shaft-100 mb-1 text-sm">
                        10k+ got job
                    </div>
                    <Avatar.Group>
                        <Avatar src={AvatarImage} />
                        <Avatar src={AvatarImage2} />
                        <Avatar src={AvatarImage3} />
                        <Avatar>+9K</Avatar>
                    </Avatar.Group>
                </div>
                {/* job details */}
                <div className="w-fit absolute top-[32%] left-5 border border-bright-sun-400 p-2 rounded-lg backdrop-blur-md flex flex-col gap-3">
                    <div className="flex gap-2 items-center ">
                        <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                            <img src={GoogleImage} alt="google" />
                        </div>
                        <div className="text-sm text-mine-shaft-100">
                            <div>Software Engineer</div>
                            <div className="text-mine-shaft-200">Code Segment</div>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
                        <span>1 day ago</span>
                        <span>120 Applicants</span>
                    </div>
                </div>
            </div>
        </div>

    )
}