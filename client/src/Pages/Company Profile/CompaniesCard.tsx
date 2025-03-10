import { ActionIcon } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CompaniesCard = (props: any) => {
    return (
        <div>
            <div className="flex justify-between items-center rounded-lg p-2 bg-mine-shaft-900/40">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img src={`/assets/Icons/${props.name}.png`} alt={props.name} className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                        <div className="font-semibold text-white">{props.name}</div>
                        <div className="text-xs text-mine-shaft-400">
                            {props.employees} Employees
                        </div>
                    </div>
                </div>
                <ActionIcon color="brightSun.4" variant="subtle">
                    <IconExternalLink style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
            </div>
        </div>
    )
}