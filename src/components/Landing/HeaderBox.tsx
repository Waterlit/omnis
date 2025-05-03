'use client'

import { FC } from 'react'

import { Box, BoxProps, Typography } from '@mui/material'

const HeaderBox: FC<BoxProps> = ({ children, ...props }) => {
    return (
        <Box {...props} position={'relative'} sx={{}}>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: '14px',
                    background:
                        'linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)), linear-gradient(0deg, rgba(255, 255, 255, 0.51), rgba(255, 255, 255, 0.51))',
                    mixBlendMode: 'overlay',
                }}
            ></Box>
            <Box
                position={'relative'}
                component={Typography}
                fontSize={{ xs: '20px', md: '26px' }}
                lineHeight={1}
                letterSpacing={'0.01em'}
                fontWeight={500}
                textTransform={'uppercase'}
                sx={{
                    border: '1px solid rgba(255, 255, 255, .1)',
                    padding: '18.5px 22px',
                    borderRadius: '14px',
                }}
            >
                {children}
            </Box>
        </Box>
    )
}

export default HeaderBox
