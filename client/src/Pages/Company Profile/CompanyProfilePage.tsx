import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"
import { Company } from "./Company"
import { SimilarComapnies } from "./SimilarComapnies"


export const CompanyProfilePage = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4 font-['poppins']">
            <Divider size={"lg"} />
            <Button
                leftSection={<IconArrowLeft size={20} />}
                variant="light"
                color="brightSun.4"
                my={"md"}
                onClick={() => navigate(-1)}
            >
                Back
            </Button>
            <div className="flex justify-around gap-5">
                <Company />
                <SimilarComapnies />
            </div>
        </div>
    )
}