/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Divider, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from "@mantine/core"
import { IconFileCv } from '@tabler/icons-react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


export const ApplyJobComp = () => {
    const icon = <IconFileCv size={18} stroke={1.5} />;
    const [preview, setPreview] = useState<boolean>(false);
    const [submit, setSubmit] = useState<boolean>(false);

    const navigate = useNavigate();

    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubmit = () => {
        setSubmit(true);
        let timer = 5;

        // Show initial toast
        Swal.fire({
            icon: "success",
            title: `Applied Successfully, Redirecting in ${timer} seconds...`,
            showConfirmButton: false,
            timerProgressBar: true,
            position: "top",
            toast: true,
        });

        // Update countdown dynamically
        const interval = setInterval(() => {
            timer--;

            if (timer > 0) {
                Swal.update({
                    title: `Applied Successfully, Redirecting in ${timer} seconds...`,
                });
            } else {
                clearInterval(interval);
                Swal.close();
                navigate("/find-jobs");
            }
        }, 1000);
    };
    return (
        <div className="w-2/3 mx-auto">
            <LoadingOverlay
                visible={submit}
                zIndex={1000}
                overlayProps={{ radius: 'md', blur: 3 }}
                loaderProps={{ type: 'bars', color: 'brightSun.4' }}
            />
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img src={`/assets/Icons/Google.png`} alt="Google" className="h-14 w-14 object-contain" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-semibold text-2xl text-white">Google</div>
                        <div className="text-lg text-mine-shaft-400">
                            Code Segment &bull; 3 days ago &bull; 3  Applicants
                        </div>
                    </div>
                </div>
            </div>
            <Divider my="xl" />
            <h3 className="text-xl font-semibold mb-5">Submit your Application</h3>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <TextInput label="Full Name" placeholder="Enter Full Name" withAsterisk />
                    <TextInput label="Email" placeholder="Enter Email" withAsterisk />
                </div>
                <div className="flex gap-10 [&>*]:w-1/2">
                    <NumberInput label="Phone Number" placeholder="Enter Phone Number" withAsterisk hideControls clampBehavior="strict" min={1000000000} max={9999999999} />
                    <TextInput label="Potfolio" placeholder="Enter Potfolio Link" withAsterisk />
                </div>
                <FileInput
                    leftSection={icon}
                    label="Attach your CV"
                    placeholder="Your CV"
                    leftSectionPointerEvents="none"
                    withAsterisk
                />
                <Textarea
                    placeholder="Your Cover Letter"
                    label="Cover Letter"
                    autosize
                    minRows={4}
                    withAsterisk
                />
                {!preview &&
                    <Button
                        variant="light"
                        color="brightSun.4"
                        className="mt-5"
                        onClick={handlePreview}
                    >
                        Preview Application
                    </Button>
                }
                {
                    preview &&
                    <div className="flex gap-5 [&>*]:w-1/2 items-center justify-center">
                        <Button
                            fullWidth
                            variant="light"
                            color="brightSun.4"
                            className="mt-5"
                            onClick={handlePreview}
                        >
                            Edit
                        </Button>
                        <Button
                            fullWidth
                            variant="filled"
                            color="brightSun.4"
                            className="mt-5"
                            onClick={handleSubmit}
                        >
                            Submit Application
                        </Button>
                    </div>
                }
            </div>
        </div>
    )
}