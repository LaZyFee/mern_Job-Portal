import { Avatar, Divider, Tabs } from "@mantine/core"
import { IconMapPin } from "@tabler/icons-react"
import BannerImage from "/assets/Profile/banner.jpg"
import { AboutCompany } from "./AboutCompany"
import { CompanyJob } from "./CompanyJob"
import { CompanyEmployees } from "./CompanyEmployees"
export const Company = () => {
    return (
        <div className="w-3/4">
            <div className="relative">
                <img src={BannerImage} alt="Banner" className="rounded-t-2xl" />
                <img src="/assets/Icons/Google.png" alt="it's me" className="absolute -bottom-1/4 left-5  w-36 h-36 rounded-3xl border-8 border-mine-shaft-900 bg-mine-shaft-900" />
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">
                    Google
                    <Avatar.Group>
                        <Avatar src="/assets/avatar.png" />
                        <Avatar src="/assets/avatar1.png" />
                        <Avatar src="/assets/avatar2.png" />
                        <Avatar>+10k</Avatar>
                    </Avatar.Group>
                </div >
                <div className="text-md flex gap-1 items-center text-mine-shaft-300">
                    <IconMapPin className="h-4 w-4" stroke={1.5} /> New York, USA
                </div>
            </div>
            <Divider my="md" />
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="about">
                    <Tabs.List className="[&_button]:!text-xl font-semibold [&_button[data-active='true']]:!text-bright-sun-400">
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                        <Tabs.Tab value="employee">Employees</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="about"><AboutCompany /></Tabs.Panel>
                    <Tabs.Panel value="jobs"><CompanyJob /></Tabs.Panel>
                    <Tabs.Panel value="employee"><CompanyEmployees /></Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}