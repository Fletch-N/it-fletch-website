import { Grid, Group, Stack, Title } from "@mantine/core"
import './ResumeSection.css';
import { FC, Fragment } from "react";

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
                    <Title visibleFrom="lg" order={4}   >
                        {label}
                    </Title>
                </Group>
            </Grid.Col>
            <Grid.Col span={10} className="section-content" >
                <Stack className="section-border" >
                <Title order={4} hiddenFrom="lg" >
                    {label} 
                </Title>
                    {content.map((x, i) => (
                        <Fragment key={i}>
                            {x}
                        </Fragment>
                    ))}
                </Stack>
            </Grid.Col>
        </Grid>
    )
}

export default ResumeSection;