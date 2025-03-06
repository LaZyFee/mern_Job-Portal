import { Divider } from "@mantine/core"
import { PostJob } from "./PostJob"



export const PostJobPage = () => {
    return (
        <div className="p-4 font-['poppins']">
            <Divider size={"lg"} />
            <PostJob />
        </div>
    )
}