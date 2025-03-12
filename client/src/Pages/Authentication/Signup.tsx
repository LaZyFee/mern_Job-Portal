import { Anchor, Button, Checkbox, rem, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { Link } from "react-router-dom"



export const Signup = () => {


    return (
        <div className="w-1/2 px-20 flex flex-col gap-5 justify-center">
            <h2 className="text-2xl font-semibold">Create Account</h2>

            <TextInput withAsterisk label="Full Name" placeholder="Your Name" />

            <TextInput withAsterisk label="Email" placeholder="Your Email" leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} />

            <TextInput withAsterisk label="Password" placeholder="Set Password" leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />} />

            <TextInput withAsterisk label="Confirm Password" placeholder="Confirm Password" leftSection={<IconLock
                style={{ width: rem(16), height: rem(16) }} />} />

            <Checkbox autoContrast label={<>I agree to the <Anchor className="text-bright-sun-400">Terms and Conditions</Anchor></>} />


            <Button autoContrast variant="filled" color="brightSun.4" >Sign Up</Button>


            <p className="mx-auto">Already have an account? <Link to="/login" className="text-bright-sun-400  hover:underline">Login</Link></p>


        </div>
    )
}