import { Stack } from "@mantine/core";
import BlogPost from "../../Components/BlogPost";
import BlogPost112223 from "../../BlogPosts/BlogPost112223";
import BlogPost112923 from "../../BlogPosts/BlogPost112923";


const Blog = () => {
    return (
        <Stack>
            <BlogPost {...BlogPost112923} />
            <BlogPost {...BlogPost112223} />
        </Stack>
    )
}

export default Blog;