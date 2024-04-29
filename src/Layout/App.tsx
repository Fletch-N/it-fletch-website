import './App.css';
import Header from './Header';
import Footer from './Footer';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NavBar from './NavBar';
import Main from './Main';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {
    const [opened, { toggle }] = useDisclosure();
    const navigate = useNavigate()
    const { pathname } = useLocation();
    const path = pathname.substring(1)

    useEffect(() => {
        console.log("useEffect: App.tsx")
        if (!path) {
            console.log("Redirect")
            navigate("/About")
        }
    }, [path, navigate])

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <Header opened={opened} toggle={toggle} />
            <NavBar toggle={toggle} path={path} navigate={navigate} />
            <Main />
            <Footer />
        </AppShell>
    )
}

export default App;