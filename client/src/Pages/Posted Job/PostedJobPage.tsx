import { Divider } from "@mantine/core"
import { PostedJob } from "./PostedJob"
import { PostedJobDesc } from "./PostedJobDesc"


export const PostedJobPage = () => {
    return (
        <div className="p-4 font-['poppins']">
            <Divider size={"lg"} />
            <div className="flex justify-around gap-5">
                <PostedJob />
                <PostedJobDesc />
            </div>
        </div>
    )
}