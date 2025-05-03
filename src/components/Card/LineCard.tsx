'use client'

import { FC } from 'react'

import { alpha, Box, BoxProps, styled } from '@mui/material'

const Card = styled(Box)<BoxProps>(() => ({
    borderRadius: '8px',
    // overflow: 'hidden',
    position: 'absolute',
    top: -1,
    bottom: -1,
    left: -1,
    right: -1,
    border: '1.4px solid transparent',
    background: 'linear-gradient(to bottom, #AD8EFF, #0B0029) border-box',
    mask: 'linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)',
    maskComposite: 'exclude',
}))

const LineCard: FC<BoxProps> = ({ children, ...props }) => {
    return (
        <Box sx={{ position: 'relative' }} {...props}>
            <Card></Card>
            <Box
                sx={{
                    backgroundColor: alpha('#6F90C0', 0.1),
                }}
            >
                {children}
            </Box>
        </Box>
    )
}

export default LineCard
