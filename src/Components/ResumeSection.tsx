import { Grid, Group, Stack, Title } from "@mantine/core"
import './ResumeSection.css';
import { FC } from "react";

export type TResumeSection = {
    label: string,
    labelIcon: JSX.Element,
    content: JSX.Element[]
}

interface IProps extends TResumeSection {}

const ResumeSection: FC<IProps> = ({label, labelIcon, content}) => {
    return (
        <Grid gutter={0} >
            <Grid.Col span={2} className="section-label" >
                <Group justify="flex-start" className="section-border" >
                    {labelIcon}
                    <Title  order={4}  >
                        {label}
                    </Title>
                </Group>
            </Grid.Col>
            <Grid.Col span={10} className="section-content" >
                <Stack className="section-border" >
                    {content.map(x => x)}
                </Stack>
            </Grid.Col>
        </Grid>
    )
}

export default ResumeSection;