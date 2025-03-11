import { Divider } from "@mantine/core"
import { JobHistory } from "./JobHistory"

export const JobHistoryPage = () => {
    return (
        <div className="p-4 font-['poppins']">
            <Divider size={"lg"} />
            <div className="my-5">
                <JobHistory />
            </div>
        </div>
    )
}