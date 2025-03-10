import { Divider } from "@mantine/core"
import { PostedJob } from "./PostedJob"


export const PostedJobPage = () => {
    return (
        <div className="p-4 font-['poppins']">
            <Divider size={"lg"} />
            <PostedJob />
            <div className="flex justify-around gap-5">

            </div>
        </div>
    )
}