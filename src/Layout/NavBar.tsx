import { AppShell, Tabs } from "@mantine/core"
import {
    IconUserSearch,
    IconLicense,
    IconSubtask,
    // IconArticle,
    IconAddressBook,
    IconServer
} from '@tabler/icons-react';
import NavTab from "../Components/NavTab";
import "./NavBar.css";
import { FC } from "react";
import { NavigateFunction } from "react-router-dom";

interface IProps {
    toggle: () => void
    path: string
    navigate: NavigateFunction
}

const NavBar: FC<IProps> = (props) => {
    const {toggle, path, navigate} = props

    const handleChange = (value: string | null) => {
        navigate(`/${value}`)
        toggle()
    }

    return (
        <AppShell.Navbar p={'md'} >
            <Tabs
                value={path}
                defaultValue={"About"}
                onChange={handleChange}
                orientation="vertical"
                placement="right"
                variant="outline"
            >
                <Tabs.List className="navbar-tablist" >
                    <NavTab label="About" icon={<IconUserSearch />} />
                    <NavTab label="Resume" icon={<IconLicense />} />
                    <NavTab label="Works" icon={<IconSubtask />} />
                    {/* <NavTab label="Blog" icon={<IconArticle />} /> */}
                    <NavTab label="Resources" icon={<IconServer />} />
                    <NavTab label="Contact" icon={<IconAddressBook />} />
                </Tabs.List>
            </Tabs>
        </AppShell.Navbar>
    )
}

export default NavBar;