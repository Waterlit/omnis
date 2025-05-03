'use client'

import Image from 'next/image'
import { FC } from 'react'

import { Box, styled } from '@mui/material'
import { BoxProps, GridProps } from '@mui/system'

// const Card = styled(Grid)<GridProps>(({ theme }) => ({
//     backgroundColor: alpha('#BAC1CC', 0.1),
//     minHeight: '153px',
//     display: 'flex',
//     alignItems: 'flex-end',
//     borderRadius: '16px',
//     position: 'relative',
//     color: 'white',
//     textDecoration: 'none',
// }))

const Corner = styled(Box)<BoxProps>(() => ({
    position: 'absolute',
    width: '45px',
    height: '37.81px',
    zIndex: 2,
    '&.topRight': {
        right: -7,
        top: -7,
    },
    '&.topLeft': {
        left: -7,
        top: -7,
    },
    '&.bottomLeft': {
        left: -7,
        bottom: -7,
    },
    '&.bottomRight': {
        right: -7,
        bottom: -7,
    },
    '&.topCenter, &.bottomCenter': {
        width: 135,
        height: 26,
        left: '50%',
        transform: 'translateX(-50%)',
    },
    '&.topCenter': {
        top: -26,
    },
    '&.bottomCenter': {
        bottom: -26,
    },
}))

export type CornerType =
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'topCenter'
    | 'bottomCenter'

type Props = BoxProps & {
    corners?: CornerType[]
    size?: GridProps['size']
    color?: 'white'
}

const cornersDefault: CornerType[] = [
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
]

const CardDecoration: FC<Props> = ({
    children,
    corners = cornersDefault,
    color,
    ...props
}) => (
    <Box {...props} position={'relative'}>
        {corners.map((it) => (
            <Corner key={it} className={`${it} corner`}>
                <Image
                    fill
                    style={{
                        objectFit: 'contain',
                    }}
                    alt="corner pic"
                    src={`/corners${color ? '-' + color : ''}/${it}.svg`}
                ></Image>
            </Corner>
        ))}
        {children}
    </Box>
)

export default CardDecoration
