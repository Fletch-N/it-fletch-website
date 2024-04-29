import { List, ListItem, Space, Text } from "@mantine/core";
import { FC } from "react";

export type TExperienceEntry = {
    title: string,
    company: string,
    startDate: string,
    endDate: string,
    summary: string,
    accomplishments: string[],
    technologies: string[],
    lastItem?: boolean
}

interface IProps extends TExperienceEntry { }

const ExperienceEntry: FC<IProps> = (props) => {
    return (
        <Text>
            <Text fw={700} >{props.title}</Text>
            <Text>{props.company}</Text>
            <Text fs={"italic"} >{props.startDate} - {props.endDate}</Text>
            <Space h={"md"} />
            <Text>{props.summary}</Text>
            <Space h={"md"} />
            <List>
                {props.accomplishments.map((x, i) => (
                    <ListItem key={i}>{x}</ListItem>
                ))}
            </List>
            <Space h={"md"} />
            <Text>Technologies: {props.technologies.join(", ")}</Text>
            <Space h={"md"} />
            {props.lastItem || <hr />}
        </Text>
    )
}

export default ExperienceEntry;