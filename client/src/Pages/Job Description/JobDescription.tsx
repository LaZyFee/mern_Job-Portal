import { Button, Divider } from "@mantine/core"
import { IconBookmark } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { ActionIcon } from '@mantine/core';
import { card, desc, skills } from "../../assets/Data/JobDescData";
import DOMPurify from 'dompurify';

export const JobDescription = () => {
    const data = DOMPurify.sanitize(desc);


    return (
        <div className="w-2/3">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img src={`/assets/Icons/Google.png`} alt="Google" className="h-14 w-14 object-contain" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-semibold text-2xl text-white">Google</div>
                        <div className="text-lg text-mine-shaft-400">
                            Code Segment &bull; 3 days ago &bull; 3  Applicants
                        </div>
                    </div>
                </div>
                <div className="flex items-center flex-col gap-2">
                    <Link to="">
                        <Button color="brightSun.4" variant="light" size="sm">Apply Now</Button>
                    </Link>
                    <IconBookmark className="text-mine-shaft-400 cursor-pointer transition-colors duration-200 hover:text-bright-sun-400" />
                </div>
            </div>
            <Divider my="xl" />
            <div className="flex justify-between">
                {
                    card.map((item, index) => (
                        <div className="flex flex-col gap-2 items-center" key={index}>
                            <ActionIcon className="!h-12 !w-12" color="brightSun.4" variant="filled" radius="xl" aria-label="Settings">
                                <item.icon className="h-4/5 w-4/5" stroke={1.5} />
                            </ActionIcon>
                            <div className="text-mine-shaft-300 text-sm">{item.name}</div>
                            <div className="font-semibold">{item.value}</div>
                        </div>
                    ))
                }
            </div>
            <Divider my="xl" />
            <div>
                <h1 className="text-xl font-semibold mb-5">Required Skills</h1>
                <div className="flex flex-wrap gap-3">
                    {
                        skills.map((item, index) => (
                            <ActionIcon className="!h-fit !w-fit !font-medium" color="brightSun.4" variant="light" radius="xl" aria-label="Settings" p='xs' key={index}>
                                {item}
                            </ActionIcon>
                        ))
                    }
                </div>
            </div>
            <Divider my="xl" />
            <div className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-sm [&_p]:text-mine-shaft-300 [&_p]:text-justify [&_li]:text-sm [&_li]:marker:text-bright-sun-400 [&_li]:mb-1" dangerouslySetInnerHTML={{ __html: data }}>
            </div>
            <Divider my="xl" />
            <div>
                <h1 className="text-2xl font-semibold mb-5">About The Company</h1>
                <div className="flex justify-between mb-3">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img src={`/assets/Icons/Google.png`} alt="Google" className="h-8 w-8 object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <div className="font-mrdium text-lg ">Google</div>
                            <div className="text-lg text-mine-shaft-400">
                                10K+ Employees
                            </div>
                        </div>
                    </div>
                    <Link to="">
                        <Button color="brightSun.4" variant="light">Company Profile</Button>
                    </Link>
                </div>
                <p className="text-sm text-mine-shaft-300 mt-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit debitis rem quos labore ut blanditiis aperiam qui saepe vero dolores magnam facere, harum odit totam id culpa cumque quam et!</p>
            </div>
        </div>
    )

}




