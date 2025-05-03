'use client'

import { Box, BoxProps, styled } from '@mui/material'

const DreamBookCard = styled(Box)<BoxProps>(() => ({
    padding: 16,
    position: 'relative',
    borderRadius: '16px',
    boxShadow: '0px 0px 228px rgba(140, 0, 255, 0.25)',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, #9256CA, #4400FF)',
        opacity: 0.1,
    },
    '& > *': {
        position: 'relative',
    },
}))
export default DreamBookCard
