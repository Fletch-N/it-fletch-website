import { Burger, Group, Title } from "@mantine/core";
import { FC } from "react"
import AppLogo from "../../Components/AppLogo";

interface IProps {
    opened: boolean,
    toggle: () => void
}

const HeaderMobileView: FC<IProps> = ({ opened, toggle }) => {
    return (
        <Group id="HeaderMobileView" h="100%" px="md" hiddenFrom="sm" >
            {/* Header Left - Logo and Title */}
            <Burger opened={opened} onClick={toggle} size="sm" />
            <AppLogo invert={true} />
            <Title order={4}>Fletcher Nichols - CyberSecurity</Title>
        </Group>
    )
}

export default HeaderMobileView;