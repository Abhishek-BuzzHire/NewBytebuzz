'use client'

import { Code } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroProps {
    icon?: React.ReactNode;
    heading: string;
    description: string;
    button: {
        text: string;
        icon?: React.ReactNode;
        url: string;
    };
    trustText?: string;
    imageSrc?: string;
    imageAlt?: string;
    onScroll?: () => void;
}

const HeroSection: React.FC<HeroProps> = ({ icon = <Code className="size-6" />,
    heading,
    description,
    button,
    trustText,
    imageSrc = "/hero-sec2.jpg",
    imageAlt = "bytebuzz",
    onScroll }: HeroProps) => {
    return (
        <div>
            <section className="flex justify-center py-20">
                <div className="container">
                    <div className="flex flex-col gap-5">
                        <div className="relative flex flex-col gap-5">
                            <div
                                style={{
                                    transform: "translate(-50%, -50%)",
                                }}
                                className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] rounded-full border [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] p-16 md:size-[1300px] md:p-32"
                            >
                                <div className="size-full rounded-full border p-16 md:p-32">
                                    <div className="size-full rounded-full border"></div>
                                </div>
                            </div>
                            <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20">
                                {icon}
                            </span>
                            <h2 className="mx-auto max-w-5xl text-center text-3xl font-medium text-balance md:text-5xl">
                                {heading}
                            </h2>
                            <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-xl text-lg">
                                {description}
                            </p>
                            <div className="flex flex-col items-center justify-center gap-3 pt-3 pb-12">
                                <Button size="lg" asChild onClick={onScroll}>
                                    <a>
                                        {button.text}{button.icon}
                                    </a>
                                </Button>
                                {trustText && (
                                    <div className="text-xs text-muted-foreground"></div>
                                )}
                            </div>
                        </div>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={3072}
                            height={3072}
                            className="h-full max-h-[700px] w-full max-w-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection;    