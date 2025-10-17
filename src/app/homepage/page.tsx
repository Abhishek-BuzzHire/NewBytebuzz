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
                description={"ByteBuzz (a unit of BuzzHire Private Limited) was established with a clear mission to empower businesses to harness the power of technology in the smartest and most efficient way possible. At ByteBuzz, we bring together the industry's best technologies, tailored to each client's unique needs, and deliver them as seamless, scalable services driven by our unwavering commitment to quality and excellence."}
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