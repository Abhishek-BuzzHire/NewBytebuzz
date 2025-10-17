import { aboutData } from "@/data/data";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface Feature {
    id: string;
    title: string;
    description: string;
    image: string;
}

interface AboutSec {
    heading?: string;
    description?: string;
    linkUrl?: string;
    linkText?: string;
    features?: Feature[];
    onScroll: () => void;
}


const AboutSection = React.forwardRef<HTMLDivElement, AboutSec>(({
    heading,
    description,
    linkText,
    features = aboutData,
    onScroll
}, ref) => {
    return (
        <section className="flex justify-center py-20" ref={ref}>
            <div className="relative container flex flex-col gap-16 lg:px-16">
                <div className="absolute inset-0 -z-10 ">
                    <div className="absolute top-0 left-[10%] size-[300px] rounded-full bg-fuchsia-500/30 blur-[120px]" />
                    <div className="absolute top-[40%] right-[20%] size-[400px] rounded-full bg-blue-500/30 blur-[120px]" />
                    <div className="absolute bottom-0 left-[30%] size-[250px] rounded-full bg-teal-400/30 blur-[120px]" />
                </div>
                <div className="px-4 lg:max-w-full">

                    <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:text-5xl lg:mb-6">
                        {heading}
                    </h2>
                    <p className="text-muted-foreground mb-8 lg:text-lg">{description}</p>
                    <a  
                        onClick={onScroll}
                        className="group flex items-center text-xs font-medium md:text-base lg:text-lg hover:cursor-pointer"
                    >
                        {linkText}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {features[0] && (
                        <div className="flex flex-col overflow-clip rounded-xl md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
                            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                                <Image
                                    src={features[0].image}
                                    alt={features[0].title}
                                    className="aspect-16/9 h-full w-full object-cover object-center"
                                    width={600}
                                    height={600}
                                />
                            </div>
                            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                    {features[0].title}
                                </h3>
                                <p className="text-muted-foreground lg:text-lg">
                                    {features[0].description}
                                </p>
                            </div>
                        </div>
                    )}
                    {features.slice(1).map((feature) => (
                        <div
                            key={feature.id}
                            className="flex flex-col overflow-clip rounded-xl"
                        >
                            <div>
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    className="aspect-16/9 h-full w-full object-cover object-top"
                                    width={600}
                                    height={600}
                                />
                            </div>
                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground lg:text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <a  href="/about" target="_blank"
                        className="group flex justify-end"
                    >   <Button variant={"outline"} className="items-center text-xs font-medium md:text-base lg:text-lg hover:cursor-pointer">
                        Know more About us
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </a>
            </div>
            
        </section>
    );
}
);

AboutSection.displayName = "AboutSection";

export { AboutSection };
