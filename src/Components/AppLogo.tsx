import {Anchor, Image} from '@mantine/core'
import { FC } from 'react';
import './AppLogo.css'

interface IProps {
    size?: number
    src?: string
    invert?: boolean
    href?: string
}

const AppLogo: FC<IProps> = ({size=50, src="logo192.png", invert, href}) => {

    return (href
        ? <Anchor href={href} target='_blank' >
            <Image
                h={size}
                w="auto"
                fit="contain"
                src={src}
                className={invert ? "invertedLogo" : "defaultLogo"}
            />
        </Anchor>
        : <Image
            h = { size }
            w = "auto"
            fit = "contain"
            src = { src }
            className = { invert? "invertedLogo": "defaultLogo" }
        />
    )
}

export default AppLogo;