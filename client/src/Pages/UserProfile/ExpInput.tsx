import { Button, Checkbox, Textarea } from "@mantine/core"
import fields from "../../assets/Data/Profile"
import { SelectInput } from "./SelectInput"
import { useState } from "react"
import { MonthPickerInput } from "@mantine/dates"

export const ExpInput = (props: any) => {

    const select = fields
    const [description, setDescription] = useState(props.description)
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [currentJob, setCurrentJob] = useState(false);



    return (
        <div className="flex flex-col gap-3">
            <div className="text-3xl font-semibold mb-5"> Edit Experience</div>
            <div>
                <div className="grid grid-cols-2 gap-5">
                    <SelectInput {...select[0]} />
                    <SelectInput {...select[1]} />
                </div>
                <SelectInput {...select[2]} />
                <Textarea
                    withAsterisk
                    label="Job Summary"
                    value={description}
                    onChange={(event) => setDescription(event.currentTarget.value)} placeholder="Write about your job...." autosize minRows={3} />
                <div className="grid grid-cols-2 gap-5 mb-5">

                    <MonthPickerInput
                        withAsterisk
                        maxDate={endDate || undefined}
                        label="Start date"
                        placeholder="Pick date"
                        value={startDate}
                        onChange={setStartDate}
                    />
                    <MonthPickerInput
                        withAsterisk
                        minDate={startDate || undefined}
                        disabled={currentJob}
                        label="End date"
                        placeholder="Pick date"
                        value={endDate}
                        onChange={setEndDate}
                    />
                    <Checkbox label="Current Job" autoContrast checked={currentJob} onChange={(event) => setCurrentJob(event.currentTarget.checked)} />
                </div>
                <div className="flex gap-5">
                    <Button color="brightSun.4" variant="outline" onClick={() => props.setEdit(false)}>Save</Button>
                    <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
                </div>
            </div>
        </div >
    )
}