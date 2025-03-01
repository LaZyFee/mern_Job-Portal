import { Divider, RangeSlider } from "@mantine/core"
import { dropdownData } from "../../assets/Data/JobsData"
import { MultiSelectCreatable } from "./MultiSelect"
import { useState } from "react";

export const SearchJobs = () => {
    const [value, setValue] = useState<[number, number]>([0, 50]);

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
            <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex justify-between">
                    <div>Salary</div>
                    <div>💲{value[0]} - 💲{value[1]}  </div>
                </div>
                <RangeSlider size="xs" color="brightSun.4" value={value} onChange={setValue}

                    labelTransitionProps={{
                        transition: 'skew-down',
                        duration: 150,
                        timingFunction: 'linear',
                    }} />
            </div>

        </div>
    )
}