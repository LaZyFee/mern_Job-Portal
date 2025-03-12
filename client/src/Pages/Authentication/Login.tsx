import { Button, rem, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col gap-5 justify-center">
            <h2 className="text-2xl font-semibold">Login to Your Account</h2>

            <TextInput withAsterisk label="Email" placeholder="Your Email" leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} />

            <TextInput withAsterisk label="Password" placeholder="Set Password" leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />} />

            <Button autoContrast variant="filled" color="brightSun.4" >Sign Up</Button>

            <p className="mx-auto">New User? <Link to="/signup" className="text-bright-sun-400  hover:underline">Create an Account</Link></p>

        </div>
    )
}