import { TEducationEntry } from "../../Components/Resume/EducationEntry";

const EducationData: TEducationEntry[] = [
    {
        school: "Rice University Boot Camps",
        city: "Houston, TX",
        certificate: "Certificate, Cybersecurity",
        startDate: "August 2023",
        endDate: "February 2024",
        summary: "A rigorous and fast-paced 24 week long Boot Camp dedicated to the practical and technical skills required for Cybersecurity as well as training towards Security+, Network+, and CEH.",
        skills: [
            "Risk Mitigation",
            "Business Continuity and Disaster Recovery",
            "Governance Frameworks",
            "Terminal / Bash Scripting",
            "Linux and Windows SysAdmin",
            "Cryptography",
            "Network Security",
            "Cloud Security",
            "Vulnerability Scanning",
            "Windows, Linux, and Web Application penetration testing",
            "SIEM",
            "Forensics",
        ],
        technologies: ["Wireshark", "Kali Linux", "Metasploit", "Nessus", "Burp Suite", "Autopsy"]
    },
    {
        school: "The Ocean Corporation",
        city: "Houston, TX",
        certificate: "Certificate, Commercial Diving and NDT",
        startDate: "2011",
        endDate: "2011",
        summary: "An intensive, 9 month course, covering the knowledge, training, and certifications required to operate as a Commercial Diver and Non-Destructive Tester.",
        skills: [
            "Offshore Oilfield Diving Operations",
            "Inland Diving Operations",
            "Surface and Underwater Welding and Cutting",
            "Mixed-Gas and Lock-Out Diving",
            "Recompression Chamber Operations",
            "Nuclear/Contaminated Environment Diving",
            "Rigging Certification",
            "Hazardous Environment Intervention",
            "Offshore Survival and Safety",
            "Underwater Nondestructive Testing",
            "MT & UT Level I & II"
        ],
        technologies: ["Commercial Diving Equipment", "Welding Equipment", "Rigging", "Decompression Chambers", "Ultrasound and Magnetic Particle Inspection"]
    }
]

export default EducationData;