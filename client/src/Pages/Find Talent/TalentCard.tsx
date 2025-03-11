import { Avatar, Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBookmark, IconCalendarMonth, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { DateInput } from '@mantine/dates';
import { useState } from "react";
import { useRef } from 'react';
import { TimeInput } from '@mantine/dates';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TalentCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);
    return (
        <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-3 rounded-2xl transition-all duration-300 
                        hover:shadow-[0_4px_20px] hover:shadow-bright-sun-400 hover:scale-[1.02]">
            {/* Top Section */}
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-mine-shaft-800 rounded-full">
                        <Avatar src={`/assets/${props.image}.png`} alt={props.name} size={"lg"} />
                    </div>
                    <div>
                        <div className="font-semibold text-white">{props.name}</div>
                        <div className="text-xs text-mine-shaft-400">
                            {props.role} &#x2022; {props.company} Applicants
                        </div>
                    </div>
                </div>
                <IconBookmark className="text-mine-shaft-400 cursor-pointer transition-colors duration-200 hover:text-bright-sun-400" />
            </div>

            {/* Job Details (Experience, Type, Location) */}
            <div className="flex flex-wrap gap-2 text-xs">
                {
                    props.topSkills.map((skill: string, key: number) => (
                        <div
                            key={key}
                            className="py-2 px-3 bg-mine-shaft-800 rounded-lg text-bright-sun-400 transition-all duration-200 hover:bg-mine-shaft-700"
                        >
                            {skill}
                        </div>
                    ))}
            </div>

            {/* Job Description */}
            <p className="text-xs text-mine-shaft-300 text-justify line-clamp-3">
                {props.about}
            </p>

            {/* Divider */}
            <div className="border-t border-mine-shaft-700"></div>
            {
                props.invited ?
                    <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
                        <IconCalendarMonth stroke={1.5} />  Interview: 10 Aug,2025 10:00 AM
                    </div>
                    :
                    <>
                        <div className="flex justify-between text-sm text-white">
                            <div className="transition-all duration-200 hover:text-bright-sun-400">
                                {props.expectedCtc}
                            </div>
                            <div className="flex items-center gap-1 text-mine-shaft-400 transition-all duration-200 hover:text-white">
                                <IconMapPin className="h-5 w-5" stroke={1.5} />
                                {props.location}
                            </div>
                        </div>
                    </>
            }
            <div className="border-t border-mine-shaft-700"></div>
            {!props.invited &&

                <div className="[&>*]:w-1/2 [&>*]:p-1 flex justify-between items-center">
                    <Link to={"/talent-profile"}>
                        <Button color="brightSun.4" fullWidth variant="outline">Profile</Button>
                    </Link>
                    <div>
                        {props.posted ?
                            <Button color="brightSun.4" fullWidth variant="light" rightSection={<IconCalendarMonth className="h-5 w-5" stroke={1.5} />} onClick={open} >Schedule</Button>
                            :
                            <Button color="brightSun.4" fullWidth variant="light">Message</Button>}
                    </div>
                </div>
            }
            {
                props.invited &&
                <div className="flex gap-1 justify-between items-center">
                    <Button color="brightSun.4" fullWidth variant="outline">Accept</Button>
                    <Button color="red.4" fullWidth variant="outline">Reject</Button>
                </div>
            }
            <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                {/* Modal content */}
                <div className="flex flex-col gap-3">
                    <DateInput
                        value={value}
                        onChange={setValue}
                        label="Date"
                        placeholder="Enter Date"
                        minDate={new Date()}
                    />
                    <TimeInput label="Time" ref={ref} onClick={() => ref.current?.showPicker()} />
                    <Button color="brightSun.4" fullWidth variant="light">Scheduled</Button>
                </div>
            </Modal>
        </div >
    );
};