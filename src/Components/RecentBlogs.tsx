import { Image, Text, Card, Grid, Group, Stack, Title } from "@mantine/core";
import { FC } from "react";
import { BlogPostProps } from "./BlogPost";
import "./RecentBlogs.css";

const RecentBlogs: FC<BlogPostProps> = ({ header, body, footer }) => {
    return (
        <Card>
            <Grid justify="space-evenly" columns={16} >
                <Grid.Col span={{ base: 12, xs: 10, sm: 10, md: 8, lg: 6, xl: 4 }}>
                    <Image h={"100%"} src={header.backgroundImage} />
                </Grid.Col>
                <Grid.Col span={{ base: 14, xl: 10 }}  >
                    <Stack h={"100%"} align="flex-start" justify="space-evenly" >
                        <Title order={2}>{header.title}</Title>
                        <Group gap={50} >
                            <Title order={4}>
                                By: {body.author}
                            </Title>
                            <Title order={4} >
                                {body.date}
                            </Title>
                        </Group>
                        <Text lineClamp={5} >
                            {body.content}
                        </Text>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Card>
    )
}

export default RecentBlogs;