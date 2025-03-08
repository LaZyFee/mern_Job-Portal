import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { JobDescription } from "./JobDescription"
import { RecommendedJobs } from "./RecommendedJobs"

export const JobDescPage = () => {
    return (
        <div className="p-4 font-['poppins']">
            <Divider size={"lg"} />
            <Link className="my-4 inline-block" to="/find-jobs">
                <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="brightSun.4">
                    Back </Button>
            </Link>
            <div className="flex gap-5 justify-around">
                <JobDescription />
                <RecommendedJobs />
            </div>
        </div>
    )
}