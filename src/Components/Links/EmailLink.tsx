import { FC } from "react";
import AppLogo from "../AppLogo";

interface IProps {
    size?: number;
    invert?: boolean;
}

const EmailLink: FC<IProps> = ({size, invert}) => { 
    return <AppLogo
        size={size ?? 30}
        invert={invert}
        src="assets/images/email.png"
        href="mailto:fletcher.w.nichols@gmail.com?subject=[IT-Fletch] Inquiry - "
    />
}

export default EmailLink;