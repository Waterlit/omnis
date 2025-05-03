'use client'

import { FC } from 'react'

import { Box, BoxProps } from '@mui/material'

import CardSemiTransparent from './CardSemiTransparent'

const CardSemiTransparentBordered: FC<
    BoxProps & { wrapperProps?: BoxProps }
> = ({ children, wrapperProps, ...props }) => {
    return (
        <CardSemiTransparent
            position="relative"
            width={'100%'}
            height={'100%'}
            {...props}
        >
            <Box
                className="overlay"
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: '16px',
                    background:
                        'linear-gradient(180deg, rgba(209, 233, 255, 0.2) 0%, rgba(82, 91, 141, 0.2) 54.16%)',
                    border: '1.4px solid transparent',
                    mask: 'linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)',
                    maskComposite: 'exclude',
                }}
            ></Box>

            <Box
                {...wrapperProps}
                sx={{
                    position: 'relative',
                    zIndex: 2,
                }}
                width={'100%'}
            >
                {children}
            </Box>
        </CardSemiTransparent>
    )
}

export default CardSemiTransparentBordered
