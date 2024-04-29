import React, { FC } from 'react'
import { Text } from '@mantine/core';

export type TSummaryEntry = {
    content: string;
}

interface IProps extends TSummaryEntry { }

const SummaryEntry: FC<IProps> = (props) => {
    return (
        <Text >
            {props.content}
        </Text>
    )
}

export default SummaryEntry