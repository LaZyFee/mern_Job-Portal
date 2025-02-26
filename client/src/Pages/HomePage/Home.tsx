import { Companies } from "./Companies"
import { Footer } from "./Footer"
import { HeroSection } from "./HeroSection"
import { JobCategory } from "./JobCategory"
import { Subscribe } from "./Subscribe"
import { Testimonials } from "./Testimonials"
import { Working } from "./Working"

export const Home = () => {
    return (
        <div>
            <HeroSection />
            <Companies />
            <JobCategory />
            <Working />
            <Testimonials />
            <Subscribe />
            <Footer />
        </div>
    )
}