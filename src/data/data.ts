import { Code, Database, Router, Braces, ShieldCheck, Infinity } from "lucide-react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export interface about {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const aboutData: about[] = [
  {
    id: "feature-1",
    title: "Our Story",
    description:
      "Every great idea begins with a simple question — “Can we make this better?” That question sparked the beginning of ByteBuzz. What started as a small group of passionate tech enthusiasts quickly evolved into a mission-driven team united by one vision: to simplify technology and empower businesses to grow faster, smarter, and stronger.",
    image: "/story.jpg",
  },
  {
    id: "feature-2",
    title: "Mission",
    description:
      "We've evolved into a dynamic team of developers, designers, and data engineers united by a single belief technology should drive real impact. At ByteBuzz, we don't just build software; we craft intelligent, scalable, and user-centric solutions that empower businesses to accelerate growth and innovate faster.",
    image: "/mission.jpg",
  },
  {
    id: "feature-3",
    title: "Vision",
    description:
      "We are driven to build enduring partnerships, not fleeting projects. Every solution we deliver is fueled by bold innovation, uncompromising transparency, and rock-solid reliability. Our mission is to redefine the customer experience making it seamless, impactful, and transformative.",
    image: "/vision.png",
  },
]

export interface ServiceSec {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  title: string;
  description: string;
  items: string[];
  slug: string;
  image: string;
}

export const serviceSec: ServiceSec[] = [
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Data is the new fuel of business but only if it is clean, connected, and actionable. At BuzzByte, we help you build strong data foundations that power insights, automation, and smarter decisions. From designing efficient databases to building full-scale data pipelines, our team makes sure your data works for you, not against you.",
    items: ["Transforming Data into Decisions."],
    slug: "database-service",
    image: "database.jpg",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Every great business runs on great software. At BuzzByte, we build custom software solutions that help you streamline operations, improve efficiency, and deliver exceptional user experiences. From websites and mobile apps to enterprise platforms, we turn your ideas into powerful, reliable, and scalable products.",
    items: ["Turning Ideas into Scalable Digital Solutions."],
    slug: "software-development-service",
    image: "web-dev.jpg",

  },
  {
    icon: Braces,
    title: "Data Science & AI",
    description:
      "Artificial Intelligence is not the future it is today. At BuzzByte, we help businesses turn raw data into real intelligence through smart AI and Data Science solutions. Whether it is predictive analytics, automation, or custom AI models, we build solutions that give you an edge faster decisions, better insights, and smarter workflows.",
    items: ["From Data to Intelligence — Automate, Predict, and Grow."],
    slug: "data-engineering-service",
    image: "data-engineering.jpg",
  },
  {
    icon: Infinity,
    title: "Cloud & DevOps",
    description:
      "Modern businesses move fast your technology should too. At BuzzByte, we help organizations harness the power of the cloud and streamline delivery with DevOps practices that boost efficiency, reduce downtime, and accelerate innovation. Whether you are migrating to the cloud, automating workflows, or optimizing your CI/CD pipeline, we make sure your systems are built to deliver quickly, securely, and at scale.",
    items: ["Faster Deployments. Smarter Scaling. Stronger Teams."],
    slug: "cloud-devops-service",
    image: "devops.jpg",
  },
  {
    icon: ShieldCheck,
    title: "CyberSecurity",
    description:
      "In a world where everything is connected, security cannot be an afterthought. At BuzzByte, we help businesses protect what matters most is their data, people, and reputation. Our cybersecurity team blends smart tech with real expertise to keep your systems safe, resilient, and ready for anything.",
    items: ["Stay Secure. Stay Ahead."],
    slug: "cybersecurity-service",
    image: "cybersecurity.jpg",
  },
  {
    icon: Router,
    title: "IT Infrastructure Setup & Support",
    description:
      "Your business deserves an IT backbone that is reliable, secure, and built to grow. At BuzzByte, we design, deploy, and manage end-to-end IT infrastructure from servers and networks to cloud and on-prem setups so your technology never holds you back.",
    items: ["Build Strong. Run Smooth. Scale Fast."],
    slug: "it-setup-support-service",
    image: "it-support.jpg",
  },
];

export type SectionContent =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface ServiceSection {
  heading: string;
  content: SectionContent[];
};

export interface Service {
  slug: string; // used for dynamic route
  title: string;
  subhead?: string,
  image: string;
  description: string;
  highlights: {
    icon: string;
    label: string;
  }[];
  sections: ServiceSection[];
};

export const servicesData: Service[] = [
  {
    slug: "database-service",
    image: "/database.jpg",
    title: "Data Engineering Services",
    subhead: "Make Your Data Work Smarter for You",
    description: "At ByteBuzz, we transform scattered information into a powerful, connected data ecosystem that fuels insights and innovation. Our data engineering solutions are built to be scalable, secure, and future-ready so your business can grow confidently on a strong data foundation.",
    highlights: [
      { icon: "/logos/mongodb.svg", label: "MongoDB" },
      { icon: "/logos/mysql.svg", label: "MySQL" },
      { icon: "/logos/oracle.svg", label: "Oracle" },
      { icon: "/logos/postgresql.svg", label: "PostgreSQL" },
    ],
    sections: [
      {
        heading: "What We Do",
        content: [
          {
            type: 'list',
            items: ["Database Design & Development"]
          },
          {
            type: "paragraph",
            text: "We design reliable, high-performance databases that keep your operations smooth and your data organized whether it's SQL, NoSQL, or cloud-based systems."
          },
          {
            type: 'list',
            items: ["Data Integration & ETL Pipelines"]
          },
          {
            type: "paragraph",
            text: "We build automated data pipelines using tools like Python, Apache Spark, and Airflow to move, clean, and transform data seamlessly across platforms."
          },
          {
            type: 'list',
            items: ["Data Warehousing"]
          },
          {
            type: "paragraph",
            text: "Consolidate your data in modern, scalable warehouses like Snowflake, BigQuery, or Amazon Redshift making it easy to analyse and visualize in real time."
          },
          {
            type: 'list',
            items: ["Data Migration & Optimization"]
          },
          {
            type: "paragraph",
            text: "We help you move from legacy databases to modern systems securely and with zero data loss while optimizing performance and storage efficiency."
          },
          {
            type: 'list',
            items: ["Data Quality & Governance"]
          },
          {
            type: "paragraph",
            text: "Reliable data drives reliable insights. We establish governance, validation, and auditing processes to ensure your data is accurate, compliant, and trustworthy."
          },
          {
            type: 'list',
            items: ["Analytics Enablement"]
          },
          {
            type: "paragraph",
            text: "Our engineering team partners with your BI tools, Power BI, Tableau, or custom dashboards to make data accessible, insightful, and ready for decision-making."
          },
        ],
      },
      {
        heading: "Why Choose ByteBuzz?",
        content: [
          {
            type: 'list',
            items: [
              "End-to-End Data Expertise - From source to storage to visualization.",
              "Future-Ready Architecture - Scalable, secure, and cloud-native solutions.",
              "Automation-Driven Approach - We cut manual work through smart data workflows.",
              "Faster Insights, Better Decisions - Turning raw data into real business impact."
            ]
          }

        ],
      },
    ]
  },
  {
    slug: "software-development-service",
    image: "/web-dev.jpg",
    title: "Software Development Services",
    subhead: "Let Us Build What's Next",
    description: "At ByteBuzz, we blend technology, creativity, and strategy to craft software that delivers real impact. Whether you're a startup shaping your first product or an enterprise scaling new solutions, we are here to turn your vision into reality with innovation that lasts.",
    highlights: [
      { icon: "/logos/nextjs.svg", label: "NextJS" },
      { icon: "/logos/react.svg", label: "ReactJS" },
      { icon: "/logos/angular.svg", label: "Angular" },
      { icon: "/logos/python.svg", label: "Python" },
      { icon: "/logos/nodejs.svg", label: "NodeJS" },
      { icon: "/logos/java.svg", label: "JAVA" },
      { icon: "/logos/php.svg", label: "php" },
      { icon: "/logos/ruby.svg", label: "Ruby" },
      { icon: "/logos/go.svg", label: "GoLang" },
      { icon: "/logos/rails.svg", label: "Rails" },
      { icon: "/logos/postgresql.svg", label: "PostgreSQL" },
      { icon: "/logos/mongodb.svg", label: "MongoDB" },
      { icon: "/logos/aws.svg", label: "Amazon Web Services" },
      { icon: "/logos/azure.svg", label: "Azure" },
      { icon: "/logos/gcloud.svg", label: "Google Cloud" },
      { icon: "/logos/docker.svg", label: "Docker" },
      { icon: "/logos/kubernetes.svg", label: "Kubernetes" },
    ],
    sections: [
      {
        heading: "What We Do",
        content: [
          {
            type: 'list',
            items: ["Custom Software Development"]
          },
          {
            type: "paragraph",
            text: "We create tailored solutions that fit your unique needs not one-size-fits-all templates. Our team designs and develops software that helps your business work smarter, faster, and better."
          },
          {
            type: 'list',
            items: ["Web & Mobile App Development"]
          },
          {
            type: "paragraph",
            text: "Modern, responsive, and intuitive applications built with the latest frameworks and technologies like React, Next.js, Node.js, and Python to deliver seamless performance across all devices."
          },
          {
            type: 'list',
            items: ["API Development & Integration"]
          },
          {
            type: "paragraph",
            text: "We connect your systems, apps, and tools through secure APIs enabling automation, faster data flow, and improved collaboration across platforms."
          },
          {
            type: 'list',
            items: ["Enterprise Software Solutions"]
          },
          {
            type: "paragraph",
            text: "From CRM and ERP systems to workflow automation platforms, we build enterprise-grade solutions that simplify complexity and boost productivity."
          },
          {
            type: 'list',
            items: ["MVP Development for Startups"]
          },
          {
            type: "paragraph",
            text: "Got an idea? We will help you bring it to life fast. We specialize in building Minimum Viable Products (MVPs) that get you to market quickly and help validate your concept before scaling."
          },
          {
            type: 'list',
            items: ["Maintenance & Upgrades"]
          },
          {
            type: "paragraph",
            text: "We do not just build we evolve your software. Our ongoing maintenance ensures your systems remain secure, updated, and ready for the future."
          },
        ],
      },
      {
        heading: "Why Choose ByteBuzz?",
        content: [
          {
            type: 'list',
            items: [
              "Agile & Transparent Development - Regular updates, fast delivery, and zero surprises.",
              "Full-Stack Expertise - Frontend to backend, cloud to database we handle it all.",
              "User-Centric Design - Clean, intuitive interfaces focused on real user needs.",
              "Scalable Architecture - Built to grow with your business, not outgrow it."
            ]
          }

        ],
      },
    ]
  },
  {
    slug: "data-engineering-service",
    image: "/data-engineering.jpg",
    title: "Data Science & AI Services",
    subhead: "Smarter Businesses Start Here",
    description: "At ByteBuzz, we make AI simple, accessible, and practical helping you unlock the full potential of your data. From predictive analytics to intelligent automation, we build AI-driven systems that empower smarter decisions and move your business forward with confidence.",
    highlights: [
      { icon: "/logos/spark.svg", label: "Spark" },
      { icon: "/logos/apache.svg", label: "Apache" },
      { icon: "/logos/kafka.svg", label: "Kafka" },
      { icon: "/logos/airflow.svg", label: "AirFlow" },
      { icon: "/logos/aws.svg", label: "Amazon Web Services" },
      { icon: "/logos/azure.svg", label: "Azure" },
      { icon: "/logos/gcloud.svg", label: "Google Cloud" },

    ],
    sections: [
      {
        heading: "What We Do",
        content: [
          {
            type: 'list',
            items: ["Predictive Analytics & Forecasting"]
          },
          {
            type: "paragraph",
            text: "We use data to help you look ahead spotting trends, anticipating demand, and making informed decisions that drive business growth."
          },
          {
            type: 'list',
            items: ["Machine Learning Solutions"]
          },
          {
            type: "paragraph",
            text: "Our experts build and deploy custom ML models that learn from your data also improving accuracy, automating processes, and uncovering hidden opportunities."
          },
          {
            type: 'list',
            items: ["Data Visualization & Insights"]
          },
          {
            type: "paragraph",
            text: "Transform complex datasets into clear, actionable dashboards. We turn your numbers into stories that help you make decisions confidently."
          },
          {
            type: 'list',
            items: ["AI-Powered Automation"]
          },
          {
            type: "paragraph",
            text: "We streamline operations with intelligent automation from chatbots and process automation to intelligent data routing and anomaly detection."
          },
          {
            type: 'list',
            items: ["Natural Language Processing (NLP)"]
          },
          {
            type: "paragraph",
            text: "We enable smarter communication tools, text analytics, and sentiment analysis to help businesses understand and interact better with their customers."
          },
          {
            type: 'list',
            items: ["AI Strategy & Implementation"]
          },
          {
            type: "paragraph",
            text: "Whether you are starting your AI journey or scaling an existing model, we help you design and implement the right AI roadmap and aligned with your business goals."
          },
        ],
      },
      {
        heading: "Why Choose ByteBuzz?",
        content: [
          {
            type: 'list',
            items: [
              "Real-World Impact - AI solutions built to solve actual business problems, not just experiments.",
              "End-to-End Expertise - From data collection to deployment and monitoring.",
              "Explainable AI - Transparent models you can trust and understand.",
              "Scalable AI Systems - Solutions that evolve as your data and needs grow."
            ]
          }

        ],
      },
    ]
  },
  {
    slug: "cloud-devops-service",
    image: "/devops.jpg",
    title: "Cloud & DevOps Services",
    subhead: "Build. Deploy. Scale — Smarter.",
    description: "At ByteBuzz, we unite the power of Cloud and DevOps to help you move faster, operate smarter, and innovate without limits. From seamless deployments to automated workflows and scalable infrastructure, we help your business save time, cut costs, and deliver with confidence.",
    highlights: [
      { icon: "/logos/aws.svg", label: "Amazon Web Services" },
      { icon: "/logos/azure.svg", label: "Azure" },
      { icon: "/logos/gcloud.svg", label: "Google Cloud" },
      { icon: "/logos/docker.svg", label: "Docker" },
      { icon: "/logos/kubernetes.svg", label: "Kubernetes" },
      { icon: "/logos/git.svg", label: "Git" },
      { icon: "/logos/github.svg", label: "GitHub" },
    ],
    sections: [
      {
        heading: "What We Do",
        content: [
          {
            type: 'list',
            items: ["Cloud Strategy & Migration"]
          },
          {
            type: "paragraph",
            text: "Move to the cloud with confidence. We plan and execute seamless migrations to AWS, Azure, or Google Cloud ensuring minimal downtime, maximum performance, and full data security."
          },
          {
            type: 'list',
            items: ["Cloud Architecture & Optimization"]
          },
          {
            type: "paragraph",
            text: "We design scalable cloud environments tailored to your needs focusing on cost efficiency, reliability, and flexibility."
          },
          {
            type: 'list',
            items: ["DevOps Implementation"]
          },
          {
            type: "paragraph",
            text: "From CI/CD pipelines to automated deployments, we bring agility to your development cycle. Faster releases, fewer errors, and smoother collaboration between your dev and ops teams."
          },
          {
            type: 'list',
            items: ["Infrastructure as Code (IaC)"]
          },
          {
            type: "paragraph",
            text: "We use tools like Terraform, Ansible, and CloudFormation to automate infrastructure setup and management, making your deployments repeatable, consistent, and scalable."
          },
          {
            type: 'list',
            items: ["Continuous Monitoring & Support"]
          },
          {
            type: "paragraph",
            text: "We do not just set up and leave, we continuously monitor performance, logs, and uptime to ensure your systems stay optimized 24/7."
          },
          {
            type: 'list',
            items: ["Security & Compliance"]
          },
          {
            type: "paragraph",
            text: "Built-in cloud security and compliance frameworks help protect your data and meet industry standards without slowing you down."
          },
        ],
      },
      {
        heading: "Why Choose ByteBuzz?",
        content: [
          {
            type: 'list',
            items: [
              "Agile Delivery. Faster releases, better collaboration, and zero downtime.",
              "Certified Cloud Experts. Skilled across AWS, Azure, and GCP.",
              "Automation-First Approach. We eliminate manual errors with smart automation.",
              "Scalable by Design. Systems that grow seamlessly with your business."
            ]
          }

        ],
      },
    ]
  },
  {
    slug: "cybersecurity-service",
    image: "/cybersecurity.jpg",
    title: "CyberSecurity Services",
    subhead: "Let Us Build a Safer, Stronger, and More Resilient Digital Future.",
    description: "At ByteBuzz, cybersecurity is not just about protection, it is about confidence. We safeguard your business with proactive security measures that let you focus on what you do best, while we handle the threats.",
    highlights: [
      { icon: "/logos/auth0.svg", label: "Auth0" },
    ],
    sections: [
      {
        heading: "What We Do",
        content: [
          {
            type: 'list',
            items: ["Network Protection"]
          },
          {
            type: "paragraph",
            text: "We keep your infrastructure secure with 24/7 monitoring, firewall management, and real-time threat detection, so you never have to worry about what is happening behind the scenes."
          },
          {
            type: 'list',
            items: ["Endpoint & Device Security"]
          },
          {
            type: "paragraph",
            text: "Every laptop, desktop, and mobile device is a potential entry point. We lock them down with strong endpoint protection, monitoring, and quick response solutions."
          },
          {
            type: 'list',
            items: ["Cloud Security"]
          },
          {
            type: "paragraph",
            text: "Whether you are on AWS, Azure, or Google Cloud, we make sure your cloud setup stays compliant, encrypted, and hacker-proof."
          },
          {
            type: 'list',
            items: ["Vulnerability Testing"]
          },
          {
            type: "paragraph",
            text: "We find the weak spots before attackers do. Our team performs deep vulnerability assessments and penetration testing to strengthen your digital walls."
          },
          {
            type: 'list',
            items: ["Data Backup & Protection"]
          },
          {
            type: "paragraph",
            text: "We secure your critical data with end-to-end encryption, automated backups, and fast recovery options because prevention is good, but recovery is better."
          },
          {
            type: 'list',
            items: ["Incident Response"]
          },
          {
            type: "paragraph",
            text: "If something goes wrong, we move fast. Our experts identify, contain, and resolve threats while helping you get back online quickly and safely."
          },
        ],
      },
      {
        heading: "Why Choose ByteBuzz?",
        content: [
          {
            type: 'list',
            items: [
              "We are proactive, not reactive. We spot issues before they become attacks.",
              "We simplify security. No jargon but just clear strategies and real protection.",
              "We grow with you. Our solutions scale as your business expands.",
              "We have got your back. Always on, always secure, always BuzzByte."
            ]
          }

        ],
      },
    ]
  },
  {
    slug: "it-setup-support-service",
    image: "/it-support.jpg",
    title: "IT Infrastructure Setup & Support Services",
    subhead: "Focus on Growth, We will Handle the Tech",
    description: "At ByteBuzz, we ensure your IT infrastructure does not just run but it thrives. From initial setup and system design to daily monitoring and support, we take care of your entire tech backbone.",
    highlights: [],
    sections: [
      {
        heading: "What We Do",
        content: [
          {
            type: 'list',
            items: ["Infrastructure Setup"]
          },
          {
            type: "paragraph",
            text: "We help you build your IT foundation the right way from server installations and cloud environments to storage and networking solutions. Whether you are starting fresh or upgrading, we make the setup simple, scalable, and future-ready."
          },
          {
            type: 'list',
            items: ["System & Network Management"]
          },
          {
            type: "paragraph",
            text: "Our team keeps your systems running at peak performance. We monitor uptime, manage configurations, and ensure your network stays fast, secure, and connected."
          },
          {
            type: 'list',
            items: ["Cloud & Hybrid Solutions"]
          },
          {
            type: "paragraph",
            text: "Move your business to the cloud with confidence. We help design the perfect mix of on-prem and cloud infrastructure optimizing cost, performance, and flexibility across AWS, Azure, or Google Cloud."
          },
          {
            type: 'list',
            items: ["Backup & Disaster Recovery"]
          },
          {
            type: "paragraph",
            text: "We build smart backup systems and disaster recovery plans so your data is always safe and your business can bounce back from any disruption, fast."
          },
          {
            type: 'list',
            items: ["IT Support & Maintenance"]
          },
          {
            type: "paragraph",
            text: "From troubleshooting to upgrades, our support team ensures smooth day-to-day operations. We are just a call away to fix issues before they impact your workflow."
          },
          {
            type: 'list',
            items: ["Security Integration"]
          },
          {
            type: "paragraph",
            text: "We embed cybersecurity practices into your infrastructure also ensuring every layer, connection, and endpoint is protected from potential threats."
          },
        ],
      },
      {
        heading: "Why Choose ByteBuzz?",
        content: [
          {
            type: 'list',
            items: [
              "End-to-End Expertise - Setup, monitoring, and ongoing support under one roof.",
              "Flexible & Scalable - We build systems that grow with your business.",
              "Faster Response - Quick support when you need it most.",
              "Cost-Efficient - Smart designs that save time, money, and resources."
            ]
          }

        ],
      },
    ]
  },
]

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
}

export const members = [
  {
    id: "member-1",
    name: "Satyajeet Mishra",
    role: "Co-Founder",
    image: "/satyajeet-mishra.jpg",

    linkedin: "https://www.linkedin.com/in/satyajeet007/",
  },
  {
    id: "member-2",
    name: "Atul Sharma",
    role: "Head of Technology",
    image: "/atul-sharma.jpg",

    linkedin: "https://www.linkedin.com/in/atul-sharma-a4072514/",
  },
  {
    id: "member-3",
    name: "Ankit Shukla",
    role: "Co-Founder",
    image: "/ankit-shukla.jpg",

    linkedin: "https://www.linkedin.com/in/ankitshukla3/",
  },
  {
    id: "member-4",
    name: "Saurabh Singh",
    role: "Co-Founder",
    image: "/saurabh-singh.jpg",

    linkedin: "https://www.linkedin.com/in/saurabh1984/",
  },
]

export interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

export const logodata = [
  {
    id: "logo-1",
    description: "Logo 1",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-2",
    description: "Logo 2",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-3",
    description: "Logo 3",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-4",
    description: "Logo 4",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-5",
    description: "Logo 5",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-7",
    description: "Logo 7",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
    className: "h-4 w-auto",
  },
  {
    id: "logo-8",
    description: "Logo 8",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
    className: "h-7 w-auto",
  },
]

export interface ContactProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  label: string,
  description: string,
  main: string
}

export const contactdata: ContactProps[] = [
  {
    icon: Mail,
    label: "Email",
    description: "We respond to all emails within 24 hours.",
    main: "info@bytebuzz.in"
  },
  {
    icon: MapPin,
    label: "Office",
    description: "Drop by our office for a chat.",
    main: "Unit No. 1527, 15 floor, Galaxy Diamond Plaza,  Sector-4,  Greater Noida, UP - 201016"
  },
  {
    icon: Phone,
    label: "Phone",
    description: "We're available Mon-Fri, 9am-5pm.",
    main: "+91 12345 67890"
  },
  {
    icon: MessageCircle,
    label: "Live Chat",
    description: "Get instant help from our support team.",
    main: "Start Chat"
  },
]