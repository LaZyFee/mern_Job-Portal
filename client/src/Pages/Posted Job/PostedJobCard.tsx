export const PostedJobCard = (props: any) => {


    return (


        <div className="bg-mine-shaft-900 rounded-xl p-2 border-l-2 border-l-bright-sun-400 hover:shadow-[0_4px_20px] hover:shadow-bright-sun-400">
            <h5 className="text-sm font-semibold">{props.jobTitle}</h5>
            <p className="text-xs text-mine-shaft-300 font-medium">{props.location}</p>
            <p className="text-xs text-mine-shaft-300">{props.posted}</p>

        </div>
    )
}