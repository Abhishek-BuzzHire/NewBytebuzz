"use client";

import React from "react";
import { serviceSec } from "@/data/data";

const services = serviceSec;

const ServiceSection = React.forwardRef<HTMLDivElement>((_props, ref) => {

  return (
    <section className="flex justify-center py-20" ref={ref}>
      <div className="container relative">
        <div className="absolute inset-0 -z-10 [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:48px_48px] text-neutral-300 dark:text-neutral-700 [mask-image:linear-gradient(to_bottom,transparent,white,white,white,transparent)]" />

        <div className="mx-auto space-y-12 lg:px-20">
          <div className="px-4 space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Our Core IT Servcies
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              We craft digital experiences that captivate and convert, bringing
              your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index}>
                  <a href={`/services/${service.slug}`} target="_blank">
                    <div
                      className="group relative h-96 w-full overflow-hidden rounded-lg bg-cover bg-center p-8 pt-4 transition-shadow hover:shadow-xl"

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
                        <div className="details-container space-y-4 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full">
                          <div className="space-y-2 ">
                            {service.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center gap-2">
                                <span className="text-lg font-medium text-white">{item}</span>
                              </div>
                            ))}
                          </div>

                          <p className="text-md leading-relaxed text-gray-200 max-h-40 overflow-auto">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

ServiceSection.displayName = "ServiceSection"

export { ServiceSection };
