import React, { FC } from 'react'
import { Group, Text } from '@mantine/core'

export type TCertificateEntry = {
    certificate: string,
    organization: string,
}

interface IProps extends TCertificateEntry { }

const CertificateEntry: FC<IProps> = (props) => {
    return (
        <Group  >
            <Text style={{minWidth:150}} >{ props.organization}</Text>
            <Text>{ props.certificate}</Text>
        </Group>
    )
}

export default CertificateEntry