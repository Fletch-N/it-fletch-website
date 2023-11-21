import { Image, Stack, Title, Text, Grid } from "@mantine/core";

const Intro = () => {
    return (
        <Grid justify="space-evenly" columns={16} >
            <Grid.Col span={4}>
                <Image h={"100%"} radius={"50%"} src="/assets/images/portrait.png" />
            </Grid.Col>
            <Grid.Col span={10}  >
                <Stack h={"100%"} align="flex-start" justify="space-evenly" >
                    <Title order={2}>Hi, I'm Fletcher!</Title>
                    <Text size="lg" >
                        A Software Developer from Dallas, TX, currently working as the Lead Project Engineer at Your Wise Monkeys, a tech startup that empowers creative content makers to reach global audiences through event-site design and development, AI and human based translation, ASL interpretation, and video content delivery, both live and on-demand.
                    </Text>
                    <Text size="lg">
                        I'm currently attending a CyberSecurity Bootcamp through edX / Rice University, and seeking new opportunities to help organizations navigate protecting their digital assets in our increasingly interconnected world. Upon completion in January, I will be taking exams for certification in <b>CompTIA Security+</b>, <b>CompTIA PenTest+</b>, and EC-Council's <b>Certified Ethical Hacker</b>. I'm most interested in pathways involving Digital Forensics, Incident Response, and Penetration Testing.
                    </Text>
                </Stack>
            </Grid.Col>
        </Grid>
    )
}

export default Intro;