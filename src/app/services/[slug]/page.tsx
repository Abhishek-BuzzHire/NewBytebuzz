"use client";

import { ContactSection } from "@/components/ResContactSection";
import { servicesData, serviceSec } from "@/data/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";


const ServicePage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = use(params)
    const service = servicesData.find((s) => s.slug === slug);

    const bottomServices = serviceSec.filter(service => service.slug !== slug);

    if (!service) return notFound();

    return (
        <section className="px-4 pb-20">
            {/* Full Width Hero with Background Image */}
            <div
                className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat py-32"
                style={{
                    backgroundImage:
                        `url(${service.image})`,
                }}
            >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
                        {service.title}
                    </h1>
                </div>
            </div>

            {/* Intro Section */}
            <div className="py-16">
                <div className="px-2 lg:px-16 mb-12">
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-4">
                        {service.subhead}
                    </h2>
                    <p className="text-foreground text-xl leading-relaxed">
                        {service.description}
                    </p>
                </div>
                <div className="w-full bg-accent p-8 mt-8 mb-16 flex justify-center">
                    <div className="flex flex-wrap gap-8 justify-center lg:px-12">
                        {service.highlights.map((card, i) => (
                            <div key={i} className="border-border bg-background rounded-lg border p-8 transition-shadow hover:shadow-sm space-y-4">
                                <Image src={card.icon} alt={card.label} width={64} height={64} />
                                <p className="text-center">{card.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between gap-8 py-16 lg:px-12">
                    <div className="max-w-3xl space-y-8 text-left mb-8">
                        {service.sections.map((section, idx) => (
                            <div key={idx} className="space-y-2 lg:mb-16">
                                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-8">
                                    {section.heading}
                                </h2>
                                {section.content.map((para, i) => (
                                    para.type === "paragraph" ? (
                                        <p className="text-semibold text-md" key={i}>{para.text}</p>
                                    ) : (
                                        <ul key={i} className="list-disc pl-6 font-semibold space-y-2 text-xl">
                                            {para.items.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    )
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-1/3">
                        <ContactSection />
                    </div>
                </div>
            </div>
            <div className="flex flex-nowrap overflow-x-auto gap-8 px-8">
                {bottomServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div key={index}>
                            <a href={`/services/${service.slug}`}>
                                <div
                                    className="group relative h-76 w-84 lg:h-108 lg:w-120 overflow-hidden rounded-lg bg-cover bg-center p-8 pt-4 transition-shadow hover:shadow-xl"

                                    style={{
                                        backgroundImage: `url(/low-res/${service.image})`
                                    }}
                                >
                                    <div className="absolute inset-0 z-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/70" />
                                    <div className="absolute inset-0 z-0  bg-gradient-to-t from-transparent to-black/60 max-h-3/5" />
                                    <div className="relative z-10 flex h-full flex-col justify-between space-y-4 pt-4">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-muted/70 rounded-full p-3 backdrop-blur-sm">
                                                <Icon className="h-6 w-6 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-semibold text-white">
                                                {service.title}
                                            </h3>
                                        </div>
                                        <div className="details-container space-y-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full">
                                            <p className="text-md leading-relaxed text-gray-200">
                                                {service.description}
                                            </p>
                                            <div className="space-y-2">
                                                {service.items.map((item, itemIndex) => (
                                                    <div key={itemIndex} className="flex items-center gap-2">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-white" />
                                                        <span className="text-md font-medium text-white">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicePage;
