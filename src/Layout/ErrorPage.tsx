import { Button, Code, Container, Stack, Title } from "@mantine/core";
import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError() as any;
    const navigate = useNavigate()
    console.error(error);

    return (
        <Container id={"errorPage"} pt={80} >
            <Stack >
                <Title >Oops!</Title>
                <Title order={3}>Sorry, an unexpected error has occurred</Title>
                <Title order={3}>{error.status} - <i>{error.statusText || error.message}</i></Title>
                <Code block >
                    {JSON.stringify(error, null, 2)}
                </Code>
                <Button onClick={() => navigate('/')} >GO BACK</Button>
            </Stack>
        </Container >
    );
}

export default ErrorPage;