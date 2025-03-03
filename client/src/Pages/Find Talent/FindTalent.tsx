import { Divider } from "@mantine/core"
import { SearchTalent } from "./SearchTalent"
import { Talents } from "./Talents"

export const FindTalent = () => {
    return (
        <div>
            <Divider size={"lg"} />
            <SearchTalent />
            <Divider size={"lg"} />
            <Talents />
        </div>
    )
}