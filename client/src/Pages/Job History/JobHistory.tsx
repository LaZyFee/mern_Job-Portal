import { Tabs } from "@mantine/core"
import { jobList } from "../../assets/Data/JobsData"
import { Card } from "./Card"

export const JobHistory = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-5">Job History</h2>
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="applied">
                    <Tabs.List className="[&_button]:!text-xl font-semibold [&_button[data-active='true']]:!text-bright-sun-400">
                        <Tabs.Tab value="applied">Applied</Tabs.Tab>
                        <Tabs.Tab value="saved">Saved</Tabs.Tab>
                        <Tabs.Tab value="offerd">Offerd</Tabs.Tab>
                        <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>

                    </Tabs.List>
                    <Tabs.Panel value="applied"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} applied />)
                        }
                    </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="saved"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} saved />)
                        }
                    </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="offerd"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} offerd />)
                        }
                    </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="interviewing"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
                        {
                            jobList.map((job, index) => <Card key={index} {...job} interviewing />)
                        }
                    </div>
                    </Tabs.Panel>
                </Tabs>
            </div></div>
    )
}