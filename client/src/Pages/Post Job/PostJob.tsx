import { TagsInput } from "@mantine/core";
import { fields } from "../../assets/Data/PostJob"
import { SelectInput } from "./SelectInput";
import { TextEditor } from "./RichTextEditor";

export const PostJob = () => {
    const select = fields;
    return (
        <div className="w-4/5 mx-auto">
            <div className="text-2xl font-semibold mb-5">
                Post a Job
            </div>
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                    <SelectInput {...select[0]} />
                    <SelectInput {...select[1]} />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <SelectInput {...select[2]} />
                    <SelectInput {...select[3]} />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <SelectInput {...select[4]} />
                    <SelectInput {...select[5]} />
                </div>
                <TagsInput label="Skills" placeholder="Enter Skills" clearable acceptValueOnBlur splitChars={[',', ' ', '|']} withAsterisk />
                <div>
                    <h6 className="text-sm font-medium">Job Description</h6>
                    <TextEditor />
                </div>
            </div>
        </div>
    )
}