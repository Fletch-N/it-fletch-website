import "./Header.css";
import { AppShell } from "@mantine/core";
import { FC } from "react";
import HeaderMobileView from "./HeaderViews/HeaderMobileView";
import HeaderTabletView from "./HeaderViews/HeaderTabletView";
import HeaderLargeView from "./HeaderViews/HeaderLargeView";

interface IProps {
    opened: boolean,
    toggle: () => void
}

const Header: FC<IProps> = ({opened, toggle}) => {
    return (
        <AppShell.Header color="dark" >
            <HeaderLargeView />
            <HeaderTabletView />
            <HeaderMobileView opened={opened} toggle={toggle} />
        </AppShell.Header>
    )
}

export default Header;