import { Outlet } from "react-router-dom"
import { Header } from "../Components/Header/Header"

export const Main = () => {
    return (
        <div className="min-h-screen bg-mine-shaft-950">
            <Header />
            <Outlet />
        </div>
    )
}