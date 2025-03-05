import { talents } from "../../assets/Data/TalentData"
import { TalentCard } from "../Find Talent/TalentCard"

export const RecommendedTalent = () => {
    return (
        <div>
            <div className="text-2xl font-bold text-mine-shaft-100 mb-5">RecommendedTalent</div>
            <div className="flex flex-col flex-wrap gap-5">
                {
                    talents.map((talent, index) => <TalentCard key={index} {...talent} />)
                }
            </div>
        </div>
    )
}