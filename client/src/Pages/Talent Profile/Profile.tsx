import { Button, Divider } from "@mantine/core"
import BannerImage from "/assets/Profile/banner.jpg"
import AvatarImage from "/assets/avatar.png"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"
import { ExpCard } from "./ExpCard"
import { CertificationCard } from "./CertificationCard"



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Profile = (props: any) => {
    console.log(props);
    return (
        <div className="w-2/3">
            <div className="relative">
                <img src={BannerImage} alt="Banner" className="rounded-t-2xl" />
                <img src={AvatarImage} alt="it's me" className="absolute -bottom-1/3 left-3  w-48 h-48 rounded-full border-8 border-mine-shaft-900" />
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">
                    {props.name}
                    <Button color="brightSun.4" variant="light">Message</Button>
                </div >
                <div className="text-lg flex gap-1 items-center">
                    <IconBriefcase className="h-4 w-4" stroke={1.5} /> {props.role} &bull; {props.company} </div>
                <div className="text-md flex gap-1 items-center text-mine-shaft-300">
                    <IconMapPin className="h-4 w-4" stroke={1.5} /> {props.location}
                </div>
            </div>
            <Divider my="md" />
            <div className="p-3">
                <div className="text-2xl font-semibold mb-3">About </div>
                <div className="text-sm text-justify text-mine-shaft-300">{props.about}</div>
            </div>
            <Divider my="md" />
            <div className="p-3">
                <div className="text-2xl font-semibold mb-3">Skills </div>
                <div className="flex flex-wrap gap-3">
                    {
                        props.skills.map((skill: string, index: number) =>
                            <div key={index} className="bg-bright-sun-300/15 text-sm font-medium rounded-3xl text-bright-sun-400 px-3 py-1">
                                {skill}
                            </div>
                        )
                    }
                </div>
            </div>
            <Divider my="md" />
            <div className="p-3">
                <div className="text-2xl font-semibold mb-3">Experiences</div>
            </div>
            <div className="flex flex-col gap-8">
                {
                    props.experience.map((exp: any, index: number) =>
                        <ExpCard key={index} {...exp} />
                    )
                }
            </div>
            <Divider my="md" />
            <div className="p-3">
                <div className="text-2xl font-semibold mb-3">Certifications</div>
            </div>
            <div>
                {
                    props.certifications.map((cert: any, index: number) =>
                        <CertificationCard key={index} {...cert} />
                    )
                }
            </div>

        </div>
    )
}