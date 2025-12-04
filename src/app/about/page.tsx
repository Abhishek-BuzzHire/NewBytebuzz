import Image from "next/image";

const AboutPage = () => {
    return (
        <section className="flex justify-center py-20 md:px-20">
            <div className="container">
                <div className="mb-14 grid gap-5 text-center md:grid-cols-1 md:text-left">
                    <div className="px-8">
                        <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl text-center">Who <span className="text-primary">We</span> Are.</h1>
                        <p className="text-lg text-foreground lg:text-xl">ByteBuzz was established in September 2025 with a clear mission — to help businesses harness the power of technology in the smartest and most efficient way possible. <br />
                            At ByteBuzz, we integrate the industry&apos;s best technologies to match each customers unique needs and deliver them as a service, backed by our strong commitment to excellence. <br />

                            We believe in creating long-lasting partnerships rather than one-time projects. Our focus is on offering a superior customer experience through transparency, innovation, and reliability in everything we do.

                            Whether its digital transformation, automation, or end-to-end IT solutions, ByteBuzz is here to empower your business to grow smarter, faster, and stronger.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
                    <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
                        <div className="px-8">
                            <h1 className="mb-6 text-4xl font-bold lg:mb-10">How We <span className="text-primary">Born</span>.</h1>
                            <p className="mb-9 lg:text-xl">Every great idea begins with a simple question “Can we make this better?”
                                Thats how ByteBuzz was born. A small group of tech enthusiasts came together with one goal: to simplify technology and help businesses grow faster through smart, scalable IT solutions.
                                We started by helping startups automate their workflows and build solid digital foundations. What began as a side project soon became our passion — turning complex tech challenges into simple, powerful solutions.</p>
                            {/* <p className="text-muted-foreground">
                                
                            </p> */}
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                            <Image src="https://library.shadcnblocks.com/images/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg" alt="about 1" className="aspect-[0.7] w-full rounded-lg object-cover md:w-1/2" width={600} height={600}/>
                            
                            <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                            <Image src="https://library.shadcnblocks.com/images/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg" alt="about 2" className="aspect-[1.1] rounded-lg object-cover" width={600} height={600}/>
                            <Image src="https://library.shadcnblocks.com/images/block/photos/annie-spratt-vGgn0xLdy8s-unsplash.jpg" alt="about 3" className="aspect-[0.7] rounded-lg object-cover" width={600} height={600}/>
                                
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48">
                        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                            <Image src="https://library.shadcnblocks.com/images/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg" alt="about 4" className="aspect-[0.9] w-full rounded-lg object-cover md:w-1/2" width={600} height={600}/>
                           
                            <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                            <Image src="https://library.shadcnblocks.com/images/block/photos/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg" alt="about 5" className="aspect-[0.8] rounded-lg object-cover" width={600} height={600}/>
                            <Image src="https://library.shadcnblocks.com/images/block/photos/alvin-engler-bIhpiQA009k-unsplash.jpg" alt="about 6" className="aspect-[0.9] rounded-lg object-cover" width={600} height={600}/>
                            
                            </div>
                        </div>
                        <div className="px-8">
                            <h1 className="mb-8 text-4xl font-bold lg:mb-6">How It <span className="text-primary">Started.</span></h1>
                            <p className="mb-9 lg:text-xl">From our first client meeting over coffee to delivering enterprise-grade solutions for global brands, its been an incredible ride.
                                Weve grown into a team of developers, designers, and data experts who believe technology should be practical, beautiful, and impactful.
                                Every line of code we write and every solution we design is focused on one thing — helping businesses move forward.</p>
                            {/* <p className="text-muted-foreground"></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;