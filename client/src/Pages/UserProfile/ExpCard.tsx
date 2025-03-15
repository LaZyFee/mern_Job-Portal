import { Button } from "@mantine/core"
import { useState } from "react";
import { ExpInput } from "./ExpInput";

export const ExpCard = (props: any) => {
    const [edit, setEdit] = useState(false);




    return !edit ? <div className="flex flex-col gap-2">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                    <img src={`/assets/Icons/${props.company}.png`} alt=" Google" className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">{props.title}</div>
                    <div className="text-sm text-mine-shaft-300">{props.company} &bull; {props.location}</div>
                </div>
            </div>
            <p className="text-sm text-mine-shaft-300">
                {props.startDate} - {props.endDate}
            </p>
        </div>
        <div className="text-sm text-mine-shaft-300 text-justify">
            {props.description}
        </div>
        {props.edit && <div className="flex gap-5">
            <Button color="brightSun.4" variant="outline" onClick={() => setEdit(true)}>Edit</Button>
            <Button color="red.8" variant="light">Delete</Button>
        </div>}
    </div> : <ExpInput setEdit={setEdit} description={props.description} title={props.title} company={props.company} location={props.location} startDate={props.startDate} endDate={props.endDate} />


}