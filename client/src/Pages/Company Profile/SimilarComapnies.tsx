import { similar } from "../../assets/Data/Company"
import { CompaniesCard } from "./CompaniesCard"


export const SimilarComapnies = () => {


    return (

        <div className="w-1/4">
            <h3 className="text-xl font-semibold mb-5">SimilarComapnies</h3>

            <div className="flex flex-wrap gap-5 flex-col">
                {
                    similar.map((item, index) => <CompaniesCard key={index} {...item} />)
                }
            </div>

        </div>
    )
}