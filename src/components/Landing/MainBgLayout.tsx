'use client'

import { Box, BoxProps, styled } from '@mui/material'

const MainBgLayout = styled(Box)<BoxProps>(({ theme }) => ({
    background: 'url(/indexbg.jpg) repeat-y center top / 100% auto',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    maxWidth: '100vw',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        backgroundSize: '200% auto',
        backgroundPosition: 'left top',
    },
}))

export default MainBgLayout
