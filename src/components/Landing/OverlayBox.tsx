'use client'

import { FC } from 'react'

import { Box, BoxProps, Typography } from '@mui/material'

const OverlayBox: FC<BoxProps> = ({ children, ...props }) => {
    return (
        <Box {...props} position={'relative'} sx={{}}>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: '12px',
                    background:
                        'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
                    mixBlendMode: 'overlay',
                }}
            ></Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: '12px',
                    backdropFilter: 'blur(9px)',
                }}
            ></Box>
            <Box
                position={'relative'}
                component={Typography}
                fontSize={{ xs: '20px', md: '18px' }}
                lineHeight={1.6}
                letterSpacing={'0.01em'}
                fontWeight={500}
                sx={(theme) => ({
                    border: '1px solid rgba(255, 255, 255, .1)',
                    padding: '14px',
                    borderRadius: '12px',
                    color: { md: '#3CCFFB' },
                    [theme.breakpoints.down('md')]: {
                        textTransform: 'uppercase',
                        textAlign: 'center',
                    },
                })}
            >
                {children}
            </Box>
        </Box>
    )
}

export default OverlayBox
