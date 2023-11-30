import { Fragment } from "react";
import { BlogPostProps } from "../Components/BlogPost";
import { Text } from '@mantine/core';

const ImageRef = <Text>Photo by <a href="https://unsplash.com/@tetromino?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Fractal Hassan</a> on <a href="https://unsplash.com/photos/red-ball-with-purple-aura-digital-wallpaper-XoNj0ulsn1Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </Text>

const Content = <Fragment>
    <Text>Quantum Computing poses a very real threat to current cryptographic methods in use. Unfortunately, it has been very hard to quantify exactly how looming a threat Quantum actually is, with how shrouded in marketing smoke and mirrors the field has become. With no standardized compute metrics, or tangible goal lines on actually functionally relevant systems, we are left with doomsday prophecies, but no clear metrics to run risk analysis off of. Fortunately, NIST is well along on the process of clearing things up. </Text>
</Fragment>

const BlogPost112923: BlogPostProps = {
    header: {
        backgroundImage: "/assets/images/blog-headers/112923.jpg",
        imageRef: ImageRef,
        title: "Preparing for Quantum"
    },
    body: {
        author: "Fletcher Nichols",
        date: "11-29-23",
        keywords: ["cryptography", "quantum", "nist", "pqc"],
        content: Content
    },
    footer: {
    },
    
}

export default BlogPost112923;