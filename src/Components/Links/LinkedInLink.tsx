import { FC } from "react";
import AppLogo from "../AppLogo";

interface IProps {
    size?: number;
    invert?: boolean;
}

const LinkedInLink: FC<IProps> = ({ size, invert }) => {
    return <AppLogo
        size={size ?? 30}
        invert={invert}
        src="assets/images/LI-In-Bug.png"
        href="https://www.linkedin.com/in/fletchernichols/"
    />
}

export default LinkedInLink;