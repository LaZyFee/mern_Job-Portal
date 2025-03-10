import { jobList } from "../../assets/Data/JobsData"
import { JobCard } from "../Find Jobs/JobCard"

export const CompanyJob = () => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {
                jobList.map((job, index) => <JobCard key={index} {...job} />)
            }
        </div>
    )
}