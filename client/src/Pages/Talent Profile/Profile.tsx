import { Button, Divider } from "@mantine/core"
import BannerImage from "/assets/Profile/banner.jpg"
import AvatarImage from "/assets/avatar.png"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"



export const Profile = () => {
    return (
        <div className="w-2/3">
            <div className="relative">
                <img src={BannerImage} alt="Banner" className="rounded-t-2xl" />
                <img src={AvatarImage} alt="it's me" className="absolute -bottom-1/3 left-3  w-48 h-48 rounded-full border-8 border-mine-shaft-900" />
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">
                    Rabiul Rafee
                    <Button color="brightSun.4" variant="light">Message</Button>
                </div >
                <div className="text-lg flex gap-1 items-center">
                    <IconBriefcase className="h-4 w-4" stroke={1.5} /> Software Engineer &bull; Code Segment </div>
                <div className="text-md flex gap-1 items-center text-mine-shaft-300">
                    <IconMapPin className="h-4 w-4" stroke={1.5} /> Chittagong, Bangladesh
                </div>
            </div>
            <Divider my="md" size={"lg"} />

        </div>
    )
}