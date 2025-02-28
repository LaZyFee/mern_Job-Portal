import { Divider } from "@mantine/core"
import { dropdownData } from "../../assets/Data/JobsData"
import { MultiSelectCreatable } from "./MultiSelect"

export const SearchJobs = () => {
    return (
        <div className="flex gap-4 px-5 py-8">
            {
                dropdownData.map((item, index) =>
                    <>
                        <div key={index} className="w-1/5">
                            <MultiSelectCreatable {...item} />
                        </div>
                        <Divider orientation="vertical" size="sm" />
                    </>
                )
            }
        </div>
    )
}