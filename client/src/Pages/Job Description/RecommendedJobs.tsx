import { jobList } from "../../assets/Data/JobsData"
import { JobCard } from "../Find Jobs/JobCard"



export const RecommendedJobs = () => {
    return (

        <div>
            <h1 className="text-xl font-semibold mb-5">Recommended Jobs</h1>

            <div className="flex flex-col flex-wrap gap-5 justify-between">
                {
                    jobList.map((job, index) => index < 5 && <JobCard key={index} {...job} />)
                }
            </div>



        </div>
    )
}