import { talents } from "../../assets/Data/TalentData"
import { TalentCard } from "../Find Talent/TalentCard"



export const CompanyEmployees = () => {


    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-5">
            {
                talents.map((talent, index) => <TalentCard key={index} {...talent} />)
            }
        </div>
    )
}