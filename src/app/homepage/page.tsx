'use client'
import { ArrowDown } from "lucide-react";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Cta } from "@/components/Cta";
import HeroSection from "@/components/HeroSection";
import { ServiceSection } from "@/components/SeriviceSection";
import { Team } from "@/components/TeamSection";
import { useRef } from "react";

const HomePage = () => {
    const refs = {
        about: useRef<HTMLDivElement>(null),
        service: useRef<HTMLDivElement>(null),
    };

    const handleScroll = (key: keyof typeof refs) => {
        refs[key].current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="overflow-hidden">
            <HeroSection onScroll={()=>handleScroll("about")} heading={"IT Solutions Tailored for Your Business Needs"} description={"We make businesses go big through our tech services that optimizes and enhances your business activities everyday."} button={{
                text: "Explore More",
                icon: <ArrowDown />,
                url: "/"
            }} />

            <AboutSection ref={refs.about} onScroll={()=>handleScroll("service")} heading={"How It All Started"}
                description={"With over 12 years of experience in search, recruitment, and consulting, and the successful journey of <a target='_blank' href='https://buzzhire.in'><span class='text-red-600'>Buzz</span><span class='text-indigo-600'>Hire</span></a>, we decided to take the next big step forward  venturing into the world of technology. ByteBuzz (a unit of BuzzHire Private Limited) was established with a clear mission: to empower businesses to harness the power of technology in the smartest and most efficient way possible. At ByteBuzz, we combine our deep industry expertise with the best technologies, tailoring solutions to each client's unique needs. Our goal is to deliver seamless, scalable, and future-ready services  driven by our unwavering commitment to quality, innovation, and excellence."}
                linkText="See our services"
                linkUrl=""
            />
            <ServiceSection ref={refs.service} />
            <Cta heading={"Ready to Scale"} description={"Harness the power of innovation to stay ahead in an ever-changing digital world"} buttons={{
                primary: {
                    text: "Book a call",
                    url: "/contact"
                },
                secondary: {
                    text: "Explore more",
                    url: "/about"
                },
            }} />
            <Team />
            {/* <Clientele /> */}
            <ContactSection />
        </div>
    )
}

export default HomePage;    