import { TExperienceEntry } from "../../Components/Resume/ExperienceEntry";

const ExperienceData: TExperienceEntry[] = [
    {
        title: "Lead Project Engineer",
        company: "Your Wise Monkeys",
        startDate: "April 2021",
        endDate: "Present",
        summary: "As Lead Project Engineer, I manage the full life-cycle of our primary products, the Translation Platform and Translation Core.",
        accomplishments: [
            "Successfully deployed key product offerings for both live and pre- recorded video content.",
            "Integrated cloud services from multiple providers(AWS, Azure, GCP).",
            "Automated content management from ingest through delivery.",
            "Significantly reduced operational overhead by implementing serverless compute through AWS Lambda.",
            "Delivered project proposals, project roadmaps, and technical demonstrations to key stakeholders."
        ],
        technologies: ["React", "TypeScript", ".NET Core", "MySql", "AWS", "Azure", "GCP"]
    },
    {
        title: "Software Developer",
        company: "Virtual Event Production",
        startDate: "August 2020",
        endDate: "April 2021",
        summary: "As a Software Developer, I operated independently and as part of a team of up to 5 other developers to design, develop and maintain virtual event platforms fulfilling client contract specifications.",
        accomplishments: [
            "Designed a modular event platform codebase for planned reuse, customizability, and quick deployment across multiple clients and industries.",
            "Refactored project code of all services into unified front - end library(React Typescript) and back - end framework(.NET Core).",
            "Consulted directly with clients in both pre - planning of initial contract and to facilitate feedback into change orders for event platform development team.",
            "Performed QC testing on identity management, payment processing, and event platform."
        ],
        technologies: ["React", "TypeScript", "Git", ".NET Core", "MySql"]
    },
    {
        title: "Systems Engineer - Streaming Media",
        company: "Virtual Event Production",
        startDate: "April 2020",
        endDate: "April 2021",
        summary: "As a System Engineer, I worked closely with a team of pre-Covid event industry contacts to assist clients in the transition from previously scheduled live shows to virtual events hosted through web applications. I designed, implemented, and managed systems handling all ingest, handoff, and broadcast of audio/video streams in a production studio environment as well as broadcast and distribution to audience.",
        accomplishments: [
            "Met directly with clients to detail budget, scope, and objectives for each production project and provided recommendations on solutions for hardware, software, networking capabilities, video encoding, and content distribution.",
            "Worked with team of developers and engineers to fulfill client expectations of event platform, content delivery, execution of virtual production, and post - show deliverables.",
            "Designed and implemented flexible video routing in production studio capable of multiple ingest with return feeds to remote broadcasters, video switching and mixing for production feeds, and multiple output feeds to accommodate multiple language broadcasts.",
            "Reduced cost and required labor by assembling and configuring remote broadcast packages requiring no on - site oversight for remote presenters with no technical experience.",
            "Developed remote translator loop - back system, allowing for time - aligned injection of remote human translation into final production broadcast, and meeting design constraints of no additional delay induced beyond typical HLS feed to audience.",
            "Managed and administered all network services including bonded cellular systems, local networks in -studio for both control and real - time video distribution, and cloud based for both ingest into studio and final distribution through CDN."
        ],
        technologies: ["AWS","Wowza","Linux","FFMPEG","Cellular Modems","Bonded Networks","HLS","WebRTC","SRT","NDI"]
    },
    {
        title: "Technical Director",
        company: "Nomad Productions",
        startDate: "January 2019",
        endDate: "July 2020",
        summary: "As a Technical Director, I directed multiple teams across various departments to translate client vision into a live event production meeting various limitations such as those imposed by venue selected and production budget. I represented the company as technical point of contact for all client, team, and vendor stakeholders. I managed all phases of production including pre-planning, system design, and execution on show day.",
        accomplishments: [],
        technologies: []
    },
    {
        title: "Warehouse Manager",
        company: "Nomad Productions",
        startDate: "August 2018",
        endDate: "August 2019",
        summary: "",
        accomplishments: [],
        technologies: []
    },
    {
        title: "Department Lead",
        company: "Nomad Productions",
        startDate: "April 2017",
        endDate: "January 2019",
        summary: "",
        accomplishments: [],
        technologies: []
    },
    {
        title: "Audio Engineer",
        company: "Nomad Productions",
        startDate: "August 2016",
        endDate: "April 2017",
        summary: "",
        accomplishments: [],
        technologies: []
    },
    {
        title: "Freelance Audio Engineer",
        company: "Greater Houston Area bands, events, and radio",
        startDate: "March 2015",
        endDate: "July 2016",
        summary: "As a Freelance Audio Engineer, I worked with local bands and event organizers to setup equipment, mix audio for show, and pack back up at end of show.",
        accomplishments: [
            "Investigated and resolved technical issues discovered before or during live events.",
            "Managed setup and sound check for bands and talent in an expedient and professional manner.",
            "Fulfilled hard deadlines, such as doors open and broadcast start.",
            "Handled remote broadcast engineering duties for all radio shows on ESPN 97.5 and Yahoo Sports Radio 1560.",
            "Pursued learning and development through vendor trainings and industry conferences."
        ],
        technologies: ["Live Sound Consoles", "PA Systems", "Soldering", "Comrex", "Telos"]
    },
    {
        title: "NDT Inspector",
        company: "CSI Inspection",
        startDate: "August 2013",
        endDate: "March 2015",
        summary: "As an NDT Inspector, I collaborated with teams of 3-5 people to perform ASNT certified level II field inspection in UT, PT, and MT on oilfield equipment, such as Bottomhole Assembly and Drill Pipe.",
        accomplishments: [
            "Persisted on task through extreme weather such as storms and blizzards to fulfill client quotas and deadlines.",
            "Followed standard operating procedure on all inspections to insure accurate results.",
            "Relayed all movements of equipment, machinery, and material to fellow team members in order to prevent bodily injury such as crushing or breaks.",
            "Generated daily inspection reports detailing all failed materials removed from service.",
            "Analyzed complex geometric shapes such as drill heads to establish complete scan coverage.",
            "Coordinated with teammates to establish routines for expediting large batches of drill pipe."
        ],
        technologies: ["Ultrasound, Magnetic Particle, and Liquid Penetrant Inspection", "Portable EMI unit", "Rigging", "Forklifts"]
    },
    {
        title: "Commercial Diver",
        company: "Cal Dive International",
        startDate: "2011",
        endDate: "August 2013",
        summary: "As a Commercial Diver, I worked with teams of 5-15 people handling offshore pipeline burial, oil platform installation, oil platform and pipeline salvage, disaster response, and hazardous material remediation for US Oil Companies in the Gulf of Mexico.",
        accomplishments: [
            "Executed tasks under low visibility, high stress, and dangerous environments.",
            "Mitigated threats by participating in daily safety meetings and communicating clearly and directly with team members through voice, radio, and industry standard hand signs.",
            "Performed inspections on corrosion prevention, welds, and metal structures.",
            "Prepared decommissioned pipeline for salvage using hydraulic saws, acetylene torch, and magnesium rods.",
            "Executed rigging and crane operations on heavy, non - uniform loads between ship deck and ocean floor.",
            "Contained and removed hazardous material ranging from oil to radioactive waste.",
            "Operated LRAD to maintain clear and safe perimeter around dive vessel during shallow water operations.",
        ],
        technologies: [
            "Commercial Diving Equipment", "Life Support Systems", "Welding Equipment", "Rigging", "Decompression Chambers", "Hydraulic Tools", "Ultrasound, Magnetic Particle, and Cathodic Protection Inspection", "Hazmat containment and Cleanup"
        ]
    },
]

export default ExperienceData;