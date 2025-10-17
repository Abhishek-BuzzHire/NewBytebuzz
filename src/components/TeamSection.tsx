import { Github, Linkedin, Twitter } from "lucide-react";
import { members, TeamMember } from "@/data/data";

interface Team {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

const team = members

const Team = ({
  heading = "Our Core Team",
  description = "We are a diverse team of technologists, strategists, and innovators bringing decades of experience in development, engineering, data, product, marketing, and sales. Together, we blend tech expertise with business acumen to turn bold ideas into real impact.",
  members = team
}: Team) => {
  return (
    <section className="py-24 lg:py-20">
      <div className="container mx-auto lg:px-4">
        <div className="px-4 mb-16 text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-6xl text-lg tracking-tight md:text-xl">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {members.map((member) => (
            <div key={member.id} className="p-6">
              <div className="group relative h-72 w-72 overflow-hidden rounded-lg bg-cover bg-center p-8 pt-4 transition-shadow hover:shadow-xl"

                style={{
                  backgroundImage: `url(/members/${member.image})`
                }}>
                {/* <div className="absolute inset-x-0 bottom-0 z-0 h-2/5 bg-gradient-to-t from-black/100 to-transparent" /> */}
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <div className="details-container space-y-6 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full">
                    <div className="flex gap-3 justify-center">
                      {member.github && (
                        <a
                          href={member.github} target="_blank"
                          className="bg-primary rounded-lg p-2"
                        >
                          <Github className="text-white size-6" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter} target="_blank"
                          className="bg-primary rounded-lg p-2"
                        >
                          <Twitter className="text-white size-6" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin} target="_blank"
                          className="bg-primary rounded-lg p-2"
                        >
                          <Linkedin className="text-white size-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                    <div className="text-center text-foreground">
                      <h3 className="mb-1 text-3xl font-semibold">{member.name}</h3>
                      <p className="text-lg">
                        {member.role}
                      </p>
                    </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team };
