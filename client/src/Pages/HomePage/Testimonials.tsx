import { Avatar, Rating } from "@mantine/core"
import { testimonials } from "../../assets/Data/Data"
import AvatarImage from "/assets/avatar.png"


export const Testimonials = () => {
    return (
        <div className="mt-20 pb-5">
            <h1 className="text-4xl text-center font-bold mb-3 text-mine-shaft-100">
                What <span className="text-bright-sun-400">User</span>says about us?
            </h1>
            <div className="flex justify-evenly">
                {
                    testimonials.map((item, index) => {
                        return (
                            <div className="flex flex-col gap-3 p-4 border border-bright-sun-400 rounded-xl bg-mine-shaft-900 w-[23%] text-white shadow-md" key={index}>
                                <div className="flex items-center gap-4">
                                    <Avatar src={AvatarImage} alt="it's me" className="!h-14 !w-14 rounded-full" />
                                    <div className="flex flex-col">
                                        <div className="text-lg font-semibold text-white">{item.name}</div>
                                        <Rating value={item.rating} readOnly fractions={2} className="text-bright-sun-400" />
                                    </div>
                                </div>
                                <p className="text-sm text-mine-shaft-300">{item.testimonial}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}