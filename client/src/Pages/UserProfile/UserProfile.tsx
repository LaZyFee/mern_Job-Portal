import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core";
import BannerImage from "/assets/Profile/banner.jpg";
import AvatarImage from "/assets/avatar.png";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import { ExpCard } from "./ExpCard";
import { CertificationCard } from "./CertificationCard";
import { useState } from "react";
import { SelectInput } from "../Post Job/SelectInput";
import fields from "../../assets/Data/Profile";
import { ExpInput } from "./ExpInput";

// UserProfile component
export const UserProfile = (props: any) => {
    // Select input fields
    const select = fields;

    // State to manage edit mode for different sections
    const [edit, setEdit] = useState([false, false, false, false, false]);

    // State to manage 'experience' section
    const [exp, setExp] = useState(false);

    // State to manage 'about' and 'skills' sections
    const [about, setAbout] = useState<string>(props.about);
    const [skills, setSkills] = useState<string[]>(props.skills);

    // Function to toggle edit mode for a section
    const handleEdit = (index: number) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    };

    return (
        <div className="w-3/4 mx-auto">
            {/* Profile Banner and Avatar */}
            <div className="relative">
                <img src={BannerImage} alt="Banner" className="rounded-t-2xl" />
                <img src={AvatarImage} alt="Avatar" className="absolute -bottom-1/3 left-3 w-48 h-48 rounded-full border-8 border-mine-shaft-900" />
            </div>

            {/* User Name and Role */}
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">
                    {props.name}
                    <ActionIcon variant="subtle" size="lg" radius="md" color="brightSun.4" onClick={() => handleEdit(0)}>
                        {edit[0] ? <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5} /> : <IconPencil className="w-4/5 h-4/5" stroke={1.5} />}
                    </ActionIcon>
                </div>
                {edit[0] ? (
                    <div className="grid grid-cols-2 gap-5">
                        <SelectInput {...select[0]} />
                        <SelectInput {...select[1]} />
                        <SelectInput {...select[2]} />
                    </div>
                ) : (
                    <>
                        <div className="text-lg flex gap-1 items-center">
                            <IconBriefcase className="h-4 w-4" stroke={1.5} /> {props.role} &bull; {props.company}
                        </div>
                        <div className="text-md flex gap-1 items-center text-mine-shaft-300">
                            <IconMapPin className="h-4 w-4" stroke={1.5} /> {props.location}
                        </div>
                    </>
                )}
            </div>

            {/* About Section */}
            <Divider my="md" />
            <div className="p-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">
                    About
                    <ActionIcon variant="subtle" size="lg" radius="md" color="brightSun.4" onClick={() => handleEdit(1)}>
                        {edit[1] ? <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5} /> : <IconPencil className="w-4/5 h-4/5" stroke={1.5} />}
                    </ActionIcon>
                </div>
                {edit[1] ? (
                    <Textarea value={about} onChange={(event) => setAbout(event.currentTarget.value)} placeholder="Write about yourself" autosize minRows={3} />
                ) : (
                    <div className="text-sm text-justify text-mine-shaft-300">{props.about}</div>
                )}
            </div>

            {/* Skills Section */}
            <Divider my="md" />
            <div className="p-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">
                    Skills
                    <ActionIcon variant="subtle" size="lg" radius="md" color="brightSun.4" onClick={() => handleEdit(2)}>
                        {edit[2] ? <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5} /> : <IconPencil className="w-4/5 h-4/5" stroke={1.5} />}
                    </ActionIcon>
                </div>
                {edit[2] ? (
                    <TagsInput placeholder="Add Skills" splitChars={[",", " ", "|"]} value={skills} onChange={setSkills} />
                ) : (
                    <div className="flex flex-wrap gap-3">
                        {props.skills.map((skill: string, index: number) => (
                            <div key={index} className="bg-bright-sun-300/15 text-sm font-medium rounded-3xl text-bright-sun-400 px-3 py-1">
                                {skill}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Experiences Section */}
            <Divider my="md" />
            <div className="p-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">
                    Experiences
                    <div className="flex gap-3">
                        <ActionIcon variant="subtle" size="lg" radius="md" color="brightSun.4" onClick={() => setExp(true)}>
                            {edit[3] ? <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5} /> : <IconPlus className="w-4/5 h-4/5" stroke={1.5} />}
                        </ActionIcon>
                        <ActionIcon variant="subtle" size="lg" radius="md" color="brightSun.4" onClick={() => handleEdit(3)}>
                            {edit[3] ? <IconDeviceFloppy className="w-4/5 h-4/5" stroke={1.5} /> : <IconPencil className="w-4/5 h-4/5" stroke={1.5} />}
                        </ActionIcon>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    {
                        props.experience.map((exp: any, index: number) => <ExpCard key={index} {...exp} edit={edit[3]} setEdit={setExp} />)
                    }
                    <ExpInput edit={edit[3]} />
                </div>
            </div>

            {/* Certifications Section */}
            <Divider my="md" />
            <div className="p-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between">
                    Certifications
                </div>
                <div>
                    {props.certifications.map((cert: any, index: number) => <CertificationCard key={index} {...cert} />)}
                </div>
            </div>
        </div>
    );
};
