import { Group, Title } from "@mantine/core";
import AppLogo from "../../Components/AppLogo";
import { FC } from "react";
import EmailLink from "../../Components/Links/EmailLink";
import GitHubLink from "../../Components/Links/GitHubLink";
import LinkedInLink from "../../Components/Links/LinkedInLink";

interface IProps {
    title: string
}

const HeaderTabletView:FC<IProps> = ({ title }) => {

    return (
        <Group id="HeaderTabletView" h="100%" px="md" visibleFrom="sm" hiddenFrom="md" justify="space-between" >
            {/* Header Left - Logo and Title */}
            <Group>
                <AppLogo invert={true} />
                <Title order={3}>{ title }</Title>
            </Group>
            {/* Header Right - Email and Hotlinks */}
            <Group>
                <EmailLink invert />
                <GitHubLink />
                <LinkedInLink />
            </Group>
        </Group>
    )
}

export default HeaderTabletView;