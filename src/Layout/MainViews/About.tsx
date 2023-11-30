import { Stack } from "@mantine/core";
import Intro from "../../Components/Intro";
import RecentBlogs from "../../Components/RecentBlogs";
import BlogPost112223 from "../../BlogPosts/BlogPost112223";
import BlogPost112923 from "../../BlogPosts/BlogPost112923";

const About = () => {
    return (
        <Stack pt={20} gap={40}>
            <Intro />
            <RecentBlogs {...BlogPost112923} />
            <RecentBlogs {...BlogPost112223} />
        </Stack>
    )
}

export default About;