import { Divider } from "@mantine/core"
import { UserProfile } from "./UserProfile"
import { profile } from "../../assets/Data/TalentData"

export const UserProfilePage = () => {
    return (
        <div className="font-['poppins']">
            <Divider size={"lg"} />
            <UserProfile {...profile} />
        </div>
    )
}