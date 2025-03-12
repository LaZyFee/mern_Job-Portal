import { IconAnchor } from "@tabler/icons-react"
import { Signup } from "./Signup"
import { Login } from "./Login"
import { useLocation } from "react-router-dom";

export const AuthenticationPage = () => {

    const location = useLocation();
    return (
        <div className="font-['poppins'] overflow-hidden">
            <div className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-1000 ${location.pathname === '/signup' ? "-translate-x-1/2" : "translate-x-0"}`}>
                <Login />
                <div className={`w-1/2 h-full bg-mine-shaft-900 flex gap-5 flex-col items-center justify-center transition-all ease-in-out duration-1000 ${location.pathname === '/signup' ? "rounded-r-[200px]" : "rounded-l-[200px]"}`}>
                    <div className="flex gap-1 items-center text-bright-sun-400">
                        <IconAnchor className="h-16 w-16" stroke={2.5} />
                        <h1 className="text-6xl font-semibold">JobHook</h1>
                    </div>
                    <h3 className="text-2xl font-semibold text-mine-shaft-200">Find the right job for you</h3>
                </div>
                <Signup />
            </div>
        </div>
    )
}