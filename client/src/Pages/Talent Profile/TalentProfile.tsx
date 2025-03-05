import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { Profile } from "./Profile"
import { profile } from "../../assets/Data/TalentData"
import { RecommendedTalent } from "./RecommendedTalent"


export const TalentProfile = () => {

    return (
        <div className="p-4 font-['poppins']">
            <Divider size={"lg"} />
            <Link className="my-4 inline-block" to="/find-talent">
                <Button leftSection={<IconArrowLeft size={20} />} variant="light" color="brightSun.4">
                    Back </Button>
            </Link>
            <div className="flex gap-5">
                <Profile {...profile} />
                <RecommendedTalent />
            </div>
        </div>
    )
}