import { Button } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Card = (props: any) => {
    return (
        <Link to={`/job-desc/${props.id}`} className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-2xl transition-all duration-300 
                        hover:shadow-[0_4px_20px] hover:shadow-bright-sun-400 hover:scale-[1.02]">
            {/* Top Section */}
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img src={`/assets/Icons/${props.company}.png`} alt={props.company} className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                        <div className="font-semibold text-white">{props.jobTitle}</div>
                        <div className="text-xs text-mine-shaft-400">
                            {props.company} &#x2022; {props.applicants} Applicants
                        </div>
                    </div>
                </div>
                {props.saved ? <IconBookmarkFilled className="text-bright-sun-400 cursor-pointer transition-colors duration-200 hover:text-bright-sun-400" /> : <IconBookmark className="text-mine-shaft-400 cursor-pointer transition-colors duration-200 hover:text-bright-sun-400" />}
            </div>

            {/* Job Details (Experience, Type, Location) */}
            <div className="flex flex-wrap gap-2 text-xs">
                {["experience", "jobType", "location"].map((key) => (
                    <div
                        key={key}
                        className="py-2 px-3 bg-mine-shaft-800 rounded-lg text-bright-sun-400 transition-all duration-200 hover:bg-mine-shaft-700"
                    >
                        {props[key]}
                    </div>
                ))}
            </div>

            {/* Job Description */}
            <p className="text-xs text-mine-shaft-300 text-justify line-clamp-3">
                {props.description}
            </p>

            {/* Divider */}
            <div className="border-t border-mine-shaft-700"></div>

            {/* Footer (Salary & Posted Time) */}
            <div className="flex justify-between text-sm text-white">
                <div className="transition-all duration-200 hover:text-bright-sun-400">
                    💲{props.package}
                </div>
                <div className="flex items-center gap-1 text-mine-shaft-400 transition-all duration-200 hover:text-white">
                    <IconClockHour3 className="h-5 w-5" stroke={1.5} />
                    {
                        props.applied ? "Applied " : props.offerd || props.interviewing ? "Interviewed " : "Posted "
                    }
                    {props.postedDaysAgo} days ago
                </div>
            </div>
            {
                props.offerd &&
                <div className="flex gap-2">
                    <Button color="brightSun.4" fullWidth variant="outline">Accept
                    </Button>
                    <Button color="red.4" fullWidth variant="light">
                        Reject
                    </Button>
                </div>
            }
            {
                props.interviewing &&
                <div className="flex gap-1  text-sm items-center">
                    <IconCalendarMonth className="text-bright-sun-400 w-5 h-5" stroke={1.5} />
                    Sun, 25 Aug &bull; 10:00 AM
                </div>
            }
        </Link>
    );
};