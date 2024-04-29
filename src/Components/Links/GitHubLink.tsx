import { FC } from "react";
import AppLogo from "../AppLogo";

interface IProps {
    size?: number;
    invert?: boolean;
}

const GitHubLink: FC<IProps> = ({ size, invert }) => {
    return <AppLogo
        size={size ?? 30}
        invert={invert}
        src="assets/images/github-mark-white.png"
        href="https://github.com/Fletch-N"
    />
}

export default GitHubLink;