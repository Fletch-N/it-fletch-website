
import { Text, Group, Space, List, ListItem } from "@mantine/core"
import { FC } from "react";

export type TEducationEntry = {
    school: string,
    city: string,
    certificate: string,
    startDate: string,
    endDate: string,
    summary: string,
    skills: string[],
    technologies: string[],
    lastItem?: boolean
}

interface IProps extends TEducationEntry { }

const EducationEntry: FC<IProps> = (props) => {
    return (
        <Text >
            <Group>
                <Text fw={700} >{props.school}: </Text>
                <Text >{props.city}</Text>
            </Group>
            <Text >{ props.certificate}</Text>
            <Text fs={"italic"} >{props.startDate} - {props.endDate}</Text>
            <Space h={"md"} />
            <Text >{props.summary}</Text>
            <Space h={"md"} />
            <List>
                {props.skills.map((x, i) => (
                    <ListItem key={i} >{x}</ListItem>
                ))}
            </List>
            <Space h={"md"} />
            <Text>Technologies: { props.technologies.join(", ")}</Text>
            <Space h={"md"} />
            { props.lastItem || <hr />}
        </Text>
    )
}

export default EducationEntry;