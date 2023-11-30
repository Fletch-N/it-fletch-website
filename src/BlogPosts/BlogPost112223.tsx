import { Fragment } from "react";
import { BlogPostProps } from "../Components/BlogPost";
import { Text } from '@mantine/core';

const ImageRef = <Text>Photo by <a href="https://unsplash.com/@madhatterzone?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Manja Vitolic</a> on <a href="https://unsplash.com/photos/black-and-white-cat-lying-on-brown-bamboo-chair-inside-room-gKXKBY-C-Dk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></Text>

const Content = <Fragment>
    <Text> A recent lecture on Steganography had me recalling faint memories of my youth. Illegal numbers and codes disguised as images distributed across message boards and forums around the web of the early 2000s. Rumors of the agents in black suits you would find at your doorstep if you happened to save any of them for yourself. All of it centered around a forum post, “Here is the Processing Key which should work on all HD DVD discs (and maybe even Blue-Ray discs) released so far:” followed by a 16 byte hex code.</Text>
    <Text> Advanced Access Content System or AACS was the standard released by Hollywood to protect movie content distributed on DVDs and Blue-Rays from being ripped, copied, and pirated. Through the AACS, playback of content could only be handled with authorized players and video data would remain encrypted all the way until it was displayed on a physical screen. Unfortunately, every security system is only as strong as its weakest link, which in the case of AACS was computer software playback of DVDs.</Text>
    <Text>Allowing decryption to occur on a client's machine, while necessary for the ability to actually watch the DVDs, meant that the full decryption process of the DVD was occurring in the machine's memory. It didn't take long for users to begin dumping memory and scanning through the raw bytes searching for key patterns. This led to the infamous finding of the Processing Key known as 09 F9, and AACS trying to plug thousands of leaking pin holes in a water pipe with only 10 fingers. </Text>
    <Text>It's not wrong for a company to try and retrieve or protect their intellectual property. It is debatable if AACS in their methods actually did more harm than good. Every DMCA notice they filed online, chasing down anonymous users posting the Illegal Number, only seemed to invigorate the crowds participating in the spread. Steganography became the hot topic, as people sought more creative ways to hide the code inside ASCII art, sound files, and images to be disseminated. All of this culminated with the creation of the Free Speech Flag, using the Hex Values combined to create 5 distinct color bars with a trailing C0 value to be appended on the end to recreate the original AACS Key.</Text>
    <Text>AACS ultimately lost the fight to purge the internet, but left us with a valuable lesson on handling breaches involving public release of confidential information. Whether or not people had the right to leak the information was never the problem that needed to be solved. The fact that leaks were even possible was a massive engineering problem, and a better focus of the AACS would have been funneling all of the legal resources from ongoing lawsuits into better research and development. Once the information hit public internet, no amount of suing was ever going to put it back.</Text>
</Fragment>

const BlogPost112223: BlogPostProps = {
    header: {
        backgroundImage: "/assets/images/blog-headers/112223.jpg",
        imageRef: ImageRef,
        title: "The Cat's Out of the Bag"
    },
    body: {
        author: "Fletcher Nichols",
        date: "11-22-23",
        keywords: ["drm", "aacs", "steganography", "cryptography"],
        content: Content
    },
    footer: {
    },
    
}

export default BlogPost112223;