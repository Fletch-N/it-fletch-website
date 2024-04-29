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

const Header: FC<IProps> = ({ opened, toggle }) => {
    const largeTitle = "Fletcher Nichols - Application and Cybersecurity"
    const tabletTitle = "Fletcher Nichols - Application and Cybersecurity"
    const mobileTitle = "Application and Cybersecurity"
    
    return (
        <AppShell.Header color="dark" >
            <HeaderLargeView title={ largeTitle } />
            <HeaderTabletView title={ tabletTitle } />
            <HeaderMobileView opened={opened} toggle={toggle} title={ mobileTitle } />
        </AppShell.Header>
    )
}

export default Header;