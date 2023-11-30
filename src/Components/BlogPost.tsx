import { BackgroundImage, Card, CardSection, Flex, Title, Text, Center, Stack, Group } from "@mantine/core";
import './BlogPost.css';
import { FC } from "react";

export interface BlogPostProps {
    header: {
        backgroundImage: string;
        imageRef: JSX.Element;
        title: string;
    }
    body: {
        author: string;
        date: string;
        keywords: string[];
        content: JSX.Element;
    }
    footer: {}
}

const BlogPost: FC<BlogPostProps> = ({header, body, footer}) => {
    return (
        <Card>
            <CardSection id="blog-header">
                <BackgroundImage src={header.backgroundImage} className="blog-header" >
                    <Stack justify="space-between" className="blog-title" >
                        <Center >
                            <Title order={1} >
                                {header.title}
                            </Title>
                        </Center>
                        <Flex justify={"flex-end"} align={"flex-end"}>
                            {header.imageRef}
                        </Flex>
                    </Stack>
                </BackgroundImage>
            </CardSection>
            <CardSection id="blog-body" className="blog-body" >
                <Stack>
                    <Group justify="space-between" >
                        <Title order={4}>
                            By: {body.author}
                        </Title>
                        <Title order={4} >
                            {body.date}
                        </Title>
                    </Group>
                    <Title order={5}>{body.keywords.join(", ")}</Title>
                    {body.content}
                </Stack>
                
            </CardSection>
        </Card>
    )
}

export default BlogPost;

