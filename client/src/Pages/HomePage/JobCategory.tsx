import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { jobCategory } from '../../assets/Data/Data';


export const JobCategory = () => {
    return (
        <div className="mt-20 pb-5">
            <h1 className="text-4xl text-center font-bold mb-3 text-mine-shaft-100">
                Browse <span className="text-bright-sun-400">Job</span> Category
            </h1>

            <p className="text-xl w-1/2 mx-auto text-center text-mine-shaft-300 mb-5">Explore diverse job opportunities tailored to your skills. Start your career journey today!</p>

            <Carousel
                slideSize="22%"
                slideGap="md"
                loop
                className="
            focus-visible:[&_button]:!outline-none 
             [&_button]:!bg-bright-sun-400 
             [&_button]:!border-none  
             [&_button]:opacity-0 hover:[&_button]:opacity-100 
             "
                nextControlIcon={<IconArrowRight className="h-8 w-8" />}
                previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
            >
                {
                    jobCategory.map((job, index) => {
                        return (
                            <Carousel.Slide key={index}>
                                <div
                                    className="flex flex-col items-center w-64 gap-2 my-5 border 
                   border-bright-sun-400 p-5 rounded-xl 
                   hover:cursor-pointer hover:shadow-[0_0_5px_2px_black]  
                   transition duration-300 ease-in-out shadow-bright-sun-300"
                                >
                                    <div className="p-2 rounded-full bg-bright-sun-400 flex justify-center items-center w-16 h-16">
                                        <img
                                            src={`/assets/Category/${job.name}.png`}
                                            alt={`${job.name}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="text-mine-shaft-100 text-xl font-semibold">{job.name}</div>
                                    <div className="text-sm text-center text-mine-shaft-300">{job.desc}</div>
                                    <div className="text-bright-sun-400 text-lg">{job.jobs}+ new jobs</div>
                                </div>
                            </Carousel.Slide>
                        )
                    })}
            </Carousel>
        </div>
    )
}