import { talents } from "../../assets/Data/TalentData"
import { SortButton } from "../Find Jobs/SortButton"
import { TalentCard } from "./TalentCard"

export const Talents = () => {
    return (
        <div>
            <div className="flex justify-between p-5">
                <div className="text-2xl font-bold text-mine-shaft-100">
                    Talents
                </div>
                <SortButton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto container">
                {
                    talents.map((talent, index) => <TalentCard key={index} {...talent} />)
                }
            </div>
        </div>
    )
}