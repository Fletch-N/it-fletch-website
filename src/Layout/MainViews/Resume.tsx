import { Stack, Text } from "@mantine/core";
import ResumeSection, { TResumeSection } from "../../Components/ResumeSection";
import {
    IconTextCaption,
    IconCertificate,
    IconShieldCheckFilled,
    IconListDetails,
    IconComponents,
    IconBooks
} from "@tabler/icons-react";

const resumeSections: TResumeSection[] = [
    {
        label: "Summary",
        labelIcon: <IconTextCaption />,
        content: [
            <Text key={1} > Sample Line 1</Text>,
            <Text key={2} > Sample Line 2</Text>,
            <Text key={3} > Sample Line 3</Text>,
            <Text key={4} > Sample Line 4</Text>,
            <Text key={5} > Sample Line 5</Text>,
        ]
    },
    {
        label: "Certifications",
        labelIcon: <IconCertificate />,
        content: [
            <Text key={1} > Sample Line 1</Text>,
            <Text key={2} > Sample Line 2</Text>,
            <Text key={3} > Sample Line 3</Text>,
            <Text key={4} > Sample Line 4</Text>,
            <Text key={5} > Sample Line 5</Text>,
        ]
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
        label: "Experience",
        labelIcon: <IconComponents />,
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
        content: [
            <Text key={1} > Sample Line 1</Text>,
            <Text key={2} > Sample Line 2</Text>,
            <Text key={3} > Sample Line 3</Text>,
            <Text key={4} > Sample Line 4</Text>,
            <Text key={5} > Sample Line 5</Text>,
        ]
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