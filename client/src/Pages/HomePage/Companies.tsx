import Marquee from "react-fast-marquee"

import { companies } from "../../assets/Data/Data"


export const Companies = () => {
    return (
        <div className="mt-20 pb-5">
            <h1 className="text-4xl text-center font-bold text-mine-shaft-100 mb-20">
                Trusted By <span className="text-bright-sun-400">1000+</span> Companies
            </h1>

            <Marquee pauseOnHover={true}>
                {companies.map((company: string, index: number) => (
                    <div key={index} className="mx-8 py-1 hover:bg-mine-shaft-900 rounded-lg cursor-pointer">
                        <img src={`/assets/Companies/${company}.png`} alt={company} className="h-14" />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};
