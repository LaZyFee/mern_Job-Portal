import { useState } from "react";
import { searchFields } from "../../assets/Data/TalentData";
import { MultiSelectCreatable } from "../Find Jobs/MultiSelect";
import { Divider, Input, RangeSlider } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";



export const SearchTalent = () => {
    const [value, setValue] = useState<[number, number]>([0, 50]);

    return (
        <div className="flex gap-4 px-5 py-8 items-center !text-mine-shaft-100">
            <div className="flex items-center gap-2">
                <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-2"><IconUserCircle size={20} /></div>
                <div>
                    <Input variant="unstyled" placeholder="Talent Name" className="[&_input]:!placeholder-mine-shaft-300" />
                </div>
            </div>
            {
                searchFields.map((item, index) => {
                    return (
                        <>
                            <div key={index} className="w-1/5">
                                <MultiSelectCreatable title={item.title} options={item.options} icon={item.icon} />
                            </div>
                            <Divider orientation="vertical" size="sm" />
                        </>
                    )
                })
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