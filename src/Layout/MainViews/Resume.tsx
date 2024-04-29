import {Stack, Text } from "@mantine/core";
import ResumeSection, { TResumeSection } from "../../Components/ResumeSection";
import {
    IconTextCaption,
    IconCertificate,
    IconShieldCheckFilled,
    IconListDetails,
    IconComponents,
    IconBooks
} from "@tabler/icons-react";
import EducationData from "../../Data/Resume/EducationData";
import EducationEntry from "../../Components/Resume/EducationEntry";
import ExperienceData from "../../Data/Resume/ExperienceData";
import ExperienceEntry from "../../Components/Resume/ExperienceEntry";
import SummaryData from "../../Data/Resume/SummaryData";
import SummaryEntry from "../../Components/Resume/SummaryEntry";
import CertificateData from "../../Data/Resume/CertificateData";
import CertificateEntry from "../../Components/Resume/CertificateEntry";

const resumeSections: TResumeSection[] = [
    {
        label: "Summary",
        labelIcon: <IconTextCaption />,
        content: SummaryData.map((x, i) => (
            <SummaryEntry key={i} {...x} />
        ))
    },
    {
        label: "Certifications",
        labelIcon: <IconCertificate />,
        content: CertificateData.map((x, i) => (
            <CertificateEntry key={i} {...x} />
        ))
    },
    {
        label: "Technical Skills",
        labelIcon: <IconShieldCheckFilled />,
        content: [
            <Text key={1} > Sample Line 1</Text>,
            <Text key={2} > Sample Line 2</Text>,
            <Text key={3} > Sample Line 3</Text>,
            <Text key={4} > Sample Line 4</Text>,
            <Text key={5} > Sample Line 5</Text>,
        ]
    },
    {
        label: "Experience",
        labelIcon: <IconComponents />,
        content: ExperienceData.map((x, i, a) => (
            <ExperienceEntry key={i} lastItem={a.length === i + 1} {...x} />
        ))
    },
    {
        label: "Projects",
        labelIcon: <IconListDetails />,
        content: [
            <Text key={1} > Sample Line 1</Text>,
            <Text key={2} > Sample Line 2</Text>,
            <Text key={3} > Sample Line 3</Text>,
            <Text key={4} > Sample Line 4</Text>,
            <Text key={5} > Sample Line 5</Text>,
        ]
    },
    {
        label: "Education",
        labelIcon: <IconBooks />,
        content: EducationData.map((x, i, a) => (
            <EducationEntry key={i} lastItem={a.length === i + 1} {...x} />
        ))
    }
]


const Resume = () => {
    return (
        <Stack gap={0} >
            {resumeSections.map(x => (
                <ResumeSection key={x.label} {...x} />
            ))}
        </Stack>
    )
}

export default Resume;