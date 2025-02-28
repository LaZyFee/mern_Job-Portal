import { Outlet } from "react-router-dom"
import { Header } from "../Components/Header/Header"
import { Footer } from "../Components/Footer/Footer"

export const Main = () => {
    return (
        <div className="bg-mine-shaft-950">
            <Header />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}