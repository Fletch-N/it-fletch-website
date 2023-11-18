import './App.css';
import Header from './Header';
import Footer from './Footer';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NavBar from './NavBar';
import Main from './Main';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {
    const [opened, { toggle }] = useDisclosure();
    const navigate = useNavigate()
    const { tabValue } = useParams();

    useEffect(() => {
        if (tabValue && tabValue.length) {
            return
        } else {
            navigate('About')
        }

    }, [tabValue, navigate])

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <Header opened={opened} toggle={toggle} />
            <NavBar toggle={toggle} />
            <Main />
            <Footer />
        </AppShell>
    )
}

export default App;