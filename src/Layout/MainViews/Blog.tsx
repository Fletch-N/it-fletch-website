import { Stack } from "@mantine/core";
import BlogPost from "../../Components/BlogPost";
import BlogPost112223 from "../../BlogPosts/BlogPost112223";


const Blog = () => {
    return (
        <Stack>
            <BlogPost {...BlogPost112223} />
        </Stack>
    )
}

export default Blog;