import { Group, Title } from "@mantine/core";
import AppLogo from "../../Components/AppLogo";
import { FC } from "react";
import EmailLink from "../../Components/Links/EmailLink";
import GitHubLink from "../../Components/Links/GitHubLink";
import LinkedInLink from "../../Components/Links/LinkedInLink";

interface IProps {
    title: string
}

const HeaderLargeView: FC<IProps> = ({ title }) => {
    return (
        <Group id="HeaderComputerView" h="100%" px="md" visibleFrom="md" justify="space-between" >
            {/* Header Left - Logo and Title */}
            <Group>
                <AppLogo invert={true} />
                <Title order={2}>{ title }</Title>
            </Group>
            {/* Header Right - Email and Hotlinks */}
            <Group>
                <EmailLink size={40} invert />
                <GitHubLink size={40} />
                <LinkedInLink size={40} />
            </Group>
        </Group>
    )
}

export default HeaderLargeView;