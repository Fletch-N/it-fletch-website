import { Group, Title } from "@mantine/core";
import AppLogo from "../../Components/AppLogo";

const HeaderTabletView = () => {

    return (
        <Group id="HeaderTabletView" h="100%" px="md" visibleFrom="sm" hiddenFrom="md" justify="space-between" >
            {/* Header Left - Logo and Title */}
            <Group>
                <AppLogo invert={true} />
                <Title order={3}>Fletcher Nichols - CyberSecurity</Title>
            </Group>
            {/* Header Right - Email and Hotlinks */}
            <Group>
                <AppLogo size={30} invert={true} src="assets/images/email.png" href="mailto:fletcher.w.nichols@gmail.com?subject=[IT-Fletch] Inquiry - " />
                <AppLogo size={30} src="assets/images/github-mark-white.png" href="https://github.com/Fletch-N" />
                <AppLogo size={30} src="assets/images/LI-In-Bug.png" href="https://www.linkedin.com/in/fletchernichols/" />
            </Group>
        </Group>
    )
}

export default HeaderTabletView;