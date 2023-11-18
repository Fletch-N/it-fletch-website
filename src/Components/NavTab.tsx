import { Tabs, Title } from "@mantine/core";
import { FC, ReactNode } from "react";

interface IProps {
    label: string
    icon: ReactNode
}

const NavTab:FC<IProps> = ({label, icon}) => {
    return (
        <Tabs.Tab
            value={label}
            leftSection={icon}
            children={<Title order={3} >{label}</Title>}
        />
    )
}

export default NavTab;