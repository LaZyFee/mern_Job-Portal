import WorkingGirl from "/assets/Working/Girl.png"
import { work } from "../../assets/Data/Data"
import { Avatar } from "@mantine/core";
import AvatarImage2 from "/assets/avatar1.png"


export const Working = () => {

    return (

        <div className="mt-20 pb-5">
            <h1 className="text-4xl text-center font-bold mb-3 text-mine-shaft-100">
                How it <span className="text-bright-sun-400">Works</span>
            </h1>

            <p className="text-xl w-1/2 mx-auto text-center text-mine-shaft-300 mb-5">Effortlessly navigate through the process and land your dream job</p>

            <div className="flex px-16 justify-between items-center">
                <div className="relative">
                    <img src={WorkingGirl} alt="working girl" className="w-[30rem]" />
                    <div className="flex flex-col items-center top-[15%] absolute right-0 gap-2 border border-bright-sun-400 p-2 rounded-xl py-3 px-1 backdrop-blur-md w-36">
                        <Avatar src={AvatarImage2} alt="it's me" className="!h-16 !w-16" />
                        <h3 className="text-sm font-semibold text-mine-shaft-200 text-center">Complete your profile</h3>
                        <p className="text-xs text-mine-shaft-300 text-center">70% Completed</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {
                        work.map((item, index) => {
                            return (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="p-2 5 bg-bright-sun-300 rounded-full">
                                        <img src={`/assets/Working/${item.name}.png`} alt={item.name} className="h-12 w-12" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-mine-shaft-200 text-xl">{item.name}</div>
                                        <div className="text-mine-shaft-300">{item.desc}</div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    );
}