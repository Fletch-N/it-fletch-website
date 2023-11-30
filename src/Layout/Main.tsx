import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <AppShell.Main pb={40}>
            <Outlet />
        </AppShell.Main>
    )
}

export default Main;