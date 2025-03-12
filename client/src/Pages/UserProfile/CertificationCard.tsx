export const CertificationCard = (props: any) => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img src={`/assets/Icons/${props.issuer}.png`} alt=" Google" className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-sm text-mine-shaft-300">{props.issueDate}</p>
                <p className="text-sm text-mine-shaft-300">ID: {props.certificateId}</p>
            </div>

        </div>
    )
}