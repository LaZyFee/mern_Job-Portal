import { Badge, Tabs } from "@mantine/core"
import { JobDescription } from "../Job Description/JobDescription"
import { talents } from "../../assets/Data/TalentData"
import { TalentCard } from "../Find Talent/TalentCard"

export const PostedJobDesc = () => {
    return (
        <div className="mt-5 w-3/4 px-5">

            <h3 className="text-2xl font-semibold">Software Engineer <Badge color="brightSun.4" variant="light" ml={"sm"} size="sm">Full Time</Badge> </h3>

            <p className="font-medium text-mine-shaft-300">New York, USA</p>
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="overview">
                    <Tabs.List className="[&_button]:!text-xl font-semibold [&_button[data-active='true']]:!text-bright-sun-400">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="overview" className="[&>div]:w-full mt-5">
                        <JobDescription edit />
                    </Tabs.Panel>
                    <Tabs.Panel value="applicants">
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 [&>div]:w-full">
                            {
                                talents.map((talent, index) => <TalentCard key={index} {...talent} posted />)
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="invited">
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 [&>div]:w-full">
                            {
                                talents.map((talent, index) => <TalentCard key={index} {...talent} invited />)
                            }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>




        </div>
    )
}