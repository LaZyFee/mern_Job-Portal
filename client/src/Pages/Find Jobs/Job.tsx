import { jobList } from "../../assets/Data/JobsData"
import { JobCard } from "./JobCard"
import { SortButton } from "./SortButton"

export const Job = () => {
    return (
        <div>
            <div className="flex justify-between p-5">
                <div className="text-2xl font-bold text-mine-shaft-100">
                    Recommended Job
                </div>
                <SortButton />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto container">
                {
                    jobList.map((job, index) => <JobCard key={index} {...job} />)
                }
            </div>
        </div>
    )
}