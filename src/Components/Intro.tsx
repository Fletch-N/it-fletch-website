import { Image, Stack, Title, Text, Grid, List, ListItem } from "@mantine/core";

const Intro = () => {
    return (
        <Grid justify="space-evenly" columns={16} >
            <Grid.Col span={{ base: 12, xs: 10, sm: 10,  md: 8, lg: 6, xl: 4}}>
                <Image w={"100%"} radius={"50%"} src="/assets/images/portrait.png" />
            </Grid.Col>
            <Grid.Col span={{ base: 14, xl: 10 }}  >
                <Stack h={"100%"} align="flex-start" justify="space-evenly" >
                    <Title order={2}>Hi, I'm Fletcher!</Title>
                    <Text size="lg" >
                        A Software Developer from Dallas, TX, with an extensive background in high-pressure and high-stakes environments. I'm currently working as the Lead Project Engineer at Your Wise Monkeys, a tech startup that empowers creative content makers to reach global audiences through event-site design and development, AI and human based translation, ASL interpretation, and video content delivery, both live and on-demand.
                    </Text>
                    <Text size="lg" >
                        As Lead Project Engineer, I manage the full life-cycle of our primary products, the Translation Platform and Translation Core.
                    </Text>
                    <List>
                    <Title order={4} >Current Tech Stack</Title>
                        <ListItem>Front-End: TypeScript, NextJS, React, MobX, Mantine</ListItem>
                        <ListItem>Back-End: .NET Core, TypeScript, AWS Lambda</ListItem>
                        <ListItem>Communications: TCP/IP, REST, WebSockets, UDP</ListItem>
                        <ListItem>Database: MySQL, AWS RDS</ListItem>
                        <ListItem>Infrastructure: AWS, VSXi, Nginx, Linux</ListItem>
                    </List>
                    <Text size="lg">
                        
                    </Text>
                    <Text size="lg">
                        As of February, I've completed a Cybersecurity Bootcamp through edX and Rice University, and am looking forward to taking my exam for CompTIA Security+. I'm currently seeking new opportunities to help organizations navigate protecting their digital assets in our increasingly interconnected world. I'm eager to engage with a tech leader driving transformations in application security, threat hunting, and incident response.
                    </Text>
                </Stack>
            </Grid.Col>
        </Grid>
    )
}

export default Intro;