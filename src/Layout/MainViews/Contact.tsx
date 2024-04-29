import { Group, Stack, Text, Title } from "@mantine/core";
import EmailLink from "../../Components/Links/EmailLink";
import LinkedInLink from "../../Components/Links/LinkedInLink";
import GitHubLink from "../../Components/Links/GitHubLink";

const Contact = () => {
    return (
        <Stack>
            <Title order={3} >Direct Inquiries</Title>
            <Group>
                <Text size="lg">Email Me - </Text>
                <EmailLink invert/>
            </Group>
            <Title order={3}>Professional Inquiries</Title>
            <Group>
                <Text size="lg">LinkedIn - </Text>
                <LinkedInLink />
            </Group>
            <Title order={3}>Project Contributions</Title>
            <Group>
                <Text size="lg">GitHub - </Text>
                <GitHubLink />
            </Group>
        </Stack>
    )
}

export default Contact;