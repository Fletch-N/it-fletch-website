import { Burger, Group, Title } from "@mantine/core";
import { FC } from "react"

interface IProps {
    opened: boolean;
    toggle: () => void;
    title: string;
}

const HeaderMobileView: FC<IProps> = ({ opened, toggle, title }) => {
    return (
        <Group id="HeaderMobileView" h="100%" px="md" hiddenFrom="sm" >
            <Burger opened={opened} onClick={toggle} size="sm" />
            <Title order={4}>{ title }</Title>
        </Group>
    )
}

export default HeaderMobileView;