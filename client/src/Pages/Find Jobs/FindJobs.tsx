import { Divider } from "@mantine/core"
import { SearchJobs } from "./SearchJobs"
import { Job } from "./Job"

export const FindJobs = () => {
    return (
        <div className="py-5">
            <Divider orientation="horizontal" size="lg" />
            <SearchJobs />
            <Divider orientation="horizontal" size="lg" />
            <Job />

        </div>
    )
}