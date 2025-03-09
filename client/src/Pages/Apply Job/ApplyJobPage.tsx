import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { ApplyJobComp } from "./ApplyJobComp"



export const ApplyJobPage = () => {


    return (
        <div className="p-4 font-['poppins']">
            <Divider size={"lg"} />
            <Link className="my-4 inline-block" to="/job-desc">
                <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="brightSun.4">
                    Back </Button>
            </Link>
            <ApplyJobComp />
        </div>
    )
}